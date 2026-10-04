import {defineField, defineType} from 'sanity'

/**
 * serviceDetailPage - Sanity document type for Service Details Pages
 *
 * Slugs:
 * - enterprise-data-ai-architecture
 * - enterprise-ai-agentic-systems
 * - ai-governance-architecture-assurance
 * - data-ai-transformation-advisory
 */
export const serviceDetailPage = defineType({
  name: 'serviceDetailPage',
  title: 'Service Detail Page',
  type: 'document',
  groups: [
    {name: 'general', title: '1 · General & SEO'},
    {name: 'hero', title: '2 · Hero Section'},
    {name: 'challenge', title: '3 · The Challenge'},
    {name: 'whatWeDo', title: '4 · What We Do'},
    {name: 'architectureLens', title: '5 · Architecture Lens'},
    {name: 'howWeEngage', title: '6 · How We Engage'},
    {name: 'deliverables', title: '7 · Deliverables'},
    {name: 'outcomes', title: '8 · Outcomes'},
    {name: 'relatedServices', title: '9 · Related Expertise'},
    {name: 'bottomCta', title: '10 · Bottom Banner CTA'},
  ],

  fields: [
    // ─── 1. GENERAL & SEO ──────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Page Slug',
      type: 'slug',
      group: 'general',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 2,
      group: 'general',
    }),

    // ─── 2. HERO SECTION ───────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({
          name: 'badge',
          title: 'Eyebrow / Badge Text',
          type: 'string',
          initialValue: 'ENTERPRISE DATA & AI ARCHITECTURE',
        }),
        defineField({
          name: 'heading',
          title: 'Hero Heading (Supports HTML or Plain)',
          type: 'string',
          initialValue: 'Architect the foundation for data and AI at enterprise scale.',
        }),
        defineField({
          name: 'headingHighlight',
          title: 'Heading Highlight Phrase (Orange Accent)',
          type: 'string',
          initialValue: 'enterprise scale.',
        }),
        defineField({
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          rows: 3,
          initialValue:
            'We turn fragmented platforms and growing AI demands into a coherent, future-ready architecture that connects business strategy with data, technology and AI - built for scale, trust and real business value.',
        }),
        defineField({
          name: 'primaryCtaText',
          title: 'Primary CTA Text',
          type: 'string',
          initialValue: 'Discuss Your Architecture',
        }),
        defineField({
          name: 'primaryCtaLink',
          title: 'Primary CTA Link',
          type: 'string',
          initialValue: '/contact?topic=architecture',
        }),
        defineField({
          name: 'secondaryCtaText',
          title: 'Secondary CTA Text',
          type: 'string',
          initialValue: 'Explore Our Approach',
        }),
        defineField({
          name: 'secondaryCtaLink',
          title: 'Secondary CTA Link Anchor',
          type: 'string',
          initialValue: '#what-we-do',
        }),
        defineField({
          name: 'heroImage',
          title: 'Hero Graphic / Architecture Image (Desktop / Large Screens)',
          type: 'image',
          description: 'Background graphic for desktop and large screens',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              initialValue: 'Enterprise Data and AI Architecture Stack',
            }),
          ],
        }),
        defineField({
          name: 'heroMobileImage',
          title: 'Hero Graphic (Mobile / Small Screens)',
          type: 'image',
          description: 'Alternative vertical / stacked layout graphic displayed on small screens and mobile devices',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              initialValue: 'Enterprise Data and AI Architecture Stack - Mobile',
            }),
          ],
        }),
        defineField({
          name: 'stackAnnotations',
          title: 'Hero Stack Annotations (Right side indicators)',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'tier',
                  title: 'Tier Name (e.g. Business, Data, Platform, AI)',
                  type: 'string',
                }),
                defineField({name: 'label', title: 'Annotation Label', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),

    // ─── 3. THE CHALLENGE & SIGNALS ────────────────────────────────
    defineField({
      name: 'challenge',
      title: 'The Challenge & Common Signals',
      type: 'object',
      group: 'challenge',
      fields: [
        defineField({
          name: 'heading',
          title: 'Challenge Heading',
          type: 'string',
          initialValue: 'The Challenge',
        }),
        defineField({
          name: 'paragraphs',
          title: 'Challenge Paragraphs',
          type: 'array',
          of: [{type: 'text', rows: 3}],
        }),
        defineField({
          name: 'signalsHeading',
          title: 'Common Signals Heading',
          type: 'string',
          initialValue: 'COMMON SIGNALS WE SEE',
        }),
        defineField({
          name: 'signals',
          title: 'Common Signals List',
          type: 'array',
          of: [{type: 'string'}],
        }),
      ],
    }),

    // ─── 4. WHAT WE DO (CAPABILITIES) ──────────────────────────────
    defineField({
      name: 'whatWeDo',
      title: 'What We Do Section',
      type: 'object',
      group: 'whatWeDo',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'What We Do',
        }),
        defineField({
          name: 'subtext',
          title: 'Subtext / Intro',
          type: 'text',
          rows: 2,
          initialValue:
            'We design enterprise-grade Data & AI architectures that connect business strategy with scalable, future-ready technology foundations.',
        }),
        defineField({
          name: 'items',
          title: 'Capability Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'icon', title: 'Lucide Icon Name', type: 'string'}),
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
                defineField({
                  name: 'linkText',
                  title: 'Link Text',
                  type: 'string',
                  initialValue: 'Learn More',
                }),
                defineField({
                  name: 'linkUrl',
                  title: 'Link URL',
                  type: 'string',
                  initialValue: '/contact',
                }),
              ],
              preview: {
                select: {title: 'title', subtitle: 'icon'},
              },
            },
          ],
        }),
      ],
    }),

    // ─── 5. OUR ARCHITECTURE LENS ──────────────────────────────────
    defineField({
      name: 'architectureLens',
      title: 'Our Architecture Lens Section',
      type: 'object',
      group: 'architectureLens',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Our Architecture Lens',
        }),
        defineField({
          name: 'subtext',
          title: 'Subtext',
          type: 'text',
          rows: 2,
          initialValue:
            'A holistic view from business strategy to AI consumption - ensuring every layer supports the decisions above it and the capabilities below it.',
        }),
        defineField({
          name: 'layers',
          title: 'Lens Flow Layers',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'icon', title: 'Icon Name', type: 'string'}),
                defineField({
                  name: 'title',
                  title: 'Layer Name (e.g. BUSINESS, DATA)',
                  type: 'string',
                }),
                defineField({name: 'description', title: 'Layer Description', type: 'string'}),
                defineField({
                  name: 'variant',
                  title: 'Card Style Variant',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Dark Navy', value: 'navy'},
                      {title: 'Steel Slate', value: 'slate'},
                      {title: 'Brand Orange', value: 'orange'},
                      {title: 'White Minimal', value: 'white'},
                    ],
                  },
                  initialValue: 'navy',
                }),
              ],
              preview: {
                select: {title: 'title', subtitle: 'description'},
              },
            },
          ],
        }),
        defineField({
          name: 'footerNote',
          title: 'Footer Connective Note',
          type: 'string',
          initialValue:
            'EVERY LAYER SUPPORTS THE DECISIONS ABOVE IT AND THE CAPABILITIES BELOW IT.',
        }),
      ],
    }),

    // ─── 6. HOW WE ENGAGE (PROCESS) ────────────────────────────────
    defineField({
      name: 'howWeEngage',
      title: 'How We Engage Section',
      type: 'object',
      group: 'howWeEngage',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'How We Engage',
        }),
        defineField({
          name: 'subtext',
          title: 'Subtext',
          type: 'text',
          rows: 2,
          initialValue:
            'A structured, collaborative process designed to deliver practical, actionable architecture outcomes.',
        }),
        defineField({
          name: 'steps',
          title: 'Process Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'number', title: 'Step Number (e.g. 01)', type: 'string'}),
                defineField({name: 'title', title: 'Step Title', type: 'string'}),
                defineField({
                  name: 'description',
                  title: 'Step Description',
                  type: 'text',
                  rows: 2,
                }),
              ],
              preview: {
                select: {title: 'title', subtitle: 'number'},
              },
            },
          ],
        }),
      ],
    }),

    // ─── 7. TYPICAL DELIVERABLES ───────────────────────────────────
    defineField({
      name: 'deliverables',
      title: 'Typical Deliverables Section',
      type: 'object',
      group: 'deliverables',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Typical Deliverables',
        }),
        defineField({
          name: 'subtext',
          title: 'Subtext',
          type: 'text',
          rows: 2,
          initialValue:
            'We provide clear, practical deliverables tailored to your organization’s needs.',
        }),
        defineField({
          name: 'items',
          title: 'Deliverable Items (Checklist)',
          type: 'array',
          of: [{type: 'string'}],
        }),
      ],
    }),

    // ─── 8. OUTCOMES ───────────────────────────────────────────────
    defineField({
      name: 'outcomes',
      title: 'Outcomes Section',
      type: 'object',
      group: 'outcomes',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Outcomes',
        }),
        defineField({
          name: 'subtext',
          title: 'Subtext',
          type: 'text',
          rows: 2,
          initialValue:
            'A strong data and AI architecture enables faster innovation, greater trust and measurable business value.',
        }),
        defineField({
          name: 'items',
          title: 'Outcome Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'icon', title: 'Lucide Icon Name', type: 'string'}),
                defineField({name: 'title', title: 'Outcome Title', type: 'string'}),
                defineField({
                  name: 'description',
                  title: 'Outcome Description',
                  type: 'text',
                  rows: 2,
                }),
              ],
              preview: {
                select: {title: 'title', subtitle: 'icon'},
              },
            },
          ],
        }),
      ],
    }),

    // ─── 9. RELATED EXPERTISE ──────────────────────────────────────
    defineField({
      name: 'relatedExpertise',
      title: 'Related Expertise Section',
      type: 'object',
      group: 'relatedServices',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Related Expertise',
        }),
        defineField({
          name: 'subtext',
          title: 'Subtext',
          type: 'text',
          rows: 2,
          initialValue: 'Explore our other services to address your broader data and AI needs.',
        }),
        defineField({
          name: 'services',
          title: 'Related Services Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'number', title: 'Service Number (e.g. 02)', type: 'string'}),
                defineField({name: 'icon', title: 'Lucide Icon Name', type: 'string'}),
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
                defineField({name: 'linkUrl', title: 'Target Link URL', type: 'string'}),
                defineField({
                  name: 'linkText',
                  title: 'Link Text',
                  type: 'string',
                  initialValue: 'Learn More',
                }),
              ],
              preview: {
                select: {title: 'title', subtitle: 'number'},
              },
            },
          ],
        }),
      ],
    }),

    // ─── 10. BOTTOM BANNER CTA ─────────────────────────────────────
    defineField({
      name: 'bottomCta',
      title: 'Bottom Banner CTA',
      type: 'object',
      group: 'bottomCta',
      fields: [
        defineField({
          name: 'headingLine1',
          title: 'Heading Line 1',
          type: 'string',
          initialValue: 'Complex Data & AI decisions',
        }),
        defineField({
          name: 'headingLine2',
          title: 'Heading Line 2',
          type: 'string',
          initialValue: 'deserve experienced judgement.',
        }),
        defineField({
          name: 'subtext',
          title: 'Subtext',
          type: 'text',
          rows: 2,
          initialValue:
            'Partner with Noeveka to design an enterprise architecture that turns ambition into real business outcomes.',
        }),
        defineField({
          name: 'primaryCtaText',
          title: 'Primary CTA Text',
          type: 'string',
          initialValue: 'Start a Conversation',
        }),
        defineField({
          name: 'primaryCtaLink',
          title: 'Primary CTA Link',
          type: 'string',
          initialValue: '/contact',
        }),
        defineField({
          name: 'secondaryCtaText',
          title: 'Secondary CTA Text',
          type: 'string',
          initialValue: 'Explore All Services',
        }),
        defineField({
          name: 'secondaryCtaLink',
          title: 'Secondary CTA Link',
          type: 'string',
          initialValue: '/services',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'hero.heroImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Untitled Service Detail Page',
        subtitle: subtitle ? `/services/${subtitle}` : '',
        media,
      }
    },
  },
})
