import { useEffect, useState } from "react";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        setStatus("error");
        setTimeout(() => { setStatus("idle"); setErrorMsg(null); }, 3500);
        return;
      }

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3500);
    } catch {
      setErrorMsg("Network error. Please check your connection.");
      setStatus("error");
      setTimeout(() => { setStatus("idle"); setErrorMsg(null); }, 3500);
    }
  };

  return (
    <section className={`newsletter-strip-section ${className}`}>
      <div className="lp-container lp-px">
        <div className="newsletter-strip-card">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">
            {/* Left: Icon + Tag & Heading */}
            <div className="flex items-center gap-3.5 sm:gap-4 shrink-0 w-full lg:w-auto">
              <div className="newsletter-strip-icon-box">
                <LucideIcon
                  name={lucideIconRegistry.Mail}
                  className="h-5 w-5 stroke-[1.8]"
                />
              </div>
              <div className="min-w-0">
                {tag && (
                  <span className="newsletter-strip-tag">
                    {tag}
                  </span>
                )}
                <h3 className="newsletter-strip-heading">
                  {heading}
                </h3>
              </div>
            </div>

            {/* Middle: Divider + Subtext */}
            <div className="flex items-center gap-6 lg:gap-8 w-full lg:w-auto flex-1 max-w-xl">
              <div className="newsletter-strip-divider" />
              <p className="newsletter-strip-subtext">
                {subtext}
              </p>
            </div>

            {/* Right: Input & Submit Button */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-1.5 w-full lg:w-auto shrink-0"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="relative flex-1 sm:w-64 lg:w-72">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (status === "error") { setStatus("idle"); setErrorMsg(null); } }}
                    placeholder={placeholder}
                    required
                    disabled={status === "loading" || status === "success"}
                    className="newsletter-strip-input"
                  />
                </div>
                <button
                  type="submit"
                  aria-label="Subscribe"
                  disabled={status === "loading" || status === "success"}
                  className="newsletter-strip-submit"
                >
                  {status === "loading" ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : status === "success" ? (
                    <LucideIcon name={lucideIconRegistry.Check} className="h-4.5 w-4.5 stroke-[2.5]" />
                  ) : (
                    <LucideIcon
                      name={lucideIconRegistry.ArrowRight}
                      className="h-4.5 w-4.5 stroke-[2.2]"
                    />
                  )}
                </button>
              </div>
              {errorMsg && (
                <p className="newsletter-strip-error">{errorMsg}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export { NewsLetterStrip };