import { BRAND } from "./constants.js";

export interface NewsletterConfirmationProps {
  logoIconUrl?: string;
  logoTextUrl?: string;
}

export function renderNewsletterConfirmationEmail({
  logoIconUrl = BRAND.logoIconUrl,
  logoTextUrl = BRAND.logoTextUrl,
}: NewsletterConfirmationProps): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You're on the Noeveka list</title>
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
    .hero {
      padding: 40px 32px 32px;
      text-align: center;
      background: linear-gradient(160deg, #fff8f5 0%, #ffffff 60%);
      border-bottom: 1px solid #f0f0f2;
    }
    .hero-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      background-color: #fff0e8;
      border-radius: 50%;
      margin-bottom: 20px;
    }
    .content {
      padding: 32px 32px 36px;
    }
    .heading {
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: #111827;
      margin: 0 0 12px 0;
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
      margin: 24px 0;
      border: none;
    }
    .list-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 12px;
      font-size: 14px;
      color: #4b5563;
      line-height: 1.5;
    }
    .bullet {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #f65d01;
      margin-top: 7px;
      flex-shrink: 0;
    }
    .cta-btn {
      display: inline-block;
      background-color: #f65d01;
      color: #ffffff !important;
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      padding: 12px 28px;
      border-radius: 100px;
      margin-top: 4px;
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
      .header, .hero, .content, .footer {
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
    <!-- Header -->
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

    <!-- Hero -->
    <div class="hero">
      <div class="hero-icon">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f65d01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14z"></path>
        </svg>
      </div>
      <h1 style="font-size: 24px; font-weight: 700; color: #111827; margin: 0 0 8px; letter-spacing: -0.02em;">You're on the list.</h1>
      <p style="font-size: 15px; color: #6b7280; margin: 0;">Welcome to Noeveka's inner circle.</p>
    </div>

    <!-- Body -->
    <div class="content">
      <p class="text">
        Thanks for subscribing. We'll keep you informed with strategic insights, industry signals, and resources that matter — no noise, no spam.
      </p>

      <hr class="divider" />

      <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; margin: 0 0 16px;">What to expect</p>

      <div class="list-item"><span class="bullet"></span><span><strong>Market intelligence</strong> — curated analysis on trends shaping your sector.</span></div>
      <div class="list-item"><span class="bullet"></span><span><strong>Free resources</strong> — reports, guides, and frameworks, delivered first to subscribers.</span></div>
      <div class="list-item"><span class="bullet"></span><span><strong>Strategic perspectives</strong> — direct thoughts from our advisory team.</span></div>

      <hr class="divider" />

      <p class="text" style="margin-bottom: 20px;">
        In the meantime, explore our resource library for insights you can act on today.
      </p>

      <a href="${BRAND.websiteUrl}/resources" class="cta-btn">Browse Resources &rarr;</a>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div style="color: #4b5563; font-weight: 500; margin-bottom: 4px;">Noeveka Advisory &amp; Strategy</div>
      <div>Empowering strategic decisions through independent market advisory.</div>
      <div style="margin-top: 8px;">
        <a href="${BRAND.websiteUrl}">Website</a> &bull; <a href="${BRAND.websiteUrl}/about">About</a> &bull; <a href="${BRAND.websiteUrl}/resources">Resources</a>
      </div>
      <div style="margin-top: 12px; font-size: 11px; color: #d1d5db;">
        You subscribed via the Noeveka website. If this was a mistake, simply ignore this email.
      </div>
    </div>
  </div>
</body>
</html>
`;
}
