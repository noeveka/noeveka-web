import type { ServiceDetailPageData } from "@/types/service-detail.types";

/**
 * Fallback static configuration for "Enterprise AI & Agentic Systems"
 * Matches the structure and content tailored for Enterprise AI, GenAI & Agentic Systems.
 */
export const ENTERPRISE_AI_AGENTIC_SYSTEMS_CONFIG: ServiceDetailPageData = {
  title: "Enterprise AI & Agentic Systems",
  slug: "enterprise-ai-agentic-systems",
  seoDescription:
    "Architect and enable production-ready AI and agentic systems with governance, security, and enterprise integration by design.",

  hero: {
    badge: "ENTERPRISE AI & AGENTIC SYSTEMS",
    heading: "Architect and enable production-ready",
    headingHighlight: "AI & agentic systems.",
    description:
      "Move beyond experiments and isolated models to production-grade agentic architectures. We design secure, scalable multi-agent systems, robust RAG pipelines, and enterprise tool integrations built for measurable business value.",
    primaryCtaText: "Discuss Your AI Systems",
    primaryCtaLink: "/contact?topic=agentic-ai",
    secondaryCtaText: "Explore Our Approach",
    secondaryCtaLink: "#what-we-do",
    heroImageUrl: "/assets/services/service_three_hero_image.jpeg",
    stackAnnotations: [
      { tier: "ORCHESTRATION", label: "Multi-Agent Coordination & Workflow" },
      { tier: "INTEGRATION", label: "Enterprise Data, APIs & Tools" },
      { tier: "GOVERNANCE", label: "Security, Identity & Human Oversight" },
      { tier: "OBSERVABILITY", label: "Continuous Evaluation & Monitoring" },
    ],
  },

  challenge: {
    heading: "The Challenge",
    paragraphs: [
      "While generative AI demos and basic prompts are quick to assemble, deploying reliable, production-ready AI agents across the enterprise introduces steep hurdles. Fragile context windows, hallucination risks, tool authorization vulnerabilities, and unpredictable latency frequently stall initiatives before they reach real business scale.",
      "Without a unified agentic architecture connecting foundation models to enterprise data, access controls, and operational workflows, organizations struggle to deliver trusted autonomy and sustained ROI.",
    ],
    signalsHeading: "COMMON AGENTIC AI ROADBLOCKS",
    signals: [
      "Prototypes failing to transition into reliable production workflows",
      "Hallucinations, unpredictable reasoning, and lack of deterministic guardrails",
      "Siloed model deployments without enterprise data access or tool integration",
      "Unclear identity, permissions, and security risks when agents invoke APIs",
      "Absence of human-in-the-loop oversight and audit trails",
      "Spiraling inference compute costs and untracked token usage",
    ],
  },

  whatWeDo: {
    heading: "What We Do",
    subtext:
      "We design and build production-grade AI and agentic architectures that connect foundation models to enterprise systems with safety, determinism, and scale.",
    items: [
      {
        icon: "bot",
        title: "Enterprise AI Agents & RAG",
        description:
          "Architect robust Retrieval-Augmented Generation (RAG) and domain-specific agents connected to your data foundations.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=rag-agents",
      },
      {
        icon: "network",
        title: "Multi-Agent Orchestration",
        description:
          "Design hierarchical, collaborative multi-agent workflows with state machines and deterministic handoffs.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=orchestration",
      },
      {
        icon: "key",
        title: "Tool Integration & Identity",
        description:
          "Enable agents to invoke enterprise APIs safely with granular permissions, authentication, and boundary controls.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=tool-identity",
      },
      {
        icon: "user",
        title: "Human-in-the-Loop Design",
        description:
          "Embed proactive review, approval gates, and escalation protocols for sensitive, high-impact business decisions.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=human-in-the-loop",
      },
      {
        icon: "activity",
        title: "Observability & Monitoring",
        description:
          "Implement end-to-end tracing, prompt logging, latency benchmarks, and continuous automated quality evaluations.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=observability",
      },
      {
        icon: "shield-check",
        title: "Security & Guardrails",
        description:
          "Deploy prompt injection defenses, PII redaction filters, and safety boundaries to safeguard enterprise assets.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=security-guardrails",
      },
    ],
  },

  architectureLens: {
    heading: "Agentic Architecture Stack",
    subtext:
      "A comprehensive architecture framework connecting intelligence to enterprise execution with security and oversight at every tier.",
    layers: [
      {
        icon: "database",
        title: "ENTERPRISE DATA",
        description: "Curated vector indices, semantic layers, and structured knowledge graphs.",
        variant: "navy",
      },
      {
        icon: "cpu",
        title: "ORCHESTRATION",
        description: "Multi-agent planning, state preservation, memory, and model dispatch.",
        variant: "orange",
      },
      {
        icon: "network",
        title: "APIS & TOOLS",
        description: "Enterprise connectors, CRM/ERP integrations, and autonomous task execution.",
        variant: "slate",
      },
      {
        icon: "shield-check",
        title: "GOVERNANCE & TRUST",
        description: "Identity boundaries, prompt firewalls, audit logs, and human-in-the-loop gates.",
        variant: "navy",
      },
    ],
    footerNote: "END-TO-END AUTONOMY POWERED BY ENTERPRISE DATA, PROTOCOLS & GOVERNANCE",
  },

  howWeEngage: {
    heading: "How We Engage",
    subtext:
      "A pragmatic engineering roadmap to take agentic initiatives from concept validation to resilient, production-ready enterprise execution.",
    steps: [
      {
        number: "01",
        title: "Assess",
        description: "Evaluate use case viability, data readiness, latency needs, and security constraints.",
      },
      {
        number: "02",
        title: "Architect",
        description: "Design agent topologies, memory structures, tool interfaces, and guardrails.",
      },
      {
        number: "03",
        title: "Prototype",
        description: "Build rapid proof-of-value implementations to benchmark accuracy and performance.",
      },
      {
        number: "04",
        title: "Integrate",
        description: "Connect agents with enterprise IAM, event streams, APIs, and observability stacks.",
      },
      {
        number: "05",
        title: "Scale",
        description: "Optimize inference costs, harden failovers, and institute automated evaluation loops.",
      },
    ],
  },

  deliverables: {
    heading: "Typical Deliverables",
    subtext:
      "We provide actionable engineering blueprints and reference implementations tailored to your tech stack.",
    items: [
      "Enterprise AI & Agentic Architecture Blueprint",
      "Production RAG & vector retrieval architecture specifications",
      "Multi-agent orchestration state diagrams and handoff specs",
      "Tool invocation protocol & secure API integration designs",
      "Human-in-the-loop review workflow & escalation framework",
      "Agent security, prompt firewall & data access policy",
      "Continuous observability, tracing & evaluation pipeline",
      "Inference compute cost optimization & caching strategy",
      "Model evaluation benchmarks & ground-truth validation set",
      "Developer enablement playbooks and reference codebases",
    ],
  },

  outcomes: {
    heading: "Outcomes",
    subtext:
      "Deliver measurable operational efficiency, automated precision, and faster time-to-value with dependable agentic systems.",
    items: [
      {
        icon: "zap",
        title: "Operational Velocity",
        description: "Accelerate multi-step business workflows through autonomous execution.",
      },
      {
        icon: "shield-check",
        title: "Trusted Execution",
        description: "Minimize hallucinations with grounded enterprise RAG and guardrails.",
      },
      {
        icon: "layers-3",
        title: "Seamless Integration",
        description: "Connect agents natively into existing CRM, ERP, and database systems.",
      },
      {
        icon: "bar-chart-3",
        title: "Cost Efficiency",
        description: "Optimize token usage and route tasks efficiently across model tiers.",
      },
      {
        icon: "user",
        title: "Human Empowerment",
        description: "Automate repetitive tasks while preserving critical human judgment.",
      },
      {
        icon: "trending-up",
        title: "Scalable Foundation",
        description: "A flexible architecture ready for future model breakthroughs.",
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
          "Design enterprise-grade Data & AI architectures that connect business strategy with scalable, future-ready technology foundations.",
        linkUrl: "/services/enterprise-data-ai-architecture",
        linkText: "Learn More",
      },
      {
        number: "03",
        icon: "shield-check",
        title: "AI Governance & Architecture Assurance",
        description:
          "Build trust, reduce risk and ensure responsible AI at scale with independent architecture reviews.",
        linkUrl: "/services/ai-governance-architecture-assurance",
        linkText: "Learn More",
      },
      {
        number: "04",
        icon: "trending-up",
        title: "Data & AI Transformation Advisory",
        description:
          "Turn ambition into execution with practical transformation strategies and leadership.",
        linkUrl: "/services/data-ai-transformation-advisory",
        linkText: "Learn More",
      },
    ],
  },

  bottomCta: {
    headingLine1: "Ready to deploy production-grade",
    headingLine2: "AI & agentic systems?",
    subtext:
      "Partner with Noeveka to design secure, scalable agentic architectures that deliver measurable enterprise impact.",
    primaryCtaText: "Discuss Your AI Systems",
    primaryCtaLink: "/contact?topic=agentic-ai",
    secondaryCtaText: "Explore All Services",
    secondaryCtaLink: "/services",
  },
};
