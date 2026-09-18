import { ArrowRight, Mail } from "lucide-react";

/* ─── Inline social SVGs ─────────────────────────────── */
const LinkedInSvg = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YoutubeSvg = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon
      points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
      fill="var(--color-bg-subtle)"
    />
  </svg>
);
const InstagramSvg = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const XSvg = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SOCIAL = [
  { Icon: LinkedInSvg, href: "#", label: "LinkedIn" },
  { Icon: XSvg, href: "#", label: "X / Twitter" },
  { Icon: YoutubeSvg, href: "#", label: "YouTube" },
  { Icon: InstagramSvg, href: "#", label: "Instagram" },
];

const COL_COMPANY = [
  "About Us",
  "Our Approach",
  "Workshops",
  "Bootcamps",
  "Latest Blog",
];
const COL_SERVICES = [
  "Fabric Architecture",
  "Databricks & Lakehouse",
  "AI & GenAI Advisory",
  "FinOps & Cost Audit",
  "Corporate Training",
];
const CONTACT = {
  email: "hello@noeveka.com",
  phone: "+91 98765 43210",
  address: "India · Serving Global Enterprise Teams",
};
const NAV_LINKS = ["Home", "About", "Services", "Resources", "Contact"];

function FooterLink({ label, light }: { label: string; light?: boolean }) {
  const base = light
    ? "var(--color-text-secondary)"
    : "var(--color-text-muted)";
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

export default function Footer() {
  return (
    <footer>
      {/* ── Newsletter strip ──────────────────────────────── */}
      <div
        style={{
          background: "var(--color-brand-tint)",
          borderTop: "1px solid rgba(246, 93, 1, 0.22)",
          borderBottom: "1px solid rgba(246, 93, 1, 0.22)",
        }}
      >
        <div className="lp-container lp-px flex flex-col items-center justify-between gap-5 py-5 sm:flex-row">
          {/* Left */}
          <div className="flex items-center gap-4">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{ background: "var(--color-brand)" }}
            >
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div>
              <p
                className="text-[15px] font-bold"
                style={{ color: "var(--color-text-primary)" }}
              >
                Sign up to our newsletter
              </p>
              <p
                className="text-[12px]"
                style={{ color: "var(--color-text-muted)" }}
              >
                Subscribe for architecture insights, free resources &amp;
                updates.
              </p>
            </div>
          </div>

          {/* Email input */}
          <div
            className="flex w-full items-center overflow-hidden rounded-xl border sm:w-auto sm:min-w-[360px]"
            style={{
              background: "var(--color-bg-surface)",
              borderColor: "rgba(246, 93, 1, 0.22)",
            }}
          >
            <input
              type="email"
              placeholder="Enter Your E-Mail"
              className="flex-1 bg-transparent px-4 py-3 text-[13px] outline-none"
              style={{ color: "var(--color-text-primary)" }}
            />
            <button
              className="shrink-0 cursor-pointer border-none px-4 py-3 transition-all"
              style={{ background: "var(--color-brand)", color: "#ffffff" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--color-brand-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--color-brand)")
              }
              aria-label="Subscribe"
            >
              <ArrowRight className="h-4 w-4" />
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

        {/* Watermark */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 flex items-end justify-center overflow-hidden select-none"
          aria-hidden="true"
        >
          <span
            className="text-[8rem] leading-none font-extrabold uppercase sm:text-[12rem] lg:text-[16rem]"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(15,17,23,0.05)",
              letterSpacing: "0.1em",
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
                  src="https://res.cloudinary.com/dd5elqfus/image/upload/v1788154826/noeveka_logo_dark_jph2va.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="relative -ml-2 flex h-12 w-40 items-center sm:h-12 sm:w-56 lg:h-14 lg:w-64">
                <img
                  src="/assets/logos/noeveka_black_text_logo.png"
                  alt="Noeveka"
                  className="h-full w-full object-contain object-left"
                />
              </div>
            </div>

            <p
              className="max-w-[260px] text-[13px] leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              At Noeveka, we believe enterprises deserve more than expensive
              tools with poor architecture — we deliver clarity, authority, and
              real impact.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {SOCIAL.map(({ Icon, href, label }) => (
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
              Company
            </p>
            <ul className="flex flex-col gap-2.5">
              {COL_COMPANY.map((l) => (
                <li key={l}>
                  <FooterLink label={l} />
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
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {COL_SERVICES.map((l) => (
                <li key={l}>
                  <FooterLink label={l} />
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
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-[13px] font-medium transition-colors"
                style={{
                  color: "var(--color-brand)",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                {CONTACT.email}
              </a>
              <p
                className="text-[13px]"
                style={{ color: "var(--color-text-muted)" }}
              >
                {CONTACT.phone}
              </p>
              <p
                className="text-[13px] leading-snug"
                style={{ color: "var(--color-text-muted)" }}
              >
                {CONTACT.address}
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
              © {new Date().getFullYear()} Noeveka Data &amp; AI Solutions. All
              rights reserved.
            </p>
            <nav className="flex items-center gap-5">
              {NAV_LINKS.map((l) => (
                <button
                  key={l}
                  className="cursor-pointer border-none bg-transparent text-[11px] font-medium transition-colors"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-brand)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-text-muted)")
                  }
                >
                  {l}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
