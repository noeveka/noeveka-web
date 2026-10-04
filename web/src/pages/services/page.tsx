import { useEffect, useState } from "react";

import TrustCompanyLogoBar from "@/components/landing/trust-company-logo-bar";
import { PageHead } from "@/components/seo";
import {
  EngagementProcess,
  ImpactPrinciples,
  IndustryDomains,
  ServicesCta,
  ServicesHero,
  type EngagementProcessProps,
  type ImpactPrinciplesProps,
  type IndustryDomainsProps,
  type ServicesCtaProps,
  type ServicesHeroProps,
} from "@/components/services";
import {
  SERVICES_CONFIG,
  type ServiceFocusArea,
} from "@/config/services.config";
import { getServicesPage } from "@/lib/sanity";

interface ServicesPageData {
  seo?: {
    title?: string;
    description?: string;
  };
  hero?: ServicesHeroProps;
  focusAreas?: ServiceFocusArea[];
  impactPrinciplesSection?: ImpactPrinciplesProps;
  engagementSection?: EngagementProcessProps;
  industrySection?: {
    title?: string;
    quote?: IndustryDomainsProps["quote"];
    industries?: IndustryDomainsProps["industries"];
  };
  ctaSection?: ServicesCtaProps;
}

export default function ServicesPage() {
  const [data, setData] = useState<ServicesPageData | null>(null);

  useEffect(() => {
    getServicesPage().then(setData).catch(console.error);
  }, []);

  const metaTitle = data?.seo?.title ?? SERVICES_CONFIG.seo.title;
  const metaDescription =
    data?.seo?.description ?? SERVICES_CONFIG.seo.description;

  return (
    <>
      <PageHead title={metaTitle} description={metaDescription} />
      <main>
        <ServicesHero
          headingLine1={
            data?.hero?.headingLine1 ?? SERVICES_CONFIG.hero.headingLine1
          }
          headingLine2={
            data?.hero?.headingLine2 ?? SERVICES_CONFIG.hero.headingLine2
          }
          headingHighlight={
            data?.hero?.headingHighlight ??
            SERVICES_CONFIG.hero.headingHighlight
          }
          subtext={data?.hero?.subtext ?? SERVICES_CONFIG.hero.subtext}
          focusAreas={data?.focusAreas ?? SERVICES_CONFIG.focusAreas}
        />
        <TrustCompanyLogoBar />
        <ImpactPrinciples
          heading={
            data?.impactPrinciplesSection?.heading ??
            SERVICES_CONFIG.impactPrinciplesSection.heading
          }
          body={
            data?.impactPrinciplesSection?.body ??
            SERVICES_CONFIG.impactPrinciplesSection.body
          }
          principles={
            data?.impactPrinciplesSection?.principles ??
            SERVICES_CONFIG.impactPrinciplesSection.principles
          }
        />
        <EngagementProcess
          heading={
            data?.engagementSection?.heading ??
            SERVICES_CONFIG.engagementSection.heading
          }
          subtext={
            data?.engagementSection?.subtext ??
            SERVICES_CONFIG.engagementSection.subtext
          }
          steps={
            data?.engagementSection?.steps ??
            SERVICES_CONFIG.engagementSection.steps
          }
        />
        <IndustryDomains
          title={
            data?.industrySection?.title ?? SERVICES_CONFIG.industriesTitle
          }
          quote={data?.industrySection?.quote ?? SERVICES_CONFIG.founderQuote}
          industries={
            data?.industrySection?.industries ?? SERVICES_CONFIG.industries
          }
        />
        <ServicesCta
          headingPart={
            data?.ctaSection?.headingPart ??
            SERVICES_CONFIG.ctaSection.headingPart
          }
          headingHighlight={
            data?.ctaSection?.headingHighlight ??
            SERVICES_CONFIG.ctaSection.headingHighlight
          }
          body={data?.ctaSection?.body ?? SERVICES_CONFIG.ctaSection.body}
          primaryCtaText={
            data?.ctaSection?.primaryCtaText ??
            SERVICES_CONFIG.ctaSection.primaryCtaText
          }
          primaryCtaLink={
            data?.ctaSection?.primaryCtaLink ??
            SERVICES_CONFIG.ctaSection.primaryCtaLink
          }
          secondaryCtaText={
            data?.ctaSection?.secondaryCtaText ??
            SERVICES_CONFIG.ctaSection.secondaryCtaText
          }
          secondaryCtaLink={
            data?.ctaSection?.secondaryCtaLink ??
            SERVICES_CONFIG.ctaSection.secondaryCtaLink
          }
        />
      </main>
    </>
  );
}

