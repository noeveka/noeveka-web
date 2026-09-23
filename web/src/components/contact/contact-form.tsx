import { useState } from "react";

import { motion } from "framer-motion";

import { LucideIcon } from "@/components/lucide-icons";
import { CONTACT_CONFIG } from "@/config/contact.config";

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

export default function ContactForm({ data }: ContactFormProps) {
  const cfg = {
    firstNameLabel: data?.firstNameLabel ?? CONTACT_CONFIG.form.firstNameLabel,
    firstNamePlaceholder: data?.firstNamePlaceholder ?? CONTACT_CONFIG.form.firstNamePlaceholder,
    lastNameLabel: data?.lastNameLabel ?? CONTACT_CONFIG.form.lastNameLabel,
    lastNamePlaceholder: data?.lastNamePlaceholder ?? CONTACT_CONFIG.form.lastNamePlaceholder,
    emailLabel: data?.emailLabel ?? CONTACT_CONFIG.form.emailLabel,
    emailPlaceholder: data?.emailPlaceholder ?? CONTACT_CONFIG.form.emailPlaceholder,
    phoneLabel: data?.phoneLabel ?? CONTACT_CONFIG.form.phoneLabel,
    phonePlaceholder: data?.phonePlaceholder ?? CONTACT_CONFIG.form.phonePlaceholder,
    messageLabel: data?.messageLabel ?? CONTACT_CONFIG.form.messageLabel,
    messagePlaceholder: data?.messagePlaceholder ?? CONTACT_CONFIG.form.messagePlaceholder,
    servicesLabel: data?.servicesLabel ?? CONTACT_CONFIG.form.servicesLabel,
    submitText: data?.submitText ?? CONTACT_CONFIG.form.submitText,
    submittingText: data?.submittingText ?? CONTACT_CONFIG.form.submittingText,
    successHeading: data?.successHeading ?? CONTACT_CONFIG.form.successHeading,
    successSubtext: data?.successSubtext ?? CONTACT_CONFIG.form.successSubtext,
    resetButtonText: data?.resetButtonText ?? CONTACT_CONFIG.form.resetButtonText,
  };

  const services = data?.services && data.services.length > 0 ? data.services : CONTACT_CONFIG.services;
  const countryCodes = CONTACT_CONFIG.countryCodes;

  const [formState, setFormState] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "US",
    phone: "",
    message: "",
    services: [],
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!formState.firstName.trim()) {
      nextErrors.firstName = "First name is required.";
    }

    if (!formState.lastName.trim()) {
      nextErrors.lastName = "Last name is required.";
    }

    if (!formState.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formState.message.trim()) {
      nextErrors.message = "Message is required.";
    }

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

  const [serverError, setServerError] = useState<string | null>(null);

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

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setServerError(data?.error || "Unable to send your message right now. Please try again or email us directly.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error("Contact form submit error:", err);
      setServerError("Network error. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormState({
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "US",
      phone: "",
      message: "",
      services: [],
    });
    setErrors({});
    setServerError(null);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center justify-center rounded-2xl border border-stroke-default bg-surface p-8 text-center shadow-sm sm:p-12"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-tint text-brand">
          <LucideIcon name="check-circle-2" className="h-8 w-8" />
        </div>

        <h3 className="mt-5 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
          {cfg.successHeading}
        </h3>

        <p className="mt-2.5 max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
          {cfg.successSubtext}
        </p>

        <button
          type="button"
          onClick={handleReset}
          className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800"
        >
          {cfg.resetButtonText}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {serverError && (
        <div className="flex items-center gap-2.5 rounded-lg border border-red-200 bg-red-50 p-3.5 text-sm text-red-700">
          <LucideIcon name="alert-circle" className="h-4 w-4 shrink-0 text-red-500" />
          <span>{serverError}</span>
        </div>
      )}

      {/* 1. First name + Last name */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* First Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="firstName"
            className="text-xs font-semibold text-neutral-700 sm:text-sm"
          >
            {cfg.firstNameLabel} <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            placeholder={cfg.firstNamePlaceholder}
            value={formState.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className={`w-full rounded-lg border bg-surface px-3.5 py-2.5 text-sm text-neutral-900 transition-all focus:ring-2 focus:outline-none ${
              errors.firstName
                ? "border-red-500 focus:ring-red-100"
                : "hover:border-neutral-400 focus:border-brand focus:ring-brand/10"
            }`}
          />
          {errors.firstName && (
            <p className="text-xs font-medium text-red-500">
              {errors.firstName}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="lastName"
            className="text-xs font-semibold text-neutral-700 sm:text-sm"
          >
            {cfg.lastNameLabel} <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            placeholder={cfg.lastNamePlaceholder}
            value={formState.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className={`w-full rounded-lg border bg-surface px-3.5 py-2.5 text-sm transition-all placeholder:text-neutral-400 focus:ring-2 focus:outline-none ${
              errors.lastName
                ? "border-red-500 focus:ring-red-100"
                : "border-neutral-300 hover:border-neutral-400 focus:ring-brand/10"
            }`}
          />
          {errors.lastName && (
            <p className="text-xs font-medium text-red-500">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      {/* 2. Email */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="text-xs font-semibold text-neutral-700 sm:text-sm"
        >
          {cfg.emailLabel} <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder={cfg.emailPlaceholder}
          value={formState.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className={`w-full rounded-lg border bg-surface px-3.5 py-2.5 text-sm transition-all placeholder:text-neutral-400 focus:ring-2 focus:outline-none ${
            errors.email
              ? "border-red-500 focus:ring-red-100"
              : "hover:border-neutral-400 focus:border-brand focus:ring-brand/10"
          }`}
        />
        {errors.email && (
          <p className="text-xs font-medium text-red-500">{errors.email}</p>
        )}
      </div>

      {/* 3. Phone number */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="phone"
          className="text-xs font-semibold text-neutral-700 sm:text-sm"
        >
          {cfg.phoneLabel}
        </label>
        <div className="relative flex rounded-lg border border-neutral-300 bg-surface transition-all focus-within:ring-2 focus-within:ring-brand/10 hover:border-neutral-400">
          {/* Country Code Prefix */}
          <div className="relative flex items-center border-r border-neutral-300 bg-neutral-50/50 pr-2 pl-3">
            <select
              aria-label="Country Code"
              value={formState.countryCode}
              onChange={(e) => handleInputChange("countryCode", e.target.value)}
              className="cursor-pointer appearance-none bg-transparent pr-6 text-sm font-medium text-neutral-700 focus:outline-none"
            >
              {countryCodes.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.code} {item.dialCode}
                </option>
              ))}
            </select>
            <LucideIcon
              name="chevron-down"
              className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-neutral-500"
            />
          </div>

          {/* Number Input */}
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder={cfg.phonePlaceholder}
            value={formState.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="w-full rounded-r-lg bg-transparent px-3.5 py-2.5 text-sm placeholder:text-neutral-400 focus:outline-none"
          />
        </div>
      </div>

      {/* 4. Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-xs font-semibold text-neutral-700 sm:text-sm"
        >
          {cfg.messageLabel} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder={cfg.messagePlaceholder}
          value={formState.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          className={`w-full resize-y rounded-lg border bg-surface px-3.5 py-2.5 text-sm text-neutral-900 transition-all focus:ring-2 focus:outline-none ${
            errors.message
              ? "border-red-500 focus:ring-red-100"
              : "hover:border-neutral-400 focus:border-brand focus:ring-brand/10"
          }`}
        />
        {errors.message && (
          <p className="text-xs font-medium text-red-500">{errors.message}</p>
        )}
      </div>

      {/* 5. Services Checklist */}
      <div className="flex flex-col gap-2.5 pt-1">
        <label className="text-xs font-semibold text-neutral-700 sm:text-sm">
          {cfg.servicesLabel}
        </label>

        {/* 2-column on tablet/desktop, 1-column on mobile */}
        <div className="grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
          {services.map((service) => {
            const isChecked = formState.services.includes(service.id);
            return (
              <label
                key={service.id}
                onClick={() => toggleService(service.id)}
                className="group flex cursor-pointer items-center gap-2.5 select-none"
              >
                <div
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-all ${
                    isChecked
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-300 bg-surface group-hover:border-neutral-400"
                  }`}
                >
                  {isChecked && (
                    <LucideIcon name="check" className="h-3 w-3 stroke-3" />
                  )}
                </div>
                <span className="text-sm text-neutral-700 transition-colors group-hover:text-neutral-900">
                  {service.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 6. Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-3 flex w-full cursor-pointer items-center justify-center rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand/90 active:scale-[0.99] disabled:opacity-70 sm:text-base"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <LucideIcon name="loader-2" className="h-4 w-4 animate-spin" />
            {cfg.submittingText}
          </span>
        ) : (
          cfg.submitText
        )}
      </button>
    </form>
  );
}
