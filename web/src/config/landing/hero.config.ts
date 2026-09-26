/**
 * hero.config.ts — static fallback data for the Hero section.
 */

export const HERO_CONFIG = {
  eyebrow: "ARCHITECT LED",

  headingLine1: "Enterprise Data &",
  headingHighlight: "AI",
  headingLine2: "Solutions",

  // Backward compatibility with legacy schema fields
  headingPart1: "Enterprise Data &",
  headingHighlight1: "",
  headingPart2: "",
  headingHighlight2: "AI",
  headingPart3: " Solutions",

  subtitle:
    "Noeveka empowers data leaders with independent, enterprise-grade architecture advisory, practical bootcamps, and premium digital playbooks — built by architects, for architects.",

  primaryCtaText: "Book a Strategy Call",
  primaryCtaLink: "/contact",

  /** Fallback local background image (used when Sanity bgImage is not set) */
  bgImageFallbackUrl: "/assets/hero_section_bg.png",
  bgImageAlt: "Noeveka — Enterprise Data & AI Architecture",
} as const;
