/**
 * services.config.ts — static fallback data for the WhatWeDo / Services section.
 */

export const SERVICES_CONFIG = {
  eyebrow: "Our Core Ecosystem",
  heading: "Essential services for enterprise data excellence",
  subtext:
    "Architect-led, independent, and built for enterprise data leaders who need clarity before committing to implementation.",
  cardCtaText: "Explore More",

  /** Fallback service cards (shown when Sanity returns no service documents) */
  services: [
    {
      _id: "fallback-1",
      icon: "BarChart3",
      title: "Fabric Architectures & Patterns",
      description:
        "End-to-end target designs and blueprints for Microsoft Fabric, Databricks Lakehouse & GenAI pipelines.",
      variant: "white" as const,
      featured: false,
    },
    {
      _id: "fallback-2",
      icon: "BookOpen",
      title: "Architect-Led Workshops & Bootcamps",
      description:
        "Practical, weekend-friendly learning experiences designed by enterprise architects to solve real problems.",
      variant: "orange" as const,
      featured: true,
    },
    {
      _id: "fallback-3",
      icon: "Lightbulb",
      title: "Architecture Advisory & FinOps Audit",
      description:
        "Independent platform reviews, cost optimization, data contracts, and governance operating models.",
      variant: "black" as const,
      featured: false,
    },
  ],
} as const;
