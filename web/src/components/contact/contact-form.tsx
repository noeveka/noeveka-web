import { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { CONTACT_CONFIG } from "@/config/contact.config";
import { fs } from "@/lib/motion";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Please enter a valid email address.";
  if (!form.message.trim()) errors.message = "Message is required.";
  return errors;
}

export default function ContactForm() {
  const { form: cfg, contact } = CONTACT_CONFIG;

  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(formState);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // TODO: Replace with real form endpoint (e.g. Formspree, Resend, or custom API)
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  const inputBase: React.CSSProperties = {
    background: "var(--color-bg-subtle)",
    border: "1.5px solid var(--color-stroke-default)",
    color: "var(--color-text-primary)",
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.15s",
  };

  const inputError: React.CSSProperties = {
    ...inputBase,
    borderColor: "#ef4444",
  };

  if (submitted) {
    return (
      <motion.div
        {...fs()}
        className="flex flex-col items-center gap-5 rounded-2xl p-10 text-center"
        style={{
          background: "var(--color-bg-surface)",
          border: "1px solid var(--color-stroke-default)",
        }}
      >
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: "var(--color-brand-tint)" }}
        >
          <LucideIcon
            name="check-circle-2"
            className="h-8 w-8"
            style={{ color: "var(--color-brand)" }}
          />
        </div>
        <div>
          <h3
            className="text-[1.3rem] font-extrabold"
            style={{ color: "var(--color-text-primary)" }}
          >
            {cfg.successHeading}
          </h3>
          <p
            className="mt-2 text-[14px] leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            {cfg.successSubtext}
          </p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormState({ name: "", email: "", company: "", message: "" });
          }}
          className="text-[13px] underline underline-offset-2 transition-opacity hover:opacity-70"
          style={{ color: "var(--color-text-muted)" }}
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
      {/* ── Form (3/5) ─────────────────────────────────────── */}
      <motion.div {...fs(0.04)} className="lg:col-span-3">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5 rounded-2xl p-8"
          style={{
            background: "var(--color-bg-surface)",
            border: "1px solid var(--color-stroke-default)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
          }}
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-name"
                className="text-[12px] font-semibold"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {cfg.nameLabel} <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                placeholder={cfg.namePlaceholder}
                value={formState.name}
                onChange={set("name")}
                style={errors.name ? inputError : inputBase}
                onFocus={(e) => {
                  if (!errors.name)
                    e.currentTarget.style.borderColor = "var(--color-brand)";
                }}
                onBlur={(e) => {
                  if (!errors.name)
                    e.currentTarget.style.borderColor = "var(--color-stroke-default)";
                }}
              />
              {errors.name && (
                <p className="text-[11px] text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-email"
                className="text-[12px] font-semibold"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {cfg.emailLabel} <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                placeholder={cfg.emailPlaceholder}
                value={formState.email}
                onChange={set("email")}
                style={errors.email ? inputError : inputBase}
                onFocus={(e) => {
                  if (!errors.email)
                    e.currentTarget.style.borderColor = "var(--color-brand)";
                }}
                onBlur={(e) => {
                  if (!errors.email)
                    e.currentTarget.style.borderColor = "var(--color-stroke-default)";
                }}
              />
              {errors.email && (
                <p className="text-[11px] text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Company (optional) */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-company"
              className="text-[12px] font-semibold"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {cfg.companyLabel}{" "}
              <span
                className="font-normal"
                style={{ color: "var(--color-text-muted)" }}
              >
                (optional)
              </span>
            </label>
            <input
              id="contact-company"
              type="text"
              autoComplete="organization"
              placeholder={cfg.companyPlaceholder}
              value={formState.company}
              onChange={set("company")}
              style={inputBase}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--color-brand)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--color-stroke-default)";
              }}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-message"
              className="text-[12px] font-semibold"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {cfg.messageLabel} <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder={cfg.messagePlaceholder}
              value={formState.message}
              onChange={set("message")}
              style={{
                ...(errors.message ? inputError : inputBase),
                resize: "vertical",
              }}
              onFocus={(e) => {
                if (!errors.message)
                  e.currentTarget.style.borderColor = "var(--color-brand)";
              }}
              onBlur={(e) => {
                if (!errors.message)
                  e.currentTarget.style.borderColor = "var(--color-stroke-default)";
              }}
            />
            {errors.message && (
              <p className="text-[11px] text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-full py-4 text-[14px] font-semibold transition-all disabled:opacity-60"
            style={{
              background: "var(--color-brand)",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(246,93,1,0.28)",
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.background = "var(--color-brand-hover)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(246,93,1,0.4)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--color-brand)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(246,93,1,0.28)";
            }}
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Sending…
              </>
            ) : (
              <>
                <LucideIcon name="arrow-right" className="h-4 w-4" />
                {cfg.submitText}
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* ── Side panel (2/5) ───────────────────────────────── */}
      <motion.div
        {...fs(0.1)}
        className="flex flex-col gap-8 lg:col-span-2 lg:pt-2"
      >
        {/* Direct contact */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "var(--color-bg-surface)",
            border: "1px solid var(--color-stroke-default)",
          }}
        >
          <h3
            className="mb-1 text-[13px] font-bold tracking-wide uppercase"
            style={{ color: "var(--color-brand)" }}
          >
            {contact.heading}
          </h3>
          <p
            className="mb-4 text-[13px] leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            {contact.subtext}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-[14px] font-semibold transition-opacity hover:opacity-75"
            style={{ color: "var(--color-brand)" }}
          >
            <LucideIcon name="mail" className="h-4 w-4" />
            {contact.email}
          </a>
        </div>

        {/* What to expect */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "var(--color-bg-subtle)",
            border: "1px solid var(--color-stroke-default)",
          }}
        >
          <h3
            className="mb-4 text-[13px] font-bold tracking-wide uppercase"
            style={{ color: "var(--color-text-primary)" }}
          >
            What to expect
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              "Response within 1–2 business days",
              "No automated sales sequences — a real reply from the team",
              "Free 30-min strategy call if relevant",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <LucideIcon
                  name="check-circle-2"
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: "var(--color-brand)" }}
                />
                <span
                  className="text-[13px] leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
