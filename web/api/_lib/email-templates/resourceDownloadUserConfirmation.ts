import { BRAND } from "./constants";

export interface ResourceDownloadUserConfirmationProps {
  name: string;
  resourceTitle: string;
  pdfUrl?: string | null;
  logoIconUrl?: string;
  logoTextUrl?: string;
}

export function renderResourceDownloadUserConfirmationEmail({
  name,
  resourceTitle,
  pdfUrl,
  logoIconUrl = BRAND.logoIconUrl,
  logoTextUrl = BRAND.logoTextUrl,
}: ResourceDownloadUserConfirmationProps): string {
  const firstName = name.trim().split(" ")[0] || name;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your resource download</title>
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
      margin: 0 0 20px 0;
    }
    .resource-card {
      background-color: #faf9f7;
      border: 1px solid #e8e5dd;
      border-radius: 8px;
      padding: 22px;
      margin: 24px 0;
    }
    .resource-title {
      font-size: 16px;
      font-weight: 700;
      color: #111827;
      margin: 0 0 14px 0;
    }
    .button {
      display: inline-block;
      background-color: #f65d01;
      color: #ffffff !important;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      padding: 11px 22px;
      border-radius: 6px;
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

    <!-- Main Content -->
    <div class="content">
      <h1 class="heading">Here is your resource, ${firstName}.</h1>
      
      <p class="text">
        Thank you for accessing our advisory publications. You can download and keep your copy of <strong>${resourceTitle}</strong> below anytime.
      </p>

      <div class="resource-card">
        <div class="resource-title">📄 ${resourceTitle}</div>
        ${
          pdfUrl
            ? `<a href="${pdfUrl}" target="_blank" rel="noopener noreferrer" class="button">Download Resource PDF</a>`
            : `<p style="margin: 0; font-size: 13px; color: #6b7280;">Your resource PDF is available directly on our website.</p>`
        }
      </div>

      <p class="text" style="font-size: 14px; color: #6b7280;">
        Have questions or looking to explore how these findings apply to your roadmap? Feel free to reply directly to this email or visit our <a href="${BRAND.websiteUrl}/contact" style="color: #f65d01;">contact page</a>.
      </p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div style="color: #4b5563; font-weight: 500; margin-bottom: 4px;">Noeveka Advisory & Strategy</div>
      <div>Empowering strategic decisions through independent market advisory.</div>
      <div style="margin-top: 8px;">
        <a href="${BRAND.websiteUrl}">Website</a> • <a href="${BRAND.websiteUrl}/resources">Resources</a> • <a href="${BRAND.websiteUrl}/contact">Contact</a>
      </div>
    </div>
  </div>
</body>
</html>
`;
}
