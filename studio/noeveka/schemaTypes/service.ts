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
      description: 'URL or section anchor (e.g. "/services#data-ai-architecture")',
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
      subtitle: 'variant',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `variant: ${subtitle}` : '',
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
