import { motion } from "framer-motion";
import { ABOUT_CONFIG } from "@/config/about.config";

interface HeroProps {
  eyebrow?: string;
  headingLine1?: string;
  headingLine2?: string;
  headingHighlight?: string;
  subtext?: string;
}

export default function Hero({
  eyebrow = ABOUT_CONFIG.hero.eyebrow,
  headingLine1 = ABOUT_CONFIG.hero.headingLine1,
  headingLine2 = ABOUT_CONFIG.hero.headingLine2,
  headingHighlight = ABOUT_CONFIG.hero.headingHighlight,
  subtext = ABOUT_CONFIG.hero.subtext,
}: HeroProps) {
  return (
    <section
      className="relative flex justify-center overflow-hidden"
      style={{ background: "var(--color-bg-page)" }}
    >
      {/* Decorative geometry */}

      {/* Dot-grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-stroke-default) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Orange glow top-left */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(246,93,1,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Left accent bar */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-full w-1.5"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-brand) 0%, rgba(246,93,1,0.15) 55%, transparent 100%)",
        }}
      />

      <div className="lp-container lp-px relative z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">

          {/* Left: Main heading */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mb-6 inline-flex items-center gap-2"
            >
              <div
                className="h-px w-8"
                style={{ background: "var(--color-brand)" }}
              />
              <span
                className="text-[11px] font-extrabold tracking-[0.25em] uppercase"
                style={{ color: "var(--color-brand)" }}
              >
                {eyebrow}
              </span>
            </motion.div>

            {/* Heading — multi-line with orange highlight */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.07, ease: "easeOut" }}
              className="mb-6 text-[2.8rem] leading-[1.04] font-extrabold tracking-tight sm:text-[3.4rem] lg:text-[4.2rem]"
              style={{ color: "var(--color-text-primary)" }}
            >
              {headingLine1}
              <br />
              {headingLine2}{" "}
              <span
                className="relative inline-block"
                style={{ color: "var(--color-brand)" }}
              >
                {headingHighlight}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.52, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full"
                  style={{ background: "var(--color-brand)" }}
                />
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.17, ease: "easeOut" }}
              className="max-w-[560px] text-[16px] leading-relaxed sm:text-[17px]"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {subtext}
            </motion.p>
          </div>

          {/* Right: Quick credential strip*/}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
            className="hidden lg:flex lg:flex-col lg:gap-0"
            style={{
              borderLeft: "2px solid var(--color-stroke-default)",
            }}
          >
            {[
              { value: "15+", label: "Years" },
              { value: "5K+", label: "Trained" },
              { value: "100%", label: "Independent" },
            ].map(({ value, label }, i) => (
              <div
                key={label}
                className="flex flex-col gap-0 px-8 py-5"
                style={{
                  borderBottom:
                    i < 2 ? "1px solid var(--color-stroke-default)" : "none",
                }}
              >
                <span
                  className="text-display font-extrabold leading-none"
                  style={{ color: "var(--color-brand)" }}
                >
                  {value}
                </span>
                <span
                  className="text-[11px] font-semibold tracking-wide uppercase"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
          className="mt-10 flex gap-6 border-t pt-6 lg:hidden"
          style={{ borderColor: "var(--color-stroke-default)" }}
        >
          {[
            { value: "15+", label: "Yrs experience" },
            { value: "5K+", label: "Leaders trained" },
            { value: "100%", label: "Independent" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span
                className="text-[1.6rem] font-extrabold leading-none"
                style={{ color: "var(--color-brand)" }}
              >
                {value}
              </span>
              <span
                className="text-[11px] font-semibold"
                style={{ color: "var(--color-text-muted)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "var(--color-stroke-default)" }}
      />
    </section>
  );
}
