import { useState } from "react";

import { motion } from "framer-motion";

import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import { CONTACT_CONFIG } from "@/config/contact.config";
import { fadeScale } from "@/lib/motion";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  message: string;
  services: string[];
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

export interface ContactFormData {
  firstNameLabel?: string;
  firstNamePlaceholder?: string;
  lastNameLabel?: string;
  lastNamePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  phoneLabel?: string;
  phonePlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  servicesLabel?: string;
  services?: Array<{ id: string; label: string }>;
  submitText?: string;
  submittingText?: string;
  successHeading?: string;
  successSubtext?: string;
  resetButtonText?: string;
}

export interface ContactFormProps {
  data?: ContactFormData;
}

const EMPTY_FORM: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "",
  phone: "",
  message: "",
  services: [],
};

export default function ContactForm({ data }: ContactFormProps) {
  const cfg = {
    firstNameLabel: data?.firstNameLabel ?? CONTACT_CONFIG.form.firstNameLabel,
    firstNamePlaceholder:
      data?.firstNamePlaceholder ?? CONTACT_CONFIG.form.firstNamePlaceholder,
    lastNameLabel: data?.lastNameLabel ?? CONTACT_CONFIG.form.lastNameLabel,
    lastNamePlaceholder:
      data?.lastNamePlaceholder ?? CONTACT_CONFIG.form.lastNamePlaceholder,
    emailLabel: data?.emailLabel ?? CONTACT_CONFIG.form.emailLabel,
    emailPlaceholder:
      data?.emailPlaceholder ?? CONTACT_CONFIG.form.emailPlaceholder,
    phoneLabel: data?.phoneLabel ?? CONTACT_CONFIG.form.phoneLabel,
    phonePlaceholder:
      data?.phonePlaceholder ?? CONTACT_CONFIG.form.phonePlaceholder,
    messageLabel: data?.messageLabel ?? CONTACT_CONFIG.form.messageLabel,
    messagePlaceholder:
      data?.messagePlaceholder ?? CONTACT_CONFIG.form.messagePlaceholder,
    servicesLabel: data?.servicesLabel ?? CONTACT_CONFIG.form.servicesLabel,
    submitText: data?.submitText ?? CONTACT_CONFIG.form.submitText,
    submittingText: data?.submittingText ?? CONTACT_CONFIG.form.submittingText,
    successHeading: data?.successHeading ?? CONTACT_CONFIG.form.successHeading,
    successSubtext: data?.successSubtext ?? CONTACT_CONFIG.form.successSubtext,
    resetButtonText:
      data?.resetButtonText ?? CONTACT_CONFIG.form.resetButtonText,
  };

  const services =
    data?.services && data.services.length > 0
      ? data.services
      : CONTACT_CONFIG.services;
  const countryCodes = CONTACT_CONFIG.countryCodes;

  const [formState, setFormState] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!formState.firstName.trim())
      nextErrors.firstName = CONTACT_CONFIG.form.errors.firstNameRequired;
    if (!formState.lastName.trim())
      nextErrors.lastName = CONTACT_CONFIG.form.errors.lastNameRequired;
    if (!formState.email.trim()) {
      nextErrors.email = CONTACT_CONFIG.form.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      nextErrors.email = CONTACT_CONFIG.form.errors.emailInvalid;
    }
    if (!formState.message.trim())
      nextErrors.message = CONTACT_CONFIG.form.errors.messageRequired;
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleService = (serviceId: string) => {
    setFormState((prev) => {
      const exists = prev.services.includes(serviceId);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((id) => id !== serviceId)
          : [...prev.services, serviceId],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const responseData = await res.json().catch(() => ({}));

      if (!res.ok) {
        setServerError(
          responseData?.error || CONTACT_CONFIG.form.errors.serverErrorDefault
        );
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error("Contact form submit error:", err);
      setServerError(CONTACT_CONFIG.form.errors.networkError);
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormState(EMPTY_FORM);
    setErrors({});
    setServerError(null);
    setIsSubmitted(false);
  };

  /* ── SUCCESS STATE ── */
  if (isSubmitted) {
    return (
      <motion.div
        {...fadeScale(0)}
        className="contact-success-card"
      >
        <div className="contact-success-icon">
          <LucideIcon
            name={lucideIconRegistry.CheckCircle2}
            className="h-8 w-8"
          />
        </div>

        <h3 className="contact-success-heading">{cfg.successHeading}</h3>
        <p className="contact-success-body">{cfg.successSubtext}</p>

        <button
          type="button"
          onClick={handleReset}
          className="contact-success-reset-btn"
        >
          {cfg.resetButtonText}
        </button>
      </motion.div>
    );
  }

  /* ── FORM ── */
  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Server error banner */}
      {serverError && (
        <div className="contact-server-error">
          <LucideIcon
            name={lucideIconRegistry.AlertCircle}
            className="h-4 w-4 shrink-0"
          />
          <span>{serverError}</span>
        </div>
      )}

      {/* 1. First + Last name */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* First Name */}
        <div className="contact-field">
          <label htmlFor="firstName" className="contact-label">
            {cfg.firstNameLabel}{" "}
            <span style={{ color: "var(--color-danger)" }}>*</span>
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            placeholder={cfg.firstNamePlaceholder}
            value={formState.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className={`contact-input ${errors.firstName ? "contact-input-error" : ""}`}
          />
          {errors.firstName && (
            <p className="contact-field-error">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="contact-field">
          <label htmlFor="lastName" className="contact-label">
            {cfg.lastNameLabel}{" "}
            <span style={{ color: "var(--color-danger)" }}>*</span>
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            placeholder={cfg.lastNamePlaceholder}
            value={formState.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className={`contact-input ${errors.lastName ? "contact-input-error" : ""}`}
          />
          {errors.lastName && (
            <p className="contact-field-error">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* 2. Email */}
      <div className="contact-field">
        <label htmlFor="email" className="contact-label">
          {cfg.emailLabel}{" "}
          <span style={{ color: "var(--color-danger)" }}>*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder={cfg.emailPlaceholder}
          value={formState.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className={`contact-input ${errors.email ? "contact-input-error" : ""}`}
        />
        {errors.email && <p className="contact-field-error">{errors.email}</p>}
      </div>

      {/* 3. Phone */}
      <div className="contact-field">
        <label htmlFor="phone" className="contact-label">
          {cfg.phoneLabel}
        </label>
        <div className="contact-phone-wrap">
          {/* Country code prefix */}
          <div className="contact-phone-prefix">
            <select
              aria-label="Country Code"
              value={formState.countryCode}
              onChange={(e) => handleInputChange("countryCode", e.target.value)}
              className="contact-phone-select"
            >
              {countryCodes.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.flag} {item.label}
                </option>
              ))}
            </select>
            <LucideIcon
              name={lucideIconRegistry.ChevronDown}
              className="pointer-events-none absolute right-2.5 h-3.5 w-3.5"
              style={{ color: "var(--color-text-muted)" }}
            />
          </div>

          {/* Number input */}
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder={cfg.phonePlaceholder}
            value={formState.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="contact-phone-input"
          />
        </div>
      </div>

      {/* 4. Message */}
      <div className="contact-field">
        <label htmlFor="message" className="contact-label">
          {cfg.messageLabel}{" "}
          <span style={{ color: "var(--color-danger)" }}>*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder={cfg.messagePlaceholder}
          value={formState.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          className={`contact-input resize-y ${errors.message ? "contact-input-error" : ""}`}
        />
        {errors.message && (
          <p className="contact-field-error">{errors.message}</p>
        )}
      </div>

      {/* 5. Services checklist */}
      <div className="contact-field pt-1">
        <label className="contact-label">{cfg.servicesLabel}</label>
        <div className="mt-1 grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
          {services.map((service) => {
            const isChecked = formState.services.includes(service.id);
            return (
              <label
                key={service.id}
                onClick={() => toggleService(service.id)}
                className="contact-service-row"
              >
                <div
                  className={`contact-service-box ${isChecked ? "contact-service-box-checked" : ""}`}
                >
                  {isChecked && (
                    <LucideIcon
                      name={lucideIconRegistry.Check}
                      className="h-3 w-3 stroke-3"
                    />
                  )}
                </div>
                <span className="contact-service-label">{service.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 6. Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="contact-submit-btn"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <LucideIcon
              name={lucideIconRegistry.Loader2}
              className="h-4 w-4 animate-spin"
            />
            {cfg.submittingText}
          </span>
        ) : (
          cfg.submitText
        )}
      </button>
    </form>
  );
}
