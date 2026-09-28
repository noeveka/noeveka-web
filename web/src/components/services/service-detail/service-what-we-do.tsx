import { Link } from "react-router";
import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { fu, fs } from "@/lib/motion";
import type { ServiceDetailWhatWeDo } from "@/types/service-detail.types";

interface ServiceWhatWeDoProps {
  whatWeDo: ServiceDetailWhatWeDo;
}

export default function ServiceWhatWeDo({ whatWeDo }: ServiceWhatWeDoProps) {
  return (
    <section id="what-we-do" className="relative bg-white py-16 sm:py-20 lg:py-24 selection:bg-[#F65D01]/15">
      <div className="lp-container lp-px mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div {...fu(0.04)} className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#F65D01] inline-block" />
            <span className="text-[11.5px] font-bold tracking-[0.2em] uppercase text-[#F65D01]">
              Capabilities
            </span>
          </motion.div>
          <motion.h2
            {...fu(0.08)}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#161922] mb-4 leading-[1.2]"
          >
            {whatWeDo.heading}
          </motion.h2>
          <motion.p
            {...fu(0.12)}
            className="text-[15px] sm:text-[16px] leading-relaxed text-[#555D6E] font-normal"
          >
            {whatWeDo.subtext}
          </motion.p>
        </div>

        {/* Cards Grid: dynamic columns depending on count */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${whatWeDo.items.length === 6 ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-6`}>
          {whatWeDo.items.map((item, idx) => (
            <motion.div
              key={idx}
              {...fs(0.08 + idx * 0.06)}
              className="group relative flex flex-col justify-between rounded-2xl bg-white border border-neutral-200/80 p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:border-[#F65D01]/30"
            >
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#FFF0E6] flex items-center justify-center text-[#F65D01] mb-5 transition-transform duration-300 group-hover:scale-105">
                  <LucideIcon name={item.icon} fallback="layers" className="w-6 h-6 text-[#F65D01]" />
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold text-[#161922] leading-snug mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13.5px] text-[#64748B] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Link CTA */}
              <div className="pt-2 border-t border-neutral-100">
                <Link
                  to={item.linkUrl || "/contact"}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#F65D01] transition-transform duration-200 group-hover:translate-x-1"
                >
                  <span>{item.linkText || "Learn More"}</span>
                  <LucideIcon name="arrow-right" className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
