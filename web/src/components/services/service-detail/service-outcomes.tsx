import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { fu, fs } from "@/lib/motion";
import type { ServiceDetailOutcomes } from "@/types/service-detail.types";

interface ServiceOutcomesProps {
  outcomes: ServiceDetailOutcomes;
}

export default function ServiceOutcomes({ outcomes }: ServiceOutcomesProps) {
  const count = outcomes.items.length;

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 selection:bg-[#F65D01]/15">
      <div className="lp-container lp-px mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div {...fu(0.04)} className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#F65D01] inline-block" />
            <span className="text-[11.5px] font-bold tracking-[0.2em] uppercase text-[#F65D01]">
              {outcomes.eyebrow || "Outcomes"}
            </span>
          </motion.div>
          <motion.h2
            {...fu(0.08)}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#161922] mb-4 leading-[1.2]"
          >
            {outcomes.heading}
          </motion.h2>
          {outcomes.subtext && (
            <motion.p
              {...fu(0.12)}
              className="text-[15px] sm:text-[16px] leading-relaxed text-[#555D6E] font-normal"
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
              className="group flex flex-col items-start rounded-2xl bg-white border border-neutral-200/70 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F65D01]/30 hover:shadow-[0_10px_24px_rgba(0,0,0,0.04)]"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#FFF0E6] flex items-center justify-center text-[#F65D01] mb-4 transition-transform duration-300 group-hover:scale-105">
                <LucideIcon
                  name={outcome.icon || "check-circle-2"}
                  fallback="star"
                  className="w-5 h-5 text-[#F65D01]"
                />
              </div>

              {/* Title */}
              <h3 className="text-[15.5px] font-bold text-[#161922] mb-2 leading-snug">
                {outcome.title}
              </h3>

              {/* Description (if provided) */}
              {outcome.description && (
                <p className="text-[13px] text-[#64748B] leading-relaxed font-normal">
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
