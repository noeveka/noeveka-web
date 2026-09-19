export const routesRegistry = {
  // public
  landing: "/",
  about: "/about",
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
