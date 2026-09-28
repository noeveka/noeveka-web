import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import {
  ArchitectureStackVisual,
  AgenticNetworkVisual,
  GovernanceShieldVisual,
  TransformationCurveVisual,
} from "./service-visuals";
import { SERVICES_CONFIG, type ServiceFocusArea } from "@/config/services.config";

interface ServicesHeroProps {
  eyebrow?: string;
  badge?: string;
  headingLine1?: string;
  headingLine2?: string;
  headingHighlight?: string;
  subtext?: string;
  focusAreas?: readonly ServiceFocusArea[];
}

const VisualMap: Record<ServiceFocusArea["visualType"], React.FC<{ className?: string }>> = {
  stack: ArchitectureStackVisual,
  agents: AgenticNetworkVisual,
  governance: GovernanceShieldVisual,
  transformation: TransformationCurveVisual,
};

const AUTO_ADVANCE_MS = 5000;

export default function ServicesHero({
  headingLine1 = SERVICES_CONFIG.hero.headingLine1,
  headingLine2 = SERVICES_CONFIG.hero.headingLine2,
  headingHighlight = SERVICES_CONFIG.hero.headingHighlight,
  subtext = SERVICES_CONFIG.hero.subtext,
  focusAreas = SERVICES_CONFIG.focusAreas,
}: ServicesHeroProps) {
  const areas = focusAreas && focusAreas.length >= 4 ? focusAreas : SERVICES_CONFIG.focusAreas;
  const total = areas.length;

  // Extended track for desktop/tablet continuous sliding
  const trackItems = [...areas, ...areas, ...areas];
  const startIndex = total; // Index 4

  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Active slide index (0 to 3) for dots and mobile
  const activeDot = ((currentIndex % total) + total) % total;
  const activeCard = areas[activeDot];
  const ActiveVisual = VisualMap[activeCard.visualType] ?? ArchitectureStackVisual;

  const next = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIdx = prev + 1;
      if (nextIdx >= trackItems.length - 2) {
        return startIndex + (nextIdx % total);
      }
      return nextIdx;
    });
  }, [trackItems.length, startIndex, total]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => {
      const prevIdx = prev - 1;
      if (prevIdx < 2) {
        return startIndex + (prevIdx % total);
      }
      return prevIdx;
    });
  }, [startIndex, total]);

  const goToDot = useCallback(
    (dotIndex: number) => {
      const currentDot = ((currentIndex % total) + total) % total;
      const diff = dotIndex - currentDot;
      setCurrentIndex((curr) => curr + diff);
    },
    [currentIndex, total]
  );

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(next, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isPaused, next]);

  return (
    <section
      className="relative w-full overflow-hidden bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 selection:bg-[#f65d01]/20"
      id="services-hero"
    >
      {/* Subtle radial ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(246,93,1,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="lp-container lp-px relative z-10 mx-auto">
        {/* ── Section Header with Centered Title & Top-Right Navigation Arrows ── */}
        <div className="relative mb-8 sm:mb-12 lg:mb-14">
          {/* Centered Heading & Subtext */}
          <div className="text-center max-w-2xl mx-auto px-2 sm:px-4">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-[#1e212b] leading-[1.1] mb-3"
            >
              {headingLine1}
              <br />
              <span className="text-[#f65d01]">{headingHighlight ?? headingLine2}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base md:text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed"
            >
              {subtext}
            </motion.p>
          </div>

          {/* Top-Right Arrow Buttons */}

        </div>
        <div className="pb-8">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 flex justify-center items-center gap-2.5 z-30"
        >
          <button
            onClick={prev}
            aria-label="Previous service"
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#1e212b] shadow-sm transition-all duration-200 hover:border-[#f65d01] hover:text-[#f65d01] hover:shadow-md active:scale-95 cursor-pointer"
          >
            <LucideIcon name={lucideIconRegistry.ArrowLeft} className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
          </button>
          <button
            onClick={next}
            aria-label="Next service"
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#1e212b] shadow-sm transition-all duration-200 hover:border-[#f65d01] hover:text-[#f65d01] hover:shadow-md active:scale-95 cursor-pointer"
          >
            <LucideIcon name={lucideIconRegistry.ArrowRight} className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
          </button>
        </motion.div>
        </div>

        {/* ── Mobile View: Smooth Animated Single Card (< sm) ── */}
        <div
          className="block sm:hidden w-full max-w-[380px] mx-auto px-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full rounded-[28px] border border-orange-200/90 shadow-[0_16px_40px_rgba(246,93,1,0.08)] bg-linear-to-b from-white via-white to-[#fffaf6] p-6 flex flex-col justify-between min-h-[440px]"
            >
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-xs font-black tracking-widest text-[#f65d01]">
                    {activeCard.number} / 0{total}
                  </span>
                  {activeCard.badgeText && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                      • {activeCard.badgeText}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-extrabold tracking-tight text-[#1e212b] leading-[1.2] mb-2.5">
                  {activeCard.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  {activeCard.shortDescription}
                </p>
              </div>

              {/* Visual in center */}
              <div className="relative flex items-center justify-center py-4 my-1">
                <div
                  className="pointer-events-none absolute w-36 h-36 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(246,93,1,0.12) 0%, transparent 70%)",
                  }}
                />
                <div className="relative z-10 w-full max-w-[210px] flex items-center justify-center">
                  <ActiveVisual className="w-full h-auto max-h-[140px]" />
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  to={activeCard.ctaLink}
                  className="group inline-flex items-center gap-2 rounded-full border border-orange-300 bg-white px-4 py-2 text-xs font-semibold text-[#1e212b] shadow-xs transition-all duration-200 hover:border-[#f65d01] hover:bg-[#f65d01] hover:text-white"
                >
                  <span>{activeCard.ctaText ?? "Learn more"}</span>
                  <LucideIcon
                    name={lucideIconRegistry.ArrowRight}
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Tablet & Desktop View: 3-Card Continuous Sliding Track (>= sm) ── */}
        <div
          className="hidden sm:block relative w-full h-[370px] md:h-[380px] overflow-visible"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Inner motion track */}
          <motion.div
            animate={{
              x: -currentIndex * 564, // 540px card + 24px gap
            }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 26,
              mass: 0.85,
            }}
            style={{
              left: "50%",
              marginLeft: -270, // -540 / 2
              gap: "24px",
            }}
            className="flex items-center absolute top-0 h-full"
          >
            {trackItems.map((card, idx) => {
              const isCenter = idx === currentIndex;
              const isAdjacent = Math.abs(idx - currentIndex) === 1;
              const Visual = VisualMap[card.visualType] ?? ArchitectureStackVisual;

              return (
                <div
                  key={`${card.id}-${idx}`}
                  onClick={() => {
                    if (idx !== currentIndex) {
                      setCurrentIndex(idx);
                    }
                  }}
                  style={{ width: "540px" }}
                  className={`shrink-0 h-full rounded-[32px] overflow-hidden transition-all duration-300 ${
                    isCenter
                      ? "border border-orange-200/90 shadow-[0_20px_50px_rgba(246,93,1,0.08)] bg-linear-to-b from-white via-white to-[#fffaf6] scale-100 z-20 opacity-100 cursor-default"
                      : isAdjacent
                      ? "border border-neutral-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.04)] bg-white scale-[0.93] z-10 opacity-55 hover:opacity-80 cursor-pointer"
                      : "opacity-0 scale-[0.85] pointer-events-none"
                  }`}
                >
                  <div className="grid grid-cols-[1.15fr_1fr] h-full">
                    {/* Left Column: Content */}
                    <div className="p-7 md:p-8 flex flex-col justify-between z-10">
                      <div>
                        {/* Number & Badge */}
                        <div className="flex items-center gap-2 mb-2.5">
                          <span className="text-xs sm:text-sm font-black tracking-widest text-[#f65d01]">
                            {card.number} / 0{total}
                          </span>
                          {card.badgeText && (
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                              • {card.badgeText}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1e212b] leading-[1.18] mb-2 sm:mb-3">
                          {card.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-3">
                          {card.shortDescription}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div>
                        {(() => {
                          const routeMap: Record<string, string> = {
                            "enterprise-data-ai-architecture": "/services/enterprise-data-ai-architecture",
                            "ai-governance-assurance": "/services/ai-governance-architecture-assurance",
                            "ai-agentic-systems": "/services/enterprise-ai-agentic-systems",
                            "transformation-advisory": "/services/data-ai-transformation-advisory",
                          };
                          const link =
                            (card.id && routeMap[card.id]) ||
                            (card.ctaLink && card.ctaLink.startsWith("/services/")
                              ? card.ctaLink
                              : "/services");

                          return (
                            <Link
                              to={link}
                              className="group inline-flex items-center gap-2 rounded-full border border-orange-300 bg-white/80 px-4 py-1.5 sm:px-4.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#1e212b] shadow-xs transition-all duration-200 hover:border-[#f65d01] hover:bg-[#f65d01] hover:text-white hover:shadow-[0_4px_14px_rgba(246,93,1,0.25)]"
                            >
                              <span>{card.ctaText ?? "Learn more"}</span>
                              <LucideIcon
                                name={lucideIconRegistry.ArrowRight}
                                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                              />
                            </Link>
                          );
                        })()}
                      </div>
                    </div>

                    {/* Right Column: Visual Graphic */}
                    <div className="relative flex items-center justify-center p-4 sm:p-5 overflow-hidden bg-linear-to-br from-orange-50/25 via-transparent to-transparent">
                      {/* Subtle ambient warm glow */}
                      <div
                        className="pointer-events-none absolute w-44 h-44 rounded-full"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(246,93,1,0.10) 0%, transparent 70%)",
                        }}
                      />
                      <div className="relative z-10 w-full max-w-[240px] flex items-center justify-center">
                        <Visual className="w-full h-auto max-h-[165px]" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Bottom Pagination Indicators ── */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2.5">
          {areas.map((_, i) => (
            <button
              key={i}
              onClick={() => goToDot(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === activeDot
                  ? "w-7 h-2 bg-[#f65d01]"
                  : "w-2 h-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
