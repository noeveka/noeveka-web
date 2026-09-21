import { motion } from "framer-motion";

import { LucideIcon } from "@/components/lucide-icons";
import { ABOUT_CONFIG } from "@/config/about.config";
import { urlFor } from "@/lib/sanity";

interface HeroProps {
  headingLine1?: string;
  headingLine2?: string;
  headingHighlight?: string;
  subtext?: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  badgeTags?: string[];
  mobileStats?: Array<{ value: string; label: string }>;
  photo?: { asset?: unknown; alt?: string } | unknown;
  photoAlt?: string;
}

/* Decorative hollow node dots sitting on the arc lines */
const ARC_NODES = [
  { left: "4%", top: "28%" },
  { left: "8%", top: "68%" },
  { right: "5%", top: "20%" },
  { right: "9%", top: "62%" },
];

export default function Hero({
  headingLine1 = ABOUT_CONFIG.hero.headingLine1,
  headingLine2 = ABOUT_CONFIG.hero.headingLine2,
  headingHighlight = ABOUT_CONFIG.hero.headingHighlight,
  subtext = ABOUT_CONFIG.hero.subtext,
  // ctaPrimaryText = ABOUT_CONFIG.hero.ctaPrimaryText,
  // ctaPrimaryLink = ABOUT_CONFIG.hero.ctaPrimaryLink,
  // ctaSecondaryText = ABOUT_CONFIG.hero.ctaSecondaryText,
  // ctaSecondaryLink = ABOUT_CONFIG.hero.ctaSecondaryLink,
  badgeTags,
  mobileStats,
  photo,
  photoAlt = ABOUT_CONFIG.founder.photoAlt,
}: HeroProps) {
  const resolvedBadgeTags = badgeTags?.length ? badgeTags : [...ABOUT_CONFIG.hero.badgeTags];
  const resolvedMobileStats = mobileStats?.length
    ? mobileStats
    : [...ABOUT_CONFIG.hero.mobileStats];
  const founderPhotoSrc = (photo as { asset?: unknown })?.asset
    ? urlFor(photo).width(900).url()
    : ABOUT_CONFIG.founder.photoFallbackUrl;

  return (
    <section
      className="relative flex justify-center overflow-hidden"
      style={{ background: "#ffffff", minHeight: "640px" }}
    >
      {/* Warm radial background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 30%, rgba(246,93,1,0.05) 0%, transparent 100%)",
        }}
      />

      {/* Decorative hollow node dots on the arcs */}
      {ARC_NODES.map((node, idx) => (
        <div
          key={idx}
          className="pointer-events-none absolute hidden h-3.5 w-3.5 rounded-full border-2 border-neutral-300/60 bg-white shadow-sm lg:block"
          style={{
            left: node.left,
            right: node.right,
            top: node.top,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Main content container */}
      <div className="lp-container lp-px relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-[1fr_420px] lg:gap-16 lg:py-24">
          {/* LEFT — Copy */}
          <div>
            {/* H1 Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mb-6 text-[2.6rem] leading-[1.04] font-extrabold tracking-tight sm:text-[3.2rem] lg:text-[3.9rem]"
              style={{ color: "#1e212b" }}
            >
              {headingLine1}
              <br />
              {headingLine2}{" "}
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
              className="mb-9 max-w-[540px] text-[16px] leading-relaxed text-neutral-500 sm:text-[17px]"
            >
              {subtext}
            </motion.p>

            {/* CTAs */}
            {/* <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                to={ctaPrimaryLink}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-bold text-white shadow-[0_4px_20px_rgba(246,93,1,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(246,93,1,0.4)]"
                style={{ background: "var(--color-brand)" }}
              >
                <LucideIcon name="calendar" className="h-4 w-4" />
                {ctaPrimaryText}
              </Link>
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
                <LucideIcon name="arrow-right" className="h-4 w-4" />
              </Link>
            </motion.div> */}
          </div>

          {/* RIGHT — Founder photo card */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="relative hidden lg:block"
          >
            {/* Subtle orange glow behind card */}
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2.5rem]"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(246,93,1,0.08) 0%, transparent 70%)",
              }}
            />

            {/* Photo card */}
            <div
              className="relative w-full overflow-hidden rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.14)]"
              style={{
                aspectRatio: "4/5",
                border: "1px solid rgba(0,0,0,0.08)",
                background: "#f5f4f2",
              }}
            >
              <img
                src={founderPhotoSrc}
                alt={photoAlt}
                className="absolute inset-0 h-full w-full object-cover object-[58%_12%]"
              />

              {/* Gradient overlay at bottom */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,10,10,0.72) 0%, rgba(0,0,0,0.1) 42%, transparent 65%)",
                }}
              />

              {/* Floating name badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute right-5 bottom-5 left-5 rounded-2xl px-5 py-4"
                style={{
                  background: "rgba(10,10,10,0.80)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[17px] leading-tight font-extrabold text-white">
                      {ABOUT_CONFIG.founder.name}
                    </p>
                    <p className="mt-0.5 text-[12px] text-white/60">
                      {ABOUT_CONFIG.founder.title} ·{" "}
                      {ABOUT_CONFIG.founder.company}
                    </p>
                  </div>
                  {/* Verified badge */}
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: "var(--color-brand)",
                      boxShadow: "0 4px 12px rgba(246,93,1,0.4)",
                    }}
                  >
                    <LucideIcon name="check" className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Micro credential row */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {resolvedBadgeTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-2.5 py-1 text-[10px] font-bold text-white/70"
                      style={{
                        background: "rgba(255,255,255,0.10)",
                        border: "1px solid rgba(255,255,255,0.14)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.32 }}
          className="mb-10 flex gap-6 border-t pt-6 lg:hidden"
          style={{ borderColor: "rgba(0,0,0,0.08)" }}
        >
          {resolvedMobileStats.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span
                className="text-[1.6rem] leading-none font-extrabold"
                style={{ color: "var(--color-brand)" }}
              >
                {value}
              </span>
              <span className="text-[11px] font-semibold text-neutral-500">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom border */}
      <div
        className="absolute right-0 bottom-0 left-0 h-px"
        style={{ background: "rgba(0,0,0,0.08)" }}
      />
    </section>
  );
}
