import { useEffect, useState } from "react";
import Hero from "@/components/about/hero";
import StatsBar from "@/components/about/stats-bar";
import CredentialsStrip from "@/components/about/credentials-strip";
import Founder from "@/components/about/founder";
import Mission from "@/components/about/mission";
import Values from "@/components/about/values";
import AboutCta from "@/components/about/about-cta";
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
    badgeTags?: string[];
    mobileStats?: Array<{ value: string; label: string }>;
  };
  stats?: {
    items?: Array<{ value: string; label: string; sub: string }>;
  };
  resourcesTeaser?: {
    heading?: string;
    headingHighlight?: string;
    subtext?: string;
    ctaText?: string;
    ctaLink?: string;
  };
  founder?: {
    name?: string;
    initials?: string;
    title?: string;
    company?: string;
    tagline?: string;
    bio?: string[];
    photo?: { asset?: unknown; alt?: string };
    photoAlt?: string;
    credentials?: Array<{ label: string; value: string }>;
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
        headingLine1={data?.hero?.headingLine1}
        headingLine2={data?.hero?.headingLine2}
        headingHighlight={data?.hero?.headingHighlight}
        subtext={data?.hero?.subtext}
        ctaPrimaryText={data?.hero?.ctaPrimaryText}
        ctaPrimaryLink={data?.hero?.ctaPrimaryLink}
        ctaSecondaryText={data?.hero?.ctaSecondaryText}
        ctaSecondaryLink={data?.hero?.ctaSecondaryLink}
        badgeTags={data?.hero?.badgeTags}
        mobileStats={data?.hero?.mobileStats}
        photo={data?.founder?.photo}
        photoAlt={data?.founder?.photoAlt}
      />
      <StatsBar items={data?.stats?.items} />
      <CredentialsStrip
        heading={data?.resourcesTeaser?.heading}
        headingHighlight={data?.resourcesTeaser?.headingHighlight}
        subtext={data?.resourcesTeaser?.subtext}
        ctaText={data?.resourcesTeaser?.ctaText}
        ctaLink={data?.resourcesTeaser?.ctaLink}
      />
      <Founder
        name={data?.founder?.name}
        initials={data?.founder?.initials}
        title={data?.founder?.title}
        company={data?.founder?.company}
        tagline={data?.founder?.tagline}
        bio={data?.founder?.bio ? [...data.founder.bio] : undefined}
        photo={data?.founder?.photo}
        photoAlt={data?.founder?.photoAlt}
        credentials={data?.founder?.credentials}
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
