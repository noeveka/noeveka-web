import { motion } from "framer-motion";
import { fu, fs } from "@/lib/motion";
import type { ServiceDetailHowWeEngage } from "@/types/service-detail.types";

interface ServiceHowWeEngageProps {
  howWeEngage: ServiceDetailHowWeEngage;
}

export default function ServiceHowWeEngage({ howWeEngage }: ServiceHowWeEngageProps) {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 selection:bg-[#F65D01]/15">
      <div className="lp-container lp-px mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div {...fu(0.04)} className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#F65D01] inline-block" />
            <span className="text-[11.5px] font-bold tracking-[0.2em] uppercase text-[#F65D01]">
              {howWeEngage.eyebrow || "How We Engage"}
            </span>
          </motion.div>
          <motion.h2
            {...fu(0.08)}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#161922] mb-4 leading-[1.2]"
          >
            {howWeEngage.heading}
          </motion.h2>
          {howWeEngage.subtext && (
            <motion.p
              {...fu(0.12)}
              className="text-[15px] sm:text-[16px] leading-relaxed text-[#555D6E] font-normal"
            >
              {howWeEngage.subtext}
            </motion.p>
          )}
        </div>

        {/* 5-Step Process Timeline / Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {/* Subtle horizontal connecting bar on desktop */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-[2px] bg-neutral-100 z-0" />

          {howWeEngage.steps.map((step, idx) => {
            const isFirst = idx === 0;

            return (
              <motion.div
                key={idx}
                {...fs(0.08 + idx * 0.05)}
                className="relative z-10 flex flex-col items-start rounded-2xl bg-white border border-neutral-100 p-6 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-[#F65D01]/20 hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)]"
              >
                {/* Step badge */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-[13px] mb-5 shadow-xs transition-colors ${
                    isFirst
                      ? "bg-[#F65D01] text-white ring-4 ring-[#FFF0E6]"
                      : "bg-[#F4F2ED] text-[#161922] group-hover:bg-[#FFF0E6] group-hover:text-[#F65D01]"
                  }`}
                >
                  {step.number}
                </div>

                <h3 className="text-[16px] font-bold text-[#161922] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-[13px] text-[#64748B] leading-relaxed font-normal">
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
