import { Link } from "react-router";
import { motion } from "framer-motion";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import { ABOUT_CONFIG } from "@/config/about.config";
import { fadeUp } from "@/lib/motion";

export interface AboutCtaProps {
  headingLine1?: string;
  headingLine2?: string;
  headingPlain?: string;
  headingHighlight?: string;
  headingTail?: string;
  body?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function AboutCta({
  headingLine1,
  headingLine2,
  headingPlain,
  headingHighlight,
  headingTail,
  body,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: AboutCtaProps) {
  const line1 =
    headingLine1 ||
    (headingPlain ? `${headingPlain} ${headingHighlight || ""}`.trim() : "") ||
    ABOUT_CONFIG.cta.headingLine1;

  const line2 =
    headingLine2 ||
    headingTail ||
    ABOUT_CONFIG.cta.headingLine2;

  const bodyText = body || ABOUT_CONFIG.cta.body;
  const primaryText = primaryCtaText || ABOUT_CONFIG.cta.primaryCtaText;
  const primaryHref = primaryCtaLink || ABOUT_CONFIG.cta.primaryCtaLink;
  const secondaryText = secondaryCtaText || ABOUT_CONFIG.cta.secondaryCtaText;
  const secondaryHref =
    secondaryCtaLink && secondaryCtaLink !== "/"
      ? secondaryCtaLink
      : ABOUT_CONFIG.cta.secondaryCtaLink;

  const isPrimaryExternal = primaryHref.startsWith("http");
  const isSecondaryExternal = secondaryHref.startsWith("http");

  return (
    <section
      id="contact"
      className="relative flex justify-center overflow-hidden border-t border-neutral-100 bg-white py-24 sm:py-32 lg:py-40 selection:bg-[#f65d01]/15"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(15, 23, 42, 0.08) 1.25px, transparent 1.25px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="lp-container lp-px relative z-10 mx-auto max-w-4xl text-center">
        {/* Main Heading */}
        <motion.h2
          {...fadeUp(0.06)}
          className="text-4xl font-extrabold tracking-tight text-[#161922] sm:text-5xl lg:text-[56px] leading-[1.12]"
        >
          <span className="block">{line1}</span>
          <span className="block mt-1 sm:mt-2">{line2}</span>
        </motion.h2>

        {/* Subtitle / Value Proposition Body */}
        <motion.p
          {...fadeUp(0.12)}
          className="mx-auto mt-6 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-[#555d6e] font-normal"
        >
          {bodyText}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          {...fadeUp(0.18)}
          className="mt-10 flex flex-col items-center justify-center gap-5"
        >
          {isPrimaryExternal ? (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-dark"
            >
              {primaryText}
            </a>
          ) : (
            <Link to={primaryHref} className="btn-hero-dark">
              {primaryText}
            </Link>
          )}

          {/* Secondary Text Link with Orange Arrow */}
          {isSecondaryExternal ? (
            <a
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[14px] sm:text-[15px] font-semibold text-[#1e212b] transition-colors duration-200 hover:text-[#f65d01]"
            >
              <span>{secondaryText}</span>
              <LucideIcon
                name={lucideIconRegistry.ArrowUpRight}
                className="h-4 w-4 text-[#f65d01] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ) : (
            <Link
              to={secondaryHref}
              className="group inline-flex items-center gap-1.5 text-[14px] sm:text-[15px] font-semibold text-[#1e212b] transition-colors duration-200 hover:text-[#f65d01]"
            >
              <span>{secondaryText}</span>
              <LucideIcon
                name={lucideIconRegistry.ArrowUpRight}
                className="h-4 w-4 text-[#f65d01] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
