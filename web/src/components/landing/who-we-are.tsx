import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { fu } from "@/lib/motion";

const SKILLS = [
    "Architecture", "Microsoft Fabric", "Databricks",
    "FinOps", "AI Strategy", "Governance",
];

export default function WhoWeAre() {
    return (
        <section
            id="who-we-are"
            className="flex justify-center border-t"
            style={{ background: "var(--color-bg-surface)", borderColor: "var(--color-stroke-default)" }}
        >
            <div className="lp-container lp-px py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT — Single Founder Image with Stat Overlay */}
                    <motion.div
                        {...fu()}
                        className="relative"
                    >
                        <div className="relative w-full aspect-4/3 sm:aspect-14/10 lg:h-[430px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-black/5 bg-gray-900">
                            <img
                                src="https://res.cloudinary.com/dd5elqfus/image/upload/v1788162069/Screenshot_2026-08-31_at_1.10.57_PM_mgjzrs.png"
                                alt="Ajay Kumar — Founder, Noeveka"
                                className="absolute inset-0 w-full h-full object-cover object-[58%_25%]"
                            />
                            {/* Subtle gradient overlay for text contrast */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 40%)",
                                }}
                            />
                        </div>

                        {/* Stat badge floating bottom-right */}
                        <div
                            className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 rounded-2xl px-5 py-4 text-center shadow-[0_10px_30px_rgba(246,93,1,0.32)] border border-white/20 z-10"
                            style={{ background: "var(--color-brand)" }}
                        >
                            <p className="text-3xl sm:text-[32px] font-extrabold text-white leading-none mb-1">
                                15+
                            </p>
                            <p className="text-[11px] sm:text-[12px] font-semibold text-white/95 leading-tight">
                                Years Enterprise<br />Experience
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT — Copy */}
                    <div>
                        <motion.p
                            {...fu()}
                            className="text-[10px] font-bold tracking-[0.22em] uppercase mb-3 flex items-center gap-2"
                            style={{ color: "var(--color-brand)" }}
                        >
                            <span>✳</span> Who We Are
                        </motion.p>

                        <motion.h2
                            {...fu(0.07)}
                            className="text-2xl sm:text-[1.9rem] font-extrabold tracking-tight leading-snug mb-5"
                            style={{ color: "var(--color-text-primary)" }}
                        >
                            Comprehensive solution for<br />enterprise data excellence
                        </motion.h2>

                        <motion.p
                            {...fu(0.12)}
                            className="text-[14.5px] leading-relaxed mb-8"
                            style={{ color: "var(--color-text-secondary)" }}
                        >
                            Enterprises invest millions in tools but struggle with poor architecture,
                            fragmented data, and lack of governance. Noeveka bridges this gap —
                            delivering architect-led, authority-driven education, advisory, and
                            enterprise-grade playbooks.
                        </motion.p>

                        {/* CTA + Founder credit row */}
                        <motion.div
                            {...fu(0.17)}
                            className="flex flex-wrap items-center gap-5 mb-8"
                        >
                            <button
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13.5px] font-semibold transition-all cursor-pointer border-none shadow-[0_4px_18px_rgba(246,93,1,0.22)]"
                                style={{ background: "var(--color-brand)", color: "#ffffff" }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "var(--color-brand-hover)";
                                    e.currentTarget.style.transform = "translateY(-1px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "var(--color-brand)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                More About Us <ArrowRight className="w-4 h-4" />
                            </button>

                            {/* Founder credit */}
                            <div className="flex flex-col gap-0.5">
                                <p className="text-[13px] font-bold" style={{ color: "var(--color-text-primary)" }}>
                                    Ajay Kumar
                                </p>
                                <p className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>
                                    Founder &amp; Chief Architect — Noeveka
                                </p>
                            </div>
                        </motion.div>

                        {/* Rating + Skills cards */}
                        <motion.div
                            {...fu(0.22)}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            {/* Rating card */}
                            <div
                                className="flex-1 p-4 rounded-xl"
                                style={{ background: "var(--color-bg-subtle)", border: "1px solid var(--color-stroke-default)" }}
                            >
                                <div className="flex items-center gap-1 mb-1.5">
                                    {[1, 2, 3, 4, 5].map((n) => (
                                        <Star
                                            key={n}
                                            className="w-3.5 h-3.5 fill-amber-400"
                                            style={{ color: "#FBBF24" }}
                                        />
                                    ))}
                                </div>
                                <p className="text-[22px] font-extrabold" style={{ color: "var(--color-text-primary)" }}>
                                    4.9<span className="text-sm font-semibold" style={{ color: "var(--color-text-muted)" }}>/5.0</span>
                                </p>
                                <p className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>Avg. client rating</p>
                            </div>

                            {/* Skills card */}
                            <div
                                className="flex-1 p-4 rounded-xl"
                                style={{ background: "var(--color-bg-subtle)", border: "1px solid var(--color-stroke-default)" }}
                            >
                                <p className="text-[11px] font-bold mb-2.5" style={{ color: "var(--color-text-primary)" }}>
                                    Core Expertise
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {SKILLS.map((sk) => (
                                        <span
                                            key={sk}
                                            className="text-[10.5px] font-medium px-2.5 py-1 rounded-full"
                                            style={{
                                                background: "var(--color-bg-surface)",
                                                color: "var(--color-text-secondary)",
                                                border: "1px solid var(--color-stroke-default)",
                                            }}
                                        >
                                            {sk}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
