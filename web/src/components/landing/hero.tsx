import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { HERO_CONFIG } from "@/config/landing/hero.config";
import { urlFor } from "@/lib/sanity";

interface HeroProps {
  bgImage?: { asset?: unknown; alt?: string };
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
  // Legacy/ignored props (retained for backward compatibility without rendering)
  trustBadgeRating?: string;
  trustBadgeDescriptor?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  trustBullets?: string[];
  stats?: Array<{ val: string; label: string }>;
}

export default function Hero({
  bgImage,
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
  const bgSrc = bgImage?.asset
    ? urlFor(bgImage).width(1800).url()
    : HERO_CONFIG.bgImageFallbackUrl;
  const bgAlt = bgImage?.alt ?? HERO_CONFIG.bgImageAlt;

  // Eyebrow / Kicker text
  const kicker = eyebrow || HERO_CONFIG.eyebrow;

  // Resolve heading parts cleanly
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

  if (!highlight) {
    highlight = headingHighlight2 || HERO_CONFIG.headingHighlight;
  }

  if (!line2) {
    line2 = headingPart3?.trim() || HERO_CONFIG.headingLine2;
  }

  return (
    <section className="relative flex min-h-[85vh] lg:min-h-[88vh] items-center overflow-hidden">
      {/* ── Background image ── */}
      <img
        src={bgSrc}
        alt={bgAlt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "65% center" }}
      />
      {/* ── Content ── */}
      <div className="lp-container lp-px relative z-10 mx-auto w-full py-20 lg:py-28">
        <div className="max-w-[560px]">
          {/* Eyebrow / Kicker */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#64748b] sm:text-sm"
          >
            {kicker}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mb-5 text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem] leading-[1.12]"
          >
            {line1}
            <br />
            <span style={{ color: "var(--color-brand)" }}>{highlight}</span>{" "}
            {line2}
          </motion.h1>

          {/* Subtitle / Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mb-8 max-w-[480px] text-[15px] leading-relaxed text-[#475569] sm:text-[16px]"
          >
            {subtitle}
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
          >
            {primaryCtaLink ? (
              <a
                href={primaryCtaLink}
                className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-lg transition-all"
                style={{
                  background: "var(--color-brand)",
                  boxShadow: "0 4px 20px rgba(246,93,1,0.38)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-brand-hover)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px rgba(246,93,1,0.48)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-brand)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(246,93,1,0.38)";
                }}
              >
                {primaryCtaText}{" "}
                <LucideIcon name="arrow-right" className="h-4 w-4" />
              </a>
            ) : (
              <button
                type="button"
                className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-lg transition-all"
                style={{
                  background: "var(--color-brand)",
                  boxShadow: "0 4px 20px rgba(246,93,1,0.38)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-brand-hover)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px rgba(246,93,1,0.48)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-brand)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(246,93,1,0.38)";
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
