import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fu, fs } from "@/lib/motion";
import { getTestimonials } from "@/lib/sanity";
import { TESTIMONIALS_CONFIG } from "@/config/landing/testimonials.config";

/* ─── Brand SVG logos (hardcoded — branding marks) ──────────────────── */
const MicrosoftSvg = () => (
  <svg width="20" height="20" viewBox="0 0 21 21" role="img" aria-label="Microsoft">
    <rect x="1" y="1" width="9" height="9" fill="#f25022" /><rect x="11" y="1" width="9" height="9" fill="#7fba00" />
    <rect x="1" y="11" width="9" height="9" fill="#00a4ef" /><rect x="11" y="11" width="9" height="9" fill="#ffb900" />
  </svg>
);
const DatabricksSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" role="img" aria-label="Databricks">
    <path d="M12 2L22 7.5V16.5L12 22L2 16.5V7.5Z" fill="#FF3621" />
    <path d="M12 6L19 10V14L12 18L5 14V10Z" fill="#fff" opacity="0.15" />
    <line x1="7" y1="9.5" x2="12" y2="12.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
    <line x1="17" y1="9.5" x2="12" y2="12.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
    <line x1="12" y1="12.5" x2="12" y2="17" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
  </svg>
);
const AzureSvg = () => (
  <svg width="22" height="22" viewBox="0 0 96 96" role="img" aria-label="Azure">
    <defs><linearGradient id="az-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0078D4" /><stop offset="100%" stopColor="#50E6FF" /></linearGradient></defs>
    <path fill="url(#az-grad)" d="M34.93 6.27L9.12 74.42H29.2l21.23-47.29 16.21 33.73H48.82L41.7 74.42H86.88L55.41 6.27Z" />
  </svg>
);
const PowerBISvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" role="img" aria-label="Power BI">
    <rect x="2" y="13" width="5" height="8" rx="1.2" fill="#F2C811" />
    <rect x="9.5" y="8" width="5" height="13" rx="1.2" fill="#F2C811" opacity="0.85" />
    <rect x="17" y="3" width="5" height="18" rx="1.2" fill="#F2C811" opacity="0.7" />
  </svg>
);
const SnowflakeSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Snowflake">
    <line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /><line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
    <polyline points="9,5 12,2 15,5" /><polyline points="19,9 22,12 19,15" />
    <polyline points="15,19 12,22 9,19" /><polyline points="5,15 2,12 5,9" />
  </svg>
);

const LOGOS = [
  { name: "Microsoft Fabric", Logo: MicrosoftSvg },
  { name: "Databricks", Logo: DatabricksSvg },
  { name: "Azure", Logo: AzureSvg },
  { name: "Power BI", Logo: PowerBISvg },
  { name: "Snowflake", Logo: SnowflakeSvg },
];

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
        <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "var(--color-brand)" }} />
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
      <section className="flex justify-center border-y" style={{ background: "var(--color-bg-surface)", borderColor: "var(--color-stroke-default)" }}>
        <div className="lp-container lp-px py-5 grid grid-cols-5 divide-x" style={{ borderColor: "var(--color-stroke-default)" }}>
          {LOGOS.map(({ name, Logo }) => (
            <div key={name} className="flex items-center justify-center gap-2.5 px-4 py-3" style={{ borderColor: "var(--color-stroke-default)" }}>
              <Logo />
              <span className="text-[13px] font-semibold hidden sm:block" style={{ color: "var(--color-text-primary)" }}>{name}</span>
            </div>
          ))}
        </div>
      </section>

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
