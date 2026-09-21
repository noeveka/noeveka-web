import { useState, useEffect } from "react";
import { LucideIcon } from "@/components/lucide-icons";
import { getSiteSettings, urlFor } from "@/lib/sanity";
import { FOOTER_CONFIG } from "@/config/footer.config";
import LinkedInSvg from "@/components/svgs/linkedin-svg";
import YoutubeSvg from "@/components/svgs/youtube-svg";
import InstagramSvg from "@/components/svgs/instagram-svg";
import XSvg from "@/components/svgs/x-svg";

const ICON_MAP: Record<string, () => React.JSX.Element> = {
  LinkedIn: LinkedInSvg,
  "X / Twitter": XSvg,
  YouTube: YoutubeSvg,
  Instagram: InstagramSvg,
};


// Derived from config so the social link SVGs are resolved at component level
const FALLBACK_SOCIAL = FOOTER_CONFIG.socialLinks.map((s) => ({
  Icon: ICON_MAP[s.platform] ?? LinkedInSvg,
  href: s.href,
  label: s.platform,
}));

function FooterLink({ label, light }: { label: string; light?: boolean }) {
  const base = light ? "var(--color-text-secondary)" : "var(--color-text-muted)";
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

  const socialLinks =
    settings?.socialLinks?.length
      ? settings.socialLinks.map((s) => ({
          Icon: ICON_MAP[s.platform] ?? LinkedInSvg,
          href: s.href,
          label: s.platform,
        }))
      : FALLBACK_SOCIAL;

  const companyHeading = settings?.companyColumnHeading ?? FOOTER_CONFIG.companyColumnHeading;
  const companyLinks = settings?.companyLinks?.length
    ? settings.companyLinks
    : [...FOOTER_CONFIG.companyLinks];

  const servicesHeading = settings?.servicesColumnHeading ?? FOOTER_CONFIG.servicesColumnHeading;
  const servicesLinks = settings?.servicesLinks?.length
    ? settings.servicesLinks
    : [...FOOTER_CONFIG.servicesLinks];

  const contactHeading = settings?.contactHeading ?? FOOTER_CONFIG.contactHeading;
  const contactEmail = settings?.contactEmail ?? FOOTER_CONFIG.contactEmail;
  const contactPhone = settings?.contactPhone ?? FOOTER_CONFIG.contactPhone;
  const contactAddress = settings?.contactAddress ?? FOOTER_CONFIG.contactAddress;

  const newsletterHeading = settings?.newsletterHeading ?? FOOTER_CONFIG.newsletterHeading;
  const newsletterSubtext = settings?.newsletterSubtext ?? FOOTER_CONFIG.newsletterSubtext;
  const newsletterPlaceholder = settings?.newsletterPlaceholder ?? FOOTER_CONFIG.newsletterPlaceholder;

  const copyrightText = (settings?.copyrightText ?? FOOTER_CONFIG.copyrightText).replace(
    "{year}",
    String(new Date().getFullYear())
  );

  const footerNavLinks = settings?.footerNavLinks?.length
    ? settings.footerNavLinks
    : [...FOOTER_CONFIG.footerNavLinks];

  return (
    <footer>
      {/* ── Newsletter strip ──────────────────────────────── */}
      <div
        style={{
          background: "var(--color-brand-tint)",
          borderTop: "1px solid rgba(246, 93, 1, 0.18)",
          borderBottom: "1px solid rgba(246, 93, 1, 0.18)",
        }}
      >
        <div className="lp-container lp-px flex flex-col items-center justify-between gap-3 py-4 sm:flex-row sm:gap-5 sm:py-5">
          {/* Left — icon + copy */}
          <div className="flex w-full items-center gap-3 sm:w-auto">
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10 sm:rounded-xl"
              style={{ background: "var(--color-brand)" }}
            >
              <LucideIcon name="mail" className="h-4 w-4 text-white sm:h-[18px] sm:w-[18px]" />
            </div>
            <div className="min-w-0">
              <p
                className="truncate text-[13px] font-bold sm:text-[14px]"
                style={{ color: "var(--color-text-primary)" }}
              >
                {newsletterHeading}
              </p>
              <p
                className="hidden truncate text-[11.5px] sm:block"
                style={{ color: "var(--color-text-muted)" }}
              >
                {newsletterSubtext}
              </p>
            </div>
          </div>

          {/* Email input */}
          <div
            className="flex w-full items-center overflow-hidden rounded-xl border sm:w-auto sm:min-w-[320px]"
            style={{
              background: "var(--color-bg-surface)",
              borderColor: "rgba(246, 93, 1, 0.22)",
            }}
          >
            <input
              type="email"
              placeholder={newsletterPlaceholder}
              className="flex-1 bg-transparent px-3 py-2.5 text-[13px] outline-none sm:px-4 sm:py-3"
              style={{ color: "var(--color-text-primary)" }}
            />
            <button
              className="shrink-0 cursor-pointer border-none px-3 py-2.5 transition-all sm:px-4 sm:py-3"
              style={{ background: "var(--color-brand)", color: "#ffffff" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--color-brand-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--color-brand)")
              }
              aria-label="Subscribe"
            >
              <LucideIcon name="arrow-right" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Main footer body (LIGHT) ──────────────────────── */}
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
              WebkitTextStroke: "1px rgba(15,17,23,0.05)",
              whiteSpace: "nowrap",
            }}
          >
            NOEVEKA
          </span>
        </div>

        {/* Grid content */}
        <div className="lp-container lp-px relative z-10 grid grid-cols-1 gap-10 pt-14 pb-28 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column — 2 cols */}
          <div className="flex flex-col gap-5 lg:col-span-2">
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
                  <FooterLink label={l.label} />
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
              {servicesLinks.map((l) => (
                <li key={l.label}>
                  <FooterLink label={l.label} />
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
              <p className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>
                {contactPhone}
              </p>
              <p
                className="text-[13px] leading-snug"
                style={{ color: "var(--color-text-muted)" }}
              >
                {contactAddress}
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────── */}
        <div
          className="relative z-10 border-t"
          style={{ borderColor: "var(--color-stroke-default)" }}
        >
          <div className="lp-container lp-px flex flex-col items-center justify-between gap-3 py-4 sm:flex-row">
            <p
              className="text-[11.5px]"
              style={{ color: "var(--color-text-muted)" }}
            >
              {copyrightText}
            </p>
            <nav className="flex items-center gap-5">
              {footerNavLinks.map((l) => (
                <button
                  key={l.label}
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
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
