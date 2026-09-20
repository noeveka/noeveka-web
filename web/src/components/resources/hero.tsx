import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { LucideIcon } from "@/components/lucide-icons";
import { RESOURCES_CONFIG } from "@/config/resources.config";
import {
  PowerBISvg,
  FabricSvg,
  DatabricksSvg,
  AzureSvg,
  GenAISvg,
  GovernanceSvg,
} from "@/components/svgs/tech-svgs";

interface ResourcesHeroProps {
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

/* 5 Main platform badges sitting ON the 3 curved arc lines (Opero-style) */
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
    Svg: FabricSvg,
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
  {
    key: "genai",
    name: "GenAI",
    Svg: GenAISvg,
    color: "#10a37f",
    bg: "#ffffff",
    border: "#10a37f40",
    shadow: "rgba(16, 163, 127, 0.25)",
    right: "15%",
    top: "76%",
    delay: 0.3,
  },
];

/* Empty node dots resting on arc lines (Opero-style decorative points) */
const ARC_NODES = [
  { left: "22%", top: "28%" },
  { left: "6%", top: "42%" },
  { right: "26%", top: "34%" },
  { right: "4%", top: "24%" },
  { right: "24%", top: "68%" },
];

/* Platform logos strip */
const PLATFORMS = [
  { name: "Microsoft Fabric", Svg: FabricSvg },
  { name: "Databricks", Svg: DatabricksSvg },
  { name: "Microsoft Azure", Svg: AzureSvg },
  { name: "Power BI", Svg: PowerBISvg },
  { name: "GenAI & OpenAI", Svg: GenAISvg },
  { name: "Governance & Purview", Svg: GovernanceSvg },
];

export default function ResourcesHero({
  eyebrow,
  heading = RESOURCES_CONFIG.hero.heading,
  headingHighlight = RESOURCES_CONFIG.hero.headingHighlight,
  subtext = RESOURCES_CONFIG.hero.subtext,
  ctaPrimaryText = "Browse Resources",
  ctaPrimaryLink = "#resources",
  ctaSecondaryText = "Talk to an Architect",
  ctaSecondaryLink = "/contact",
}: ResourcesHeroProps) {
  return (
    <div>
      {/* ─── HERO SECTION ──────────────────────────────────────── */}
      <section
        className="relative flex justify-center overflow-hidden"
        style={{ background: "#ffffff", minHeight: "620px" }}
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

        {/* Outer 1200px container containing SVG arcs & badges */}
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
          {ARC_NODES.map((node, idx) => (
            <div
              key={idx}
              className="pointer-events-none absolute hidden h-4 w-4 rounded-full border-2 border-neutral-300/60 bg-white shadow-sm lg:block z-10"
              style={{
                left: node.left,
                right: node.right,
                top: node.top,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}

          {/* 5 Main SVG Circular Badges */}
          {ARC_BADGES.map((b, i) => (
            <motion.div
              key={b.key}
              className="pointer-events-none absolute hidden lg:flex z-20"
              style={{
                top: b.top,
                left: b.left,
                right: b.right,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, i % 2 === 0 ? -6 : 6, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: b.delay },
                scale: { duration: 0.5, delay: b.delay },
                y: {
                  duration: 3.5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: b.delay + 0.3,
                },
              }}
            >
              <div
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110"
                style={{
                  border: `1.5px solid ${b.border}`,
                  boxShadow: `0 10px 24px -2px ${b.shadow}, 0 2px 8px rgba(0,0,0,0.06)`,
                }}
              >
                <b.Svg className="h-7 w-7" />
                <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-0.5 text-[10px] font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {b.name}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Centered Hero Content */}
          <div className="relative z-10 flex flex-col items-center py-20 text-center lg:py-28">
            {/* Optional Eyebrow Pill */}
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                style={{
                  background: "rgba(246,93,1,0.08)",
                  border: "1.5px solid rgba(246,93,1,0.2)",
                }}
              >
                <div
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--color-brand)" }}
                />
                <span
                  className="text-[11px] font-extrabold tracking-[0.2em] uppercase"
                  style={{ color: "var(--color-brand)" }}
                >
                  {eyebrow}
                </span>
              </motion.div>
            )}

            {/* H1 Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mb-5 max-w-[720px] text-[3rem] leading-[1.04] font-extrabold tracking-tight sm:text-[3.8rem] lg:text-[4.8rem]"
              style={{ color: "#1e212b" }}
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
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mb-9 max-w-[520px] text-[16px] leading-relaxed text-neutral-500 sm:text-[17px]"
            >
              {subtext}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <a
                href={ctaPrimaryLink}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-bold text-white shadow-[0_4px_20px_rgba(246,93,1,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(246,93,1,0.4)]"
                style={{ background: "var(--color-brand)" }}
              >
                <LucideIcon name="download" className="h-4 w-4" />
                {ctaPrimaryText}
              </a>
              <Link
                to={ctaSecondaryLink}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-bold transition-all hover:-translate-y-0.5"
                style={{
                  background: "#ffffff",
                  color: "#1e212b",
                  border: "1.5px solid #e8e5dd",
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

      {/* ─── PLATFORM TRUST STRIP ──────────────────────────────── */}
      <div
        className="flex justify-center overflow-hidden border-b"
        style={{
          background: "#faf9f7",
          borderColor: "var(--color-stroke-default)",
        }}
      >
        <div className="lp-container lp-px flex flex-col items-center gap-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <p className="shrink-0 text-[11px] font-bold tracking-[0.14em] uppercase text-neutral-400">
            Covering platforms used by
            <br className="hidden sm:block" /> enterprise teams globally
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:justify-end">
            {PLATFORMS.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 text-[13px] font-bold tracking-tight text-neutral-600 opacity-70 transition-opacity hover:opacity-100"
              >
                <p.Svg className="h-4 w-4" />
                <span>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
