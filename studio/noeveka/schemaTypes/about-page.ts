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
    { name: 'narrative', title: '2 · Origin Narrative' },
    { name: 'stats',     title: '3 · Stats Bar' },
    { name: 'journey',   title: '4 · Global Journey Timeline' },
    { name: 'founder',   title: '5 · Founder' },
    { name: 'mission',   title: '6 · Mission' },
    { name: 'values',    title: '7 · Values' },
    { name: 'cta',       title: '8 · CTA' },
  ],

  fields: [

    // ─── 1. HERO ──────────────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      description: 'Cinematic hero with founder photo background, dual aspect ratios for desktop and mobile, and clear value narrative.',
      fields: [
        defineField({
          name: 'badge',
          title: 'Kicker Badge Text',
          type: 'string',
          initialValue: 'About Us',
        }),
        defineField({
          name: 'headingLine1',
          title: 'Heading — Line 1',
          type: 'string',
          initialValue: 'A Global Journey.',
        }),
        defineField({
          name: 'headingLine2',
          title: 'Heading — Line 2',
          type: 'string',
          initialValue: 'A Bigger',
        }),
        defineField({
          name: 'headingHighlight',
          title: 'Heading — Highlight (Orange)',
          type: 'string',
          description: 'Rendered in brand orange.',
          initialValue: 'Purpose.',
        }),
        defineField({
          name: 'subheading',
          title: 'Subheading / Tagline',
          type: 'string',
          description: 'Bold narrative subtitle (e.g. From BI Consulting Pro to NOE·V·EKA).',
          initialValue: 'From BI Consulting Pro to NOE·V·EKA — Architecting the AI Era.',
        }),
        defineField({
          name: 'subtext',
          title: 'Subtext / Paragraph',
          type: 'text',
          rows: 3,
          description: 'Explains the evolution and mission of Noeveka.',
          initialValue:
            'What started as a focused BI and analytics initiative has evolved into NOE·V·EKA — an independent enterprise Data & AI advisory, helping organizations design, govern, and implement intelligent, future-ready ecosystems.',
        }),
        defineField({
          name: 'ctaPrimaryText',
          title: 'Primary CTA — Button Text',
          type: 'string',
          initialValue: "Let's Talk",
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
          initialValue: 'Explore Focus Areas',
        }),
        defineField({
          name: 'ctaSecondaryLink',
          title: 'Secondary CTA — Link',
          type: 'string',
          initialValue: '/services',
        }),
        defineField({
          name: 'bgImage',
          title: 'Hero Background Image (Desktop - 16:9 / Landscape)',
          type: 'image',
          options: { hotspot: true },
          description: 'Main cinematic background featuring founder in studio/office setting. Recommended landscape ratio 16:9 or 21:9.',
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string', initialValue: 'Ajay Kumar — Founder & CEO, Noeveka' }),
          ],
        }),
        defineField({
          name: 'mobileBgImage',
          title: 'Hero Background Image (Mobile - 4:3 / 1:1 Portrait)',
          type: 'image',
          options: { hotspot: true },
          description: 'Optional tailored portrait or square image optimized for mobile viewports.',
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string', initialValue: 'Ajay Kumar — Founder & CEO, Noeveka' }),
          ],
        }),
        defineField({
          name: 'badgeTags',
          title: 'Feature Tags / Accreditations',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Credibility badges shown in hero overlay.',
          initialValue: ['Independent Advisory', 'Global Architecture', '15+ Yrs Exp'],
        }),
        defineField({
          name: 'stats',
          title: 'Hero Highlight Metrics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'value', title: 'Value', type: 'string', description: 'e.g. "15+"' }),
                defineField({ name: 'label', title: 'Label', type: 'string', description: 'e.g. "Years Experience"' }),
              ],
              preview: { select: { title: 'value', subtitle: 'label' } },
            },
          ],
          initialValue: [
            { value: '15+', label: 'Years Experience' },
            { value: '3', label: 'Global Hubs' },
            { value: '5K+', label: 'Leaders Trained' },
            { value: '100%', label: 'Independent' },
          ],
        }),
        defineField({
          name: 'mobileStats',
          title: 'Mobile Stats Strip',
          description: 'Quick stats shown on mobile screens.',
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

    // ─── 2. ORIGIN NARRATIVE ("The Frustration & The Realisation") ─────────────
    defineField({
      name: 'narrativeSection',
      title: 'Origin Narrative Section',
      type: 'object',
      group: 'narrative',
      description: 'The editorial story section following the hero: Problem/Frustration -> Workspace Desk Image -> The Realisation.',
      fields: [
        defineField({
          name: 'topBlock',
          title: 'Upper Block (The Frustration)',
          type: 'object',
          fields: [
            defineField({
              name: 'eyebrow',
              title: 'Eyebrow',
              type: 'string',
              initialValue: 'The Frustration We Saw',
            }),
            defineField({
              name: 'headingLine1',
              title: 'Heading Line 1',
              type: 'string',
              initialValue: 'When It Feels Like Your',
            }),
            defineField({
              name: 'headingLine2',
              title: 'Heading Line 2',
              type: 'string',
              initialValue: "Firm's Running on",
            }),
            defineField({
              name: 'headingLine3',
              title: 'Heading Line 3',
              type: 'string',
              initialValue: 'Spreadsheets, Silos, and',
            }),
            defineField({
              name: 'headingHighlight',
              title: 'Heading Highlight (Bold Dark)',
              type: 'string',
              initialValue: 'Pure Grit',
            }),
            defineField({
              name: 'paragraph1',
              title: 'Paragraph 1',
              type: 'text',
              rows: 3,
              initialValue:
                'Across modern enterprises, leadership teams are struggling with fragmented data systems that refuse to talk to each other. Ad-hoc pipelines, fragile spreadsheet models, inconsistent governance, and cloud costs spiraling out of control.',
            }),
            defineField({
              name: 'paragraph2',
              title: 'Paragraph 2',
              type: 'text',
              rows: 3,
              initialValue:
                'We searched for independent, architect-grade guidance in the market — but all we found were vendor reseller pitches, massive agency overheads, and slide decks without real implementation rigor.',
            }),
            defineField({
              name: 'punchline',
              title: 'Closing Punchline (Bold)',
              type: 'string',
              initialValue: 'There had to be a better way...',
            }),
          ],
        }),

        defineField({
          name: 'image',
          title: 'Middle Media Banner (Workspace / Desk Photo)',
          type: 'image',
          options: { hotspot: true },
          description: 'Editorial workspace or architectural desk photo with no faces.',
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string', initialValue: 'Noeveka enterprise architecture workspace desk' }),
          ],
        }),

        defineField({
          name: 'bottomBlock',
          title: 'Lower Block (The Realisation)',
          type: 'object',
          fields: [
            defineField({
              name: 'eyebrowPart1',
              title: 'Eyebrow Part 1',
              type: 'string',
              initialValue: 'The Moment',
            }),
            defineField({
              name: 'eyebrowHighlight',
              title: 'Eyebrow Highlight (Orange)',
              type: 'string',
              initialValue: 'We Realised It',
            }),
            defineField({
              name: 'headingPlain',
              title: 'Heading Plain Text',
              type: 'string',
              initialValue: "You Don't Need to Start Over. You Just Need",
            }),
            defineField({
              name: 'headingHighlight',
              title: 'Heading Highlight (Brand Orange)',
              type: 'string',
              initialValue: 'Things to Work Better.',
            }),
            defineField({
              name: 'paragraph',
              title: 'Body Paragraph',
              type: 'text',
              rows: 3,
              initialValue:
                "Most enterprises aren't asking for an expensive, multi-year rip-and-replace of their entire stack. They just want clean data foundations, reliable AI workflows, sane governance, and architecture that empowers their teams to move fast without breaking compliance.",
            }),
            defineField({
              name: 'punchline',
              title: 'Closing Punchline (Bold)',
              type: 'string',
              initialValue: "That's exactly what we set out to build.",
            }),
          ],
        }),
      ],
    }),

    // ─── 3. STATS BAR ─────────────────────────────────────────────────────────
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

    // ─── 4. GLOBAL JOURNEY TIMELINE ───────────────────────────────────────────
    defineField({
      name: 'journey',
      title: 'Global Journey Timeline',
      type: 'object',
      group: 'journey',
      description: 'Timeline illustrating Noeveka evolution from Singapore (2020) to UAE (2022) to Netherlands (2024) to Today.',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
          initialValue: 'Our Journey',
        }),
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'From Local Roots to a Global Footprint',
        }),
        defineField({
          name: 'subtext',
          title: 'Subtext',
          type: 'text',
          rows: 2,
          initialValue:
            'A journey driven by independent architecture leadership, real enterprise impact, and continuous international expansion.',
        }),
        defineField({
          name: 'milestones',
          title: 'Journey Milestones',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'year', title: 'Year (e.g. 2020)', type: 'string' }),
                defineField({ name: 'stage', title: 'Stage Badge (e.g. LEARN, GROW, SCALE)', type: 'string' }),
                defineField({ name: 'location', title: 'Location (e.g. Singapore)', type: 'string' }),
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
                defineField({ name: 'isHighlight', title: 'Is Highlight Card (Orange accent)', type: 'boolean', initialValue: false }),
              ],
              preview: {
                select: {
                  title: 'year',
                  subtitle: 'title',
                },
              },
            },
          ],
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
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
          initialValue: '\\\\ About Founder \\\\',
        }),
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Meet The Founder',
        }),
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
        defineField({
          name: 'whyFoundedHeading',
          title: 'Why Founded Heading',
          type: 'string',
          initialValue: 'Why He Founded Noeveka?',
        }),
        defineField({
          name: 'whyFoundedText',
          title: 'Why Founded Description',
          type: 'text',
          rows: 3,
          initialValue:
            'To give enterprise data leaders direct access to independent, architect-grade thinking — without vendor reseller kickbacks, bloated agency overhead, or junior delivery.',
        }),
        defineField({
          name: 'linkedinUrl',
          title: 'LinkedIn URL',
          type: 'url',
          initialValue: 'https://www.linkedin.com/company/noeveka',
        }),
        defineField({
          name: 'email',
          title: 'Direct Email',
          type: 'string',
          initialValue: 'hello@noeveka.com',
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
      description: 'Minimalist call-to-action section at the bottom of the page.',
      fields: [
        defineField({
          name: 'headingLine1',
          title: 'Heading Line 1',
          type: 'string',
          initialValue: 'Upgrade How You Work,',
        }),
        defineField({
          name: 'headingLine2',
          title: 'Heading Line 2',
          type: 'string',
          initialValue: 'Not What You Do',
        }),
        defineField({
          name: 'headingPlain',
          title: 'Heading — Plain text (Legacy)',
          type: 'string',
          hidden: true,
        }),
        defineField({
          name: 'headingHighlight',
          title: 'Heading — Highlight (Legacy)',
          type: 'string',
          hidden: true,
        }),
        defineField({
          name: 'headingTail',
          title: 'Heading — Tail text (Legacy)',
          type: 'string',
          hidden: true,
        }),
        defineField({
          name: 'body',
          title: 'Body Text',
          type: 'text',
          rows: 3,
          initialValue:
            'Noeveka helps enterprise leaders modernise their Data & AI architecture and governance — without changing the principles, people, or judgment that make their firm what it is.',
        }),
        defineField({
          name: 'primaryCtaText',
          title: 'Primary CTA — Button Text',
          type: 'string',
          initialValue: "Let's Talk",
        }),
        defineField({
          name: 'primaryCtaLink',
          title: 'Primary CTA — Link',
          type: 'string',
          initialValue: '/contact',
        }),
        defineField({
          name: 'secondaryCtaText',
          title: 'Secondary CTA — Link Text',
          type: 'string',
          initialValue: 'Explore the Platform',
        }),
        defineField({
          name: 'secondaryCtaLink',
          title: 'Secondary CTA — Link',
          type: 'string',
          initialValue: '/services',
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
