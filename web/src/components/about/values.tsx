import { motion } from "framer-motion";

import { LucideIcon } from "@/components/lucide-icons";
import { ABOUT_CONFIG } from "@/config/about.config";
import { fs, fu } from "@/lib/motion";

export interface ValueItem {
  icon: string;
  title: string;
  desc: string;
}

interface ValuesProps {
  heading?: string;
  items?: ValueItem[];
}

export default function Values({
  heading = ABOUT_CONFIG.values.heading,
  items = ABOUT_CONFIG.values.items as unknown as ValueItem[],
}: ValuesProps) {
  return (
    <section
      className="flex justify-center border-b"
      style={{
        background: "var(--color-bg-surface)",
        borderColor: "var(--color-stroke-default)",
      }}
    >
      <div className="lp-container lp-px py-16 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: heading */}
          <div className="self-start lg:sticky lg:top-24">
            <motion.h2
              {...fu(0.07)}
              className="mb-6 text-[1.9rem] leading-snug font-extrabold tracking-tight sm:text-[2.3rem]"
              style={{ color: "var(--color-text-primary)" }}
            >
              {heading}
            </motion.h2>

            {/* decorative orange bar */}
            <div className="flex gap-1.5">
              <div
                className="h-1.5 w-10 rounded-full"
                style={{ background: "var(--color-brand)" }}
              />
              <div
                className="h-1.5 w-4 rounded-full"
                style={{ background: "rgba(246,93,1,0.3)" }}
              />
              <div
                className="h-1.5 w-2 rounded-full"
                style={{ background: "rgba(246,93,1,0.15)" }}
              />
            </div>
          </div>

          {/* Right: value cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map(({ icon, title, desc }, i) => {
              return (
                <motion.div
                  key={title}
                  {...fs(0.06 + i * 0.08)}
                  className="group flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "var(--color-bg-subtle)",
                    border: "1px solid var(--color-stroke-default)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      background: "var(--color-brand-tint)",
                      border: "1px solid rgba(246,93,1,0.18)",
                    }}
                  >
                    <LucideIcon
                      name={icon}
                      fallback="layers"
                      className="h-6 w-6"
                      style={{ color: "var(--color-brand)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="mb-1.5 text-[14.5px] font-extrabold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {title}
                    </p>
                    <p
                      className="text-[13px] leading-relaxed"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {desc}
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
