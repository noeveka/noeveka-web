import { motion } from "framer-motion";
import { ABOUT_CONFIG } from "@/config/about.config";
import { urlFor } from "@/lib/sanity";

export interface NarrativeTopBlock {
  eyebrow?: string;
  headingLine1?: string;
  headingLine2?: string;
  headingLine3?: string;
  headingHighlight?: string;
  paragraph1?: string;
  paragraph2?: string;
  punchline?: string;
}

export interface NarrativeBottomBlock {
  eyebrowPart1?: string;
  eyebrowHighlight?: string;
  headingPlain?: string;
  headingHighlight?: string;
  paragraph?: string;
  punchline?: string;
}

export interface AboutNarrativeProps {
  topBlock?: NarrativeTopBlock;
  image?: { asset?: unknown; alt?: string } | unknown;
  bottomBlock?: NarrativeBottomBlock;
}

export default function AboutNarrative({
  topBlock,
  image,
  bottomBlock,
}: AboutNarrativeProps) {
  const top = {
    ...ABOUT_CONFIG.narrativeSection.topBlock,
    ...topBlock,
  };

  const bottom = {
    ...ABOUT_CONFIG.narrativeSection.bottomBlock,
    ...bottomBlock,
  };

  // Resolve middle image banner
  const imageSrc = (image as { asset?: unknown })?.asset
    ? urlFor(image).width(1800).quality(90).url()
    : ABOUT_CONFIG.narrativeSection.image.url;

  const imageAlt =
    (image as { alt?: string })?.alt ?? ABOUT_CONFIG.narrativeSection.image.alt;

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 lg:py-32">
      <div className="lp-container lp-px mx-auto">
        {/* ── UPPER BLOCK: The Frustration We Saw ── */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Eyebrow + Huge Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            {top.eyebrow && (
              <p className="mb-4 text-xs font-bold tracking-widest text-neutral-500 uppercase">
                {top.eyebrow}
              </p>
            )}

            <h2 className="text-3xl font-extrabold tracking-tight text-[#1e212b] sm:text-4xl lg:text-[46px] leading-[1.12]">
              {top.headingLine1}
              <br />
              {top.headingLine2}
              <br />
              {top.headingLine3}{" "}
              <span className="text-[#1e212b] font-black underline decoration-[#f65d01]/30 decoration-4 underline-offset-4">
                {top.headingHighlight}
              </span>
            </h2>
          </motion.div>

          {/* Right Column: Narrative Copy & Bold Callout */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="flex flex-col justify-between space-y-6 text-[15px] leading-relaxed text-neutral-600 sm:text-base lg:col-span-5 lg:pt-8"
          >
            {top.paragraph1 && <p>{top.paragraph1}</p>}
            {top.paragraph2 && <p>{top.paragraph2}</p>}
            {top.punchline && (
              <p className="pt-2 text-base font-bold text-[#1e212b] sm:text-lg">
                {top.punchline}
              </p>
            )}
          </motion.div>
        </div>

        {/* ── MIDDLE MEDIA BANNER: Editorial Workspace Desk Photo ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative my-16 overflow-hidden rounded-[24px] sm:rounded-[32px] border border-neutral-200/90 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.12)] lg:my-24"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 sm:aspect-[21/9] lg:aspect-[2.4/1]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              loading="lazy"
            />
            {/* Subtle inner shadow / border polish */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]" />
          </div>
        </motion.div>

        {/* ── LOWER BLOCK: The Moment We Realised It ── */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Eyebrow + Huge Two-Tone Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            {(bottom.eyebrowPart1 || bottom.eyebrowHighlight) && (
              <p className="mb-4 text-xs font-bold tracking-widest uppercase">
                <span className="text-[#f65d01]">{bottom.eyebrowPart1}</span>{" "}
                <span className="text-[#f65d01]">{bottom.eyebrowHighlight}</span>
              </p>
            )}

            <h2 className="text-3xl font-extrabold tracking-tight text-[#1e212b] sm:text-4xl lg:text-[46px] leading-[1.12]">
              {bottom.headingPlain}{" "}
              <span className="block text-[#f65d01]">
                {bottom.headingHighlight}
              </span>
            </h2>
          </motion.div>

          {/* Right Column: Solution Narrative & Bold Mission Punchline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="flex flex-col justify-between space-y-6 text-[15px] leading-relaxed text-neutral-600 sm:text-base lg:col-span-5 lg:pt-8"
          >
            {bottom.paragraph && <p>{bottom.paragraph}</p>}
            {bottom.punchline && (
              <p className="pt-2 text-base font-bold text-[#1e212b] sm:text-lg">
                {bottom.punchline}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
