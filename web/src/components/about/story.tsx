import { motion } from "framer-motion";

import { ABOUT_CONFIG } from "@/config/about.config";
import { fs, fu } from "@/lib/motion";

export interface Milestone {
  year: string;
  event: string;
  detail: string;
}

interface StoryProps {
  heading?: string;
  milestones?: Milestone[];
}

export default function Story({
  heading = ABOUT_CONFIG.story.heading,
  milestones = ABOUT_CONFIG.story.milestones as unknown as Milestone[],
}: StoryProps) {
  const headingLines = heading.split("\n");

  return (
    <section
      className="flex justify-center border-b"
      style={{
        background: "var(--color-bg-subtle)",
        borderColor: "var(--color-stroke-default)",
      }}
    >
      <div className="lp-container lp-px py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left: sticky heading */}
          <div className="self-start lg:sticky lg:top-24 lg:col-span-4">
            <motion.h2
              {...fu(0.07)}
              className="text-[1.9rem] leading-snug font-extrabold tracking-tight sm:text-[2.2rem]"
              style={{ color: "var(--color-text-primary)" }}
            >
              {headingLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headingLines.length - 1 && <br />}
                </span>
              ))}
            </motion.h2>
            <div
              className="mt-6 h-1 w-10 rounded-full"
              style={{ background: "var(--color-brand)" }}
            />
          </div>

          {/* Right: Timeline */}
          <div className="flex flex-col lg:col-span-8">
            {milestones.map(({ year, event, detail }, i) => (
              <motion.div
                key={year}
                {...fs(0.04 + i * 0.09)}
                className="relative flex gap-6 pb-10"
              >
                {/* Vertical line */}
                {i < milestones.length - 1 && (
                  <div
                    className="absolute top-10 bottom-0 left-[19px] w-px"
                    style={{ background: "var(--color-stroke-default)" }}
                  />
                )}

                {/* Dot */}
                <div className="flex shrink-0 flex-col items-center pt-1">
                  <div
                    className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-[10px] font-extrabold"
                    style={{
                      background:
                        i === milestones.length - 1
                          ? "var(--color-brand)"
                          : "var(--color-bg-surface)",
                      borderColor:
                        i === milestones.length - 1
                          ? "var(--color-brand)"
                          : "var(--color-stroke-default)",
                      color:
                        i === milestones.length - 1
                          ? "#fff"
                          : "var(--color-text-muted)",
                    }}
                  >
                    {year.slice(2)}
                  </div>
                </div>

                {/* Content */}
                <div
                  className="flex-1 rounded-2xl p-5"
                  style={{
                    background: "var(--color-bg-surface)",
                    border: `1px solid ${i === milestones.length - 1 ? "var(--color-brand)" : "var(--color-stroke-default)"}`,
                    boxShadow:
                      i === milestones.length - 1
                        ? "0 4px 24px rgba(246,93,1,0.10)"
                        : "0 2px 10px rgba(0,0,0,0.04)",
                  }}
                >
                  <p
                    className="mb-1.5 text-[11px] font-bold"
                    style={{ color: "var(--color-brand)" }}
                  >
                    {year}
                  </p>
                  <p
                    className="mb-1.5 text-[15px] font-bold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {event}
                  </p>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
