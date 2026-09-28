export const routesRegistry = {
  // public
  landing: "/",
  about: "/about",
  services: "/services",
  serviceDetail: "/services/:slug",
  serviceDataAiArchitecture: "/services/enterprise-data-ai-architecture",
  serviceAiAgenticSystems: "/services/enterprise-ai-agentic-systems",
  serviceAiGovernanceAssurance: "/services/ai-governance-architecture-assurance",
  serviceDataAiTransformation: "/services/data-ai-transformation-advisory",
  resources: "/resources",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
  docs: "/docs",
  changelog: "/changelog",

  // auth — public, but redirect away if already logged in
  login: "/login",
  signup: "/signup",
  forgotPassword: "/forgot-password",

  // protected — dashboard
  provenance: "/provenance",
  settings: "/settings",
} as const;
