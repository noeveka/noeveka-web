export const ABOUT_CONFIG = {
  // Page Hero
  hero: {
    badge: "About Us",
    headingLine1: "Where Data Architecture Meets",
    headingLine2: "Human Judgment.",
    headingHighlight: "",
    subheading: "Where Data Architecture Meets Human Judgment.",
    subtext:
      "We are an independent enterprise Data & AI advisory firm, built by architects who believe technology creates value only when it is shaped by sound judgement, clear architecture and business context.",
    ctaPrimaryText: "Start a Conversation →",
    ctaPrimaryLink: "/contact",
    ctaSecondaryText: "Explore Focus Areas",
    ctaSecondaryLink: "/services",

    // Background and founder images
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
    title: "Founder & CEO · Enterprise Data & AI Architect",
    company: "NOEVEKA",
    tagline: "Good architecture is not about the tool. It's about the judgment behind it.",
    quoteHighlight: "judgment behind it.",
    bio: [
      "Ajay Kumar is the Founder & CEO of Noeveka, with more than 15 years of experience shaping enterprise data, analytics and architecture across complex global environments.",
      "His work spans Data & AI strategy, enterprise architecture, analytics platforms, governance and transformation. Across these engagements, one principle remained consistent: lasting value comes from connecting technology decisions to business context and architectural clarity.",
      "Noeveka was founded on that belief, combining senior architectural expertise with independent judgement and practical execution.",
    ],
    whyFoundedHeading: "Why He Founded Noeveka",
    whyFoundedText:
      "Noeveka was founded on a simple belief: enterprises need independent, architect-grade thinking before technology decisions. Too many organisations invest in tools without a clear architecture, governance or execution plan — leading to fragmented platforms, higher costs and limited business impact.\n\nAjay founded Noeveka to bridge this gap — bringing together strategy, architecture and hands-on engineering to help organisations build modern, governed and future-ready data and AI capabilities, including the next generation of agentic systems.",
    whyFoundedParagraphs: [
      "Noeveka was founded on a simple belief: enterprises need independent, architect-grade thinking before technology decisions. Too many organisations invest in tools without a clear architecture, governance or execution plan — leading to fragmented platforms, higher costs and limited business impact.",
      "Ajay founded Noeveka to bridge this gap — bringing together strategy, architecture and hands-on engineering to help organisations build modern, governed and future-ready data and AI capabilities, including the next generation of agentic systems.",
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
    photoAlt: "Ajay Kumar — Founder & CEO, Noeveka",
    linkedinUrl: "https://www.linkedin.com/company/noeveka",
    email: "connect@noeveka.com",
    contactLink: "/contact",
  },

  // Narrative / "The Frustration & The Realisation" Story Section (placed right after Hero)
  narrativeSection: {
    // Upper Block: The Frustration We Saw
    topBlock: {
      eyebrow: "The Frustration We Saw",
      headingLine1: "When complexity becomes",
      headingLine2: "the operating model",
      headingLine3: "",
      headingHighlight: "",
      paragraph1:
        "Across modern enterprises, years of growth, acquisitions and technology decisions often leave behind fragmented data, disconnected platforms and manual workarounds.",
      paragraph2:
        "The result is familiar: teams spend more time reconciling information than using it, architecture decisions become harder to reverse, and trust in data steadily declines.",
      punchline: "There had to be a better way.",
    },

    // Middle Media Banner (Architectural Geometric Brand Visual)
    image: {
      url: "/assets/about-page/about_page_img_second.png",
      alt: "Noeveka enterprise architecture systems blueprint and coherent structural models",
      aspectRatio: "16/9",
    },

    // Lower Block: The Moment We Realised It
    bottomBlock: {
      eyebrowPart1: "The Moment",
      eyebrowHighlight: "We Realised It",
      headingPlain: "You Don't Need to Start Over. You Just Need",
      headingHighlight: "Things to Work Better.",
      paragraph:
        "Most enterprises aren't starting from zero, and they shouldn't have to. We help organisations work with what they already have, simplify what has become unnecessarily complex, and create an architecture that is easier to operate, evolve and trust.",
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

  // Mission strip (Dark Manifesto)
  mission: {
    statement:
      "To make world-class data architecture thinking accessible to every enterprise — independent, practical, and built for impact.",
    pillars: [
      {
        number: "01",
        title: "Independent",
        desc: "Zero vendor reseller relationships. We recommend what is right for you, not what earns us a commission.",
      },
      {
        number: "02",
        title: "Architect-Led",
        desc: "Every advisory, workshop, and playbook is delivered by senior architects who have shipped at enterprise scale.",
      },
      {
        number: "03",
        title: "Outcome-Driven",
        desc: "Every engagement is tied to measurable business outcomes — cost reduction, platform clarity, or team capability.",
      },
    ],
  },

  // Values
  values: {
    heading: "Principles we refuse to compromise.",
    items: [
      {
        icon: "Scale",
        title: "Independence",
        desc: "No vendor partnerships. No hidden incentives. Just honest architectural judgment.",
      },
      {
        icon: "Lightbulb",
        title: "Clarity",
        desc: "Complex data architecture translated into clear, actionable decisions for your team.",
      },
      {
        icon: "ShieldCheck",
        title: "Integrity",
        desc: "We tell clients what they need to hear, not what they want to hear.",
      },
      {
        icon: "TrendingUp",
        title: "Impact",
        desc: "Every engagement is measured by real-world outcomes, not deliverable counts.",
      },
    ],
  },

  // Journey Timeline: Evolution of the Noeveka philosophy
  journey: {
    eyebrow: "Our Journey",
    heading: "How Noeveka took shape",
    subtext:
      "The evolution of an independent architecture philosophy — shaped by enterprise realities, global perspectives, and a commitment to practical impact.",
    milestones: [
      {
        year: "2020",
        stage: "FOUNDATION",
        location: "Singapore",
        place: "Singapore",
        title: "Architectural Foundations",
        headline: "Recognising the Architecture Gap",
        description:
          "Observing firsthand how fragmented data and vendor-driven tooling were creating enterprise technical debt rather than business clarity.",
        graphic: "/assets/about-page/timeline-singapore.png",
        image: "/assets/about-page/timeline-singapore.png",
      },
      {
        year: "2022",
        stage: "EXPANSION",
        location: "Dubai, UAE",
        place: "Dubai, UAE",
        title: "Independent Advisory Model",
        headline: "Testing the Philosophy Across Global Enterprises",
        description:
          "Establishing our advisory practice in the Middle East, proving that independent, architect-grade thinking creates durable advantage across complex environments.",
        graphic: "/assets/about-page/timeline-uae.png",
        image: "/assets/about-page/timeline-uae.png",
      },
      {
        year: "2024",
        stage: "SCALE",
        location: "Netherlands",
        place: "Netherlands",
        title: "European Presence Established",
        headline: "Formalising the Noeveka Methodology",
        description:
          "Expanding into Europe to deliver architect-led advisory, governance, and transformation to international enterprise clients.",
        graphic: "/assets/about-page/timeline-netherlands.png",
        image: "/assets/about-page/timeline-netherlands.png",
      },
      {
        year: "Today",
        stage: "IMPACT",
        location: "Global Advisory",
        place: "Global Advisory",
        title: "Architecting the AI Era",
        headline: "Where Data Architecture Meets Human Judgment",
        description:
          "An independent enterprise Data & AI advisory, combining senior architectural expertise with sound judgement and practical execution.",
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
        detail:
          "Focused on business intelligence, modern analytics, and core data platform consulting in Singapore.",
      },
      {
        year: "2022",
        event: "Expanded to Dubai, UAE",
        detail:
          "Established first international entity in Dubai delivering strategic Data & AI architecture.",
      },
      {
        year: "2024",
        event: "European Expansion",
        detail:
          "Established presence in the Netherlands to serve European enterprise clients as Noeveka.",
      },
      {
        year: "Today",
        event: "Noeveka — Architecting the AI Era",
        detail:
          "An independent enterprise Data & AI advisory, helping organizations turn AI ambition into real business impact.",
      },
    ],
  },

  // Positioning stats for the orange band
  stats: [
    { value: "15+", label: "Years", sub: "Enterprise architecture experience" },
    { value: "5K+", label: "Leaders", sub: "Trained across global enterprises" },
    { value: "100%", label: "Independent", sub: "Zero vendor reseller bias" },
    { value: "4", label: "Focus Areas", sub: "Architecture · AI · Governance · Transformation" },
  ],

  // Final Conversion CTA Section
  cta: {
    headingLine1: "Build a data foundation that works",
    headingLine2: "with your enterprise, not against it.",
    body:
      "Noeveka helps enterprise leaders simplify complexity, strengthen architecture and make better Data & AI decisions without unnecessary reinvention.",
    primaryCtaText: "Start a Conversation →",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Our Focus Areas",
    secondaryCtaLink: "/services",
  },
} as const;
