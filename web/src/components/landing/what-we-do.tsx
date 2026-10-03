import { useEffect, useState, useRef, useCallback } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollAnimRef = useRef<number | null>(null);

  // Mouse drag support for desktop/emulator testing
  const isPointerDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

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

  const handleScroll = useCallback(() => {
    if (scrollAnimRef.current) {
      cancelAnimationFrame(scrollAnimRef.current);
    }

    scrollAnimRef.current = requestAnimationFrame(() => {
      const container = sliderRef.current;
      if (!container) return;

      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      const children = Array.from(container.children) as HTMLElement[];
      if (!children.length) return;

      let closestIndex = 0;
      let minDistance = Infinity;

      children.forEach((child, idx) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(containerCenter - childCenter);
        if (dist < minDistance) {
          minDistance = dist;
          closestIndex = idx;
        }
      });

      setActiveIndex(closestIndex);
    });
  }, []);

  useEffect(() => {
    return () => {
      if (scrollAnimRef.current) {
        cancelAnimationFrame(scrollAnimRef.current);
      }
    };
  }, []);

  const scrollToCard = (index: number) => {
    const container = sliderRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];
    const target = children[index];
    if (!target) return;

    const scrollLeft = target.offsetLeft - (container.offsetWidth - target.offsetWidth) / 2;
    container.scrollTo({
      left: Math.max(0, scrollLeft),
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToCard(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < displayServices.length - 1) {
      scrollToCard(activeIndex + 1);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only drag with mouse on desktop/emulators; let mobile browser handle touch + vertical page scroll natively!
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    if (!sliderRef.current) return;
    isPointerDownRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftRef.current = sliderRef.current.scrollLeft;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDownRef.current || !sliderRef.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startXRef.current;
    if (Math.abs(walk) > 6) {
      hasMovedRef.current = true;
    }
    sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handlePointerUpOrLeave = () => {
    isPointerDownRef.current = false;
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (hasMovedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

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

  const renderCardContent = (s: ServiceItem, isMobile = false) => {
    const buttonText = s.ctaText || cardCtaText || "Learn More";
    const targetLink = resolveServiceLink(s);

    return (
      <>
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
              onClick={isMobile ? handleLinkClick : undefined}
              className="service-card-btn"
            >
              {buttonText}{" "}
              <LucideIcon
                name="arrow-right"
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
          ) : (
            <Link
              to={targetLink}
              onClick={isMobile ? handleLinkClick : undefined}
              className="service-card-btn"
            >
              {buttonText}{" "}
              <LucideIcon
                name="arrow-right"
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          )}
        </div>
      </>
    );
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

        {/* 1. TABLETS & BIG SCREENS: 2x2 Grid of Services (Unchanged) */}
        <div className="mx-auto hidden max-w-5xl grid-cols-1 gap-6 md:grid md:grid-cols-2">
          {displayServices.map((s, i) => {
            const variantClass = `service-card-${s.variant}` as const;

            return (
              <motion.div
                key={s._id ?? `service-${i}`}
                {...fs(0.06 + i * 0.08)}
                className={`service-card ${variantClass}`}
              >
                {renderCardContent(s, false)}
              </motion.div>
            );
          })}
        </div>

        {/* 2. SMALL SCREENS / MOBILE: Buttery-Smooth Thumb-Swipeable Slider with Controls */}
        <div className="block md:hidden">
          {/* Scrollable Container with native momentum snap and touch-pan-y for smooth vertical page scroll */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUpOrLeave}
            onPointerLeave={handlePointerUpOrLeave}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-y py-2 px-4 -mx-4 sm:-mx-6 sm:px-6 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {displayServices.map((s, idx) => {
              const variantClass = `service-card-${s.variant}` as const;

              return (
                <div
                  key={s._id ?? `mobile-service-${idx}`}
                  className={`service-card ${variantClass} snap-center shrink-0 w-[84vw] max-w-[320px] transition-all duration-300`}
                >
                  {renderCardContent(s, true)}
                </div>
              );
            })}
          </div>

          {/* Slider Controller (Pagination & Navigation) */}
          <div className="mt-5 flex items-center justify-between px-1">
            {/* Slide Index Counter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#161922]">
                {String(activeIndex + 1).padStart(2, "0")}
                <span className="text-neutral-400 font-normal">
                  {" "}/ {String(displayServices.length).padStart(2, "0")}
                </span>
              </span>
            </div>

            {/* Dot / Pill Indicators */}
            <div className="flex items-center gap-1.5">
              {displayServices.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToCard(dotIdx)}
                  aria-label={`Go to card ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    dotIdx === activeIndex
                      ? "w-6 bg-[#F65D01]"
                      : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous card"
                className="w-9 h-9 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-[#161922] shadow-sm transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:enabled:border-[#F65D01] hover:enabled:text-[#F65D01] active:enabled:scale-95"
              >
                <LucideIcon name="chevron-left" className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={activeIndex === displayServices.length - 1}
                aria-label="Next card"
                className="w-9 h-9 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-[#161922] shadow-sm transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:enabled:border-[#F65D01] hover:enabled:text-[#F65D01] active:enabled:scale-95"
              >
                <LucideIcon name="chevron-right" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
