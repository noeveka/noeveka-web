import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'services', title: 'Services Section' },
    { name: 'about', title: 'Who We Are' },
    { name: 'testimonials', title: 'Testimonials' },
    { name: 'metrics', title: 'Metrics Bar' },
    { name: 'why', title: 'Why Noeveka' },
    { name: 'cta', title: 'CTA Strip' },
    { name: 'faq', title: 'FAQ' },
  ],
  fields: [
    // ─── HERO ────────────────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({
          name: 'bgImage',
          title: 'Background Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
          ],
        }),
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow / Kicker',
          type: 'string',
          initialValue: 'ARCHITECT LED',
        }),
        defineField({
          name: 'headingLine1',
          title: 'Heading — Line 1',
          type: 'string',
          initialValue: 'Enterprise Data &',
        }),
        defineField({
          name: 'headingHighlight',
          title: 'Heading — Highlight (orange)',
          type: 'string',
          initialValue: 'AI',
        }),
        defineField({
          name: 'headingLine2',
          title: 'Heading — Line 2',
          type: 'string',
          initialValue: 'Solutions',
        }),
        defineField({
          name: 'trustBadgeRating',
          title: 'Trust Badge — Rating',
          type: 'string',
          initialValue: '4.9',
        }),
        defineField({
          name: 'trustBadgeDescriptor',
          title: 'Trust Badge — Descriptor',
          type: 'string',
          initialValue: '5K+ Enterprise Leaders Trained',
        }),
        defineField({
          name: 'headingPart1',
          title: 'Heading — Part 1 (plain)',
          type: 'string',
          initialValue: 'Architect-Led ',
        }),
        defineField({
          name: 'headingHighlight1',
          title: 'Heading — Highlight 1 (orange)',
          type: 'string',
          initialValue: 'Enterprise',
        }),
        defineField({
          name: 'headingPart2',
          title: 'Heading — Part 2 (plain)',
          type: 'string',
          initialValue: 'Data & ',
        }),
        defineField({
          name: 'headingHighlight2',
          title: 'Heading — Highlight 2 (orange)',
          type: 'string',
          initialValue: 'AI',
        }),
        defineField({
          name: 'headingPart3',
          title: 'Heading — Part 3 (plain)',
          type: 'string',
          initialValue: ' Solutions',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle / Subheading',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'primaryCtaText',
          title: 'Primary CTA — Button Text',
          type: 'string',
          initialValue: 'Book a Strategy Call',
        }),
        defineField({
          name: 'primaryCtaLink',
          title: 'Primary CTA — Link',
          type: 'string',
        }),
        defineField({
          name: 'secondaryCtaText',
          title: 'Secondary CTA — Button Text',
          type: 'string',
          initialValue: 'Speak to an Architect',
        }),
        defineField({
          name: 'secondaryCtaLink',
          title: 'Secondary CTA — Link',
          type: 'string',
        }),
        defineField({
          name: 'trustBullets',
          title: 'Trust Bullets',
          description: 'Short bullet points shown below the CTAs',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'val', title: 'Value', type: 'string' }),
                defineField({ name: 'label', title: 'Label', type: 'string' }),
              ],
              preview: { select: { title: 'val', subtitle: 'label' } },
            },
          ],
        }),
      ],
    }),

    // ─── SERVICES SECTION ────────────────────────────────────────────────────
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
          initialValue: 'Our Core Ecosystem',
        }),
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Essential services for enterprise data excellence',
        }),
        defineField({
          name: 'subtext',
          title: 'Section Subtext',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'cardCtaText',
          title: 'Card CTA Button Text',
          type: 'string',
          initialValue: 'Explore More',
        }),
      ],
    }),

    // ─── WHO WE ARE (About) ──────────────────────────────────────────────────
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
          initialValue: 'Founder & Chief Architect — Noeveka',
        }),
        defineField({
          name: 'founderPhoto',
          title: 'Founder Photo',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
          ],
        }),
        defineField({
          name: 'statBadgeValue',
          title: 'Stat Badge — Value',
          type: 'string',
          initialValue: '15+',
        }),
        defineField({
          name: 'statBadgeLabel',
          title: 'Stat Badge — Label',
          type: 'string',
          initialValue: 'Years Enterprise Experience',
        }),
        defineField({
          name: 'ratingValue',
          title: 'Rating — Value',
          type: 'string',
          initialValue: '4.9',
        }),
        defineField({
          name: 'ratingLabel',
          title: 'Rating — Label',
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
          of: [{ type: 'string' }],
        }),
      ],
    }),

    // ─── TESTIMONIALS SECTION ────────────────────────────────────────────────
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

    // ─── METRICS BAR ────────────────────────────────────────────────────────
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
                defineField({ name: 'value', title: 'Value', type: 'string' }),
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'sub', title: 'Sub-label', type: 'string' }),
              ],
              preview: { select: { title: 'label', subtitle: 'value' } },
            },
          ],
        }),
      ],
    }),

    // ─── WHY NOEVEKA ─────────────────────────────────────────────────────────
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
                defineField({ name: 'value', title: 'Value', type: 'string' }),
                defineField({ name: 'label', title: 'Label', type: 'string' }),
              ],
              preview: { select: { title: 'label', subtitle: 'value' } },
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
                defineField({ name: 'number', title: 'Number (e.g. "01")', type: 'string' }),
                defineField({
                  name: 'icon',
                  title: 'Icon Name (Lucide)',
                  type: 'string',
                  description: 'e.g. "ShieldCheck", "TrendingUp", "Layers3"',
                }),
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'desc', title: 'Description', type: 'text', rows: 3 }),
              ],
              preview: { select: { title: 'title', subtitle: 'number' } },
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
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'desc', title: 'Description', type: 'text', rows: 3 }),
              ],
              preview: { select: { title: 'title' } },
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

    // ─── CTA STRIP ───────────────────────────────────────────────────────────
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
          title: 'Heading — Part (plain)',
          type: 'string',
          initialValue: "Ready to architect your enterprise's ",
        }),
        defineField({
          name: 'headingHighlight',
          title: 'Heading — Highlight (orange)',
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
          title: 'Primary CTA — Button Text',
          type: 'string',
          initialValue: 'Book a Free Strategy Call',
        }),
        defineField({
          name: 'primaryCtaLink',
          title: 'Primary CTA — Link',
          type: 'string',
        }),
        defineField({
          name: 'secondaryCtaText',
          title: 'Secondary CTA — Button Text',
          type: 'string',
          initialValue: 'Explore Our Resources',
        }),
        defineField({
          name: 'secondaryCtaLink',
          title: 'Secondary CTA — Link',
          type: 'string',
        }),
      ],
    }),

    // ─── FAQ ─────────────────────────────────────────────────────────────────
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
                defineField({ name: 'question', title: 'Question', type: 'string' }),
                defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 4 }),
              ],
              preview: { select: { title: 'question' } },
            },
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return { title: 'Home Page' }
    },
  },
})
