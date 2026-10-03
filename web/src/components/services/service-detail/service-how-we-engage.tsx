import { motion } from "framer-motion";
import { fu, fs } from "@/lib/motion";
import type { ServiceDetailHowWeEngage } from "@/types/service-detail.types";

interface ServiceHowWeEngageProps {
  howWeEngage: ServiceDetailHowWeEngage;
}

export default function ServiceHowWeEngage({ howWeEngage }: ServiceHowWeEngageProps) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 selection:bg-[#F65D01]/15" style={{ backgroundColor: "var(--color-bg-surface)" }}>
      <div className="lp-container lp-px mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div {...fu(0.04)} className="service-section-eyebrow mb-3">
            <span className="service-section-eyebrow-bar" />
            <span className="service-section-eyebrow-text">
              {howWeEngage.eyebrow || "How We Engage"}
            </span>
          </motion.div>
          <motion.h2
            {...fu(0.08)}
            className="service-section-heading mb-4"
          >
            {howWeEngage.heading}
          </motion.h2>
          {howWeEngage.subtext && (
            <motion.p
              {...fu(0.12)}
              className="service-section-subtext"
            >
              {howWeEngage.subtext}
            </motion.p>
          )}
        </div>

        {/* 5-Step Process Timeline / Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {/* Subtle horizontal connecting bar on desktop */}
          <div
            className="hidden lg:block absolute top-7 left-8 right-8 h-[2px] z-0"
            style={{ backgroundColor: "var(--color-stroke-default)" }}
          />

          {howWeEngage.steps.map((step, idx) => {
            const isFirst = idx === 0;

            return (
              <motion.div
                key={idx}
                {...fs(0.08 + idx * 0.05)}
                className="service-timeline-step"
              >
                {/* Step badge */}
                <div
                  className={`service-timeline-badge ${
                    isFirst ? "service-timeline-badge-active" : ""
                  }`}
                >
                  {step.number}
                </div>

                <h3
                  className="text-[16px] font-bold mb-2 leading-snug"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-[13px] leading-relaxed font-normal"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
