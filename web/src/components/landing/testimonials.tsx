import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { fu, fs } from "@/lib/motion";
import { getTestimonials } from "@/lib/sanity";
import { TESTIMONIALS_CONFIG } from "@/config/landing/testimonials.config";
import TrustCompanyLogoBar from "./trust-company-logo-bar";

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
  if (lower.includes("health")) {
    return "users";
  }
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
          <span style={{ color: "var(--color-brand)" }}>satisfied</span>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <>
      {/* ── Trust logo bar ── */}
      <TrustCompanyLogoBar />

      {/* ── Testimonials section ── */}
      <section className="flex justify-center bg-[#fafafa]">
        <div className="lp-container lp-px py-20 lg:py-24">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              {...fu()}
              className="inline-flex items-center gap-2 mb-3"
            >
              <span
                className="text-sm font-semibold select-none"
                style={{ color: "var(--color-brand)" }}
              >
                —
              </span>
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: "var(--color-brand)" }}
              >
                {eyebrow}
              </span>
            </motion.div>

            <motion.h2
              {...fu(0.07)}
              className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#0f172a] mb-4"
            >
              {renderHeading(heading)}
            </motion.h2>

            <motion.p
              {...fu(0.13)}
              className="text-[15px] sm:text-[16px] max-w-lg mx-auto leading-relaxed text-[#64748b]"
            >
              {subtext}
            </motion.p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
            {displayTestimonials.map(
              (
                { _id, company, abbr, quote, authorName, authorRole, rating },
                i
              ) => {
                const cleanedQuote = quote.replace(/^["“\s]+|["”\s]+$/g, "");
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

                return (
                  <motion.div
                    key={_id}
                    {...fs(0.06 + i * 0.1)}
                    className="flex flex-col justify-between rounded-2xl bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      border: "1px solid rgba(226, 232, 240, 0.8)",
                      boxShadow: "0 4px 20px rgba(15, 23, 42, 0.04)",
                    }}
                  >
                    {/* Top Row: Quote Badge & Category Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{ background: "#fff4ed" }}
                      >
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="var(--color-brand)"
                          style={{ color: "var(--color-brand)" }}
                        >
                          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                        </svg>
                      </div>

                      <div
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11.5px] font-semibold text-slate-700"
                        style={{ background: "#fff4ed" }}
                      >
                        <LucideIcon
                          name={badgeIcon}
                          className="h-3.5 w-3.5"
                          style={{ color: "var(--color-brand)" }}
                        />
                        <span>{company}</span>
                      </div>
                    </div>

                    {/* Middle: Testimonial Quote */}
                    <p className="flex-1 text-[14px] sm:text-[14.5px] leading-[1.68] text-slate-600 font-normal mb-8">
                      &ldquo;{cleanedQuote}&rdquo;
                    </p>

                    {/* Bottom Row: Author details & Stars */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[11.5px] font-bold text-white tracking-wide"
                          style={{ background: "#0f172a" }}
                        >
                          {initials}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[13.5px] sm:text-[14px] font-bold leading-tight text-slate-900">
                            {authorName}
                          </p>
                          <p className="text-[11.5px] text-slate-500 font-normal leading-tight mt-0.5">
                            {authorRole}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0 ml-3">
                        {Array.from({ length: 5 }).map((_, starIdx) => (
                          <LucideIcon
                            key={starIdx}
                            name="star"
                            className="h-3.5 w-3.5 fill-current"
                            style={{ color: "var(--color-brand)" }}
                          />
                        ))}
                        <span
                          className="ml-1 text-[12.5px] font-bold"
                          style={{ color: "var(--color-brand)" }}
                        >
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
