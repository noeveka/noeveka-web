/**
 * why-noeveka.config.ts — static fallback data for the WhyNoeveka section.
 */

export const WHY_NOEVEKA_CONFIG = {
  eyebrow: "Why Choose Us",
  heading: "What makes Noeveka's approach different?",
  body: "We combine deep industry expertise with data-driven strategies and tailored solutions to help enterprises overcome challenges, unlock growth opportunities, and succeed in competitive markets.",
  ctaText: "Explore More",
  ctaLink: undefined as string | undefined,

  stats: [
    { value: "98%", label: "Client Retention" },
    { value: "5×", label: "Avg. ROI Delivered" },
  ],

  differentiators: [
    {
      number: "01",
      icon: "ShieldCheck",
      title: "Architect-Led Experience",
      desc: "Real enterprise decisions, made by people who've shipped at scale — not generalists.",
    },
    {
      number: "02",
      icon: "TrendingUp",
      title: "Measurable Outcomes",
      desc: "Every engagement is tied to KPIs. We track results, not just deliverables.",
    },
    {
      number: "03",
      icon: "Layers3",
      title: "Vendor-Unbiased Advice",
      desc: "No vendor lock-in, no hidden incentives. We recommend what's right for you.",
    },
  ],

  features: [
    {
      icon: "MessageSquare",
      title: "Dedicated Support",
      desc: "Responsive guidance from senior architects whenever you need it.",
    },
    {
      icon: "Users",
      title: "Professional Team",
      desc: "Skilled experts delivering best-in-class enterprise solutions.",
    },
  ],
} as const;
