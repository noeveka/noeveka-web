import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
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
    <section className="lp-section lp-section-subtle">
      <div className="lp-container lp-px pb-16">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <motion.div {...fu()} className="mb-3.5 inline-flex items-center gap-2">
            <span className="lp-eyebrow">✳ {eyebrow}</span>
          </motion.div>

          <motion.h2 {...fu(0.07)} className="lp-section-heading mb-4">
            {heading}
          </motion.h2>

          <motion.p {...fu(0.12)} className="lp-section-subtext mx-auto max-w-xl">
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
                className={`faq-item${isOpen ? " faq-item-open" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="faq-toggle-btn"
                >
                  <span className="faq-question">{questionText}</span>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`faq-icon-wrap${isOpen ? " faq-icon-wrap-open" : ""}`}
                  >
                    <LucideIcon name={lucideIconRegistry.Plus} className="h-4 w-4 transition-colors" />
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
                          height: { duration: 0.32, ease: [0.04, 0.62, 0.23, 0.98] },
                          opacity: { duration: 0.22, delay: 0.08 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-6 pt-1">
                        <p className="faq-answer">{faq.answer}</p>
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
