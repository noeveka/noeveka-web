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

// ─── Site Settings (Navbar + Footer)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let siteSettingsCachePromise: Promise<Record<string, any>> | null = null;

export async function getSiteSettings() {
  if (!siteSettingsCachePromise) {
    siteSettingsCachePromise = client
      .fetch(
        `*[_type == "siteSettings"][0]{
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
      newsletterTag,
      newsletterHeading,
      newsletterSubtext,
      newsletterPlaceholder,
      copyrightText,
      footerNavLinks[]{ label, href }
    }`
      )
      .catch((error) => {
        // Allow retry if fetch failed
        siteSettingsCachePromise = null;
        throw error;
      });
  }
  return siteSettingsCachePromise;
}

// ─── Home Page (all section copy in one request) 
export async function getHomePage() {
  return client.fetch(`*[_type == "homePage"][0]{
    hero{
      bgImage{ asset, alt },
      bgImageMobile{ asset, alt },
      eyebrow,
      headingLine1,
      headingHighlight,
      headingLine2,
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
      cardCtaText,
      "services": coalesce(services, *[_type == "service"] | order(order asc){
        _id,
        title,
        "slug": slug.current,
        description,
        icon,
        variant,
        ctaText,
        ctaLink,
        featured,
        order
      })
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
    trustCompanyLogoBarSection{
      title,
      subtitle
    },
    testimonialsSection{
      eyebrow,
      heading,
      subtext,
      "testimonials": *[_type == "testimonial"] | order(order asc){
        _id,
        company,
        abbr,
        quote,
        authorName,
        authorRole,
        rating
      }
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
    "slug": slug.current,
    description,
    icon,
    variant,
    featured,
    ctaText,
    ctaLink,
    order,
    heroImage{ asset, alt },
    heroMobileImage{ asset, alt }
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

// ─── Resources Page Copy -─────
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
    },
    seo{
      title,
      description
    },
    "resources": *[_type == "resource"] | order(order asc, _createdAt desc){
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
    }
  }`);
}

// ─── About Page -──────
export async function getAboutPage() {
  return client.fetch(`*[_type == "aboutPage"][0]{
    hero{
      badge,
      headingLine1,
      headingLine2,
      headingHighlight,
      subheading,
      subtext,
      ctaPrimaryText,
      ctaPrimaryLink,
      ctaSecondaryText,
      ctaSecondaryLink,
      bgImage{ asset, alt },
      mobileBgImage{ asset, alt },
      badgeTags,
      stats[]{ value, label },
      mobileStats[]{ value, label }
    },
    narrativeSection{
      topBlock{
        eyebrow,
        headingLine1,
        headingLine2,
        headingLine3,
        headingHighlight,
        paragraph1,
        paragraph2,
        punchline
      },
      image{ asset, alt },
      bottomBlock{
        eyebrowPart1,
        eyebrowHighlight,
        headingPlain,
        headingHighlight,
        paragraph,
        punchline
      }
    },
    stats{
      items[]{ value, label, sub }
    },
    journey{
      eyebrow,
      heading,
      subtext,
      milestones[]{
        year,
        stage,
        location,
        title,
        description,
        isHighlight
      }
    },
    founder{
      eyebrow,
      heading,
      name,
      initials,
      title,
      company,
      tagline,
      bio,
      photo{ asset, alt },
      credentials[]{ label, value },
      whyFoundedHeading,
      whyFoundedText,
      statusBadges[]{ icon, title, subtext },
      focusPillars[]{ icon, title, desc, color },
      linkedinUrl,
      email
    },
    mission{
      statement,
      pillars[]{ number, title, desc }
    },
    values{
      heading,
      items[]{ icon, title, desc }
    },
    cta{
      headingLine1,
      headingLine2,
      headingPlain,
      headingHighlight,
      headingTail,
      body,
      primaryCtaText,
      primaryCtaLink,
      secondaryCtaText,
      secondaryCtaLink
    },
    seo{
      title,
      description
    }
  }`);
}

// ─── Contact Page -───
export async function getContactPage() {
  return client.fetch(`*[_type == "contactPage"][0]{
    seo{
      title,
      description
    },
    hero{
      heading,
      subtext
    },
    form{
      firstNameLabel,
      firstNamePlaceholder,
      lastNameLabel,
      lastNamePlaceholder,
      emailLabel,
      emailPlaceholder,
      phoneLabel,
      phonePlaceholder,
      messageLabel,
      messagePlaceholder,
      servicesLabel,
      services[]{ id, label },
      submitText,
      submittingText,
      successHeading,
      successSubtext,
      resetButtonText
    },
    channels{
      chat{
        title,
        subtext,
        links[]{ icon, label, href, external }
      },
      call{
        title,
        subtext,
        links[]{ icon, label, href }
      }
    }
  }`);
}

// ─── Services Page -──
export async function getServicesPage() {
  return client.fetch(`*[_type == "servicesPage"][0]{
    hero{
      badge,
      headingLine1,
      headingLine2,
      headingHighlight,
      subtext,
      ctaPrimaryText,
      ctaPrimaryLink
    },
    focusAreas[]{
      id,
      number,
      icon,
      title,
      shortDescription,
      bullets,
      visualType,
      ctaText,
      ctaLink
    },
    impactPrinciplesSection{
      heading,
      body,
      principles[]{
        number,
        title,
        description
      }
    },
    engagementSection{
      heading,
      subtext,
      steps[]{
        number,
        title,
        desc
      }
    },
    industrySection{
      quote{
        quote,
        author,
        role
      },
      industries[]{
        label,
        icon
      }
    },
    ctaSection{
      headingPart,
      headingHighlight,
      body,
      primaryCtaText,
      primaryCtaLink,
      secondaryCtaText,
      secondaryCtaLink
    }
  }`);
}

// ─── Service Detail Page -
export async function getServiceDetailPage(slug: string) {
  const detail = await client.fetch(
    `*[_type == "serviceDetailPage" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    seoDescription,
    hero{
      badge,
      heading,
      headingHighlight,
      description,
      primaryCtaText,
      primaryCtaLink,
      secondaryCtaText,
      secondaryCtaLink,
      heroImage{ asset, alt },
      heroMobileImage{ asset, alt },
      stackAnnotations[]{ tier, label }
    },
    challenge{
      heading,
      paragraphs,
      signalsHeading,
      signals
    },
    whatWeDo{
      heading,
      subtext,
      items[]{
        icon,
        title,
        description,
        linkText,
        linkUrl
      }
    },
    architectureLens{
      heading,
      subtext,
      layers[]{
        icon,
        title,
        description,
        variant
      },
      footerNote
    },
    howWeEngage{
      heading,
      subtext,
      steps[]{
        number,
        title,
        description
      }
    },
    deliverables{
      heading,
      subtext,
      items
    },
    outcomes{
      heading,
      subtext,
      items[]{
        icon,
        title,
        description
      }
    },
    relatedExpertise{
      heading,
      subtext,
      services[]{
        number,
        icon,
        title,
        description,
        linkUrl,
        linkText
      }
    },
    bottomCta{
      headingLine1,
      headingLine2,
      subtext,
      primaryCtaText,
      primaryCtaLink,
      secondaryCtaText,
      secondaryCtaLink
    }
  }`,
    { slug }
  );

  // Also query service document to get any heroImage/heroMobileImage uploaded on the service doc
  const serviceDoc = await client.fetch(
    `*[_type == "service" && (slug.current == $slug || ctaLink match $slug)][0]{
      title,
      "slug": slug.current,
      description,
      heroImage{ asset, alt },
      heroMobileImage{ asset, alt }
    }`,
    { slug }
  );

  if (!detail && !serviceDoc) {
    return null;
  }

  const base = detail || {};
  const hero = {
    ...(base.hero || {}),
    heroImage: base.hero?.heroImage?.asset
      ? base.hero.heroImage
      : serviceDoc?.heroImage,
    heroMobileImage: base.hero?.heroMobileImage?.asset
      ? base.hero.heroMobileImage
      : serviceDoc?.heroMobileImage,
  };

  return {
    ...base,
    title: base.title || serviceDoc?.title,
    hero,
  };
}
