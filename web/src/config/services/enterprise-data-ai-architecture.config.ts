import type { ServiceDetailPageData } from "@/types/service-detail.types";

/**
 * Static configuration for "Enterprise Data & AI Architecture"
 * Source: noeveka_service_page_content.md (01 - Enterprise Data & AI Architecture)
 */
export const ENTERPRISE_DATA_AI_ARCHITECTURE_CONFIG: ServiceDetailPageData = {
  title: "Enterprise Data & AI Architecture Advisory",
  navLabel: "Enterprise Data & AI Architecture",
  slug: "enterprise-data-ai-architecture",
  seoDescription:
    "Independent architecture advisory to define target architecture, platform strategy and standards for enterprise data and AI.",

  hero: {
    badge: "ENTERPRISE DATA & AI ARCHITECTURE",
    heading: "Architect the foundation for data and AI at",
    headingHighlight: "enterprise scale.",
    description:
      "Turn fragmented platforms, competing priorities and growing AI demands into a coherent architecture designed around business strategy, scalability and long-term value.",
    primaryCtaText: "Discuss Your Architecture",
    primaryCtaLink: "/contact?topic=architecture",
    secondaryCtaText: "Explore Our Approach",
    secondaryCtaLink: "#what-we-do",
    heroImageUrl: "/assets/services/service_one_hero_image.jpeg",
    stackAnnotations: [
      { tier: "BUSINESS", label: "Objectives, outcomes, operating priorities" },
      { tier: "DATA", label: "Domains, governance, information architecture" },
      { tier: "PLATFORM", label: "Cloud, storage, processing, integration" },
      { tier: "AI", label: "BI, analytics, AI and agentic systems" },
    ],
  },

  challenge: {
    eyebrow: "The Challenge",
    heading: "Technology grows quickly. Architecture rarely keeps pace.",
    paragraphs: [
      "Enterprise data estates often evolve incrementally. New platforms, cloud services, analytics solutions and AI capabilities are added over time, creating complexity that becomes increasingly difficult to govern and scale. The result can be duplicated capability, unclear ownership, inconsistent standards, unnecessary cost and an architecture that makes transformation harder instead of enabling it.",
    ],
    signalsHeading: "Common signals:",
    signals: [
      "Multiple overlapping data platforms or tools",
      "Unclear target architecture",
      "Data engineering and BI operating independently",
      "AI initiatives progressing without a common foundation",
      "Increasing cloud and platform costs",
      "Technical debt slowing delivery",
      "Semantic models and business logic duplicated across solutions",
    ],
  },

  whatWeDo: {
    eyebrow: "What We Do",
    heading: "Architecture that connects strategy to execution.",
    subtext:
      "We help organisations define enterprise data and AI architectures that connect business priorities with practical technology decisions. Our role is not simply to produce architecture diagrams. We help establish the principles, decisions and operating structures required to make the architecture implementable.",
    items: [
      {
        icon: "database",
        title: "Target Architecture & Roadmap",
        description:
          "Define the future-state architecture and the sequence required to reach it.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=target-architecture",
      },
      {
        icon: "layers-3",
        title: "Platform Strategy",
        description:
          "Assess technologies such as Fabric, Databricks, Snowflake and cloud-native services based on enterprise requirements rather than vendor preference.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=platform-strategy",
      },
      {
        icon: "network",
        title: "Data Integration & Semantic Architecture",
        description:
          "Create clear patterns for data movement, transformation, analytical consumption and enterprise semantics.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=semantic-architecture",
      },
      {
        icon: "shield-check",
        title: "Architecture Standards & Principles",
        description:
          "Establish reusable patterns that reduce fragmentation and improve consistency across teams.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=architecture-standards",
      },
    ],
  },

  architectureLens: {
    eyebrow: "Visual Model",
    heading: "Our Architecture Lens",
    subtext:
      "A structured four-layer model ensuring every layer supports the decisions above it and enables scalable capabilities.",
    layers: [
      {
        icon: "crosshair",
        title: "BUSINESS",
        description: "Objectives, outcomes, operating priorities",
        variant: "navy",
      },
      {
        icon: "database",
        title: "DATA",
        description: "Domains, governance, information architecture",
        variant: "navy",
      },
      {
        icon: "layers",
        title: "PLATFORM",
        description: "Cloud, storage, processing, integration",
        variant: "slate",
      },
      {
        icon: "sparkles",
        title: "CONSUMPTION & AI",
        description: "BI, analytics, AI and agentic systems",
        variant: "orange",
      },
    ],
    footerNote:
      "Architecture works when every layer supports the decisions above it.",
  },

  howWeEngage: {
    eyebrow: "How We Engage",
    heading: "From current state to executable architecture.",
    subtext:
      "A structured, practical pathway designed to transition your architecture from fragmented initiatives to unified enterprise execution.",
    steps: [
      {
        number: "01",
        title: "Understand",
        description:
          "Business priorities, existing landscape, constraints and transformation ambitions.",
      },
      {
        number: "02",
        title: "Assess",
        description:
          "Architecture maturity, technical debt, platform decisions and capability gaps.",
      },
      {
        number: "03",
        title: "Design",
        description:
          "Target architecture, principles, patterns and technology choices.",
      },
      {
        number: "04",
        title: "Roadmap",
        description:
          "Translate architecture into sequenced, practical transformation initiatives.",
      },
      {
        number: "05",
        title: "Govern",
        description:
          "Establish architecture decision-making and guardrails for ongoing evolution.",
      },
    ],
  },

  deliverables: {
    eyebrow: "Deliverables",
    heading: "Typical Deliverables",
    subtext:
      "Pragmatic, high-value architecture blueprints and governance models.",
    items: [
      "Current state architecture assessment & gap analysis",
      "Target architecture blueprints and reference models",
      "Platform evaluation (Fabric, Databricks, Snowflake, Cloud-native)",
      "Data integration and enterprise semantic architecture designs",
      "Sequenced transformation roadmap with milestone values",
      "Reusable architecture principles and standards library",
      "Architecture governance framework & decision-making guardrails",
      "Executive briefing materials and stakeholder alignment artifacts",
    ],
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "Architecture should reduce complexity, not document it.",
    subtext:
      "A foundation built for real operational velocity, governance, and sustained enterprise scale.",
    items: [
      {
        icon: "lightbulb",
        title: "Greater clarity",
        description:
          "A shared view of the enterprise architecture and its evolution.",
      },
      {
        icon: "layers-3",
        title: "Reduced duplication",
        description: "Clear ownership and reusable platform patterns.",
      },
      {
        icon: "bar-chart-3",
        title: "Better technology decisions",
        description:
          "Investment aligned to enterprise needs rather than isolated projects.",
      },
      {
        icon: "zap",
        title: "Faster delivery",
        description: "Teams operate within known architectural standards.",
      },
      {
        icon: "star",
        title: "AI readiness",
        description:
          "A scalable data and platform foundation capable of supporting emerging AI use cases.",
      },
    ],
  },

  relatedExpertise: {
    eyebrow: "Related Expertise",
    heading: "Related Expertise",
    subtext:
      "Explore our other services to address your broader data and AI needs.",
    services: [
      {
        number: "02",
        icon: "bot",
        title: "Enterprise AI & Agentic Systems",
        description:
          "Architect AI capabilities on top of a trusted enterprise foundation.",
        linkUrl: "/services/enterprise-ai-agentic-systems",
        linkText: "Learn More",
      },
      {
        number: "03",
        icon: "shield-check",
        title: "AI Governance & Architecture Assurance",
        description:
          "Ensure architecture decisions meet enterprise governance and risk requirements.",
        linkUrl: "/services/ai-governance-architecture-assurance",
        linkText: "Learn More",
      },
      {
        number: "04",
        icon: "trending-up",
        title: "Data & AI Transformation Advisory",
        description:
          "Turn architecture direction into a practical enterprise transformation.",
        linkUrl: "/services/data-ai-transformation-advisory",
        linkText: "Learn More",
      },
    ],
  },

  bottomCta: {
    eyebrow: "Next Steps",
    headingLine1: "Complex Data & AI decisions",
    headingLine2: "deserve experienced judgement.",
    subtext:
      "Start with a focused conversation about your current landscape, priorities and the decisions ahead.",
    primaryCtaText: "Start a Conversation",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore All Services",
    secondaryCtaLink: "/services",
  },
};
