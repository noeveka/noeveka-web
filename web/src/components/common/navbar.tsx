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

// Fallback links live in @/config/navbar.config.ts

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    getSiteSettings().then(setSettings).catch(console.error);
  }, []);

  const links = settings?.navItems?.length ? settings.navItems : NAVBAR_CONFIG.navItems;
  const ctaText = settings?.navCtaText ?? NAVBAR_CONFIG.navCtaText;
  const ctaLink = settings?.navCtaLink ?? NAVBAR_CONFIG.navCtaLink;

  const logoIconSrc = settings?.logoIcon?.asset
    ? urlFor(settings.logoIcon).width(96).url()
    : NAVBAR_CONFIG.logoIconFallbackUrl

  const logoTextSrc = settings?.logoText?.asset
    ? urlFor(settings.logoText).width(320).url()
    : NAVBAR_CONFIG.logoTextFallbackUrl;

  const isActive = (href: string) => {
    if (href.startsWith("/#") || href.startsWith("#")) return false;
    return pathname === href;
  };

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 flex justify-center backdrop-blur-md"
      style={{
        background: "rgba(255,255,255,0.95)",
        borderBottom: "1px solid var(--color-stroke-default)",
      }}
    >
      <div className="lp-container lp-px relative flex h-16 items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-1">
          <div className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12">
            <img
              src={logoIconSrc}
              alt={settings?.logoIcon?.alt }
              className="h-full w-full object-contain"
            />
          </div>
          <div className="relative -ml-2 flex h-12 w-40 items-center sm:h-12 sm:w-56 lg:h-14 lg:w-64">
            <img
              src={logoTextSrc}
              alt={settings?.logoText?.alt}
              className="h-full w-full object-contain object-left"
            />
          </div>
        </Link>

        {/* Center: Desktop Nav links */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {links.map((link, idx) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                to={link.href}
                className="relative py-1 text-[13px] font-semibold transition-colors duration-150"
                style={{
                  color:
                    active || idx === 0
                      ? "var(--color-brand)"
                      : "var(--color-text-secondary)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-brand)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    active || idx === 0
                      ? "var(--color-brand)"
                      : "var(--color-text-secondary)")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Button */}
        <Link
          to={ctaLink}
          className="hidden cursor-pointer items-center gap-2 rounded-full border-none px-5 py-2.5 text-[13px] font-semibold shadow-[0_4px_16px_rgba(246,93,1,0.22)] transition-all lg:inline-flex"
          style={{ background: "var(--color-brand)", color: "#ffffff" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--color-brand-hover)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--color-brand)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <span>{ctaText}</span>{" "}
          <LucideIcon name="arrow-right" className="h-3.5 w-3.5" />
        </Link>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-700 transition-colors hover:text-black focus:outline-none lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <LucideIcon name="close" className="h-6 w-6" />
          ) : (
            <LucideIcon name="menu" className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-16 right-0 left-0 flex w-full flex-col gap-4 overflow-hidden border-b border-gray-200 bg-white px-6 py-5 shadow-xl lg:hidden"
          >
            {links.map((link, idx) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-semibold text-gray-800 transition-colors hover:bg-gray-50"
                style={{ color: idx === 0 ? "var(--color-brand)" : undefined }}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-2">
              <Link
                to={ctaLink}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors"
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
