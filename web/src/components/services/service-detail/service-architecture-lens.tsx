import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
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
    iconColor: "#F65D01",
    border: "border-neutral-200",
  },
};

export default function ServiceArchitectureLens({ lens }: ServiceArchitectureLensProps) {
  return (
    <section className="relative bg-[#FAFAFA] border-y border-neutral-200/70 py-16 sm:py-20 lg:py-24 selection:bg-[#F65D01]/15">
      <div className="lp-container lp-px mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div {...fu(0.04)} className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#F65D01] inline-block" />
            <span className="text-[11.5px] font-bold tracking-[0.2em] uppercase text-[#F65D01]">
              {lens.eyebrow || "Visual Model"}
            </span>
          </motion.div>
          <motion.h2
            {...fu(0.08)}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#161922] mb-4 leading-[1.2]"
          >
            {lens.heading}
          </motion.h2>
          {lens.subtext && (
            <motion.p
              {...fu(0.12)}
              className="text-[15px] sm:text-[16px] leading-relaxed text-[#555D6E] font-normal"
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
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 shadow-[0_8px_24px_rgba(0,0,0,0.06)] border ${vs.bg} ${vs.border} transition-transform duration-300 hover:-translate-y-1`}
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
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-neutral-300 items-center justify-center shadow-xs">
                    <LucideIcon name="chevron-right" className="w-3.5 h-3.5 text-[#161922]" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer Connecting Note / Caption */}
        {lens.footerNote && (
          <motion.div {...fu(0.24)} className="mt-8 text-center">
            <span className="inline-block text-[11px] sm:text-[12px] font-medium text-[#475569] px-5 py-2.5 rounded-full bg-white border border-neutral-200/80 shadow-2xs">
              {lens.footerNote}
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
