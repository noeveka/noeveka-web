import type { ServiceDetailPageData } from "@/types/service-detail.types";

/**
 * Fallback static configuration for "Enterprise Data & AI Architecture"
 * Matches the structure and content from the client design and screenshot.
 */
export const ENTERPRISE_DATA_AI_ARCHITECTURE_CONFIG: ServiceDetailPageData = {
  title: "Enterprise Data & AI Architecture",
  slug: "enterprise-data-ai-architecture",
  seoDescription:
    "Architect the foundation for data and AI at enterprise scale. Connect business strategy with modern, scalable data platforms (Fabric, Databricks, Azure).",

  hero: {
    badge: "ENTERPRISE DATA & AI ARCHITECTURE",
    heading: "Architect the foundation for data and AI at",
    headingHighlight: "enterprise scale.",
    description:
      "We turn fragmented platforms and growing AI demands into a coherent, future-ready architecture that connects business strategy with data, technology and AI — built for scale, trust and real business value.",
    primaryCtaText: "Discuss Your Architecture",
    primaryCtaLink: "/contact?topic=architecture",
    secondaryCtaText: "Explore Our Approach",
    secondaryCtaLink: "#what-we-do",
    heroImageUrl: "/assets/services/service_one_hero_image.jpeg",
    stackAnnotations: [
      { tier: "BUSINESS", label: "Business strategy and outcomes" },
      { tier: "DATA", label: "Trusted, integrated data foundations" },
      { tier: "PLATFORM", label: "Scalable technology and platforms" },
      { tier: "AI", label: "AI capabilities and real-world applications" },
    ],
  },

  challenge: {
    heading: "The Challenge",
    paragraphs: [
      "Many organizations are investing in data and AI, but progress is often slowed by fragmented systems, unclear ownership and a lack of architectural coherence. Without a clear enterprise architecture, it becomes difficult to scale initiatives, ensure data trust or turn AI potential into measurable business impact.",
    ],
    signalsHeading: "COMMON SIGNALS WE SEE",
    signals: [
      "Fragmented data platforms and point solutions",
      "Unclear data ownership and governance",
      "Inconsistent architecture across business units",
      "Growing AI demand without a solid foundation",
      "Duplication of data and analytics capabilities",
      "Difficulty scaling from pilot to production",
    ],
  },

  whatWeDo: {
    heading: "What We Do",
    subtext:
      "We design enterprise-grade Data & AI architectures that connect business strategy with scalable, future-ready technology foundations.",
    items: [
      {
        icon: "database",
        title: "Target Architecture & Roadmap",
        description:
          "Define a clear target architecture and pragmatic roadmap aligned to business outcomes.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=target-architecture",
      },
      {
        icon: "layers-3",
        title: "Platform Strategy",
        description:
          "Advise on modern data and AI platforms tailored to your enterprise context.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=platform-strategy",
      },
      {
        icon: "network",
        title: "Data Integration & Semantic Architecture",
        description:
          "Design integrated, trusted data foundations with a semantic layer for enterprise use.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=semantic-architecture",
      },
      {
        icon: "shield-check",
        title: "Architecture Standards & Principles",
        description:
          "Establish standards, reference architectures and governance principles for long-term scale.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=architecture-standards",
      },
    ],
  },

  architectureLens: {
    heading: "Our Architecture Lens",
    subtext:
      "A holistic view from business strategy to AI consumption — ensuring every layer supports the decisions above it and the capabilities below it.",
    layers: [
      {
        icon: "crosshair",
        title: "BUSINESS",
        description: "Strategy, goals and value outcomes",
        variant: "navy",
      },
      {
        icon: "database",
        title: "DATA",
        description: "Trusted, integrated and governed data",
        variant: "navy",
      },
      {
        icon: "layers",
        title: "PLATFORM",
        description: "Scalable technology and infrastructure",
        variant: "slate",
      },
      {
        icon: "sparkles",
        title: "CONSUMPTION & AI",
        description: "Analytics, AI/ML and business applications",
        variant: "orange",
      },
    ],
    footerNote:
      "EVERY LAYER SUPPORTS THE DECISIONS ABOVE IT AND THE CAPABILITIES BELOW IT.",
  },

  howWeEngage: {
    heading: "How We Engage",
    subtext:
      "A structured, collaborative process designed to deliver practical, actionable architecture outcomes.",
    steps: [
      {
        number: "01",
        title: "Understand",
        description: "Clarify business goals, current state and key challenges.",
      },
      {
        number: "02",
        title: "Assess",
        description: "Evaluate existing architecture, data and technology landscape.",
      },
      {
        number: "03",
        title: "Design",
        description: "Define target architecture and guiding principles.",
      },
      {
        number: "04",
        title: "Roadmap",
        description: "Create a phased implementation plan with clear value milestones.",
      },
      {
        number: "05",
        title: "Govern",
        description: "Establish standards, governance and ongoing architecture assurance.",
      },
    ],
  },

  deliverables: {
    heading: "Typical Deliverables",
    subtext: "We provide clear, practical deliverables tailored to your organization's needs.",
    items: [
      "Current state architecture assessment",
      "Target architecture and reference models",
      "Strategic technology and platform recommendations",
      "Data integration and semantic architecture design",
      "Phased roadmap with business value milestones",
      "Architecture standards and design principles",
      "Governance framework and operating model",
      "Platform evaluation and vendor guidance",
      "Implementation planning and effort estimation",
      "Executive briefing and stakeholder materials",
    ],
  },

  outcomes: {
    heading: "Outcomes",
    subtext:
      "A strong data and AI architecture enables faster innovation, greater trust and measurable business value.",
    items: [
      {
        icon: "lightbulb",
        title: "Clarity",
        description: "A clear path from strategy to execution.",
      },
      {
        icon: "layers-3",
        title: "Reduced Duplication",
        description: "Consolidated platforms and data assets.",
      },
      {
        icon: "bar-chart-3",
        title: "Better Decisions",
        description: "Trusted, accessible data for all stakeholders.",
      },
      {
        icon: "zap",
        title: "Faster Delivery",
        description: "Shorter time from idea to impact.",
      },
      {
        icon: "star",
        title: "AI Readiness",
        description: "A solid foundation for scalable AI adoption.",
      },
    ],
  },

  relatedExpertise: {
    heading: "Related Expertise",
    subtext: "Explore our other services to address your broader data and AI needs.",
    services: [
      {
        number: "02",
        icon: "bot",
        title: "Enterprise AI & Agentic Systems",
        description:
          "Architect and enable production-ready AI and agentic systems.",
        linkUrl: "/services/enterprise-ai-agentic-systems",
        linkText: "Learn More",
      },
      {
        number: "03",
        icon: "shield-check",
        title: "AI Governance & Architecture Assurance",
        description:
          "Build trust, reduce risk and ensure responsible AI at scale.",
        linkUrl: "/services/ai-governance-architecture-assurance",
        linkText: "Learn More",
      },
      {
        number: "04",
        icon: "trending-up",
        title: "Data & AI Transformation Advisory",
        description:
          "Turn ambition into execution with practical transformation strategies.",
        linkUrl: "/services/data-ai-transformation-advisory",
        linkText: "Learn More",
      },
    ],
  },

  bottomCta: {
    headingLine1: "Complex Data & AI decisions",
    headingLine2: "deserve experienced judgement.",
    subtext:
      "Partner with Noeveka to design an enterprise architecture that turns ambition into real business outcomes.",
    primaryCtaText: "Start a Conversation",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore All Services",
    secondaryCtaLink: "/services",
  },
};
