import { Link } from "react-router";
import { motion } from "framer-motion";

import AzureSvg from "@/components/svgs/Azure-svg";
import DatabricksSvg from "@/components/svgs/databricks-svg";
import MicrosoftSvg from "@/components/svgs/microsoft-svg";
import SnowflakeSvg from "@/components/svgs/snowflake-svg";
import { ABOUT_CONFIG } from "@/config/about.config";
import { fu } from "@/lib/motion";

interface HeroStat {
  value: string;
  label: string;
}

interface HeroProps {
  badge?: string;
  headingLine1?: string;
  headingLine2?: string;
  headingHighlight?: string;
  subheading?: string;
  subtext?: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  bgImage?: { asset?: unknown; alt?: string };
  mobileBgImage?: { asset?: unknown; alt?: string };
  badgeTags?: string[];
  stats?: HeroStat[];
  mobileStats?: HeroStat[];
  photo?: { asset?: unknown; alt?: string } | unknown;
  photoAlt?: string;
}

export default function Hero({
  headingLine1,
  headingLine2,
  headingHighlight,
  subtext,
  ctaPrimaryText,
  ctaPrimaryLink,
  ctaSecondaryText,
  ctaSecondaryLink,
  stats,
  photoAlt = "Ajay Kumar — Founder & Principal Architect, Noeveka",
}: HeroProps) {
  const resolvedStats = stats?.length ? stats : [...ABOUT_CONFIG.hero.stats];

  // 3 high-impact enterprise metrics matching the reference layout
  const displayStats = [
    resolvedStats[0] || { value: "15+", label: "Years Enterprise Experience" },
    resolvedStats[1] || { value: "3", label: "Global Advisory Hubs" },
    resolvedStats[2] || { value: "5K+", label: "Leaders Trained" },
  ];

  const line1 =
    headingLine1 && headingLine1 !== "A Global Journey."
      ? headingLine1
      : "Architect-Led Clarity for";

  const line2 =
    headingLine2 && headingLine2 !== "A Bigger"
      ? headingLine2
      : "Enterprise Ambition";

  const highlight =
    headingHighlight && headingHighlight !== "Purpose." ? headingHighlight : "";

  const resolvedSubtext =
    subtext && !subtext.includes("From BI Consulting Pro")
      ? subtext
      : "Noeveka is an independent enterprise advisory delivering architect-grade data platform strategy, Fabric & Databricks implementation, and GenAI governance.";

  const primaryText = ctaPrimaryText || ABOUT_CONFIG.hero.ctaPrimaryText || "Let's Talk";
  const primaryHref = ctaPrimaryLink || ABOUT_CONFIG.hero.ctaPrimaryLink || "/contact";
  const secondaryText = ctaSecondaryText || ABOUT_CONFIG.hero.ctaSecondaryText || "Explore Focus Areas";
  const secondaryHref = ctaSecondaryLink || ABOUT_CONFIG.hero.ctaSecondaryLink || "/services";

  return (
    <section className="relative w-full overflow-hidden bg-white pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      <div className="lp-container lp-px mx-auto max-w-6xl">
        {/* ── Top Centered Header Content ── */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Main Headline */}
          <motion.h1
            {...fu(0.04)}
            className="text-3xl font-extrabold tracking-tight text-[#161922] sm:text-5xl lg:text-[56px] leading-[1.12]"
          >
            <span className="block sm:tracking-tight">{line1}</span>
            <span className="block mt-1 sm:mt-2 text-[#161922]">
              {line2} {highlight && <span className="text-[#f65d01]">{highlight}</span>}
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            {...fu(0.08)}
            className="mx-auto mt-5 max-w-2xl text-[15px] sm:text-base lg:text-[17px] leading-relaxed text-[#555d6e]"
          >
            {resolvedSubtext}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            {...fu(0.12)}
            className="mt-7 flex flex-wrap items-center justify-center gap-3.5"
          >
            <Link
              to={primaryHref}
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#f65d01] px-8 py-3 text-[14px] font-semibold text-white shadow-[0_4px_16px_rgba(246,93,1,0.28)] transition-all duration-200 hover:bg-[#ff711e] hover:shadow-[0_8px_24px_rgba(246,93,1,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              {primaryText}
            </Link>

            <Link
              to={secondaryHref}
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-white px-7 py-3 text-[14px] font-semibold text-[#161922] shadow-xs transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 hover:-translate-y-0.5 active:translate-y-0"
            >
              {secondaryText}
            </Link>
          </motion.div>
        </div>

        {/* ── Center Photo with White Stairs-Like Bottom ── */}
        <motion.div
          {...fu(0.16)}
          className="relative mx-auto mt-10 sm:mt-12 w-full max-w-5xl overflow-hidden rounded-t-3xl rounded-bl-3xl bg-white"
        >
          {/* Main Hero Photograph */}
          <div className="relative aspect-[16/11] sm:aspect-[16/9] w-full overflow-hidden">
            <img
              src="/assets/team-pictures/about_page_hero_image.png"
              alt={photoAlt}
              className="h-full w-full object-cover object-[center_30%]"
            />

            {/* Reading Protection Vignette on bottom-left for Stats */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.28) 28%, transparent 56%)",
              }}
            />

            {/* Stats Overlaid on Lower-Left of Image (lifted higher above the bottom) */}
            <div className="absolute bottom-4 left-3.5 z-10 flex items-center gap-2.5 sm:bottom-8 sm:left-8 sm:gap-7 lg:bottom-10 lg:left-9 lg:gap-9">
              {displayStats.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-base font-bold tracking-tight text-white drop-shadow-md sm:text-2xl lg:text-3xl">
                    {item.value}
                  </span>
                  <span className="mt-0.5 text-[8.5px] font-medium leading-tight text-white/90 drop-shadow-sm sm:text-[11px] lg:text-xs">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* ── White Stairs SVG Overlay (Desktop) ── */}
            <svg
              className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 hidden h-20 w-full sm:block lg:h-24"
              viewBox="0 0 1200 120"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 120 L 360 120 C 385 120, 395 65, 420 65 L 710 65 C 735 65, 745 16, 770 16 L 1200 16 L 1200 120 L 0 120 Z"
                fill="#ffffff"
              />
            </svg>

            {/* ── White Stairs SVG Overlay (Mobile) ── */}
            <svg
              className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 block h-14 w-full sm:hidden"
              viewBox="0 0 600 100"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 100 L 290 100 C 305 100, 310 52, 325 52 L 460 52 C 475 52, 480 18, 495 18 L 600 18 L 600 100 L 0 100 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </motion.div>

        {/* ── Trusted Partners Row Underneath Stairs ── */}
        <motion.div {...fu(0.2)} className="mt-10 sm:mt-12 text-center">
          <p className="mb-6 text-[14px] italic text-[#555d6e] sm:text-base">
            Trusted partners
          </p>

          <div className="mx-auto flex flex-wrap items-center justify-center gap-7 sm:gap-12 lg:gap-16">
            {/* Microsoft */}
            <div className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-105">
              <MicrosoftSvg />
              <span className="text-[15px] font-bold tracking-tight text-[#161922] sm:text-lg">
                Microsoft
              </span>
            </div>

            {/* Databricks */}
            <div className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-105">
              <DatabricksSvg />
              <span className="text-[15px] font-bold tracking-tight text-[#161922] sm:text-lg">
                Databricks
              </span>
            </div>

            {/* Snowflake */}
            <div className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-105">
              <SnowflakeSvg />
              <span className="text-[15px] font-bold tracking-tight text-[#161922] sm:text-lg">
                Snowflake
              </span>
            </div>

            {/* Azure */}
            <div className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-105">
              <AzureSvg />
              <span className="text-[15px] font-bold tracking-tight text-[#161922] sm:text-lg">
                Azure
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
