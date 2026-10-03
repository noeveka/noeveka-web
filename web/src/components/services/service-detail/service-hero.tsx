import { Link } from "react-router";
import { motion } from "framer-motion";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import { fu } from "@/lib/motion";
import type { ServiceDetailHero } from "@/types/service-detail.types";

interface ServiceHeroProps {
  hero: ServiceDetailHero;
}

export default function ServiceHero({ hero }: ServiceHeroProps) {
  const isPrimaryExternal = hero.primaryCtaLink?.startsWith("http");
  const isSecondaryExternal = hero.secondaryCtaLink?.startsWith("http");

  const mobileImageUrl = hero.heroMobileImageUrl || hero.heroImageUrl;
  const mobileImageAlt = hero.heroMobileImage?.alt || hero.heroImage?.alt || hero.heading;
  const desktopImageUrl = hero.heroImageUrl;
  const desktopImageAlt = hero.heroImage?.alt || hero.heading;

  return (
    <section className="service-hero-section selection:bg-[#F65D01]/30">
      <div className="service-hero-container">

        {/* ── Mobile: flow image at top ── */}
        {mobileImageUrl && (
          <img
            src={mobileImageUrl}
            alt={mobileImageAlt}
            className="block lg:hidden w-full h-[280px] sm:h-[340px] object-cover object-center"
            fetchPriority="high"
          />
        )}

        {/* ── Desktop: absolute background image ── */}
        {desktopImageUrl && (
          <img
            src={desktopImageUrl}
            alt={desktopImageAlt}
            className="hidden lg:block absolute inset-0 h-full w-full object-cover object-center"
          />
        )}

        {/* ── Desktop overlay ── */}
        {/* <div className="hidden lg:block absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent pointer-events-none" /> */}

        {/* ── Foreground Content ── */}
        <div className="lp-container lp-px relative z-10 mx-auto w-full py-10 sm:py-12 lg:py-28">
          <div className="max-w-2xl lg:max-w-[660px]">

            {/* Eyebrow / Badge */}
            {hero.badge && (
              <motion.div {...fu(0.04)} className="service-section-eyebrow mb-4">
                <span className="service-section-eyebrow-bar" />
                <span className="service-section-eyebrow-text">
                  {hero.badge}
                </span>
              </motion.div>
            )}

            {/* Main Headline */}
            <motion.h1
              {...fu(0.08)}
              className="service-hero-heading"
            >
              {hero.heading}{" "}
              {hero.headingHighlight && (
                <span style={{ color: "var(--color-brand)" }} className="block sm:inline">
                  {hero.headingHighlight}
                </span>
              )}
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              {...fu(0.12)}
              className="service-hero-desc"
            >
              {hero.description}
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div
              {...fu(0.16)}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
            >
              {hero.primaryCtaText && (
                isPrimaryExternal ? (
                  <a
                    href={hero.primaryCtaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-hero-btn-primary"
                  >
                    <span>{hero.primaryCtaText}</span>
                    <LucideIcon name={lucideIconRegistry.ArrowRight} className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    to={hero.primaryCtaLink}
                    className="service-hero-btn-primary"
                  >
                    <span>{hero.primaryCtaText}</span>
                    <LucideIcon name={lucideIconRegistry.ArrowRight} className="w-4 h-4" />
                  </Link>
                )
              )}

              {hero.secondaryCtaText && hero.secondaryCtaLink && (
                isSecondaryExternal ? (
                  <a
                    href={hero.secondaryCtaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-hero-btn-secondary"
                  >
                    {hero.secondaryCtaText}
                  </a>
                ) : (
                  <Link
                    to={hero.secondaryCtaLink}
                    className="service-hero-btn-secondary"
                  >
                    {hero.secondaryCtaText}
                  </Link>
                )
              )}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
