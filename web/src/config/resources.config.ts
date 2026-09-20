export const RESOURCES_CONFIG = {
  // Page Hero Copy
  hero: {
    heading: "Architecture thinking,",
    headingHighlight: "yours to keep.",
    subtext:
      "Practical checklists, playbooks, and guides built by enterprise architects — no fluff, no vendor bias. Download free.",
  },

  // Grid Section Copy
  section: {
    eyebrow: "Categories",
    heading: "Explore Our Resources",
    subtext:
      "Find practical materials designed to help enterprise data teams architect better, move faster, and cut through vendor noise.",
    emptyStateText: "No resources in this category yet — check back soon.",
    downloadCtaText: "Download Free",
    downloadHoverText: "Download PDF",
    authorName: "Noeveka",
    authorAvatar: "/assets/team-pictures/noeveka_founder_final.png",
    pageLabelSingular: "Page",
    pageLabelPlural: "Pages",
    formatLabel: "PDF",
  },

  // Filter categories
  categories: ["All", "Checklist", "Playbook", "Guide", "Template", "Whitepaper"],

  // Fallback thumbnail
  fallbackThumbnailUrl: "/assets/Databricks-featured.jpg",

  // Fallback resources shown until Sanity data loads
  fallbackResources: [
    {
      _id: "fallback-1",
      title: "Power BI Health Checklist",
      description:
        "A 12-point architecture audit checklist to identify hidden performance and security risks in your Power BI estate.",
      category: "Checklist",
      tech: "powerbi",
      pageCount: 12,
      isFeatured: true,
      thumbnailUrl: null,
      pdfUrl: null as string | null,
    },
    {
      _id: "fallback-2",
      title: "Microsoft Fabric Readiness Playbook",
      description:
        "Step-by-step readiness framework for enterprises evaluating a move to Microsoft Fabric. Covers governance, cost, and architecture.",
      category: "Playbook",
      tech: "fabric",
      pageCount: 24,
      isFeatured: true,
      thumbnailUrl: null,
      pdfUrl: null as string | null,
    },
    {
      _id: "fallback-3",
      title: "Databricks Cost Governance Template",
      description:
        "A ready-to-use cost governance template for Databricks clusters. Track compute spend, set auto-scaling budgets, and cut waste.",
      category: "Template",
      tech: "databricks",
      pageCount: 8,
      isFeatured: false,
      thumbnailUrl: "/assets/Databricks-featured.jpg",
      pdfUrl: null as string | null,
    },
    {
      _id: "fallback-4",
      title: "GenAI Data Architecture Guide",
      description:
        "Practical guide for architecting enterprise data platforms for GenAI workloads. Lakehouse, vector stores, and RAG patterns.",
      category: "Guide",
      tech: "genai",
      pageCount: 18,
      isFeatured: false,
      thumbnailUrl: null,
      pdfUrl: null as string | null,
    },
    {
      _id: "fallback-5",
      title: "Azure Data Platform Decision Guide",
      description:
        "Structured decision framework for choosing between Azure Synapse, Fabric, and Databricks. Compare cost, scale, and team fit.",
      category: "Guide",
      tech: "azure",
      pageCount: 16,
      isFeatured: false,
      thumbnailUrl: null,
      pdfUrl: null as string | null,
    },
    {
      _id: "fallback-6",
      title: "Enterprise Data Strategy Whitepaper",
      description:
        "The strategic case for treating data as a product — and how enterprise leaders can build platforms that generate business value.",
      category: "Whitepaper",
      tech: "strategy",
      pageCount: 32,
      isFeatured: false,
      thumbnailUrl: null,
      pdfUrl: null as string | null,
    },
  ],

  // Download modal copy
  downloadModal: {
    heading: "Get your free resource",
    subtext:
      "Enter your name and email to instantly download. No account needed.",
    consentText:
      "I agree to receive emails from Noeveka, including marketing communications. Unsubscribe anytime.",
    submitText: "Download Now",
    successHeading: "Your download is ready!",
    successSubtext:
      "Thank you — check your email too, we'll send you a copy. You can unsubscribe anytime.",
    downloadButtonText: "Click here to download",
  },
} as const;
