import { motion } from "framer-motion";
import { fadeScale } from "@/lib/motion";
import { METRICS_CONFIG } from "@/config/landing/metrics.config";

export interface MetricItem {
  value: string;
  label: string;
  sub: string;
}

export interface MetricsBarProps {
  metrics?: MetricItem[];
}

export default function MetricsBar({ metrics }: MetricsBarProps) {
  const displayMetrics: MetricItem[] = metrics?.length
    ? metrics
    : [...METRICS_CONFIG.metrics];

  return (
    <section className="lp-section lp-section-surface lp-section-border-y">
      <div className="lp-container lp-px py-14 lg:py-16">
        <div className="grid grid-cols-1 divide-y divide-stroke-default sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {displayMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              {...fadeScale(0.04 + index * 0.1)}
              className="flex flex-col items-center px-4 py-8 text-center first:pl-0 last:pr-0 sm:px-8 sm:py-2"
            >
              <p className="metric-value">{metric.value}</p>
              <p className="metric-label">{metric.label}</p>
              <p className="metric-sub max-w-[280px]">{metric.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

