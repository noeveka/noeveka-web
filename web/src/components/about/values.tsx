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
    <section className="about-section-light">
      <div className="lp-container lp-px py-16 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: heading */}
          <div className="self-start lg:sticky lg:top-24">
            <motion.h2
              {...fu(0.07)}
              className="about-section-heading mb-6"
            >
              {heading}
            </motion.h2>

            {/* Decorative orange bar */}
            <div className="about-orange-bar">
              <div className="about-orange-bar-lg" />
              <div className="about-orange-bar-md" />
              <div className="about-orange-bar-sm" />
            </div>
          </div>

          {/* Right: value cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...fs(0.06 + i * 0.08)}
                className="about-value-card"
              >
                <div className="about-value-icon">
                  <LucideIcon
                    name={icon}
                    fallback="layers"
                    className="h-6 w-6"
                    style={{ color: "var(--color-brand)" }}
                  />
                </div>
                <div>
                  <p className="about-value-title">{title}</p>
                  <p className="about-value-desc">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
