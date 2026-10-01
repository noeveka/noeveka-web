import { motion } from "framer-motion";
import {
  BarChart3,
  Globe,
  Handshake,
  Laptop,
  Layers,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

import { ABOUT_CONFIG } from "@/config/about.config";
import { fu } from "@/lib/motion";
import { urlFor } from "@/lib/sanity";

export interface StatusBadgeItem {
  icon: string;
  title: string;
  subtext?: string;
}

export interface FocusPillarItem {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

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
  whyFoundedParagraphs?: readonly string[];
  statusBadges?: readonly StatusBadgeItem[];
  focusPillars?: readonly FocusPillarItem[];
  linkedinUrl?: string;
  email?: string;
  contactLink?: string;
}

function renderStatusIcon(icon: string) {
  const iconClass = "h-[18px] w-[18px] text-[#161922]";
  switch (icon) {
    case "map-pin":
      return <MapPin className={iconClass} />;
    case "globe":
      return <Globe className={iconClass} />;
    case "laptop":
      return <Laptop className={iconClass} />;
    case "handshake":
      return <Handshake className={iconClass} />;
    default:
      return <MapPin className={iconClass} />;
  }
}

function renderPillarIcon(icon: string) {
  const iconClass = "h-5 w-5 text-[#161922]";
  switch (icon) {
    case "layers-3":
    case "layers":
      return <Layers className={iconClass} />;
    case "bar-chart-3":
      return <BarChart3 className={iconClass} />;
    case "shield-check":
      return <ShieldCheck className={iconClass} />;
    case "users":
      return <Users className={iconClass} />;
    default:
      return <Layers className={iconClass} />;
  }
}

export default function Founder({
  eyebrow = ABOUT_CONFIG.founder.eyebrow,
  name = ABOUT_CONFIG.founder.name,
  title = ABOUT_CONFIG.founder.title,
  // tagline = ABOUT_CONFIG.founder.tagline,
  bio = ABOUT_CONFIG.founder.bio,
  photo = ABOUT_CONFIG.founder.photoFallbackUrl,
  photoAlt = ABOUT_CONFIG.founder.photoAlt,
  whyFoundedHeading = ABOUT_CONFIG.founder.whyFoundedHeading,
  whyFoundedText = ABOUT_CONFIG.founder.whyFoundedText,
  whyFoundedParagraphs = ABOUT_CONFIG.founder.whyFoundedParagraphs,
  statusBadges = ABOUT_CONFIG.founder.statusBadges,
  focusPillars = ABOUT_CONFIG.founder.focusPillars,
}: FounderProps) {
  const resolvedTitle =
    title && title !== "CEO & Founder" ? title : ABOUT_CONFIG.founder.title;

  const resolvedBio =
    bio?.length && !bio[0]?.includes("Principal Data & AI Architect")
      ? bio
      : ABOUT_CONFIG.founder.bio;

  const resolvedWhyFoundedHeading =
    whyFoundedHeading && whyFoundedHeading.includes("NOE")
      ? whyFoundedHeading
      : ABOUT_CONFIG.founder.whyFoundedHeading;

  const resolvedWhyFoundedParagraphs =
    whyFoundedParagraphs?.length
      ? whyFoundedParagraphs
      : whyFoundedText && !whyFoundedText.includes("To give enterprise")
      ? whyFoundedText.split("\n\n").filter(Boolean)
      : ABOUT_CONFIG.founder.whyFoundedParagraphs;

  const resolvedStatusBadges: readonly StatusBadgeItem[] = statusBadges?.length
    ? statusBadges
    : ABOUT_CONFIG.founder.statusBadges;

  const resolvedFocusPillars: readonly FocusPillarItem[] = focusPillars?.length
    ? focusPillars
    : ABOUT_CONFIG.founder.focusPillars;

  const imgSrc =
    (photo as { asset?: unknown })?.asset
      ? urlFor(photo).width(900).quality(95).url()
      : typeof photo === "string" && photo
      ? photo
      : ABOUT_CONFIG.founder.photoFallbackUrl;

  const hasEmbeddedTypography =
    typeof imgSrc === "string" &&
    (imgSrc.includes("ajay_image_for_founder_section_about_page") ||
      imgSrc.includes("founder_editorial_desk") ||
      imgSrc === ABOUT_CONFIG.founder.photoFallbackUrl);

  const isCustomPhoto =
    !hasEmbeddedTypography &&
    (Boolean((photo as { asset?: unknown })?.asset) ||
      (typeof photo === "string" && photo !== ""));

  const rawEyebrow = eyebrow || ABOUT_CONFIG.founder.eyebrow;
  const cleanEyebrow = rawEyebrow.replace(/[\\/]/g, "").trim();
  const displayEyebrow = cleanEyebrow.toLowerCase().includes("founder")
    ? "FOUNDER"
    : cleanEyebrow;

  const nameParts = (name || ABOUT_CONFIG.founder.name).trim().split(" ");
  const nameFirst = nameParts[0] || "Ajay";
  const nameLast = nameParts.slice(1).join(" ") || "Kumar";

  return (
    <section
      id="founder"
      className="relative flex justify-center overflow-hidden bg-white py-14 sm:py-18 lg:py-20"
    >
      <div className="lp-container lp-px mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[400px_1fr] xl:grid-cols-[430px_1fr] xl:gap-12">
          {/* ── LEFT: Founder Portrait Image (Seamless straight edge, no boxy rounded corners) ── */}
          <motion.div
            {...fu(0.04)}
            className="relative flex w-full flex-col justify-end overflow-hidden bg-neutral-900 min-h-[460px] sm:min-h-[500px] lg:h-full lg:min-h-[540px]"
          >
            <img
              src={imgSrc}
              alt={photoAlt}
              className="absolute inset-0 h-full w-full object-cover object-top-left"
            />

            {/* If custom photo provided from Sanity, overlay quote typography */}
            {isCustomPhoto && (
              <div className="relative z-10 bg-linear-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-8">
                {/* <span className="text-3xl font-serif font-black leading-none text-[#f65d01]">
                  “
                </span>
                <p className="mt-2 text-lg font-bold leading-snug tracking-tight text-white sm:text-xl">
                  {tagline ? (
                    tagline
                  ) : (
                    <>
                      Technology changes.
                      <br />
                      Good architecture creates{" "}
                      <span className="text-[#f65d01]">lasting advantage.</span>
                    </>
                  )}
                </p> */}
                <div className="mt-3.5 h-[2px] w-8 bg-[#f65d01]" />
              </div>
            )}
          </motion.div>

          {/* ── RIGHT: Editorial Content & Badges ── */}
          <motion.div
            {...fu(0.08)}
            className="flex flex-col justify-between"
          >
            <div>
              {/* Top Subgrid: Header/Bio on left, Status Badges on right */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_210px] xl:grid-cols-[1fr_225px] xl:gap-8">
                {/* Left side of top: Kicker, Name, Title, Bio */}
                <div>
                  {/* Eyebrow Kicker */}
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-[2px] w-5 bg-[#f65d01]" />
                    <span className="text-[12px] font-bold tracking-[0.14em] text-[#6b7280] uppercase">
                      {displayEyebrow}
                    </span>
                  </div>

                  {/* Name with Orange Surname */}
                  <h2 className="text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl">
                    {nameFirst}{" "}
                    <span className="text-[#f65d01]">{nameLast}</span>
                  </h2>

                  {/* Subtitle / Role */}
                  <p className="mt-1.5 text-[15px] font-semibold text-[#4b5563] sm:text-[16px]">
                    {resolvedTitle}
                  </p>

                  {/* Bio Paragraphs */}
                  <div className="mt-4 space-y-3 text-[13.5px] leading-relaxed text-[#4b5563]">
                    {resolvedBio.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Right side of top: 4 Vertical Status Badges */}
                <div className="flex flex-col justify-center space-y-3.5">
                  {resolvedStatusBadges.map((badge, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200/80 bg-neutral-100/70">
                        {renderStatusIcon(badge.icon)}
                      </div>
                      <div className="pt-0.5">
                        <div className="text-[12.5px] font-bold leading-snug text-[#111827]">
                          {badge.title}
                        </div>
                        {badge.subtext && (
                          <div className="mt-0.5 whitespace-pre-line text-[11px] leading-snug text-[#6b7280]">
                            {badge.subtext}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle Section: "Why He Founded NOE·V·EKA?" */}
              <div className="mt-6 border-t border-neutral-100 pt-5">
                <div className="mb-2.5 flex items-center gap-2">
                  <div className="h-[2px] w-5 bg-[#f65d01]" />
                  <h3 className="text-xl font-bold tracking-tight text-[#111827]">
                    {resolvedWhyFoundedHeading}
                  </h3>
                </div>
                <div className="space-y-2.5 text-[13px] leading-relaxed text-[#4b5563]">
                  {resolvedWhyFoundedParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom 4 Capability / Focus Cards (Clean Monochrome) */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {resolvedFocusPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-start rounded-2xl border border-neutral-200/80 bg-[#faf9f8] p-3.5 transition-all duration-200 hover:border-neutral-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-xs"
                >
                  <div className="mb-2">
                    {renderPillarIcon(pillar.icon)}
                  </div>
                  <div className="text-[12.5px] font-bold leading-snug text-[#111827]">
                    {pillar.title}
                  </div>
                  <p className="mt-1 text-[11px] leading-snug text-[#6b7280]">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

