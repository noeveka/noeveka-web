import { defineField, defineType } from 'sanity'

/**
 * aboutPage — Sanity document type
 *
 * Mirrors the structure of about.config.ts exactly so that every field
 * edited here maps 1-to-1 to a ?? ABOUT_CONFIG fallback in the web app.
 *
 * Sections (tabs):
 *   1. Hero          — dark cinematic banner at the top
 *   2. Stats Bar     — 4-column orange metrics strip
 *   3. Founder       — editorial 2-col with photo + bio
 *   4. Mission       — dark strip with mission statement + 3 pillars
 *   5. Story         — vertical timeline milestones
 *   6. Values        — 4 value cards
 *   7. CTA           — bottom call-to-action card
 */
export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  groups: [
    { name: 'hero',     title: '1 · Hero' },
    { name: 'stats',    title: '2 · Stats Bar' },
    { name: 'founder',  title: '3 · Founder' },
    { name: 'mission',  title: '4 · Mission' },
    { name: 'story',    title: '5 · Story / Timeline' },
    { name: 'values',   title: '6 · Values' },
    { name: 'cta',      title: '7 · CTA' },
  ],

  fields: [

    // ─── 1. HERO ──────────────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      description: 'Dark cinematic banner shown at the very top of the About page.',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow Label',
          type: 'string',
          description: 'Small uppercase label above the heading (e.g. "About Noeveka").',
          initialValue: 'About Noeveka',
        }),
        defineField({
          name: 'headingLine1',
          title: 'Heading — Line 1 (plain)',
          type: 'string',
          description: 'First line of the main heading, rendered in white.',
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

    // ─── 3. FOUNDER ──────────────────────────────────────────────────────────
    defineField({
      name: 'founder',
      title: 'Founder Section',
      type: 'object',
      group: 'founder',
      description: 'Editorial 2-column section: photo left, bio & quote right.',
      fields: [
        defineField({
          name: 'name',
          title: 'Founder Name',
          type: 'string',
          initialValue: 'Ajay Kumar',
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
          description: 'Displayed as a large blockquote with an orange left border.',
          initialValue: '"Good architecture is not about the tool. It\'s about the judgment behind it."',
        }),
        defineField({
          name: 'bio',
          title: 'Bio Paragraphs',
          description: 'Each item in the array becomes a separate paragraph. Keep to 3 paragraphs max.',
          type: 'array',
          of: [{ type: 'text' }],
        }),
        defineField({
          name: 'photo',
          title: 'Founder Photo',
          type: 'image',
          options: { hotspot: true },
          description: 'Portrait orientation works best (3:4 ratio).',
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
          ],
        }),
      ],
    }),

    // ─── 4. MISSION ──────────────────────────────────────────────────────────
    defineField({
      name: 'mission',
      title: 'Mission Section',
      type: 'object',
      group: 'mission',
      description: 'Dark section with the mission statement and 3 numbered pillars.',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow Label',
          type: 'string',
          initialValue: 'Our Mission',
        }),
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

    // ─── 5. STORY / TIMELINE ─────────────────────────────────────────────────
    defineField({
      name: 'story',
      title: 'Story / Timeline',
      type: 'object',
      group: 'story',
      description: 'Vertical timeline showing key milestones in Noeveka\'s journey.',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow Label',
          type: 'string',
          initialValue: 'Our Journey',
        }),
        defineField({
          name: 'heading',
          title: 'Section Heading',
          description: 'Use a line break (\\n) in the text to split the heading across two lines.',
          type: 'string',
          initialValue: 'Built from real experience, not textbooks.',
        }),
        defineField({
          name: 'milestones',
          title: 'Milestones',
          description: 'Add one item per key event. The last item is highlighted in brand orange.',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'year',  title: 'Year (4 digits)', type: 'string', description: 'e.g. "2023"' }),
                defineField({ name: 'event', title: 'Event Title', type: 'string' }),
                defineField({ name: 'detail', title: 'Detail / Description', type: 'text', rows: 2 }),
              ],
              preview: { select: { title: 'event', subtitle: 'year' } },
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
          name: 'eyebrow',
          title: 'Eyebrow Label',
          type: 'string',
          initialValue: 'What We Stand For',
        }),
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
      description: 'Dark call-to-action card at the bottom of the page.',
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
