import { BRAND } from "./constants";

export interface ContactTeamNotificationProps {
  firstName: string;
  lastName: string;
  email: string;
  countryCode?: string;
  phone?: string;
  message: string;
  services?: string[];
  logoIconUrl?: string;
  logoTextUrl?: string;
}

export function renderContactTeamNotificationEmail({
  firstName,
  lastName,
  email,
  countryCode = "US",
  phone = "",
  message,
  services = [],
  logoIconUrl = BRAND.logoIconUrl,
  logoTextUrl = BRAND.logoTextUrl,
}: ContactTeamNotificationProps): string {
  const fullName = `${firstName} ${lastName}`.trim();
  const formattedPhone = phone ? `${countryCode} ${phone}` : "Not provided";
  const safeMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const formattedServices =
    services.length > 0
      ? services
          .map(
            (s) =>
              `<span style="display:inline-block;background:#f3f4f6;color:#111827;font-size:12px;font-weight:600;padding:3px 9px;border-radius:4px;margin:2px 4px 2px 0;">${s}</span>`
          )
          .join(" ")
      : '<span style="color:#9ca3af;font-size:13px;">None selected</span>';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Lead</title>
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
      padding: 32px;
    }
    .badge {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #f65d01;
      background-color: rgba(246, 93, 1, 0.08);
      padding: 4px 10px;
      border-radius: 4px;
      margin-bottom: 14px;
    }
    .heading {
      font-size: 22px;
      font-weight: 700;
      color: #111827;
      margin: 0 0 24px 0;
      letter-spacing: -0.02em;
      line-height: 1.25;
    }
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
    }
    .data-table td {
      padding: 10px 0;
      font-size: 14px;
      vertical-align: top;
      border-bottom: 1px solid #f3f4f6;
    }
    .data-label {
      width: 110px;
      color: #6b7280;
      font-weight: 500;
    }
    .data-val {
      color: #111827;
      font-weight: 600;
    }
    .data-val a {
      color: #f65d01;
      text-decoration: none;
    }
    .section-title {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #6b7280;
      margin: 0 0 8px 0;
    }
    .message-container {
      padding: 16px 18px;
      background-color: #faf9f7;
      border: 1px solid #e8e5dd;
      border-radius: 8px;
      font-size: 14px;
      line-height: 1.6;
      color: #1f2937;
      white-space: pre-wrap;
    }
    .footer {
      padding: 20px 32px;
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
        font-size: 19px;
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

    <!-- Main Content -->
    <div class="content">
      <span class="badge">Contact Form Submission</span>
      <h1 class="heading">New Inquiry from ${fullName}</h1>

      <table class="data-table">
        <tr>
          <td class="data-label">Name</td>
          <td class="data-val">${fullName}</td>
        </tr>
        <tr>
          <td class="data-label">Email</td>
          <td class="data-val"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td class="data-label">Phone</td>
          <td class="data-val">${formattedPhone}</td>
        </tr>
        <tr>
          <td class="data-label">Services</td>
          <td class="data-val">${formattedServices}</td>
        </tr>
      </table>

      <div class="section-title">Message</div>
      <div class="message-container">${safeMessage}</div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div style="color: #4b5563; font-weight: 500; margin-bottom: 4px;">Noeveka Advisory & Strategy</div>
      <div>Reply directly to this email to get in touch with <strong>${fullName}</strong>.</div>
      <div style="margin-top: 8px;">
        <a href="${BRAND.websiteUrl}">Website</a> • <a href="${BRAND.websiteUrl}/contact">Contact</a>
      </div>
    </div>
  </div>
</body>
</html>
`;
}
