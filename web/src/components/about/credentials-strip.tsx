import { motion } from "framer-motion";
import { Link } from "react-router";
import { LucideIcon } from "@/components/lucide-icons";
import { ABOUT_CONFIG } from "@/config/about.config";
import { RESOURCES_CONFIG } from "@/config/resources.config";
import { fu, fsl, fsr } from "@/lib/motion";

import {
  PowerBISvg,
  FabricSvg,
  DatabricksSvg,
  AzureSvg,
  GenAISvg,
  GovernanceSvg,
} from "@/components/svgs/tech-svgs";

/* Map resource tech keys → SVG component + accent colour */
const TECH_META: Record<string, { Svg: ({ className }: { className?: string }) => React.ReactNode; color: string; bg: string }> = {
  powerbi: { Svg: PowerBISvg, color: "#f2c811", bg: "rgba(242,200,17,0.10)" },
  fabric: { Svg: FabricSvg, color: "#0078d4", bg: "rgba(0,120,212,0.10)" },
  databricks: { Svg: DatabricksSvg, color: "#ff3621", bg: "rgba(255,54,33,0.10)" },
  azure: { Svg: AzureSvg, color: "#0078d4", bg: "rgba(0,120,212,0.10)" },
  genai: { Svg: GenAISvg, color: "#10a37f", bg: "rgba(16,163,127,0.10)" },
  governance: { Svg: GovernanceSvg, color: "#6b48e0", bg: "rgba(107,72,224,0.10)" },
  strategy: { Svg: GovernanceSvg, color: "#6b48e0", bg: "rgba(107,72,224,0.10)" },
};

const CATEGORY_ICON: Record<string, string> = {
  Checklist: "check-square",
  Playbook: "book-open",
  Template: "layout-template",
  Guide: "compass",
  Whitepaper: "file-text",
};

/* Take first 4 fallback resources for this teaser */
const PREVIEW_RESOURCES = RESOURCES_CONFIG.fallbackResources.slice(0, 4);

interface CredentialsTeaserProps {
  heading?: string;
  headingHighlight?: string;
  subtext?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function CredentialsStrip({
  heading = ABOUT_CONFIG.resourcesTeaser.heading,
  headingHighlight = ABOUT_CONFIG.resourcesTeaser.headingHighlight,
  subtext = ABOUT_CONFIG.resourcesTeaser.subtext,
  ctaText = ABOUT_CONFIG.resourcesTeaser.ctaText,
  ctaLink = ABOUT_CONFIG.resourcesTeaser.ctaLink,
}: CredentialsTeaserProps) {
  return (
    <section
      className="flex justify-center border-b"
      style={{
        background: "#faf9f7",
        borderColor: "var(--color-stroke-default)",
      }}
    >
      <div className="lp-container lp-px py-16 lg:py-24">

        {/* ── Section header ── */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.h2
            {...fu(0.07)}
            className="mb-4 max-w-[520px] text-[1.9rem] leading-snug font-extrabold tracking-tight sm:text-[2.3rem]"
            style={{ color: "var(--color-text-primary)" }}
          >
            {heading}{" "}
            <span style={{ color: "var(--color-brand)" }}>{headingHighlight}</span>
          </motion.h2>
          <motion.p
            {...fu(0.13)}
            className="max-w-[480px] text-[15px] leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {subtext}
          </motion.p>

          {/* Decorative orange bar */}
          <motion.div {...fu(0.17)} className="mt-6 flex gap-1.5">
            <div className="h-1.5 w-10 rounded-full" style={{ background: "var(--color-brand)" }} />
            <div className="h-1.5 w-4 rounded-full" style={{ background: "rgba(246,93,1,0.3)" }} />
            <div className="h-1.5 w-2 rounded-full" style={{ background: "rgba(246,93,1,0.15)" }} />
          </motion.div>
        </div>

        {/* ── Zigzag resource items ── */}
        <div className="relative">

          {/* Vertical connector line (hidden on mobile) */}
          <div
            className="pointer-events-none absolute top-8 bottom-8 left-1/2 hidden w-px -translate-x-1/2 lg:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.08) 10%, rgba(0,0,0,0.08) 90%, transparent 100%)",
              backgroundSize: "1px 8px",
              backgroundRepeat: "repeat-y",
            }}
          />

          <div className="flex flex-col gap-10 lg:gap-0">
            {PREVIEW_RESOURCES.map((resource, i) => {
              const isEven = i % 2 === 0;
              const meta = TECH_META[(resource as typeof resource & { tech?: string }).tech ?? ""] ?? TECH_META.strategy;
              const categoryIcon = CATEGORY_ICON[resource.category ?? "Guide"] ?? "file-text";
              const animProps = isEven ? fsl(0.05 + i * 0.06) : fsr(0.05 + i * 0.06);

              return (
                <div
                  key={resource._id}
                  className={`relative flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-0 ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  {/* ── Content side ── */}
                  <motion.div
                    {...animProps}
                    className="w-full lg:w-[calc(50%-48px)]"
                  >
                    <div
                      className="group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
                      style={{
                        background: "#ffffff",
                        border: "1px solid var(--color-stroke-default)",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                      }}
                    >
                      {/* Big ghost number */}
                      <span
                        className="pointer-events-none absolute -top-2 select-none font-black leading-none"
                        style={{
                          fontSize: "7rem",
                          color: "rgba(0,0,0,0.035)",
                          right: isEven ? "1rem" : "auto",
                          left: isEven ? "auto" : "1rem",
                          lineHeight: 1,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Category pill */}
                      <div className="mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                        style={{
                          background: "rgba(246,93,1,0.08)",
                          border: "1px solid rgba(246,93,1,0.18)",
                        }}
                      >
                        <LucideIcon
                          name={categoryIcon}
                          className="h-3 w-3"
                          style={{ color: "var(--color-brand)" }}
                        />
                        <span
                          className="text-[10px] font-bold tracking-wide uppercase"
                          style={{ color: "var(--color-brand)" }}
                        >
                          {resource.category}
                        </span>
                        {resource.pageCount && (
                          <span className="text-[10px] text-neutral-400">
                            · {resource.pageCount} pages
                          </span>
                        )}
                      </div>

                      <h3
                        className="mb-2.5 text-[17px] font-extrabold leading-snug"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {resource.title}
                      </h3>
                      <p
                        className="mb-5 text-[13.5px] leading-relaxed"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {resource.description}
                      </p>

                      <Link
                        to={ABOUT_CONFIG.resourcesTeaser.cardLinkHref}
                        className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide transition-all hover:gap-2.5"
                        style={{ color: "var(--color-brand)" }}
                      >
                        {ABOUT_CONFIG.resourcesTeaser.cardLinkText}
                        <LucideIcon name="arrow-right" className="h-3.5 w-3.5" />
                      </Link>

                      {/* Bottom accent line */}
                      <div
                        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 rounded-b-2xl transition-transform duration-300 group-hover:scale-x-100"
                        style={{ background: "var(--color-brand)" }}
                      />
                    </div>
                  </motion.div>

                  {/* ── Centre connector dot ── */}
                  <div className="hidden lg:flex lg:w-24 lg:shrink-0 lg:flex-col lg:items-center lg:justify-center">
                    {/* Dashed connector line segment */}
                    <div
                      className="h-px w-full"
                      style={{
                        background: "none",
                        borderTop: "1.5px dashed rgba(0,0,0,0.12)",
                      }}
                    />
                    {/* Centre dot */}
                    <div
                      className="absolute flex h-8 w-8 items-center justify-center rounded-full shadow-sm"
                      style={{
                        background: "#ffffff",
                        border: "2px solid rgba(0,0,0,0.10)",
                      }}
                    >
                      <div
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: "var(--color-brand)" }}
                      />
                    </div>
                  </div>

                  {/* ── Icon side ── */}
                  <motion.div
                    {...(isEven ? fsr(0.1 + i * 0.06) : fsl(0.1 + i * 0.06))}
                    className="flex w-full items-center justify-center lg:w-[calc(50%-48px)]"
                  >
                    <div
                      className="relative flex h-36 w-36 items-center justify-center rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.10)]"
                      style={{
                        background: meta.bg,
                        border: `2px solid ${meta.color}30`,
                      }}
                    >
                      {/* Outer ring */}
                      <div
                        className="absolute inset-[-10px] rounded-full"
                        style={{
                          border: `1.5px dashed ${meta.color}25`,
                        }}
                      />
                      {/* Inner ring */}
                      <div
                        className="absolute inset-3 rounded-full"
                        style={{
                          background: `${meta.color}10`,
                          border: `1px solid ${meta.color}20`,
                        }}
                      />
                      {/* SVG icon */}
                      <meta.Svg className="relative z-10 h-14 w-14" />
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

        {/* ── CTA button ── */}
        <motion.div {...fu(0.1)} className="mt-16 flex justify-center">
          <Link
            to={ctaLink}
            className="group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-[14px] font-bold text-white shadow-[0_4px_20px_rgba(246,93,1,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(246,93,1,0.4)]"
            style={{ background: "var(--color-brand)" }}
          >
            <LucideIcon name="library" className="h-4 w-4" />
            {ctaText}
            <LucideIcon
              name="arrow-right"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
