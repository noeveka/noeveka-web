import { useEffect, useState } from "react";
import { Link } from "react-router";

import { LucideIcon } from "@/components/lucide-icons";
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
  const base = light
    ? "var(--color-text-secondary)"
    : "var(--color-text-muted)";
  if (href && href !== "#") {
    return (
      <Link
        to={href}
        className="text-[13px] transition-colors"
        style={{ color: base }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.color = "var(--color-brand)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.color = base)}
      >
        {label}
      </Link>
    );
  }
  return (
    <button
      className="cursor-pointer border-none bg-transparent p-0 text-left text-[13px] transition-colors"
      style={{ color: base }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-brand)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = base)}
    >
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
  // const servicesLinks = settings?.servicesLinks?.length
  //   ? settings.servicesLinks
  //   : [...FOOTER_CONFIG.servicesLinks];

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
      <div
        className="relative overflow-hidden"
        style={{
          background: "var(--color-bg-subtle)",
          borderTop: "1px solid var(--color-stroke-default)",
        }}
      >
        {/* Subtle orange ambient — top right */}
        <div
          className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px]"
          style={{
            background:
              "radial-gradient(circle at 100% 0%, rgba(246,93,1,0.05) 0%, transparent 65%)",
          }}
        />

        {/* Watermark — fluid width, always fills the container */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 flex items-end justify-center overflow-hidden select-none"
          aria-hidden="true"
        >
          <span
            style={{
              fontSize: "clamp(3.5rem, 18vw, 14rem)",
              lineHeight: 1,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "transparent",
              WebkitTextStroke: "1px rgba(13,15,22,0.05)",
              whiteSpace: "nowrap",
            }}
          >
            NOEVEKA
          </span>
        </div>

        {/* ── Desktop grid content (lg and up) ── */}
        <div className="lp-container lp-px relative z-10 hidden grid-cols-5 gap-10 pt-14 pb-28 lg:grid">
          {/* Brand column — 2 cols */}
          <div className="col-span-2 flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-1">
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
            </div>

            <p
              className="max-w-[260px] text-[13px] leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {tagline}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-all"
                  style={{
                    background: "var(--color-bg-surface)",
                    border: "1px solid var(--color-stroke-default)",
                    color: "var(--color-text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "var(--color-brand)";
                    el.style.borderColor = "var(--color-brand)";
                    el.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "var(--color-bg-surface)";
                    el.style.borderColor = "var(--color-stroke-default)";
                    el.style.color = "var(--color-text-muted)";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <p
              className="text-[11.5px] font-bold tracking-[0.18em] uppercase"
              style={{ color: "var(--color-text-primary)" }}
            >
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
            <p
              className="text-[11.5px] font-bold tracking-[0.18em] uppercase"
              style={{ color: "var(--color-text-primary)" }}
            >
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
            <p
              className="text-[11.5px] font-bold tracking-[0.18em] uppercase"
              style={{ color: "var(--color-text-primary)" }}
            >
              {contactHeading}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${contactEmail}`}
                className="text-[13px] font-medium transition-colors"
                style={{
                  color: "var(--color-brand)",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                {contactEmail}
              </a>
              {/* <p
                className="text-[13px]"
                style={{ color: "var(--color-text-muted)" }}
              >
                {contactPhone}
              </p> */}
              <p
                className="text-[13px] leading-snug"
                style={{ color: "var(--color-text-muted)" }}
              >
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
            <div className="flex items-center gap-1">
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
            </div>

            {/* Tagline */}
            <p
              className="max-w-md text-[13px] leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {tagline}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 pt-0.5">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-all"
                  style={{
                    background: "var(--color-bg-surface)",
                    border: "1px solid var(--color-stroke-default)",
                    color: "var(--color-text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "var(--color-brand)";
                    el.style.borderColor = "var(--color-brand)";
                    el.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "var(--color-bg-surface)";
                    el.style.borderColor = "var(--color-stroke-default)";
                    el.style.color = "var(--color-text-muted)";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Interactive Sections without heavy boxy feel */}
          <div className="flex flex-col gap-3">
            {/* ── Section 1: COMPANY ── */}
            <div
              className="rounded-xl p-4 transition-all duration-200 sm:p-5"
              style={{
                background: "rgba(255, 255, 255, 0.72)",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.02)",
              }}
            >
              <button
                onClick={() => toggleSection("company")}
                className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent p-0 text-left"
              >
                <span
                  className="text-[11.5px] font-bold tracking-[0.18em] uppercase"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {companyHeading}
                </span>
                <LucideIcon
                  name="chevron-down"
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openSections.company ? "rotate-180" : ""
                  }`}
                  style={{ color: "var(--color-brand)" }}
                />
              </button>

              {openSections.company && (
                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 border-t border-slate-100 pt-3.5">
                  {mobileCompanyLinks.map((l) => (
                    <Link
                      key={l.label}
                      to={l.href}
                      className="group -mx-2 flex items-center justify-between rounded-lg px-2 py-1.5 text-[13px] font-medium text-slate-600 transition-all hover:bg-orange-50/50 hover:text-[#f65d01]"
                    >
                      <span>{l.label}</span>
                      <LucideIcon
                        name="chevron-right"
                        className="h-3.5 w-3.5 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#f65d01]"
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ── Section 2: SERVICES ── */}
            <div
              className="rounded-xl p-4 transition-all duration-200 sm:p-5"
              style={{
                background: "rgba(255, 255, 255, 0.72)",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.02)",
              }}
            >
              <button
                onClick={() => toggleSection("services")}
                className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent p-0 text-left"
              >
                <span
                  className="text-[11.5px] font-bold tracking-[0.18em] uppercase"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {servicesHeading}
                </span>
                <LucideIcon
                  name="chevron-down"
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openSections.services ? "rotate-180" : ""
                  }`}
                  style={{ color: "var(--color-brand)" }}
                />
              </button>

              {openSections.services && (
                <div className="mt-3 flex flex-col gap-1 border-t border-slate-100 pt-3.5">
                  {shortenedServices.map((service) => (
                    <Link
                      key={service.label}
                      to={service.href}
                      className="group -mx-2 flex cursor-pointer items-center justify-between rounded-lg px-2 py-1.5 text-[13px] font-medium text-slate-600 transition-all hover:bg-orange-50/50 hover:text-[#f65d01]"
                    >
                      <span>{service.label}</span>
                      <LucideIcon
                        name="chevron-right"
                        className="h-3.5 w-3.5 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#f65d01]"
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ── Section 3: CONTACT ── */}
            <div
              className="rounded-2xl p-4 transition-all duration-200 sm:p-5"
              style={{
                background: "rgba(255, 255, 255, 0.72)",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.02)",
              }}
            >
              <button
                onClick={() => toggleSection("contact")}
                className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent p-0 text-left"
              >
                <span
                  className="text-[11.5px] font-bold tracking-[0.18em] uppercase"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {contactHeading}
                </span>
                <LucideIcon
                  name="chevron-down"
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openSections.contact ? "rotate-180" : ""
                  }`}
                  style={{ color: "var(--color-brand)" }}
                />
              </button>

              {openSections.contact && (
                <div className="mt-3 flex flex-col gap-3 border-t border-slate-100 pt-3.5">
                  {/* Email with copy */}
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-[13px] font-semibold transition-colors hover:underline"
                      style={{ color: "var(--color-brand)" }}
                    >
                      {contactEmail}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border border-neutral-200/60 bg-white text-neutral-400 transition-colors hover:border-[#f65d01]/40 hover:text-[#f65d01]"
                    >
                      <LucideIcon
                        name={copied ? "check" : "copy"}
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
                    <div className="flex items-center gap-2.5 text-[12.5px] text-slate-600">
                      <LucideIcon
                        name="phone"
                        className="h-3.5 w-3.5 shrink-0 text-slate-400"
                      />
                      <span>{contactPhone}</span>
                    </div>
                  )}

                  {/* Address */}
                  {contactAddress && (
                    <div className="flex items-center gap-2.5 text-[12.5px] text-slate-600">
                      <LucideIcon
                        name="map-pin"
                        className="h-3.5 w-3.5 shrink-0 text-slate-400"
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
        <div
          className="relative z-10 border-t"
          style={{ borderColor: "var(--color-stroke-default)" }}
        >
          <div className="lp-container lp-px flex flex-wrap items-center justify-between gap-3 py-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px]">
              <p style={{ color: "var(--color-text-muted)" }}>
                {copyrightText}
              </p>
              <span className="text-neutral-300">·</span>
              <Link
                to="/privacy-policy"
                className="transition-colors hover:text-[#f65d01]"
                style={{ color: "var(--color-text-muted)" }}
              >
                Privacy Policy
              </Link>
              <span className="text-neutral-300">·</span>
              <Link
                to="/terms"
                className="transition-colors hover:text-[#f65d01]"
                style={{ color: "var(--color-text-muted)" }}
              >
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
                  className="cursor-pointer border-none bg-transparent text-[11px] font-medium transition-colors"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-brand)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-text-muted)")
                  }
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
