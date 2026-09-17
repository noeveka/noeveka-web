export const routesRegistry = {
  // public
  landing: "/",
  privacy: "/privacy",
  terms: "/terms",
  docs: "/docs",
  changelog: "/changelog",

  // auth — public, but redirect away if already logged in
  login: "/login",
  signup: "/signup",
  forgotPassword: "/forgot-password",

  // protected — dashboard
  overview: "/overview",
  sessions: "/sessions",
  analytics: "/analytics",
  provenance: "/provenance",
  settings: "/settings",
} as const;
