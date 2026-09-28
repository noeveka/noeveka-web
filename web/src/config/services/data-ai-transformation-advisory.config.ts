import type { ServiceDetailPageData } from "@/types/service-detail.types";

/**
 * Fallback static configuration for "Data & AI Transformation Advisory"
 * Matches the structure and content from the client design and screenshot.
 */
export const DATA_AI_TRANSFORMATION_ADVISORY_CONFIG: ServiceDetailPageData = {
  title: "Data & AI Transformation Advisory",
  slug: "data-ai-transformation-advisory",
  seoDescription:
    "Turn ambition into an executable transformation. Connect strategy, architecture, operating model and delivery into a practical transformation path that creates measurable enterprise value.",

  hero: {
    badge: "DATA & AI TRANSFORMATION ADVISORY",
    heading: "Turn ambition into an",
    headingHighlight: "executable transformation.",
    description:
      "Connect strategy, architecture, operating model and delivery into a practical transformation path that creates measurable enterprise value.",
    primaryCtaText: "Discuss Your Transformation",
    primaryCtaLink: "/contact?topic=transformation",
    secondaryCtaText: "Explore Our Approach",
    secondaryCtaLink: "#what-we-do",
    heroImageUrl: "/assets/services/service_four_hero_image.jpeg",
    stackAnnotations: [
      { tier: "ASSESS", label: "Understand and diagnose" },
      { tier: "DESIGN", label: "Define the right solution" },
      { tier: "EXECUTE", label: "Mobilise and deliver" },
      { tier: "SCALE", label: "Realise lasting impact" },
    ],
  },

  challenge: {
    heading: "The Challenge",
    paragraphs: [
      "Many organisations see the potential of data and AI, but struggle to turn ambition into real business outcomes. Fragmented initiatives, unclear ownership, legacy complexity and a lack of enterprise architecture often lead to stalled progress, increased risk and missed value.",
    ],
    signalsHeading: "COMMON TRANSFORMATION BARRIERS",
    signals: [
      "Fragmented data platforms and point solutions",
      "Unclear roles, ownership and governance",
      "Inconsistent architecture across business units",
      "Legacy systems and technical debt",
      "Competing priorities and limited resources",
      "Difficulty sustaining change and adoption",
    ],
  },

  whatWeDo: {
    heading: "What We Do",
    subtext:
      "We help organisations plan and execute Data & AI transformation programs with a clear strategy, practical architecture, operating model and roadmap for delivery.",
    items: [
      {
        icon: "bar-chart-3",
        title: "Current-State Assessment",
        description:
          "Evaluate your data, AI and technology landscape, operating model and maturity.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=current-state-assessment",
      },
      {
        icon: "crosshair",
        title: "Target Operating Model",
        description:
          "Define the operating model, governance and ways of working for scale.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=target-operating-model",
      },
      {
        icon: "book-open",
        title: "Transformation Roadmap",
        description:
          "Create a phased, value-led roadmap across people, process, technology and data.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=transformation-roadmap",
      },
      {
        icon: "layers-3",
        title: "Technology Rationalisation",
        description:
          "Simplify and modernise your data and AI technology landscape.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=technology-rationalisation",
      },
      {
        icon: "users",
        title: "Capability Roadmap",
        description:
          "Build the skills, organisation and capabilities needed for sustainable transformation.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=capability-roadmap",
      },
      {
        icon: "user",
        title: "Executive Advisory",
        description:
          "Provide ongoing senior advisory and guidance to keep transformation on track.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=executive-advisory",
      },
    ],
  },

  architectureLens: {
    heading: "Our Transformation Model",
    subtext:
      "A structured, end-to-end approach to turn ambition into measurable outcomes — from diagnosis to long-term value realisation.",
    layers: [
      {
        icon: "search",
        title: "ASSESS",
        description: "Understand and diagnose current maturity, constraints and value opportunities.",
        variant: "navy",
      },
      {
        icon: "lightbulb",
        title: "DESIGN",
        description: "Define the right solution, target architecture and governance blueprint.",
        variant: "navy",
      },
      {
        icon: "settings",
        title: "EXECUTE",
        description: "Mobilise, deliver and operationalise modern data and AI capabilities.",
        variant: "slate",
      },
      {
        icon: "trending-up",
        title: "SCALE",
        description: "Realise lasting impact, continuous enablement and sustainable adoption.",
        variant: "orange",
      },
    ],
    footerNote: "ENABLED BY: STRATEGY · ARCHITECTURE · GOVERNANCE · PEOPLE · TECHNOLOGY",
  },

  howWeEngage: {
    heading: "How We Engage",
    subtext:
      "A flexible, collaborative process designed to deliver practical, achievable outcomes for your organisation.",
    steps: [
      {
        number: "01",
        title: "Diagnose",
        description: "Understand your context, objectives and key challenges.",
      },
      {
        number: "02",
        title: "Prioritise",
        description: "Identify and prioritise the highest-value opportunities.",
      },
      {
        number: "03",
        title: "Design",
        description: "Define the target architecture, operating model and roadmap.",
      },
      {
        number: "04",
        title: "Mobilise",
        description: "Support delivery planning, change readiness and implementation.",
      },
      {
        number: "05",
        title: "Advise",
        description: "Provide ongoing executive advisory to sustain momentum and realise value.",
      },
    ],
  },

  deliverables: {
    heading: "Typical Deliverables",
    subtext: "Practical outputs tailored to your organisation's needs.",
    items: [
      "Current-state assessment and maturity report",
      "Target operating model and governance design",
      "Transformation roadmap and business case",
      "Architecture and technology rationalisation plan",
      "Capability and organisation roadmap",
      "Executive advisory and steering materials",
      "Data & AI strategy and value case",
      "Solution architecture and reference designs",
      "Implementation plan and change roadmap",
      "Operating model, roles and responsibilities",
      "KPIs and value realisation framework",
      "Board and executive presentations",
    ],
  },

  outcomes: {
    heading: "Outcomes",
    subtext:
      "A stronger foundation for data and AI that enables faster innovation, greater trust and measurable business value.",
    items: [
      {
        icon: "crosshair",
        title: "Clear priorities",
        description: "Focus investment on highest-value opportunities.",
      },
      {
        icon: "layers-3",
        title: "Reduced fragmentation",
        description: "A simpler, more coherent data and AI landscape.",
      },
      {
        icon: "network",
        title: "Stronger alignment",
        description: "Unified strategy, architecture and operating model.",
      },
      {
        icon: "shield-check",
        title: "Defined ownership",
        description: "Clear roles, governance and decision rights.",
      },
      {
        icon: "bar-chart-3",
        title: "Focused investment",
        description: "Greater ROI through prioritised and phased delivery.",
      },
      {
        icon: "star",
        title: "Sustainable adoption",
        description: "Lasting capability and culture change.",
      },
    ],
  },

  relatedExpertise: {
    heading: "Related Expertise",
    subtext: "Explore our other services to address your broader data and AI needs.",
    services: [
      {
        number: "01",
        icon: "layers-3",
        title: "Enterprise Data & AI Architecture",
        description:
          "Design scalable, enterprise-grade architectures that connect business strategy with scalable, future-ready foundations.",
        linkUrl: "/services/enterprise-data-ai-architecture",
        linkText: "Learn More",
      },
      {
        number: "02",
        icon: "bot",
        title: "Enterprise AI & Agentic Systems",
        description:
          "Architect and enable production-ready AI and agentic systems with governance, security and integration by design.",
        linkUrl: "/services/enterprise-ai-agentic-systems",
        linkText: "Learn More",
      },
      {
        number: "03",
        icon: "shield-check",
        title: "AI Governance & Architecture Assurance",
        description:
          "Help organisations adopt AI with confidence through governance, risk management and independent assurance.",
        linkUrl: "/services/ai-governance-architecture-assurance",
        linkText: "Learn More",
      },
    ],
  },

  bottomCta: {
    headingLine1: "Ready to turn ambition into",
    headingLine2: "measurable business value?",
    subtext:
      "Let's discuss how we can help you plan and execute your Data & AI transformation.",
    primaryCtaText: "Discuss Your Transformation",
    primaryCtaLink: "/contact?topic=transformation",
    secondaryCtaText: "Explore Our Approach",
    secondaryCtaLink: "/services",
  },
};
