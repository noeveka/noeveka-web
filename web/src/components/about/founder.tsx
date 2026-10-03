import { motion } from "framer-motion";
import { ABOUT_CONFIG } from "@/config/about.config";
import { fadeUp } from "@/lib/motion";
import { urlFor } from "@/lib/sanity";
import { LucideIcon, lucideIconRegistry } from "../lucide-icons";

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

export interface FounderProps {
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
  return (
    <LucideIcon
      name={icon}
      fallback={lucideIconRegistry.MapPin}
      className="h-[18px] w-[18px]"
      style={{ color: "var(--color-text-primary)" }}
    />
  );
}

function renderPillarIcon(icon: string) {
  return (
    <LucideIcon
      name={icon}
      fallback={lucideIconRegistry.Layers}
      className="h-5 w-5"
      style={{ color: "var(--color-text-primary)" }}
    />
  );
}

export default function Founder({
  eyebrow = ABOUT_CONFIG.founder.eyebrow,
  name = ABOUT_CONFIG.founder.name,
  title = ABOUT_CONFIG.founder.title,
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

  const resolvedWhyFoundedParagraphs = whyFoundedParagraphs?.length
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

  const imgSrc = (photo as { asset?: unknown })?.asset
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
  const cleanEyebrow = rawEyebrow.replace(/[\/]/g, "").trim();
  const displayEyebrow = cleanEyebrow.toLowerCase().includes("founder")
    ? "FOUNDER"
    : cleanEyebrow;

  const nameParts = (name || ABOUT_CONFIG.founder.name).trim().split(" ");
  const nameFirst = nameParts[0] || "Ajay";
  const nameLast = nameParts.slice(1).join(" ") || "Kumar";

  return (
    <section
      id="founder"
      className="about-section-hero py-14 sm:py-18 lg:py-20"
    >
      <div className="lp-container lp-px mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[400px_1fr] xl:grid-cols-[430px_1fr] xl:gap-12">
          {/* ── LEFT: Founder Portrait ── */}
          <motion.div
            {...fadeUp(0.04)}
            className="relative flex min-h-[460px] w-full flex-col justify-end overflow-hidden sm:min-h-[500px] lg:h-full lg:min-h-[540px]"
            style={{ backgroundColor: "var(--color-navy-900)" }}
          >
            <img
              src={imgSrc}
              alt={photoAlt}
              className="absolute inset-0 h-full w-full object-cover object-top-left"
            />

            {isCustomPhoto && (
              <div className="relative z-10 bg-linear-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-8">
                <div
                  className="mt-3.5 h-[2px] w-8"
                  style={{ background: "var(--color-brand)" }}
                />
              </div>
            )}
          </motion.div>

          {/* ── RIGHT: Editorial Content & Badges ── */}
          <motion.div {...fadeUp(0.08)} className="flex flex-col justify-between">
            <div>
              {/* Top Subgrid: Header/Bio left, Status Badges right */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_210px] xl:grid-cols-[1fr_225px] xl:gap-8">
                {/* Left: Kicker, Name, Title, Bio */}
                <div>
                  <div className="about-eyebrow mb-2">
                    <div className="about-eyebrow-line" />
                    <span
                      className="about-eyebrow-text"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {displayEyebrow}
                    </span>
                  </div>

                  <h2
                    className="text-4xl font-extrabold tracking-tight sm:text-5xl"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {nameFirst}{" "}
                    <span style={{ color: "var(--color-brand)" }}>
                      {nameLast}
                    </span>
                  </h2>

                  <p
                    className="mt-1.5 text-[15px] font-semibold sm:text-[16px]"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {resolvedTitle}
                  </p>

                  <div
                    className="mt-4 space-y-3 text-[13.5px] leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {resolvedBio.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Right: Status Badges */}
                <div className="flex flex-col justify-center space-y-3.5">
                  {resolvedStatusBadges.map((badgeItem, badgeIndex) => (
                    <div key={badgeIndex} className="flex items-start gap-2.5">
                      <div className="about-founder-status-icon">
                        {renderStatusIcon(badgeItem.icon)}
                      </div>
                      <div className="pt-0.5">
                        <div
                          className="text-[12.5px] leading-snug font-bold"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {badgeItem.title}
                        </div>
                        {badgeItem.subtext && (
                          <div
                            className="mt-0.5 text-[11px] leading-snug whitespace-pre-line"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            {badgeItem.subtext}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Founded Section */}
              <div
                className="mt-6 border-t pt-5"
                style={{ borderColor: "var(--color-stroke-default)" }}
              >
                <div className="about-eyebrow mb-2.5">
                  <div className="about-eyebrow-line" />
                  <h3
                    className="text-xl font-bold tracking-tight"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {resolvedWhyFoundedHeading}
                  </h3>
                </div>
                <div
                  className="space-y-2.5 text-[13px] leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {resolvedWhyFoundedParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom: Focus Pillar Cards */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {resolvedFocusPillars.map((pillarItem, pillarIndex) => (
                <div key={pillarIndex} className="about-founder-pillar-card">
                  <div className="mb-2">{renderPillarIcon(pillarItem.icon)}</div>
                  <div className="about-founder-pillar-title">
                    {pillarItem.title}
                  </div>
                  <p className="about-founder-pillar-desc">{pillarItem.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
