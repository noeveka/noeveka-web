/**
 * hero.config.ts — static fallback data for the Hero section.
 * Remove a ?? HERO_CONFIG.* to test whether Sanity is returning that field.
 */

export const HERO_CONFIG = {
  trustBadgeRating: "4.9",
  trustBadgeDescriptor: "5K+ Enterprise Leaders Trained",

  headingPart1: "Architect-Led ",
  headingHighlight1: "Enterprise",
  headingPart2: "Data & ",
  headingHighlight2: "AI",
  headingPart3: " Solutions",

  subtitle:
    "Noeveka empowers data leaders with independent, enterprise-grade architecture advisory, practical bootcamps, and premium digital playbooks — built by architects, for architects.",

  primaryCtaText: "Book a Strategy Call",
  primaryCtaLink: undefined as string | undefined,

  secondaryCtaText: "Speak to an Architect",
  secondaryCtaLink: undefined as string | undefined,

  trustBullets: ["Senior architect-led", "Independent & unbiased", "Built for enterprise"],

  stats: [
    { val: "15+", label: "Years Experience" },
    { val: "100%", label: "Vendor-Independent" },
    { val: "5K+", label: "Learners Trained" },
  ],

  /** Fallback local background image (used when Sanity bgImage is not set) */
  bgImageFallbackUrl: "/assets/hero_section_bg.png",
  bgImageAlt: "Noeveka — Enterprise Data & AI Architecture",
} as const;
