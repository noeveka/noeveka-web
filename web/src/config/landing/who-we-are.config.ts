/**
 * who-we-are.config.ts — static fallback data for the WhoWeAre / About section.
 */

export const WHO_WE_ARE_CONFIG = {
  eyebrow: "Who We Are",
  heading: "Comprehensive solution for enterprise data excellence",
  body: "Enterprises invest millions in tools but struggle with poor architecture, fragmented data, and lack of governance. Noeveka bridges this gap — delivering architect-led, authority-driven education, advisory, and enterprise-grade playbooks.",
  ctaText: "More About Us",
  ctaLink: undefined as string | undefined,

  founderName: "Ajay Kumar",
  founderRole: "Founder & Chief Architect — Noeveka",
  founderPhotoFallbackUrl:
    "https://res.cloudinary.com/dd5elqfus/image/upload/v1788162069/Screenshot_2026-08-31_at_1.10.57_PM_mgjzrs.png",
  founderPhotoAlt: "Ajay Kumar — Founder, Noeveka",

  statBadgeValue: "15+",
  statBadgeLabel: "Years Enterprise Experience",

  ratingValue: "4.9",
  ratingLabel: "Avg. client rating",

  skillsHeading: "Core Expertise",
  skills: ["Architecture", "Microsoft Fabric", "Databricks", "FinOps", "AI Strategy", "Governance"],
} as const;
