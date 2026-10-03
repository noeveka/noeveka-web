import { motion } from "framer-motion";

import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import { CTA_STRIP_CONFIG } from "@/config/landing/cta-strip.config";
import { fu } from "@/lib/motion";

interface CtaStripProps {
  eyebrow?: string;
  headingPart?: string;
  headingHighlight?: string;
  body?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function CtaStrip({
  headingPart = CTA_STRIP_CONFIG.headingPart,
  headingHighlight = CTA_STRIP_CONFIG.headingHighlight,
  body = CTA_STRIP_CONFIG.body,
  primaryCtaText = CTA_STRIP_CONFIG.primaryCtaText,
  primaryCtaLink = CTA_STRIP_CONFIG.primaryCtaLink,
  secondaryCtaText = CTA_STRIP_CONFIG.secondaryCtaText,
  secondaryCtaLink = CTA_STRIP_CONFIG.secondaryCtaLink,
}: CtaStripProps) {
  return (
    <section id="contact" className="lp-section lp-section-border-t">
      <div className="lp-container lp-px py-16 lg:py-20">
        <div className="cta-card">
          {/* Decorative gradient blobs */}
          <div className="cta-blob-tl" aria-hidden="true" />
          <div className="cta-blob-br" aria-hidden="true" />

          {/* Text copy */}
          <div className="relative max-w-xl text-left">
            <motion.h2 {...fu(0.07)} className="cta-hero-heading">
              {headingPart}
              <span className="text-brand">{headingHighlight}</span>
            </motion.h2>
            <motion.p
              {...fu(0.13)}
              className="lp-section-subtext text-text-secondary"
            >
              {body}
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            {...fu(0.19)}
            className="relative flex shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch"
          >
            {primaryCtaLink ? (
              <a href={primaryCtaLink} className="btn-hero">
                {primaryCtaText}{" "}
                <LucideIcon
                  name={lucideIconRegistry.ArrowRight}
                  className="h-4 w-4"
                />
              </a>
            ) : (
              <button className="btn-hero">
                {primaryCtaText}{" "}
                <LucideIcon
                  name={lucideIconRegistry.ArrowRight}
                  className="h-4 w-4"
                />
              </button>
            )}

            {secondaryCtaLink ? (
              <a href={secondaryCtaLink} className="btn-outline-pill">
                {secondaryCtaText}
              </a>
            ) : (
              <button className="btn-outline-pill">{secondaryCtaText}</button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
