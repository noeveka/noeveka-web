import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Page Slug',
      type: 'slug',
      description: 'Unique URL slug for this service detail page (e.g. "enterprise-data-ai-architecture")',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Graphic / Image (Desktop / Large Screens)',
      type: 'image',
      description: 'Hero background / diagram graphic on desktop and large screens',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          initialValue: 'Service Hero Graphic - Desktop',
        }),
      ],
    }),
    defineField({
      name: 'heroMobileImage',
      title: 'Hero Graphic / Image (Mobile / Small Screens)',
      type: 'image',
      description: 'Vertical / mobile stack graphic displayed on small screens',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          initialValue: 'Service Hero Graphic - Mobile',
        }),
      ],
    }),
    defineField({
      name: 'detailPage',
      title: 'Linked Service Detail Page',
      type: 'reference',
      to: [{ type: 'serviceDetailPage' }],
      description: 'Direct reference to the full dedicated Service Detail Page document for managing in-depth content',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g. "layers", "bot", "shield-check", "trending-up", "bar-chart-3")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'variant',
      title: 'Card Variant',
      type: 'string',
      description: 'Controls card background colour / style',
      options: {
        list: [
          { title: 'White', value: 'white' },
          { title: 'Orange (highlight)', value: 'orange' },
          { title: 'Black', value: 'black' },
        ],
        layout: 'radio',
      },
      initialValue: 'white',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
      description: 'Card CTA button label (defaults to "Learn More")',
      initialValue: 'Learn More',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
      description: 'URL or section anchor (e.g. "/services/enterprise-data-ai-architecture")',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Card',
      type: 'boolean',
      description: 'Adds extra highlight styling / accent',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      variant: 'variant',
      media: 'heroImage',
    },
    prepare({ title, subtitle, variant, media }) {
      return {
        title,
        subtitle: subtitle ? `/services/${subtitle}` : (variant ? `variant: ${variant}` : ''),
        media,
      }
    },
  },

  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
