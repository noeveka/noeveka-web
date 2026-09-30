import type { ServiceDetailPageData } from "@/types/service-detail.types";

/**
 * Static configuration for "AI Governance & Architecture Assurance"
 * Source: noeveka_service_page_content.md (03 — AI Governance & Architecture Assurance)
 */
export const AI_GOVERNANCE_ARCHITECTURE_ASSURANCE_CONFIG: ServiceDetailPageData = {
  title: "AI Governance & Architecture Assurance",
  navLabel: "AI Governance & Architecture Assurance",
  slug: "ai-governance-architecture-assurance",
  seoDescription:
    "Build the governance, architecture assurance and accountability to adopt AI confidently while managing risk and compliance.",

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
      { tier: "TRUST", label: "Responsible AI, Transparency & Human Accountability" },
      { tier: "CONTROL", label: "Security, Risk, Identity & Data Access" },
      { tier: "ASSURANCE", label: "Architecture Review, Monitoring, Auditability & Compliance" },
    ],
  },

  challenge: {
    eyebrow: "The Challenge",
    heading: "AI introduces new capabilities, and new forms of enterprise risk.",
    paragraphs: [
      "Traditional technology governance was not designed for systems that generate content, make recommendations, reason across information and increasingly perform actions. Organisations need mechanisms that allow innovation to continue while ensuring AI remains secure, explainable, compliant and aligned with organisational values. Governance should create confidence to scale, not bureaucracy that prevents progress.",
    ],
    signalsHeading: "Common governance concerns:",
    signals: [
      "Lack of clear accountability and decision rights for AI",
      "Inconsistent architecture standards and fragmented oversight",
      "Model risks, hallucinations, bias and unintended outcomes",
      "Regulatory compliance readiness and upcoming audit scrutiny",
      "Limited visibility and traceability into automated decisions",
      "Governance bottlenecks slowing down high-value deployment",
    ],
  },

  whatWeDo: {
    eyebrow: "What We Do",
    heading: "Governance built into architecture.",
    subtext:
      "We help organisations establish practical governance frameworks, independent architecture assurance and responsible AI practices tailored to business risk and innovation goals.",
    items: [
      {
        icon: "shield-check",
        title: "AI Governance Frameworks",
        description:
          "Define decision rights, responsibilities, policies and governance mechanisms.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=governance-frameworks",
      },
      {
        icon: "book-open",
        title: "Architecture & Design Reviews",
        description:
          "Review proposed AI solutions before they become embedded in the technology landscape.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=architecture-reviews",
      },
      {
        icon: "settings",
        title: "Risk & Control Design",
        description:
          "Identify appropriate controls based on use-case risk and operational impact.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=risk-control",
      },
      {
        icon: "users",
        title: "Responsible AI & Ethics",
        description:
          "Translate responsible-AI principles into practical architecture and delivery decisions.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=responsible-ai",
      },
      {
        icon: "check-circle-2",
        title: "Auditability & Compliance",
        description:
          "Design traceability, documentation and evidence into AI solutions.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=compliance",
      },
      {
        icon: "layers-3",
        title: "Architecture Review Board",
        description:
          "Establish governance structures capable of reviewing evolving AI capabilities.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=arb",
      },
    ],
  },

  architectureLens: {
    eyebrow: "Visual Model",
    heading: "Governance Model",
    subtext:
      "Three concentric rings centred on Responsible Enterprise AI to provide trust, control, and architectural assurance.",
    layers: [
      {
        icon: "shield",
        title: "TRUST",
        description: "Responsible AI, Transparency, and Human accountability.",
        variant: "orange",
      },
      {
        icon: "settings",
        title: "CONTROL",
        description: "Security, Risk management, Identity, and Data access boundaries.",
        variant: "navy",
      },
      {
        icon: "check-circle-2",
        title: "ASSURANCE",
        description: "Architecture review, Continuous monitoring, Auditability, and Compliance.",
        variant: "slate",
      },
    ],
    footerNote: "Governance that enables responsible adoption, not governance that slows it down.",
  },

  howWeEngage: {
    eyebrow: "How We Engage",
    heading: "Governance without paralysis.",
    subtext:
      "A structured, risk-based approach that introduces checkpoints and clarity without impeding innovation velocity.",
    steps: [
      {
        number: "01",
        title: "Classify",
        description:
          "Understand AI use cases and their level of enterprise risk.",
      },
      {
        number: "02",
        title: "Define",
        description:
          "Establish appropriate policies, standards and controls.",
      },
      {
        number: "03",
        title: "Review",
        description:
          "Introduce architecture and governance checkpoints.",
      },
      {
        number: "04",
        title: "Monitor",
        description:
          "Track behaviour, compliance and emerging risks.",
      },
      {
        number: "05",
        title: "Evolve",
        description:
          "Adapt governance as technologies and regulation change.",
      },
    ],
  },

  deliverables: {
    eyebrow: "Deliverables",
    heading: "Typical Deliverables",
    subtext: "Clear, practical governance blueprints, review frameworks, and compliance playbooks.",
    items: [
      "AI governance framework and enterprise policy set",
      "Architecture review assessments and risk reports",
      "Risk and control design matrix across use-case tiers",
      "Responsible AI principles and implementation checklists",
      "Model traceability, lineage and auditability standards",
      "Regulatory compliance readiness assessments",
      "Architecture Review Board (ARB) charter and evaluation rubric",
    ],
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "Governance that enables responsible adoption.",
    subtext: "Delivering confidence, accountability, and regulatory trust across enterprise AI initiatives.",
    items: [
      {
        icon: "users",
        title: "Clear accountability for AI decisions",
        description: "Explicit roles, decision rights and escalation paths across stakeholders.",
      },
      {
        icon: "book-open",
        title: "Consistent architecture standards",
        description: "Unified principles preventing fragmentation across departments.",
      },
      {
        icon: "shield-check",
        title: "Risk-based rather than blanket controls",
        description: "Proportionate safeguards tailored to operational and reputational impact.",
      },
      {
        icon: "scale",
        title: "Improved regulatory readiness",
        description: "Full auditability and evidence alignment with global AI regulations.",
      },
      {
        icon: "star",
        title: "Greater transparency and auditability",
        description: "Verifiable model decisions, prompts, data lineage and outputs.",
      },
      {
        icon: "sparkles",
        title: "Stronger trust in enterprise AI",
        description: "Heightened confidence among customers, partners, and board members.",
      },
      {
        icon: "zap",
        title: "Faster approval of well-designed solutions",
        description: "Clear pathways for teams delivering compliant, high-quality architectures.",
      },
    ],
  },

  relatedExpertise: {
    eyebrow: "Related Expertise",
    heading: "Related Expertise",
    subtext: "Explore our other services to address your broader data and AI needs.",
    services: [
      {
        number: "01",
        icon: "layers-3",
        title: "Enterprise Data & AI Architecture",
        description:
          "Apply governance to a well-designed, trusted enterprise foundation.",
        linkUrl: "/services/enterprise-data-ai-architecture",
        linkText: "Learn More",
      },
      {
        number: "02",
        icon: "bot",
        title: "Enterprise AI & Agentic Systems",
        description:
          "Build agentic systems with governance and control designed in from the start.",
        linkUrl: "/services/enterprise-ai-agentic-systems",
        linkText: "Learn More",
      },
      {
        number: "04",
        icon: "trending-up",
        title: "Data & AI Transformation Advisory",
        description:
          "Embed governance into a wider transformation roadmap.",
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
