import { useEffect, useState } from "react";
import ResourcesHero from "@/components/resources/hero";
import ResourceGrid from "@/components/resources/resource-grid";
import type { ResourceItem, ResourceSectionCopy } from "@/components/resources/resource.types";
import { PageHead } from "@/components/seo";
import { RESOURCES_CONFIG } from "@/config/resources.config";
import { SEO_CONFIG } from "@/config/seo.config";
import { getResources, getResourcesPage, urlFor } from "@/lib/sanity";

interface SanityResourcesPageData {
  hero?: {
    eyebrow?: string;
    heading?: string;
    headingHighlight?: string;
    subtext?: string;
    ctaPrimaryText?: string;
    ctaPrimaryLink?: string;
    ctaSecondaryText?: string;
    ctaSecondaryLink?: string;
  };
  gridSection?: {
    heading?: string;
    subtext?: string;
    categories?: string[];
    authorName?: string;
    authorAvatar?: { asset?: unknown; alt?: string };
    emptyStateText?: string;
  };
}

function mapSanityResource(raw: Record<string, unknown>): ResourceItem {
  const thumbnail = raw.thumbnail as
    | { asset?: { url?: string }; alt?: string }
    | null
    | undefined;

  return {
    _id: (raw._id as string) || `sanity-${Math.random()}`,
    title: (raw.title as string) || "Untitled Resource",
    description: (raw.description as string) || "",
    category: (raw.category as string) || undefined,
    pageCount: typeof raw.pageCount === "number" ? raw.pageCount : undefined,
    isFeatured: Boolean(raw.isFeatured),
    thumbnailUrl: thumbnail?.asset?.url ?? null,
    thumbnailAlt: thumbnail?.alt ?? null,
    pdfUrl: (raw.pdfUrl as string) ?? null,
  };
}

export default function ResourcesPage() {
  const [pageData, setPageData] = useState<SanityResourcesPageData | null>(null);
  const [resources, setResources] = useState<ResourceItem[] | null>(null);

  useEffect(() => {
    let isMounted = true;

    // Fetch resources page copy from Sanity
    getResourcesPage()
      .then((data: SanityResourcesPageData) => {
        if (isMounted && data) {
          setPageData(data);
        }
      })
      .catch((err) => {
        console.warn("Sanity getResourcesPage fetch error:", err);
      });

    // Fetch resource documents from Sanity
    getResources()
      .then((data: unknown) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setResources(
            data.map((item) => mapSanityResource(item as Record<string, unknown>))
          );
        }
      })
      .catch((err) => {
        console.warn("Sanity getResources fetch error:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const heroCopy = {
    eyebrow: pageData?.hero?.eyebrow,
    heading: pageData?.hero?.heading ?? RESOURCES_CONFIG.hero.heading,
    headingHighlight: pageData?.hero?.headingHighlight ?? RESOURCES_CONFIG.hero.headingHighlight,
    subtext: pageData?.hero?.subtext ?? RESOURCES_CONFIG.hero.subtext,
    ctaPrimaryText: pageData?.hero?.ctaPrimaryText,
    ctaPrimaryLink: pageData?.hero?.ctaPrimaryLink,
    ctaSecondaryText: pageData?.hero?.ctaSecondaryText,
    ctaSecondaryLink: pageData?.hero?.ctaSecondaryLink,
  };

  const authorAvatarUrl = pageData?.gridSection?.authorAvatar?.asset
    ? urlFor(pageData.gridSection.authorAvatar).url()
    : undefined;

  const gridCopy: ResourceSectionCopy = {
    heading: pageData?.gridSection?.heading || RESOURCES_CONFIG.section.heading,
    subtext: pageData?.gridSection?.subtext || RESOURCES_CONFIG.section.subtext,
    emptyStateText: pageData?.gridSection?.emptyStateText || RESOURCES_CONFIG.section.emptyStateText,
    authorName: pageData?.gridSection?.authorName || RESOURCES_CONFIG.section.authorName,
    authorAvatar: authorAvatarUrl || RESOURCES_CONFIG.section.authorAvatar,
    categories: pageData?.gridSection?.categories && pageData.gridSection.categories.length > 0
      ? pageData.gridSection.categories
      : [...RESOURCES_CONFIG.categories],
  };

  return (
    <>
      <PageHead
        title={SEO_CONFIG.pages.resources.title}
        description={SEO_CONFIG.pages.resources.description}
      />
      <ResourcesHero {...heroCopy} />
      <ResourceGrid resources={resources ?? undefined} copy={gridCopy} />
    </>
  );
}
