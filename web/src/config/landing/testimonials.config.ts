/**
 * testimonials.config.ts — static fallback data for the Testimonials section.
 */

export const TESTIMONIALS_CONFIG = {
  /** Section header copy */
  eyebrow: "Testimonial",
  heading: "What our satisfied clients say",
  subtext:
    "Real enterprise leaders sharing their experience with Noeveka's independent architecture advisory.",

  /** Fallback testimonial cards (shown when Sanity returns no testimonial documents) */
  testimonials: [
    {
      _id: "fallback-1",
      company: "FinTech Corp",
      abbr: "FC",
      quote:
        "Noeveka transformed our data strategy completely. Ajay's architectural guidance was precise, independent, and immediately actionable. Our Fabric migration went from risky to bulletproof.",
      authorName: "David Harrington",
      authorRole: "CDO — FinTech Corp",
      rating: 5,
    },
    {
      _id: "fallback-2",
      company: "RetailX Group",
      abbr: "RG",
      quote:
        "The Fabric Architecture Assessment gave us clarity we couldn't get anywhere else. Highly professional team — zero vendor bias, real enterprise experience. Exceptional value.",
      authorName: "Priya Nair",
      authorRole: "VP Data — RetailX Group",
      rating: 5,
    },
    {
      _id: "fallback-3",
      company: "HealthSync",
      abbr: "HS",
      quote:
        "We highly recommend Noeveka for any enterprise data and AI architecture needs. Their independent advisory and FinOps model helped us cut platform costs by 38%.",
      authorName: "Marcus Webb",
      authorRole: "CTO — HealthSync",
      rating: 5,
    },
  ],
} as const;
