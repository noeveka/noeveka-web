import { defineField, defineType } from 'sanity'

/**
 * resourcesPage — Sanity document type
 *
 * Mirrors the structure of resources.config.ts exactly so that every field
 * edited in Sanity maps 1-to-1 to a RESOURCES_CONFIG fallback in the web app.
 */
export const resourcesPage = defineType({
  name: 'resourcesPage',
  title: 'Resources Page',
  type: 'document',
  groups: [
    { name: 'hero', title: '1 · Hero Section' },
    { name: 'grid', title: '2 · Grid & Copy' },
  ],

  fields: [
    // ─── 1. HERO ──────────────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      description: 'Banner content at the top of the Resources page.',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow Label',
          type: 'string',
          description: 'Small uppercase tag above the heading (e.g. "Free Resources"). Leave blank to hide.',
          initialValue: 'Free Resources',
        }),
        defineField({
          name: 'heading',
          title: 'Main Heading (plain text)',
          type: 'string',
          initialValue: 'Architecture thinking,',
        }),
        defineField({
          name: 'headingHighlight',
          title: 'Heading Highlight (orange text)',
          type: 'string',
          initialValue: 'yours to keep.',
        }),
        defineField({
          name: 'subtext',
          title: 'Hero Subtext / Description',
          type: 'text',
          rows: 3,
          initialValue:
            'Practical checklists, playbooks, and guides built by enterprise architects — no fluff, no vendor bias. Download free.',
        }),
        defineField({
          name: 'ctaPrimaryText',
          title: 'Primary CTA Button Text',
          type: 'string',
          initialValue: 'Browse Resources',
        }),
        defineField({
          name: 'ctaPrimaryLink',
          title: 'Primary CTA Button Link',
          type: 'string',
          initialValue: '#resources',
        }),
        defineField({
          name: 'ctaSecondaryText',
          title: 'Secondary CTA Button Text',
          type: 'string',
          initialValue: 'Talk to an Architect',
        }),
        defineField({
          name: 'ctaSecondaryLink',
          title: 'Secondary CTA Button Link',
          type: 'string',
          initialValue: '/contact',
        }),
      ],
    }),

    // ─── 2. GRID & COPY ───────────────────────────────────────────────────────
    defineField({
      name: 'gridSection',
      title: 'Resource Grid Section Copy & Settings',
      type: 'object',
      group: 'grid',
      description: 'Headings, category filter tabs, and author avatar for the resource grid.',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Explore Our Resources',
        }),
        defineField({
          name: 'subtext',
          title: 'Section Description',
          type: 'text',
          rows: 2,
          initialValue:
            'Find practical materials designed to help enterprise data teams architect better, move faster, and cut through vendor noise.',
        }),
        defineField({
          name: 'categories',
          title: 'Category Filter Tabs',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Custom category filter tabs shown on the resource grid (e.g. "Checklist", "Playbook", "Guide", "Template", "Whitepaper"). "All" is automatically included.',
          initialValue: ['Checklist', 'Playbook', 'Guide', 'Template', 'Whitepaper'],
        }),
        defineField({
          name: 'authorName',
          title: 'Author Name (Card Footer)',
          type: 'string',
          description: 'Author name displayed on resource card footers (e.g. "Noeveka").',
          initialValue: 'Noeveka',
        }),
        defineField({
          name: 'authorAvatar',
          title: 'Author Avatar Image (Card Footer)',
          type: 'image',
          options: { hotspot: true },
          description: 'Small circular avatar photo displayed next to author name on card footers.',
        }),
        defineField({
          name: 'emptyStateText',
          title: 'Empty Category Message',
          type: 'string',
          initialValue: 'No resources in this category yet — check back soon.',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'hero.heading',
      subtitle: 'hero.headingHighlight',
    },
    prepare({ title, subtitle }) {
      return {
        title: 'Resources Page Settings',
        subtitle: `${title ?? ''} ${subtitle ?? ''}`.trim() || 'Resources Page',
      }
    },
  },
})
