import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { fu, fs } from "@/lib/motion";
import { getServices } from "@/lib/sanity";
import { SERVICES_CONFIG } from "@/config/landing/services.config";

type Variant = "white" | "orange" | "black";

const styles: Record<
  Variant,
  {
    bg: string;
    text: string;
    muted: string;
    iconBg: string;
    iconColor: string;
    border: string;
    btnBg: string;
    btnText: string;
    shadow: string;
    watermarkBg: string;
  }
> = {
  white: {
    bg: "var(--color-bg-surface, #FFFFFF)",
    text: "var(--color-text-primary, #111827)",
    muted: "#6B7280",
    iconBg: "rgba(246, 93, 1, 0.08)",
    iconColor: "var(--color-brand, #F65D01)",
    border: "rgba(0, 0, 0, 0.06)",
    btnBg: "rgba(246, 93, 1, 0.08)",
    btnText: "var(--color-brand, #F65D01)",
    shadow: "0 6px 24px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)",
    watermarkBg: "rgba(246, 93, 1, 0.06)",
  },
  orange: {
    bg: "var(--color-brand, #F65D01)",
    text: "#FFFFFF",
    muted: "rgba(255, 255, 255, 0.88)",
    iconBg: "rgba(255, 255, 255, 0.20)",
    iconColor: "#FFFFFF",
    border: "transparent",
    btnBg: "rgba(255, 255, 255, 0.22)",
    btnText: "#FFFFFF",
    shadow: "0 12px 36px -4px rgba(246, 93, 1, 0.38)",
    watermarkBg: "rgba(0, 0, 0, 0.08)",
  },
  black: {
    bg: "#16171E",
    text: "#FFFFFF",
    muted: "#94A3B8",
    iconBg: "rgba(246, 93, 1, 0.14)",
    iconColor: "var(--color-brand, #F65D01)",
    border: "rgba(255, 255, 255, 0.07)",
    btnBg: "rgba(246, 93, 1, 0.14)",
    btnText: "var(--color-brand, #F65D01)",
    shadow: "0 12px 36px -4px rgba(0, 0, 0, 0.35)",
    watermarkBg: "rgba(255, 255, 255, 0.04)",
  },
};

export interface ServiceItem {
  _id?: string;
  title: string;
  description: string;
  icon: string;
  variant: Variant;
  featured?: boolean;
  ctaText?: string;
  ctaLink?: string;
  order?: number;
}

interface WhatWeDoProps {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  cardCtaText?: string;
  services?: ServiceItem[];
}

export default function WhatWeDo({
  eyebrow = SERVICES_CONFIG.eyebrow,
  heading = SERVICES_CONFIG.heading,
  subtext = SERVICES_CONFIG.subtext,
  cardCtaText = SERVICES_CONFIG.cardCtaText,
  services: propServices,
}: WhatWeDoProps) {
  const [sanityServices, setSanityServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    // Only fetch standalone service documents if no inline services were passed from page
    if (!propServices || propServices.length === 0) {
      getServices()
        .then((data) => {
          if (data && data.length > 0) {
            setSanityServices(data);
          }
        })
        .catch(console.error);
    }
  }, [propServices]);

  // Priority: 1. Inline services prop -> 2. Sanity service documents -> 3. Fallback config
  const displayServices: ServiceItem[] =
    propServices && propServices.length > 0
      ? propServices
      : sanityServices.length > 0
        ? sanityServices
        : [...SERVICES_CONFIG.services];

  return (
    <section
      id="what-we-do"
      className="relative flex justify-center border-t overflow-hidden"
      style={{
        background: "var(--color-bg-subtle, #FAFAFA)",
        borderColor: "var(--color-stroke-default, rgba(0,0,0,0.06))",
      }}
    >
      {/* Subtle background decorative arc at top right */}
      <div
        className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full border border-orange-500/10 -translate-y-1/2 translate-x-1/3 pointer-events-none"
        aria-hidden="true"
      />

      <div className="lp-container lp-px py-16 lg:py-24 relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <motion.p
            {...fu()}
            className="text-[11px] font-bold tracking-[0.22em] uppercase mb-3 flex items-center justify-center gap-1.5"
            style={{ color: "var(--color-brand, #F65D01)" }}
          >
            <span className="text-[13px] leading-none">✳</span> {eyebrow}
          </motion.p>
          <motion.h2
            {...fu(0.06)}
            className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.2] mb-4"
            style={{ color: "var(--color-text-primary, #111827)" }}
          >
            {heading}
          </motion.h2>
          <motion.p
            {...fu(0.1)}
            className="text-[14px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-text-muted, #64748B)" }}
          >
            {subtext}
          </motion.p>
        </div>

        {/* 2x2 Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {displayServices.map((s, i) => {
            const cs = styles[s.variant] ?? styles.white;
            const buttonText = s.ctaText || cardCtaText || "Learn More";
            const targetLink = s.ctaLink || "/services";

            return (
              <motion.div
                key={s._id ?? `service-${i}`}
                {...fs(0.06 + i * 0.08)}
                className="group relative flex flex-col justify-between rounded-[22px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 p-7 sm:p-8"
                style={{
                  background: cs.bg,
                  border: `1px solid ${cs.border}`,
                  boxShadow: cs.shadow,
                  minHeight: "260px",
                }}
              >
                {/* Decorative bottom-right watermark shape */}
                <div
                  className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-105"
                  style={{ background: cs.watermarkBg }}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105"
                    style={{ background: cs.iconBg }}
                  >
                    <LucideIcon
                      name={s.icon}
                      fallback="layers"
                      className="w-6 h-6"
                      style={{ color: cs.iconColor }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[18px] sm:text-[19px] font-bold leading-snug mb-3 tracking-tight"
                    style={{ color: cs.text }}
                  >
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[13.5px] sm:text-[14px] leading-relaxed mb-6"
                    style={{ color: cs.muted }}
                  >
                    {s.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="relative z-10 pt-2">
                  <a
                    href={targetLink}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 self-start no-underline"
                    style={{ background: cs.btnBg, color: cs.btnText }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "0.85";
                      e.currentTarget.style.transform = "translateX(3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {buttonText}{" "}
                    <LucideIcon
                      name="arrow-right"
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                      style={{ color: cs.btnText }}
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
