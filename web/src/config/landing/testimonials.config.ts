/**
 * testimonials.config.ts — static fallback data for the Testimonials section.
 */

export const TESTIMONIALS_CONFIG = {
  /** Section header copy */
  eyebrow: "TESTIMONIALS",
  heading: "What our satisfied clients say",
  subtext:
    "Real enterprise leaders sharing their experience with Noeveka's independent and flexible advisory.",

  /** Fallback testimonial cards (shown when Sanity returns no testimonial documents) */
  testimonials: [
    {
      _id: "fallback-1",
      company: "FinTech & Govt Audit",
      abbr: "FC",
      quote:
        "Noeveka transformed our data strategy completely. Their architecture guidance was precise, independent, and immediately actionable. Our federal migration went from risky to bulletproof.",
      authorName: "David Harrington",
      authorRole: "CEO — FinTech Corp",
      rating: 5,
    },
    {
      _id: "fallback-2",
      company: "Health Group",
      abbr: "HG",
      quote:
        "The Fabric Architecture Assessment gave us clarity and couldn't get anywhere else. Highly professional team — zero vendor push, real independent advice. Exceptional value.",
      authorName: "Priya Nair",
      authorRole: "VP Data — Health Group",
      rating: 5,
    },
    {
      _id: "fallback-3",
      company: "HealthSync",
      abbr: "HS",
      quote:
        "We highly recommend Noeveka for any enterprise data and AI architecture needs. Their independent, vendor agnostic approach helped us build a platform ready for scale.",
      authorName: "Marcus Webb",
      authorRole: "CTO — HealthSync",
      rating: 5,
    },
  ],
} as const;
