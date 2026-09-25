import { useEffect, useState } from "react";
import Hero from "@/components/about/hero";
import AboutNarrative from "@/components/about/about-narrative";
import StatsBar from "@/components/about/stats-bar";
import AboutJourney from "@/components/about/about-journey";
import Founder from "@/components/about/founder";
import Mission from "@/components/about/mission";
import Values from "@/components/about/values";
import AboutCta from "@/components/about/about-cta";
import { PageHead } from "@/components/seo";
import { SEO_CONFIG } from "@/config/seo.config";
import { getAboutPage } from "@/lib/sanity";

interface AboutPageData {
  hero?: {
    badge?: string;
    headingLine1?: string;
    headingLine2?: string;
    headingHighlight?: string;
    subheading?: string;
    subtext?: string;
    ctaPrimaryText?: string;
    ctaPrimaryLink?: string;
    ctaSecondaryText?: string;
    ctaSecondaryLink?: string;
    bgImage?: { asset?: unknown; alt?: string };
    mobileBgImage?: { asset?: unknown; alt?: string };
    badgeTags?: string[];
    stats?: Array<{ value: string; label: string }>;
    mobileStats?: Array<{ value: string; label: string }>;
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
    items?: Array<{ value: string; label: string; sub: string }>;
  };
  journey?: {
    eyebrow?: string;
    heading?: string;
    subtext?: string;
    milestones?: Array<{
      year: string;
      stage?: string;
      location?: string;
      title: string;
      description: string;
      isHighlight?: boolean;
    }>;
  };
  founder?: {
    eyebrow?: string;
    heading?: string;
    name?: string;
    initials?: string;
    title?: string;
    company?: string;
    tagline?: string;
    bio?: string[];
    photo?: { asset?: unknown; alt?: string };
    photoAlt?: string;
    credentials?: Array<{ label: string; value: string }>;
    whyFoundedHeading?: string;
    whyFoundedText?: string;
    linkedinUrl?: string;
    email?: string;
  };
  mission?: {
    statement?: string;
    pillars?: Array<{ number: string; title: string; desc: string }>;
  };
  values?: {
    heading?: string;
    items?: Array<{ icon: string; title: string; desc: string }>;
  };
  cta?: {
    headingLine1?: string;
    headingLine2?: string;
    headingPlain?: string;
    headingHighlight?: string;
    headingTail?: string;
    body?: string;
    primaryCtaText?: string;
    primaryCtaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
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
        title={SEO_CONFIG.pages.about.title}
        description={SEO_CONFIG.pages.about.description}
      />
      <Hero
        badge={data?.hero?.badge}
        headingLine1={data?.hero?.headingLine1}
        headingLine2={data?.hero?.headingLine2}
        headingHighlight={data?.hero?.headingHighlight}
        subheading={data?.hero?.subheading}
        subtext={data?.hero?.subtext}
        ctaPrimaryText={data?.hero?.ctaPrimaryText}
        ctaPrimaryLink={data?.hero?.ctaPrimaryLink}
        ctaSecondaryText={data?.hero?.ctaSecondaryText}
        ctaSecondaryLink={data?.hero?.ctaSecondaryLink}
        bgImage={data?.hero?.bgImage}
        mobileBgImage={data?.hero?.mobileBgImage}
        badgeTags={data?.hero?.badgeTags}
        stats={data?.hero?.stats}
        mobileStats={data?.hero?.mobileStats}
        photo={data?.founder?.photo}
        photoAlt={data?.founder?.photoAlt}
      />
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
        heading={data?.founder?.heading}
        name={data?.founder?.name}
        initials={data?.founder?.initials}
        title={data?.founder?.title}
        company={data?.founder?.company}
        tagline={data?.founder?.tagline}
        bio={data?.founder?.bio ? [...data.founder.bio] : undefined}
        photo={data?.founder?.photo}
        photoAlt={data?.founder?.photoAlt}
        credentials={data?.founder?.credentials}
        whyFoundedHeading={data?.founder?.whyFoundedHeading}
        whyFoundedText={data?.founder?.whyFoundedText}
        linkedinUrl={data?.founder?.linkedinUrl}
        email={data?.founder?.email}
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
        headingPlain={data?.cta?.headingPlain}
        headingHighlight={data?.cta?.headingHighlight}
        headingTail={data?.cta?.headingTail}
        body={data?.cta?.body}
        primaryCtaText={data?.cta?.primaryCtaText}
        primaryCtaLink={data?.cta?.primaryCtaLink}
        secondaryCtaText={data?.cta?.secondaryCtaText}
        secondaryCtaLink={data?.cta?.secondaryCtaLink}
      />
    </>
  );
}
