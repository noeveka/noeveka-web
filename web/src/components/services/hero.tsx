import { Link } from "react-router";
import { motion } from "framer-motion";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import {
  ArchitectureStackVisual,
  AgenticNetworkVisual,
  GovernanceShieldVisual,
  TransformationCurveVisual,
} from "./service-visuals";
import { SERVICES_CONFIG, type ServiceFocusArea } from "@/config/services.config";

interface ServicesHeroProps {
  eyebrow?: string;
  badge?: string;
  headingLine1?: string;
  headingLine2?: string;
  headingHighlight?: string;
  subtext?: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  focusAreas?: readonly ServiceFocusArea[];
}

const styles = {
  section: "relative w-full overflow-hidden bg-[#faf9f7] pt-14 pb-20 lg:pt-20 lg:pb-28 selection:bg-[#f65d01]/20",
  container: "lp-container lp-px relative z-10 mx-auto",
  
  // Header styles
  headerWrapper: "mx-auto max-w-3xl text-center mb-12 lg:mb-16",
  kickerBadge: "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase bg-[#1e212b]/5 text-[#1e212b] border border-neutral-300/60 mb-5 shadow-xs",
  kickerDot: "h-2 w-2 rounded-full bg-[#f65d01] animate-pulse",
  headline: "text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#1e212b] leading-[1.08] mb-4 sm:mb-5",
  headlineHighlight: "text-[#f65d01] inline-block",
  subtext: "text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-7 sm:mb-8 font-normal",
  
  // CTA styles
  ctaContainer: "flex items-center justify-center gap-4",
  primaryCta: "group inline-flex items-center gap-3 rounded-full bg-[#1e212b] pl-6 pr-2.5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#f65d01] hover:shadow-lg hover:-translate-y-0.5",
  ctaArrowBubble: "flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#f65d01]",
  
  // Cards Grid layout (3-column asymmetric matching reference design)
  cardsGrid: "grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch",
  leftCol: "lg:col-span-4 flex flex-col",
  centerCol: "lg:col-span-4 flex flex-col justify-between gap-5 lg:gap-6",
  rightCol: "lg:col-span-4 flex flex-col",

  // Left card (01 Architecture)
  cardLeft: "group relative flex flex-col justify-between rounded-[28px] bg-white p-5 sm:p-6 border border-neutral-200/90 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_48px_-6px_rgba(246,93,1,0.14)] hover:border-[#f65d01]/30 transition-all duration-300 hover:-translate-y-1 h-full min-h-[460px]",
  cardLeftVisualBox: "relative w-full h-[200px] sm:h-[210px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#fff6ed] via-[#ffedd9] to-[#fffaf5] border border-orange-100 flex items-center justify-center p-3 mb-6",
  actionCircleBtn: "absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#f65d01] text-white shadow-[0_4px_14px_rgba(246,93,1,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1e212b]",
  numberBadge: "inline-block text-xs font-black tracking-widest text-[#f65d01] bg-[#f65d01]/10 px-2 py-0.5 rounded-md mb-2 w-fit",
  cardTitle: "text-xl sm:text-[22px] font-bold text-[#1e212b] tracking-tight leading-snug mb-2 group-hover:text-[#f65d01] transition-colors",
  cardDesc: "text-sm text-neutral-600 leading-relaxed mb-4",
  bulletsList: "flex flex-wrap gap-1.5 pt-2 border-t border-neutral-100",
  pillTag: "text-[11px] font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full",

  // Center horizontal cards (02 & 03)
  cardCenterItem: "group relative flex items-center gap-4 sm:gap-5 rounded-[24px] bg-white p-5 border border-neutral-200/90 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_48px_-6px_rgba(246,93,1,0.12)] hover:border-[#f65d01]/30 transition-all duration-300 hover:-translate-y-1 flex-1",
  centerVisualSquare: "relative h-20 w-20 sm:h-22 sm:w-22 shrink-0 rounded-2xl bg-gradient-to-br from-[#1e212b] to-[#2a2e3d] flex items-center justify-center overflow-hidden border border-[#363a4a] shadow-inner",
  centerVisualCircle: "relative h-20 w-20 sm:h-22 sm:w-22 shrink-0 rounded-full bg-gradient-to-br from-[#fff0e6] to-[#ffd4b3] flex items-center justify-center overflow-hidden border border-[#f65d01]/30 shadow-inner",
  centerActionBadge: "absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#f65d01] text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#1e212b]",
  centerCardTitle: "text-base sm:text-lg font-bold text-[#1e212b] leading-tight mb-1.5 group-hover:text-[#f65d01] transition-colors",
  centerCardDesc: "text-xs sm:text-[13px] text-neutral-600 leading-normal line-clamp-2",

  // Right card (04 Transformation Advisory)
  cardRight: "group relative flex flex-col justify-between rounded-[28px] bg-white p-5 sm:p-6 border border-neutral-200/90 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_48px_-6px_rgba(246,93,1,0.14)] hover:border-[#f65d01]/30 transition-all duration-300 hover:-translate-y-1 h-full min-h-[460px]",
  cardRightVisualBox: "relative w-full h-[200px] sm:h-[210px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1e212b] via-[#161820] to-[#0e0f15] border border-neutral-800 flex items-center justify-center p-3 mt-6 shadow-inner",
};

export default function ServicesHero({
  headingLine1 = SERVICES_CONFIG.hero.headingLine1,
  headingLine2 = SERVICES_CONFIG.hero.headingLine2,
  headingHighlight = SERVICES_CONFIG.hero.headingHighlight,
  subtext = SERVICES_CONFIG.hero.subtext,
  ctaPrimaryText = SERVICES_CONFIG.hero.ctaPrimaryText,
  ctaPrimaryLink = SERVICES_CONFIG.hero.ctaPrimaryLink,
  focusAreas = SERVICES_CONFIG.focusAreas,
}: ServicesHeroProps) {
  const card1 = focusAreas[0];
  const card2 = focusAreas[1];
  const card3 = focusAreas[2];
  const card4 = focusAreas[3];

  return (
    <section className={styles.section} id="services-hero">
      {/* ── Ambient Background Decorations ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 25%, rgba(246,93,1,0.06) 0%, rgba(250,249,247,0) 80%)",
        }}
      />

      <div className={styles.container}>
        {/* ── Top Centered Header ── */}
        <div className={styles.headerWrapper}>
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className={styles.headline}
          >
            {headingLine1}
            <br />
            <span className={styles.headlineHighlight}>{headingHighlight ?? headingLine2}</span>
          </motion.h1>

          {/* Subtext description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className={styles.subtext}
          >
            {subtext}
          </motion.p>

          {/* Centered CTA Pill Button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className={styles.ctaContainer}
          >
            <a href={ctaPrimaryLink} className={styles.primaryCta}>
              <span>{ctaPrimaryText}</span>
              <span className={styles.ctaArrowBubble}>
                <LucideIcon
                  name={lucideIconRegistry.ArrowRight}
                  className="h-4 w-4"
                />
              </span>
            </a>
          </motion.div>
        </div>

        {/* ── 4-Card Hero Grid (Staggered 3-Column Asymmetric Formation) ── */}
        <div className={styles.cardsGrid} id="services-cards">
          {/* ── Column 1 (Left Card: 01 Enterprise Data & AI Architecture) ── */}
          {card1 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className={styles.leftCol}
            >
              <Link to={card1.ctaLink} className={styles.cardLeft}>
                {/* Visual Banner on TOP */}
                <div className={styles.cardLeftVisualBox}>
                  <ArchitectureStackVisual />
                  <div className={styles.actionCircleBtn} aria-label={card1.title}>
                    <LucideIcon
                      name={lucideIconRegistry.ArrowRight}
                      className="h-4 w-4"
                    />
                  </div>
                </div>

                {/* Text on BOTTOM */}
                <div>
                  <span className={styles.numberBadge}>{card1.number}</span>
                  <h3 className={styles.cardTitle}>{card1.title}</h3>
                  <p className={styles.cardDesc}>{card1.shortDescription}</p>

                  <div className={styles.bulletsList}>
                    {card1.bullets.slice(0, 3).map((bullet, idx) => (
                      <span key={idx} className={styles.pillTag}>
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* ── Column 2 (Center Column: Two Stacked Horizontal Cards) ── */}
          <div className={styles.centerCol}>
            {/* Card 02: Enterprise AI & Agentic Systems */}
            {card2 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.22 }}
                className="flex-1 flex"
              >
                <Link to={card2.ctaLink} className={styles.cardCenterItem}>
                  {/* Left Visual container */}
                  <div className={styles.centerVisualSquare}>
                    <AgenticNetworkVisual />
                    <div className={styles.centerActionBadge}>
                      <LucideIcon
                        name={lucideIconRegistry.ArrowRight}
                        className="h-3.5 w-3.5"
                      />
                    </div>
                  </div>

                  {/* Right Text */}
                  <div className="flex-1">
                    <span className={styles.numberBadge}>{card2.number}</span>
                    <h3 className={styles.centerCardTitle}>{card2.title}</h3>
                    <p className={styles.centerCardDesc}>{card2.shortDescription}</p>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Card 03: AI Governance & Architecture Assurance */}
            {card3 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.28 }}
                className="flex-1 flex"
              >
                <Link to={card3.ctaLink} className={styles.cardCenterItem}>
                  {/* Left Visual container */}
                  <div className={styles.centerVisualCircle}>
                    <GovernanceShieldVisual />
                    <div className={styles.centerActionBadge}>
                      <LucideIcon
                        name={lucideIconRegistry.ArrowRight}
                        className="h-3.5 w-3.5"
                      />
                    </div>
                  </div>

                  {/* Right Text */}
                  <div className="flex-1">
                    <span className={styles.numberBadge}>{card3.number}</span>
                    <h3 className={styles.centerCardTitle}>{card3.title}</h3>
                    <p className={styles.centerCardDesc}>{card3.shortDescription}</p>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>

          {/* ── Column 3 (Right Card: 04 Transformation Advisory) ── */}
          {card4 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className={styles.rightCol}
            >
              <Link to={card4.ctaLink} className={styles.cardRight}>
                {/* Text on TOP */}
                <div>
                  <span className={styles.numberBadge}>{card4.number}</span>
                  <h3 className={styles.cardTitle}>{card4.title}</h3>
                  <p className={styles.cardDesc}>{card4.shortDescription}</p>

                  <div className={styles.bulletsList}>
                    {card4.bullets.slice(0, 3).map((bullet, idx) => (
                      <span key={idx} className={styles.pillTag}>
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual Banner on BOTTOM */}
                <div className={styles.cardRightVisualBox}>
                  <TransformationCurveVisual />
                  <div className={styles.actionCircleBtn} aria-label={card4.title}>
                    <LucideIcon
                      name={lucideIconRegistry.ArrowRight}
                      className="h-4 w-4"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
