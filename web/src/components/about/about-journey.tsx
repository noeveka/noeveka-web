import { motion } from "framer-motion";
import { ABOUT_CONFIG } from "@/config/about.config";

export interface JourneyMilestone {
  year: string;
  stage?: string;
  location?: string;
  title: string;
  description: string;
  isHighlight?: boolean;
}

export interface AboutJourneyProps {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  milestones?: JourneyMilestone[];
}

export default function AboutJourney({
  eyebrow = ABOUT_CONFIG.journey.eyebrow,
  heading = ABOUT_CONFIG.journey.heading,
  subtext = ABOUT_CONFIG.journey.subtext,
  milestones,
}: AboutJourneyProps) {
  const displayMilestones: JourneyMilestone[] =
    milestones && milestones.length > 0 ? milestones : [...ABOUT_CONFIG.journey.milestones];

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 lg:py-28">
      <div className="lp-container lp-px mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 text-left">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mb-3 text-xs font-bold tracking-widest text-[#f65d01] uppercase"
            >
              {eyebrow}
            </motion.p>
          )}

          {heading && (
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-3xl font-extrabold tracking-tight text-[#1e212b] sm:text-4xl lg:text-[44px] leading-tight"
            >
              {heading}
            </motion.h2>
          )}

          {subtext && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="mt-4 max-w-2xl text-base text-neutral-500 leading-relaxed"
            >
              {subtext}
            </motion.p>
          )}
        </div>

        {/* ── Timeline Container ── */}
        <div className="relative">
          <div className="space-y-12 sm:space-y-16">
            {displayMilestones.map((item, index) => {
              const isLast = index === displayMilestones.length - 1;

              return (
                <motion.div
                  key={`${item.year}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="grid grid-cols-[80px_32px_1fr] sm:grid-cols-[140px_48px_1fr] items-start"
                >
                  {/* Left Column: Big Bold Year */}
                  <div className="pt-0.5 text-right sm:pr-4">
                    <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1e212b]">
                      {item.year}
                    </span>
                  </div>

                  {/* Center Column: Continuous Vertical Line with Clean Solid Dot */}
                  <div className="relative flex flex-col items-center h-full">
                    {/* Orange Dot Marker */}
                    <div className="relative z-10 mt-2 sm:mt-3 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#f65d01] shadow-[0_0_0_4px_rgba(246,93,1,0.18)]" />

                    {/* Vertical connecting line */}
                    {!isLast && (
                      <div className="absolute top-5 sm:top-6 bottom-[-48px] sm:bottom-[-64px] w-[1.5px] bg-neutral-200" />
                    )}
                  </div>

                  {/* Right Column: Title and Narrative Content */}
                  <div className="pl-3 sm:pl-6 pb-2">
                    {/* Stage & Location Badge (if available) */}
                    {(item.stage || item.location) && (
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        {item.stage && (
                          <span className="rounded-md bg-[#f65d01]/10 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#f65d01] uppercase">
                            {item.stage}
                          </span>
                        )}
                        {item.location && (
                          <span className="text-xs sm:text-[13px] font-semibold text-neutral-500">
                            {item.location}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Milestone Title in Brand Orange */}
                    <h3
                      className={`text-base sm:text-lg lg:text-xl font-bold leading-snug ${
                        item.isHighlight ? "text-[#f65d01]" : "text-[#f65d01]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Milestone Description */}
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-neutral-600 max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
