import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { fu, fs } from "@/lib/motion";
import type { ServiceDetailChallenge } from "@/types/service-detail.types";

interface ServiceChallengeProps {
  challenge: ServiceDetailChallenge;
}

export default function ServiceChallenge({ challenge }: ServiceChallengeProps) {
  return (
    <section className="relative bg-[#FAFAFA] border-b border-neutral-200/70 py-16 sm:py-20 lg:py-24 selection:bg-[#F65D01]/15">
      <div className="lp-container lp-px mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-6 xl:col-span-7">
            <motion.div {...fu(0.04)} className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#F65D01] inline-block" />
              <span className="text-[11.5px] font-bold tracking-[0.2em] uppercase text-[#F65D01]">
                Problem Context
              </span>
            </motion.div>

            <motion.h2
              {...fu(0.08)}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#161922] mb-6 leading-[1.2]"
            >
              {challenge.heading}
            </motion.h2>

            <div className="space-y-4">
              {challenge.paragraphs.map((p, idx) => (
                <motion.p
                  key={idx}
                  {...fu(0.12 + idx * 0.04)}
                  className="text-[15px] sm:text-[16px] leading-relaxed text-[#555D6E] font-normal"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right Column: Common Signals We See */}
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.div
              {...fs(0.12)}
              className="rounded-2xl bg-white border border-neutral-200/80 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-neutral-100">
                <LucideIcon name="activity" className="w-4 h-4 text-[#F65D01]" />
                <h3 className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#161922]">
                  {challenge.signalsHeading}
                </h3>
              </div>

              <ul className="space-y-3.5">
                {challenge.signals.map((signal, idx) => (
                  <motion.li
                    key={idx}
                    {...fu(0.15 + idx * 0.04)}
                    className="flex items-start gap-3 text-[13.5px] sm:text-[14px] text-[#475569] leading-snug"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#FFF0E6] text-[#F65D01] text-[11px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{signal}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
