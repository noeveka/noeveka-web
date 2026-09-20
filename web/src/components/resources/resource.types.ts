export interface ResourceItem {
  _id: string;
  title: string;
  description: string;
  category?: string;
  tech?: string;
  pageCount?: number;
  isFeatured?: boolean;
  thumbnailUrl?: string | null;
  thumbnailAlt?: string | null;
  pdfUrl?: string | null;
}

export interface DownloadModalState {
  open: boolean;
  resource: ResourceItem | null;
}

export interface ResourceSectionCopy {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  emptyStateText?: string;
  downloadCtaText?: string;
  downloadHoverText?: string;
  authorName?: string;
  authorAvatar?: string;
  categories?: string[];
  pageLabelSingular?: string;
  pageLabelPlural?: string;
  formatLabel?: string;
}
