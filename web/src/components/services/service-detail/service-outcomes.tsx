import { motion } from "framer-motion";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import { fu, fs } from "@/lib/motion";
import type { ServiceDetailOutcomes } from "@/types/service-detail.types";

interface ServiceOutcomesProps {
  outcomes: ServiceDetailOutcomes;
}

export default function ServiceOutcomes({ outcomes }: ServiceOutcomesProps) {
  const count = outcomes.items.length;

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 selection:bg-[#F65D01]/15" style={{ backgroundColor: "var(--color-bg-surface)" }}>
      <div className="lp-container lp-px mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div {...fu(0.04)} className="service-section-eyebrow mb-3">
            <span className="service-section-eyebrow-bar" />
            <span className="service-section-eyebrow-text">
              {outcomes.eyebrow || "Outcomes"}
            </span>
          </motion.div>
          <motion.h2
            {...fu(0.08)}
            className="service-section-heading mb-4"
          >
            {outcomes.heading}
          </motion.h2>
          {outcomes.subtext && (
            <motion.p
              {...fu(0.12)}
              className="service-section-subtext"
            >
              {outcomes.subtext}
            </motion.p>
          )}
        </div>

        {/* Outcome Cards in responsive grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
            count >= 7
              ? "lg:grid-cols-4"
              : count === 5
                ? "lg:grid-cols-5"
                : count === 6
                  ? "lg:grid-cols-3 xl:grid-cols-6"
                  : "lg:grid-cols-4"
          } gap-5`}
        >
          {outcomes.items.map((outcome, idx) => (
            <motion.div
              key={idx}
              {...fs(0.08 + idx * 0.04)}
              className="service-outcome-card group"
            >
              {/* Icon */}
              <div className="service-outcome-icon-wrap">
                <LucideIcon
                  name={outcome.icon || lucideIconRegistry.CheckCircle2}
                  fallback="star"
                  className="w-5 h-5"
                />
              </div>

              {/* Title */}
              <h3
                className="text-[15.5px] font-bold mb-2 leading-snug"
                style={{ color: "var(--color-text-primary)" }}
              >
                {outcome.title}
              </h3>

              {/* Description (if provided) */}
              {outcome.description && (
                <p
                  className="text-[13px] leading-relaxed font-normal"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {outcome.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
