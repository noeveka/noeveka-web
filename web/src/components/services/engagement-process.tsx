import { useRef } from "react";

import { motion, useScroll } from "framer-motion";

import { SERVICES_CONFIG } from "@/config/services.config";

import ProcessBallPath, { type ProcessStep } from "./process-ball-path";

interface EngagementProcessProps {
  heading?: string;
  subtext?: string;
  steps?: readonly ProcessStep[];
}

const styles = {
  section:
    "relative w-full overflow-hidden bg-[#faf9f7] pt-12 pb-24 lg:pt-16 lg:pb-32 border-t border-neutral-200/60 selection:bg-[#f65d01]/20",
  container: "lp-container lp-px relative z-10 mx-auto",
  headerWrapper: "mx-auto max-w-3xl text-center mb-14 lg:mb-20",
  kickerBadge:
    "inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-[#1e212b]/5 text-[#1e212b] border border-neutral-300/60 mb-4",
  kickerDot: "h-1.5 w-1.5 rounded-full bg-[#f65d01]",
  heading:
    "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1e212b] leading-tight mb-4",
  subtext:
    "text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed",
  pathContainer: "mx-auto max-w-5xl",
};

export default function EngagementProcess({
  subtext = SERVICES_CONFIG.engagementSection.subtext,
  steps = SERVICES_CONFIG.engagementSection.steps,
}: EngagementProcessProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  return (
    <section ref={sectionRef} className={styles.section} id="engagement-models">
      {/* ── Soft Ambient Glow ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 30%, rgba(246,93,1,0.04) 0%, transparent 70%)",
        }}
      />

      <div className={styles.container}>
        {/* ── Centered Header ── */}
        <div className={styles.headerWrapper}>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className={styles.subtext}
          >
            {subtext}
          </motion.p>
        </div>

        {/* ── 4 Steps + Interactive Scroll Path ── */}
        <div className={styles.pathContainer}>
          <ProcessBallPath
            steps={steps}
            scrollProgress={scrollYProgress}
          />{" "}
        </div>
      </div>
    </section>
  );
}
