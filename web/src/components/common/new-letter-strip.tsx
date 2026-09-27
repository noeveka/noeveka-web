import { useEffect, useState } from "react";
import { LucideIcon } from "@/components/lucide-icons";
import { FOOTER_CONFIG } from "@/config/footer.config";
import { getSiteSettings } from "@/lib/sanity";

export interface NewsLetterStripProps {
  tag?: string;
  heading?: string;
  subtext?: string;
  placeholder?: string;
  className?: string;
}

export default function NewsLetterStrip({
  tag: propTag,
  heading: propHeading,
  subtext: propSubtext,
  placeholder: propPlaceholder,
  className = "",
}: NewsLetterStripProps) {
  const [settings, setSettings] = useState<{
    newsletterTag?: string;
    newsletterHeading?: string;
    newsletterSubtext?: string;
    newsletterPlaceholder?: string;
  } | null>(null);

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  useEffect(() => {
    getSiteSettings()
      .then((data) => {
        if (data) {
          setSettings({
            newsletterTag: data.newsletterTag,
            newsletterHeading: data.newsletterHeading,
            newsletterSubtext: data.newsletterSubtext,
            newsletterPlaceholder: data.newsletterPlaceholder,
          });
        }
      })
      .catch(console.error);
  }, []);

  const tag =
    propTag ?? settings?.newsletterTag ?? FOOTER_CONFIG.newsletterTag;
  const heading =
    propHeading ??
    settings?.newsletterHeading ??
    FOOTER_CONFIG.newsletterHeading;
  const subtext =
    propSubtext ??
    settings?.newsletterSubtext ??
    FOOTER_CONFIG.newsletterSubtext;
  const placeholder =
    propPlaceholder ??
    settings?.newsletterPlaceholder ??
    FOOTER_CONFIG.newsletterPlaceholder;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setEmail("");
    }, 3500);
  };

  return (
    <section
      className={`w-full py-6 sm:py-8 bg-neutral-50/40 ${className}`}
      style={{
        borderTop: "1px solid var(--color-stroke-default, rgba(0,0,0,0.06))",
      }}
    >
      <div className="lp-container lp-px">
        <div className="relative rounded-[26px] sm:rounded-[30px] border border-neutral-200/80 bg-white px-5 py-4 sm:px-7 sm:py-5 lg:px-8 lg:py-4.5 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">
            {/* Left: Icon + Tag & Heading */}
            <div className="flex items-center gap-3.5 sm:gap-4 shrink-0 w-full lg:w-auto">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-neutral-100/80 text-neutral-800">
                <LucideIcon
                  name="mail"
                  className="h-5 w-5 stroke-[1.8]"
                />
              </div>
              <div className="min-w-0">
                {tag && (
                  <span className="block text-[10.5px] font-bold uppercase tracking-[0.16em] text-neutral-400 mb-0.5">
                    {tag}
                  </span>
                )}
                <h3 className="text-lg sm:text-[20px] font-extrabold tracking-tight text-[#1e212b] leading-tight">
                  {heading}
                </h3>
              </div>
            </div>

            {/* Middle: Divider + Subtext */}
            <div className="flex items-center gap-6 lg:gap-8 w-full lg:w-auto flex-1 max-w-xl">
              <div className="hidden lg:block h-8 w-px bg-neutral-200/90 shrink-0" />
              <p className="text-[12px] sm:text-[12.5px] text-neutral-500 leading-relaxed font-normal">
                {subtext}
              </p>
            </div>

            {/* Right: Input & Submit Button */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2.5 sm:gap-3 w-full lg:w-auto shrink-0"
            >
              <div className="relative flex-1 sm:w-64 lg:w-72">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className="w-full rounded-full border border-neutral-200/90 bg-[#fafafa] px-4.5 py-2.5 sm:py-3 text-[13px] text-[#1e212b] placeholder:text-neutral-400 focus:border-neutral-400 focus:bg-white focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#f65d01] text-white shadow-[0_4px_14px_rgba(246,93,1,0.28)] transition-all duration-200 hover:bg-[#d94e00] hover:scale-105 active:scale-95"
              >
                {status === "success" ? (
                  <LucideIcon name="check" className="h-4.5 w-4.5 stroke-[2.5]" />
                ) : (
                  <LucideIcon
                    name="arrow-right"
                    className="h-4.5 w-4.5 stroke-[2.2]"
                  />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export { NewsLetterStrip };