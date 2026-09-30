/**
 * who-we-are.config.ts — static fallback data for the WhoWeAre / About section.
 */

export const WHO_WE_ARE_CONFIG = {
  eyebrow: "Who We Are",
  heading: "Senior expertise stays close to the work.",
  body: "Noeveka was built around a simple principle: complex enterprise decisions deserve experienced architectural judgement. Engagements remain architect-led, ensuring strategy, architecture and execution stay connected.",
  ctaText: "More About Us",
  ctaLink: undefined as string | undefined,

  founderName: "Ajay Kumar",
  founderRole: "Founder & CEO | Enterprise Data & AI Architect",
  founderPhotoFallbackUrl:
    "/assets/team-pictures/founder_image_about_us_section.jpeg",
  founderPhotoAlt: "Ajay Kumar — Founder & CEO, Noeveka",

  statBadgeValue: "15+",
  statBadgeLabel: "Enterprise Data & Architecture Experience",

  ratingValue: undefined as string | undefined,
  ratingLabel: undefined as string | undefined,

  skillsHeading: "Core Expertise",
  skills: ["Architecture", "Microsoft Fabric", "Databricks", "FinOps", "AI Strategy", "Governance"],
} as const;
