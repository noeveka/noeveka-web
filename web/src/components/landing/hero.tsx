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

  const ctaClass = "btn-hero";

  return (
    <section className="relative flex h-dvh flex-col overflow-hidden">
      {/* ── Background: portrait on phones, landscape on tablet/desktop ── */}
      <img
        src={mobileSrc}
        alt="Noeveka — Enterprise Data & AI Architecture"
        className="absolute inset-0 h-full w-full object-cover object-center md:hidden"
        fetchPriority="high"
      />
      <img
        src={largeSrc}
        alt="Noeveka — Enterprise Data & AI Architecture"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        style={{ objectPosition: "65% center" }}
        fetchPriority="high"
      />

      {/* Mobile overlay — CSS class drives the gradient token */}
      <div className="lp-hero-overlay-mobile md:hidden" />

      {/* Tablet/Desktop overlay */}
      <div className="lp-hero-overlay-desktop hidden md:block" />

      {/* Top vignette */}
      <div className="lp-hero-overlay-top" />

      {/* ── Content ── */}
      <div className="lp-container lp-px relative z-10 mx-auto flex h-full w-full flex-1 flex-col justify-end pb-14 pt-4 md:flex-none md:justify-center md:py-32 lg:py-32">
        <div className="max-w-[520px] lg:max-w-[580px]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lp-eyebrow mb-4 text-white/60"
          >
            <span className="text-[13px] leading-none">✳</span> {kicker}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mb-5 text-[2.55rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.6rem] xl:text-[3.85rem]"
          >
            {line1}{" "}
            <span className="text-brand">{highlight}</span>
            {" "}
            {line2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mb-9 max-w-[460px] text-[14.5px] leading-relaxed text-white/70 sm:text-[15.5px]"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
          >
            {primaryCtaLink ? (
              <a href={primaryCtaLink} className={ctaClass}>
                {primaryCtaText}{" "}
                <LucideIcon name="arrow-right" className="h-4 w-4" />
              </a>
            ) : (
              <button type="button" className={ctaClass}>
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