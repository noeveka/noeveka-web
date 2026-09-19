import { useEffect, useState } from "react";
import Hero from "@/components/about/hero";
import StatsBar from "@/components/about/stats-bar";
import Founder from "@/components/about/founder";
import Mission from "@/components/about/mission";
import Story from "@/components/about/story";
import Values from "@/components/about/values";
import AboutCta from "@/components/about/about-cta";
import { PageHead } from "@/components/seo";
import { ABOUT_CONFIG } from "@/config/about.config";
import { SEO_CONFIG } from "@/config/seo.config";
import { getAboutPage } from "@/lib/sanity";

interface AboutPageData {
  hero?: Partial<typeof ABOUT_CONFIG.hero>;
  founder?: Partial<typeof ABOUT_CONFIG.founder> & { photo?: { asset?: unknown; alt?: string } };
  mission?: Partial<typeof ABOUT_CONFIG.mission>;
  story?: Partial<typeof ABOUT_CONFIG.story>;
  values?: Partial<typeof ABOUT_CONFIG.values>;
  stats?: { items?: Array<{ value: string; label: string; sub: string }> };
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
        eyebrow={data?.hero?.eyebrow}
        headingLine1={data?.hero?.headingLine1}
        headingLine2={data?.hero?.headingLine2}
        headingHighlight={data?.hero?.headingHighlight}
        subtext={data?.hero?.subtext}
      />
      <StatsBar items={data?.stats?.items} />
      <Founder
        name={data?.founder?.name}
        title={data?.founder?.title}
        company={data?.founder?.company}
        tagline={data?.founder?.tagline}
        bio={data?.founder?.bio ? [...data.founder.bio] : undefined}
        photo={data?.founder?.photo}
        photoAlt={data?.founder?.photoAlt}
      />
      <Mission
        eyebrow={data?.mission?.eyebrow}
        statement={data?.mission?.statement}
        pillars={data?.mission?.pillars ? [...data.mission.pillars] : undefined}
      />
      <Story
        eyebrow={data?.story?.eyebrow}
        heading={data?.story?.heading}
        milestones={data?.story?.milestones ? [...data.story.milestones] : undefined}
      />
      <Values
        eyebrow={data?.values?.eyebrow}
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
