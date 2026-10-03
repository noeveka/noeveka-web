import { motion } from "framer-motion";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import { fu, fs } from "@/lib/motion";
import type { ServiceDetailDeliverables } from "@/types/service-detail.types";

interface ServiceDeliverablesProps {
  deliverables: ServiceDetailDeliverables;
}

export default function ServiceDeliverables({ deliverables }: ServiceDeliverablesProps) {
  if (!deliverables.items || deliverables.items.length === 0) {
    return null;
  }

  return (
    <section className="service-deliverables-section selection:bg-[#F65D01]/15">
      <div className="lp-container lp-px mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <motion.div {...fu(0.04)} className="service-section-eyebrow mb-3">
              <span className="service-section-eyebrow-bar" />
              <span className="service-section-eyebrow-text">
                {deliverables.eyebrow || "Typical Deliverables"}
              </span>
            </motion.div>

            <motion.h2
              {...fu(0.08)}
              className="service-section-heading mb-4"
            >
              {deliverables.heading}
            </motion.h2>

            {deliverables.subtext && (
              <motion.p
                {...fu(0.12)}
                className="service-section-subtext"
              >
                {deliverables.subtext}
              </motion.p>
            )}
          </div>

          {/* Right Column: 2-column checklist of deliverables */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {deliverables.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  {...fs(0.08 + idx * 0.03)}
                  className="service-deliverable-item"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "var(--color-brand-tint)" }}
                  >
                    <LucideIcon
                      name={lucideIconRegistry.Check}
                      className="w-3.5 h-3.5"
                      style={{ color: "var(--color-brand)" }}
                    />
                  </div>
                  <span
                    className="text-[13.5px] font-medium leading-snug"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
