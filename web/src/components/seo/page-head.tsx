import { useEffect } from "react";

import { SEO_CONFIG } from "@/config/seo.config";

export interface PageHeadProps {
  /** Page-specific title (e.g. "About Us"). Will be formatted using template "%s | Noeveka" unless rawTitle is true. */
  title?: string;
  /** Page-specific meta description for search engines and social sharing. */
  description?: string;
  /** If true, uses title exactly as provided without appending the brand suffix. */
  rawTitle?: boolean;
  /** Open Graph type, defaults to "website". */
  ogType?: "website" | "article";
  /** Optional image URL for social sharing preview (OG / Twitter). */
  ogImage?: string;
  /** Optional canonical URL. */
  canonicalUrl?: string;
  /** If true, sets robots meta tag to "noindex, nofollow" (e.g. for 404, admin, or draft pages). */
  noIndex?: boolean;
}

export function PageHead({
  title,
  description,
  rawTitle = false,
  ogType = "website",
  ogImage,
  canonicalUrl,
  noIndex = false,
}: PageHeadProps) {
  const fullTitle = title
    ? rawTitle || title.includes(SEO_CONFIG.siteName)
      ? title
      : SEO_CONFIG.titleTemplate.replace("%s", title)
    : SEO_CONFIG.defaultTitle;

  const resolvedDescription = description ?? SEO_CONFIG.defaultDescription;

  // Immediate document title sync for browser tabs & window history
  useEffect(() => {
    document.title = fullTitle;
  }, [fullTitle]);

  // React 19 native document metadata rendering (automatically hoisted and deduplicated in <head>)
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta
        name="twitter:card"
        content={ogImage ? "summary_large_image" : "summary"}
      />
      {ogImage && (
        <>
          <meta property="og:image" content={ogImage} />
          <meta name="twitter:image" content={ogImage} />
        </>
      )}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </>
  );
}

export default PageHead;
