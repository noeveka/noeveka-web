import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { FAQ_CONFIG } from "@/config/landing/faq.config";
import { fu } from "@/lib/motion";

interface FaqItem {
  question: string;
  answer: string;
}

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
  const [open, setOpen] = useState<number | null>(null);
  const displayFaqs: FaqItem[] = faqs?.length ? faqs : [...FAQ_CONFIG.faqs];

  return (
    <section className="flex justify-center bg-[#fafafa]">
      <div className="lp-container lp-px pb-16">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <motion.div
            {...fu()}
            className="inline-flex items-center gap-2 mb-3.5"
          >
            <span
              className="text-xs font-bold"
              style={{ color: "var(--color-brand)" }}
            >
              ✳
            </span>
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "var(--color-brand)" }}
            >
              {eyebrow}
            </span>
          </motion.div>

          <motion.h2
            {...fu(0.07)}
            className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#0f172a] mb-4"
          >
            {heading}
          </motion.h2>

          <motion.p
            {...fu(0.12)}
            className="text-[15px] sm:text-[16px] text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            {subtext}
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mx-auto flex max-w-[840px] flex-col gap-3.5 sm:gap-4">
          {displayFaqs.map((faq, i) => {
            const isOpen = open === i;
            const questionText = /^\d+[.\-\s]/.test(faq.question)
              ? faq.question
              : `${i + 1}. ${faq.question}`;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl bg-white transition-all duration-300"
                style={{
                  border: isOpen
                    ? "1px solid rgba(246, 93, 1, 0.32)"
                    : "1px solid rgba(226, 232, 240, 0.8)",
                  boxShadow: isOpen
                    ? "0 4px 20px rgba(15, 23, 42, 0.06)"
                    : "0 2px 10px rgba(15, 23, 42, 0.02)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent px-6 sm:px-7 py-5 sm:py-5.5 text-left focus:outline-none"
                >
                  <span
                    className={`text-[14.5px] sm:text-[15.5px] leading-snug font-bold transition-colors duration-200 ${
                      isOpen ? "text-[#0f172a]" : "text-slate-800"
                    }`}
                  >
                    {questionText}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                      isOpen
                        ? "bg-[#fff5ee] border-[rgba(246,93,1,0.3)] text-[#f15a24]"
                        : "bg-[#f8fafc] border-slate-200/70 text-slate-400 group-hover:border-slate-300 group-hover:text-slate-600"
                    }`}
                  >
                    <LucideIcon
                      name="plus"
                      className="h-4 w-4 transition-colors"
                      style={isOpen ? { color: "var(--color-brand)" } : undefined}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: {
                            duration: 0.32,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          },
                          opacity: { duration: 0.22, delay: 0.08 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: {
                            duration: 0.25,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1">
                        <p className="text-[14px] leading-relaxed text-slate-500">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
