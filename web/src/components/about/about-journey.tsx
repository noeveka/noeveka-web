import { motion } from "framer-motion";
import { ABOUT_CONFIG } from "@/config/about.config";

export interface JourneyMilestone {
  year: string;
  stage?: string;
  location?: string;
  place?: string;
  title?: string;
  headline?: string;
  description?: string;
  isHighlight?: boolean;
  graphic?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface AboutJourneyProps {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  milestones?: JourneyMilestone[];
  showDescriptions?: boolean;
}

// Location / Year → illustration asset mapping with new PNG artwork
const LOCATION_GRAPHICS: Record<string, string> = {
  Singapore: "/assets/about-page/timeline-singapore.png",
  "Dubai, UAE": "/assets/about-page/timeline-uae.png",
  Dubai: "/assets/about-page/timeline-uae.png",
  Netherlands: "/assets/about-page/timeline-netherlands.png",
  "Global Advisory": "/assets/about-page/timeline-today.png",
  Global: "/assets/about-page/timeline-today.png",
  Today: "/assets/about-page/timeline-today.png",
  "2020": "/assets/about-page/timeline-singapore.png",
  "2022": "/assets/about-page/timeline-uae.png",
  "2024": "/assets/about-page/timeline-netherlands.png",
};

function resolveGraphic(item: JourneyMilestone): string {
  if (item.image) return item.image;
  if (item.graphic && !item.graphic.includes("_graphic")) return item.graphic;
  if (item.place && LOCATION_GRAPHICS[item.place]) return LOCATION_GRAPHICS[item.place];
  if (item.location && LOCATION_GRAPHICS[item.location]) return LOCATION_GRAPHICS[item.location];
  if (item.year && LOCATION_GRAPHICS[item.year]) return LOCATION_GRAPHICS[item.year];
  return item.graphic || "";
}

/* Horizontal position of dots in percent (even: left of center, odd: right of center) */
const DOT_X = [44, 56];
const dotX = (i: number) => DOT_X[i % 2];

/* S-curve connecting the dots */
function buildPath(n: number): string {
  const cy = (i: number) => i * 100 + 50;
  let d = `M${dotX(0)} ${cy(0)}`;
  for (let i = 1; i < n; i += 1) {
    const mid = (cy(i - 1) + cy(i)) / 2;
    d += ` C ${dotX(i - 1)} ${mid}, ${dotX(i)} ${mid}, ${dotX(i)} ${cy(i)}`;
  }
  return d;
}

const styles = {
  section: "relative w-full overflow-hidden bg-[#fffff] py-14 sm:py-18 lg:py-24",
  container: "relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
  headerWrapper: "mb-10 sm:mb-14 lg:mb-16",
  eyebrowWrapper: "mb-3 flex items-center gap-3",
  eyebrowText: "text-[10px] sm:text-[11px] font-black tracking-[0.2em] text-[#f65d01] uppercase",
  eyebrowLine: "h-px w-8 bg-[#f65d01]/40",
  heading: "text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight text-[#1a1a1a] leading-[1.15]",
  subtext: "mt-2.5 max-w-xl text-xs sm:text-sm text-neutral-500 leading-relaxed",
  timelineRoot: "relative mx-auto max-w-[880px] w-full",
  svgPath: "pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible md:block",
  mobileVerticalLine: "pointer-events-none absolute top-3 bottom-3 left-[12px] w-0 border-l-2 border-dashed border-[#f65d01]/70 md:hidden",
  list: "relative m-0 list-none p-0 pl-10 md:pl-0 md:grid md:grid-cols-1",
  item: "relative flex flex-col pb-12 last:pb-0 md:block md:pb-0",
  dot: "absolute z-10 h-3.5 w-3.5 rounded-full bg-[#f65d01] shadow-[0_0_0_6px_rgba(246,93,1,0.18)] top-3 left-[-28px] -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2",
  textContainer: "order-1 text-left md:absolute md:top-1/2 md:-translate-y-1/2",
  textArtLeft: "md:left-[calc(44%+30px)] md:right-0 md:text-left",
  textArtRight: "md:left-0 md:right-[calc(44%+30px)] md:text-right",
  yearText: "m-0 font-extrabold tracking-tight text-[#f65d01] text-2xl sm:text-3xl md:text-[34px] leading-tight",
  placeText: "mt-1 mb-0.5 font-bold text-[#1a1a1a] text-base sm:text-lg md:text-xl leading-snug",
  headlineText: "m-0 text-sm sm:text-[15px] font-medium text-neutral-600 leading-snug",
  descText: "mt-2.5 text-xs sm:text-[13px] md:text-sm text-neutral-500 leading-relaxed max-w-[36ch]",
  descArtLeft: "mr-auto text-left",
  descArtRight: "text-left md:ml-auto md:text-right",
  artContainer: "order-2 mt-4 w-[min(82%,280px)] md:absolute md:top-1/2 md:-translate-y-1/2 md:mt-0 md:w-[min(40%,350px)]",
  artLeft: "md:left-0 md:right-auto",
  artRight: "md:right-0 md:left-auto",
  artImage: "block w-full max-w-[280px] sm:max-w-[320px] md:max-w-none h-auto object-contain select-none pointer-events-none",
};

export default function AboutJourney({
  eyebrow = ABOUT_CONFIG.journey.eyebrow,
  heading = ABOUT_CONFIG.journey.heading,
  subtext = ABOUT_CONFIG.journey.subtext,
  milestones,
  showDescriptions = true,
}: AboutJourneyProps) {
  const displayMilestones: JourneyMilestone[] =
    milestones && milestones.length > 0
      ? milestones
      : [...ABOUT_CONFIG.journey.milestones];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* ── Section Header ── */}
        {(eyebrow || heading || subtext) && (
          <div className={styles.headerWrapper}>
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className={styles.eyebrowWrapper}
              >
                <span className={styles.eyebrowText}>{eyebrow}</span>
                <span className={styles.eyebrowLine} />
              </motion.div>
            )}

            {heading && (
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className={styles.heading}
              >
                {heading}
              </motion.h2>
            )}

            {subtext && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className={styles.subtext}
              >
                {subtext}
              </motion.p>
            )}
          </div>
        )}

        {/* ── Illustrated Timeline ── */}
        <div className={styles.timelineRoot}>
          {/* Desktop S-curve dashed path */}
          <motion.svg
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.svgPath}
            viewBox={`0 0 100 ${displayMilestones.length * 100}`}
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d={buildPath(displayMilestones.length)}
              fill="none"
              stroke="#f65d01"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeDasharray="10 7 2 7"
              vectorEffect="non-scaling-stroke"
            />
          </motion.svg>

          {/* Timeline list */}
          <ol
            className={styles.list}
            style={{
              gridTemplateRows: `repeat(${displayMilestones.length}, minmax(290px, 1fr))`,
            }}
          >
            {/* Mobile vertical dashed line */}
            <div aria-hidden="true" className={styles.mobileVerticalLine} />

            {displayMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              const place = item.place || item.location || "";
              const rawHeadline = item.headline || item.title || "";
              const headline = rawHeadline.replace(/\s*—\s*/g, ": ");
              const graphic = resolveGraphic(item);

              return (
                <motion.li
                  key={`${item.year}-${index}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={styles.item}
                >
                  {/* Dot on the timeline */}
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08 + 0.15,
                      type: "spring",
                      stiffness: 340,
                      damping: 20,
                    }}
                    className={`${styles.dot} ${isEven ? "md:left-[44%]" : "md:left-[56%]"}`}
                    aria-hidden="true"
                  />

                  {/* Text details */}
                  <div
                    className={`${styles.textContainer} ${
                      isEven ? styles.textArtLeft : styles.textArtRight
                    }`}
                  >
                    <p className={styles.yearText}>{item.year}</p>
                    {place && <h3 className={styles.placeText}>{place}</h3>}
                    {headline && <p className={styles.headlineText}>{headline}</p>}
                    {showDescriptions && item.description && (
                      <p
                        className={`${styles.descText} ${
                          isEven ? styles.descArtLeft : styles.descArtRight
                        }`}
                      >
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Artwork */}
                  {graphic && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.08 + 0.12,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`${styles.artContainer} ${
                        isEven ? styles.artLeft : styles.artRight
                      }`}
                      aria-hidden="true"
                    >
                      <img
                        src={graphic}
                        width={item.imageWidth || 800}
                        height={item.imageHeight || 600}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className={styles.artImage}
                      />
                    </motion.div>
                  )}
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
