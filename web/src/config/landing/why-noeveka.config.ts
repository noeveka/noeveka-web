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
      title: "Architect-led from the start",
      desc: "Senior architecture expertise stays close to the engagement, from understanding the problem through to shaping the solution and critical decisions.",
    },
    {
      number: "02",
      icon: "TrendingUp",
      title: "Designed for measurable outcomes",
      desc: "We connect architecture and technology decisions to the business outcomes they are intended to create, not technology for technology’s sake.",
    },
    {
      number: "03",
      icon: "Layers3",
      title: "Independent by design",
      desc: "Our recommendations are shaped by your enterprise needs, existing landscape and long-term interests, not by a preferred platform or vendor.",
    },
  ],

  features: [
    {
      icon: "Compass",
      title: "Enterprise-first thinking",
      desc: "Architecture shaped around business context, operating realities and long-term enterprise value.",
    },
    {
      icon: "GraduationCap",
      title: "Knowledge that stays with you",
      desc: "We work collaboratively so capability, understanding and decision-making remain within your organisation.",
    },
  ],
} as const;
