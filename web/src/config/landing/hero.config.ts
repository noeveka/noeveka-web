/**
 * hero.config.ts — static fallback data for the Hero section.
 */

export const HERO_CONFIG = {
  eyebrow: "ARCHITECT-LED",

  headingLine1: "Architecting Enterprise Data &",
  headingHighlight: "AI",
  headingLine2: "for Better Decisions",

  // Backward compatibility with legacy schema fields
  headingPart1: "Architecting Enterprise Data &",
  headingHighlight1: "",
  headingPart2: "",
  headingHighlight2: "AI",
  headingPart3: " for Better Decisions",

  subtitle:
    "Independent advisory, practical architectures, and measurable outcomes that help enterprises create lasting value from data and AI.",

  primaryCtaText: "Book a Strategy Call →",
  primaryCtaLink: "/contact",

  /** Fallback local background image (used when Sanity bgImage is not set) */
  bgImageFallbackUrl: "/assets/hero_section_bg.png",
  bgImageAlt: "Noeveka — Enterprise Data & AI Architecture",
} as const;
