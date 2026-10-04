import { useEffect, useState } from "react";
import {
  Hero,
  AboutNarrative,
  StatsBar,
  AboutJourney,
  Founder,
  Mission,
  Values,
  AboutCta,
  type HeroStat,
  type JourneyMilestone,
  type StatusBadgeItem,
  type FocusPillarItem,
  type Pillar,
  type ValueItem,
  type StatItem,
} from "@/components/about";
import TrustCompanyLogoBar from "@/components/landing/trust-company-logo-bar";
import { PageHead } from "@/components/seo";
import { SEO_CONFIG } from "@/config/seo.config";
import { getAboutPage } from "@/lib/sanity";

interface AboutPageData {
  hero?: {
    headingLine1?: string;
    headingLine2?: string;
    headingHighlight?: string;
    subtext?: string;
    ctaPrimaryText?: string;
    ctaPrimaryLink?: string;
    ctaSecondaryText?: string;
    ctaSecondaryLink?: string;
    bgImage?: { asset?: unknown; alt?: string };
    stats?: HeroStat[];
  };
  narrativeSection?: {
    topBlock?: {
      eyebrow?: string;
      headingLine1?: string;
      headingLine2?: string;
      headingLine3?: string;
      headingHighlight?: string;
      paragraph1?: string;
      paragraph2?: string;
      punchline?: string;
    };
    image?: { asset?: unknown; alt?: string };
    bottomBlock?: {
      eyebrowPart1?: string;
      eyebrowHighlight?: string;
      headingPlain?: string;
      headingHighlight?: string;
      paragraph?: string;
      punchline?: string;
    };
  };
  stats?: {
    items?: StatItem[];
  };
  journey?: {
    eyebrow?: string;
    heading?: string;
    subtext?: string;
    milestones?: JourneyMilestone[];
  };
  founder?: {
    eyebrow?: string;
    name?: string;
    title?: string;
    bio?: string[];
    photo?: { asset?: unknown; alt?: string };
    photoAlt?: string;
    whyFoundedHeading?: string;
    whyFoundedText?: string;
    whyFoundedParagraphs?: string[];
    statusBadges?: StatusBadgeItem[];
    focusPillars?: FocusPillarItem[];
  };
  mission?: {
    statement?: string;
    pillars?: Pillar[];
  };
  values?: {
    heading?: string;
    items?: ValueItem[];
  };
  cta?: {
    headingLine1?: string;
    headingLine2?: string;
    body?: string;
    primaryCtaText?: string;
    primaryCtaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
  };
  seo?: {
    title?: string;
    description?: string;
  };
}

export default function AboutPage() {
  const [data, setData] = useState<AboutPageData | null>(null);

  useEffect(() => {
    getAboutPage().then(setData).catch(console.error);
  }, []);

  return (
    <>
      <PageHead
        title={data?.seo?.title || SEO_CONFIG.pages.about.title}
        description={data?.seo?.description || SEO_CONFIG.pages.about.description}
      />
      <Hero
        headingLine1={data?.hero?.headingLine1}
        headingLine2={data?.hero?.headingLine2}
        headingHighlight={data?.hero?.headingHighlight}
        subtext={data?.hero?.subtext}
        ctaPrimaryText={data?.hero?.ctaPrimaryText}
        ctaPrimaryLink={data?.hero?.ctaPrimaryLink}
        ctaSecondaryText={data?.hero?.ctaSecondaryText}
        ctaSecondaryLink={data?.hero?.ctaSecondaryLink}
        bgImage={data?.hero?.bgImage}
        stats={data?.hero?.stats}
        photo={data?.founder?.photo}
        photoAlt={data?.founder?.photoAlt}
      />
      <TrustCompanyLogoBar/>
      <AboutNarrative
        topBlock={data?.narrativeSection?.topBlock}
        image={data?.narrativeSection?.image}
        bottomBlock={data?.narrativeSection?.bottomBlock}
      />
      <StatsBar items={data?.stats?.items} />
      <AboutJourney
        eyebrow={data?.journey?.eyebrow}
        heading={data?.journey?.heading}
        subtext={data?.journey?.subtext}
        milestones={data?.journey?.milestones}
      />
      <Founder
        eyebrow={data?.founder?.eyebrow}
        name={data?.founder?.name}
        title={data?.founder?.title}
        bio={data?.founder?.bio ? [...data.founder.bio] : undefined}
        photo={data?.founder?.photo}
        photoAlt={data?.founder?.photoAlt}
        whyFoundedHeading={data?.founder?.whyFoundedHeading}
        whyFoundedText={data?.founder?.whyFoundedText}
        whyFoundedParagraphs={data?.founder?.whyFoundedParagraphs}
        statusBadges={data?.founder?.statusBadges}
        focusPillars={data?.founder?.focusPillars}
      />
      <Mission
        statement={data?.mission?.statement}
        pillars={data?.mission?.pillars ? [...data.mission.pillars] : undefined}
      />
      <Values
        heading={data?.values?.heading}
        items={data?.values?.items ? [...data.values.items] : undefined}
      />
      <AboutCta
        headingLine1={data?.cta?.headingLine1}
        headingLine2={data?.cta?.headingLine2}
        body={data?.cta?.body}
        primaryCtaText={data?.cta?.primaryCtaText}
        primaryCtaLink={data?.cta?.primaryCtaLink}
        secondaryCtaText={data?.cta?.secondaryCtaText}
        secondaryCtaLink={data?.cta?.secondaryCtaLink}
      />
    </>
  );
}
