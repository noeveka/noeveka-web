import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent, useTransform } from "framer-motion";
import { IsometricMatrixVisual } from "./service-visuals";
import { SERVICES_CONFIG } from "@/config/services.config";

interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

interface ImpactPrinciplesProps {
  heading?: string;
  body?: string;
  principles?: readonly PrincipleItem[];
}

const styles = {
  section: "relative w-full overflow-hidden bg-[#faf9f7] pt-20 pb-28 lg:pt-28 lg:pb-36 border-t border-neutral-200/60 selection:bg-[#f65d01]/20",
  container: "lp-container lp-px relative z-10 mx-auto",
  grid: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",
  
  // Left Column
  leftCol: "lg:col-span-6 flex flex-col justify-between h-full",
  heading: "text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#1e212b] leading-[1.14] mb-5",
  bodyText: "text-sm sm:text-base text-neutral-600 leading-relaxed max-w-lg mb-10 sm:mb-12 font-normal",
  visualWrapper: "relative w-full flex items-center justify-center lg:justify-start pt-2",
  
  // Right Column
  rightCol: "lg:col-span-6 relative pt-2 lg:pt-4",
  timelineContainer: "relative flex flex-col gap-12 sm:gap-16",
  
  // Vertical progress track
  trackLineWrapper: "absolute top-3 bottom-8 left-[38px] sm:left-[44px] w-[2px] bg-neutral-200/80 -translate-x-1/2 overflow-hidden rounded-full",
  activeLineFill: "absolute top-0 left-0 w-full bg-[#f65d01] origin-top",
  
  // Principle row item
  principleRow: "relative flex items-start gap-6 sm:gap-8 group select-none",
  numberWrapper: "w-9 sm:w-11 shrink-0 text-left pt-0.5",
  numberText: "text-sm sm:text-base font-mono font-bold tracking-wider transition-colors duration-300",
  contentWrapper: "flex-1 pl-4 sm:pl-6",
  itemTitle: "text-lg sm:text-xl font-bold text-[#1e212b] tracking-tight leading-snug mb-2 transition-colors duration-200 group-hover:text-[#f65d01]",
  itemDesc: "text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-lg",
};

export default function ImpactPrinciples({
  heading = SERVICES_CONFIG.impactPrinciplesSection.heading,
  body = SERVICES_CONFIG.impactPrinciplesSection.body,
  principles = SERVICES_CONFIG.impactPrinciplesSection.principles,
}: ImpactPrinciplesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(0);
  const lastActiveRef = useRef(0);

  // Track scroll through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 35%"],
  });

  // Smooth scroll progression
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate line height scale from 0 to 1
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Update active step as line fills downward
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const clamped = Math.min(Math.max(latest, 0), 1);
    const n = principles.length;
    const current = Math.min(Math.floor(clamped * n), n - 1);
    if (current !== lastActiveRef.current) {
      lastActiveRef.current = current;
      setActiveItem(current);
    }
  });

  return (
    <section ref={sectionRef} className={styles.section} id="architecture-impact">
      {/* ── Soft Ambient Background Glow ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 20% 40%, rgba(246,93,1,0.035) 0%, transparent 70%)",
        }}
      />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* ── LEFT COLUMN: Text + 3D Isometric Matrix Visual ── */}
          <div className={styles.leftCol}>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={styles.heading}
              >
                {heading}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className={styles.bodyText}
              >
                {body}
              </motion.p>
            </div>

            {/* Isometric Architecture Matrix with Glowing Orange Sphere */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={styles.visualWrapper}
            >
              <IsometricMatrixVisual />
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Numbers 01, 02, 03 + Scroll-Animated Vertical Orange Line ── */}
          <div className={styles.rightCol}>
            <div className={styles.timelineContainer}>
              {/* Vertical Track Line */}
              <div className={styles.trackLineWrapper}>
                {/* Scroll-filling Orange Bar */}
                <motion.div
                  className={styles.activeLineFill}
                  style={{ height: lineHeight }}
                />
              </div>

              {/* Items List */}
              {principles.map((item, idx) => {
                const isActive = idx <= activeItem;
                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 + idx * 0.1 }}
                    className={styles.principleRow}
                  >
                    {/* Number on left (01, 02, 03) */}
                    <div className={styles.numberWrapper}>
                      <span
                        className={`${styles.numberText} ${
                          isActive ? "text-[#1e212b]" : "text-neutral-400"
                        }`}
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* Content on right (Title & Description) */}
                    <div className={styles.contentWrapper}>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <p className={styles.itemDesc}>{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
