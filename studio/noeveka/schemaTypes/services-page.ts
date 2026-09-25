import { defineField, defineType } from 'sanity'

/**
 * servicesPage — Sanity document type
 *
 * Mirrors the structure of services.config.ts exactly so that every field
 * edited here maps 1-to-1 to a ?? SERVICES_CONFIG fallback in the web app.
 *
 * Sections (tabs):
 *   1. Hero & Focus Areas — Top centered copy + 4 core service areas
 *   2. Impact Principles  — Split section with 3 principles + isometric matrix
 *   3. Engagement Models  — 4 flexible engagement steps with process ball path
 *   4. Industries & Quote — Trusted sectors + founder architecture quote
 *   5. Conversion CTA     — Minimal light mode CTA linking to contact
 */
export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  groups: [
    { name: 'hero', title: '1 · Hero & Focus Areas' },
    { name: 'impact', title: '2 · Impact Principles' },
    { name: 'engagement', title: '3 · Engagement Models' },
    { name: 'industries', title: '4 · Industries & Quote' },
    { name: 'cta', title: '5 · Final CTA' },
  ],

  fields: [
    // ─── 1. HERO & FOCUS AREAS
    defineField({
      name: 'hero',
      title: 'Hero Section Copy',
      type: 'object',
      group: 'hero',
      description: 'Main headline, subtext, and primary call to action.',
      fields: [
        defineField({
          name: 'badge',
          title: 'Hero Badge',
          type: 'string',
          initialValue: 'Independent Enterprise Data & AI Advisory',
        }),
        defineField({
          name: 'headingLine1',
          title: 'Heading — Line 1',
          type: 'string',
          initialValue: 'Four Focus Areas.',
        }),
        defineField({
          name: 'headingLine2',
          title: 'Heading — Line 2',
          type: 'string',
          initialValue: 'Real Business Outcomes.',
        }),
        defineField({
          name: 'headingHighlight',
          title: 'Heading — Highlight (Brand Orange)',
          type: 'string',
          initialValue: 'Real Business Outcomes.',
        }),
        defineField({
          name: 'subtext',
          title: 'Hero Subtext',
          type: 'text',
          rows: 3,
          initialValue:
            'We solve the most important Data & AI challenges for modern enterprises — with architecture at the core.',
        }),
        defineField({
          name: 'ctaPrimaryText',
          title: 'Primary CTA Text',
          type: 'string',
          initialValue: 'Explore Focus Areas',
        }),
        defineField({
          name: 'ctaPrimaryLink',
          title: 'Primary CTA Link Anchor',
          type: 'string',
          initialValue: '#services-cards',
        }),
      ],
    }),

    defineField({
      name: 'focusAreas',
      title: 'Four Core Focus Areas',
      type: 'array',
      group: 'hero',
      description: 'The 4 primary service pillars rendered in the 3-column asymmetric grid.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'Identifier (Slug)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'number',
              title: 'Number Badge (e.g. 01, 02)',
              type: 'string',
              initialValue: '01',
            }),
            defineField({
              name: 'icon',
              title: 'Icon Name (Lucide)',
              type: 'string',
              initialValue: 'layers-3',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'shortDescription',
              title: 'Short Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'bullets',
              title: 'Key Focus Bullets / Capabilities',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'visualType',
              title: 'Visual Diagram Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Multi-Tier Stack (01 Architecture)', value: 'stack' },
                  { title: 'Agentic Network Nodes (02 AI Agents)', value: 'agents' },
                  { title: 'Governance Shield (03 Risk & Control)', value: 'governance' },
                  { title: 'Transformation Curve (04 Trajectory)', value: 'transformation' },
                ],
              },
              initialValue: 'stack',
            }),
            defineField({
              name: 'ctaText',
              title: 'Card CTA Text',
              type: 'string',
              initialValue: 'Learn More',
            }),
            defineField({
              name: 'ctaLink',
              title: 'Card CTA Link',
              type: 'string',
              initialValue: '/contact',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'number',
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Untitled Service',
                subtitle: subtitle ? `Step ${subtitle}` : '',
              }
            },
          },
        },
      ],
    }),

    // 2. IMPACT PRINCIPLES
    defineField({
      name: 'impactPrinciplesSection',
      title: 'Impact Principles Section',
      type: 'object',
      group: 'impact',
      description: 'Split section: Value proposition + Isometric Matrix visual on left, 3 principles on right.',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'What makes enterprise Data & AI deliver real impact?',
        }),
        defineField({
          name: 'body',
          title: 'Section Body Paragraph',
          type: 'text',
          rows: 4,
          initialValue:
            'Is it the latest foundation model alone? Massive cloud compute? Flashy POC demos? Enterprise AI will not succeed through models alone. Real impact requires architecture, governance, and engineering working as one unified system.',
        }),
        defineField({
          name: 'principles',
          title: 'Principles (Vertical Scroll Line)',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'number',
                  title: 'Number (e.g. 01)',
                  type: 'string',
                }),
                defineField({
                  name: 'title',
                  title: 'Principle Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 3,
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'number',
                },
              },
            },
          ],
        }),
      ],
    }),

    // 3. ENGAGEMENT MODELS
    defineField({
      name: 'engagementSection',
      title: 'Engagement Models (Process Ball Path)',
      type: 'object',
      group: 'engagement',
      description: '4-step process section with scroll-driven bouncing ball path.',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Flexible Engagement Models for Your Needs',
        }),
        defineField({
          name: 'subtext',
          title: 'Subtext',
          type: 'text',
          rows: 3,
          initialValue:
            'We solve the most important Data & AI challenges with tailored engagement models designed around your timeline and enterprise complexity.',
        }),
        defineField({
          name: 'steps',
          title: 'Engagement Steps (4 Columns)',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'number',
                  title: 'Number (e.g. 01, 02)',
                  type: 'string',
                }),
                defineField({
                  name: 'title',
                  title: 'Step Title',
                  type: 'string',
                }),
                defineField({
                  name: 'desc',
                  title: 'Short Description',
                  type: 'text',
                  rows: 2,
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'number',
                },
              },
            },
          ],
        }),
      ],
    }),

    // INDUSTRIES & QUOTE
    defineField({
      name: 'industrySection',
      title: 'Industries & Founder Architecture Quote',
      type: 'object',
      group: 'industries',
      fields: [
        defineField({
          name: 'quote',
          title: 'Founder Architecture Quote',
          type: 'object',
          fields: [
            defineField({
              name: 'quote',
              title: 'Quote Text',
              type: 'text',
              rows: 3,
              initialValue:
                'Enterprise AI will not succeed through models alone. It requires architecture, governance and engineering working as one system.',
            }),
            defineField({
              name: 'author',
              title: 'Author Name',
              type: 'string',
              initialValue: 'Ajay Sharma',
            }),
            defineField({
              name: 'role',
              title: 'Author Role / Title',
              type: 'string',
              initialValue: 'Founder, Noeveka',
            }),
          ],
        }),
        defineField({
          name: 'industries',
          title: 'Trusted Across Industries',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Industry Sector Name',
                  type: 'string',
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon Name (Lucide)',
                  type: 'string',
                }),
              ],
              preview: {
                select: {
                  title: 'label',
                  subtitle: 'icon',
                },
              },
            },
          ],
        }),
      ],
    }),

    // 5. FINAL CONVERSION CTA
    defineField({
      name: 'ctaSection',
      title: 'Final Conversion CTA',
      type: 'object',
      group: 'cta',
      description: 'Minimal light-mode CTA card linking to contact page.',
      fields: [
        defineField({
          name: 'headingPart',
          title: 'Heading — Plain text',
          type: 'string',
          initialValue: "Ready to architect your enterprise's ",
        }),
        defineField({
          name: 'headingHighlight',
          title: 'Heading — Highlight (Orange)',
          type: 'string',
          initialValue: 'data future?',
        }),
        defineField({
          name: 'body',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue:
            'Book a free strategy call with Ajay Kumar and get an independent view of your platform fit, cost, and architecture roadmap — at no cost.',
        }),
        defineField({
          name: 'primaryCtaText',
          title: 'Primary CTA Text',
          type: 'string',
          initialValue: 'Book a Free Strategy Call',
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
          initialValue: 'Explore Our Resources',
        }),
        defineField({
          name: 'secondaryCtaLink',
          title: 'Secondary CTA Link',
          type: 'string',
          initialValue: '/resources',
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Services Page',
        subtitle: 'Enterprise Data & AI Advisory Content',
      }
    },
  },
})
