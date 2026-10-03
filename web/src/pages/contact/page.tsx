import { useEffect, useState } from "react";

import {
  ContactForm,
  ContactHero,
  ContactInfo,
  type ContactChannelsData,
  type ContactFormData,
  type ContactHeroProps,
} from "@/components/contact";
import { PageHead } from "@/components/seo";
import { CONTACT_CONFIG } from "@/config/contact.config";
import { getContactPage } from "@/lib/sanity";

interface ContactPageData {
  seo?: {
    title?: string;
    description?: string;
  };
  hero?: ContactHeroProps["data"];
  form?: ContactFormData;
  channels?: ContactChannelsData;
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

  const metaTitle = data?.seo?.title ?? CONTACT_CONFIG.seo.title;
  const metaDescription =
    data?.seo?.description ?? CONTACT_CONFIG.seo.description;

  return (
    <>
      <PageHead title={metaTitle} description={metaDescription} />

      <div className="contact-page">
        {/* 1. Hero Header */}
        <ContactHero data={data?.hero} />

        {/* 2. Main Content: Form (Left) & Direct Info (Right) */}
        <div className="lp-container lp-px mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm data={data?.form} />
            </div>

            {/* Right: Direct Reachout Channels */}
            <div className="pt-4 lg:col-span-5 lg:pt-0">
              <ContactInfo data={data?.channels} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

