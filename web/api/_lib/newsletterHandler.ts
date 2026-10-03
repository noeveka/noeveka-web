// Shared newsletter subscription handler - registers email into Resend Audience
import { renderNewsletterConfirmationEmail } from "./email-templates/index.js";

export interface NewsletterRequestBody {
  email: string;
}

export async function handleNewsletterSubscription(
  body: NewsletterRequestBody,
  env: {
    RESEND_API_KEY?: string;
    RESEND_AUDIENCE_ID?: string;
    FROM_EMAIL?: string;
    LOGO_ICON_URL?: string;
    LOGO_TEXT_URL?: string;
  }
) {
  const { email } = body;

  // 1. Validation
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: 400,
      body: { error: "A valid email address is required." },
    };
  }

  const resendApiKey = env.RESEND_API_KEY;
  const fromEmail = env.FROM_EMAIL || "Noeveka <onboarding@resend.dev>";

  if (!resendApiKey) {
    console.warn(
      "[Newsletter API] RESEND_API_KEY is not set. Simulating success in development."
    );
    return {
      status: 200,
      body: {
        success: true,
        message: "Subscribed (dev mode: RESEND_API_KEY not configured)",
      },
    };
  }

  // 2. Add contact to Resend Audience (idempotent - Resend de-dupes by email)
  try {
    const contactsEndpoint = env.RESEND_AUDIENCE_ID
      ? `https://api.resend.com/audiences/${env.RESEND_AUDIENCE_ID}/contacts`
      : "https://api.resend.com/contacts";

    const audienceRes = await fetch(contactsEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.trim(),
        unsubscribed: false,
      }),
    });

    if (!audienceRes.ok) {
      const errText = await audienceRes.text();
      console.error("[Newsletter API] Resend Audience error:", errText);
    }
  } catch (err: unknown) {
    console.warn(
      "[Newsletter API] Failed to add contact to Resend Audience:",
      err
    );
  }

  // 3. Send welcome/confirmation email to subscriber
  try {
    const confirmationHtml = renderNewsletterConfirmationEmail({
      logoIconUrl: env.LOGO_ICON_URL,
      logoTextUrl: env.LOGO_TEXT_URL,
    });

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [email.trim()],
        subject: "You're on the list - Noeveka",
        html: confirmationHtml,
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.warn(
        "[Newsletter API] Resend confirmation email error:",
        errText
      );
    }
  } catch (err: unknown) {
    console.warn("[Newsletter API] Failed to send confirmation email:", err);
  }

  return {
    status: 200,
    body: { success: true, message: "You're on the list!" },
  };
}
