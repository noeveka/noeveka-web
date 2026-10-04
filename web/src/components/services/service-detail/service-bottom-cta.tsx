import { Link } from "react-router";
import { motion } from "framer-motion";
import { fu } from "@/lib/motion";
import type { ServiceDetailBottomCta } from "@/types/service-detail.types";

export interface ServiceBottomCtaProps {
  cta: ServiceDetailBottomCta;
  eyebrow?: string;
}

/**
 * Reusable, clean and minimal CTA card component for Service Pages.
 */
export default function ServiceBottomCta({
  cta,
  eyebrow,
}: ServiceBottomCtaProps) {
  const displayEyebrow = cta.eyebrow || eyebrow;
  const isPrimaryExternal = cta.primaryCtaLink?.startsWith("http");
  const isSecondaryExternal = cta.secondaryCtaLink?.startsWith("http");

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 selection:bg-[#F65D01]/15"
      style={{
        backgroundColor: "var(--color-bg-subtle)",
        borderTop: "1px solid var(--color-stroke-default)",
      }}
    >
      <div className="lp-container lp-px mx-auto max-w-5xl">
        <motion.div
          {...fu(0.08)}
          className="service-bottom-cta-box"
        >
          {/* Subtle minimal decorative warm background accent */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-3xl opacity-15"
            style={{ background: "var(--color-brand)" }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Optional Eyebrow */}
            {displayEyebrow && (
              <div className="flex items-center gap-1.5 mb-4">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "var(--color-brand)" }}
                />
                <span
                  className="text-[11px] font-bold tracking-[0.2em] uppercase"
                  style={{ color: "var(--color-brand)" }}
                >
                  {displayEyebrow}
                </span>
              </div>
            )}

            {/* Main Headline */}
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              {cta.headingLine1}{" "}
              {cta.headingLine2 && (
                <span style={{ color: "var(--color-brand)" }}>
                  {cta.headingLine2}
                </span>
              )}
            </h2>

            {/* Subtext description */}
            <p
              className="text-[14.5px] sm:text-[15.5px] leading-relaxed mb-8 max-w-xl font-normal"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {cta.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              {cta.primaryCtaText && (
                isPrimaryExternal ? (
                  <a
                    href={cta.primaryCtaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-cta-btn-primary"
                  >
                    {cta.primaryCtaText}
                  </a>
                ) : (
                  <Link
                    to={cta.primaryCtaLink}
                    className="service-cta-btn-primary"
                  >
                    {cta.primaryCtaText}
                  </Link>
                )
              )}

              {cta.secondaryCtaText && cta.secondaryCtaLink && (
                isSecondaryExternal ? (
                  <a
                    href={cta.secondaryCtaLink}
                    className="service-cta-btn-secondary"
                  >
                    {cta.secondaryCtaText}
                  </a>
                ) : (
                  <Link
                    to={cta.secondaryCtaLink}
                    className="service-cta-btn-secondary"
                  >
                    {cta.secondaryCtaText}
                  </Link>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
