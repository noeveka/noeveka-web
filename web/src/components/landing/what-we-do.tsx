import { ChevronsRight, BarChart3, BookOpen, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { fu, fs } from "@/lib/motion";

const SERVICES = [
    {
        icon: BarChart3,
        title: "Fabric Architectures & Patterns",
        desc: "End-to-end target designs and blueprints for Microsoft Fabric, Databricks Lakehouse & GenAI pipelines.",
        variant: "white",
        featured: false,
    },
    {
        icon: BookOpen,
        title: "Architect-Led Workshops & Bootcamps",
        desc: "Practical, weekend-friendly learning experiences designed by enterprise architects to solve real problems.",
        variant: "orange",
        featured: true,
    },
    {
        icon: Lightbulb,
        title: "Architecture Advisory & FinOps Audit",
        desc: "Independent platform reviews, cost optimization, data contracts, and governance operating models.",
        variant: "black",
        featured: false,
    },
] as const;

type Variant = "white" | "orange" | "black";

const styles: Record<Variant, {
    bg: string; text: string; muted: string;
    iconBg: string; iconColor: string;
    border: string; btnBg: string; btnText: string;
    shadow: string;
}> = {
    white: {
        bg: "var(--color-bg-surface)",
        text: "var(--color-text-primary)",
        muted: "var(--color-text-muted)",
        iconBg: "var(--color-bg-subtle)",
        iconColor: "var(--color-brand)",
        border: "var(--color-stroke-default)",
        btnBg: "var(--color-bg-subtle)",
        btnText: "var(--color-text-primary)",
        shadow: "0 4px 24px rgba(0,0,0,0.06)",
    },
    orange: {
        bg: "var(--color-brand)",
        text: "#FFFFFF",
        muted: "rgba(255,255,255,0.82)",
        iconBg: "rgba(255,255,255,0.18)",
        iconColor: "#FFFFFF",
        border: "transparent",
        btnBg: "rgba(255,255,255,0.18)",
        btnText: "#FFFFFF",
        shadow: "0 12px 40px rgba(246,93,1,0.36)",
    },
    black: {
        bg: "var(--color-text-primary)",
        text: "#FFFFFF",
        muted: "rgba(255,255,255,0.62)",
        iconBg: "rgba(246,93,1,0.14)",
        iconColor: "var(--color-brand)",
        border: "transparent",
        btnBg: "rgba(246,93,1,0.14)",
        btnText: "var(--color-brand)",
        shadow: "0 12px 40px rgba(0,0,0,0.28)",
    },
};

export default function WhatWeDo() {
    return (
        <section
            id="what-we-do"
            className="flex justify-center border-t"
            style={{ background: "var(--color-bg-subtle)", borderColor: "var(--color-stroke-default)" }}
        >
            <div className="lp-container lp-px py-16 lg:py-20">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
                    <div>
                        <motion.p
                            {...fu()}
                            className="text-[10px] font-bold tracking-[0.22em] uppercase mb-2.5 flex items-center gap-2"
                            style={{ color: "var(--color-brand)" }}
                        >
                            <span>✳</span> Our Core Ecosystem
                        </motion.p>
                        <motion.h2
                            {...fu(0.07)}
                            className="text-2xl sm:text-[1.9rem] font-extrabold tracking-tight leading-snug"
                            style={{ color: "var(--color-text-primary)" }}
                        >
                            Essential services for<br />
                            enterprise data excellence
                        </motion.h2>
                    </div>
                    <motion.p
                        {...fu(0.1)}
                        className="text-[14px] leading-relaxed max-w-xs lg:text-right"
                        style={{ color: "var(--color-text-muted)" }}
                    >
                        Architect-led, independent, and built for enterprise data leaders
                        who need clarity before committing to implementation.
                    </motion.p>
                </div>

                {/* Cards — middle card is taller via extra top padding */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-end">
                    {SERVICES.map((s, i) => {
                        const cs = styles[s.variant];
                        const Icon = s.icon;
                        return (
                            <motion.div
                                key={s.title}
                                {...fs(0.06 + i * 0.11)}
                                className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    background: cs.bg,
                                    border: `1px solid ${cs.border}`,
                                    boxShadow: cs.shadow,
                                    paddingTop: s.featured ? "3rem" : "1.75rem",
                                    paddingBottom: "1.75rem",
                                    paddingLeft: "1.75rem",
                                    paddingRight: "1.75rem",
                                }}
                            >
                                {/* Decorative circle accent — bottom right on featured */}
                                {s.featured && (
                                    <div
                                        className="absolute -bottom-10 -right-10 w-[140px] h-[140px] rounded-full pointer-events-none"
                                        style={{ background: "rgba(255,255,255,0.10)" }}
                                    />
                                )}

                                {/* Icon */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                                    style={{ background: cs.iconBg }}
                                >
                                    <Icon className="w-6 h-6" style={{ color: cs.iconColor }} />
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-[17px] font-bold leading-snug mb-3"
                                    style={{ color: cs.text }}
                                >
                                    {s.title}
                                </h3>

                                {/* Desc */}
                                <p
                                    className="text-[13px] leading-relaxed flex-1 mb-8"
                                    style={{ color: cs.muted }}
                                >
                                    {s.desc}
                                </p>

                                {/* Pill CTA */}
                                <button
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer border-none self-start"
                                    style={{
                                        background: cs.btnBg,
                                        color: cs.btnText,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.opacity = "0.80";
                                        e.currentTarget.style.transform = "translateX(2px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.opacity = "1";
                                        e.currentTarget.style.transform = "translateX(0)";
                                    }}
                                >
                                    Explore More <ChevronsRight className="w-3.5 h-3.5" />
                                </button>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
