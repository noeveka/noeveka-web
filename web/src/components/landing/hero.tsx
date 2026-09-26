import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { HERO_CONFIG } from "@/config/landing/hero.config";
import { urlFor } from "@/lib/sanity";

// ── Images live in /public so they are served as static assets ──────────────
const LARGE_BG = "/assets/team-pictures/home_hero_large_screen_bg_image.png";
const SMALL_BG = "/assets/team-pictures/hero_section_bg_image_sm_screen.png";

interface HeroProps {
  bgImage?: { asset?: unknown; alt?: string };
  bgImageMobile?: { asset?: unknown; alt?: string };
  eyebrow?: string;
  headingLine1?: string;
  headingHighlight?: string;
  headingLine2?: string;
  headingPart1?: string;
  headingHighlight1?: string;
  headingPart2?: string;
  headingHighlight2?: string;
  headingPart3?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  // Retained for backward-compat — not rendered
  trustBadgeRating?: string;
  trustBadgeDescriptor?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  trustBullets?: string[];
  stats?: Array<{ val: string; label: string }>;
}

export default function Hero({
  bgImage,
  bgImageMobile,
  eyebrow,
  headingLine1,
  headingHighlight,
  headingLine2,
  headingPart1,
  headingHighlight2,
  headingPart3,
  subtitle = HERO_CONFIG.subtitle,
  primaryCtaText = HERO_CONFIG.primaryCtaText,
  primaryCtaLink = HERO_CONFIG.primaryCtaLink,
}: HeroProps) {
  const kicker = eyebrow || HERO_CONFIG.eyebrow;

  // Resolve background images — Sanity takes priority, fallback to local statics
  const largeSrc = bgImage?.asset
    ? urlFor(bgImage).width(1800).url()
    : LARGE_BG;
  const mobileSrc = bgImageMobile?.asset
    ? urlFor(bgImageMobile).width(900).url()
    : SMALL_BG;

  let line1 = headingLine1;
  let highlight = headingHighlight;
  let line2 = headingLine2;

  if (!line1) {
    if (headingPart1 && !headingPart1.toLowerCase().includes("architect")) {
      line1 = headingPart1.trim();
    } else {
      line1 = HERO_CONFIG.headingLine1;
    }
  }
  if (!highlight) highlight = headingHighlight2 || HERO_CONFIG.headingHighlight;
  if (!line2) line2 = headingPart3?.trim() || HERO_CONFIG.headingLine2;

  return (
    <section className="relative flex h-dvh flex-col overflow-hidden">
      {/* ── Background: portrait on phones, landscape on tablet/desktop ── */}
      <img
        src={mobileSrc}
        alt="Noeveka — Enterprise Data & AI Architecture"
        className="absolute inset-0 h-full w-full object-cover md:hidden"
        style={{ objectPosition: "center center" }}
        fetchPriority="high"
      />
      <img
        src={largeSrc}
        alt="Noeveka — Enterprise Data & AI Architecture"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        style={{ objectPosition: "65% center" }}
        fetchPriority="high"
      />

      {/* Mobile overlay: bottom-weighted so lowered text stays legible */}
      <div
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,10,20,0.18) 0%, rgba(5,10,20,0.55) 35%, rgba(5,10,20,0.75) 55%, rgba(5,10,20,0.92) 100%)",
        }}
      ></div>

      {/* Tablet/Desktop overlay: left-to-right */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(5,10,20,0.88) 0%, rgba(5,10,20,0.70) 34%, rgba(5,10,20,0.24) 56%, transparent 76%)",
        }}
      ></div>

      {/* Top vignette */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24"
        style={{ background: "linear-gradient(to bottom, rgba(5,10,20,0.30) 0%, transparent 100%)" }}
      ></div>

      {/* ── Content ──
          Phones (<md): column flex, content pinned near the bottom via justify-end.
          Tablet+ (md+): vertically centered, matching the desktop mock. */}
      <div className="lp-container lp-px relative z-10 mx-auto flex h-full w-full flex-1 flex-col justify-center pb-14 pt-4 md:flex-none md:justify-center py-24 md:py-32 lg:py-32">
        <div className="max-w-[520px] lg:max-w-[580px]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.26em] text-white/60"
          >
            {kicker}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mb-5 text-[2.55rem] sm:text-5xl lg:text-[3.6rem] xl:text-[3.85rem] font-extrabold tracking-tight leading-[1.1] text-white"
          >
            {line1}{" "}
            <span style={{ color: "var(--color-brand, #F65D01)" }}>{highlight}</span>
            {" "}
            {line2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mb-9 max-w-[460px] text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/70"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
          >
            {primaryCtaLink ? (
              <a
                href={primaryCtaLink}
                className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-white transition-all"
                style={{
                  background: "var(--color-brand, #F65D01)",
                  boxShadow: "0 4px 24px rgba(246,93,1,0.45)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-brand-hover, #D94E00)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(246,93,1,0.55)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-brand, #F65D01)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(246,93,1,0.45)";
                }}
              >
                {primaryCtaText}{" "}
                <LucideIcon name="arrow-right" className="h-4 w-4" />
              </a>
            ) : (
              <button
                type="button"
                className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-white transition-all"
                style={{
                  background: "var(--color-brand, #F65D01)",
                  boxShadow: "0 4px 24px rgba(246,93,1,0.45)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-brand-hover, #D94E00)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(246,93,1,0.55)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-brand, #F65D01)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(246,93,1,0.45)";
                }}
              >
                {primaryCtaText}{" "}
                <LucideIcon name="arrow-right" className="h-4 w-4" />
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}