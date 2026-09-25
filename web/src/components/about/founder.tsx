import { Link } from "react-router";
import { motion } from "framer-motion";

import { LucideIcon } from "@/components/lucide-icons";
import LinkedInSvg from "@/components/svgs/linkedin-svg";
import { ABOUT_CONFIG } from "@/config/about.config";
import { fu } from "@/lib/motion";
import { urlFor } from "@/lib/sanity";

interface FounderProps {
  eyebrow?: string;
  heading?: string;
  name?: string;
  initials?: string;
  title?: string;
  company?: string;
  tagline?: string;
  bio?: readonly string[];
  photo?: { asset?: unknown; alt?: string } | string;
  photoAlt?: string;
  credentials?: readonly { label: string; value: string }[];
  whyFoundedHeading?: string;
  whyFoundedText?: string;
  linkedinUrl?: string;
  email?: string;
  contactLink?: string;
}

export default function Founder({
  eyebrow = ABOUT_CONFIG.founder.eyebrow,
  heading = ABOUT_CONFIG.founder.heading,
  name = ABOUT_CONFIG.founder.name,
  tagline = ABOUT_CONFIG.founder.tagline,
  bio = ABOUT_CONFIG.founder.bio,
  photo = ABOUT_CONFIG.founder.photoFallbackUrl,
  photoAlt = ABOUT_CONFIG.founder.photoAlt,
  credentials = ABOUT_CONFIG.founder.credentials,
  whyFoundedHeading = ABOUT_CONFIG.founder.whyFoundedHeading,
  whyFoundedText = ABOUT_CONFIG.founder.whyFoundedText,
  linkedinUrl = ABOUT_CONFIG.founder.linkedinUrl,
  email = ABOUT_CONFIG.founder.email,
  contactLink = ABOUT_CONFIG.founder.contactLink,
}: FounderProps) {
  const resolvedCredentials = credentials?.length
    ? credentials
    : ABOUT_CONFIG.founder.credentials;

  const resolvedBio = bio?.length ? bio : ABOUT_CONFIG.founder.bio;

  const imgSrc =
    typeof photo === "string"
      ? photo
      : (photo as { asset?: unknown })?.asset
      ? urlFor(photo).width(800).quality(90).url()
      : ABOUT_CONFIG.founder.photoFallbackUrl;

  const cleanTagline = (tagline || ABOUT_CONFIG.founder.tagline)
    .replace(/^["']|["']$/g, "")
    .trim();

  return (
    <section
      id="founder"
      className="relative flex justify-center overflow-hidden border-t border-b border-neutral-200/60 bg-[#faf9f8] py-20 lg:py-28"
    >
      <div className="lp-container lp-px mx-auto max-w-6xl">
        {/* Top Header Row matching the reference layout */}
        <div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-baseline sm:mb-12">
          {eyebrow && (
            <div className="text-[13px] font-mono font-medium tracking-wider text-neutral-500 uppercase">
              {eyebrow}
            </div>
          )}
          {heading && (
            <h2 className="text-3xl font-extrabold tracking-tight text-[#161922] sm:text-4xl">
              {heading}
            </h2>
          )}
        </div>

        {/* Two-Column Clean Grid */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[380px_1fr] xl:grid-cols-[410px_1fr] lg:gap-10">
          {/* ── LEFT: Clean Portrait Card ── */}
          <motion.div
            {...fu(0.04)}
            className="relative flex min-h-[480px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200/80 bg-[#161922] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          >
            {/* Portrait Image */}
            <img
              src={imgSrc}
              alt={photoAlt}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Scrim Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

            {/* Top Logo / Icon Mark */}
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md">
              <LucideIcon
                name="sparkles"
                className="h-4.5 w-4.5 text-[#f65d01]"
              />
            </div>

            {/* Bottom Overlay Info */}
            <div className="relative z-10 mt-auto flex flex-col items-start gap-3">
              <p className="text-xl font-bold tracking-tight text-white sm:text-[22px] leading-snug drop-shadow-sm">
                &ldquo;{cleanTagline}&rdquo;
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT: Clean Content Card ── */}
          <motion.div
            {...fu(0.08)}
            className="relative flex flex-col justify-between rounded-3xl border border-neutral-200/80 bg-white p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
          >
            <div>
              {/* Founder Name */}
              <h3 className="text-2xl font-bold tracking-tight text-[#161922] sm:text-3xl">
                {name}
              </h3>

              {/* Bio Paragraphs */}
              <div className="mt-4 space-y-3.5 text-[15px] leading-relaxed text-[#4b5563] sm:text-[15.5px]">
                {resolvedBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Social / Direct Connect Icons */}
              <div className="mt-6 flex items-center gap-3">
                {linkedinUrl && (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#161922] text-white shadow-xs transition-all duration-200 hover:bg-[#f65d01] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <LinkedInSvg />
                  </a>
                )}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    aria-label="Email Noeveka"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#161922] text-white shadow-xs transition-all duration-200 hover:bg-[#f65d01] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <LucideIcon name="mail" className="h-4 w-4" />
                  </a>
                )}
                {contactLink && (
                  <Link
                    to={contactLink}
                    aria-label="Book a strategy call"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#161922] text-white shadow-xs transition-all duration-200 hover:bg-[#f65d01] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <LucideIcon name="calendar" className="h-4 w-4" />
                  </Link>
                )}
              </div>

              {/* "Why He Founded Noeveka?" block */}
              {whyFoundedText && (
                <div className="mt-8 border-t border-neutral-100 pt-6">
                  {whyFoundedHeading && (
                    <h4 className="text-[17px] font-bold tracking-tight text-[#161922]">
                      {whyFoundedHeading}
                    </h4>
                  )}
                  <p className="mt-2 text-[14.5px] leading-relaxed text-[#555d6e]">
                    {whyFoundedText}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Credentials Pill Strip */}
            <div className="mt-8 flex flex-wrap items-center gap-2.5 border-t border-neutral-100 pt-6">
              {resolvedCredentials.map(({ label, value }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200/90 bg-[#faf9f8] px-3.5 py-1.5 text-[12px] text-neutral-700 shadow-xs"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f65d01]" />
                  <span className="font-semibold text-[#161922]">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
