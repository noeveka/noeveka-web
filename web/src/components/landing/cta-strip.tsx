import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fu } from "@/lib/motion";

export default function CtaStrip() {
    return (
        <section
            id="contact"
            className="flex justify-center"
            style={{ background: "var(--color-bg-subtle)", borderTop: "1px solid var(--color-stroke-default)" }}
        >
            <div className="lp-container lp-px py-16 lg:py-20">
                <div
                    className="relative rounded-3xl overflow-hidden px-8 py-14 sm:py-16 flex flex-col lg:flex-row items-center justify-between gap-10"
                    style={{
                        background: "var(--color-bg-surface)",
                        border: "1px solid var(--color-stroke-default)",
                        boxShadow: "0 4px 32px rgba(15,17,23,0.06)",
                    }}
                >
                    {/* Decorative orange accent — top left corner */}
                    <div
                        className="absolute top-0 left-0 w-48 h-48 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(circle at 0% 0%, rgba(246,93,1,0.08) 0%, transparent 70%)",
                        }}
                    />
                    {/* Decorative orange accent — bottom right corner */}
                    <div
                        className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(circle at 100% 100%, rgba(246,93,1,0.06) 0%, transparent 70%)",
                        }}
                    />

                    {/* Orange left border accent */}
                    <div
                        className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl"
                        style={{ background: "var(--color-brand)" }}
                    />

                    {/* LEFT — Copy */}
                    <div className="relative text-left max-w-xl">
                        <motion.p
                            {...fu()}
                            className="text-[10.5px] font-bold tracking-[0.22em] uppercase mb-3 flex items-center gap-2"
                            style={{ color: "var(--color-brand)" }}
                        >
                            <span>✳</span> Get Started Today
                        </motion.p>

                        <motion.h2
                            {...fu(0.07)}
                            className="text-3xl sm:text-[2.2rem] font-extrabold tracking-tight leading-snug mb-4"
                            style={{ color: "var(--color-text-primary)" }}
                        >
                            Ready to architect your
                            enterprise&apos;s{" "}
                            <span style={{ color: "var(--color-brand)" }}>data future?</span>
                        </motion.h2>

                        <motion.p
                            {...fu(0.13)}
                            className="text-[15px] leading-relaxed"
                            style={{ color: "var(--color-text-secondary)" }}
                        >
                            Book a free strategy call with Ajay Kumar and get an independent
                            view of your platform fit, cost, and architecture roadmap — at
                            no cost.
                        </motion.p>
                    </div>

                    {/* RIGHT — CTA buttons */}
                    <motion.div
                        {...fu(0.19)}
                        className="relative flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-stretch gap-3 shrink-0"
                    >
                        <button
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[14px] font-semibold transition-all cursor-pointer border-none shadow-[0_4px_20px_rgba(246,93,1,0.28)] whitespace-nowrap"
                            style={{ background: "var(--color-brand)", color: "#ffffff" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "var(--color-brand-hover)";
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow =
                                    "0 8px 28px rgba(246,93,1,0.4)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "var(--color-brand)";
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow =
                                    "0 4px 20px rgba(246,93,1,0.28)";
                            }}
                        >
                            Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
                        </button>

                        <button
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[14px] font-semibold transition-all cursor-pointer whitespace-nowrap"
                            style={{
                                background: "transparent",
                                color: "var(--color-text-primary)",
                                border: "1.5px solid var(--color-stroke-default)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "var(--color-brand)";
                                e.currentTarget.style.color = "var(--color-brand)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "var(--color-stroke-default)";
                                e.currentTarget.style.color = "var(--color-text-primary)";
                            }}
                        >
                            Explore Our Resources
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
