import { Link } from "react-router";
import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { fu } from "@/lib/motion";
import type { ServiceDetailHero } from "@/types/service-detail.types";

interface ServiceHeroProps {
  hero: ServiceDetailHero;
}

export default function ServiceHero({ hero }: ServiceHeroProps) {
  const isPrimaryExternal = hero.primaryCtaLink.startsWith("http");

  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden bg-[#0A0D14] text-white selection:bg-[#F65D01]/30">
      {/* ── Background Image ── */}
      <img
        src={hero.heroImageUrl || "/assets/services/service_one_hero_image.jpeg"}
        alt={hero.heroImage?.alt || hero.heading}
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />

      {/* ── Foreground Content ── */}
      <div className="lp-container lp-px relative z-10 mx-auto w-full py-20 sm:py-24 lg:py-28">
        <div className="max-w-2xl lg:max-w-[620px]">
          {/* Main Headline */}
          <motion.h1
            {...fu(0.08)}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.12] mb-5 sm:mb-6"
          >
            {hero.heading}{" "}
            <span className="text-[#F65D01] block sm:inline">
              {hero.headingHighlight}
            </span>
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            {...fu(0.12)}
            className="text-[15px] sm:text-[16.5px] leading-relaxed text-neutral-200/90 mb-8 sm:mb-10 font-normal max-w-xl"
          >
            {hero.description}
          </motion.p>

          {/* Single Action CTA Button */}
          <motion.div {...fu(0.16)}>
            {isPrimaryExternal ? (
              <a
                href={hero.primaryCtaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F65D01] px-8 py-3.5 text-[14.5px] sm:text-[15px] font-semibold text-white shadow-[0_4px_20px_rgba(246,93,1,0.45)] transition-all duration-200 hover:bg-[#EA4800] hover:shadow-[0_6px_26px_rgba(246,93,1,0.6)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{hero.primaryCtaText}</span>
                <LucideIcon name="arrow-right" className="w-4 h-4" />
              </a>
            ) : (
              <Link
                to={hero.primaryCtaLink}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F65D01] px-8 py-3.5 text-[14.5px] sm:text-[15px] font-semibold text-white shadow-[0_4px_20px_rgba(246,93,1,0.45)] transition-all duration-200 hover:bg-[#EA4800] hover:shadow-[0_6px_26px_rgba(246,93,1,0.6)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{hero.primaryCtaText}</span>
                <LucideIcon name="arrow-right" className="w-4 h-4" />
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
