import { useEffect, useState } from "react";
import { PageHead } from "@/components/seo";
import { SEO_CONFIG } from "@/config/seo.config";
import ContactHero from "@/components/contact/contact-hero";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import { getContactPage } from "@/lib/sanity";

interface ContactPageData {
  hero?: {
    heading?: string;
    subtext?: string;
  };
  form?: {
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
  };
  channels?: {
    chat?: {
      title?: string;
      subtext?: string;
      links?: Array<{
        icon?: string;
        label?: string;
        href?: string;
        external?: boolean;
      }>;
    };
    call?: {
      title?: string;
      subtext?: string;
      links?: Array<{
        icon?: string;
        label?: string;
        href?: string;
      }>;
    };
  };
}

export default function ContactPage() {
  const [data, setData] = useState<ContactPageData | null>(null);

  useEffect(() => {
    getContactPage()
      .then((res) => {
        if (res) setData(res);
      })
      .catch((err) => {
        console.error("Failed to load contact page from Sanity:", err);
      });
  }, []);

  return (
    <>
      <PageHead
        title={SEO_CONFIG.pages.contact.title}
        description={SEO_CONFIG.pages.contact.description}
      />

      <div className="min-h-screen bg-surface pb-20 sm:pb-28">
        {/* 1. Hero Header */}
        <ContactHero data={data?.hero} />

        {/* 2. Main Content: Form (Left) & Direct Info (Right) */}
        <div className="lp-container lp-px mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm data={data?.form} />
            </div>

            {/* Right: Direct Reachout Channels */}
            <div className="lg:col-span-5 pt-4 lg:pt-0">
              <ContactInfo data={data?.channels} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
