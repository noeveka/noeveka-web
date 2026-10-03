import type { ServiceDetailPageData } from "@/types/service-detail.types";

/**
 * Static configuration for "Data & AI Transformation Advisory"
 * Source: noeveka_service_page_content.md (04 - Data & AI Transformation Advisory)
 */
export const DATA_AI_TRANSFORMATION_ADVISORY_CONFIG: ServiceDetailPageData = {
  title: "Data & AI Transformation Advisory",
  navLabel: "Data & AI Transformation Advisory",
  slug: "data-ai-transformation-advisory",
  seoDescription:
    "Connect strategy, architecture, operating model and delivery into a practical transformation path that creates measurable enterprise value.",

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
      {
        tier: "ASSESS",
        label: "Where are we today? Diagnose maturity & constraints",
      },
      {
        tier: "DESIGN",
        label: "What must change? Target architecture & operating model",
      },
      {
        tier: "EXECUTE",
        label: "How do we get there? Mobilise programmes & governance",
      },
      {
        tier: "SCALE",
        label: "How does it become sustainable? Lasting enterprise impact",
      },
    ],
  },

  challenge: {
    eyebrow: "The Challenge",
    heading:
      "Transformation fails when strategy and execution become disconnected.",
    paragraphs: [
      "Many organisations have ambitious data and AI strategies. Far fewer have clearly defined how architecture, platforms, governance, operating models, people and delivery need to change together. Without that connection, organisations accumulate initiatives but struggle to create enterprise-wide capability.",
    ],
    signalsHeading: "Common transformation challenges:",
    signals: [
      "Ambitious strategy disconnected from technology delivery",
      "Fragmented data platforms and accumulated point solutions",
      "Unclear operating model, roles and decision ownership",
      "Architecture failing to evolve alongside business goals",
      "Competing transformation priorities without clear sequencing",
      "Difficulty embedding sustained cultural and technical adoption",
    ],
  },

  whatWeDo: {
    eyebrow: "What We Do",
    heading: "Bring strategy, architecture and execution together.",
    subtext:
      "We help organisations plan and execute practical Data & AI transformations by aligning strategy, modern architectures, operating models and sequenced delivery.",
    items: [
      {
        icon: "bar-chart-3",
        title: "Current-State Assessment",
        description:
          "Establish an objective view of technology, architecture, organisation and maturity.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=current-state-assessment",
      },
      {
        icon: "crosshair",
        title: "Target Operating Model",
        description:
          "Define how teams, decision rights, governance and capabilities should work together.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=target-operating-model",
      },
      {
        icon: "book-open",
        title: "Transformation Roadmap",
        description:
          "Translate strategic objectives into sequenced initiatives and investment priorities.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=transformation-roadmap",
      },
      {
        icon: "layers-3",
        title: "Technology Rationalisation",
        description:
          "Identify duplication, complexity and opportunities to simplify the technology estate.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=technology-rationalisation",
      },
      {
        icon: "users",
        title: "Capability Roadmap",
        description:
          "Define the organisational and technical capabilities required over time.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=capability-roadmap",
      },
      {
        icon: "user",
        title: "Executive Advisory",
        description:
          "Provide senior independent guidance for critical transformation decisions.",
        linkText: "Learn More",
        linkUrl: "/contact?topic=executive-advisory",
      },
    ],
  },

  architectureLens: {
    eyebrow: "Visual Model",
    heading: "Transformation Model",
    subtext:
      "A signature horizontal progression moving from diagnosis to sustainable enterprise adoption.",
    layers: [
      {
        icon: "search",
        title: "ASSESS",
        description:
          "Where are we today? Diagnose maturity, landscape, constraints and ambitions.",
        variant: "navy",
      },
      {
        icon: "lightbulb",
        title: "DESIGN",
        description:
          "What must change? Define target architecture, operating model and transformation path.",
        variant: "navy",
      },
      {
        icon: "settings",
        title: "EXECUTE",
        description:
          "How do we get there? Mobilise programmes, roadmap delivery and governance.",
        variant: "slate",
      },
      {
        icon: "trending-up",
        title: "SCALE",
        description:
          "How does it become sustainable? Continuous enablement, culture and lasting adoption.",
        variant: "orange",
      },
    ],
    footerNote: "Strategy · Architecture · Governance · People · Technology",
  },

  howWeEngage: {
    eyebrow: "How We Engage",
    heading: "How we engage.",
    subtext:
      "A collaborative, phased advisory model to guide your transformation from diagnosis to lasting scale.",
    steps: [
      {
        number: "01",
        title: "Diagnose",
        description:
          "Understand ambitions, constraints and existing transformation initiatives.",
      },
      {
        number: "02",
        title: "Prioritise",
        description:
          "Identify the decisions and capabilities with the greatest enterprise impact.",
      },
      {
        number: "03",
        title: "Design",
        description:
          "Define target architecture, operating model and transformation path.",
      },
      {
        number: "04",
        title: "Mobilise",
        description:
          "Translate direction into actionable programmes and governance.",
      },
      {
        number: "05",
        title: "Advise",
        description: "Provide senior guidance as transformation progresses.",
      },
    ],
  },

  deliverables: {
    eyebrow: "Deliverables",
    heading: "Typical Deliverables",
    subtext:
      "Comprehensive advisory deliverables designed for executive decision-makers and delivery leaders.",
    items: [
      "Current-state assessment and maturity diagnosis",
      "Target operating model and governance design",
      "Sequenced transformation roadmap with milestone outcomes",
      "Architecture and technology rationalisation plan",
      "Organisational capability and skills development roadmap",
      "Executive steering briefings and board presentation materials",
    ],
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "Transformation with direction.",
    subtext:
      "Driving alignment, reduced fragmentation, and sustainable enterprise capability.",
    items: [
      {
        icon: "crosshair",
        title: "Clear enterprise priorities",
        description:
          "Focused investment on highest-value initiatives rather than fragmented experiments.",
      },
      {
        icon: "layers-3",
        title: "Reduced technology fragmentation",
        description:
          "Rationalised systems, eliminated redundancies and streamlined architectures.",
      },
      {
        icon: "network",
        title: "Stronger alignment between business and technology",
        description:
          "A shared roadmap connecting strategic intent with practical engineering execution.",
      },
      {
        icon: "shield-check",
        title: "Defined ownership and operating model",
        description:
          "Clarity on team structures, decision rights, and governance boundaries.",
      },
      {
        icon: "bar-chart-3",
        title: "More focused investment",
        description:
          "Targeted capital allocation that maximizes ROI and accelerates value delivery.",
      },
      {
        icon: "book-open",
        title: "Practical transformation sequencing",
        description:
          "Pragmatic, phased milestones preventing operational disruption.",
      },
      {
        icon: "users",
        title: "Greater organisational capability",
        description:
          "Upskilled internal teams and institutionalised architectural practices.",
      },
      {
        icon: "star",
        title: "Sustainable adoption of data and AI",
        description:
          "A durable foundation enabling ongoing innovation and long-term competitiveness.",
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
          "The architecture foundation that underpins a wider transformation.",
        linkUrl: "/services/enterprise-data-ai-architecture",
        linkText: "Learn More",
      },
      {
        number: "02",
        icon: "bot",
        title: "Enterprise AI & Agentic Systems",
        description:
          "Bring AI and agentic capability into the transformation roadmap.",
        linkUrl: "/services/enterprise-ai-agentic-systems",
        linkText: "Learn More",
      },
      {
        number: "03",
        icon: "shield-check",
        title: "AI Governance & Architecture Assurance",
        description:
          "Keep the transformation compliant, auditable and well-governed as it scales.",
        linkUrl: "/services/ai-governance-architecture-assurance",
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
