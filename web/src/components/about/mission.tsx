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
    <section className="about-section-dark">
      <div className="lp-container lp-px py-16 lg:py-20">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end">
          <div className="flex-1">
            <motion.p
              {...fu(0.07)}
              className="about-narrative-heading max-w-[640px] sm:text-[1.9rem]"
              style={{ color: "var(--color-text-inverse)" }}
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
              className="about-mission-pillar"
            >
              <span className="about-mission-number">{number}</span>
              <div className="about-mission-bar" />
              <p className="about-mission-title">{title}</p>
              <p className="about-mission-desc">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
