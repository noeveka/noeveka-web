/**
 * Landing page motion helpers - pure JavaScript animation presets.
 * Descriptive, easy-to-read animation utilities for framer-motion.
 */

/** Headings / text: fade up from y=28 */
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay, ease: "easeOut" } as const,
});

/** Cards / stats: fade-up + subtle scale from 0.97 */
export const fadeScale = (delay = 0) => ({
  initial: { opacity: 0, y: 24, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.55, delay, ease: "easeOut" } as const,
});

/** Panels sliding in from the left */
export const fadeSlideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -36 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.6, delay, ease: "easeOut" } as const,
});

/** Panels sliding in from the right */
export const fadeSlideRight = (delay = 0) => ({
  initial: { opacity: 0, x: 36 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.6, delay, ease: "easeOut" } as const,
});

// Backward-compatibility aliases for legacy code
export const fu = fadeUp;
export const fs = fadeScale;
export const fsl = fadeSlideLeft;
export const fsr = fadeSlideRight;

