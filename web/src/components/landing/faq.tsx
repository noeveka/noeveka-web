import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { LucideIcon } from "@/components/lucide-icons";
import { FAQ_CONFIG } from "@/config/landing/faq.config";
import { fsl, fu } from "@/lib/motion";

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
  const [open, setOpen] = useState<number | null>(0);
  const displayFaqs: FaqItem[] = faqs?.length ? faqs : [...FAQ_CONFIG.faqs];

  return (
    <section
      className="flex justify-center border-t"
      style={{
        background: "var(--color-bg-surface)",
        borderColor: "var(--color-stroke-default)",
      }}
    >
      <div className="lp-container lp-px py-16 lg:py-24">
        <div className="mb-12 text-center">
          <motion.p
            {...fu()}
            className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "var(--color-brand)" }}
          >
            <span>✳</span> {eyebrow}
          </motion.p>
          <motion.h2
            {...fu(0.07)}
            className="mb-4 text-2xl leading-snug font-extrabold tracking-tight sm:text-display"
            style={{ color: "var(--color-text-primary)" }}
          >
            {heading}
          </motion.h2>
          <motion.p
            {...fu(0.12)}
            className="mx-auto max-w-[520px] text-[14.5px] leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            {subtext}
          </motion.p>
        </div>

        <motion.div
          {...fsl(0.12)}
          className="mx-auto flex max-w-[760px] flex-col gap-3"
        >
          {displayFaqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl transition-all duration-200"
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
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent px-6 py-5 text-left"
                >
                  <span
                    className="text-[14.5px] leading-snug font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {i + 1}. {faq.question}
                  </span>
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-200"
                    style={{
                      background: isOpen
                        ? "var(--color-brand)"
                        : "var(--color-bg-subtle)",
                      border: `1px solid ${isOpen ? "var(--color-brand)" : "var(--color-stroke-default)"}`,
                    }}
                  >
                    {isOpen ? (
                      <LucideIcon
                        name="minus"
                        className="h-3.5 w-3.5"
                        style={{ color: "#fff" }}
                      />
                    ) : (
                      <LucideIcon
                        name="plus"
                        className="h-3.5 w-3.5"
                        style={{ color: "var(--color-text-muted)" }}
                      />
                    )}
                  </div>
                </button>
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
                        className="border-t px-6 pt-0 pb-6"
                        style={{ borderColor: "rgba(246,93,1,0.12)" }}
                      >
                        <p
                          className="pt-4 text-[13.5px] leading-relaxed"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {faq.answer}
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
