import { useState, useEffect } from "react";
import { PageHead } from "@/components/seo";
import { SEO_CONFIG } from "@/config/seo.config";
import { SERVICES_CONFIG, type ServiceFocusArea } from "@/config/services.config";
import { getServicesPage } from "@/lib/sanity";
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
  focusAreas?: ServiceFocusArea[];
  impactPrinciplesSection?: {
    heading?: string;
    body?: string;
    principles?: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  engagementSection?: {
    heading?: string;
    subtext?: string;
    steps?: Array<{
      number: string;
      title: string;
      desc: string;
    }>;
  };
  industrySection?: {
    quote?: {
      quote?: string;
      author?: string;
      role?: string;
    };
    industries?: Array<{
      label: string;
      icon: string;
    }>;
  };
  ctaSection?: {
    headingPart?: string;
    headingHighlight?: string;
    body?: string;
    primaryCtaText?: string;
    primaryCtaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
  };
}

export default function ServicesPage() {
  const [data, setData] = useState<ServicesPageData | null>(null);

  useEffect(() => {
    getServicesPage().then(setData).catch(console.error);
  }, []);
  console.log('This is the Service page data coming from sanity', data)

  return (
    <>
      <PageHead
        title={SEO_CONFIG.pages.services.title}
        description={SEO_CONFIG.pages.services.description}
      />
      <main>
        <ServicesHero
          headingLine1={data?.hero?.headingLine1 ?? SERVICES_CONFIG.hero.headingLine1}
          headingLine2={data?.hero?.headingLine2 ?? SERVICES_CONFIG.hero.headingLine2}
          headingHighlight={data?.hero?.headingHighlight ?? SERVICES_CONFIG.hero.headingHighlight}
          subtext={data?.hero?.subtext ?? SERVICES_CONFIG.hero.subtext}
          ctaPrimaryText={data?.hero?.ctaPrimaryText ?? SERVICES_CONFIG.hero.ctaPrimaryText}
          ctaPrimaryLink={data?.hero?.ctaPrimaryLink ?? SERVICES_CONFIG.hero.ctaPrimaryLink}
          focusAreas={data?.focusAreas ?? SERVICES_CONFIG.focusAreas}
        />
        <TrustCompanyLogoBar />
        <ImpactPrinciples
          heading={data?.impactPrinciplesSection?.heading ?? SERVICES_CONFIG.impactPrinciplesSection.heading}
          body={data?.impactPrinciplesSection?.body ?? SERVICES_CONFIG.impactPrinciplesSection.body}
          principles={data?.impactPrinciplesSection?.principles ?? SERVICES_CONFIG.impactPrinciplesSection.principles}
        />
        <EngagementProcess
          subtext={data?.engagementSection?.subtext ?? SERVICES_CONFIG.engagementSection.subtext}
          steps={data?.engagementSection?.steps ?? SERVICES_CONFIG.engagementSection.steps}
        />
        <IndustryDomains
          quote={data?.industrySection?.quote ?? SERVICES_CONFIG.founderQuote}
          industries={data?.industrySection?.industries ?? SERVICES_CONFIG.industries}
        />
        <ServicesCta
          headingPart={data?.ctaSection?.headingPart ?? SERVICES_CONFIG.ctaSection.headingPart}
          headingHighlight={data?.ctaSection?.headingHighlight ?? SERVICES_CONFIG.ctaSection.headingHighlight}
          body={data?.ctaSection?.body ?? SERVICES_CONFIG.ctaSection.body}
          primaryCtaText={data?.ctaSection?.primaryCtaText ?? SERVICES_CONFIG.ctaSection.primaryCtaText}
          primaryCtaLink={data?.ctaSection?.primaryCtaLink ?? SERVICES_CONFIG.ctaSection.primaryCtaLink}
          secondaryCtaText={data?.ctaSection?.secondaryCtaText ?? SERVICES_CONFIG.ctaSection.secondaryCtaText}
          secondaryCtaLink={data?.ctaSection?.secondaryCtaLink ?? SERVICES_CONFIG.ctaSection.secondaryCtaLink}
        />
      </main>
    </>
  );
}
