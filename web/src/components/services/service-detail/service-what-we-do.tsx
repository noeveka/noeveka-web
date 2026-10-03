import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { fu, fs } from "@/lib/motion";
import type { ServiceDetailWhatWeDo } from "@/types/service-detail.types";

interface ServiceWhatWeDoProps {
  whatWeDo: ServiceDetailWhatWeDo;
}

/**
 * Returns column span classes and wide-card status for the Bento Grid layout on large screens.
 */
function getBentoLayout(index: number, total: number): { spanClass: string; isWide: boolean } {
  if (total === 4) {
    const isWide = index === 0 || index === 3;
    return {
      spanClass: isWide ? "lg:col-span-7" : "lg:col-span-5",
      isWide,
    };
  }
  if (total === 6) {
    if (index === 0) return { spanClass: "lg:col-span-7", isWide: true };
    if (index === 1) return { spanClass: "lg:col-span-5", isWide: false };
    if (index === 2) return { spanClass: "lg:col-span-5", isWide: false };
    if (index === 3) return { spanClass: "lg:col-span-7", isWide: true };
    return { spanClass: "lg:col-span-6", isWide: false };
  }
  if (total === 5) {
    if (index === 0) return { spanClass: "lg:col-span-7", isWide: true };
    if (index === 1) return { spanClass: "lg:col-span-5", isWide: false };
    return { spanClass: "lg:col-span-4", isWide: false };
  }
  if (total === 3) {
    return {
      spanClass: index === 0 ? "lg:col-span-12" : "lg:col-span-6",
      isWide: index === 0,
    };
  }
  return {
    spanClass: "lg:col-span-4",
    isWide: false,
  };
}

export default function ServiceWhatWeDo({ whatWeDo }: ServiceWhatWeDoProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollAnimRef = useRef<number | null>(null);

  // Mouse drag support for desktop/emulator testing
  const isPointerDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

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
    if (activeIndex < whatWeDo.items.length - 1) {
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

  return (
    <section id="what-we-do" className="relative bg-white py-16 sm:py-20 lg:py-24 selection:bg-[#F65D01]/15 overflow-hidden">
      <div className="lp-container lp-px mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16">
          <motion.div {...fu(0.04)} className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#F65D01] inline-block" />
            <span className="text-[11.5px] font-bold tracking-[0.2em] uppercase text-[#F65D01]">
              {whatWeDo.eyebrow || "What We Do"}
            </span>
          </motion.div>
          <motion.h2
            {...fu(0.08)}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#161922] mb-4 leading-[1.2]"
          >
            {whatWeDo.heading}
          </motion.h2>
          {whatWeDo.subtext && (
            <motion.p
              {...fu(0.12)}
              className="text-[15px] sm:text-[16px] leading-relaxed text-[#555D6E] font-normal"
            >
              {whatWeDo.subtext}
            </motion.p>
          )}
        </div>

        {/* 1. TABLETS & BIG SCREENS: Bento Grid (hidden on mobile, shown on md and up) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-12 gap-6">
          {whatWeDo.items.map((item, idx) => {
            const { spanClass, isWide } = getBentoLayout(idx, whatWeDo.items.length);

            return (
              <motion.div
                key={idx}
                {...fs(0.06 + idx * 0.05)}
                className={`group relative flex flex-col justify-between rounded-2xl bg-white border border-neutral-200/80 p-6 sm:p-7 ${
                  isWide ? "lg:p-8" : "lg:p-7"
                } shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] hover:border-[#F65D01]/30 overflow-hidden md:col-span-1 ${spanClass}`}
              >
                {/* Subtle ambient decorative gradient on hover */}
                <div
                  className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#F65D01]/5 blur-2xl transition-all duration-500 group-hover:bg-[#F65D01]/10 group-hover:scale-125"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Icon & Index Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF0E6] border border-[#F65D01]/10 flex items-center justify-center text-[#F65D01] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#F65D01] group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(246,93,1,0.25)]">
                      <LucideIcon name={item.icon} fallback="layers" className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-neutral-400 bg-neutral-100/90 px-2.5 py-1 rounded-full group-hover:text-[#F65D01] group-hover:bg-[#FFF0E6] transition-colors duration-300">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-bold text-[#161922] leading-snug mb-3 tracking-tight transition-colors duration-200 group-hover:text-[#F65D01] ${
                      isWide ? "text-[18px] sm:text-[19px] lg:text-[20px]" : "text-[17px] sm:text-[18px]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] sm:text-[14px] text-[#64748B] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Link CTA */}
                <div className="relative z-10 pt-4 border-t border-neutral-100">
                  <Link
                    to={item.linkUrl || "/contact"}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#F65D01] transition-all duration-200 group-hover:translate-x-1"
                  >
                    <span>{item.linkText || "Learn More"}</span>
                    <LucideIcon name="arrow-right" className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2. SMALL SCREENS / MOBILE: Buttery-Smooth Thumb-Swipeable Slider with Controls */}
        <div className="block md:hidden">
          {/* Scrollable Container with native momentum snap */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUpOrLeave}
            onPointerLeave={handlePointerUpOrLeave}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-y py-2 px-4 -mx-4 sm:-mx-6 sm:px-6 select-none scrollbar-none [-ms-overflow-style:none] active:cursor-grabbing"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {whatWeDo.items.map((item, idx) => (
              <div
                key={idx}
                className="snap-center shrink-0 w-[84vw] max-w-[320px] flex flex-col justify-between rounded-2xl bg-white border border-neutral-200/90 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] relative overflow-hidden transition-all duration-300"
              >
                {/* Subtle soft orange glow */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F65D01]/5 blur-xl"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Top: Icon + Index Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FFF0E6] border border-[#F65D01]/10 flex items-center justify-center text-[#F65D01]">
                      <LucideIcon name={item.icon} fallback="layers" className="w-5 h-5 text-[#F65D01]" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] font-bold text-[#161922] leading-snug mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] text-[#64748B] leading-relaxed mb-5 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Link CTA */}
                <div className="relative z-10 pt-3 border-t border-neutral-100">
                  <Link
                    to={item.linkUrl || "/contact"}
                    onClick={handleLinkClick}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#F65D01] active:opacity-80"
                  >
                    <span>{item.linkText || "Learn More"}</span>
                    <LucideIcon name="arrow-right" className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controller (Pagination & Touch Navigation) */}
          <div className="mt-5 flex items-center justify-between px-1">
            {/* Slide Index Counter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#161922]">
                {String(activeIndex + 1).padStart(2, "0")}
                <span className="text-neutral-400 font-normal">
                  {" "}/ {String(whatWeDo.items.length).padStart(2, "0")}
                </span>
              </span>
            </div>

            {/* Dot / Pill Indicators */}
            <div className="flex items-center gap-1.5">
              {whatWeDo.items.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToCard(dotIdx)}
                  aria-label={`Go to card ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    dotIdx === activeIndex
                      ? "w-6 bg-[#F65D01]"
                      : "w-2 bg-neutral-200 hover:bg-neutral-300"
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
                disabled={activeIndex === whatWeDo.items.length - 1}
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
