import { defineField, defineType } from 'sanity'

/**
 * resource — Sanity document type
 *
 * Represents a downloadable PDF resource (e.g. checklists, playbooks, guides).
 * The web app shows a thumbnail image and gates the download behind a simple
 * name + email + consent form (no account required).
 *
 * Fields mirror resources.config.ts fallback data exactly.
 */
export const resource = defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',

  groups: [
    { name: 'content',  title: '1 · Content' },
    { name: 'asset',    title: '2 · PDF & Thumbnail' },
    { name: 'meta',     title: '3 · Display & SEO' },
  ],

  fields: [

    // ─── 1. CONTENT ───────────────────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Resource Title',
      type: 'string',
      group: 'content',
      description: 'e.g. "Power BI Health Checklist" — shown on the card and modal.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'One or two sentences shown on the resource card.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category / Tag',
      type: 'string',
      group: 'content',
      description: 'Used for filtering. e.g. "Checklist", "Playbook", "Guide", "Template".',
      options: {
        list: [
          { title: 'Checklist',  value: 'Checklist' },
          { title: 'Playbook',   value: 'Playbook' },
          { title: 'Guide',      value: 'Guide' },
          { title: 'Template',   value: 'Template' },
          { title: 'Whitepaper', value: 'Whitepaper' },
        ],
      },
    }),

    defineField({
      name: 'pageCount',
      title: 'Page Count',
      type: 'number',
      group: 'content',
      description: 'Shown on the card as a badge (e.g. "12 pages"). Leave blank to hide.',
    }),

    defineField({
      name: 'isFeatured',
      title: 'Featured Resource',
      type: 'boolean',
      group: 'content',
      description: 'Featured resources appear first and with a highlighted badge.',
      initialValue: false,
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'content',
      description: 'Lower numbers appear first (ascending sort).',
      initialValue: 99,
    }),

    // ─── 2. PDF & THUMBNAIL ───────────────────────────────────────────────────
    defineField({
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      group: 'asset',
      description: 'The downloadable PDF. Uploaded to Sanity CDN.',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      group: 'asset',
      options: { hotspot: true },
      description:
        'Cover image shown on the resource card. If left blank, the web app uses a fallback image from resources.config.ts.',
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
      ],
    }),

    // ─── 3. DISPLAY & SEO ─────────────────────────────────────────────────────
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'meta',
      description: 'Auto-generated from the title. Used for analytics and deep-linking.',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      group: 'meta',
      description: 'Displayed on the card as the publish date.',
      initialValue: () => new Date().toISOString(),
    }),

  ],

  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Newest First',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'thumbnail',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title ?? 'Untitled Resource',
        subtitle: subtitle ?? 'No category',
        media,
      }
    },
  },
})
