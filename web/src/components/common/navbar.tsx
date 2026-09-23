import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { getSiteSettings, urlFor } from "@/lib/sanity";
import { NAVBAR_CONFIG } from "@/config/navbar.config";

interface NavItem { label: string; href: string }

interface SiteSettings {
  logoIcon?: { asset?: unknown; alt?: string };
  logoText?: { asset?: unknown; alt?: string };
  navItems?: NavItem[];
  navCtaText?: string;
  navCtaLink?: string;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    getSiteSettings().then(setSettings).catch(console.error);
  }, []);

  // Scroll detection — switch from transparent to frosted
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  const links = settings?.navItems?.length ? settings.navItems : NAVBAR_CONFIG.navItems;
  const ctaText = settings?.navCtaText ?? NAVBAR_CONFIG.navCtaText;
  const ctaLink = settings?.navCtaLink ?? NAVBAR_CONFIG.navCtaLink;

  const logoIconSrc = settings?.logoIcon?.asset
    ? urlFor(settings.logoIcon).width(96).url()
    : NAVBAR_CONFIG.logoIconFallbackUrl;

  const logoTextSrc = settings?.logoText?.asset
    ? urlFor(settings.logoText).width(320).url()
    : NAVBAR_CONFIG.logoTextFallbackUrl;

  const isActive = (href: string) => {
    if (href.startsWith("/#") || href.startsWith("#")) return false;
    return pathname === href;
  };

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 flex justify-center transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(255,255,255,0.92)"
          : "rgba(255,255,255,0.0)",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(232,229,221,0.8)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.04)" : "none",
      }}
    >
      <div className="lp-container lp-px relative flex h-16 items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-1">
          <div className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12">
            <img
              src={logoIconSrc}
              alt={settings?.logoIcon?.alt}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="relative -ml-2 flex h-14 w-26 items-center sm:h-12 sm:w-32 lg:h-14 lg:w-38">
            <img
              src={logoTextSrc}
              alt={settings?.logoText?.alt}
              className="h-full w-full object-contain object-left"
            />
          </div>
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                to={link.href}
                className="relative py-1 text-[13px] font-semibold transition-colors duration-150"
                style={{
                  color: active
                    ? "var(--color-brand)"
                    : scrolled
                    ? "var(--color-text-secondary)"
                    : "#444",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-brand)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = active
                    ? "var(--color-brand)"
                    : scrolled
                    ? "var(--color-text-secondary)"
                    : "#444")
                }
              >
                {link.label}
                {/* Active underline dot */}
                {active && (
                  <span
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: "var(--color-brand)" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA */}
        <Link
          to={ctaLink}
          className="hidden cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold shadow-[0_4px_16px_rgba(246,93,1,0.22)] transition-all lg:inline-flex"
          style={{ background: "var(--color-brand)", color: "#ffffff" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--color-brand-hover)";
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(246,93,1,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--color-brand)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(246,93,1,0.22)";
          }}
        >
          <span>{ctaText}</span>{" "}
          <LucideIcon name="arrow-right" className="h-3.5 w-3.5" />
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-neutral-100 focus:outline-none lg:hidden"
          style={{ color: "#444" }}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <LucideIcon name="close" className="h-5 w-5" />
          ) : (
            <LucideIcon name="menu" className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="absolute top-16 right-0 left-0 w-full overflow-hidden border-b border-neutral-200 bg-white px-6 py-5 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-[14px] font-semibold transition-colors"
                    style={{
                      color: active ? "var(--color-brand)" : "#444",
                      background: active ? "rgba(246,93,1,0.06)" : "transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 border-t border-neutral-100 pt-4">
              <Link
                to={ctaLink}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-bold text-white shadow-md transition-colors"
                style={{ background: "var(--color-brand)" }}
              >
                <span>{ctaText}</span>
                <LucideIcon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
