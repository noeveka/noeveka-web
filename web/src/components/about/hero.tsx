import { motion } from "framer-motion";

import { ABOUT_CONFIG } from "@/config/about.config";
import { fu } from "@/lib/motion";

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
      style={{ background: "var(--color-text-primary)", minHeight: "56vh" }}
    >
      {/* Orange ambient top-left */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-[400px] w-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(246,93,1,0.18) 0%, transparent 65%)",
        }}
      />
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="lp-container lp-px relative z-10 mx-auto flex max-w-[760px] flex-col gap-6 py-20 text-center lg:py-28">
        <motion.div
          {...fu()}
          className="inline-flex items-center justify-center gap-2 self-center rounded-full px-4 py-1.5"
          style={{
            background: "rgba(246,93,1,0.14)",
            border: "1px solid rgba(246,93,1,0.28)",
          }}
        >
          <span
            className="text-[10px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "var(--color-brand)" }}
          >
            ✳ {eyebrow}
          </span>
        </motion.div>

        <motion.h1
          {...fu(0.08)}
          className="text-[2.6rem] leading-[1.06] font-extrabold tracking-tight sm:text-[3.4rem] lg:text-[4rem]"
          style={{ color: "#FFFFFF" }}
        >
          {headingLine1} {headingLine2}{" "}
          <span style={{ color: "var(--color-brand)" }}>
            {headingHighlight}
          </span>
        </motion.h1>

        <motion.p
          {...fu(0.14)}
          className="mx-auto max-w-[580px] text-[16px] leading-relaxed sm:text-[17px]"
          style={{ color: "rgba(255,255,255,0.62)" }}
        >
          {subtext}
        </motion.p>

        {/* Bottom divider bar */}
        <motion.div
          {...fu(0.2)}
          className="flex items-center justify-center gap-4 pt-4"
        >
          <div
            className="h-px w-12"
            style={{ background: "var(--color-brand)" }}
          />
          <span
            className="text-[10px] font-semibold tracking-[0.24em] uppercase"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Noeveka · Est. 2023
          </span>
          <div
            className="h-px w-12"
            style={{ background: "var(--color-brand)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
