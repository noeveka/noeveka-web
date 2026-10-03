import { motion } from "framer-motion";
import { fs } from "@/lib/motion";
import { METRICS_CONFIG } from "@/config/landing/metrics.config";

interface Metric {
  value: string;
  label: string;
  sub: string;
}

interface MetricsBarProps {
  metrics?: Metric[];
}

export default function MetricsBar({ metrics }: MetricsBarProps) {
  const display: Metric[] = metrics?.length
    ? metrics
    : [...METRICS_CONFIG.metrics];

  return (
    <section className="lp-section lp-section-surface lp-section-border-y">
      <div className="lp-container lp-px py-14 lg:py-16">
        <div className="grid grid-cols-1 divide-y divide-stroke-default sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {display.map((m, i) => (
            <motion.div
              key={m.label}
              {...fs(0.04 + i * 0.1)}
              className="flex flex-col items-center px-4 py-8 text-center first:pl-0 last:pr-0 sm:px-8 sm:py-2"
            >
              <p className="metric-value">{m.value}</p>
              <p className="metric-label">{m.label}</p>
              <p className="metric-sub max-w-[280px]">{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
