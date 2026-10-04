/**
 * footer.config.ts - static fallback data for the Footer component.
 * Remove a ?? FOOTER_CONFIG.* to test whether Sanity is returning that field.
 */

export const FOOTER_CONFIG = {
  logoIconFallbackUrl:
    "https://res.cloudinary.com/dd5elqfus/image/upload/v1788154826/noeveka_logo_dark_jph2va.png",
  logoIconAlt: "",

  // logoTextFallbackUrl: "/assets/logos/noeveka_black_text_logo.png",
  logoTextFallbackUrl: "/assets/logos/noeveka_final_name_logo.png",
  logoTextAlt: "Noeveka",

  tagline:
    "At Noeveka, we believe enterprises deserve more than expensive tools with poor architecture - we deliver clarity, authority, and real impact.",

  socialLinks: [
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/company/noeveka/home/",
    },
    { platform: "X / Twitter", href: "#" },
    {
      platform: "YouTube",
      href: "https://www.linkedin.com/company/noeveka/home/",
    },
    { platform: "Instagram", href: "https://www.instagram.com/noeveka.ai" },
  ],

  companyColumnHeading: "Company",
  companyLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],

  servicesColumnHeading: "Services",
  servicesLinks: [
    {
      label: "Data & AI Architecture",
      href: "/services/enterprise-data-ai-architecture",
    },
    {
      label: "AI & Agentic Systems",
      href: "/services/enterprise-ai-agentic-systems",
    },
    {
      label: "AI Governance & Assurance",
      href: "/services/ai-governance-architecture-assurance",
    },
    {
      label: "Transformation Advisory",
      href: "/services/data-ai-transformation-advisory",
    },
  ],

  contactHeading: "Contact",
  contactEmail: "connect@noeveka.com",
  contactPhone: "+91 98765 43210",
  contactAddress: "India · Serving Global Enterprise Teams",

  newsletterTag: "STAY UPDATED",
  newsletterHeading: "Join our newsletter",
  newsletterSubtext:
    "Get the latest insights on data, AI architecture, resources and product updates - straight to your inbox.",
  newsletterPlaceholder: "connect@noeveka.com",

  copyrightText: "© {year} Noeveka Data & AI Solutions. All rights reserved.",

  footerNavLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
