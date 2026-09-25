import { motion } from "framer-motion";

import {
  type IconName,
  LucideIcon,
  lucideIconRegistry,
} from "@/components/lucide-icons";
import { SERVICES_CONFIG } from "@/config/services.config";

interface IndustryItem {
  label: string;
  icon: string;
}

interface IndustryDomainsProps {
  quote?: {
    quote?: string;
    author?: string;
    role?: string;
  };
  industries?: readonly IndustryItem[];
}

const styles = {
  section:
    "relative w-full overflow-hidden bg-[#faf9f7] pt-14 pb-20 lg:pt-18 lg:pb-24 border-t border-neutral-200/60 selection:bg-[#f65d01]/20",
  container: "lp-container lp-px relative z-10 mx-auto",

  // Quote card
  quoteCard:
    "relative overflow-hidden rounded-[26px] bg-white p-7 sm:p-10 border border-neutral-200/90 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.05)] mb-14 lg:mb-18",
  quoteGlow:
    "pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-[#f65d01]/10 to-transparent blur-2xl",
  quoteContent:
    "relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
  quoteLeft: "flex items-start gap-4 sm:gap-5 max-w-3xl",
  quoteIconBox:
    "flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff0e6] text-[#f65d01]",
  quoteMark: "text-2xl font-serif font-black leading-none",
  quoteText:
    "text-base sm:text-lg lg:text-[19px] font-semibold text-[#1e212b] leading-relaxed tracking-tight italic",
  authorBox:
    "shrink-0 pl-15 md:pl-0 border-t md:border-t-0 md:border-l border-neutral-200/80 pt-3 md:pt-0 md:pl-6",
  authorName: "text-sm sm:text-base font-extrabold text-[#1e212b]",
  authorRole:
    "text-xs text-[#f65d01] font-semibold uppercase tracking-wider mt-0.5",

  // Industries bar
  industriesHeader: "text-center mb-8",
  eyebrow: "text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2",
  industriesGrid:
    "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4",
  industryCard:
    "group flex flex-col items-center justify-center gap-2.5 rounded-2xl bg-white p-4 sm:p-5 border border-neutral-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(246,93,1,0.12)] hover:border-[#f65d01]/30 transition-all duration-300 hover:-translate-y-0.5 text-center select-none",
  iconCircle:
    "flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100/90 text-[#1e212b] transition-colors duration-300 group-hover:bg-[#fff0e6] group-hover:text-[#f65d01]",
  industryLabel:
    "text-xs sm:text-[13px] font-bold text-[#1e212b] transition-colors duration-300 group-hover:text-[#f65d01]",
};

export default function IndustryDomains({
  quote = SERVICES_CONFIG.founderQuote,
  industries = SERVICES_CONFIG.industries,
}: IndustryDomainsProps) {
  return (
    <section className={styles.section} id="trusted-industries">
      <div className={styles.container}>
        {/* ── Founder Architecture Quote Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.quoteCard}
        >
          <div className={styles.quoteGlow} />

          <div className={styles.quoteContent}>
            <div className={styles.quoteLeft}>
              <div className={styles.quoteIconBox}>
                <span className={styles.quoteMark}>“</span>
              </div>
              <p className={styles.quoteText}>{quote.quote}</p>
            </div>

            <div className={styles.authorBox}>
              <p className={styles.authorName}>{quote.author}</p>
              <p className={styles.authorRole}>{quote.role}</p>
            </div>
          </div>
        </motion.div>

        {/* ── Trusted Across Industries ── */}
        <div>
          <div className={styles.industriesHeader}>
            <p className={styles.eyebrow}>Trusted Across Industries</p>
          </div>

          <div className={styles.industriesGrid}>
            {industries.map((ind, i) => {
              const iconName =
                (ind.icon as IconName) ?? lucideIconRegistry.Shield;
              return (
                <motion.div
                  key={ind.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={styles.industryCard}
                >
                  <div className={styles.iconCircle}>
                    <LucideIcon name={iconName} className="h-5 w-5" />
                  </div>
                  <span className={styles.industryLabel}>{ind.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
