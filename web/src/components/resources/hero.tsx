import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import { RESOURCES_CONFIG } from "@/config/resources.config";
import { fadeUp } from "@/lib/motion";

import { MicrosoftFabricSvg } from "@/components/svgs/microsoft-fabric-svg";
import DatabricksSvg from "../svgs/databricks-svg";
import AzureSvg from "../svgs/Azure-svg";
import PowerBISvg from "../svgs/powerbi-svg";
import TrustCompanyLogoBar from "../landing/trust-company-logo-bar";

export interface ResourcesHeroProps {
  eyebrow?: string;
  heading?: string;
  headingHighlight?: string;
  subtext?: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
}

interface ArcBadge {
  key: string;
  name: string;
  Svg: ({ className }: { className?: string }) => React.ReactNode;
  color: string;
  bg: string;
  border: string;
  shadow: string;
  top: string;
  left?: string;
  right?: string;
  delay: number;
}

/* 4 Main platform badges sitting ON the 3 curved arc lines */
const ARC_BADGES: ArcBadge[] = [
  {
    key: "powerbi",
    name: "Power BI",
    Svg: PowerBISvg,
    color: "#f2c811",
    bg: "#ffffff",
    border: "#f2c81140",
    shadow: "rgba(242, 200, 17, 0.25)",
    left: "6%",
    top: "14%",
    delay: 0,
  },
  {
    key: "databricks",
    name: "Databricks",
    Svg: DatabricksSvg,
    color: "#ff3621",
    bg: "#ffffff",
    border: "#ff362140",
    shadow: "rgba(255, 54, 33, 0.25)",
    left: "11%",
    top: "58%",
    delay: 0.15,
  },
  {
    key: "fabric",
    name: "Microsoft Fabric",
    Svg: MicrosoftFabricSvg,
    color: "#0078d4",
    bg: "#ffffff",
    border: "#0078d440",
    shadow: "rgba(0, 120, 212, 0.25)",
    right: "12%",
    top: "12%",
    delay: 0.2,
  },
  {
    key: "azure",
    name: "Azure",
    Svg: AzureSvg,
    color: "#0078d4",
    bg: "#ffffff",
    border: "#0078d440",
    shadow: "rgba(0, 120, 212, 0.25)",
    right: "7%",
    top: "48%",
    delay: 0.25,
  },
];

/* Empty node dots resting on arc lines */
const ARC_NODES = [
  { left: "22%", top: "28%" },
  { left: "6%", top: "42%" },
  { right: "26%", top: "34%" },
  { right: "4%", top: "24%" },
  { right: "24%", top: "68%" },
];

export default function ResourcesHero({
  heading = RESOURCES_CONFIG.hero.heading,
  headingHighlight = RESOURCES_CONFIG.hero.headingHighlight,
  subtext = RESOURCES_CONFIG.hero.subtext,
  ctaPrimaryText = RESOURCES_CONFIG.hero.ctaPrimaryText,
  ctaPrimaryLink = RESOURCES_CONFIG.hero.ctaPrimaryLink,
  ctaSecondaryText = RESOURCES_CONFIG.hero.ctaSecondaryText,
  ctaSecondaryLink = RESOURCES_CONFIG.hero.ctaSecondaryLink,
}: ResourcesHeroProps) {
  return (
    <div>
      {/* ─── HERO SECTION ──────────────────────────────────────── */}
      <section
        className="relative flex justify-center overflow-hidden"
        style={{ backgroundColor: "var(--color-bg-surface)", minHeight: "620px" }}
      >
        {/* Warm radial background glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(246,93,1,0.05) 0%, transparent 100%)",
          }}
        />

        {/* Faint dot matrix background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-stroke-default) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.3,
          }}
        />

        {/* Outer container with SVG arcs & badges */}
        <div className="lp-container lp-px relative z-10 w-full min-h-[580px]">
          {/* 3 Concentric Curved Arc Lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 1200 620"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <path
              d="M -100 310 A 640 520 0 0 1 1300 310"
              stroke="rgba(0,0,0,0.08)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            <path
              d="M 40 310 A 500 400 0 0 1 1160 310"
              stroke="rgba(0,0,0,0.09)"
              strokeWidth="1.5"
            />
            <path
              d="M 180 310 A 360 280 0 0 1 1020 310"
              stroke="rgba(246,93,1,0.12)"
              strokeWidth="1.5"
            />
          </svg>

          {/* Decorative hollow node dots */}
          {ARC_NODES.map((node, nodeIndex) => (
            <div
              key={nodeIndex}
              className="resources-arc-node"
              style={{
                left: node.left,
                right: (node as { right?: string }).right,
                top: node.top,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}

          {/* Platform SVG Circular Badges */}
          {ARC_BADGES.map((badge, badgeIndex) => (
            <motion.div
              key={badge.key}
              className="pointer-events-none absolute z-20 hidden lg:flex"
              style={{
                top: badge.top,
                left: badge.left,
                right: badge.right,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, badgeIndex % 2 === 0 ? -6 : 6, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: badge.delay },
                scale: { duration: 0.5, delay: badge.delay },
                y: {
                  duration: 3.5 + badgeIndex * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: badge.delay + 0.3,
                },
              }}
            >
              <div
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110"
                style={{
                  border: `1.5px solid ${badge.border}`,
                  boxShadow: `0 10px 24px -2px ${badge.shadow}, 0 2px 8px rgba(0,0,0,0.06)`,
                }}
              >
                <badge.Svg className="h-7 w-7" />
                <span className="resources-badge-tooltip">{badge.name}</span>
              </div>
            </motion.div>
          ))}

          {/* Centered Hero Content */}
          <div className="relative z-10 flex flex-col items-center py-20 text-center lg:py-28">
            {/* H1 Heading */}
            <motion.h1
              {...fadeUp(0.08)}
              className="about-narrative-heading mb-5 max-w-[720px] text-[3rem] sm:text-[3.8rem] lg:text-[4.8rem]"
            >
              {heading}{" "}
              <span
                className="relative inline-block"
                style={{ color: "var(--color-brand)" }}
              >
                {headingHighlight}
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              {...fadeUp(0.16)}
              className="mb-9 max-w-[520px] text-[16px] leading-relaxed sm:text-[17px]"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {subtext}
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.24)}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {/* Primary - brand filled pill */}
              <a
                href={ctaPrimaryLink}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-bold transition-all hover:-translate-y-0.5"
                style={{
                  background: "var(--color-brand)",
                  color: "var(--color-text-inverse)",
                  boxShadow: "0 4px 20px rgba(246,93,1,0.3)",
                }}
              >
                <LucideIcon name={lucideIconRegistry.Download} className="h-4 w-4" />
                {ctaPrimaryText}
              </a>

              {/* Secondary - surface pill */}
              <Link
                to={ctaSecondaryLink}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-bold transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--color-bg-surface)",
                  color: "var(--color-text-primary)",
                  border: "1.5px solid var(--color-stroke-default)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                {ctaSecondaryText}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "var(--color-stroke-default)" }}
        />
      </section>

      <TrustCompanyLogoBar />
    </div>
  );
}
