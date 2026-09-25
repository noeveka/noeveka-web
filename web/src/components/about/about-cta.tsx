import { Link } from "react-router";
import { motion } from "framer-motion";

import { ABOUT_CONFIG } from "@/config/about.config";
import { fu } from "@/lib/motion";

interface AboutCtaProps {
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
  // Gracefully fallback old legacy Sanity defaults to the new design requested
  const line1 =
    headingLine1 ||
    (headingPlain && headingPlain !== "Ready to get"
      ? `${headingPlain} ${headingHighlight || ""}`.trim()
      : ABOUT_CONFIG.cta.headingLine1);

  const line2 =
    headingLine2 ||
    (headingTail && headingTail !== "on your data platform?"
      ? headingTail
      : ABOUT_CONFIG.cta.headingLine2);

  const bodyText =
    body && !body.includes("Book a free 30-minute strategy call with Ajay")
      ? body
      : ABOUT_CONFIG.cta.body;

  const primaryText =
    primaryCtaText && primaryCtaText !== "Book a Free Strategy Call"
      ? primaryCtaText
      : ABOUT_CONFIG.cta.primaryCtaText;

  const primaryHref =
    primaryCtaLink && primaryCtaLink !== "/#contact"
      ? primaryCtaLink
      : ABOUT_CONFIG.cta.primaryCtaLink;

  const secondaryText =
    secondaryCtaText && secondaryCtaText !== "Explore Our Services"
      ? secondaryCtaText
      : ABOUT_CONFIG.cta.secondaryCtaText;

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
          {...fu(0.06)}
          className="text-4xl font-extrabold tracking-tight text-[#161922] sm:text-5xl lg:text-[56px] leading-[1.12]"
        >
          <span className="block">{line1}</span>
          <span className="block mt-1 sm:mt-2">{line2}</span>
        </motion.h2>

        {/* Subtitle / Value Proposition Body */}
        <motion.p
          {...fu(0.12)}
          className="mx-auto mt-6 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-[#555d6e] font-normal"
        >
          {bodyText}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          {...fu(0.18)}
          className="mt-10 flex flex-col items-center justify-center gap-5"
        >
          {/* Primary Pill Button */}
          {isPrimaryExternal ? (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#161922] px-9 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(22,25,34,0.22)] transition-all duration-200 hover:bg-[#000000] hover:shadow-[0_8px_24px_rgba(22,25,34,0.32)] hover:-translate-y-0.5 active:translate-y-0"
            >
              {primaryText}
            </a>
          ) : (
            <Link
              to={primaryHref}
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#161922] px-9 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(22,25,34,0.22)] transition-all duration-200 hover:bg-[#000000] hover:shadow-[0_8px_24px_rgba(22,25,34,0.32)] hover:-translate-y-0.5 active:translate-y-0"
            >
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
              <span className="text-[#f65d01] font-bold text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          ) : (
            <Link
              to={secondaryHref}
              className="group inline-flex items-center gap-1.5 text-[14px] sm:text-[15px] font-semibold text-[#1e212b] transition-colors duration-200 hover:text-[#f65d01]"
            >
              <span>{secondaryText}</span>
              <span className="text-[#f65d01] font-bold text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
