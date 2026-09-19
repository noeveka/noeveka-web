import { useEffect, useState } from "react";
import CtaStrip from "@/components/landing/cta-strip";
import Faq from "@/components/landing/faq";
import Hero from "@/components/landing/hero";
import MetricsBar from "@/components/landing/metrics-bar";
import Testimonials from "@/components/landing/testimonials";
import WhatWeDo from "@/components/landing/what-we-do";
import WhoWeAre from "@/components/landing/who-we-are";
import WhyNoeveka from "@/components/landing/why-noeveka";
import { getHomePage } from "@/lib/sanity";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type HomePageData = Record<string, any>;

export default function LandingPage() {
  const [page, setPage] = useState<HomePageData | null>(null);

  useEffect(() => {
    getHomePage().then(setPage).catch(console.error);
  }, []);

  return (
    <>
      <Hero {...(page?.hero ?? {})} />
      <WhatWeDo
        eyebrow={page?.servicesSection?.eyebrow}
        heading={page?.servicesSection?.heading}
        subtext={page?.servicesSection?.subtext}
        cardCtaText={page?.servicesSection?.cardCtaText}
      />
      <WhoWeAre
        eyebrow={page?.aboutSection?.eyebrow}
        heading={page?.aboutSection?.heading}
        body={page?.aboutSection?.body}
        ctaText={page?.aboutSection?.ctaText}
        ctaLink={page?.aboutSection?.ctaLink}
        founderName={page?.aboutSection?.founderName}
        founderRole={page?.aboutSection?.founderRole}
        founderPhoto={page?.aboutSection?.founderPhoto}
        statBadgeValue={page?.aboutSection?.statBadgeValue}
        statBadgeLabel={page?.aboutSection?.statBadgeLabel}
        ratingValue={page?.aboutSection?.ratingValue}
        ratingLabel={page?.aboutSection?.ratingLabel}
        skillsHeading={page?.aboutSection?.skillsHeading}
        skills={page?.aboutSection?.skills}
      />
      <Testimonials
        eyebrow={page?.testimonialsSection?.eyebrow}
        heading={page?.testimonialsSection?.heading}
        subtext={page?.testimonialsSection?.subtext}
      />
      <MetricsBar metrics={page?.metricsSection?.metrics} />
      <WhyNoeveka
        eyebrow={page?.whySection?.eyebrow}
        heading={page?.whySection?.heading}
        body={page?.whySection?.body}
        stats={page?.whySection?.stats}
        differentiators={page?.whySection?.differentiators}
        features={page?.whySection?.features}
        ctaText={page?.whySection?.ctaText}
        ctaLink={page?.whySection?.ctaLink}
      />
      <Faq
        eyebrow={page?.faqSection?.eyebrow}
        heading={page?.faqSection?.heading}
        subtext={page?.faqSection?.subtext}
        faqs={page?.faqSection?.faqs}
      />
      <CtaStrip
        eyebrow={page?.ctaStrip?.eyebrow}
        headingPart={page?.ctaStrip?.headingPart}
        headingHighlight={page?.ctaStrip?.headingHighlight}
        body={page?.ctaStrip?.body}
        primaryCtaText={page?.ctaStrip?.primaryCtaText}
        primaryCtaLink={page?.ctaStrip?.primaryCtaLink}
        secondaryCtaText={page?.ctaStrip?.secondaryCtaText}
        secondaryCtaLink={page?.ctaStrip?.secondaryCtaLink}
      />
    </>
  );
}
