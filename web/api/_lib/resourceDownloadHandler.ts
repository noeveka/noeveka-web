// Shared resource download gate handler using standard Web Request / Response and Resend REST API
import {
  renderResourceDownloadTeamNotificationEmail,
  renderResourceDownloadUserConfirmationEmail,
} from "./email-templates";

export interface ResourceDownloadRequestBody {
  name: string;
  email: string;
  consent: boolean;
  resourceTitle?: string;
  resourceId?: string;
  pdfUrl?: string | null;
}

export async function handleResourceDownloadSubmission(
  body: ResourceDownloadRequestBody,
  env: {
    RESEND_API_KEY?: string;
    CONTACT_INBOX_EMAIL?: string;
    FROM_EMAIL?: string;
    RESEND_AUDIENCE_ID?: string;
    LOGO_ICON_URL?: string;
    LOGO_TEXT_URL?: string;
  }
) {
  const { name, email, consent, resourceTitle = "Resource Document", resourceId, pdfUrl } = body;

  // 1. Strict Validation per User Flow
  if (!name?.trim()) {
    return { status: 400, body: { error: "Name is required." } };
  }
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 400, body: { error: "A valid email address is required." } };
  }
  if (!consent) {
    return { status: 400, body: { error: "Consent is required to download this resource." } };
  }

  const resendApiKey = env.RESEND_API_KEY;
  const toEmail = env.CONTACT_INBOX_EMAIL || "team@noeveka.com";
  const fromEmail = env.FROM_EMAIL || "Noeveka Website <onboarding@resend.dev>";
  const audienceId = env.RESEND_AUDIENCE_ID;

  if (!resendApiKey) {
    console.warn("[Resource Download API] RESEND_API_KEY is not set. Simulating success in development.");
    return {
      status: 200,
      body: {
        success: true,
        message: "Resource unlocked (dev mode: RESEND_API_KEY not configured)",
      },
    };
  }

  // 2. Add Lead to Resend Contacts (Audience)
  try {
    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0] || name;
    const lastName = nameParts.slice(1).join(" ") || "";

    const contactsEndpoint = audienceId
      ? `https://api.resend.com/audiences/${audienceId}/contacts`
      : "https://api.resend.com/contacts";

    await fetch(contactsEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.trim(),
        first_name: firstName,
        last_name: lastName,
        unsubscribed: false,
      }),
    });
  } catch (err) {
    console.warn("[Resource Download API] Failed to add contact to Resend Audience:", err);
  }

  // 3. Render HTML Templates
  const teamEmailHtml = renderResourceDownloadTeamNotificationEmail({
    name,
    email,
    resourceTitle,
    resourceId,
    logoIconUrl: env.LOGO_ICON_URL,
    logoTextUrl: env.LOGO_TEXT_URL,
  });

  const userConfirmationHtml = renderResourceDownloadUserConfirmationEmail({
    name,
    resourceTitle,
    pdfUrl,
    logoIconUrl: env.LOGO_ICON_URL,
    logoTextUrl: env.LOGO_TEXT_URL,
  });

  // 4. Send Notifications in parallel
  try {
    await Promise.allSettled([
      // 4A. Team notification
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: `New Lead Download: ${name} downloaded "${resourceTitle}"`,
          html: teamEmailHtml,
        }),
      }),

      // 4B. User confirmation copy with direct download link
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [email.trim()],
          reply_to: toEmail,
          subject: `Your download: ${resourceTitle} — Noeveka`,
          html: userConfirmationHtml,
        }),
      }),
    ]);

    return {
      status: 200,
      body: { success: true, message: "Resource unlocked successfully." },
    };
  } catch (err: unknown) {
    console.error("[Resource Download API] Error:", err);
    return {
      status: 200,
      body: { success: true, message: "Resource unlocked." },
    };
  }
}
