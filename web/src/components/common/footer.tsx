import { useEffect, useState } from "react";
import { Link } from "react-router";

import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import InstagramSvg from "@/components/svgs/instagram-svg";
import LinkedInSvg from "@/components/svgs/linkedin-svg";
import XSvg from "@/components/svgs/x-svg";
import YoutubeSvg from "@/components/svgs/youtube-svg";
import { FOOTER_CONFIG } from "@/config/footer.config";
import { getSiteSettings, urlFor } from "@/lib/sanity";
import NewsLetterStrip from "@/components/common/new-letter-strip";

const ICON_MAP: Record<string, () => React.JSX.Element> = {
  LinkedIn: LinkedInSvg,
  X: XSvg,
  YouTube: YoutubeSvg,
  Instagram: InstagramSvg,
};

// Derived from config so the social link SVGs are resolved at component level
const FALLBACK_SOCIAL = FOOTER_CONFIG.socialLinks.map((s) => ({
  Icon: ICON_MAP[s.platform] ?? LinkedInSvg,
  href: s.href,
  label: s.platform,
}));

function FooterLink({
  label,
  light,
  href,
}: {
  label: string;
  light?: boolean;
  href?: string;
}) {
  const cls = `footer-link ${light ? "footer-link-light" : ""}`;
  if (href && href !== "#") {
    return (
      <Link to={href} className={cls}>
        {label}
      </Link>
    );
  }
  return (
    <button className={cls}>
      {label}
    </button>
  );
}

interface SiteSettings {
  logoIcon?: { asset?: unknown; alt?: string };
  logoText?: { asset?: unknown; alt?: string };
  footerTagline?: string;
  socialLinks?: Array<{ platform: string; href: string }>;
  companyColumnHeading?: string;
  companyLinks?: Array<{ label: string; href: string }>;
  servicesColumnHeading?: string;
  servicesLinks?: Array<{ label: string; href: string }>;
  contactHeading?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactAddress?: string;
  newsletterHeading?: string;
  newsletterSubtext?: string;
  newsletterPlaceholder?: string;
  copyrightText?: string;
  footerNavLinks?: Array<{ label: string; href: string }>;
}

export default function Footer() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    getSiteSettings().then(setSettings).catch(console.error);
  }, []);

  const logoIconSrc = settings?.logoIcon?.asset
    ? urlFor(settings.logoIcon).width(96).url()
    : FOOTER_CONFIG.logoIconFallbackUrl;

  const logoTextSrc = settings?.logoText?.asset
    ? urlFor(settings.logoText).width(320).url()
    : FOOTER_CONFIG.logoTextFallbackUrl;

  const tagline = settings?.footerTagline ?? FOOTER_CONFIG.tagline;

  const socialLinks = settings?.socialLinks?.length
    ? settings.socialLinks.map((s) => ({
      Icon: ICON_MAP[s.platform] ?? LinkedInSvg,
      href: s.href,
      label: s.platform,
    }))
    : FALLBACK_SOCIAL;

  const companyHeading =
    settings?.companyColumnHeading ?? FOOTER_CONFIG.companyColumnHeading;
  const companyLinks = settings?.companyLinks?.length
    ? settings.companyLinks
    : [...FOOTER_CONFIG.companyLinks];

  const servicesHeading =
    settings?.servicesColumnHeading ?? FOOTER_CONFIG.servicesColumnHeading;

  const contactHeading =
    settings?.contactHeading ?? FOOTER_CONFIG.contactHeading;
  const contactEmail = settings?.contactEmail ?? FOOTER_CONFIG.contactEmail;
  const contactPhone = settings?.contactPhone ?? FOOTER_CONFIG.contactPhone;
  const contactAddress =
    settings?.contactAddress ?? FOOTER_CONFIG.contactAddress;

  const copyrightText = (
    settings?.copyrightText ?? FOOTER_CONFIG.copyrightText
  ).replace("{year}", String(new Date().getFullYear()));

  const footerNavLinks = settings?.footerNavLinks?.length
    ? settings.footerNavLinks
    : [...FOOTER_CONFIG.footerNavLinks];

  const [copied, setCopied] = useState(false);
  const [openSections, setOpenSections] = useState({
    company: true,
    services: true,
    contact: true,
  });

  const toggleSection = (section: "company" | "services" | "contact") => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shortenedServices = [
    { label: "Data & AI Architecture", href: "/services/enterprise-data-ai-architecture" },
    { label: "AI & Agentic Systems", href: "/services/enterprise-ai-agentic-systems" },
    { label: "AI Governance & Assurance", href: "/services/ai-governance-architecture-assurance" },
    { label: "Transformation Advisory", href: "/services/data-ai-transformation-advisory" },
  ];

  const mobileCompanyLinks = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Services", href: "/services" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer>
      <NewsLetterStrip />
      <div className="footer-wrapper">
        {/* Subtle ambient light - top right */}
        <div className="footer-ambient-glow" />

        {/* Watermark - fluid width, always fills the container */}
        <div className="footer-watermark" aria-hidden="true">
          <span className="footer-watermark-text">
            NOEVEKA
          </span>
        </div>

        {/* ── Desktop grid content (lg and up) ── */}
        <div className="lp-container lp-px relative z-10 hidden grid-cols-5 gap-10 pt-14 pb-28 lg:grid">
          {/* Brand column - 2 cols */}
          <div className="col-span-2 flex flex-col gap-5">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1">
              <div className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                <img
                  src={logoIconSrc}
                  alt={settings?.logoIcon?.alt ?? FOOTER_CONFIG.logoIconAlt}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="relative -ml-2 flex h-14 w-26 items-center sm:h-12 sm:w-32 lg:h-14 lg:w-38">
                <img
                  src={logoTextSrc}
                  alt={settings?.logoText?.alt ?? FOOTER_CONFIG.logoTextAlt}
                  className="h-full w-full object-contain object-left"
                />
              </div>
            </Link>

            <p className="footer-tagline">
              {tagline}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <p className="footer-col-heading">
              {companyHeading}
            </p>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <FooterLink label={l.label} href={l.href} />
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <p className="footer-col-heading">
              {servicesHeading}
            </p>
            <ul className="flex flex-col gap-2.5">
              {shortenedServices.map((service) => (
                <li key={service.label}>
                  <FooterLink label={service.label} href={service.href} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="footer-col-heading">
              {contactHeading}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${contactEmail}`}
                className="footer-contact-email"
              >
                {contactEmail}
              </a>
              {contactPhone && (
                <p className="footer-contact-text">
                  {contactPhone}
                </p>
              )}
              <p className="footer-contact-text">
                {contactAddress}
              </p>
            </div>
          </div>
        </div>

        {/* ── Mobile View (< lg) ── */}
        <div className="lp-container lp-px relative z-10 block pt-10 pb-16 lg:hidden">
          {/* Brand header */}
          <div className="mb-7 flex flex-col items-start gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1">
              <div className="relative h-9 w-9 shrink-0">
                <img
                  src={logoIconSrc}
                  alt={settings?.logoIcon?.alt ?? FOOTER_CONFIG.logoIconAlt}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="relative -ml-2 flex h-12 w-28 items-center">
                <img
                  src={logoTextSrc}
                  alt={settings?.logoText?.alt ?? FOOTER_CONFIG.logoTextAlt}
                  className="h-full w-full object-contain object-left"
                />
              </div>
            </Link>

            {/* Tagline */}
            <p className="footer-tagline">
              {tagline}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 pt-0.5">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Interactive Mobile Accordions */}
          <div className="flex flex-col gap-3">
            {/* ── Section 1: COMPANY ── */}
            <div className="footer-mobile-card">
              <button
                onClick={() => toggleSection("company")}
                className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent p-0 text-left"
              >
                <span className="footer-col-heading">
                  {companyHeading}
                </span>
                <LucideIcon
                  name={lucideIconRegistry.ChevronDown}
                  className={`h-4 w-4 transition-transform duration-200 ${openSections.company ? "rotate-180" : ""
                    }`}
                  style={{ color: "var(--color-brand)" }}
                />
              </button>

              {openSections.company && (
                <div
                  className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 border-t pt-3.5"
                  style={{ borderColor: "var(--color-stroke-default)" }}
                >
                  {mobileCompanyLinks.map((l) => (
                    <Link
                      key={l.label}
                      to={l.href}
                      className="footer-mobile-nav-link"
                    >
                      <span>{l.label}</span>
                      <LucideIcon
                        name={lucideIconRegistry.ChevronRight}
                        className="footer-mobile-chevron"
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ── Section 2: SERVICES ── */}
            <div className="footer-mobile-card">
              <button
                onClick={() => toggleSection("services")}
                className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent p-0 text-left"
              >
                <span className="footer-col-heading">
                  {servicesHeading}
                </span>
                <LucideIcon
                  name={lucideIconRegistry.ChevronDown}
                  className={`h-4 w-4 transition-transform duration-200 ${openSections.services ? "rotate-180" : ""
                    }`}
                  style={{ color: "var(--color-brand)" }}
                />
              </button>

              {openSections.services && (
                <div
                  className="mt-3 flex flex-col gap-1 border-t pt-3.5"
                  style={{ borderColor: "var(--color-stroke-default)" }}
                >
                  {shortenedServices.map((service) => (
                    <Link
                      key={service.label}
                      to={service.href}
                      className="footer-mobile-nav-link"
                    >
                      <span>{service.label}</span>
                      <LucideIcon
                        name={lucideIconRegistry.ChevronRight}
                        className="footer-mobile-chevron"
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ── Section 3: CONTACT ── */}
            <div className="footer-mobile-card">
              <button
                onClick={() => toggleSection("contact")}
                className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent p-0 text-left"
              >
                <span className="footer-col-heading">
                  {contactHeading}
                </span>
                <LucideIcon
                  name={lucideIconRegistry.ChevronDown}
                  className={`h-4 w-4 transition-transform duration-200 ${openSections.contact ? "rotate-180" : ""
                    }`}
                  style={{ color: "var(--color-brand)" }}
                />
              </button>

              {openSections.contact && (
                <div
                  className="mt-3 flex flex-col gap-3 border-t pt-3.5"
                  style={{ borderColor: "var(--color-stroke-default)" }}
                >
                  {/* Email with copy */}
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${contactEmail}`}
                      className="footer-contact-email"
                    >
                      {contactEmail}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="footer-copy-btn"
                    >
                      <LucideIcon
                        name={copied ? lucideIconRegistry.Check : lucideIconRegistry.Copy}
                        className={`h-3 w-3 ${copied ? "text-green-600" : ""}`}
                      />
                    </button>
                    {copied && (
                      <span className="text-[11px] font-semibold text-green-600">
                        Copied!
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  {contactPhone && (
                    <div className="flex items-center gap-2.5 text-[12.5px]" style={{ color: "var(--color-text-secondary)" }}>
                      <LucideIcon
                        name={lucideIconRegistry.Phone}
                        className="h-3.5 w-3.5 shrink-0"
                        style={{ color: "var(--color-text-muted)" }}
                      />
                      <span>{contactPhone}</span>
                    </div>
                  )}

                  {/* Address */}
                  {contactAddress && (
                    <div className="flex items-center gap-2.5 text-[12.5px]" style={{ color: "var(--color-text-secondary)" }}>
                      <LucideIcon
                        name={lucideIconRegistry.MapPin}
                        className="h-3.5 w-3.5 shrink-0"
                        style={{ color: "var(--color-text-muted)" }}
                      />
                      <span>{contactAddress}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────── */}
        <div className="footer-bottom-bar">
          <div className="lp-container lp-px flex flex-wrap items-center justify-between gap-3 py-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px]">
              <p style={{ color: "var(--color-text-muted)" }}>
                {copyrightText}
              </p>
              <span style={{ color: "var(--color-stroke-strong)" }}>·</span>
              <Link to="/privacy-policy" className="footer-bottom-link">
                Privacy Policy
              </Link>
              <span style={{ color: "var(--color-stroke-strong)" }}>·</span>
              <Link to="/terms" className="footer-bottom-link">
                Terms & Conditions
              </Link>
            </div>

            {/* Mobile logo icon (visible only on small screens) */}
            <Link
              to="/"
              aria-label="Noeveka Home"
              className="flex shrink-0 items-center transition-opacity hover:opacity-80 sm:hidden"
            >
              <img
                src={logoIconSrc}
                alt={settings?.logoIcon?.alt ?? FOOTER_CONFIG.logoIconAlt}
                className="h-5.5 w-5.5 object-contain"
              />
            </Link>

            {/* Navigation links (hidden on small screens, visible on sm+) */}
            <nav className="hidden items-center gap-5 sm:flex">
              {footerNavLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  className="footer-bottom-link font-medium"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
