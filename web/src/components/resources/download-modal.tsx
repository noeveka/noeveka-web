import React, { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import { RESOURCES_CONFIG } from "@/config/resources.config";
import type { ResourceItem } from "./resource.types";

interface DownloadModalProps {
  resource: ResourceItem;
  onClose: () => void;
}

export function DownloadModal({ resource, onClose }: DownloadModalProps) {
  const { downloadModal } = RESOURCES_CONFIG;

  const [form, setForm] = useState({ name: "", email: "", consent: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "downloading" | "done">("idle");
  const [downloadToken, setDownloadToken] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.consent) e.consent = "Consent is required to download.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

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

      const data = await apiRes.json() as { downloadToken?: string | null };
      const token = data.downloadToken ?? null;
      setDownloadToken(token);
      setLoading(false);
      setSubmitted(true);

      if (token) {
        triggerBlobDownload(`/api/resource-proxy?token=${token}`, resource.title);
      }
    } catch (err: unknown) {
      console.error("Resource download submit error:", err);
      setLoading(false);
      setSubmitted(true);
    }
  };

  const triggerBlobDownload = async (proxyUrl: string, title: string) => {
    setDownloadStatus("downloading");
    try {
      const res = await fetch(proxyUrl);
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(objectUrl);
      setDownloadStatus("done");
    } catch {
      setDownloadStatus("idle");
    }
  };

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

        {!submitted ? (
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
                <p className="dl-modal-preview-label">Free Download</p>
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
                <label className="dl-modal-label" htmlFor="dl-name">Full Name</label>
                <input
                  id="dl-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Ajay Kumar"
                  value={form.name}
                  onChange={(e) => { setForm((f) => ({ ...f, name: e.target.value })); setErrors((er) => ({ ...er, name: "" })); }}
                  className={`dl-modal-input ${errors.name ? "dl-modal-input-error" : ""}`}
                />
                {errors.name && <p className="dl-modal-field-error">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="dl-modal-field">
                <label className="dl-modal-label" htmlFor="dl-email">Work Email</label>
                <input
                  id="dl-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => { setForm((f) => ({ ...f, email: e.target.value })); setErrors((er) => ({ ...er, email: "" })); }}
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
                  onChange={(e) => { setForm((f) => ({ ...f, consent: e.target.checked })); setErrors((er) => ({ ...er, consent: "" })); }}
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
                    Processing…
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
        ) : (
          /* Success state */
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
                    Downloading…
                  </>
                ) : (
                  <>
                    <LucideIcon name={lucideIconRegistry.CheckCircle2} className="h-3.5 w-3.5" />
                    Saved to your device
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
                The resource will be emailed to you shortly.
              </p>
            )}

            <button
              onClick={onClose}
              className="text-[13px] underline underline-offset-2 transition-opacity hover:opacity-70"
              style={{ color: "var(--color-text-muted)" }}
            >
              Close
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
