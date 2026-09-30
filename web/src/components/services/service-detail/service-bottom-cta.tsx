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
    <section className="relative overflow-hidden bg-[#FAFAFA] py-16 sm:py-20 lg:py-24 border-t border-neutral-200/70 selection:bg-[#F65D01]/15">
      <div className="lp-container lp-px mx-auto max-w-5xl">
        <motion.div
          {...fu(0.08)}
          className="relative rounded-3xl bg-white p-8 sm:p-12 lg:p-14 border border-neutral-200/80 shadow-[0_4px_30px_rgba(0,0,0,0.03)] text-center overflow-hidden"
        >
          {/* Subtle minimal decorative warm background accent */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-3xl opacity-15"
            style={{ background: "#F65D01" }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Optional Eyebrow */}
            {displayEyebrow && (
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F65D01]" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F65D01]">
                  {displayEyebrow}
                </span>
              </div>
            )}

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#161922] leading-[1.2] mb-4">
              {cta.headingLine1}{" "}
              {cta.headingLine2 && (
                <span className="text-[#F65D01]">
                  {cta.headingLine2}
                </span>
              )}
            </h2>

            {/* Subtext description */}
            <p className="text-[14.5px] sm:text-[15.5px] text-[#555D6E] leading-relaxed mb-8 max-w-xl font-normal">
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
                    className="inline-flex items-center justify-center rounded-full bg-[#161922] px-7 py-3 text-[14px] sm:text-[14.5px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#F65D01] hover:shadow-[0_4px_16px_rgba(246,93,1,0.25)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {cta.primaryCtaText}
                  </a>
                ) : (
                  <Link
                    to={cta.primaryCtaLink}
                    className="inline-flex items-center justify-center rounded-full bg-[#161922] px-7 py-3 text-[14px] sm:text-[14.5px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#F65D01] hover:shadow-[0_4px_16px_rgba(246,93,1,0.25)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {cta.primaryCtaText}
                  </Link>
                )
              )}

              {cta.secondaryCtaText && cta.secondaryCtaLink && (
                isSecondaryExternal ? (
                  <a
                    href={cta.secondaryCtaLink}
                    className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-[14px] sm:text-[14.5px] font-semibold text-[#161922] transition-all duration-200 hover:border-neutral-400 hover:bg-neutral-50 shadow-xs"
                  >
                    {cta.secondaryCtaText}
                  </a>
                ) : (
                  <Link
                    to={cta.secondaryCtaLink}
                    className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-[14px] sm:text-[14.5px] font-semibold text-[#161922] transition-all duration-200 hover:border-neutral-400 hover:bg-neutral-50 shadow-xs"
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
