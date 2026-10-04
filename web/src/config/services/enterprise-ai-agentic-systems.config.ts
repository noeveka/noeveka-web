import type { ServiceDetailPageData } from "@/types/service-detail.types";

/**
 * Static configuration for "Enterprise AI & Agentic Systems"
 * Source: noeveka_service_page_content.md (02 - Enterprise AI & Agentic Systems)
 */
export const ENTERPRISE_AI_AGENTIC_SYSTEMS_CONFIG: ServiceDetailPageData = {
  title: "Enterprise AI & Agentic Systems Architecture",
  navLabel: "Enterprise AI & Agentic Systems",
  slug: "enterprise-ai-agentic-systems",
  seoDescription:
    "Design and enable production-ready AI and agentic systems with the architecture, governance and enterprise integration to operate at scale.",

  hero: {
    badge: "ENTERPRISE AI & AGENTIC SYSTEMS",
    heading: "Move AI from experimentation to",
    headingHighlight: "enterprise capability.",
    description:
      "Design and enable production-ready AI and agentic systems with the architecture, governance, security and enterprise integration required to operate reliably at scale.",
    primaryCtaText: "Discuss Your AI Architecture",
    primaryCtaLink: "/contact?topic=ai-architecture",
    secondaryCtaText: "Explore Our Approach",
    heroImageUrl: "/assets/services/enterprise_ai_agentic_systems.jpeg",
    heroMobileImageUrl: "/assets/services/enterprise_ai_agentic_systems_mobile.png",
    stackAnnotations: [
      {
        tier: "DATA & KNOWLEDGE",
        label: "Enterprise Data, Knowledge & Models",
      },
      { tier: "AI AGENTS", label: "Autonomous Reasoning & Task Execution" },
      { tier: "APIS & TOOLS", label: "Business Applications & API Connectors" },
      {
        tier: "GOVERNANCE",
        label: "Security, Identity, Observability & Oversight",
      },
    ],
  },

  challenge: {
    eyebrow: "The Challenge",
    heading:
      "Building an AI demo is easy. Building an enterprise AI capability is not.",
    paragraphs: [
      "Many organisations can demonstrate generative AI use cases. The harder questions come next: how will agents access enterprise data securely, how are models selected and governed, how are actions authorised, how are outputs monitored, how do multiple agents coordinate, and how does AI become part of existing enterprise processes. Without architecture, experimentation quickly creates another layer of technology fragmentation.",
    ],
    signalsHeading: "Common operational hurdles:",
    signals: [
      "Securing enterprise data access without context leakage",
      "Selecting and governing models across distributed teams",
      "Authorising autonomous actions and API execution safely",
      "Monitoring agent outputs, hallucinations, cost and drift",
      "Coordinating multi-agent collaboration and delegation",
      "Embedding agentic capabilities into mission-critical processes",
    ],
  },

  whatWeDo: {
    eyebrow: "What We Do",
    heading: "Architect AI as part of the enterprise, not beside it.",
    subtext:
      "We design and build production-grade agentic architectures that connect foundation models to enterprise systems with safety, determinism, and scale.",
    items: [
      {
        icon: "bot",
        title: "GenAI & RAG Architecture",
        description:
          "Design enterprise patterns for grounding AI models in trusted organisational knowledge.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=rag-architecture",
      },
      {
        icon: "cpu",
        title: "Enterprise AI Agents",
        description:
          "Architect agents capable of reasoning, retrieving information and executing controlled tasks.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=enterprise-agents",
      },
      {
        icon: "network",
        title: "Multi-Agent Orchestration",
        description:
          "Define how specialised agents collaborate, delegate and coordinate.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=multi-agent-orchestration",
      },
      {
        icon: "key",
        title: "Tool Integration & Identity",
        description:
          "Connect agents securely with enterprise applications, APIs and data.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=tool-integration-identity",
      },
      {
        icon: "user",
        title: "Human-in-the-Loop Design",
        description:
          "Identify where human judgement, approval and intervention must remain part of the process.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=human-in-the-loop",
      },
      {
        icon: "activity",
        title: "Observability & Monitoring",
        description:
          "Define how agent behaviour, quality, cost and performance are measured.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=agent-observability",
      },
    ],
  },

  architectureLens: {
    eyebrow: "Visual Model",
    heading: "Enterprise Agent Architecture",
    subtext:
      "A signature hub-and-spoke agent architecture connecting models to enterprise systems with control and oversight.",
    layers: [
      {
        icon: "database",
        title: "ENTERPRISE DATA & KNOWLEDGE",
        description:
          "Enterprise Data, Knowledge graphs and curated context foundations.",
        variant: "navy",
      },
      {
        icon: "bot",
        title: "AI AGENTS",
        description:
          "Reasoning engines, specialized agents, delegation and planning loops.",
        variant: "orange",
      },
      {
        icon: "network",
        title: "APIS & TOOLS",
        description:
          "Enterprise systems, CRM/ERP connectors, databases and tools.",
        variant: "slate",
      },
      {
        icon: "shield-check",
        title: "GOVERNANCE & CONTROL",
        description:
          "Security, identity boundaries, observability and human oversight.",
        variant: "navy",
      },
    ],
    footerNote:
      "Core Hub: AI Agents connected to Enterprise Data, Tools & APIs with Governance & Human Oversight.",
  },

  howWeEngage: {
    eyebrow: "How We Engage",
    heading: "From AI use case to operating capability.",
    subtext:
      "A structured pathway taking agentic initiatives from concept validation to resilient, production-ready enterprise execution.",
    steps: [
      {
        number: "01",
        title: "Identify",
        description:
          "Prioritise business problems where AI can create meaningful value.",
      },
      {
        number: "02",
        title: "Architect",
        description:
          "Define data, model, agent, integration and security requirements.",
      },
      {
        number: "03",
        title: "Prototype",
        description: "Validate the architecture and value proposition rapidly.",
      },
      {
        number: "04",
        title: "Industrialise",
        description:
          "Introduce reliability, monitoring, identity and enterprise controls.",
      },
      {
        number: "05",
        title: "Scale",
        description: "Create reusable patterns for future AI capabilities.",
      },
    ],
  },

  deliverables: {
    eyebrow: "Deliverables",
    heading: "Typical Deliverables",
    subtext:
      "Engineering blueprints, integration protocols, and evaluation frameworks.",
    items: [
      "Enterprise AI & Agentic Architecture Blueprint",
      "Production RAG & vector retrieval architecture specifications",
      "Multi-agent orchestration state diagrams and handoff specs",
      "Tool invocation protocol & secure API integration designs",
      "Human-in-the-loop review workflow & escalation framework",
      "Agent security, prompt firewall & data access policy",
      "Continuous observability, tracing & evaluation pipeline",
      "Model evaluation benchmarks & ground-truth validation set",
    ],
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "AI that can operate beyond the prototype.",
    subtext:
      "Transitioning AI from fragile proof-of-concept into hardened enterprise capability.",
    items: [
      {
        icon: "shield-check",
        title: "Production-ready architecture",
        description:
          "Hardened infrastructure built to support real enterprise load and concurrency.",
      },
      {
        icon: "network",
        title: "Secure enterprise integration",
        description:
          "Safe data and tool access boundaries complying with enterprise security standards.",
      },
      {
        icon: "layers-3",
        title: "Reusable AI patterns",
        description:
          "Shared components that accelerate subsequent AI initiatives across teams.",
      },
      {
        icon: "crosshair",
        title: "Better model and platform decisions",
        description:
          "Objective technology selection tailored to latency, cost and governance needs.",
      },
      {
        icon: "cpu",
        title: "Controlled autonomous execution",
        description:
          "Deterministic guardrails keeping agent tasks verifiable and accountable.",
      },
      {
        icon: "zap",
        title: "Reduced AI experimentation debt",
        description:
          "Elimination of brittle point solutions through unified architectural standards.",
      },
      {
        icon: "star",
        title: "Confidence scaling across organisation",
        description:
          "Executive and operational clarity to deploy AI capabilities enterprise-wide.",
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
        number: "01",
        icon: "layers-3",
        title: "Enterprise Data & AI Architecture",
        description:
          "Give AI a trusted, well-governed enterprise foundation to build on.",
        linkUrl: "/services/enterprise-data-ai-architecture",
        linkText: "Learn More",
      },
      {
        number: "03",
        icon: "shield-check",
        title: "AI Governance & Architecture Assurance",
        description:
          "Build the trust and control layer around agentic systems as they scale.",
        linkUrl: "/services/ai-governance-architecture-assurance",
        linkText: "Learn More",
      },
      {
        number: "04",
        icon: "trending-up",
        title: "Data & AI Transformation Advisory",
        description:
          "Turn a working AI capability into an enterprise-wide programme.",
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
