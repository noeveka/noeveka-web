import { useState } from "react";
import { Link, useLocation } from "react-router";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#who-we-are" },
  { label: "Services", href: "/#what-we-do" },
  { label: "Resources", href: "/#solutions" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

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
        </Link>

        {/* Center: Desktop Nav links */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {LINKS.map((link, idx) => {
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
          to="/#contact"
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
          <span>Start a conversation</span>{" "}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-700 transition-colors hover:text-black focus:outline-none lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
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
            {LINKS.map((link, idx) => (
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
                to="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors"
                style={{ background: "var(--color-brand)" }}
              >
                <span>Start a conversation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
