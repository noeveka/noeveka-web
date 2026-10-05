import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import { RESOURCES_CONFIG } from "@/config/resources.config";
import { useUserIdentityStore } from "@/store/user-identity.store";
import type { ResourceItem } from "./resource.types";

export interface DownloadModalProps {
  resource: ResourceItem;
  onClose: () => void;
}

export function DownloadModal({ resource, onClose }: DownloadModalProps) {
  const { downloadModal } = RESOURCES_CONFIG;

  // ── Identity store 
  const { identity, hydrated, hydrate, setIdentity, clearIdentity } =
    useUserIdentityStore();

  // Hydrate from cookie on first open (no-op if already hydrated)
  useEffect(() => {
    if (!hydrated) hydrate();
  }, [hydrated, hydrate]);

  // ── Local form state 
  const [form, setForm] = useState({ name: "", email: "", consent: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "downloading" | "done">("idle");
  const [downloadToken, setDownloadToken] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  // ── Blob download helper ──────────────────────────────────────────────────
  const triggerBlobDownload = async (proxyUrl: string, title: string) => {
    setDownloadStatus("downloading");
    try {
      const res = await fetch(proxyUrl);
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      const anchorElement = document.createElement("a");
      anchorElement.href = objectUrl;
      anchorElement.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.pdf`;
      document.body.appendChild(anchorElement);
      anchorElement.click();
      document.body.removeChild(anchorElement);
      URL.revokeObjectURL(objectUrl);
      setDownloadStatus("done");
    } catch {
      setDownloadStatus("idle");
    }
  };

  // ── Auto-download when identity is already known 
  /**
   * Once hydration completes and we have a stored identity, fire the API
   * call automatically — the user never sees the form.
   */
  useEffect(() => {
    if (!hydrated || !identity) return;

    // Only auto-trigger on first render when identity is pre-populated.
    // Guard with a ref-style flag so StrictMode double-invoke doesn't double-fire.
    let cancelled = false;

    (async () => {
      setLoading(true);
      try {
        const apiRes = await fetch("/api/resource-download", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: identity.name,
            email: identity.email,
            consent: true, // user consented when they first submitted
            resourceTitle: resource.title,
            resourceId: resource._id,
            pdfUrl: resource.pdfUrl,
          }),
        });

        const data = (await apiRes.json()) as { downloadToken?: string | null };
        const token = data.downloadToken ?? null;

        if (!cancelled) {
          setDownloadToken(token);
          setLoading(false);
          setSubmitted(true);
          if (token) {
            triggerBlobDownload(`/api/resource-proxy?token=${token}`, resource.title);
          }
        }
      } catch (err: unknown) {
        console.error("Resource auto-download error:", err);
        if (!cancelled) {
          setLoading(false);
          setSubmitted(true);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
    // Intentionally runs only once after hydration + identity check
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated]);

  // ── Form helpers 
  const validate = () => {
    const errorMap: Record<string, string> = {};
    if (!form.name.trim()) errorMap.name = downloadModal.requiredNameError || "Name is required.";
    if (!form.email.trim()) errorMap.email = downloadModal.requiredEmailError || "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errorMap.email = downloadModal.invalidEmailError || "Please enter a valid email address.";
    if (!form.consent) errorMap.consent = downloadModal.consentError || "Consent is required to download.";
    return errorMap;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const apiRes = await fetch("/api/resource-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          consent: form.consent,
          resourceTitle: resource.title,
          resourceId: resource._id,
          pdfUrl: resource.pdfUrl,
        }),
      });

      const data = (await apiRes.json()) as { downloadToken?: string | null };
      const token = data.downloadToken ?? null;
      setDownloadToken(token);
      setLoading(false);
      setSubmitted(true);

      // Persist identity so future downloads skip the form
      setIdentity(form.name, form.email);

      if (token) {
        triggerBlobDownload(`/api/resource-proxy?token=${token}`, resource.title);
      }
    } catch (err: unknown) {
      console.error("Resource download submit error:", err);
      setLoading(false);
      setSubmitted(true);    }
  };

  // ── "Not you?" handler 
  const handleSwitchIdentity = () => {
    clearIdentity();
    setSubmitted(false);
    setDownloadStatus("idle");
    setDownloadToken(null);
    setLoading(false);
    setForm({ name: "", email: "", consent: false });
    setErrors({});
    setServerError(null);
  };

  // ── Loading state (hydrating OR auto-downloading)
  const isAutoDownloading = hydrated && !!identity && !submitted;

  return (
    <div
      className="dl-modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="dl-modal-panel"
      >
        <button onClick={onClose} className="dl-modal-close-btn" aria-label="Close">
          <LucideIcon name={lucideIconRegistry.X} className="h-4 w-4" />
        </button>

        {/* ── Auto-download in progress (returning user, not yet done) ── */}
        {isAutoDownloading && (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            {/* Resource preview strip */}
            <div className="dl-modal-preview">
              <div className="dl-modal-preview-icon">
                <LucideIcon
                  name={lucideIconRegistry.BookOpen}
                  className="h-5 w-5"
                  style={{ color: "var(--color-brand)" }}
                />
              </div>
              <div>
                <p className="dl-modal-preview-label">
                  {downloadModal.previewBadgeLabel || "Free Download"}
                </p>
                <p className="dl-modal-preview-title">{resource.title}</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent" style={{ color: "var(--color-brand)" }} />
              <p className="text-[14px] font-medium" style={{ color: "var(--color-text)" }}>
                Preparing your download…
              </p>
              <p className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>
                Downloading for <span className="font-medium">{identity?.name}</span>
              </p>
            </div>

            <button
              onClick={handleSwitchIdentity}
              className="text-[12px] underline underline-offset-2 transition-opacity hover:opacity-70"
              style={{ color: "var(--color-text-muted)" }}
            >
              Not you? Use a different email
            </button>
          </div>
        )}

        {/* ── Form (first-time user OR after "Not you?") ── */}
        {!isAutoDownloading && !submitted && (
          <>
            {/* Resource preview strip */}
            <div className="dl-modal-preview">
              <div className="dl-modal-preview-icon">
                <LucideIcon
                  name={lucideIconRegistry.BookOpen}
                  className="h-5 w-5"
                  style={{ color: "var(--color-brand)" }}
                />
              </div>
              <div>
                <p className="dl-modal-preview-label">
                  {downloadModal.previewBadgeLabel || "Free Download"}
                </p>
                <p className="dl-modal-preview-title">{resource.title}</p>
              </div>
            </div>

            <h2 className="dl-modal-heading">{downloadModal.heading}</h2>
            <p className="dl-modal-subtext">{downloadModal.subtext}</p>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3.5">
              {/* Server error */}
              {serverError && (
                <div className="contact-server-error">
                  <LucideIcon name={lucideIconRegistry.AlertCircle} className="h-4 w-4 shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              {/* Name */}
              <div className="dl-modal-field">
                <label className="dl-modal-label" htmlFor="dl-name">
                  {downloadModal.nameLabel || "Full Name"}
                </label>
                <input
                  id="dl-name"
                  type="text"
                  autoComplete="name"
                  placeholder={downloadModal.namePlaceholder || "Ajay Kumar"}
                  value={form.name}
                  onChange={(e) => {
                    const value = e.target.value;
                    setForm((prevForm) => ({ ...prevForm, name: value }));
                    setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
                  }}
                  className={`dl-modal-input ${errors.name ? "dl-modal-input-error" : ""}`}
                />
                {errors.name && <p className="dl-modal-field-error">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="dl-modal-field">
                <label className="dl-modal-label" htmlFor="dl-email">
                  {downloadModal.emailLabel || "Work Email"}
                </label>
                <input
                  id="dl-email"
                  type="email"
                  autoComplete="email"
                  placeholder={downloadModal.emailPlaceholder || "you@company.com"}
                  value={form.email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setForm((prevForm) => ({ ...prevForm, email: value }));
                    setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
                  }}
                  className={`dl-modal-input ${errors.email ? "dl-modal-input-error" : ""}`}
                />
                {errors.email && <p className="dl-modal-field-error">{errors.email}</p>}
              </div>

              {/* Consent */}
              <div className={`dl-modal-consent ${errors.consent ? "dl-modal-consent-error" : ""}`}>
                <input
                  id="dl-consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setForm((prevForm) => ({ ...prevForm, consent: checked }));
                    setErrors((prevErrors) => ({ ...prevErrors, consent: "" }));
                  }}
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-orange-500"
                />
                <label htmlFor="dl-consent" className="dl-modal-consent-text">
                  {downloadModal.consentText}
                </label>
              </div>
              {errors.consent && <p className="dl-modal-field-error">{errors.consent}</p>}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="dl-modal-submit-btn"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    {downloadModal.processingText || "Processing…"}
                  </>
                ) : (
                  <>
                    <LucideIcon name={lucideIconRegistry.Download} className="h-4 w-4" />
                    {downloadModal.submitText}
                  </>
                )}
              </button>
            </form>
          </>
        )}

        {/* ── Success state (form submitted OR auto-download finished) ── */}
        {submitted && (
          <div className="flex flex-col items-center gap-4 py-4 text-center">
            <div className="dl-modal-success-icon">
              <LucideIcon name={lucideIconRegistry.CheckCircle2} className="h-7 w-7" />
            </div>
            <div>
              <h3 className="dl-modal-success-heading">{downloadModal.successHeading}</h3>
              <p className="dl-modal-success-body">{downloadModal.successSubtext}</p>
            </div>

            {/* Download status toast */}
            {downloadStatus !== "idle" && (
              <div className={`dl-status-toast ${downloadStatus === "done" ? "dl-status-toast-done" : "dl-status-toast-downloading"}`}>
                {downloadStatus === "downloading" ? (
                  <>
                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    {downloadModal.downloadingText || "Downloading…"}
                  </>
                ) : (
                  <>
                    <LucideIcon name={lucideIconRegistry.CheckCircle2} className="h-3.5 w-3.5" />
                    {downloadModal.savedText || "Saved to your device"}
                  </>
                )}
              </div>
            )}

            {resource.pdfUrl ? (
              <button
                onClick={() => {
                  if (!downloadToken) return;
                  triggerBlobDownload(`/api/resource-proxy?token=${downloadToken}`, resource.title);
                }}
                disabled={downloadStatus === "downloading" || !downloadToken}
                className="dl-modal-download-btn"
              >
                <LucideIcon name={lucideIconRegistry.Download} className="h-4 w-4" />
                {downloadModal.downloadButtonText}
              </button>
            ) : (
              <p
                className="text-[12px]"
                style={{ color: "var(--color-text-muted)" }}
              >
                {downloadModal.emailFollowupText || "The resource will be emailed to you shortly."}
              </p>
            )}

            <button
              onClick={onClose}
              className="text-[13px] underline underline-offset-2 transition-opacity hover:opacity-70"
              style={{ color: "var(--color-text-muted)" }}
            >
              {downloadModal.closeButtonText || "Close"}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
