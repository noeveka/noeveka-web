import { motion } from "framer-motion";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import { fu, fs } from "@/lib/motion";
import type { ServiceDetailChallenge } from "@/types/service-detail.types";

interface ServiceChallengeProps {
  challenge: ServiceDetailChallenge;
}

export default function ServiceChallenge({ challenge }: ServiceChallengeProps) {
  const hasSignals = Boolean(challenge.signals && challenge.signals.length > 0);

  return (
    <section className="service-challenge-section selection:bg-[#F65D01]/15">
      <div className="lp-container lp-px mx-auto">
        <div className={`grid grid-cols-1 ${hasSignals ? "lg:grid-cols-12 gap-10 lg:gap-14" : "max-w-4xl"} items-start`}>
          {/* Main Column: Eyebrow, Heading, Paragraphs */}
          <div className={hasSignals ? "lg:col-span-6 xl:col-span-7" : "w-full"}>
            <motion.div {...fu(0.04)} className="service-section-eyebrow mb-3">
              <span className="service-section-eyebrow-bar" />
              <span className="service-section-eyebrow-text">
                {challenge.eyebrow || "The Challenge"}
              </span>
            </motion.div>

            <motion.h2
              {...fu(0.08)}
              className="service-section-heading mb-6"
            >
              {challenge.heading}
            </motion.h2>

            <div className="space-y-4">
              {challenge.paragraphs.map((p, idx) => (
                <motion.p
                  key={idx}
                  {...fu(0.12 + idx * 0.04)}
                  className="service-section-subtext"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Optional Signals Column */}
          {hasSignals && (
            <div className="lg:col-span-6 xl:col-span-5">
              <motion.div
                {...fs(0.12)}
                className="service-signals-card"
              >
                <div className="service-signals-header">
                  <LucideIcon
                    name={lucideIconRegistry.Activity}
                    className="w-4 h-4"
                    style={{ color: "var(--color-brand)" }}
                  />
                  <h3
                    className="text-[12px] font-bold tracking-[0.18em] uppercase"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {challenge.signalsHeading || "Common Signals"}
                  </h3>
                </div>

                <ul className="space-y-3.5">
                  {challenge.signals?.map((signal, idx) => (
                    <motion.li
                      key={idx}
                      {...fu(0.15 + idx * 0.04)}
                      className="flex items-start gap-3 text-[13.5px] sm:text-[14px] leading-snug"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      <span className="service-signals-num-badge">
                        {idx + 1}
                      </span>
                      <span>{signal}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
