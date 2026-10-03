import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { fu, fs } from "@/lib/motion";
import { getServices } from "@/lib/sanity";
import { SERVICES_CONFIG } from "@/config/landing/services.config";

type Variant = "white" | "orange" | "black";

export interface ServiceItem {
  _id?: string;
  title: string;
  description: string;
  icon: string;
  variant: Variant;
  featured?: boolean;
  ctaText?: string;
  ctaLink?: string;
  order?: number;
}

interface WhatWeDoProps {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  cardCtaText?: string;
  services?: ServiceItem[];
}

const SERVICE_ROUTE_MAP: Record<string, string> = {
  "Enterprise Data & AI Architecture": "/services/enterprise-data-ai-architecture",
  "Enterprise AI & Agentic Systems": "/services/enterprise-ai-agentic-systems",
  "AI Governance & Architecture Assurance": "/services/ai-governance-architecture-assurance",
  "Data & AI Transformation Advisory": "/services/data-ai-transformation-advisory",
};

export default function WhatWeDo({
  eyebrow = SERVICES_CONFIG.eyebrow,
  heading = SERVICES_CONFIG.heading,
  subtext = SERVICES_CONFIG.subtext,
  cardCtaText = SERVICES_CONFIG.cardCtaText,
  services: propServices,
}: WhatWeDoProps) {
  const [sanityServices, setSanityServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    // Only fetch standalone service documents if no inline services were passed from page
    if (!propServices || propServices.length === 0) {
      getServices()
        .then((data) => {
          if (data && data.length > 0) {
            setSanityServices(data);
          }
        })
        .catch(console.error);
    }
  }, [propServices]);

  // Priority: 1. Inline services prop -> 2. Sanity service documents -> 3. Fallback config
  const displayServices: ServiceItem[] =
    propServices && propServices.length > 0
      ? propServices
      : sanityServices.length > 0
        ? sanityServices
        : [...SERVICES_CONFIG.services];

  const resolveServiceLink = (service: ServiceItem): string => {
    if (service.ctaLink && service.ctaLink.startsWith("/services/")) {
      return service.ctaLink;
    }
    if (service.ctaLink && service.ctaLink.startsWith("http")) {
      return service.ctaLink;
    }
    const mapped = SERVICE_ROUTE_MAP[service.title.trim()];
    if (mapped) return mapped;

    const lower = service.title.toLowerCase();
    if (lower.includes("governance") || lower.includes("assurance"))
      return "/services/ai-governance-architecture-assurance";
    if (lower.includes("agentic") || (lower.includes("ai") && lower.includes("systems")))
      return "/services/enterprise-ai-agentic-systems";
    if (lower.includes("transformation") || lower.includes("advisory"))
      return "/services/data-ai-transformation-advisory";
    if (lower.includes("data") && lower.includes("architecture"))
      return "/services/enterprise-data-ai-architecture";

    return service.ctaLink && service.ctaLink !== "#" ? service.ctaLink : "/services";
  };

  return (
    <section
      id="what-we-do"
      className="lp-section lp-section-subtle lp-section-border-t relative overflow-hidden"
    >
      {/* Subtle background decorative arc at top right */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] -translate-y-1/2 translate-x-1/3 rounded-full border border-orange-500/10"
        aria-hidden="true"
      />

      <div className="lp-container lp-px relative z-10 py-16 lg:py-24">
        {/* Centered Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <motion.p {...fu()} className="lp-eyebrow mb-3 justify-center">
            <span className="text-[13px] leading-none">✳</span> {eyebrow}
          </motion.p>
          <motion.h2 {...fu(0.06)} className="lp-section-heading mb-4">
            {heading}
          </motion.h2>
          <motion.p {...fu(0.1)} className="lp-section-subtext mx-auto max-w-2xl">
            {subtext}
          </motion.p>
        </div>

        {/* 2x2 Grid of Services */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {displayServices.map((s, i) => {
            const variantClass = `service-card-${s.variant}` as const;
            const buttonText = s.ctaText || cardCtaText || "Learn More";
            const targetLink = resolveServiceLink(s);

            return (
              <motion.div
                key={s._id ?? `service-${i}`}
                {...fs(0.06 + i * 0.08)}
                className={`service-card ${variantClass}`}
              >
                {/* Decorative bottom-right watermark shape */}
                <div className="service-card-watermark" aria-hidden="true" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="service-card-icon-wrap">
                    <LucideIcon
                      name={s.icon}
                      fallback="layers"
                      className="service-card-icon h-6 w-6"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="service-card-title">{s.title}</h3>

                  {/* Description */}
                  <p className="service-card-desc">{s.description}</p>
                </div>

                {/* CTA Button */}
                <div className="relative z-10 pt-2">
                  {targetLink.startsWith("http") ? (
                    <a
                      href={targetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-card-btn"
                    >
                      {buttonText}{" "}
                      <LucideIcon
                        name="arrow-right"
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </a>
                  ) : (
                    <Link to={targetLink} className="service-card-btn">
                      {buttonText}{" "}
                      <LucideIcon
                        name="arrow-right"
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
