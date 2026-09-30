import { Link } from "react-router";
import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { fu } from "@/lib/motion";
import type { ServiceDetailHero } from "@/types/service-detail.types";

interface ServiceHeroProps {
  hero: ServiceDetailHero;
}

export default function ServiceHero({ hero }: ServiceHeroProps) {
  const isPrimaryExternal = hero.primaryCtaLink?.startsWith("http");
  const isSecondaryExternal = hero.secondaryCtaLink?.startsWith("http");

  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden bg-[#0A0D14] text-white selection:bg-[#F65D01]/30">
      {/* ── Background Image ── */}
      {hero.heroImageUrl && (
        <img
          src={hero.heroImageUrl}
          alt={hero.heroImage?.alt || hero.heading}
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      )}

      {/* ── Subtle dark overlay to ensure readability ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent pointer-events-none" />

      {/* ── Foreground Content ── */}
      <div className="lp-container lp-px relative z-10 mx-auto w-full py-20 sm:py-24 lg:py-28">
        <div className="max-w-2xl lg:max-w-[660px]">
          {/* Eyebrow / Badge */}
          {hero.badge && (
            <motion.div {...fu(0.04)} className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[#F65D01] inline-block" />
              <span className="text-[11.5px] font-bold tracking-[0.2em] uppercase text-[#F65D01]">
                {hero.badge}
              </span>
            </motion.div>
          )}

          {/* Main Headline */}
          <motion.h1
            {...fu(0.08)}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight text-white leading-[1.14] mb-5 sm:mb-6"
          >
            {hero.heading}{" "}
            {hero.headingHighlight && (
              <span className="text-[#F65D01] block sm:inline">
                {hero.headingHighlight}
              </span>
            )}
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            {...fu(0.12)}
            className="text-[15px] sm:text-[16.5px] leading-relaxed text-neutral-200/90 mb-8 sm:mb-10 font-normal max-w-xl"
          >
            {hero.description}
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div {...fu(0.16)} className="flex flex-wrap items-center gap-4">
            {hero.primaryCtaText && (
              isPrimaryExternal ? (
                <a
                  href={hero.primaryCtaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F65D01] px-7 py-3.5 text-[14px] sm:text-[15px] font-semibold text-white shadow-[0_4px_20px_rgba(246,93,1,0.45)] transition-all duration-200 hover:bg-[#EA4800] hover:shadow-[0_6px_26px_rgba(246,93,1,0.6)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>{hero.primaryCtaText}</span>
                  <LucideIcon name="arrow-right" className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  to={hero.primaryCtaLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F65D01] px-7 py-3.5 text-[14px] sm:text-[15px] font-semibold text-white shadow-[0_4px_20px_rgba(246,93,1,0.45)] transition-all duration-200 hover:bg-[#EA4800] hover:shadow-[0_6px_26px_rgba(246,93,1,0.6)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>{hero.primaryCtaText}</span>
                  <LucideIcon name="arrow-right" className="w-4 h-4" />
                </Link>
              )
            )}

            {hero.secondaryCtaText && hero.secondaryCtaLink && (
              isSecondaryExternal ? (
                <a
                  href={hero.secondaryCtaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-xs px-6 py-3.5 text-[14px] sm:text-[15px] font-semibold text-white transition-all duration-200 hover:bg-white/20 hover:border-white/40"
                >
                  {hero.secondaryCtaText}
                </a>
              ) : (
                <Link
                  to={hero.secondaryCtaLink}
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-xs px-6 py-3.5 text-[14px] sm:text-[15px] font-semibold text-white transition-all duration-200 hover:bg-white/20 hover:border-white/40"
                >
                  {hero.secondaryCtaText}
                </Link>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
