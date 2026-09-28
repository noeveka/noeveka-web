import type { ServiceDetailPageData } from "@/types/service-detail.types";

/**
 * Fallback static configuration for "AI Governance & Architecture Assurance"
 * Matches the structure and content from the client design and screenshot.
 */
export const AI_GOVERNANCE_ARCHITECTURE_ASSURANCE_CONFIG: ServiceDetailPageData = {
  title: "AI Governance & Architecture Assurance",
  slug: "ai-governance-architecture-assurance",
  seoDescription:
    "Innovate with AI without losing control. Build the governance, architecture assurance and accountability required to adopt AI confidently.",

  hero: {
    badge: "AI GOVERNANCE & ARCHITECTURE ASSURANCE",
    heading: "Innovate with AI",
    headingHighlight: "without losing control.",
    description:
      "Build the governance, architecture assurance and accountability required to adopt AI confidently while managing risk, compliance and responsible use.",
    primaryCtaText: "Assess Your AI Governance",
    primaryCtaLink: "/contact?topic=ai-governance",
    secondaryCtaText: "Explore Our Approach",
    secondaryCtaLink: "#what-we-do",
    heroImageUrl: "/assets/services/service_two_hero_image.jpeg",
    stackAnnotations: [
      { tier: "TRUST", label: "Responsible AI & Ethics" },
      { tier: "CONTROL", label: "Risk Management & Compliance" },
      { tier: "ASSURANCE", label: "Architecture Assurance & Review" },
    ],
  },

  challenge: {
    heading: "The Challenge",
    paragraphs: [
      "As AI adoption accelerates, organizations face increasing complexity, risk and scrutiny. Without a clear governance framework and architectural assurance, it is easy to lose control — leading to model risks, regulatory exposure, ethical concerns and inconsistent implementation across the enterprise.",
    ],
    signalsHeading: "COMMON RISKS AND CONCERNS",
    signals: [
      "Lack of clear governance and accountability",
      "Inconsistent standards and fragmented oversight",
      "Model risks, bias and unintended outcomes",
      "Regulatory non-compliance and audit challenges",
      "Limited visibility into AI systems and decisions",
      "Difficulty scaling responsible AI across the organization",
    ],
  },

  whatWeDo: {
    heading: "What We Do",
    subtext:
      "We help organizations adopt AI with confidence through practical governance frameworks, independent architecture assurance and responsible AI practices — tailored to your industry, risk profile and business goals.",
    items: [
      {
        icon: "shield-check",
        title: "AI Governance Frameworks",
        description:
          "Define policies, roles and decision rights for responsible AI adoption.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=governance-frameworks",
      },
      {
        icon: "book-open",
        title: "Architecture & Design Reviews",
        description:
          "Independent review of AI architectures, models and data pipelines.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=architecture-reviews",
      },
      {
        icon: "settings",
        title: "Risk & Control Design",
        description:
          "Design risk management frameworks and control mechanisms for AI systems.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=risk-control",
      },
      {
        icon: "users",
        title: "Responsible AI & Ethics",
        description:
          "Embed ethical principles, fairness and human-centric AI practices.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=responsible-ai",
      },
      {
        icon: "check-circle-2",
        title: "Auditability & Compliance",
        description:
          "Enable traceability, explainability and compliance with regulatory requirements.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=compliance",
      },
      {
        icon: "layers-3",
        title: "Architecture Review Board (ARB)",
        description:
          "Establish independent review governance for AI initiatives.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=arb",
      },
    ],
  },

  architectureLens: {
    heading: "Governance Model",
    subtext:
      "A holistic framework that aligns people, processes, technology and oversight to enable responsible, scalable and trusted AI across your enterprise.",
    layers: [
      {
        icon: "shield",
        title: "TRUST",
        description: "Build confidence with stakeholders, customers and regulators.",
        variant: "orange",
      },
      {
        icon: "settings",
        title: "CONTROL",
        description: "Manage risk with clear policies, standards and governance mechanisms.",
        variant: "navy",
      },
      {
        icon: "check-circle-2",
        title: "ASSURANCE",
        description:
          "Validate architectures, controls and outcomes through independent review and continuous oversight.",
        variant: "slate",
      },
    ],
    footerNote: "RESPONSIBLE ENTERPRISE AI: TRUST · CONTROL · ASSURANCE",
  },

  howWeEngage: {
    heading: "Governance without paralysis",
    subtext:
      "A practical, phased approach to help you establish effective AI governance and architecture assurance — enabling responsible innovation without slowing down progress.",
    steps: [
      {
        number: "01",
        title: "Classify",
        description: "Understand AI use cases, risk profiles and regulatory requirements.",
      },
      {
        number: "02",
        title: "Define",
        description: "Establish governance frameworks, standards and decision rights.",
      },
      {
        number: "03",
        title: "Review",
        description: "Assess architectures, models and controls independently.",
      },
      {
        number: "04",
        title: "Monitor",
        description: "Track performance, risks and compliance continuously.",
      },
      {
        number: "05",
        title: "Evolve",
        description: "Refine and scale governance as AI matures and regulations change.",
      },
    ],
  },

  deliverables: {
    heading: "Typical Deliverables",
    subtext:
      "We provide clear, practical outputs to help you operationalize AI governance and architecture assurance.",
    items: [
      "AI governance framework and policy set",
      "Architecture review assessments and reports",
      "Risk and control design documentation",
      "Responsible AI principles and ethical guidelines",
      "Model auditability and explainability standards",
      "AI compliance readiness assessment",
      "Architecture Review Board (ARB) charter and process",
      "Governance operating model and RACI",
      "Monitoring and reporting frameworks",
      "Training and enablement materials",
    ],
  },

  outcomes: {
    heading: "Outcomes",
    subtext:
      "A stronger foundation for AI adoption that balances innovation with risk management, compliance and trust.",
    items: [
      {
        icon: "users",
        title: "Clear accountability",
        description: "Defined roles, decision rights and ownership.",
      },
      {
        icon: "book-open",
        title: "Consistent standards",
        description: "Enterprise-wide architecture practices.",
      },
      {
        icon: "shield-check",
        title: "Risk-based controls",
        description: "Proactive risk management and mitigation.",
      },
      {
        icon: "scale",
        title: "Regulatory readiness",
        description: "Alignment with current and emerging regulations.",
      },
      {
        icon: "star",
        title: "Transparency",
        description: "Greater visibility into AI systems and decisions.",
      },
      {
        icon: "sparkles",
        title: "Stronger trust",
        description: "Increased confidence with customers, regulators and stakeholders.",
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
          "Design scalable, future-ready architectures that connect data and AI with your business strategy.",
        linkUrl: "/services/enterprise-data-ai-architecture",
        linkText: "Learn More",
      },
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
    headingLine1: "Turn responsible AI into",
    headingLine2: "a competitive advantage.",
    subtext:
      "Let's assess your AI governance needs and design a practical roadmap for confident, scalable adoption.",
    primaryCtaText: "Assess Your AI Governance",
    primaryCtaLink: "/contact?topic=ai-governance",
    secondaryCtaText: "Explore Our Approach",
    secondaryCtaLink: "/services",
  },
};
