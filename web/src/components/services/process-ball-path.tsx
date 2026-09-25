import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useSpring, useMotionValueEvent, type MotionValue } from "framer-motion";

export interface ProcessStep {
  number: string;
  title: string;
  desc: string;
}

const DEFAULT_STEPS: ProcessStep[] = [
  { number: "01", title: "Advisory Projects", desc: "Focused expertise for specific challenges." },
  { number: "02", title: "Architecture Assessments", desc: "Independent, objective evaluations." },
  { number: "03", title: "Transformation Programmes", desc: "End-to-end advisory and architecture leadership." },
  { number: "04", title: "Fractional Leadership", desc: "Ongoing senior expertise without a permanent hire." },
];

/**
 * Builds a row (or column) of N deep semicircle humps spanning `length`.
 * Each hump peaks at `amp` px above (or right of) the baseline with top padding.
 * Sweep-flag 1 in SVG coordinates creates an upward dome (arch) from baseline.
 */
function buildHumpPath(length: number, amp: number, count: number, vertical: boolean, topPad: number): string {
  const seg = length / count;
  const baseline = amp + topPad;

  if (vertical) {
    let d = `M ${topPad} 0`;
    for (let i = 0; i < count; i++) {
      const end = (i + 1) * seg;
      d += ` A ${amp} ${seg / 2} 0 0 1 ${topPad} ${end}`;
    }
    return d;
  }

  let d = `M 0 ${baseline}`;
  for (let i = 0; i < count; i++) {
    const end = (i + 1) * seg;
    d += ` A ${seg / 2} ${amp} 0 0 1 ${end} ${baseline}`;
  }
  return d;
}

function useElementSize() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width: Math.round(width), height: Math.round(height) });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
}

function useIsVertical(breakpoint = 700) {
  const [vertical, setVertical] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setVertical(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return vertical;
}

interface ProcessBallPathProps {
  steps?: readonly ProcessStep[];
  scrollProgress?: MotionValue<number>;
}

export default function ProcessBallPath({
  steps = DEFAULT_STEPS,
  scrollProgress: externalScrollProgress,
}: ProcessBallPathProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const lastActiveStepRef = useRef(0);
  const isManuallyTargetedRef = useRef(false);
  const manualTimeoutRef = useRef<number | null>(null);

  const [pathRef, { width, height }] = useElementSize();
  const vertical = useIsVertical(700);
  const n = steps.length;
  const [activeStep, setActiveStep] = useState(0);

  // If no external progress is passed, track container directly
  const { scrollYProgress: internalScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const rawProgress = externalScrollProgress ?? internalScrollProgress;

  // Single well-damped spring for liquid-smooth scroll following
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 75,
    damping: 22,
    mass: 0.15,
    restDelta: 0.0005,
  });

  const length = vertical ? height : width;
  const seg = length > 0 ? length / n : 240;

  // Deep, dramatic curve calculation matching the reference inspiration
  // In horizontal mode, amp is nearly half of seg width, creating deep true domes!
  const amp = vertical
    ? 30
    : Math.min(Math.max(Math.round((seg / 2) * 0.90), 80), 125);
  const topPad = 12;
  const baseline = amp + topPad;
  const containerHeight = baseline + 18;

  const d = length > 0 ? buildHumpPath(length, amp, n, vertical, topPad) : "";

  // Apply position to ball DOM directly to avoid React re-rendering every frame
  const applyBallDistance = useCallback((pct: number) => {
    if (ballRef.current) {
      ballRef.current.style.offsetDistance = `${pct}%`;
    }
  }, []);

  // Update ball position along path whenever scroll progress changes
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (isManuallyTargetedRef.current) return;
    const clamped = Math.min(Math.max(latest, 0), 1);
    applyBallDistance(clamped * 100);

    // Only trigger a React state re-render when the active step index actually changes!
    const stepIdx = Math.min(Math.floor(clamped * n), n - 1);
    if (stepIdx !== lastActiveStepRef.current) {
      lastActiveStepRef.current = stepIdx;
      setActiveStep(stepIdx);
    }
  });

  // Handle clicking on a step to glide the ball to its apex
  const handleStepClick = (idx: number) => {
    isManuallyTargetedRef.current = true;
    lastActiveStepRef.current = idx;
    setActiveStep(idx);

    // Peak of the hump is at (idx + 0.5) / n of path
    const targetPct = ((idx + 0.5) / n) * 100;
    applyBallDistance(targetPct);

    if (manualTimeoutRef.current) window.clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = window.setTimeout(() => {
      isManuallyTargetedRef.current = false;
    }, 1500);
  };

  // Initialize ball position when path d is ready
  useEffect(() => {
    if (d && ballRef.current && !ballRef.current.style.offsetDistance) {
      ballRef.current.style.offsetDistance = "0%";
    }
  }, [d]);

  return (
    <div ref={containerRef} className={vertical ? "relative pl-12 sm:pl-16 py-4" : "relative w-full"}>
      {/* ── 4 Steps Columns ── */}
      <div className={vertical ? "flex flex-col gap-12" : "grid grid-cols-4 gap-6 sm:gap-8 text-center"}>
        {steps.map((s, idx) => {
          const isActive = idx === activeStep;
          return (
            <div
              key={s.number}
              onClick={() => handleStepClick(idx)}
              className="group flex flex-col items-center cursor-pointer select-none transition-transform duration-200 hover:-translate-y-0.5"
            >
              {/* Step number */}
              <span
                className={`text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight transition-all duration-300 ${
                  isActive
                    ? "text-[#1e212b] scale-105"
                    : "text-neutral-300 hover:text-neutral-500"
                }`}
              >
                {s.number}
              </span>

              {/* Step Title */}
              <h3 className="mt-3 text-base sm:text-[17px] font-bold text-[#1e212b] tracking-tight leading-snug">
                {s.title}
              </h3>

              {/* Step Description */}
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-[210px] mx-auto">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* ── Deep Dotted Arc Path + Liquid-Smooth Ball ── */}
      <div
        ref={pathRef}
        className={
          vertical
            ? "absolute left-0 top-0 bottom-0 w-10"
            : "relative mt-6 sm:mt-8 w-full overflow-visible"
        }
        style={{ height: vertical ? "100%" : `${containerHeight}px` }}
      >
        {d && (
          <>
            <svg
              className="absolute inset-0 h-full w-full overflow-visible pointer-events-none"
              style={{ minHeight: `${containerHeight}px` }}
            >
              {/* Crisp dotted circular dots curve */}
              <path
                d={d}
                fill="none"
                stroke="rgba(30, 33, 43, 0.28)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="0.1 9"
              />
            </svg>

            {/* Glowing Orange Sphere sitting precisely on the dotted curve */}
            <div
              ref={ballRef}
              className="absolute top-0 left-0 h-5 w-5 sm:h-5.5 sm:w-5.5 rounded-full pointer-events-none transition-transform duration-100"
              style={{
                background: "radial-gradient(circle at 32% 28%, #ff9556 0%, #f65d01 65%, #c84600 100%)",
                boxShadow: "0 4px 12px rgba(246, 93, 1, 0.42), 0 1px 3px rgba(0, 0, 0, 0.18)",
                offsetPath: `path('${d}')`,
                offsetAnchor: "50% 50%",
                transform: "translate(-50%, -50%)",
                willChange: "offset-distance",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}