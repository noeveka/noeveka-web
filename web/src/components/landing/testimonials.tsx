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

function StarRating({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <LucideIcon key={i} name="star" className="w-3.5 h-3.5 fill-current" style={{ color: "var(--color-brand)" }} />
      ))}
      <span className="ml-1.5 text-[11.5px] font-bold" style={{ color: "var(--color-brand)" }}>{n}.0</span>
    </div>
  );
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

  return (
    <>
      {/* ── Trust logo bar ── */}
      <TrustCompanyLogoBar/>

      {/* ── Testimonials section ── */}
      <section className="flex justify-center" style={{ background: "var(--color-bg-subtle)" }}>
        <div className="lp-container lp-px py-16 lg:py-20">
          <div className="text-center mb-12">
            <motion.p {...fu()} className="inline-flex items-center gap-1.5 text-[10.5px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "var(--color-brand)" }}>
              <span>✳</span> {eyebrow}
            </motion.p>
            <motion.h2 {...fu(0.07)} className="text-3xl sm:text-[2.2rem] font-extrabold tracking-tight mb-4" style={{ color: "var(--color-text-primary)" }}>
              {heading}
            </motion.h2>
            <motion.p {...fu(0.13)} className="text-[15px] max-w-md mx-auto leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              {subtext}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {displayTestimonials.map(({ _id, company, abbr, quote, authorName, authorRole, rating }, i) => (
              <motion.div
                key={_id}
                {...fs(0.06 + i * 0.10)}
                className="flex flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-stroke-default)", boxShadow: "0 4px 24px rgba(15,17,23,0.06)" }}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[52px] font-extrabold leading-none select-none" style={{ color: "var(--color-brand)", lineHeight: 1, marginTop: -6 }}>&quot;</span>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[9px] font-extrabold" style={{ background: "var(--color-brand-tint)", color: "var(--color-brand)", border: "1px solid rgba(246, 93, 1, 0.22)" }}>
                      {abbr}
                    </div>
                    <span className="text-[12px] font-semibold" style={{ color: "var(--color-text-primary)" }}>{company}</span>
                  </div>
                </div>
                <p className="text-[13.5px] leading-relaxed flex-1 mb-6" style={{ color: "var(--color-text-secondary)" }}>&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--color-stroke-default)" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0" style={{ background: "var(--color-text-primary)", color: "#ffffff" }}>
                      {authorName.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-[13px] font-bold leading-tight" style={{ color: "var(--color-text-primary)" }}>{authorName}</p>
                      <p className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>{authorRole}</p>
                    </div>
                  </div>
                  <StarRating n={rating} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
