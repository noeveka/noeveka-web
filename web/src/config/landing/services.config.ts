/**
 * services.config.ts — static fallback data for the WhatWeDo / Services section.
 */

export const SERVICES_CONFIG = {
  eyebrow: "Our Services",
  heading: "End-to-end AI & Data Solutions for Enterprise Growth",
  subtext:
    "We help organizations design, build and scale modern data and AI systems — from strategy to production, with a focus on real business impact.",
  cardCtaText: "Learn More",

  /** Fallback service cards (shown when Sanity returns no service documents) */
  services: [
    {
      _id: "service-1",
      icon: "layers",
      title: "Enterprise Data & AI Architecture",
      description:
        "Designing scalable, secure and future-ready data and AI architectures that power your business goals.",
      variant: "white" as const,
      featured: false,
      ctaText: "Learn More",
      ctaLink: "/services#data-ai-architecture",
      order: 1,
    },
    {
      _id: "service-2",
      icon: "bot",
      title: "Enterprise AI & Agentic Systems",
      description:
        "Building intelligent AI agents and systems that automate workflows, enhance productivity and unlock new possibilities.",
      variant: "orange" as const,
      featured: true,
      ctaText: "Learn More",
      ctaLink: "/services#ai-agentic-systems",
      order: 2,
    },
    {
      _id: "service-3",
      icon: "shield-check",
      title: "AI Governance & Architecture Assurance",
      description:
        "Ensuring responsible, compliant and transparent AI systems with robust governance and architecture reviews.",
      variant: "black" as const,
      featured: false,
      ctaText: "Learn More",
      ctaLink: "/services#ai-governance-assurance",
      order: 3,
    },
    {
      _id: "service-4",
      icon: "trending-up",
      title: "Data & AI Transformation Advisory",
      description:
        "Strategic guidance to help you plan, adopt and scale data and AI for measurable business value.",
      variant: "white" as const,
      featured: false,
      ctaText: "Learn More",
      ctaLink: "/services#transformation-advisory",
      order: 4,
    },
  ],
} as const;
