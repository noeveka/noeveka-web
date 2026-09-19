export const ABOUT_CONFIG = {
  // Page Hero (dark, cinematic)
  hero: {
    eyebrow: "About Noeveka",
    headingLine1: "Where Data Architecture",
    headingLine2: "Meets",
    headingHighlight: "Human Judgment.",
    subtext:
      "We are an independent enterprise data & AI advisory firm — built by architects who have shipped real systems at global scale, not consultants who have only read about them.",
  },

  // Founder section 
  founder: {
    name: "Ajay Kumar",
    title: "CEO & Founder",
    company: "Noeveka Data & AI Solutions",
    tagline: "\"Good architecture is not about the tool. It's about the judgment behind it.\"",
    bio: [
      "Ajay Kumar is a Principal Data & AI Architect with 15+ years of hands-on experience designing enterprise data platforms across global financial services, retail, and healthcare organisations.",
      "He has led Fabric, Databricks, and Azure-native data platform programmes at scale — advising C-suite leaders on platform strategy, team capability, and cost governance with zero vendor bias.",
      "Noeveka was founded on a simple premise: enterprise data leaders deserve access to the same calibre of independent, architect-quality thinking that Fortune 500 CTOs get — without the agency overhead.",
    ],
    credentials: [
      { label: "Microsoft Certified", value: "Fabric & Azure Expert" },
      { label: "Databricks Certified", value: "Data Engineer & Architect" },
      { label: "Enterprise Experience", value: "15+ Years" },
      { label: "Clients Trained", value: "5,000+ Leaders" },
    ],
    photoFallbackUrl:
      "https://res.cloudinary.com/dd5elqfus/image/upload/v1788162069/Screenshot_2026-08-31_at_1.10.57_PM_mgjzrs.png",
    photoAlt: "Ajay Kumar — Founder & CEO, Noeveka",
  },

  // Mission strip
  mission: {
    eyebrow: "Our Mission",
    statement: "To make world-class data architecture thinking accessible to every enterprise — independent, practical, and built for impact.",
    pillars: [
      { number: "01", title: "Independent", desc: "Zero vendor reseller relationships. We recommend what is right for you, not what earns us a commission." },
      { number: "02", title: "Architect-Led", desc: "Every advisory, workshop, and playbook is delivered by senior architects who have shipped at enterprise scale." },
      { number: "03", title: "Outcome-Driven", desc: "Every engagement is tied to measurable business outcomes — cost reduction, platform clarity, or team capability." },
    ],
  },

  // Story / Timeline
  story: {
    eyebrow: "Our Journey",
    heading: "Built from real experience,\nnot textbooks.",
    milestones: [
      { year: "2008", event: "First enterprise data warehouse programme", detail: "Led EDW design for a Top-10 UK bank — learning what scale really means." },
      { year: "2014", event: "Azure & Cloud-first transformation", detail: "Pioneered cloud-native lakehouse patterns before they had a name." },
      { year: "2019", event: "AI & GenAI advisory begins", detail: "Advising enterprises on responsible AI adoption and data governance strategy." },
      { year: "2023", event: "Noeveka founded", detail: "Launched to give enterprise leaders direct access to independent, architect-quality thinking." },
      { year: "2024", event: "5,000+ leaders trained", detail: "Bootcamps, workshops, and playbooks trusted across global enterprise teams." },
    ],
  },

  // Values 
  values: {
    eyebrow: "What We Stand For",
    heading: "Principles we refuse to compromise.",
    items: [
      { icon: "Scale", title: "Independence", desc: "No vendor partnerships. No hidden incentives. Just honest architectural judgment." },
      { icon: "Lightbulb", title: "Clarity", desc: "Complex data architecture translated into clear, actionable decisions for your team." },
      { icon: "ShieldCheck", title: "Integrity", desc: "We tell clients what they need to hear, not what they want to hear." },
      { icon: "TrendingUp", title: "Impact", desc: "Every engagement is measured by real-world outcomes, not deliverable counts." },
    ],
  },

  // Positioning stats 
  stats: [
    { value: "15+", label: "Years", sub: "Enterprise architecture experience" },
    { value: "5K+", label: "Leaders", sub: "Trained across global enterprises" },
    { value: "100%", label: "Independent", sub: "Zero vendor reseller bias" },
    { value: "3", label: "Service Lines", sub: "Advisory · Workshops · Playbooks" },
  ],
} as const;
