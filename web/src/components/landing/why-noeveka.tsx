import {
    ArrowRight,
    CheckCircle2,
    MessageSquare,
    Users,
    ShieldCheck,
    TrendingUp,
    Layers3,
} from "lucide-react";
import { motion } from "framer-motion";
import { fu, fs, fsl } from "@/lib/motion";

const DIFFERENTIATORS = [
    {
        number: "01",
        icon: ShieldCheck,
        title: "Architect-Led Experience",
        desc: "Real enterprise decisions, made by people who've shipped at scale — not generalists.",
    },
    {
        number: "02",
        icon: TrendingUp,
        title: "Measurable Outcomes",
        desc: "Every engagement is tied to KPIs. We track results, not just deliverables.",
    },
    {
        number: "03",
        icon: Layers3,
        title: "Vendor-Unbiased Advice",
        desc: "No vendor lock-in, no hidden incentives. We recommend what's right for you.",
    },
];

const FEATURES = [
    {
        icon: MessageSquare,
        title: "Dedicated Support",
        desc: "Responsive guidance from senior architects whenever you need it.",
    },
    {
        icon: Users,
        title: "Professional Team",
        desc: "Skilled experts delivering best-in-class enterprise solutions.",
    },
];

const STATS = [
    { value: "98%", label: "Client Retention" },
    { value: "5×", label: "Avg. ROI Delivered" },
];

export default function WhyNoeveka() {
    return (
        <section
            className="flex justify-center border-t"
            style={{ background: "var(--color-bg-subtle)", borderColor: "var(--color-stroke-default)" }}
        >
            <div className="lp-container lp-px py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* ── LEFT — Differentiator cards ── */}
                    <motion.div {...fsl()} className="flex flex-col gap-4">

                        {/* Stat strip */}
                        <div
                            className="flex items-center gap-6 px-5 py-4 rounded-2xl mb-1"
                            style={{
                                background: "var(--color-bg-surface)",
                                border: "1px solid var(--color-stroke-default)",
                                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                            }}
                        >
                            {STATS.map(({ value, label }, i) => (
                                <div key={label} className="flex items-center gap-4 flex-1">
                                    {i > 0 && (
                                        <div
                                            className="w-px self-stretch"
                                            style={{ background: "var(--color-stroke-default)" }}
                                        />
                                    )}
                                    <div>
                                        <p
                                            className="text-2xl font-black tracking-tight leading-none"
                                            style={{ color: "var(--color-brand)" }}
                                        >
                                            {value}
                                        </p>
                                        <p
                                            className="text-[11px] font-medium mt-0.5"
                                            style={{ color: "var(--color-text-muted)" }}
                                        >
                                            {label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Numbered cards */}
                        {DIFFERENTIATORS.map(({ number, icon: Icon, title, desc }, idx) => (
                            <motion.div
                                key={title}
                                {...fs(idx * 0.08)}
                                className="group relative flex items-start gap-4 px-5 py-5 rounded-2xl transition-all duration-300"
                                style={{
                                    background: "var(--color-bg-surface)",
                                    border: "1px solid var(--color-stroke-default)",
                                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                                }}
                                whileHover={{ y: -3, boxShadow: "0 8px 28px rgba(246,93,1,0.10)" }}
                            >
                                {/* Number watermark */}
                                <span
                                    className="absolute top-4 right-5 text-[36px] font-black leading-none select-none pointer-events-none"
                                    style={{ color: "rgba(246,93,1,0.07)" }}
                                >
                                    {number}
                                </span>

                                {/* Icon pill */}
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                                    style={{ background: "var(--color-brand-tint)" }}
                                >
                                    <Icon className="w-5 h-5" style={{ color: "var(--color-brand)" }} />
                                </div>

                                <div className="flex-1 min-w-0 pr-10">
                                    <div className="flex items-center gap-2 mb-1">
                                        <CheckCircle2
                                            className="w-3.5 h-3.5 shrink-0"
                                            style={{ color: "var(--color-brand)" }}
                                        />
                                        <p
                                            className="text-[13.5px] font-bold"
                                            style={{ color: "var(--color-text-primary)" }}
                                        >
                                            {title}
                                        </p>
                                    </div>
                                    <p
                                        className="text-[12.5px] leading-relaxed"
                                        style={{ color: "var(--color-text-muted)" }}
                                    >
                                        {desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* ── RIGHT — Copy + feature cards + CTA ── */}
                    <div>
                        <motion.p
                            {...fu()}
                            className="text-[10px] font-bold tracking-[0.22em] uppercase mb-3 flex items-center gap-2"
                            style={{ color: "var(--color-brand)" }}
                        >
                            <span>✳</span> Why Choose Us
                        </motion.p>

                        <motion.h2
                            {...fu(0.07)}
                            className="text-2xl sm:text-[1.9rem] font-extrabold tracking-tight leading-snug mb-4"
                            style={{ color: "var(--color-text-primary)" }}
                        >
                            What makes Noeveka&apos;s approach different?
                        </motion.h2>

                        <motion.p
                            {...fu(0.12)}
                            className="text-[14.5px] leading-relaxed mb-8"
                            style={{ color: "var(--color-text-secondary)" }}
                        >
                            We combine deep industry expertise with data-driven strategies and
                            tailored solutions to help enterprises overcome challenges, unlock
                            growth opportunities, and succeed in competitive markets.
                        </motion.p>

                        {/* Feature mini-cards */}
                        <motion.div
                            {...fu(0.17)}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                        >
                            {FEATURES.map(({ icon: Icon, title, desc }) => (
                                <div
                                    key={title}
                                    className="p-5 rounded-xl flex flex-col gap-3"
                                    style={{
                                        background: "var(--color-bg-surface)",
                                        border: "1px solid var(--color-stroke-default)",
                                    }}
                                >
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                                        style={{ background: "var(--color-brand-tint)" }}
                                    >
                                        <Icon className="w-5 h-5" style={{ color: "var(--color-brand)" }} />
                                    </div>
                                    <div>
                                        <p
                                            className="text-[13.5px] font-bold mb-1"
                                            style={{ color: "var(--color-text-primary)" }}
                                        >
                                            {title}
                                        </p>
                                        <p
                                            className="text-[12px] leading-relaxed"
                                            style={{ color: "var(--color-text-muted)" }}
                                        >
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div {...fu(0.22)}>
                            <button
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-semibold transition-all cursor-pointer border-none"
                                style={{
                                    background: "var(--color-bg-surface)",
                                    color: "var(--color-text-primary)",
                                    border: "1px solid var(--color-stroke-default)",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "var(--color-brand)";
                                    e.currentTarget.style.color = "var(--color-brand)";
                                    e.currentTarget.style.transform = "translateY(-1px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "var(--color-stroke-default)";
                                    e.currentTarget.style.color = "var(--color-text-primary)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                Explore More <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
