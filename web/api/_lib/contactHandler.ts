// Shared contact form handler using standard Web Request / Response and Resend REST API
import {
  renderContactTeamNotificationEmail,
  renderContactUserConfirmationEmail,
} from "./email-templates";

export interface ContactRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  countryCode?: string;
  phone?: string;
  message: string;
  services?: string[];
}

export async function handleContactSubmission(
  body: ContactRequestBody,
  env: {
    RESEND_API_KEY?: string;
    CONTACT_INBOX_EMAIL?: string;
    FROM_EMAIL?: string;
    RESEND_AUDIENCE_ID?: string;
    LOGO_ICON_URL?: string;
    LOGO_TEXT_URL?: string;
  }
) {
  const { firstName, lastName, email, countryCode = "US", phone = "", message, services = [] } = body;

  // 1. Validation
  if (!firstName?.trim()) {
    return { status: 400, body: { error: "First name is required." } };
  }
  if (!lastName?.trim()) {
    return { status: 400, body: { error: "Last name is required." } };
  }
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 400, body: { error: "A valid email address is required." } };
  }
  if (!message?.trim()) {
    return { status: 400, body: { error: "Message is required." } };
  }

  const resendApiKey = env.RESEND_API_KEY;
  const toEmail = env.CONTACT_INBOX_EMAIL || "team@noeveka.com";
  // Default to Resend testing sender if custom domain is not yet verified
  const fromEmail = env.FROM_EMAIL || "Noeveka Website <onboarding@resend.dev>";

  if (!resendApiKey) {
    console.warn("[Contact API] RESEND_API_KEY is not set. Simulating success in development.");
    return {
      status: 200,
      body: {
        success: true,
        message: "Message received (dev mode: RESEND_API_KEY not configured)",
      },
    };
  }

  const fullName = `${firstName} ${lastName}`.trim();

  // 2. Automatically add Lead to Resend Contacts (Audience)
  try {
    const contactsEndpoint = env.RESEND_AUDIENCE_ID
      ? `https://api.resend.com/audiences/${env.RESEND_AUDIENCE_ID}/contacts`
      : "https://api.resend.com/contacts";

    await fetch(contactsEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.trim(),
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        unsubscribed: false,
      }),
    });
  } catch (err) {
    console.warn("[Contact API] Failed to add contact to Resend Audience:", err);
  }

  // 3. Generate HTML Templates
  const teamEmailHtml = renderContactTeamNotificationEmail({
    firstName,
    lastName,
    email,
    countryCode,
    phone,
    message,
    services,
    logoIconUrl: env.LOGO_ICON_URL,
    logoTextUrl: env.LOGO_TEXT_URL,
  });

  const userConfirmationHtml = renderContactUserConfirmationEmail({
    firstName,
    lastName,
    message,
    services,
    logoIconUrl: env.LOGO_ICON_URL,
    logoTextUrl: env.LOGO_TEXT_URL,
  });

  // 4. Dispatch Email to Noeveka Inbox & User Confirmation Auto-Reply in parallel
  try {
    const [teamRes, userRes] = await Promise.allSettled([
      // 4A. Notification to Noeveka team
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
          subject: `New Lead: ${fullName} sent a message on Noeveka`,
          html: teamEmailHtml,
        }),
      }),

      // 4B. Immediate confirmation email to the user
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
          subject: `We received your message — Noeveka`,
          html: userConfirmationHtml,
        }),
      }),
    ]);

    if (teamRes.status === "fulfilled" && !teamRes.value.ok) {
      const errText = await teamRes.value.text();
      console.error("[Contact API] Resend Team Email error:", errText);
    }

    if (userRes.status === "fulfilled" && !userRes.value.ok) {
      const userErrText = await userRes.value.text();
      console.warn("[Contact API] Resend User Confirmation error:", userErrText);
    }

    return {
      status: 200,
      body: { success: true, message: "Thanks, we'll be in touch." },
    };
  } catch (err: unknown) {
    console.error("[Contact API] Unexpected error:", err);
    return {
      status: 500,
      body: { error: "Internal error processing request." },
    };
  }
}
