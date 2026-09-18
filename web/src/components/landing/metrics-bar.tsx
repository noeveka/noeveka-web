import { motion } from "framer-motion";
import { fs } from "@/lib/motion";

const METRICS = [
    {
        value: "15+",
        label: "Years Enterprise Experience",
        sub: "Architected for global enterprises",
    },
    {
        value: "5",
        label: "Core Focus Pillars",
        sub: "Strategy · Architecture · FinOps · Governance · Leadership",
    },
    {
        value: "100%",
        label: "Independent Advice",
        sub: "Zero vendor reseller bias",
    },
];

export default function MetricsBar() {
    return (
        <section
            className="flex justify-center border-t"
            style={{ background: "var(--color-bg-surface)", borderColor: "var(--color-stroke-default)" }}
        >
            <div className="lp-container lp-px py-12 lg:py-14">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x"
                    style={{ borderColor: "var(--color-stroke-default)" }}
                >
                    {METRICS.map((m, i) => (
                        <motion.div
                            key={m.label}
                            {...fs(0.04 + i * 0.10)}
                            className="flex flex-col sm:items-start py-8 sm:py-0 sm:px-10 first:pl-0 last:pr-0"
                        >
                            <p
                                className="text-[3rem] lg:text-[3.5rem] font-extrabold leading-none tracking-tight mb-2"
                                style={{ color: "var(--color-text-primary)" }}
                            >
                                {m.value}
                                <span className="text-[2rem]" style={{ color: "var(--color-brand)" }}>
                                    {m.value.endsWith("+") ? "" : "%".includes(m.value) ? "" : ""}
                                </span>
                            </p>
                            <p className="text-[11px] font-bold uppercase tracking-[0.15em] mb-1" style={{ color: "var(--color-text-muted)" }}>
                                {m.label}
                            </p>
                            <p className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>
                                {m.sub}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
