import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { fu, fs } from "@/lib/motion";
import { getTestimonials } from "@/lib/sanity";
import { TESTIMONIALS_CONFIG } from "@/config/landing/testimonials.config";

interface Testimonial {
  _id: string;
  company: string;
  abbr: string;
  quote: string;
  authorName: string;
  authorRole: string;
  rating: number;
}

interface TestimonialsProps {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
}

function getBadgeIcon(company: string): string {
  const lower = (company || "").toLowerCase();
  if (lower.includes("healthsync") || (lower.includes("health") && lower.includes("sync"))) {
    return "activity";
  }
  if (lower.includes("group") || lower.includes("retail") || lower.includes("team")) {
    return "users";
  }
  if (lower.includes("health")) return "users";
  return "trending-up";
}

export default function Testimonials({
  eyebrow = TESTIMONIALS_CONFIG.eyebrow,
  heading = TESTIMONIALS_CONFIG.heading,
  subtext = TESTIMONIALS_CONFIG.subtext,
}: TestimonialsProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    getTestimonials().then(setTestimonials).catch(console.error);
  }, []);

  const displayTestimonials: Testimonial[] = testimonials.length
    ? testimonials
    : [...TESTIMONIALS_CONFIG.testimonials];

  // Helper to highlight "satisfied" in heading
  const renderHeading = (text: string) => {
    if (text.includes("satisfied")) {
      const parts = text.split("satisfied");
      return (
        <>
          {parts[0]}
          <span className="text-brand">satisfied</span>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <>
      {/* ── Testimonials section ── */}
      <section className="lp-section lp-section-subtle">
        <div className="lp-container lp-px py-20 lg:py-24">
          {/* Section Header */}
          <div className="mb-12 text-center sm:mb-16">
            <motion.div {...fu()} className="mb-3 inline-flex items-center gap-2">
              <span className="text-sm font-semibold text-brand select-none">-</span>
              <span className="lp-eyebrow">{eyebrow}</span>
            </motion.div>

            <motion.h2 {...fu(0.07)} className="lp-section-heading mb-4">
              {renderHeading(heading)}
            </motion.h2>

            <motion.p {...fu(0.13)} className="lp-section-subtext mx-auto max-w-lg">
              {subtext}
            </motion.p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {displayTestimonials.map(
              ({ _id, company, abbr, quote, authorName, authorRole, rating }, i) => {
                const cleanedQuote = quote.replace(/^[""'\s]+|[""'\s]+$/g, "");
                const initials =
                  abbr ||
                  authorName
                    .split(" ")
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase();

                const badgeIcon = getBadgeIcon(company);
                const isLastAndOdd =
                  displayTestimonials.length % 2 === 1 &&
                  i === displayTestimonials.length - 1;

                return (
                  <motion.div
                    key={_id}
                    {...fs(0.06 + i * 0.1)}
                    className={`testimonial-card ${isLastAndOdd
                        ? "md:col-span-2 md:mx-auto md:w-full md:max-w-xl lg:col-span-1 lg:max-w-none"
                        : ""
                      }`}
                  >
                    {/* Top Row: Quote Badge & Category Tag */}
                    <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
                      <div className="testimonial-card-icon-wrap">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-brand h-3.5 w-3.5 sm:h-4 sm:w-4"
                        >
                          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                        </svg>
                      </div>

                      <div className="testimonial-card-company-pill shrink-0">
                        <LucideIcon
                          name={badgeIcon}
                          className="h-3.5 w-3.5 shrink-0 text-brand"
                        />
                        <span>{company}</span>
                      </div>
                    </div>

                    {/* Middle: Testimonial Quote */}
                    <p className="testimonial-card-quote">
                      &ldquo;{cleanedQuote}&rdquo;
                    </p>

                    {/* Bottom Row: Author details & Stars */}
                    <div className="testimonial-card-divider flex flex-wrap items-center justify-between gap-3 sm:flex-nowrap">
                      <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
                        <div className="testimonial-avatar">
                          {initials}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[13.5px] font-bold leading-tight text-text-primary sm:text-[14px]">
                            {authorName}
                          </p>
                          <p className="text-[11.5px] leading-tight text-text-muted mt-0.5">
                            {authorRole}
                          </p>
                        </div>
                      </div>

                      <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
                        {Array.from({ length: 5 }).map((_, starIdx) => (
                          <LucideIcon
                            key={starIdx}
                            name="star"
                            className="h-3 w-3 fill-current text-brand sm:h-3.5 sm:w-3.5"
                          />
                        ))}
                        <span className="ml-1 text-[11.5px] font-bold text-brand sm:text-[12.5px]">
                          {(rating || 5).toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
}
