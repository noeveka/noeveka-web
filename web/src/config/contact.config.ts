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
  icon:
    "message-circle" | "mail" | "twitter" | "linkedin" | "phone" | "map-pin";
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
    phonePlaceholder: "(+971) 000000000",
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
    { code: "AE", dialCode: "+971", label: "United Arab Emirates (+971)", flag: "🇦🇪" },
    { code: "NL", dialCode: "+31", label: "Netherlands (+31)", flag: "🇳🇱" },
    { code: "IN", dialCode: "+91", label: "India (+91)", flag: "🇮🇳" },
    { code: "US", dialCode: "+1", label: "United States (+1)", flag: "🇺🇸" },
    { code: "GB", dialCode: "+44", label: "United Kingdom (+44)", flag: "🇬🇧" },
    { code: "AU", dialCode: "+61", label: "Australia (+61)", flag: "🇦🇺" },
    { code: "CA", dialCode: "+1", label: "Canada (+1)", flag: "🇨🇦" },
    { code: "DE", dialCode: "+49", label: "Germany (+49)", flag: "🇩🇪" },
    { code: "FR", dialCode: "+33", label: "France (+33)", flag: "🇫🇷" },
    { code: "CH", dialCode: "+41", label: "Switzerland (+41)", flag: "🇨🇭" },
    { code: "IE", dialCode: "+353", label: "Ireland (+353)", flag: "🇮🇪" },
    { code: "SG", dialCode: "+65", label: "Singapore (+65)", flag: "🇸🇬" },
    { code: "SA", dialCode: "+966", label: "Saudi Arabia (+966)", flag: "🇸🇦" },
    { code: "QA", dialCode: "+974", label: "Qatar (+974)", flag: "🇶🇦" },
    { code: "BE", dialCode: "+32", label: "Belgium (+32)", flag: "🇧🇪" },
    { code: "ES", dialCode: "+34", label: "Spain (+34)", flag: "🇪🇸" },
    { code: "IT", dialCode: "+39", label: "Italy (+39)", flag: "🇮🇹" },
    { code: "SE", dialCode: "+46", label: "Sweden (+46)", flag: "🇸🇪" },
    { code: "DK", dialCode: "+45", label: "Denmark (+45)", flag: "🇩🇰" },
    { code: "NO", dialCode: "+47", label: "Norway (+47)", flag: "🇳🇴" },
    { code: "NZ", dialCode: "+64", label: "New Zealand (+64)", flag: "🇳🇿" },
    { code: "JP", dialCode: "+81", label: "Japan (+81)", flag: "🇯🇵" },
    { code: "ZA", dialCode: "+27", label: "South Africa (+27)", flag: "🇿🇦" },
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
          href: "mailto:connect@noeveka.com",
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
