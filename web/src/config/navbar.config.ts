/**
 * navbar.config.ts
 *
 * Static fallback configuration for the Navbar component.
 * This data is used when Sanity has not returned content yet
 * (first render / fetch pending) or if the fetch fails.
 *
 * To test whether Sanity is returning data correctly:
 *   1. Remove the `?? NAVBAR_CONFIG.*` fallback from navbar.tsx
 *   2. If the field goes blank/undefined, Sanity is not returning it → check the Studio doc.
 *   3. Restore the fallback once verified.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const NAVBAR_CONFIG = {
  /** Icon/symbol logo — used when Sanity logoIcon image is not yet loaded */
  logoIconFallbackUrl:
    "https://res.cloudinary.com/dd5elqfus/image/upload/v1788154826/noeveka_logo_dark_jph2va.png",
  logoIconAlt: "",

  /** Text/wordmark logo — used when Sanity logoText image is not yet loaded */
  logoTextFallbackUrl: "/assets/logos/noeveka_black_text_logo.png",
  logoTextAlt: "Noeveka",

  /** Navigation links */
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/#what-we-do" },
    { label: "Resources", href: "/#solutions" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavItem[],

  /** CTA button */
  navCtaText: "Start a conversation",
  navCtaLink: "/#contact",
} as const;
