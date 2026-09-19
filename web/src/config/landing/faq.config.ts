/**
 * faq.config.ts — static fallback data for the Faq section.
 */

export const FAQ_CONFIG = {
  eyebrow: "Questions",
  heading: "Top questions clients ask",
  subtext:
    "Find clear answers to the most common questions about our architecture advisory, workshops, and engagement process.",

  faqs: [
    {
      question: "Do I need any technical knowledge to engage with Noeveka?",
      answer:
        "Not at all. Our advisory engagements are designed for both technical architects and business decision-makers. We translate complex data and AI architecture concepts into clear, actionable strategies your whole team can understand and act on.",
    },
    {
      question: "Do you offer customised architecture solutions for our stack?",
      answer:
        "Yes — every engagement starts with a thorough discovery of your existing technology landscape, constraints, and goals. We never propose generic blueprints; every recommendation is tailored to your specific platform, team size, and budget.",
    },
    {
      question: "What types of services does Noeveka provide?",
      answer:
        "We offer three core service lines: enterprise data architecture advisory (Fabric, Databricks, Lakehouse), architect-led workshops and bootcamps, and FinOps & governance audits. Each can be delivered as a standalone engagement or as part of a longer-term retainer.",
    },
    {
      question: "What is the typical duration of an advisory engagement?",
      answer:
        "Engagements range from a focused 2-week architecture review sprint to a 3–6 month strategic advisory retainer. Workshop bootcamps are typically 1–2 weekend sessions. We'll recommend the right format after an initial discovery call.",
    },
    {
      question: "Is Noeveka vendor-neutral, or do you recommend specific platforms?",
      answer:
        "We are fully independent and vendor-unbiased. We have deep expertise across Microsoft Fabric, Databricks, Snowflake, dbt, and other leading platforms — and we recommend only what genuinely fits your requirements, not what benefits a partner programme.",
    },
  ],
} as const;
