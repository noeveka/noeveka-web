import { motion } from "framer-motion";
import { ABOUT_CONFIG } from "@/config/about.config";
import { fadeScale } from "@/lib/motion";

export interface StatItem {
  value: string;
  label: string;
  sub: string;
}

export interface StatsBarProps {
  items?: StatItem[];
}

export default function StatsBar({ items }: StatsBarProps) {
  const displayStats: StatItem[] = items?.length ? items : [...ABOUT_CONFIG.stats];

  return (
    <section
      className="flex justify-center"
      style={{ background: "var(--color-brand)" }}
    >
      <div className="lp-container lp-px py-0">
        <div className="grid grid-cols-2 divide-x divide-white/20 sm:grid-cols-4">
          {displayStats.map((statItem, index) => (
            <motion.div
              key={statItem.label}
              {...fadeScale(index * 0.07)}
              className="flex flex-col items-center justify-center gap-0.5 px-4 py-7"
            >
              <p className="metric-value text-white! sm:text-[2.4rem]">
                {statItem.value}
              </p>
              <p className="metric-label text-white/90!">{statItem.label}</p>
              <p className="metric-sub text-center text-white/60!">{statItem.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
