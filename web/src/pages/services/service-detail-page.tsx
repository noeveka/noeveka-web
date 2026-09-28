import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router";
import { PageHead } from "@/components/seo";
import { SEO_CONFIG } from "@/config/seo.config";
import { ENTERPRISE_DATA_AI_ARCHITECTURE_CONFIG } from "@/config/services/enterprise-data-ai-architecture.config";
import { AI_GOVERNANCE_ARCHITECTURE_ASSURANCE_CONFIG } from "@/config/services/ai-governance-architecture-assurance.config";
import { ENTERPRISE_AI_AGENTIC_SYSTEMS_CONFIG } from "@/config/services/enterprise-ai-agentic-systems.config";
import { DATA_AI_TRANSFORMATION_ADVISORY_CONFIG } from "@/config/services/data-ai-transformation-advisory.config";
import { getServiceDetailPage, urlFor } from "@/lib/sanity";
import type { ServiceDetailPageData } from "@/types/service-detail.types";
import {
  ServiceHero,
  ServiceChallenge,
  ServiceWhatWeDo,
  ServiceArchitectureLens,
  ServiceHowWeEngage,
  ServiceDeliverables,
  ServiceOutcomes,
  ServiceRelatedExpertise,
  ServiceBottomCta,
} from "@/components/services/service-detail";

const FALLBACK_CONFIG_MAP: Record<string, ServiceDetailPageData> = {
  "enterprise-data-ai-architecture": ENTERPRISE_DATA_AI_ARCHITECTURE_CONFIG,
  "ai-governance-architecture-assurance": AI_GOVERNANCE_ARCHITECTURE_ASSURANCE_CONFIG,
  "enterprise-ai-agentic-systems": ENTERPRISE_AI_AGENTIC_SYSTEMS_CONFIG,
  "data-ai-transformation-advisory": DATA_AI_TRANSFORMATION_ADVISORY_CONFIG,
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const currentSlug = slug || "enterprise-data-ai-architecture";

  const fallback = FALLBACK_CONFIG_MAP[currentSlug] ?? ENTERPRISE_DATA_AI_ARCHITECTURE_CONFIG;
  const [data, setData] = useState<ServiceDetailPageData | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    getServiceDetailPage(currentSlug)
      .then((res) => {
        if (res) {
          setData(res);
        }
      })
      .catch((err) => {
        console.error("Failed to load service detail from Sanity:", err);
      });
  }, [currentSlug]);

  // Valid service slugs in scope
  const validSlugs = [
    "enterprise-data-ai-architecture",
    "enterprise-ai-agentic-systems",
    "ai-governance-architecture-assurance",
    "data-ai-transformation-advisory",
  ];

  if (!validSlugs.includes(currentSlug)) {
    return <Navigate to="/services" replace />;
  }

  // Merge Sanity data with local fallback
  const heroData = {
    ...fallback.hero,
    ...(data?.hero || {}),
    heroImageUrl: data?.hero?.heroImage?.asset
      ? urlFor(data.hero.heroImage).width(1200).url()
      : fallback.hero.heroImageUrl,
  };

  const challengeData = {
    ...fallback.challenge,
    ...(data?.challenge || {}),
    paragraphs: data?.challenge?.paragraphs?.length
      ? data.challenge.paragraphs
      : fallback.challenge.paragraphs,
    signals: data?.challenge?.signals?.length
      ? data.challenge.signals
      : fallback.challenge.signals,
  };

  const whatWeDoData = {
    ...fallback.whatWeDo,
    ...(data?.whatWeDo || {}),
    items: data?.whatWeDo?.items?.length ? data.whatWeDo.items : fallback.whatWeDo.items,
  };

  const lensData = {
    ...fallback.architectureLens,
    ...(data?.architectureLens || {}),
    layers: data?.architectureLens?.layers?.length
      ? data.architectureLens.layers
      : fallback.architectureLens.layers,
  };

  const howWeEngageData = {
    ...fallback.howWeEngage,
    ...(data?.howWeEngage || {}),
    steps: data?.howWeEngage?.steps?.length
      ? data.howWeEngage.steps
      : fallback.howWeEngage.steps,
  };

  const deliverablesData = {
    ...fallback.deliverables,
    ...(data?.deliverables || {}),
    items: data?.deliverables?.items?.length
      ? data.deliverables.items
      : fallback.deliverables.items,
  };

  const outcomesData = {
    ...fallback.outcomes,
    ...(data?.outcomes || {}),
    items: data?.outcomes?.items?.length ? data.outcomes.items : fallback.outcomes.items,
  };

  const relatedExpertiseData = {
    ...fallback.relatedExpertise,
    ...(data?.relatedExpertise || {}),
    services: data?.relatedExpertise?.services?.length
      ? data.relatedExpertise.services
      : fallback.relatedExpertise.services,
  };

  const bottomCtaData = {
    ...fallback.bottomCta,
    ...(data?.bottomCta || {}),
  };

  const pageTitle = `${data?.title || fallback.title} | ${SEO_CONFIG.siteName}`;
  const pageDescription =
    data?.seoDescription ||
    fallback.seoDescription ||
    SEO_CONFIG.pages.services.description;

  return (
    <>
      <PageHead title={pageTitle} description={pageDescription} />
      <main>
        <ServiceHero hero={heroData} />
        <ServiceChallenge challenge={challengeData} />
        <ServiceWhatWeDo whatWeDo={whatWeDoData} />
        <ServiceArchitectureLens lens={lensData} />
        <ServiceHowWeEngage howWeEngage={howWeEngageData} />
        <ServiceDeliverables deliverables={deliverablesData} />
        <ServiceOutcomes outcomes={outcomesData} />
        <ServiceRelatedExpertise related={relatedExpertiseData} />
        <ServiceBottomCta cta={bottomCtaData} />
      </main>
    </>
  );
}
