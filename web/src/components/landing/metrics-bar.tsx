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
    <section className="flex justify-center border-y border-slate-100 bg-white">
      <div className="lp-container lp-px py-14 lg:py-16">
        <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:divide-slate-200">
          {display.map((m, i) => (
            <motion.div
              key={m.label}
              {...fs(0.04 + i * 0.1)}
              className="flex flex-col items-center text-center px-4 sm:px-8 py-8 sm:py-2 first:pl-0 last:pr-0"
            >
              <p className="text-[3.25rem] lg:text-[3.75rem] font-black leading-none tracking-tight text-[#0f172a] mb-3">
                {m.value}
              </p>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#475569] mb-1.5">
                {m.label}
              </p>
              <p className="text-[13px] text-[#94a3b8] max-w-[280px] leading-relaxed">
                {m.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
