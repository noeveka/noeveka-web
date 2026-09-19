import { motion } from "framer-motion";

import { ABOUT_CONFIG } from "@/config/about.config";
import { fs } from "@/lib/motion";

export interface StatItem {
  value: string;
  label: string;
  sub: string;
}

interface StatsBarProps {
  items?: StatItem[];
}

export default function StatsBar({ items }: StatsBarProps) {
  const display: StatItem[] = items?.length ? items : [...ABOUT_CONFIG.stats];

  return (
    <section
      className="flex justify-center"
      style={{ background: "var(--color-brand)" }}
    >
      <div className="lp-container lp-px py-0">
        <div className="grid grid-cols-2 divide-x divide-white/20 sm:grid-cols-4">
          {display.map(({ value, label, sub }, i) => (
            <motion.div
              key={label}
              {...fs(i * 0.07)}
              className="flex flex-col items-center justify-center gap-0.5 px-4 py-7"
            >
              <p className="text-display leading-none font-extrabold text-white sm:text-[2.4rem]">
                {value}
              </p>
              <p className="text-[11px] font-bold tracking-[0.14em] text-white/90 uppercase">
                {label}
              </p>
              <p className="text-center text-[10.5px] text-white/60">{sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
