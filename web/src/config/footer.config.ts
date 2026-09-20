/**
 * footer.config.ts — static fallback data for the Footer component.
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
    "At Noeveka, we believe enterprises deserve more than expensive tools with poor architecture — we deliver clarity, authority, and real impact.",

  socialLinks: [
    { platform: "LinkedIn", href: "#" },
    { platform: "X / Twitter", href: "#" },
    { platform: "YouTube", href: "#" },
    { platform: "Instagram", href: "#" },
  ],

  companyColumnHeading: "Company",
  companyLinks: [
    { label: "About Us", href: "#" },
    { label: "Our Approach", href: "#" },
    { label: "Workshops", href: "#" },
    { label: "Bootcamps", href: "#" },
    { label: "Latest Blog", href: "#" },
  ],

  servicesColumnHeading: "Services",
  servicesLinks: [
    { label: "Fabric Architecture", href: "#" },
    { label: "Databricks & Lakehouse", href: "#" },
    { label: "AI & GenAI Advisory", href: "#" },
    { label: "FinOps & Cost Audit", href: "#" },
    { label: "Corporate Training", href: "#" },
  ],

  contactHeading: "Contact",
  contactEmail: "hello@noeveka.com",
  contactPhone: "+91 98765 43210",
  contactAddress: "India · Serving Global Enterprise Teams",

  newsletterHeading: "Sign up to our newsletter",
  newsletterSubtext:
    "Subscribe for architecture insights, free resources & updates.",
  newsletterPlaceholder: "Enter Your E-Mail",

  copyrightText: "© {year} Noeveka Data & AI Solutions. All rights reserved.",

  footerNavLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/#what-we-do" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
