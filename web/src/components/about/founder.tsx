import { motion } from "framer-motion";

import { ABOUT_CONFIG } from "@/config/about.config";
import { fsl, fu } from "@/lib/motion";
import { urlFor } from "@/lib/sanity";

interface FounderProps {
  name?: string;
  title?: string;
  company?: string;
  tagline?: string;
  bio?: string[];
  photo?: { asset?: unknown; alt?: string } | unknown;
  photoAlt?: string;
}

export default function Founder({
  name = ABOUT_CONFIG.founder.name,
  title = ABOUT_CONFIG.founder.title,
  company = ABOUT_CONFIG.founder.company,
  tagline = ABOUT_CONFIG.founder.tagline,
  bio = ABOUT_CONFIG.founder.bio as unknown as string[],
  photo,
  photoAlt = ABOUT_CONFIG.founder.photoAlt,
}: FounderProps) {
  const founderPhotoSrc = (photo as { asset?: unknown })?.asset
    ? urlFor(photo).width(800).url()
    : ABOUT_CONFIG.founder.photoFallbackUrl;

  return (
    <section
      className="flex justify-center border-b"
      style={{
        background: "var(--color-bg-surface)",
        borderColor: "var(--color-stroke-default)",
      }}
    >
      <div className="lp-container lp-px py-16 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Photo */}
          <motion.div {...fsl()} className="relative">
            <div
              className="relative w-full overflow-hidden rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.13)]"
              style={{
                aspectRatio: "3/4",
                background: "var(--color-bg-subtle)",
                border: "1px solid var(--color-stroke-default)",
              }}
            >
              <img
                src={founderPhotoSrc}
                alt={photoAlt}
                className="absolute inset-0 h-full w-full object-cover object-[58%_12%]"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 55%)",
                }}
              />

              {/* Floating name card */}
              <div
                className="absolute right-5 bottom-5 left-5 rounded-2xl px-5 py-4"
                style={{
                  background: "rgba(10,10,10,0.78)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <p className="text-[18px] leading-tight font-extrabold text-white">
                  {name}
                </p>
                <p className="mt-0.5 text-[12px] text-white/60">
                  {title} · {company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Bio + quote */}
          <div className="flex flex-col gap-8 lg:pt-4">
            {/* Eyebrow */}
            <motion.div {...fu()} className="flex items-center gap-3">
              <div
                className="h-px w-8"
                style={{ background: "var(--color-brand)" }}
              />
              <span
                className="text-[10px] font-bold tracking-[0.22em] uppercase"
                style={{ color: "var(--color-brand)" }}
              >
                Founder & CEO
              </span>
            </motion.div>

            {/* Tagline quote */}
            <motion.blockquote
              {...fu(0.06)}
              className="border-l-4 pl-5 text-[1.35rem] leading-snug font-bold sm:text-[1.55rem]"
              style={{
                color: "var(--color-text-primary)",
                borderColor: "var(--color-brand)",
              }}
            >
              {tagline}
            </motion.blockquote>

            {/* Bio paragraphs */}
            <motion.div {...fu(0.12)} className="flex flex-col gap-4">
              {bio.map((p: string, i: number) => (
                <p
                  key={i}
                  className="text-[14.5px] leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {p}
                </p>
              ))}
            </motion.div>

            {/* Signature */}
            <motion.div
              {...fu(0.18)}
              className="flex items-center gap-4 border-t pt-6"
              style={{ borderColor: "var(--color-stroke-default)" }}
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-[18px] font-black text-white"
                style={{ background: "var(--color-text-primary)" }}
              >
                AK
              </div>
              <div>
                <p
                  className="text-[15px] font-extrabold italic"
                  style={{
                    color: "var(--color-text-primary)",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {name}
                </p>
                <p
                  className="text-[12px]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {title}, {company}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
