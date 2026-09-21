import { defineField, defineType } from 'sanity'

/**
 * aboutPage — Sanity document type
 *
 * Mirrors the structure of about.config.ts exactly so that every field
 * edited here maps 1-to-1 to a ?? ABOUT_CONFIG fallback in the web app.
 *
 * Sections (tabs):
 *   1. Hero              — light-mode split banner with founder photo
 *   2. Stats Bar         — 4-column orange metrics strip
 *   3. Resources Teaser  — zigzag resource preview section
 *   4. Founder           — editorial 2-col with photo + bio + credentials
 *   5. Mission           — dark strip with mission statement + 3 pillars
 *   6. Values            — 4 value cards
 *   7. CTA               — bottom call-to-action card
 */
export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  groups: [
    { name: 'hero',      title: '1 · Hero' },
    { name: 'stats',     title: '2 · Stats Bar' },
    { name: 'resources', title: '3 · Resources Teaser' },
    { name: 'founder',   title: '4 · Founder' },
    { name: 'mission',   title: '5 · Mission' },
    { name: 'values',    title: '6 · Values' },
    { name: 'cta',       title: '7 · CTA' },
  ],

  fields: [

    // ─── 1. HERO ──────────────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      description: 'Light-mode split hero — heading left, founder photo right.',
      fields: [
        defineField({
          name: 'headingLine1',
          title: 'Heading — Line 1 (plain)',
          type: 'string',
          description: 'First line of the main heading.',
          initialValue: 'Where Data Architecture',
        }),
        defineField({
          name: 'headingLine2',
          title: 'Heading — Line 2 (plain)',
          type: 'string',
          description: 'Second word(s) before the orange highlight.',
          initialValue: 'Meets',
        }),
        defineField({
          name: 'headingHighlight',
          title: 'Heading — Highlight (orange)',
          type: 'string',
          description: 'The word(s) rendered in brand orange. Keep short for impact.',
          initialValue: 'Human Judgment.',
        }),
        defineField({
          name: 'subtext',
          title: 'Subtext / Description',
          type: 'text',
          rows: 3,
          description: 'One or two sentences summarising the brand positioning.',
          initialValue:
            'We are an independent enterprise data & AI advisory firm — built by architects who have shipped real systems at global scale, not consultants who have only read about them.',
        }),
        defineField({
          name: 'ctaPrimaryText',
          title: 'Primary CTA — Button Text',
          type: 'string',
          initialValue: 'Book a Strategy Call',
        }),
        defineField({
          name: 'ctaPrimaryLink',
          title: 'Primary CTA — Link',
          type: 'string',
          initialValue: '/contact',
        }),
        defineField({
          name: 'ctaSecondaryText',
          title: 'Secondary CTA — Button Text',
          type: 'string',
          initialValue: 'Our Services',
        }),
        defineField({
          name: 'ctaSecondaryLink',
          title: 'Secondary CTA — Link',
          type: 'string',
          initialValue: '/',
        }),
        defineField({
          name: 'badgeTags',
          title: 'Credential Tags (floating badge on photo)',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Short tags shown in the floating badge on the founder photo. Max 3 recommended.',
          initialValue: ['Microsoft Expert', 'Databricks Certified', '15+ Yrs'],
        }),
        defineField({
          name: 'mobileStats',
          title: 'Mobile Stats Strip',
          description: 'Three quick stats shown below hero on mobile only.',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'value', title: 'Value', type: 'string', description: 'e.g. "15+"' }),
                defineField({ name: 'label', title: 'Label', type: 'string', description: 'e.g. "Yrs experience"' }),
              ],
              preview: { select: { title: 'value', subtitle: 'label' } },
            },
          ],
          initialValue: [
            { value: '15+', label: 'Yrs experience' },
            { value: '5K+', label: 'Leaders trained' },
            { value: '100%', label: 'Independent' },
          ],
        }),
      ],
    }),

    // ─── 2. STATS BAR ─────────────────────────────────────────────────────────
    defineField({
      name: 'stats',
      title: 'Stats Bar',
      type: 'object',
      group: 'stats',
      description: 'Full-width orange strip with 4 key numbers below the hero.',
      fields: [
        defineField({
          name: 'items',
          title: 'Stat Items',
          description: 'Exactly 4 items recommended for the 4-column layout.',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'value', title: 'Value', type: 'string', description: 'e.g. "15+"' }),
                defineField({ name: 'label', title: 'Label', type: 'string', description: 'e.g. "Years"' }),
                defineField({ name: 'sub',   title: 'Sub-label', type: 'string', description: 'Short supporting line.' }),
              ],
              preview: { select: { title: 'value', subtitle: 'label' } },
            },
          ],
        }),
      ],
    }),

    // ─── 3. RESOURCES TEASER ──────────────────────────────────────────────────
    defineField({
      name: 'resourcesTeaser',
      title: 'Resources Teaser Section',
      type: 'object',
      group: 'resources',
      description: 'Zigzag preview of free resources with a link to the Resources page.',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading (plain)',
          type: 'string',
          initialValue: 'Architecture thinking,',
        }),
        defineField({
          name: 'headingHighlight',
          title: 'Section Heading — Highlight (orange)',
          type: 'string',
          initialValue: 'yours to keep.',
        }),
        defineField({
          name: 'subtext',
          title: 'Section Subtext',
          type: 'text',
          rows: 2,
          initialValue:
            'Practical checklists, playbooks, and guides built by enterprise architects — no fluff, no vendor bias.',
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'Explore All Free Resources',
        }),
        defineField({
          name: 'ctaLink',
          title: 'CTA Button Link',
          type: 'string',
          initialValue: '/resources',
        }),
      ],
    }),

    // ─── 4. FOUNDER ──────────────────────────────────────────────────────────
    defineField({
      name: 'founder',
      title: 'Founder Section',
      type: 'object',
      group: 'founder',
      description: 'Editorial 2-column section: photo left, bio & quote right. Photo also appears in the Hero.',
      fields: [
        defineField({
          name: 'name',
          title: 'Founder Name',
          type: 'string',
          initialValue: 'Ajay Kumar',
        }),
        defineField({
          name: 'initials',
          title: 'Initials (shown in avatar / signature)',
          type: 'string',
          description: 'Usually 2 letters, e.g. "AK". Used in the signature row.',
          initialValue: 'AK',
        }),
        defineField({
          name: 'title',
          title: 'Job Title',
          type: 'string',
          initialValue: 'CEO & Founder',
        }),
        defineField({
          name: 'company',
          title: 'Company Name',
          type: 'string',
          initialValue: 'Noeveka Data & AI Solutions',
        }),
        defineField({
          name: 'tagline',
          title: 'Pull Quote',
          type: 'text',
          rows: 2,
          description: 'Displayed as a large blockquote. Do not include surrounding quotes — they are added automatically.',
          initialValue: 'Good architecture is not about the tool. It\'s about the judgment behind it.',
        }),
        defineField({
          name: 'bio',
          title: 'Bio Paragraphs',
          description: 'Each item becomes a separate paragraph. Only the first paragraph is shown in the Founder section. Keep to 3 max.',
          type: 'array',
          of: [{ type: 'text' }],
        }),
        defineField({
          name: 'photo',
          title: 'Founder Photo',
          type: 'image',
          options: { hotspot: true },
          description: 'Portrait orientation works best (3:4 ratio). Used in both the Hero and Founder sections.',
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
          ],
        }),
        defineField({
          name: 'credentials',
          title: 'Credential Chips',
          description: 'Shown in the 2×2 credential grid below the quote. 4 items recommended.',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Label (small uppercase)', type: 'string', description: 'e.g. "Microsoft Certified"' }),
                defineField({ name: 'value', title: 'Value (bold)', type: 'string', description: 'e.g. "Fabric & Azure Expert"' }),
              ],
              preview: { select: { title: 'label', subtitle: 'value' } },
            },
          ],
          initialValue: [
            { label: 'Microsoft Certified', value: 'Fabric & Azure Expert' },
            { label: 'Databricks Certified', value: 'Data Engineer & Architect' },
            { label: 'Enterprise Experience', value: '15+ Years' },
            { label: 'Clients Trained', value: '5,000+ Leaders' },
          ],
        }),
      ],
    }),

    // ─── 5. MISSION ──────────────────────────────────────────────────────────
    defineField({
      name: 'mission',
      title: 'Mission Section',
      type: 'object',
      group: 'mission',
      description: 'Dark section with the mission statement and 3 numbered pillars.',
      fields: [
        defineField({
          name: 'statement',
          title: 'Mission Statement',
          type: 'text',
          rows: 3,
          description: 'One clear, compelling sentence or two about why Noeveka exists.',
          initialValue:
            'To make world-class data architecture thinking accessible to every enterprise — independent, practical, and built for impact.',
        }),
        defineField({
          name: 'pillars',
          title: 'Mission Pillars',
          description: 'Exactly 3 pillars recommended. Each has a number, title, and short description.',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'number', title: 'Number (e.g. "01")', type: 'string' }),
                defineField({ name: 'title',  title: 'Pillar Title', type: 'string' }),
                defineField({ name: 'desc',   title: 'Description', type: 'text', rows: 3 }),
              ],
              preview: { select: { title: 'title', subtitle: 'number' } },
            },
          ],
        }),
      ],
    }),

    // ─── 6. VALUES ────────────────────────────────────────────────────────────
    defineField({
      name: 'values',
      title: 'Values Section',
      type: 'object',
      group: 'values',
      description: '4 principle cards shown in a 2-column grid.',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Principles we refuse to compromise.',
        }),
        defineField({
          name: 'items',
          title: 'Value Cards',
          description: '4 items recommended. Icon must be a valid Lucide icon name (e.g. "Scale", "Lightbulb", "ShieldCheck", "TrendingUp").',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Icon Name (Lucide)',
                  type: 'string',
                  description: 'See lucide.dev for icon names. Examples: "Scale", "Lightbulb", "ShieldCheck", "TrendingUp".',
                }),
                defineField({ name: 'title', title: 'Value Title', type: 'string' }),
                defineField({ name: 'desc',  title: 'Description', type: 'text', rows: 2 }),
              ],
              preview: { select: { title: 'title', subtitle: 'icon' } },
            },
          ],
        }),
      ],
    }),

    // ─── 7. CTA ───────────────────────────────────────────────────────────────
    defineField({
      name: 'cta',
      title: 'CTA Section',
      type: 'object',
      group: 'cta',
      description: 'Call-to-action card at the bottom of the page.',
      fields: [
        defineField({
          name: 'headingPlain',
          title: 'Heading — Plain text',
          type: 'string',
          initialValue: 'Ready to get',
        }),
        defineField({
          name: 'headingHighlight',
          title: 'Heading — Highlight (orange)',
          type: 'string',
          initialValue: 'architect-quality thinking',
        }),
        defineField({
          name: 'headingTail',
          title: 'Heading — Tail text',
          type: 'string',
          initialValue: 'on your data platform?',
        }),
        defineField({
          name: 'body',
          title: 'Body Text',
          type: 'text',
          rows: 3,
          initialValue:
            'Book a free 30-minute strategy call with Ajay. No sales pitch — just an honest view of your architecture, cost, and roadmap.',
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
          initialValue: '/#contact',
        }),
        defineField({
          name: 'secondaryCtaText',
          title: 'Secondary CTA — Button Text',
          type: 'string',
          initialValue: 'Explore Our Services',
        }),
        defineField({
          name: 'secondaryCtaLink',
          title: 'Secondary CTA — Link',
          type: 'string',
          initialValue: '/',
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return { title: 'About Page' }
    },
  },
})
