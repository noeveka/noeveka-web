export const ABOUT_CONFIG = {
  // Page Hero
  hero: {
    badge: "About Us",
    headingLine1: "Architect-Led Clarity for",
    headingLine2: "Enterprise Ambition",
    headingHighlight: "",
    subheading: "From BI Consulting Pro to NOE·V·EKA — Architecting the AI Era.",
    subtext:
      "Noeveka is an independent enterprise advisory delivering architect-grade data platform strategy, Fabric & Databricks implementation, and GenAI governance.",
    ctaPrimaryText: "Let's Talk",
    ctaPrimaryLink: "/contact",
    ctaSecondaryText: "Explore Focus Areas",
    ctaSecondaryLink: "/services",
    
    // Background and founder images
    // Desktop: landscape/cinematic 16:9 ratio; Mobile: portrait/compact 4:3 or 1:1 ratio
    bgImageFallbackUrl: "/assets/about-page/about_page_hero_image.png",
    bgImageAlt: "Ajay Kumar — Founder & CEO, Noeveka",
    mobileBgImageFallbackUrl: "/assets/team-pictures/noeveka_founder_picture_2.jpeg",

    // Highlight metrics & credibility tags
    badgeTags: ["Independent Advisory", "Global Architecture", "15+ Yrs Exp"],
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "3", label: "Global Hubs" },
      { value: "5K+", label: "Leaders Trained" },
      { value: "100%", label: "Independent" },
    ],
    mobileStats: [
      { value: "15+", label: "Yrs experience" },
      { value: "5K+", label: "Leaders trained" },
      { value: "100%", label: "Independent" },
    ],
  },

  // Founder section
  founder: {
    eyebrow: "FOUNDER",
    heading: "Meet The Founder",
    name: "Ajay Kumar",
    nameFirst: "Ajay",
    nameLast: "Kumar",
    initials: "AK",
    title: "Founder & Principal Data, AI & Enterprise Architect",
    company: "NOE·V·EKA",
    tagline: "Technology changes. Good architecture creates lasting advantage.",
    quoteHighlight: "lasting advantage.",
    bio: [
      "Ajay Kumar is the founder of NOE·V·EKA and an enterprise technology leader with 15+ years of experience designing and delivering data, analytics, cloud and AI capabilities for global organisations.",
      "He combines deep technical architecture with business, product and leadership experience — helping organisations turn complex technology challenges into pragmatic, scalable and governed solutions that create real business value.",
    ],
    whyFoundedHeading: "Why He Founded NOE·V·EKA?",
    whyFoundedText:
      "NOE·V·EKA was created around a simple belief: enterprises need independent, architect-grade thinking before technology decisions. Too many organisations invest in tools without a clear architecture, governance or execution plan — leading to fragmented platforms, higher costs and limited business impact.\n\nAjay founded NOE·V·EKA to bridge this gap — bringing together strategy, architecture and hands-on engineering to help organisations build modern, governed and future-ready data and AI capabilities, including the next generation of agentic systems.",
    whyFoundedParagraphs: [
      "NOE·V·EKA was created around a simple belief: enterprises need independent, architect-grade thinking before technology decisions. Too many organisations invest in tools without a clear architecture, governance or execution plan — leading to fragmented platforms, higher costs and limited business impact.",
      "Ajay founded NOE·V·EKA to bridge this gap — bringing together strategy, architecture and hands-on engineering to help organisations build modern, governed and future-ready data and AI capabilities, including the next generation of agentic systems.",
    ],
    statusBadges: [
      {
        icon: "map-pin",
        title: "Netherlands",
        subtext: "Based in Europe\nGlobal Experience",
      },
      {
        icon: "globe",
        title: "Open to Global Opportunities",
      },
      {
        icon: "laptop",
        title: "Remote First",
        subtext: "(with occasional travel)",
      },
      {
        icon: "handshake",
        title: "Advisory | Architecture | Delivery Support",
      },
    ],
    focusPillars: [
      {
        icon: "layers-3",
        title: "Enterprise Architecture",
        desc: "From strategy to execution across data, AI and digital platforms.",
        color: "orange",
      },
      {
        icon: "bar-chart-3",
        title: "Data & AI Platforms",
        desc: "Designing modern, scalable and governed platforms.",
        color: "blue",
      },
      {
        icon: "shield-check",
        title: "Governed & Agentic AI",
        desc: "Responsible, secure and production-grade AI solutions.",
        color: "purple",
      },
      {
        icon: "users",
        title: "Engineering Leadership",
        desc: "Building and leading high-performing, global teams.",
        color: "green",
      },
    ],
    credentials: [
      { label: "Microsoft Certified", value: "Fabric & Azure Expert" },
      { label: "Databricks Certified", value: "Data Engineer & Architect" },
      { label: "Enterprise Experience", value: "15+ Years" },
      { label: "Clients Trained", value: "5,000+ Leaders" },
    ],
    photoFallbackUrl:
      "/assets/about-page/ajay_image_for_founder_section_about_page.jpg",
    photoAlt: "Ajay Kumar — Founder & Principal Data, AI & Enterprise Architect, Noeveka",
    linkedinUrl: "https://www.linkedin.com/company/noeveka",
    email: "hello@noeveka.com",
    contactLink: "/contact",
  },

  // Narrative / "The Frustration & The Realisation" Story Section (placed right after Hero)
  narrativeSection: {
    // Upper Block: The Frustration We Saw
    topBlock: {
      eyebrow: "The Frustration We Saw",
      headingLine1: "When It Feels Like Your",
      headingLine2: "Firm's Running on",
      headingLine3: "Spreadsheets, Silos, and",
      headingHighlight: "Pure Grit",
      paragraph1:
        "Across modern enterprises, leadership teams are struggling with fragmented data systems that refuse to talk to each other. Ad-hoc pipelines, fragile spreadsheet models, inconsistent governance, and cloud costs spiraling out of control.",
      paragraph2:
        "We searched for independent, architect-grade guidance in the market — but all we found were vendor reseller pitches, massive agency overheads, and slide decks without real implementation rigor.",
      punchline: "There had to be a better way...",
    },

    // Middle Media Banner (Editorial Workspace Desk Photo)
    image: {
      url: "/assets/about-page/about_page_img_second.png",
      alt: "Noeveka enterprise architecture workspace desk with data models and technical blueprints",
      aspectRatio: "16/9",
    },

    // Lower Block: The Moment We Realised It
    bottomBlock: {
      eyebrowPart1: "The Moment",
      eyebrowHighlight: "We Realised It",
      headingPlain: "You Don't Need to Start Over. You Just Need",
      headingHighlight: "Things to Work Better.",
      paragraph:
        "Most enterprises aren't asking for an expensive, multi-year rip-and-replace of their entire stack. They just want clean data foundations, reliable AI workflows, sane governance, and architecture that empowers their teams to move fast without breaking compliance.",
      punchline: "That's exactly what we set out to build.",
    },
  },

  // Resources teaser (CredentialsStrip component)
  resourcesTeaser: {
    heading: "Architecture thinking,",
    headingHighlight: "yours to keep.",
    subtext:
      "Practical checklists, playbooks, and guides built by enterprise architects — no fluff, no vendor bias.",
    cardLinkText: "Get Free Download",
    cardLinkHref: "/resources",
    ctaText: "Explore All Free Resources",
    ctaLink: "/resources",
  },

  // Mission strip
  mission: {
    statement: "To make world-class data architecture thinking accessible to every enterprise — independent, practical, and built for impact.",
    pillars: [
      { number: "01", title: "Independent", desc: "Zero vendor reseller relationships. We recommend what is right for you, not what earns us a commission." },
      { number: "02", title: "Architect-Led", desc: "Every advisory, workshop, and playbook is delivered by senior architects who have shipped at enterprise scale." },
      { number: "03", title: "Outcome-Driven", desc: "Every engagement is tied to measurable business outcomes — cost reduction, platform clarity, or team capability." },
    ],
  },

  // Values
  values: {
    heading: "Principles we refuse to compromise.",
    items: [
      { icon: "Scale", title: "Independence", desc: "No vendor partnerships. No hidden incentives. Just honest architectural judgment." },
      { icon: "Lightbulb", title: "Clarity", desc: "Complex data architecture translated into clear, actionable decisions for your team." },
      { icon: "ShieldCheck", title: "Integrity", desc: "We tell clients what they need to hear, not what they want to hear." },
      { icon: "TrendingUp", title: "Impact", desc: "Every engagement is measured by real-world outcomes, not deliverable counts." },
    ],
  },

  // Global Journey Timeline (2020 Singapore, 2022 Dubai UAE, 2024 Netherlands, Today Noeveka)
  journey: {
    eyebrow: "Our Journey",
    heading: "From Local Roots to a Global Footprint",
    subtext:
      "A journey driven by independent architecture leadership, real enterprise impact, and continuous international expansion.",
    milestones: [
      {
        year: "2020",
        stage: "LEARN",
        location: "Singapore",
        place: "Singapore",
        title: "Started as BI Consulting Pro",
        headline: "Started as BI Consulting Pro",
        description:
          "Focused on business intelligence, modern analytics, and core data platform consulting for high-growth firms.",
        graphic: "/assets/about-page/timeline-singapore.png",
        image: "/assets/about-page/timeline-singapore.png",
      },
      {
        year: "2022",
        stage: "GROW",
        location: "Dubai, UAE",
        place: "Dubai, UAE",
        title: "Expanded Global Vision",
        headline: "Expanded Global Vision",
        description:
          "Established our first international advisory entity in Dubai, delivering strategic data architecture across the Middle East.",
        graphic: "/assets/about-page/timeline-uae.png",
        image: "/assets/about-page/timeline-uae.png",
      },
      {
        year: "2024",
        stage: "SCALE",
        location: "Netherlands",
        place: "Netherlands",
        title: "European Presence Established",
        headline: "European Presence Established",
        description:
          "Established our footprint in the Netherlands to serve European enterprise clients and formalise NOE·V·EKA as a global advisory brand.",
        graphic: "/assets/about-page/timeline-netherlands.png",
        image: "/assets/about-page/timeline-netherlands.png",
      },
      {
        year: "Today",
        stage: "IMPACT",
        location: "Global Advisory",
        place: "Global Advisory",
        title: "NOE·V·EKA: Architecting the AI Era",
        headline: "NOE·V·EKA: Architecting the AI Era",
        description:
          "An independent enterprise Data & AI advisory, helping organizations turn AI ambition into resilient architecture and measurable business impact.",
        isHighlight: true,
        graphic: "/assets/about-page/timeline-today.png",
        image: "/assets/about-page/timeline-today.png",
      },
    ],
  },

  // Legacy story fallback (mapped from journey for backward compatibility)
  story: {
    heading: "How Noeveka\ncame to be.",
    milestones: [
      {
        year: "2020",
        event: "Started as BI Consulting Pro",
        detail: "Focused on business intelligence, modern analytics, and core data platform consulting in Singapore.",
      },
      {
        year: "2022",
        event: "Expanded to Dubai, UAE",
        detail: "Established first international entity in Dubai delivering strategic Data & AI architecture.",
      },
      {
        year: "2024",
        event: "European Expansion",
        detail: "Established presence in the Netherlands to serve European enterprise clients as NOE·V·EKA.",
      },
      {
        year: "Today",
        event: "NOE·V·EKA — Architecting the AI Era",
        detail: "An independent enterprise Data & AI advisory, helping organizations turn AI ambition into real business impact.",
      },
    ],
  },

  // Positioning stats
  stats: [
    { value: "15+", label: "Years", sub: "Enterprise architecture experience" },
    { value: "5K+", label: "Leaders", sub: "Trained across global enterprises" },
    { value: "100%", label: "Independent", sub: "Zero vendor reseller bias" },
    { value: "3", label: "Service Lines", sub: "Advisory · Workshops · Playbooks" },
  ],

  // Final Conversion CTA Section (Minimal Clean Light Mode)
  cta: {
    headingLine1: "Upgrade How You Work,",
    headingLine2: "Not What You Do",
    body:
      "Noeveka helps enterprise leaders modernise their Data & AI architecture and governance — without changing the principles, people, or judgment that make their firm what it is.",
    primaryCtaText: "Let's Talk",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore the Platform",
    secondaryCtaLink: "/services",
  },
} as const;

