import { useEffect, useState } from "react";

import CtaStrip, { type CtaStripProps } from "@/components/landing/cta-strip";
import Faq, { type FaqItem } from "@/components/landing/faq";
import Hero, { type HeroProps } from "@/components/landing/hero";
import MetricsBar, { type MetricItem } from "@/components/landing/metrics-bar";
import Testimonials, {
  type Testimonial,
} from "@/components/landing/testimonials";
import TrustCompanyLogoBar from "@/components/landing/trust-company-logo-bar";
import WhatWeDo, { type ServiceItem } from "@/components/landing/what-we-do";
import WhoWeAre, { type WhoWeAreProps } from "@/components/landing/who-we-are";
import WhyNoeveka, {
  type WhyNoevekaDifferentiator,
  type WhyNoevekaFeature,
  type WhyNoevekaStat,
} from "@/components/landing/why-noeveka";
import { PageHead } from "@/components/seo";
import { SEO_CONFIG } from "@/config/seo.config";
import { getHomePage } from "@/lib/sanity";

interface HomePageContent {
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
  hero?: HeroProps;
  servicesSection?: {
    eyebrow?: string;
    heading?: string;
    subtext?: string;
    cardCtaText?: string;
    services?: ServiceItem[];
  };
  aboutSection?: WhoWeAreProps;
  trustCompanyLogoBarSection?: {
    title?: string;
    subtitle?: string;
  };
  testimonialsSection?: {
    eyebrow?: string;
    heading?: string;
    subtext?: string;
    testimonials?: Testimonial[];
  };
  metricsSection?: {
    metrics?: MetricItem[];
  };
  whySection?: {
    eyebrow?: string;
    heading?: string;
    body?: string;
    stats?: WhyNoevekaStat[];
    differentiators?: WhyNoevekaDifferentiator[];
    features?: WhyNoevekaFeature[];
    ctaText?: string;
    ctaLink?: string;
  };
  faqSection?: {
    eyebrow?: string;
    heading?: string;
    subtext?: string;
    faqs?: FaqItem[];
  };
  ctaStrip?: CtaStripProps;
}

export default function LandingPage() {
  const [homePageData, setHomePageData] = useState<HomePageContent | null>(
    null
  );

  useEffect(() => {
    getHomePage()
      .then((data) => setHomePageData(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <PageHead
        title={homePageData?.seo?.metaTitle ?? SEO_CONFIG.pages.landing.title}
        description={
          homePageData?.seo?.metaDescription ??
          SEO_CONFIG.pages.landing.description
        }
      />
      <Hero {...(homePageData?.hero ?? {})} />
      <WhatWeDo
        eyebrow={homePageData?.servicesSection?.eyebrow}
        heading={homePageData?.servicesSection?.heading}
        subtext={homePageData?.servicesSection?.subtext}
        cardCtaText={homePageData?.servicesSection?.cardCtaText}
        services={homePageData?.servicesSection?.services}
      />
      <WhoWeAre
        eyebrow={homePageData?.aboutSection?.eyebrow}
        heading={homePageData?.aboutSection?.heading}
        body={homePageData?.aboutSection?.body}
        ctaText={homePageData?.aboutSection?.ctaText}
        ctaLink={homePageData?.aboutSection?.ctaLink}
        founderName={homePageData?.aboutSection?.founderName}
        founderRole={homePageData?.aboutSection?.founderRole}
        founderPhoto={homePageData?.aboutSection?.founderPhoto}
        statBadgeValue={homePageData?.aboutSection?.statBadgeValue}
        statBadgeLabel={homePageData?.aboutSection?.statBadgeLabel}
        ratingValue={homePageData?.aboutSection?.ratingValue}
        ratingLabel={homePageData?.aboutSection?.ratingLabel}
        skillsHeading={homePageData?.aboutSection?.skillsHeading}
        skills={homePageData?.aboutSection?.skills}
      />
      <TrustCompanyLogoBar
        title={homePageData?.trustCompanyLogoBarSection?.title}
        subtitle={homePageData?.trustCompanyLogoBarSection?.subtitle}
      />
      <Testimonials
        eyebrow={homePageData?.testimonialsSection?.eyebrow}
        heading={homePageData?.testimonialsSection?.heading}
        subtext={homePageData?.testimonialsSection?.subtext}
        testimonials={homePageData?.testimonialsSection?.testimonials}
      />
      <MetricsBar metrics={homePageData?.metricsSection?.metrics} />
      <WhyNoeveka
        eyebrow={homePageData?.whySection?.eyebrow}
        heading={homePageData?.whySection?.heading}
        body={homePageData?.whySection?.body}
        stats={homePageData?.whySection?.stats}
        differentiators={homePageData?.whySection?.differentiators}
        features={homePageData?.whySection?.features}
        ctaText={homePageData?.whySection?.ctaText}
        ctaLink={homePageData?.whySection?.ctaLink}
      />
      <Faq
        eyebrow={homePageData?.faqSection?.eyebrow}
        heading={homePageData?.faqSection?.heading}
        subtext={homePageData?.faqSection?.subtext}
        faqs={homePageData?.faqSection?.faqs}
      />
      <CtaStrip
        eyebrow={homePageData?.ctaStrip?.eyebrow}
        headingPart={homePageData?.ctaStrip?.headingPart}
        headingHighlight={homePageData?.ctaStrip?.headingHighlight}
        body={homePageData?.ctaStrip?.body}
        primaryCtaText={homePageData?.ctaStrip?.primaryCtaText}
        primaryCtaLink={homePageData?.ctaStrip?.primaryCtaLink}
        secondaryCtaText={homePageData?.ctaStrip?.secondaryCtaText}
        secondaryCtaLink={homePageData?.ctaStrip?.secondaryCtaLink}
      />
    </>
  );
}
