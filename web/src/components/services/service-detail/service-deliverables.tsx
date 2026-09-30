import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
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
    <section className="relative bg-[#FAFAFA] border-y border-neutral-200/70 py-16 sm:py-20 lg:py-24 selection:bg-[#F65D01]/15">
      <div className="lp-container lp-px mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <motion.div {...fu(0.04)} className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#F65D01] inline-block" />
              <span className="text-[11.5px] font-bold tracking-[0.2em] uppercase text-[#F65D01]">
                {deliverables.eyebrow || "Typical Deliverables"}
              </span>
            </motion.div>

            <motion.h2
              {...fu(0.08)}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#161922] mb-4 leading-[1.2]"
            >
              {deliverables.heading}
            </motion.h2>

            {deliverables.subtext && (
              <motion.p
                {...fu(0.12)}
                className="text-[15px] sm:text-[16px] leading-relaxed text-[#555D6E] font-normal"
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
                  className="flex items-start gap-3 rounded-xl bg-white border border-neutral-200/80 p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:border-[#F65D01]/30"
                >
                  <div className="w-5 h-5 rounded-full bg-[#FFF0E6] flex items-center justify-center shrink-0 mt-0.5">
                    <LucideIcon name="check" className="w-3.5 h-3.5 text-[#F65D01]" />
                  </div>
                  <span className="text-[13.5px] font-medium text-[#1E212B] leading-snug">
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
