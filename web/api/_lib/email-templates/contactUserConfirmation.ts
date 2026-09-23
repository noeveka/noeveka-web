import { BRAND } from "./constants.ts";

export interface ContactUserConfirmationProps {
  firstName: string;
  lastName?: string;
  message?: string;
  services?: string[];
  logoIconUrl?: string;
  logoTextUrl?: string;
}

export function renderContactUserConfirmationEmail({
  firstName,
  message,
  services = [],
  logoIconUrl = BRAND.logoIconUrl,
  logoTextUrl = BRAND.logoTextUrl,
}: ContactUserConfirmationProps): string {
  const safeMessage = message ? message.replace(/</g, "&lt;").replace(/>/g, "&gt;") : "";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>We received your message</title>
  <style>
    body {
      margin: 0;
      padding: 40px 16px;
      background-color: #f5f5f7;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #111827;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      max-width: 560px;
      margin: 0 auto;
      background-color: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.03);
    }
    .header {
      padding: 24px 32px;
      border-bottom: 1px solid #f0f0f2;
      background-color: #ffffff;
    }
    .content {
      padding: 36px 32px;
    }
    .heading {
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: #111827;
      margin: 0 0 16px 0;
      line-height: 1.3;
    }
    .text {
      font-size: 15px;
      line-height: 1.65;
      color: #374151;
      margin: 0 0 16px 0;
    }
    .divider {
      height: 1px;
      background-color: #f0f0f2;
      margin: 28px 0;
      border: none;
    }
    .summary-title {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #6b7280;
      margin: 0 0 12px 0;
    }
    .message-quote {
      border-left: 3px solid #f65d01;
      padding-left: 14px;
      margin: 12px 0 0 0;
      font-size: 14px;
      line-height: 1.6;
      color: #4b5563;
      font-style: italic;
    }
    .pill {
      display: inline-block;
      font-size: 12px;
      font-weight: 600;
      color: #111827;
      background-color: #f3f4f6;
      padding: 4px 10px;
      border-radius: 4px;
      margin-right: 6px;
      margin-bottom: 6px;
    }
    .footer {
      padding: 24px 32px;
      background-color: #fafafa;
      border-top: 1px solid #f0f0f2;
      font-size: 12px;
      line-height: 1.6;
      color: #9ca3af;
      text-align: center;
    }
    .footer a {
      color: #6b7280;
      text-decoration: none;
    }
    .footer a:hover {
      text-decoration: underline;
    }
    @media only screen and (max-width: 480px) {
      .header, .content, .footer {
        padding-left: 20px;
        padding-right: 20px;
      }
      .heading {
        font-size: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <!-- Header with Prominent Logo -->
    <div class="header">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="vertical-align: middle; padding-right: 12px;">
            <img src="${logoIconUrl}" alt="Noeveka Icon" width="34" height="34" style="display: block; width: 34px; height: 34px; object-fit: contain;" />
          </td>
          <td style="vertical-align: middle;">
            <img src="${logoTextUrl}" alt="NOEVEKA" height="22" style="display: block; height: 22px; object-fit: contain;" />
          </td>
        </tr>
      </table>
    </div>

    <!-- Main Body -->
    <div class="content">
      <h1 class="heading">Thanks for reaching out, ${firstName}.</h1>
      
      <p class="text">
        We have received your message. Our advisory team is reviewing your requirements and will get in touch with you within <strong>1 business day</strong>.
      </p>

      <p class="text">
        If you have any immediate questions or additional information to share, feel free to reply directly to this email.
      </p>

      ${
        services.length > 0 || safeMessage
          ? `
        <hr class="divider" />
        <p class="summary-title">Summary of your inquiry</p>
        ${
          services.length > 0
            ? `<div style="margin-bottom: 14px;">
                ${services.map((s) => `<span class="pill">${s}</span>`).join(" ")}
              </div>`
            : ""
        }
        ${
          safeMessage
            ? `<div class="message-quote">"${safeMessage}"</div>`
            : ""
        }
      `
          : ""
      }
    </div>

    <!-- Footer -->
    <div class="footer">
      <div style="color: #4b5563; font-weight: 500; margin-bottom: 4px;">Noeveka Advisory & Strategy</div>
      <div>Empowering strategic decisions through independent market advisory.</div>
      <div style="margin-top: 8px;">
        <a href="${BRAND.websiteUrl}">Website</a> • <a href="${BRAND.websiteUrl}/about">About</a> • <a href="${BRAND.websiteUrl}/resources">Resources</a>
      </div>
    </div>
  </div>
</body>
</html>
`;
}
