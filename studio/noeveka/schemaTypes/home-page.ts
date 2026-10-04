import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    {name: 'hero', title: '1. Hero Section (Top of Page)'},
    {name: 'services', title: '2. Services Section (What We Do)'},
    {name: 'about', title: '3. Who We Are (Founder & Core Expertise)'},
    {name: 'partnerLogos', title: '4. Enterprise Platforms (Logo Bar)'},
    {name: 'testimonials', title: '5. Testimonials (Client Reviews)'},
    {name: 'metrics', title: '6. Metrics Bar (Impact Numbers)'},
    {name: 'why', title: '7. Why Noeveka (Differentiators & Features)'},
    {name: 'faq', title: '8. FAQ (Frequently Asked Questions)'},
    {name: 'cta', title: '9. Call To Action Strip (Bottom Banner)'},
    {name: 'seo', title: '10. SEO & Metadata'},
  ],
  fields: [
    // ─── HERO -
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({
          name: 'bgImage',
          title: 'Background Image (Desktop / Large screen)',
          type: 'image',
          options: {hotspot: true},
          fields: [defineField({name: 'alt', title: 'Alt Text', type: 'string'})],
        }),
        defineField({
          name: 'bgImageMobile',
          title: 'Background Image (Mobile / Small screen)',
          description:
            'Square or portrait image shown on phones (<768px). Leave blank to use the default local fallback.',
          type: 'image',
          options: {hotspot: true},
          fields: [defineField({name: 'alt', title: 'Alt Text', type: 'string'})],
        }),
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow / Kicker',
          type: 'string',
          initialValue: 'ARCHITECT LED',
        }),
        defineField({
          name: 'headingLine1',
          title: 'Main Headline - First Line',
          description:
            'White text before the highlighted word (e.g. "Architecting Enterprise Data &")',
          type: 'string',
          initialValue: 'Architecting Enterprise Data &',
        }),
        defineField({
          name: 'headingHighlight',
          title: 'Main Headline - Orange Highlight Word',
          description: 'Highlighted in brand orange (e.g. "AI")',
          type: 'string',
          initialValue: 'AI',
        }),
        defineField({
          name: 'headingLine2',
          title: 'Main Headline - Ending Line',
          description: 'White text following the highlighted word (e.g. "for Better Decisions")',
          type: 'string',
          initialValue: 'for Better Decisions',
        }),

        defineField({
          name: 'subtitle',
          title: 'Subtitle / Subheading',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'primaryCtaText',
          title: 'Primary CTA - Button Text',
          type: 'string',
          initialValue: 'Book a Strategy Call',
        }),
        defineField({
          name: 'primaryCtaLink',
          title: 'Primary CTA - Link',
          type: 'string',
        }),

      ],
    }),

    // ─── SERVICES SECTION ─
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      group: 'services',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow Label',
          type: 'string',
          initialValue: 'Our Services',
        }),
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'End-to-end AI & Data Solutions for Enterprise Growth',
        }),
        defineField({
          name: 'subtext',
          title: 'Section Subtext',
          type: 'text',
          rows: 3,
          initialValue:
            'We help organizations design, build and scale modern data and AI systems - from strategy to production, with a focus on real business impact.',
        }),
        defineField({
          name: 'cardCtaText',
          title: 'Card CTA Button Text',
          type: 'string',
          initialValue: 'Learn More',
        }),
        defineField({
          name: 'services',
          title: 'Services (Optional In-Page Override)',
          description: 'If defined, overrides the global Service documents on the Home Page.',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 3,
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  initialValue: 'layers',
                }),
                defineField({
                  name: 'variant',
                  title: 'Card Variant',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'White', value: 'white'},
                      {title: 'Orange (highlight)', value: 'orange'},
                      {title: 'Black', value: 'black'},
                    ],
                  },
                  initialValue: 'white',
                }),
                defineField({
                  name: 'ctaText',
                  title: 'CTA Text',
                  type: 'string',
                  initialValue: 'Learn More',
                }),
                defineField({name: 'ctaLink', title: 'CTA Link', type: 'string'}),
                defineField({
                  name: 'featured',
                  title: 'Featured',
                  type: 'boolean',
                  initialValue: false,
                }),
              ],
              preview: {
                select: {title: 'title', subtitle: 'variant'},
              },
            },
          ],
        }),
      ],
    }),

    // ─── WHO WE ARE (About) -
    defineField({
      name: 'aboutSection',
      title: 'Who We Are Section',
      type: 'object',
      group: 'about',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow Label',
          type: 'string',
          initialValue: 'Who We Are',
        }),
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Body Text',
          type: 'text',
          rows: 5,
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'More About Us',
        }),
        defineField({
          name: 'ctaLink',
          title: 'CTA Button Link',
          type: 'string',
        }),
        defineField({
          name: 'founderName',
          title: 'Founder Name',
          type: 'string',
          initialValue: 'Ajay Kumar',
        }),
        defineField({
          name: 'founderRole',
          title: 'Founder Role',
          type: 'string',
          initialValue: 'Founder & Chief Architect - Noeveka',
        }),
        defineField({
          name: 'founderPhoto',
          title: 'Founder Photo',
          type: 'image',
          options: {hotspot: true},
          fields: [defineField({name: 'alt', title: 'Alt Text', type: 'string'})],
        }),
        defineField({
          name: 'statBadgeValue',
          title: 'Stat Badge - Value',
          type: 'string',
          initialValue: '15+',
        }),
        defineField({
          name: 'statBadgeLabel',
          title: 'Stat Badge - Label',
          type: 'string',
          initialValue: 'Years Enterprise Experience',
        }),
        defineField({
          name: 'ratingValue',
          title: 'Rating - Value',
          type: 'string',
          initialValue: '4.9',
        }),
        defineField({
          name: 'ratingLabel',
          title: 'Rating - Label',
          type: 'string',
          initialValue: 'Avg. client rating',
        }),
        defineField({
          name: 'skillsHeading',
          title: 'Skills Card Heading',
          type: 'string',
          initialValue: 'Core Expertise',
        }),
        defineField({
          name: 'skills',
          title: 'Skills List',
          type: 'array',
          of: [{type: 'string'}],
        }),
      ],
    }),

    // ─── PARTNER LOGOS / PLATFORMS BAR 
    defineField({
      name: 'trustCompanyLogoBarSection',
      title: 'Enterprise Platforms Logo Bar',
      description:
        'The horizontal strip showcasing experience across leading enterprise data and AI platforms.',
      type: 'object',
      group: 'partnerLogos',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          description: 'e.g. "Experience across leading enterprise platforms"',
          type: 'string',
          initialValue: 'Experience across leading enterprise platforms',
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          description: 'e.g. "Technology choices guided by enterprise fit, not vendor preference."',
          type: 'string',
          initialValue: 'Technology choices guided by enterprise fit, not vendor preference.',
        }),
      ],
    }),

    // ─── TESTIMONIALS SECTION 
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      group: 'testimonials',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow Label',
          type: 'string',
          initialValue: 'Testimonial',
        }),
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'What our satisfied clients say',
        }),
        defineField({
          name: 'subtext',
          title: 'Section Subtext',
          type: 'text',
          rows: 2,
        }),
      ],
    }),

    // ─── METRICS BAR
    defineField({
      name: 'metricsSection',
      title: 'Metrics Bar',
      type: 'object',
      group: 'metrics',
      fields: [
        defineField({
          name: 'metrics',
          title: 'Metrics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'value', title: 'Value', type: 'string'}),
                defineField({name: 'label', title: 'Label', type: 'string'}),
                defineField({name: 'sub', title: 'Sub-label', type: 'string'}),
              ],
              preview: {select: {title: 'label', subtitle: 'value'}},
            },
          ],
        }),
      ],
    }),

    // ─── WHY NOEVEKA -
    defineField({
      name: 'whySection',
      title: 'Why Noeveka Section',
      type: 'object',
      group: 'why',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow Label',
          type: 'string',
          initialValue: 'Why Choose Us',
        }),
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Body Text',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'stats',
          title: 'Stat Strip Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'value', title: 'Value', type: 'string'}),
                defineField({name: 'label', title: 'Label', type: 'string'}),
              ],
              preview: {select: {title: 'label', subtitle: 'value'}},
            },
          ],
        }),
        defineField({
          name: 'differentiators',
          title: 'Differentiators',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'number', title: 'Number (e.g. "01")', type: 'string'}),
                defineField({
                  name: 'icon',
                  title: 'Icon Name (Lucide)',
                  type: 'string',
                  description: 'e.g. "ShieldCheck", "TrendingUp", "Layers3"',
                }),
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'desc', title: 'Description', type: 'text', rows: 3}),
              ],
              preview: {select: {title: 'title', subtitle: 'number'}},
            },
          ],
        }),
        defineField({
          name: 'features',
          title: 'Feature Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Icon Name (Lucide)',
                  type: 'string',
                  description: 'e.g. "MessageSquare", "Users"',
                }),
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'desc', title: 'Description', type: 'text', rows: 3}),
              ],
              preview: {select: {title: 'title'}},
            },
          ],
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'Explore More',
        }),
        defineField({
          name: 'ctaLink',
          title: 'CTA Button Link',
          type: 'string',
        }),
      ],
    }),

    // ─── CTA STRIP -──
    defineField({
      name: 'ctaStrip',
      title: 'CTA Strip',
      type: 'object',
      group: 'cta',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow Label',
          type: 'string',
          initialValue: 'Get Started Today',
        }),
        defineField({
          name: 'headingPart',
          title: 'Heading - Part (plain)',
          type: 'string',
          initialValue: "Ready to architect your enterprise's ",
        }),
        defineField({
          name: 'headingHighlight',
          title: 'Heading - Highlight (orange)',
          type: 'string',
          initialValue: 'data future?',
        }),
        defineField({
          name: 'body',
          title: 'Body Text',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'primaryCtaText',
          title: 'Primary CTA - Button Text',
          type: 'string',
          initialValue: 'Book a Free Strategy Call',
        }),
        defineField({
          name: 'primaryCtaLink',
          title: 'Primary CTA - Link',
          type: 'string',
        }),
        defineField({
          name: 'secondaryCtaText',
          title: 'Secondary CTA - Button Text',
          type: 'string',
          initialValue: 'Explore Our Resources',
        }),
        defineField({
          name: 'secondaryCtaLink',
          title: 'Secondary CTA - Link',
          type: 'string',
        }),
      ],
    }),

    // ─── FAQ -────────
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      group: 'faq',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow Label',
          type: 'string',
          initialValue: 'Questions',
        }),
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Top questions clients ask',
        }),
        defineField({
          name: 'subtext',
          title: 'Section Subtext',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'faqs',
          title: 'FAQ Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'question', title: 'Question', type: 'string'}),
                defineField({name: 'answer', title: 'Answer', type: 'text', rows: 4}),
              ],
              preview: {select: {title: 'question'}},
            },
          ],
        }),
      ],
    }),

    // ─── 10. SEO & METADATA ───────────────────────────────────────────────────
    defineField({
      name: 'seo',
      title: 'SEO & Metadata',
      type: 'object',
      group: 'seo',
      description: 'Search engine optimization tags and social sharing metadata.',
      fields: [
        defineField({
          name: 'title',
          title: 'Meta Title',
          type: 'string',
          description: 'Title displayed in search engine results and browser tabs.',
          initialValue: 'Enterprise Data & AI Advisory',
        }),
        defineField({
          name: 'description',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description:
            'Summary shown in search engine snippet preview (150-160 characters recommended).',
          initialValue:
            'Architect-led target designs, bootcamps, and advisory for Microsoft Fabric, Databricks Lakehouse & GenAI pipelines. Independent, practical, and vendor-unbiased.',
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {title: 'Home Page'}
    },
  },
})
