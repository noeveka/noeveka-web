import { motion } from "framer-motion";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import { fu, fs } from "@/lib/motion";
import type { ServiceDetailArchitectureLens } from "@/types/service-detail.types";

interface ServiceArchitectureLensProps {
  lens: ServiceDetailArchitectureLens;
}

const variantStyles = {
  navy: {
    bg: "bg-[#16171E]",
    text: "text-white",
    desc: "text-neutral-400",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    border: "border-white/10",
  },
  slate: {
    bg: "bg-[#252836]",
    text: "text-white",
    desc: "text-neutral-300",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    border: "border-white/10",
  },
  orange: {
    bg: "bg-[#F65D01]",
    text: "text-white",
    desc: "text-white/90",
    iconBg: "bg-white/20",
    iconColor: "text-white",
    border: "border-transparent",
  },
  white: {
    bg: "bg-white",
    text: "text-[#161922]",
    desc: "text-[#64748B]",
    iconBg: "bg-orange-50",
    iconColor: "text-[#F65D01]",
    border: "border-neutral-200",
  },
};

export default function ServiceArchitectureLens({ lens }: ServiceArchitectureLensProps) {
  return (
    <section className="service-lens-section selection:bg-[#F65D01]/15">
      <div className="lp-container lp-px mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div {...fu(0.04)} className="service-section-eyebrow mb-3">
            <span className="service-section-eyebrow-bar" />
            <span className="service-section-eyebrow-text">
              {lens.eyebrow || "Visual Model"}
            </span>
          </motion.div>
          <motion.h2
            {...fu(0.08)}
            className="service-section-heading mb-4"
          >
            {lens.heading}
          </motion.h2>
          {lens.subtext && (
            <motion.p
              {...fu(0.12)}
              className="service-section-subtext"
            >
              {lens.subtext}
            </motion.p>
          )}
        </div>

        {/* Connected Layer Cards Flow (3 or 4 columns) */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            lens.layers.length === 3 ? "lg:grid-cols-3 max-w-5xl mx-auto" : "lg:grid-cols-4"
          } gap-4 sm:gap-5 relative`}
        >
          {lens.layers.map((layer, idx) => {
            const vs = variantStyles[layer.variant ?? "navy"] || variantStyles.navy;
            const isLast = idx === lens.layers.length - 1;

            return (
              <motion.div
                key={idx}
                {...fs(0.08 + idx * 0.06)}
                className={`service-lens-card ${vs.bg} ${vs.border}`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl ${vs.iconBg} flex items-center justify-center mb-5`}>
                    <LucideIcon name={layer.icon} fallback="layers" className={`w-5 h-5 ${vs.iconColor}`} />
                  </div>
                  <h3 className={`text-[15px] font-bold tracking-[0.08em] uppercase ${vs.text} mb-2`}>
                    {layer.title}
                  </h3>
                  <p className={`text-[13px] leading-relaxed ${vs.desc}`}>
                    {layer.description}
                  </p>
                </div>

                {/* Arrow connector indicator on desktop */}
                {!isLast && (
                  <div
                    className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full items-center justify-center shadow-xs"
                    style={{
                      backgroundColor: "var(--color-bg-surface)",
                      border: "1px solid var(--color-stroke-strong)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    <LucideIcon name={lucideIconRegistry.ChevronRight} className="w-3.5 h-3.5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer Connecting Note / Caption */}
        {lens.footerNote && (
          <motion.div {...fu(0.24)} className="mt-8 text-center">
            <span
              className="inline-block text-[11px] sm:text-[12px] font-medium px-5 py-2.5 rounded-full shadow-2xs"
              style={{
                color: "var(--color-text-secondary)",
                backgroundColor: "var(--color-bg-surface)",
                border: "1px solid var(--color-stroke-default)",
              }}
            >
              {lens.footerNote}
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
