import { motion } from "framer-motion";

import { ABOUT_CONFIG } from "@/config/about.config";
import { fs, fu } from "@/lib/motion";

export interface Pillar {
  number: string;
  title: string;
  desc: string;
}

interface MissionProps {
  eyebrow?: string;
  statement?: string;
  pillars?: Pillar[];
}

export default function Mission({
  statement = ABOUT_CONFIG.mission.statement,
  pillars = ABOUT_CONFIG.mission.pillars as unknown as Pillar[],
}: MissionProps) {
  return (
    <section
      className="flex justify-center"
      style={{ background: "var(--color-text-primary)" }}
    >
      <div className="lp-container lp-px py-16 lg:py-20">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end">
          <div className="flex-1">
            <motion.p
              {...fu(0.07)}
              className="max-w-[640px] text-h1 leading-snug font-extrabold sm:text-[1.9rem]"
              style={{ color: "#FFFFFF" }}
            >
              {statement}
            </motion.p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {pillars.map(({ number, title, desc }, i) => (
            <motion.div
              key={title}
              {...fs(0.06 + i * 0.1)}
              className="relative flex flex-col gap-4 rounded-2xl p-7"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <span
                className="pointer-events-none absolute top-4 right-5 text-[3.5rem] leading-none font-black select-none"
                style={{ color: "rgba(246,93,1,0.08)" }}
              >
                {number}
              </span>
              <div
                className="h-1 w-10 rounded-full"
                style={{ background: "var(--color-brand)" }}
              />
              <p
                className="text-[17px] font-extrabold"
                style={{ color: "#FFFFFF" }}
              >
                {title}
              </p>
              <p
                className="text-[13.5px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
