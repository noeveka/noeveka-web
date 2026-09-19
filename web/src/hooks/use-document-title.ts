import { useEffect } from "react";

import { SEO_CONFIG } from "@/config/seo.config";

export function useDocumentTitle(title?: string, raw = false) {
  useEffect(() => {
    const fullTitle = title
      ? raw || title.includes(SEO_CONFIG.siteName)
        ? title
        : SEO_CONFIG.titleTemplate.replace("%s", title)
      : SEO_CONFIG.defaultTitle;

    document.title = fullTitle;
  }, [title, raw]);
}
