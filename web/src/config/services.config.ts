/**
 * services.config.ts
 *
 * Configuration and fallback data for the Noeveka Services page.
 * Follows the same pattern as about.config.ts and resources.config.ts.
 * When Sanity integration is added, this serves as the fallback dataset.
 */

export interface ServiceFocusArea {
  id: string;
  number: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  bullets: string[];
  visualType: "stack" | "agents" | "governance" | "transformation";
  accentColor: "orange" | "navy" | "blue";
  badgeText: string;
  ctaText: string;
  ctaLink: string;
}

export interface EngagementModel {
  id: string;
  icon: string;
  title: string;
  description: string;
  isHighlight?: boolean;
}

export const SERVICES_CONFIG = {
  // Hero section copy & options
  hero: {
    badge: "Independent Enterprise Data & AI Advisory",
    headingLine1: "Four Focus Areas.",
    headingLine2: "Real Business Outcomes.",
    headingHighlight: "Real Business Outcomes.",
    subtext:
      "We solve the most important Data & AI challenges for modern enterprises — with architecture at the core.",
    ctaPrimaryText: "Explore Focus Areas",
    ctaPrimaryLink: "#services-cards",
    ctaSecondaryText: "Start a Conversation",
    ctaSecondaryLink: "/contact",
    brandPillars: ["People", "Ideas", "AI", "Impact"] as const,
  },

  // Four Core Focus Areas (from the enterprise advisory data architecture)
  focusAreas: [
    {
      id: "data-ai-architecture",
      number: "01",
      icon: "layers-3",
      title: "Enterprise Data & AI Architecture",
      shortDescription:
        "Design enterprise-grade Data & AI architectures that connect business strategy with scalable, future-ready technology foundations.",
      fullDescription:
        "Design enterprise-grade Data & AI architectures that connect business strategy with scalable, future-ready technology foundations.",
      bullets: [
        "Target architecture & roadmap",
        "Platform strategy (Fabric, Databricks, Snowflake, etc.)",
        "Data integration & semantic architecture",
        "Architecture standards & principles",
      ],
      visualType: "stack",
      accentColor: "orange",
      badgeText: "Architecture Foundation",
      ctaText: "Learn More",
      ctaLink: "/contact?topic=architecture",
    },
    {
      id: "ai-agentic-systems",
      number: "02",
      icon: "cpu",
      title: "Enterprise AI & Agentic Systems",
      shortDescription:
        "Architect and enable production-ready AI and agentic systems with governance, security and enterprise integration by design.",
      fullDescription:
        "Architect and enable production-ready AI and agentic systems with governance, security and enterprise integration by design.",
      bullets: [
        "GenAI & RAG architecture",
        "Enterprise AI agents",
        "Multi-agent orchestration",
        "Tool integration & identity",
        "Human-in-the-loop design",
        "Observability & monitoring",
      ],
      visualType: "agents",
      accentColor: "blue",
      badgeText: "Autonomous Systems",
      ctaText: "Learn More",
      ctaLink: "/contact?topic=agentic-ai",
    },
    {
      id: "ai-governance-assurance",
      number: "03",
      icon: "shield-check",
      title: "AI Governance & Architecture Assurance",
      shortDescription:
        "Help organizations adopt AI with confidence through governance, risk management and independent architecture assurance.",
      fullDescription:
        "Help organizations adopt AI with confidence through governance, risk management and independent architecture assurance.",
      bullets: [
        "AI governance frameworks",
        "Architecture & design reviews",
        "Risk & control design",
        "Responsible AI & ethics",
        "Auditability & compliance",
        "Architecture Review Board (ARB)",
      ],
      visualType: "governance",
      accentColor: "orange",
      badgeText: "Enterprise Trust",
      ctaText: "Learn More",
      ctaLink: "/contact?topic=governance",
    },
    {
      id: "transformation-advisory",
      number: "04",
      icon: "trending-up",
      title: "Data & AI Transformation Advisory",
      shortDescription:
        "Turn ambition into execution with practical transformation strategies, operating models and architecture leadership.",
      fullDescription:
        "Turn ambition into execution with practical transformation strategies, operating models and architecture leadership.",
      bullets: [
        "Current-state assessment",
        "Target operating model",
        "Transformation roadmap",
        "Technology rationalisation",
        "Capability development",
        "Executive advisory",
      ],
      visualType: "transformation",
      accentColor: "navy",
      badgeText: "Strategic Execution",
      ctaText: "Learn More",
      ctaLink: "/contact?topic=advisory",
    },
  ] as const satisfies readonly ServiceFocusArea[],

  // Impact Principles Section (Split layout with scroll-filling vertical line and isometric visual)
  impactPrinciplesSection: {
    heading: "What makes enterprise Data & AI deliver real impact?",
    body:
      "Is it the latest foundation model alone? Massive cloud compute? Flashy POC demos? Enterprise AI will not succeed through models alone. Real impact requires architecture, governance, and engineering working as one unified system.",
    principles: [
      {
        number: "01",
        title: "Architecture-Led Foundations",
        description:
          "Connect business strategy with scalable, future-ready technology platforms (Fabric, Databricks, Snowflake). Avoid fragmented data silos, unmanaged compute costs, and vendor lock-in from day one.",
      },
      {
        number: "02",
        title: "Production-Ready Agentic Systems",
        description:
          "Move beyond toy prompts to production-grade agentic systems with enterprise security, human-in-the-loop controls, tool integration, and continuous observability.",
      },
      {
        number: "03",
        title: "Independent Governance & Assurance",
        description:
          "Adopt AI with total confidence through independent architecture reviews, responsible AI ethics, and compliance frameworks that protect your brand and enterprise data.",
      },
    ],
  },

  // Engagement Section (Process Ball Path section below hero)
  engagementSection: {
    heading: "Flexible Engagement Models for Your Needs",
    subtext:
      "We solve the most important Data & AI challenges with tailored engagement models designed around your timeline and enterprise complexity.",
    steps: [
      {
        number: "01",
        title: "Advisory Projects",
        desc: "Focused expertise for specific challenges.",
      },
      {
        number: "02",
        title: "Architecture Assessments",
        desc: "Independent, objective evaluations.",
      },
      {
        number: "03",
        title: "Transformation Programmes",
        desc: "End-to-end advisory and architecture leadership.",
      },
      {
        number: "04",
        title: "Fractional Leadership",
        desc: "Ongoing senior expertise without a permanent hire.",
      },
    ],
  },

  // Engagement Models (from the lower section of data image)
  engagementModels: [
    {
      id: "advisory-projects",
      icon: "users",
      title: "Advisory Projects",
      description: "Focused expertise for specific challenges",
    },
    {
      id: "architecture-assessments",
      icon: "book-open",
      title: "Architecture Assessments",
      description: "Independent, objective evaluations",
    },
    {
      id: "transformation-programmes",
      icon: "settings",
      title: "Transformation Programmes",
      description: "End-to-end advisory and architecture leadership",
    },
    {
      id: "fractional-leadership",
      icon: "user",
      title: "Fractional Architecture Leadership",
      description: "Ongoing senior expertise without a permanent hire",
      isHighlight: true,
    },
  ] as const satisfies readonly EngagementModel[],

  // Founder quote from data image
  founderQuote: {
    quote:
      "Enterprise AI will not succeed through models alone. It requires architecture, governance and engineering working as one system.",
    author: "Ajay Sharma",
    role: "Founder, Noeveka",
  },

  // Industries served
  industries: [
    { label: "Financial Services", icon: "scale" },
    { label: "Energy & Utilities", icon: "zap" },
    { label: "Manufacturing", icon: "layers" },
    { label: "Life Sciences", icon: "sparkles" },
    { label: "Technology", icon: "cpu" },
    { label: "Public Sector", icon: "shield" },
  ] as const,

  // Final Conversion CTA Section (Minimal Light Mode)
  ctaSection: {
    headingPart: "Ready to architect your enterprise's ",
    headingHighlight: "data future?",
    body:
      "Book a free strategy call with Ajay Kumar and get an independent view of your platform fit, cost, and architecture roadmap — at no cost.",
    primaryCtaText: "Book a Free Strategy Call",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Our Resources",
    secondaryCtaLink: "/resources",
  },
} as const;
