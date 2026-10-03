import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
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
    <header className={`site-navbar ${scrolled ? "site-navbar-scrolled" : ""}`}>
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
                className={`navbar-link ${active ? "navbar-link-active" : ""}`}
              >
                {link.label}
                {/* Active underline indicator */}
                {active && <span className="navbar-link-underline" />}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA */}
        <Link to={ctaLink} className="navbar-cta-btn">
          <span>{ctaText}</span>
          <LucideIcon name={lucideIconRegistry.ArrowRight} className="h-3.5 w-3.5" />
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="navbar-mobile-toggle"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <LucideIcon name={lucideIconRegistry.Close} className="h-5 w-5" />
          ) : (
            <LucideIcon name={lucideIconRegistry.Menu} className="h-5 w-5" />
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
            className="navbar-mobile-drawer"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`navbar-mobile-link ${active ? "navbar-mobile-link-active" : ""}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 border-t border-neutral-100 pt-4" style={{ borderColor: "var(--color-stroke-default)" }}>
              <Link
                to={ctaLink}
                onClick={() => setMobileMenuOpen(false)}
                className="navbar-mobile-cta"
              >
                <span>{ctaText}</span>
                <LucideIcon name={lucideIconRegistry.ArrowRight} className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
