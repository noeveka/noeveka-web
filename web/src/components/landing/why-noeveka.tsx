import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { fu, fs, fsl } from "@/lib/motion";
import { WHY_NOEVEKA_CONFIG } from "@/config/landing/why-noeveka.config";

interface Stat {
  value: string;
  label: string;
}
interface Differentiator {
  number: string;
  icon: string;
  title: string;
  desc: string;
}
interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface WhyNoevekaProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  stats?: Stat[];
  differentiators?: Differentiator[];
  features?: Feature[];
  ctaText?: string;
  ctaLink?: string;
}

export default function WhyNoeveka({
  eyebrow = WHY_NOEVEKA_CONFIG.eyebrow,
  heading = WHY_NOEVEKA_CONFIG.heading,
  body = WHY_NOEVEKA_CONFIG.body,
  differentiators = [...WHY_NOEVEKA_CONFIG.differentiators],
  features = [...WHY_NOEVEKA_CONFIG.features],
  ctaText = WHY_NOEVEKA_CONFIG.ctaText,
  ctaLink = WHY_NOEVEKA_CONFIG.ctaLink,
}: WhyNoevekaProps) {
  const displayDifferentiators = differentiators.length
    ? differentiators
    : [...WHY_NOEVEKA_CONFIG.differentiators];

  const displayFeatures = features.length
    ? features
    : [...WHY_NOEVEKA_CONFIG.features];

  return (
    <section className="flex justify-center bg-[#fafafa]">
      <div className="lp-container lp-px py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── LEFT COLUMN — Copy + 2 Feature Cards + CTA ── */}
          <div>
            {/* Eyebrow */}
            <motion.div
              {...fu()}
              className="inline-flex items-center gap-2 mb-3.5"
            >
              <span
                className="text-xs font-bold"
                style={{ color: "var(--color-brand)" }}
              >
                ✳
              </span>
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: "var(--color-brand)" }}
              >
                {eyebrow}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              {...fu(0.07)}
              className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#0f172a] leading-[1.18] mb-5"
            >
              {heading}
            </motion.h2>

            {/* Body */}
            <motion.p
              {...fu(0.12)}
              className="text-[15px] sm:text-[16px] text-slate-500 leading-relaxed mb-8 max-w-xl"
            >
              {body}
            </motion.p>

            {/* 2 Feature Cards side-by-side */}
            <motion.div
              {...fu(0.17)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8"
            >
              {displayFeatures.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="flex flex-col justify-between rounded-2xl bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    border: "1px solid rgba(226, 232, 240, 0.8)",
                    boxShadow: "0 2px 14px rgba(15, 23, 42, 0.03)",
                  }}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl mb-4"
                    style={{ background: "#fff4ed" }}
                  >
                    <LucideIcon
                      name={icon.toLowerCase()}
                      fallback="message-square"
                      className="h-4 w-4"
                      style={{ color: "var(--color-brand)" }}
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-slate-900 mb-1.5">
                      {title}
                    </p>
                    <p className="text-[12.5px] leading-relaxed text-slate-500">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div {...fu(0.22)}>
              {ctaLink ? (
                <a
                  href={ctaLink}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 text-[13.5px] font-semibold text-slate-800 transition-all duration-200"
                  style={{
                    border: "1px solid rgba(203, 213, 225, 0.8)",
                    boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-brand)";
                    e.currentTarget.style.color = "var(--color-brand)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(203, 213, 225, 0.8)";
                    e.currentTarget.style.color = "#1e293b";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {ctaText}{" "}
                  <LucideIcon name="arrow-right" className="h-3.5 w-3.5" />
                </a>
              ) : (
                <button
                  type="button"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 text-[13.5px] font-semibold text-slate-800 transition-all duration-200"
                  style={{
                    border: "1px solid rgba(203, 213, 225, 0.8)",
                    boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-brand)";
                    e.currentTarget.style.color = "var(--color-brand)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(203, 213, 225, 0.8)";
                    e.currentTarget.style.color = "#1e293b";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {ctaText}{" "}
                  <LucideIcon name="arrow-right" className="h-3.5 w-3.5" />
                </button>
              )}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — 3 Differentiator Cards Stacked ── */}
          <motion.div {...fsl()} className="flex flex-col gap-4 sm:gap-5">
            {displayDifferentiators.map(
              ({ number, icon, title, desc }, idx) => (
                <motion.div
                  key={title}
                  {...fs(idx * 0.08)}
                  className="group relative flex items-start gap-4 sm:gap-5 rounded-2xl bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(226, 232, 240, 0.8)",
                    boxShadow: "0 4px 20px rgba(15, 23, 42, 0.03)",
                  }}
                >
                  {/* Left peach icon */}
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl mt-0.5"
                    style={{ background: "#fff4ed" }}
                  >
                    <LucideIcon
                      name={icon.toLowerCase()}
                      fallback="shield-check"
                      className="h-5 w-5"
                      style={{ color: "var(--color-brand)" }}
                    />
                  </div>

                  {/* Middle text content */}
                  <div className="flex-1 min-w-0 pr-2 sm:pr-4">
                    <p className="text-[15px] sm:text-[16px] font-bold text-slate-900 mb-1.5 leading-snug">
                      {title}
                    </p>
                    <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-slate-500">
                      {desc}
                    </p>
                  </div>

                  {/* Right faded number */}
                  <span
                    className="shrink-0 select-none text-[32px] sm:text-[36px] font-black leading-none tracking-tight"
                    style={{ color: "rgba(246, 93, 1, 0.20)" }}
                  >
                    {number}
                  </span>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
