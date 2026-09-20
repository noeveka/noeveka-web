// web/src/lib/sanity.ts
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: unknown) =>
  builder.image(source as Parameters<typeof builder.image>[0]);

// ─── Site Settings (Navbar + Footer) ─────────────────────────────────────────
export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{
    logoIcon{ asset, alt },
    logoText{ asset, alt },
    navItems[]{ label, href },
    navCtaText,
    navCtaLink,
    footerTagline,
    socialLinks[]{ platform, href },
    companyColumnHeading,
    companyLinks[]{ label, href },
    servicesColumnHeading,
    servicesLinks[]{ label, href },
    contactHeading,
    contactEmail,
    contactPhone,
    contactAddress,
    newsletterHeading,
    newsletterSubtext,
    newsletterPlaceholder,
    copyrightText,
    footerNavLinks[]{ label, href }
  }`);
}

// ─── Home Page (all section copy in one request) ──────────────────────────────
export async function getHomePage() {
  return client.fetch(`*[_type == "homePage"][0]{
    hero{
      bgImage{ asset, alt },
      trustBadgeRating,
      trustBadgeDescriptor,
      headingPart1,
      headingHighlight1,
      headingPart2,
      headingHighlight2,
      headingPart3,
      subtitle,
      primaryCtaText,
      primaryCtaLink,
      secondaryCtaText,
      secondaryCtaLink,
      trustBullets,
      stats[]{ val, label }
    },
    servicesSection{
      eyebrow,
      heading,
      subtext,
      cardCtaText
    },
    aboutSection{
      eyebrow,
      heading,
      body,
      ctaText,
      ctaLink,
      founderName,
      founderRole,
      founderPhoto{ asset, alt },
      statBadgeValue,
      statBadgeLabel,
      ratingValue,
      ratingLabel,
      skillsHeading,
      skills
    },
    testimonialsSection{
      eyebrow,
      heading,
      subtext
    },
    metricsSection{
      metrics[]{ value, label, sub }
    },
    whySection{
      eyebrow,
      heading,
      body,
      stats[]{ value, label },
      differentiators[]{ number, icon, title, desc },
      features[]{ icon, title, desc },
      ctaText,
      ctaLink
    },
    ctaStrip{
      eyebrow,
      headingPart,
      headingHighlight,
      body,
      primaryCtaText,
      primaryCtaLink,
      secondaryCtaText,
      secondaryCtaLink
    },
    faqSection{
      eyebrow,
      heading,
      subtext,
      faqs[]{ question, answer }
    }
  }`);
}

// ─── Testimonials (separate document type) ────────────────────────────────────
export async function getTestimonials() {
  return client.fetch(`*[_type == "testimonial"] | order(order asc){
    _id,
    company,
    abbr,
    quote,
    authorName,
    authorRole,
    rating
  }`);
}

// ─── Services (separate document type) ───────────────────────────────────────
export async function getServices() {
  return client.fetch(`*[_type == "service"] | order(order asc){
    _id,
    title,
    description,
    icon,
    variant,
    featured
  }`);
}

export async function getResources() {
  return client.fetch(`*[_type == "resource"] | order(order asc, _createdAt desc){
    _id,
    title,
    description,
    category,
    pageCount,
    isFeatured,
    thumbnail{ asset->{ url }, alt },
    "pdfUrl": pdfFile.asset->url,
    publishedAt,
    order
  }`);
}

// ─── Resources Page Copy ───────────────────────────────────────────────────────
export async function getResourcesPage() {
  return client.fetch(`*[_type == "resourcesPage"][0]{
    hero{
      eyebrow,
      heading,
      headingHighlight,
      subtext,
      ctaPrimaryText,
      ctaPrimaryLink,
      ctaSecondaryText,
      ctaSecondaryLink
    },
    gridSection{
      heading,
      subtext,
      categories,
      authorName,
      authorAvatar{ asset, alt },
      emptyStateText
    }
  }`);
}

// ─── About Page ───────────────────────────────────────────────────────────────
export async function getAboutPage() {
  return client.fetch(`*[_type == "aboutPage"][0]{
    hero{
      eyebrow,
      headingLine1,
      headingLine2,
      headingHighlight,
      subtext
    },
    stats{
      items[]{ value, label, sub }
    },
    founder{
      name,
      title,
      company,
      tagline,
      bio,
      photo{ asset, alt }
    },
    mission{
      eyebrow,
      statement,
      pillars[]{ number, title, desc }
    },
    story{
      eyebrow,
      heading,
      milestones[]{ year, event, detail }
    },
    values{
      eyebrow,
      heading,
      items[]{ icon, title, desc }
    },
    cta{
      headingPlain,
      headingHighlight,
      headingTail,
      body,
      primaryCtaText,
      primaryCtaLink,
      secondaryCtaText,
      secondaryCtaLink
    }
  }`);
}

