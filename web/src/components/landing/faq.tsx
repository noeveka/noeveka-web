import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fu, fsl } from "@/lib/motion";
import { FAQ_CONFIG } from "@/config/landing/faq.config";

interface FaqItem { question: string; answer: string }

interface FaqProps {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  faqs?: FaqItem[];
}

export default function Faq({
  eyebrow = FAQ_CONFIG.eyebrow,
  heading = FAQ_CONFIG.heading,
  subtext = FAQ_CONFIG.subtext,
  faqs,
}: FaqProps) {
  const [open, setOpen] = useState<number | null>(0);
  const displayFaqs: FaqItem[] = faqs?.length ? faqs : [...FAQ_CONFIG.faqs];

  return (
    <section className="flex justify-center border-t" style={{ background: "var(--color-bg-surface)", borderColor: "var(--color-stroke-default)" }}>
      <div className="lp-container lp-px py-16 lg:py-24">

        <div className="text-center mb-12">
          <motion.p {...fu()} className="text-[10px] font-bold tracking-[0.22em] uppercase mb-3 inline-flex items-center gap-2" style={{ color: "var(--color-brand)" }}>
            <span>✳</span> {eyebrow}
          </motion.p>
          <motion.h2 {...fu(0.07)} className="text-2xl sm:text-display font-extrabold tracking-tight leading-snug mb-4" style={{ color: "var(--color-text-primary)" }}>
            {heading}
          </motion.h2>
          <motion.p {...fu(0.12)} className="text-[14.5px] leading-relaxed max-w-[520px] mx-auto" style={{ color: "var(--color-text-muted)" }}>
            {subtext}
          </motion.p>
        </div>

        <motion.div {...fsl(0.12)} className="max-w-[760px] mx-auto flex flex-col gap-3">
          {displayFaqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  border: isOpen ? "1.5px solid var(--color-brand)" : "1px solid var(--color-stroke-default)",
                  background: "var(--color-bg-surface)",
                  boxShadow: isOpen ? "0 4px 24px rgba(246,93,1,0.10)" : "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer bg-transparent border-none"
                >
                  <span className="text-[14.5px] font-semibold leading-snug" style={{ color: "var(--color-text-primary)" }}>
                    {i + 1}. {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200" style={{ background: isOpen ? "var(--color-brand)" : "var(--color-bg-subtle)", border: `1px solid ${isOpen ? "var(--color-brand)" : "var(--color-stroke-default)"}` }}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" style={{ color: "#fff" }} /> : <Plus className="w-3.5 h-3.5" style={{ color: "var(--color-text-muted)" }} />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: "easeInOut" }} style={{ overflow: "hidden" }}>
                      <div className="px-6 pb-6 pt-0 border-t" style={{ borderColor: "rgba(246,93,1,0.12)" }}>
                        <p className="text-[13.5px] leading-relaxed pt-4" style={{ color: "var(--color-text-secondary)" }}>{faq.answer}</p>
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
