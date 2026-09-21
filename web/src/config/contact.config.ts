export interface CountryCode {
  code: string;
  dialCode: string;
  label: string;
  flag: string;
}

export interface ServiceOption {
  id: string;
  label: string;
}

export interface ContactChannel {
  icon: "message-circle" | "mail" | "twitter" | "linkedin" | "phone" | "map-pin";
  label: string;
  value?: string;
  href: string;
  external?: boolean;
}

export const CONTACT_CONFIG = {
  hero: {
    heading: "Contact our team",
    subtext:
      "Got any questions about our data & AI advisory or scaling your enterprise platform? We're here to help. Chat to our team and get clarity on your roadmap.",
  },

  form: {
    firstNameLabel: "First name",
    firstNamePlaceholder: "First name",
    lastNameLabel: "Last name",
    lastNamePlaceholder: "Last name",
    emailLabel: "Email",
    emailPlaceholder: "you@company.com",
    phoneLabel: "Phone number",
    phonePlaceholder: "+1 (555) 000-0000",
    messageLabel: "Message",
    messagePlaceholder: "Leave us a message...",
    servicesLabel: "Services",
    submitText: "Send message",
    submittingText: "Sending message...",
    successHeading: "Thanks, we'll be in touch!",
    successSubtext:
      "We've received your message. Ajay or our senior advisory team will get back to you within 1–2 business days.",
    resetButtonText: "Send another message",
  },

  countryCodes: [
    { code: "US", dialCode: "+1", label: "US (+1)", flag: "🇺🇸" },
    { code: "IN", dialCode: "+91", label: "IN (+91)", flag: "🇮🇳" },
    { code: "GB", dialCode: "+44", label: "UK (+44)", flag: "🇬🇧" },
    { code: "AU", dialCode: "+61", label: "AU (+61)", flag: "🇦🇺" },
    { code: "DE", dialCode: "+49", label: "DE (+49)", flag: "🇩🇪" },
    { code: "CA", dialCode: "+1", label: "CA (+1)", flag: "🇨🇦" },
    { code: "SG", dialCode: "+65", label: "SG (+65)", flag: "🇸🇬" },
    { code: "AE", dialCode: "+971", label: "UAE (+971)", flag: "🇦🇪" },
  ] as CountryCode[],

  services: [
    { id: "fabric", label: "Fabric Architecture" },
    { id: "databricks", label: "Databricks & Lakehouse" },
    { id: "ai_advisory", label: "AI & GenAI Advisory" },
    { id: "finops", label: "FinOps & Cost Audit" },
    { id: "training", label: "Corporate Training" },
    { id: "other", label: "Other" },
  ] as ServiceOption[],

  channels: {
    chat: {
      title: "Chat with us",
      subtext: "Speak to our team via live chat or direct channels.",
      links: [
        {
          icon: "mail",
          label: "Shoot us an email",
          href: "mailto:hello@noeveka.com",
        },
        {
          icon: "linkedin",
          label: "Message us on LinkedIn",
          href: "https://www.linkedin.com/company/noeveka",
          external: true,
        },
      ] as ContactChannel[],
    },
    call: {
      title: "Call us",
      subtext: "Call our team Mon-Fri from 8am to 5pm.",
      links: [
        {
          icon: "phone",
          label: "+91 98765 43210",
          href: "tel:+919876543210",
        },
      ] as ContactChannel[],
    },
  },
} as const;
