import { Link } from "react-router";

import { motion } from "framer-motion";

import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";

interface ServicesCtaProps {
  headingPart?: string;
  headingHighlight?: string;
  body?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const styles = {
  section:
    "relative w-full overflow-hidden bg-[#faf9f7] pt-10 pb-20 lg:pt-14 lg:pb-28 border-t border-neutral-200/60 selection:bg-[#f65d01]/20",
  container: "lp-container lp-px relative z-10 mx-auto",

  // Minimal Light Card (matching landing & about consistency)
  card: "relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10 overflow-hidden rounded-3xl bg-white px-8 py-12 sm:px-12 sm:py-16 border border-neutral-200/90 shadow-[0_4px_32px_rgba(15,17,23,0.06)]",

  // Ambient radial glows
  glowTopLeft:
    "pointer-events-none absolute -top-8 -left-8 h-56 w-56 rounded-full bg-gradient-to-br from-[#f65d01]/10 to-transparent blur-2xl",
  glowBottomRight:
    "pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-gradient-to-tl from-[#f65d01]/6 to-transparent blur-2xl",

  // Text Content
  contentWrapper: "relative z-10 max-w-xl text-left",
  headline:
    "text-3xl sm:text-[2.2rem] font-extrabold tracking-tight text-[#1e212b] leading-tight mb-4",
  highlight: "text-[#f65d01] block sm:inline",
  bodyText:
    "text-[15px] sm:text-base text-neutral-600 leading-relaxed font-normal",

  // Actions
  buttonGroup:
    "relative z-10 flex shrink-0 flex-col items-stretch sm:items-center lg:items-stretch gap-3 w-full sm:w-auto",
  primaryBtn:
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#f65d01] px-8 py-3.5 sm:py-4 text-[14px] font-semibold text-white whitespace-nowrap shadow-[0_4px_20px_rgba(246,93,1,0.28)] transition-all duration-300 hover:bg-[#d94e00] hover:shadow-[0_8px_28px_rgba(246,93,1,0.4)] hover:-translate-y-0.5",
  secondaryBtn:
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-8 py-3.5 sm:py-4 text-[14px] font-semibold text-[#1e212b] whitespace-nowrap transition-all duration-300 hover:border-[#f65d01] hover:text-[#f65d01] hover:-translate-y-0.5 shadow-xs",
};

export default function ServicesCta({
  headingPart = "Ready to architect your enterprise's ",
  headingHighlight = "data future?",
  body = "Book a free strategy call with Ajay Kumar and get an independent view of your platform fit, cost, and architecture roadmap — at no cost.",
  primaryCtaText = "Book a Free Strategy Call",
  primaryCtaLink = "/contact",
  secondaryCtaText = "Explore Our Resources",
  secondaryCtaLink = "/resources",
}: ServicesCtaProps) {
  return (
    <section className={styles.section} id="services-cta">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.card}
        >
          {/* Ambient subtle glows */}
          <div className={styles.glowTopLeft} />
          <div className={styles.glowBottomRight} />

          {/* Left Text */}
          <div className={styles.contentWrapper}>
            <h2 className={styles.headline}>
              {headingPart}
              <span className={styles.highlight}>{headingHighlight}</span>
            </h2>
            <p className={styles.bodyText}>{body}</p>
          </div>

          {/* Right Action Buttons */}
          <div className={styles.buttonGroup}>
            <Link to={primaryCtaLink} className={styles.primaryBtn}>
              <span>{primaryCtaText}</span>
              <LucideIcon
                name={lucideIconRegistry.ArrowRight}
                className="h-4 w-4"
              />
            </Link>

            <Link to={secondaryCtaLink} className={styles.secondaryBtn}>
              <span>{secondaryCtaText}</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
