import { motion } from "framer-motion";
import { LucideIcon } from "../lucide-icons";

import { fu } from "@/lib/motion";

interface AboutCtaProps {
  eyebrow?: string;
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
  headingPlain = "Ready to get",
  headingHighlight = "architect-quality thinking",
  headingTail = "on your data platform?",
  body = "Book a free 30-minute strategy call with Ajay. No sales pitch — just an honest view of your architecture, cost, and roadmap.",
  primaryCtaText = "Book a Free Strategy Call",
  primaryCtaLink = "/#contact",
  secondaryCtaText = "Explore Our Services",
  secondaryCtaLink = "/",
}: AboutCtaProps) {
  return (
    <section
      id="contact"
      className="flex justify-center"
      style={{
        background: "var(--color-bg-subtle)",
        borderTop: "1px solid var(--color-stroke-default)",
      }}
    >
      <div className="lp-container lp-px py-16 lg:py-20">
        <div
          className="relative flex flex-col items-center justify-between gap-10 overflow-hidden rounded-3xl px-8 py-14 sm:py-16 lg:flex-row"
          style={{
            background: "var(--color-bg-surface)",
            // border: "1px solid var(--color-stroke-default)",
            boxShadow: "0 4px 32px rgba(15,17,23,0.06)",
          }}
        >
          {/* Ambient subtle glow */}
          <div
            className="pointer-events-none absolute top-0 left-0 h-48 w-48"
            style={{
              background:
                "radial-gradient(circle at 0% 0%, rgba(246,93,1,0.08) 0%, transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 bottom-0 h-64 w-64"
            style={{
              background:
                "radial-gradient(circle at 100% 100%, rgba(246,93,1,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="relative max-w-xl text-left">
            <motion.h2
              {...fu(0.07)}
              className="mb-4 text-3xl leading-snug font-extrabold tracking-tight sm:text-[2.2rem]"
              style={{ color: "var(--color-text-primary)" }}
            >
              {headingPlain}{" "}
              <span style={{ color: "var(--color-brand)" }}>
                {headingHighlight}
              </span>{" "}
              {headingTail}
            </motion.h2>
            <motion.p
              {...fu(0.13)}
              className="text-[15px] leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {body}
            </motion.p>
          </div>

          <motion.div
            {...fu(0.19)}
            className="relative flex shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch"
          >
            {primaryCtaLink ? (
              <a
                href={primaryCtaLink}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-none px-8 py-4 text-[14px] font-semibold whitespace-nowrap shadow-[0_4px_20px_rgba(246,93,1,0.28)] transition-all"
                style={{ background: "var(--color-brand)", color: "#ffffff" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-brand-hover)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px rgba(246,93,1,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-brand)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(246,93,1,0.28)";
                }}
              >
                {primaryCtaText} <LucideIcon name="arrow-right" className="h-4 w-4" />
              </a>
            ) : (
              <button
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-none px-8 py-4 text-[14px] font-semibold whitespace-nowrap shadow-[0_4px_20px_rgba(246,93,1,0.28)] transition-all"
                style={{ background: "var(--color-brand)", color: "#ffffff" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-brand-hover)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px rgba(246,93,1,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-brand)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(246,93,1,0.28)";
                }}
              >
                  {primaryCtaText} <LucideIcon name="arrow-right" className="h-4 w-4" />
              </button>
            )}
            {secondaryCtaLink ? (
              <a
                href={secondaryCtaLink}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-8 py-4 text-[14px] font-semibold whitespace-nowrap transition-all"
                style={{
                  background: "transparent",
                  color: "var(--color-text-primary)",
                  border: "1.5px solid var(--color-stroke-default)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-brand)";
                  e.currentTarget.style.color = "var(--color-brand)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--color-stroke-default)";
                  e.currentTarget.style.color = "var(--color-text-primary)";
                }}
              >
                {secondaryCtaText}
              </a>
            ) : (
              <button
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-8 py-4 text-[14px] font-semibold whitespace-nowrap transition-all"
                style={{
                  background: "transparent",
                  color: "var(--color-text-primary)",
                  border: "1.5px solid var(--color-stroke-default)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-brand)";
                  e.currentTarget.style.color = "var(--color-brand)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--color-stroke-default)";
                  e.currentTarget.style.color = "var(--color-text-primary)";
                }}
              >
                {secondaryCtaText}
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
