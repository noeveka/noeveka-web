import { motion } from "framer-motion";

import { LucideIcon } from "@/components/lucide-icons";
import { ABOUT_CONFIG } from "@/config/about.config";
import { fs, fsl, fu } from "@/lib/motion";
import { urlFor } from "@/lib/sanity";

interface FounderProps {
  name?: string;
  initials?: string;
  title?: string;
  company?: string;
  tagline?: string;
  bio?: string[];
  photo?: { asset?: unknown; alt?: string } | unknown;
  photoAlt?: string;
  credentials?: Array<{ label: string; value: string }>;
}

const DEFAULT_CREDENTIALS = ABOUT_CONFIG.founder.credentials as unknown as Array<{ label: string; value: string }>;

export default function Founder({
  name = ABOUT_CONFIG.founder.name,
  initials = ABOUT_CONFIG.founder.initials,
  title = ABOUT_CONFIG.founder.title,
  company = ABOUT_CONFIG.founder.company,
  tagline = ABOUT_CONFIG.founder.tagline,
  bio = ABOUT_CONFIG.founder.bio as unknown as string[],
  photo,
  photoAlt = ABOUT_CONFIG.founder.photoAlt,
  credentials,
}: FounderProps) {
  const resolvedCredentials = credentials?.length ? credentials : DEFAULT_CREDENTIALS;
  const founderPhotoSrc = (photo as { asset?: unknown })?.asset
    ? urlFor(photo).width(900).url()
    : ABOUT_CONFIG.founder.photoFallbackUrl;

  return (
    <section
      className="flex justify-center overflow-hidden border-b"
      style={{
        background: "#ffffff",
        borderColor: "var(--color-stroke-default)",
      }}
    >
      <div className="lp-container lp-px py-16 lg:py-24">
        {/* Two-column editorial grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[420px_1fr] lg:gap-16">
          {/* ── LEFT: Photo + floating stats ── */}
          <motion.div {...fsl(0.04)} className="relative">
            {/* Photo wrapper */}
            <div
              className="relative overflow-hidden rounded-3xl shadow-[0_32px_72px_rgba(0,0,0,0.16)]"
              style={{
                aspectRatio: "3/4",
                border: "1px solid rgba(0,0,0,0.07)",
                background: "#f5f4f2",
              }}
            >
              <img
                src={founderPhotoSrc}
                alt={photoAlt}
                className="absolute inset-0 h-full w-full object-cover object-[58%_12%]"
              />

              {/* Bottom fade overlay */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,10,10,0.65) 0%, rgba(0,0,0,0.05) 45%, transparent 65%)",
                }}
              />
            </div>
          </motion.div>

          {/* ── RIGHT: Editorial content ── */}
          <div className="flex flex-col gap-8 lg:pt-2">
            {/* Name + title badge */}
            <motion.div {...fu(0.06)}>
              <h2
                className="mb-3 text-[2.4rem] leading-none font-extrabold tracking-tight sm:text-[3rem] lg:text-[3.2rem]"
                style={{ color: "var(--color-text-primary)" }}
              >
                {name}
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-bold"
                  style={{
                    background: "rgba(246,93,1,0.09)",
                    border: "1.5px solid rgba(246,93,1,0.22)",
                    color: "var(--color-brand)",
                  }}
                >
                  <div
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--color-brand)" }}
                  />
                  {title}
                </span>
                <span
                  className="text-[12px]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {company}
                </span>
              </div>
            </motion.div>

            {/* Divider */}
            <div
              className="h-px w-full"
              style={{ background: "var(--color-stroke-default)" }}
            />

            {/* Quote */}
            <motion.div {...fu(0.1)} className="relative pl-6">
              {/* Decorative big open-quote */}
              <span
                className="pointer-events-none absolute -top-4 -left-1 leading-none font-black select-none"
                style={{
                  fontSize: "5rem",
                  color: "rgba(246,93,1,0.12)",
                  fontFamily: "Georgia, serif",
                }}
              >
                "
              </span>
              <blockquote
                className="relative text-[1.25rem] leading-snug font-bold sm:text-[1.45rem]"
                style={{
                  color: "var(--color-text-primary)",
                  borderLeft: "3px solid var(--color-brand)",
                  paddingLeft: "1.25rem",
                  fontStyle: "italic",
                }}
              >
                {/* Strip surrounding quotes if already in config */}
                {tagline.replace(/^["']|["']$/g, "")}
              </blockquote>
            </motion.div>

            {/* Bio — just first paragraph, keep it tight */}
            <motion.p
              {...fu(0.14)}
              className="max-w-[520px] text-[14.5px] leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {bio[0]}
            </motion.p>

            {/* Divider */}
            <div
              className="h-px w-full"
              style={{ background: "var(--color-stroke-default)" }}
            />

            {/* Credentials — 2×2 grid */}
            <motion.div
              {...fs(0.18)}
              className="grid grid-cols-2 gap-3 sm:grid-cols-2"
            >
              {resolvedCredentials.map(({ label, value }) => (
                <div
                  key={label}
                  className="group flex flex-col gap-1 rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
                  style={{
                    background: "#f7f6f4",
                    border: "1px solid var(--color-stroke-default)",
                  }}
                >
                  <span
                    className="text-[9.5px] font-bold tracking-[0.18em] uppercase"
                    style={{ color: "var(--color-brand)" }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-[14px] leading-tight font-extrabold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Signature row */}
            <motion.div
              {...fu(0.22)}
              className="flex items-center gap-4 border-t pt-6"
              style={{ borderColor: "var(--color-stroke-default)" }}
            >
              {/* Initials avatar */}
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[15px] font-black text-white"
                style={{
                  background: "var(--color-text-primary)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.14)",
                }}
              >
                {initials}
              </div>
              <div className="flex-1">
                <p
                  className="text-[14px] font-extrabold"
                  style={{
                    color: "var(--color-text-primary)",
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                  }}
                >
                  {name}
                </p>
                <p
                  className="text-[11.5px]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {title}, {company}
                </p>
              </div>
              {/* Verified badge */}
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{
                  background: "rgba(246,93,1,0.10)",
                  border: "1.5px solid rgba(246,93,1,0.25)",
                }}
              >
                <LucideIcon
                  name="badge-check"
                  className="h-4 w-4"
                  style={{ color: "var(--color-brand)" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
