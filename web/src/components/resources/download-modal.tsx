import React, { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
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
  // One-time proxy token returned by /api/resource-download — never the raw Sanity URL.
  const [downloadToken, setDownloadToken] = useState<string | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.consent) e.consent = "Consent is required to download.";
    return e;
  };

  const [serverError, setServerError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
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

      const data = await apiRes.json() as { downloadToken?: string | null };
      const token = data.downloadToken ?? null;
      setDownloadToken(token);

      setLoading(false);
      setSubmitted(true);

      // Auto-trigger a silent background blob download via the proxy — the
      // raw Sanity URL is never fetched from the browser.
      if (token) {
        triggerBlobDownload(`/api/resource-proxy?token=${token}`, resource.title);
      }
    } catch (err: unknown) {
      console.error("Resource download submit error:", err);
      // Even if network fails, unlock download for visitor satisfaction
      setLoading(false);
      setSubmitted(true);
    }
  };

  /** Fetch the PDF as a blob via the server-side proxy and trigger a save-to-device download. */
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
      // Fallback: if blob fetch fails (e.g. CORS), surface a gentle error
      setDownloadStatus("idle");
    }
  };

  const inputStyle = (hasErr: boolean): React.CSSProperties => ({
    width: "100%",
    padding: "0.7rem 1rem",
    fontSize: "14px",
    borderRadius: "10px",
    outline: "none",
    background: "#faf9f7",
    border: `1.5px solid ${hasErr ? "#ef4444" : "#e8e5dd"}`,
    color: "#1e212b",
    transition: "border-color 0.15s",
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(15,17,23,0.55)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="relative w-full max-w-[420px] rounded-2xl bg-white p-8"
        style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.18)" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-200"
          aria-label="Close"
        >
          <LucideIcon name="close" className="h-4 w-4" />
        </button>

        {!submitted ? (
          <>
            <div
              className="mb-6 flex items-center gap-3 rounded-xl p-3"
              style={{ background: "#faf9f7", border: "1px solid #e8e5dd" }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ background: "rgba(246,93,1,0.1)" }}
              >
                <LucideIcon name="book-open" className="h-5 w-5" style={{ color: "var(--color-brand)" }} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wide">
                  Free Download
                </p>
                <p className="text-[13px] font-bold text-neutral-800 leading-tight">
                  {resource.title}
                </p>
              </div>
            </div>

            <h2 className="mb-1 text-[1.2rem] font-extrabold text-neutral-900">
              {downloadModal.heading}
            </h2>
            <p className="mb-5 text-[13px] text-neutral-500 leading-relaxed">
              {downloadModal.subtext}
            </p>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3.5">
              {serverError && (
                <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-2.5 text-[12px] text-red-600">
                  <LucideIcon name="alert-circle" className="h-4 w-4 shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold text-neutral-600" htmlFor="dl-name">
                  Full Name
                </label>
                <input
                  id="dl-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Ajay Kumar"
                  value={form.name}
                  onChange={(e) => { setForm((f) => ({ ...f, name: e.target.value })); setErrors((er) => ({ ...er, name: "" })); }}
                  style={inputStyle(!!errors.name)}
                  onFocus={(e) => { if (!errors.name) e.currentTarget.style.borderColor = "var(--color-brand)"; }}
                  onBlur={(e) => { if (!errors.name) e.currentTarget.style.borderColor = "#e8e5dd"; }}
                />
                {errors.name && <p className="text-[11px] text-red-500">{errors.name}</p>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold text-neutral-600" htmlFor="dl-email">
                  Work Email
                </label>
                <input
                  id="dl-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => { setForm((f) => ({ ...f, email: e.target.value })); setErrors((er) => ({ ...er, email: "" })); }}
                  style={inputStyle(!!errors.email)}
                  onFocus={(e) => { if (!errors.email) e.currentTarget.style.borderColor = "var(--color-brand)"; }}
                  onBlur={(e) => { if (!errors.email) e.currentTarget.style.borderColor = "#e8e5dd"; }}
                />
                {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
              </div>

              <div
                className="flex gap-3 rounded-xl p-3.5"
                style={{
                  background: errors.consent ? "#fef2f2" : "#faf9f7",
                  border: `1.5px solid ${errors.consent ? "#ef4444" : "#e8e5dd"}`,
                }}
              >
                <input
                  id="dl-consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => { setForm((f) => ({ ...f, consent: e.target.checked })); setErrors((er) => ({ ...er, consent: "" })); }}
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-orange-500"
                />
                <label htmlFor="dl-consent" className="cursor-pointer text-[12px] leading-relaxed text-neutral-500">
                  {downloadModal.consentText}
                </label>
              </div>
              {errors.consent && <p className="text-[11px] text-red-500">{errors.consent}</p>}

              <button
                type="submit"
                disabled={loading}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-[14px] font-bold text-white transition-all disabled:opacity-60"
                style={{
                  background: "var(--color-brand)",
                  boxShadow: "0 4px 20px rgba(246,93,1,0.3)",
                }}
                onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.background = "var(--color-brand-hover)"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--color-brand)"; e.currentTarget.style.transform = ""; }}
              >
                {loading ? (
                  <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" /> Processing…</>
                ) : (
                  <><LucideIcon name="download" className="h-4 w-4" /> {downloadModal.submitText}</>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 py-4 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full" style={{ background: "#ecfdf5" }}>
              <LucideIcon name="check-circle-2" className="h-7 w-7" style={{ color: "#059669" }} />
            </div>
            <div>
              <h3 className="text-[1.15rem] font-extrabold text-neutral-900">{downloadModal.successHeading}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-500">{downloadModal.successSubtext}</p>
            </div>
            {/* Download status toast */}
            {downloadStatus !== "idle" && (
              <div
                className="flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold"
                style={{
                  background: downloadStatus === "done" ? "#ecfdf5" : "#fff7ed",
                  color: downloadStatus === "done" ? "#059669" : "#c2410c",
                  border: `1px solid ${downloadStatus === "done" ? "#a7f3d0" : "#fed7aa"}`,
                }}
              >
                {downloadStatus === "downloading" ? (
                  <><span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" /> Downloading…</>
                ) : (
                  <><LucideIcon name="check-circle-2" className="h-3.5 w-3.5" /> Saved to your device</>  
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
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-bold text-white transition-all disabled:opacity-60"
                style={{ background: "var(--color-brand)", boxShadow: "0 4px 20px rgba(246,93,1,0.28)" }}
                onMouseEnter={(e) => { if (downloadStatus !== "downloading") { e.currentTarget.style.background = "var(--color-brand-hover)"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--color-brand)"; e.currentTarget.style.transform = ""; }}
              >
                <LucideIcon name="download" className="h-4 w-4" />
                {downloadModal.downloadButtonText}
              </button>
            ) : (
              <p className="text-[12px] text-neutral-400">The resource will be emailed to you shortly.</p>
            )}
            <button onClick={onClose} className="text-[13px] text-neutral-400 underline underline-offset-2 hover:opacity-70 transition-opacity">
              Close
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
