export const routesRegistry = {
  // public
  landing: "/",
  about: "/about",
  services: "/services",
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
