import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fu, fsl } from "@/lib/motion";

const FAQS = [
    {
        q: "Do I need any technical knowledge to engage with Noeveka?",
        a: "Not at all. Our advisory engagements are designed for both technical architects and business decision-makers. We translate complex data and AI architecture concepts into clear, actionable strategies your whole team can understand and act on.",
    },
    {
        q: "Do you offer customised architecture solutions for our stack?",
        a: "Yes — every engagement starts with a thorough discovery of your existing technology landscape, constraints, and goals. We never propose generic blueprints; every recommendation is tailored to your specific platform, team size, and budget.",
    },
    {
        q: "What types of services does Noeveka provide?",
        a: "We offer three core service lines: enterprise data architecture advisory (Fabric, Databricks, Lakehouse), architect-led workshops and bootcamps, and FinOps & governance audits. Each can be delivered as a standalone engagement or as part of a longer-term retainer.",
    },
    {
        q: "What is the typical duration of an advisory engagement?",
        a: "Engagements range from a focused 2-week architecture review sprint to a 3–6 month strategic advisory retainer. Workshop bootcamps are typically 1–2 weekend sessions. We'll recommend the right format after an initial discovery call.",
    },
    {
        q: "Is Noeveka vendor-neutral, or do you recommend specific platforms?",
        a: "We are fully independent and vendor-unbiased. We have deep expertise across Microsoft Fabric, Databricks, Snowflake, dbt, and other leading platforms — and we recommend only what genuinely fits your requirements, not what benefits a partner programme.",
    },
];

export default function Faq() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section
            className="flex justify-center border-t"
            style={{ background: "var(--color-bg-surface)", borderColor: "var(--color-stroke-default)" }}
        >
            <div className="lp-container lp-px py-16 lg:py-24">

                {/* Header — centred */}
                <div className="text-center mb-12">
                    <motion.p
                        {...fu()}
                        className="text-[10px] font-bold tracking-[0.22em] uppercase mb-3 inline-flex items-center gap-2"
                        style={{ color: "var(--color-brand)" }}
                    >
                        <span>✳</span> Questions
                    </motion.p>
                    <motion.h2
                        {...fu(0.07)}
                        className="text-2xl sm:text-[2rem] font-extrabold tracking-tight leading-snug mb-4"
                        style={{ color: "var(--color-text-primary)" }}
                    >
                        Top questions clients ask
                    </motion.h2>
                    <motion.p
                        {...fu(0.12)}
                        className="text-[14.5px] leading-relaxed max-w-[520px] mx-auto"
                        style={{ color: "var(--color-text-muted)" }}
                    >
                        Find clear answers to the most common questions about our
                        architecture advisory, workshops, and engagement process.
                    </motion.p>
                </div>

                {/* Accordion */}
                <motion.div
                    {...fsl(0.12)}
                    className="max-w-[760px] mx-auto flex flex-col gap-3"
                >
                    {FAQS.map((faq, i) => {
                        const isOpen = open === i;
                        return (
                            <div
                                key={i}
                                className="rounded-2xl overflow-hidden transition-all duration-200"
                                style={{
                                    border: isOpen
                                        ? "1.5px solid var(--color-brand)"
                                        : "1px solid var(--color-stroke-default)",
                                    background: "var(--color-bg-surface)",
                                    boxShadow: isOpen
                                        ? "0 4px 24px rgba(246,93,1,0.10)"
                                        : "0 1px 4px rgba(0,0,0,0.04)",
                                }}
                            >
                                {/* Question row */}
                                <button
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer bg-transparent border-none"
                                >
                                    <span
                                        className="text-[14.5px] font-semibold leading-snug"
                                        style={{ color: "var(--color-text-primary)" }}
                                    >
                                        {i + 1}. {faq.q}
                                    </span>
                                    <div
                                        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200"
                                        style={{
                                            background: isOpen ? "var(--color-brand)" : "var(--color-bg-subtle)",
                                            border: `1px solid ${isOpen ? "var(--color-brand)" : "var(--color-stroke-default)"}`,
                                        }}
                                    >
                                        {isOpen ? (
                                            <Minus className="w-3.5 h-3.5" style={{ color: "#fff" }} />
                                        ) : (
                                            <Plus className="w-3.5 h-3.5" style={{ color: "var(--color-text-muted)" }} />
                                        )}
                                    </div>
                                </button>

                                {/* Answer */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="body"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.28, ease: "easeInOut" }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <div
                                                className="px-6 pb-6 pt-0 border-t"
                                                style={{ borderColor: "rgba(246,93,1,0.12)" }}
                                            >
                                                <p
                                                    className="text-[13.5px] leading-relaxed pt-4"
                                                    style={{ color: "var(--color-text-secondary)" }}
                                                >
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}
