import { useState, useEffect } from "react";
import { PageHead } from "@/components/seo";
import { SEO_CONFIG } from "@/config/seo.config";
import { SERVICES_CONFIG, type ServiceFocusArea } from "@/config/services.config";
import {
  ServicesHero,
  EngagementProcess,
  ImpactPrinciples,
  IndustryDomains,
  ServicesCta,
} from "@/components/services";
import TrustCompanyLogoBar from "@/components/landing/trust-company-logo-bar";

interface ServicesPageData {
  hero?: {
    badge?: string;
    headingLine1?: string;
    headingLine2?: string;
    headingHighlight?: string;
    subtext?: string;
    ctaPrimaryText?: string;
    ctaPrimaryLink?: string;
  };
  focusAreas?: readonly ServiceFocusArea[];
}

export default function ServicesPage() {
  // Config data is used as the current state and fallback.
  // When Sanity schema & API are configured in the next phase,
  // this state will be populated by Sanity while falling back seamlessly to SERVICES_CONFIG.
  const [data, setData] = useState<ServicesPageData>({
    hero: {
      badge: SERVICES_CONFIG.hero.badge,
      headingLine1: SERVICES_CONFIG.hero.headingLine1,
      headingLine2: SERVICES_CONFIG.hero.headingLine2,
      headingHighlight: SERVICES_CONFIG.hero.headingHighlight,
      subtext: SERVICES_CONFIG.hero.subtext,
      ctaPrimaryText: SERVICES_CONFIG.hero.ctaPrimaryText,
      ctaPrimaryLink: SERVICES_CONFIG.hero.ctaPrimaryLink,
    },
    focusAreas: SERVICES_CONFIG.focusAreas,
  });

  useEffect(() => {
    // When Sanity is configured, replace with getServicesPage().then(setData).catch(console.error);
    // Setting config data as initial state & fallback
    setData({
      hero: {
        badge: SERVICES_CONFIG.hero.badge,
        headingLine1: SERVICES_CONFIG.hero.headingLine1,
        headingLine2: SERVICES_CONFIG.hero.headingLine2,
        headingHighlight: SERVICES_CONFIG.hero.headingHighlight,
        subtext: SERVICES_CONFIG.hero.subtext,
        ctaPrimaryText: SERVICES_CONFIG.hero.ctaPrimaryText,
        ctaPrimaryLink: SERVICES_CONFIG.hero.ctaPrimaryLink,
      },
      focusAreas: SERVICES_CONFIG.focusAreas,
    });
  }, []);

  return (
    <>
      <PageHead
        title={SEO_CONFIG.pages.services.title}
        description={SEO_CONFIG.pages.services.description}
      />
      <main>
        <ServicesHero
          headingLine1={data.hero?.headingLine1}
          headingLine2={data.hero?.headingLine2}
          headingHighlight={data.hero?.headingHighlight}
          subtext={data.hero?.subtext}
          ctaPrimaryText={data.hero?.ctaPrimaryText}
          ctaPrimaryLink={data.hero?.ctaPrimaryLink}
          focusAreas={data.focusAreas}
        />
        <TrustCompanyLogoBar/>
        <ImpactPrinciples
          heading={SERVICES_CONFIG.impactPrinciplesSection.heading}
          body={SERVICES_CONFIG.impactPrinciplesSection.body}
          principles={SERVICES_CONFIG.impactPrinciplesSection.principles}
        />
        <EngagementProcess
          subtext={SERVICES_CONFIG.engagementSection.subtext}
          steps={SERVICES_CONFIG.engagementSection.steps}
        />
        <IndustryDomains
          quote={SERVICES_CONFIG.founderQuote}
          industries={SERVICES_CONFIG.industries}
        />
        <ServicesCta
          headingPart={SERVICES_CONFIG.ctaSection.headingPart}
          headingHighlight={SERVICES_CONFIG.ctaSection.headingHighlight}
          body={SERVICES_CONFIG.ctaSection.body}
          primaryCtaText={SERVICES_CONFIG.ctaSection.primaryCtaText}
          primaryCtaLink={SERVICES_CONFIG.ctaSection.primaryCtaLink}
          secondaryCtaText={SERVICES_CONFIG.ctaSection.secondaryCtaText}
          secondaryCtaLink={SERVICES_CONFIG.ctaSection.secondaryCtaLink}
        />
      </main>
    </>
  );
}
