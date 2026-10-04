import { Link } from "react-router";
import { motion } from "framer-motion";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import { fu, fs } from "@/lib/motion";
import type { ServiceDetailRelatedExpertise } from "@/types/service-detail.types";

interface ServiceRelatedExpertiseProps {
  related: ServiceDetailRelatedExpertise;
}

export default function ServiceRelatedExpertise({ related }: ServiceRelatedExpertiseProps) {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 selection:bg-[#F65D01]/15"
      style={{
        backgroundColor: "var(--color-bg-subtle)",
        borderTop: "1px solid var(--color-stroke-default)",
      }}
    >
      <div className="lp-container lp-px mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div {...fu(0.04)} className="service-section-eyebrow mb-3">
            <span className="service-section-eyebrow-bar" />
            <span className="service-section-eyebrow-text">
              {related.eyebrow || "Related Expertise"}
            </span>
          </motion.div>
          <motion.h2
            {...fu(0.08)}
            className="service-section-heading mb-4"
          >
            {related.heading}
          </motion.h2>
          {related.subtext && (
            <motion.p
              {...fu(0.12)}
              className="service-section-subtext"
            >
              {related.subtext}
            </motion.p>
          )}
        </div>

        {/* 3 Related Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.services.map((srv, idx) => (
            <motion.div
              key={idx}
              {...fs(0.08 + idx * 0.06)}
              className="group service-related-card"
            >
              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: "var(--color-brand-tint)",
                      color: "var(--color-brand)",
                    }}
                  >
                    <LucideIcon name={srv.icon} fallback="layers" className="w-5 h-5" />
                  </div>
                  <span
                    className="text-[12px] font-mono font-bold px-2.5 py-1 rounded-full"
                    style={{
                      color: "var(--color-brand)",
                      backgroundColor: "var(--color-brand-tint)",
                    }}
                  >
                    {srv.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-[17px] font-bold mb-2 leading-snug tracking-tight"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {srv.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[13.5px] leading-relaxed mb-6 font-normal"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {srv.description}
                </p>
              </div>

              {/* Action Link */}
              <div
                className="pt-2"
                style={{ borderTop: "1px solid var(--color-stroke-default)" }}
              >
                <Link
                  to={srv.linkUrl}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: "var(--color-brand)" }}
                >
                  <span>{srv.linkText || "Learn More"}</span>
                  <LucideIcon name={lucideIconRegistry.ArrowRight} className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
