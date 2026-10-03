import { motion } from "framer-motion";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import { fadeUp } from "@/lib/motion";
import { urlFor } from "@/lib/sanity";
import { WHO_WE_ARE_CONFIG } from "@/config/landing/who-we-are.config";

export interface WhoWeAreProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  ctaText?: string;
  ctaLink?: string;
  founderName?: string;
  founderRole?: string;
  founderPhoto?: { asset?: unknown; alt?: string };
  statBadgeValue?: string;
  statBadgeLabel?: string;
  ratingValue?: string;
  ratingLabel?: string;
  skillsHeading?: string;
  skills?: string[];
}

export default function WhoWeAre({
  eyebrow = WHO_WE_ARE_CONFIG.eyebrow,
  heading = WHO_WE_ARE_CONFIG.heading,
  body = WHO_WE_ARE_CONFIG.body,
  ctaText = WHO_WE_ARE_CONFIG.ctaText,
  ctaLink = WHO_WE_ARE_CONFIG.ctaLink,
  founderName = WHO_WE_ARE_CONFIG.founderName,
  founderRole = WHO_WE_ARE_CONFIG.founderRole,
  founderPhoto,
  statBadgeValue = WHO_WE_ARE_CONFIG.statBadgeValue,
  statBadgeLabel = WHO_WE_ARE_CONFIG.statBadgeLabel,
  ratingValue = WHO_WE_ARE_CONFIG.ratingValue,
  ratingLabel = WHO_WE_ARE_CONFIG.ratingLabel,
  skillsHeading = WHO_WE_ARE_CONFIG.skillsHeading,
  skills = [...WHO_WE_ARE_CONFIG.skills],
}: WhoWeAreProps) {
  const founderPhotoSource = founderPhoto?.asset
    ? urlFor(founderPhoto).width(800).url()
    : WHO_WE_ARE_CONFIG.founderPhotoFallbackUrl;
  const founderPhotoAltText = founderPhoto?.alt ?? WHO_WE_ARE_CONFIG.founderPhotoAlt;

  return (
    <section
      id="who-we-are"
      className="lp-section lp-section-surface lp-section-border-t"
    >
      <div className="lp-container lp-px py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT - Founder Image */}
          <motion.div {...fadeUp()} className="relative">
            <div className="relative w-full overflow-hidden rounded-3xl border border-black/5 bg-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.12)] aspect-4/3 sm:aspect-14/10 lg:h-[430px]">
              <img
                src={founderPhotoSource}
                alt={founderPhotoAltText}
                className="absolute inset-0 h-full w-full object-cover object-[58%_25%]"
              />
              <div className="lp-image-overlay-bottom" />
            </div>
          </motion.div>

          {/* RIGHT - Copy */}
          <div>
            <motion.p {...fadeUp()} className="lp-eyebrow mb-3">
              <span>✳</span> {eyebrow}
            </motion.p>
            <motion.h2
              {...fadeUp(0.07)}
              className="lp-section-heading mb-5"
            >
              {heading}
            </motion.h2>
            <motion.p
              {...fadeUp(0.12)}
              className="lp-section-subtext mb-8 text-text-secondary"
            >
              {body}
            </motion.p>

            {/* CTA + Founder credit */}
            <motion.div {...fadeUp(0.17)} className="mb-8 flex flex-wrap items-center gap-5">
              {ctaLink ? (
                <a href={ctaLink} className="btn-hero">
                  {ctaText} <LucideIcon name={lucideIconRegistry.ArrowRight} className="h-4 w-4" />
                </a>
              ) : (
                <button type="button" className="btn-hero">
                  {ctaText} <LucideIcon name={lucideIconRegistry.ArrowRight} className="h-4 w-4" />
                </button>
              )}
              <div className="flex flex-col gap-0.5">
                <p className="text-[13px] font-bold text-text-primary">{founderName}</p>
                <p className="text-[11px] text-text-muted">{founderRole}</p>
              </div>
            </motion.div>

            {/* Rating + Skills mini-cards */}
            <motion.div {...fadeUp(0.22)} className="flex flex-col gap-4 sm:flex-row">
              {ratingValue ? (
                <div className="card-compact flex-1">
                  <div className="mb-1.5 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((starNumber) => (
                      <LucideIcon
                        key={starNumber}
                        name={lucideIconRegistry.Star}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-[22px] font-extrabold text-text-primary">
                    {ratingValue}<span className="text-sm font-semibold text-text-muted">/5.0</span>
                  </p>
                  <p className="text-[11px] text-text-muted">{ratingLabel}</p>
                </div>
              ) : (
                <div className="card-compact flex flex-1 flex-col justify-center">
                  <p className="mb-1.5 text-[26px] font-black leading-none text-brand">
                    {statBadgeValue}
                  </p>
                  <p className="text-[12px] font-bold text-text-primary">
                    {statBadgeLabel}
                  </p>
                </div>
              )}
              <div className="card-compact flex-1">
                <p className="mb-2.5 text-[11px] font-bold text-text-primary">{skillsHeading}</p>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span key={skill} className="chip text-[10.5px]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
