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
    <section className="lp-section lp-section-subtle">
      <div className="lp-container lp-px py-20 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── LEFT COLUMN - Copy + 2 Feature Cards + CTA ── */}
          <div>
            {/* Eyebrow */}
            <motion.div {...fu()} className="mb-3.5 inline-flex items-center gap-2">
              <span className="lp-eyebrow">✳ {eyebrow}</span>
            </motion.div>

            {/* Heading */}
            <motion.h2 {...fu(0.07)} className="lp-section-heading mb-5">
              {heading}
            </motion.h2>

            {/* Body */}
            <motion.p {...fu(0.12)} className="lp-section-subtext mb-8 max-w-xl text-text-secondary">
              {body}
            </motion.p>

            {/* 2 Feature Cards side-by-side */}
            <motion.div
              {...fu(0.17)}
              className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
            >
              {displayFeatures.map(({ icon, title, desc }) => (
                <div key={title} className="feature-card">
                  <div className="feature-card-icon">
                    <LucideIcon
                      name={icon.toLowerCase()}
                      fallback="message-square"
                      className="h-4 w-4 text-brand"
                    />
                  </div>
                  <div>
                    <p className="feature-card-title">{title}</p>
                    <p className="feature-card-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div {...fu(0.22)}>
              {ctaLink ? (
                <a href={ctaLink} className="btn-outline-pill">
                  {ctaText}{" "}
                  <LucideIcon name="arrow-right" className="h-3.5 w-3.5" />
                </a>
              ) : (
                <button type="button" className="btn-outline-pill">
                  {ctaText}{" "}
                  <LucideIcon name="arrow-right" className="h-3.5 w-3.5" />
                </button>
              )}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN - 3 Differentiator Cards Stacked ── */}
          <motion.div {...fsl()} className="flex flex-col gap-4 sm:gap-5">
            {displayDifferentiators.map(({ number, icon, title, desc }, idx) => (
              <motion.div
                key={title}
                {...fs(idx * 0.08)}
                className="differentiator-card"
              >
                {/* Left icon */}
                <div className="differentiator-card-icon">
                  <LucideIcon
                    name={icon.toLowerCase()}
                    fallback="shield-check"
                    className="h-5 w-5 text-brand"
                  />
                </div>

                {/* Middle text content */}
                <div className="min-w-0 flex-1 pr-2 sm:pr-4">
                  <p className="differentiator-card-title">{title}</p>
                  <p className="differentiator-card-desc">{desc}</p>
                </div>

                {/* Right faded number */}
                <span className="differentiator-card-number">{number}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
