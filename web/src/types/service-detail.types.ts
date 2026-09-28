/**
 * service-detail.types.ts
 *
 * Types for the dedicated Service Detail pages in Noeveka.
 */

export interface ServiceDetailHero {
  badge: string;
  heading: string;
  headingHighlight: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  heroImage?: {
    asset?: unknown;
    alt?: string;
  };
  heroImageUrl?: string;
  stackAnnotations?: Array<{
    tier: string;
    label: string;
  }>;
}

export interface ServiceDetailChallenge {
  heading: string;
  paragraphs: string[];
  signalsHeading: string;
  signals: string[];
}

export interface ServiceDetailCapability {
  icon: string;
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
}

export interface ServiceDetailWhatWeDo {
  heading: string;
  subtext: string;
  items: ServiceDetailCapability[];
}

export interface ServiceDetailArchitectureLayer {
  icon: string;
  title: string;
  description: string;
  variant?: "navy" | "slate" | "orange" | "white";
}

export interface ServiceDetailArchitectureLens {
  heading: string;
  subtext: string;
  layers: ServiceDetailArchitectureLayer[];
  footerNote?: string;
}

export interface ServiceDetailEngagementStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceDetailHowWeEngage {
  heading: string;
  subtext: string;
  steps: ServiceDetailEngagementStep[];
}

export interface ServiceDetailDeliverables {
  heading: string;
  subtext: string;
  items: string[];
}

export interface ServiceDetailOutcome {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDetailOutcomes {
  heading: string;
  subtext: string;
  items: ServiceDetailOutcome[];
}

export interface ServiceDetailRelatedCard {
  number: string;
  icon: string;
  title: string;
  description: string;
  linkUrl: string;
  linkText?: string;
}

export interface ServiceDetailRelatedExpertise {
  heading: string;
  subtext: string;
  services: ServiceDetailRelatedCard[];
}

export interface ServiceDetailBottomCta {
  headingLine1: string;
  headingLine2: string;
  subtext: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface ServiceDetailPageData {
  title: string;
  slug: string;
  seoDescription?: string;
  hero: ServiceDetailHero;
  challenge: ServiceDetailChallenge;
  whatWeDo: ServiceDetailWhatWeDo;
  architectureLens: ServiceDetailArchitectureLens;
  howWeEngage: ServiceDetailHowWeEngage;
  deliverables: ServiceDetailDeliverables;
  outcomes: ServiceDetailOutcomes;
  relatedExpertise: ServiceDetailRelatedExpertise;
  bottomCta: ServiceDetailBottomCta;
}
