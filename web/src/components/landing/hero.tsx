import { motion } from "framer-motion";
import { ArrowRight, Check, Phone, Star } from "lucide-react";

import { fu } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      {/* ── Background image ── */}
      <img
        src="/assets/hero_section_bg.png"
        alt="Noeveka — Enterprise Data & AI Architecture"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "65% center" }}
      />

      {/* ── Dark gradient overlay — heavy left, fades right ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(10,10,10,0.90) 0%, rgba(10,10,10,0.74) 40%, rgba(10,10,10,0.22) 70%, rgba(10,10,10,0.04) 100%)",
        }}
      />

      {/* ── Orange ambient glow — top left ── */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-[520px] w-[520px]"
        style={{
          background:
            "radial-gradient(circle at 10% 10%, rgba(246,93,1,0.20) 0%, transparent 60%)",
        }}
      />

      {/* ── Content ── */}
      <div className="lp-container lp-px relative z-10 mx-auto py-24 lg:py-32">
        <div className="max-w-[620px]">
          {/* Rating / trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2"
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-current"
                  style={{ color: "var(--color-brand)" }}
                />
              ))}
            </div>
            <span
              className="text-[11px] font-semibold"
              style={{ color: "rgba(255,255,255,0.90)" }}
            >
              4.9 &nbsp;·&nbsp; 5K+ Enterprise Leaders Trained
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mb-6 text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem]"
            style={{ color: "#FFFFFF" }}
          >
            Architect-Led{" "}
            <span style={{ color: "var(--color-brand)" }}>Enterprise</span>
            <br />
            Data & <span style={{ color: "var(--color-brand)" }}>AI</span>{" "}
            Solutions
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mb-9 max-w-[490px] text-[15px] leading-relaxed sm:text-[16px]"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Noeveka empowers data leaders with independent, enterprise-grade
            architecture advisory, practical bootcamps, and premium digital
            playbooks — built by architects, for architects.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mb-10 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center"
          >
            {/* Primary */}
            <button
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-none px-7 py-3.5 text-[14px] font-semibold transition-all"
              style={{
                background: "var(--color-brand)",
                color: "#fff",
                boxShadow: "0 4px 24px rgba(246,93,1,0.42)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-brand-hover)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 32px rgba(246,93,1,0.52)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--color-brand)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 24px rgba(246,93,1,0.42)";
              }}
            >
              Book a Strategy Call <ArrowRight className="h-4 w-4" />
            </button>

            {/* Secondary — frosted ghost */}
            <button
              className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[14px] font-semibold transition-all"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(6px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.16)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.40)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Phone className="h-4 w-4" />
              Speak to an Architect
            </button>
          </motion.div>

          {/* Trust bullets */}
          <motion.div
            {...fu(0.35)}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t pt-6"
            style={{ borderColor: "rgba(255,255,255,0.14)" }}
          >
            {[
              "Senior architect-led",
              "Independent & unbiased",
              "Built for enterprise",
            ].map((t) => (
              <span
                key={t}
                className="flex items-center gap-1.5 text-[12.5px] font-medium"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <Check
                  className="h-3.5 w-3.5 shrink-0"
                  style={{ color: "var(--color-brand)" }}
                />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Bottom stat strip — frosted glass, anchored to section bottom ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="absolute right-0 bottom-0 left-0 z-10"
      >
        <div className="lp-container lp-px mx-auto">
          <div
            className="inline-grid grid-cols-3 divide-x overflow-hidden rounded-t-2xl"
            style={{
              background: "rgba(10,10,10,0.55)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderBottom: "none",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          >
            {[
              { val: "15+", label: "Years Experience" },
              { val: "100%", label: "Vendor-Independent" },
              { val: "5K+", label: "Learners Trained" },
            ].map(({ val, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-0.5 px-8 py-4"
                style={{ borderColor: "rgba(255,255,255,0.10)" }}
              >
                <span
                  className="text-[22px] leading-none font-extrabold"
                  style={{ color: "var(--color-brand)" }}
                >
                  {val}
                </span>
                <span
                  className="text-center text-[10.5px] leading-tight font-medium"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
