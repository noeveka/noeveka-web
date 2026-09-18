/**
 * Landing page motion helpers — pure JavaScript animation presets.
 * These can't live in CSS, so they're kept here as a single utility module.
 *
 * fu  = fade-up          (headings, labels, text)
 * fs  = fade + scale-up  (cards, stat boxes)
 * fsl = fade + slide-in from left  (left-side panels)
 * fsr = fade + slide-in from right (right-side panels)
 */

/** Headings / text: fade up from y=28 */
export const fu = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay, ease: "easeOut" } as const,
});

/** Cards: fade-up + subtle scale from 0.97 */
export const fs = (delay = 0) => ({
  initial: { opacity: 0, y: 24, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.55, delay, ease: "easeOut" } as const,
});

/** Panels sliding in from the left */
export const fsl = (delay = 0) => ({
  initial: { opacity: 0, x: -36 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.6, delay, ease: "easeOut" } as const,
});

/** Panels sliding in from the right */
export const fsr = (delay = 0) => ({
  initial: { opacity: 0, x: 36 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.6, delay, ease: "easeOut" } as const,
});
