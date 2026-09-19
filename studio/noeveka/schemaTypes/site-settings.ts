import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // ─── Navbar ─────────────────────────────────────────────────────────────
    defineField({
      name: 'logoIcon',
      title: 'Logo Icon Image',
      type: 'image',
      description: 'Small icon/symbol logo (e.g. the Noeveka icon from Cloudinary)',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'logoText',
      title: 'Logo Text Image',
      type: 'image',
      description: 'Wordmark / text logo (e.g. noeveka_black_text_logo.png)',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'navItems',
      title: 'Nav Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'URL / Path', type: 'string' }),
          ],
          preview: { select: { title: 'label', subtitle: 'href' } },
        },
      ],
    }),
    defineField({
      name: 'navCtaText',
      title: 'Navbar CTA Button Text',
      type: 'string',
      initialValue: 'Start a conversation',
    }),
    defineField({
      name: 'navCtaLink',
      title: 'Navbar CTA Button Link',
      type: 'string',
      initialValue: '/#contact',
    }),

    // ─── Footer ─────────────────────────────────────────────────────────────
    defineField({
      name: 'footerTagline',
      title: 'Footer Tagline',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: ['LinkedIn', 'X / Twitter', 'YouTube', 'Instagram', 'Facebook', 'GitHub'],
              },
            }),
            defineField({ name: 'href', title: 'URL', type: 'url' }),
          ],
          preview: { select: { title: 'platform', subtitle: 'href' } },
        },
      ],
    }),

    // Company column
    defineField({
      name: 'companyColumnHeading',
      title: 'Footer — Company Column Heading',
      type: 'string',
      initialValue: 'Company',
    }),
    defineField({
      name: 'companyLinks',
      title: 'Footer — Company Column Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'URL / Path', type: 'string' }),
          ],
          preview: { select: { title: 'label', subtitle: 'href' } },
        },
      ],
    }),

    // Services column
    defineField({
      name: 'servicesColumnHeading',
      title: 'Footer — Services Column Heading',
      type: 'string',
      initialValue: 'Services',
    }),
    defineField({
      name: 'servicesLinks',
      title: 'Footer — Services Column Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'URL / Path', type: 'string' }),
          ],
          preview: { select: { title: 'label', subtitle: 'href' } },
        },
      ],
    }),

    // Contact column
    defineField({
      name: 'contactHeading',
      title: 'Footer — Contact Column Heading',
      type: 'string',
      initialValue: 'Contact',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'hello@noeveka.com',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'contactAddress',
      title: 'Contact Address',
      type: 'text',
      rows: 2,
    }),

    // Newsletter strip
    defineField({
      name: 'newsletterHeading',
      title: 'Newsletter Strip Heading',
      type: 'string',
      initialValue: 'Sign up to our newsletter',
    }),
    defineField({
      name: 'newsletterSubtext',
      title: 'Newsletter Strip Subtext',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'newsletterPlaceholder',
      title: 'Newsletter Input Placeholder',
      type: 'string',
      initialValue: 'Enter Your E-Mail',
    }),

    // Bottom bar
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      description: 'Use {year} as a placeholder for the current year.',
      type: 'string',
      initialValue: '© {year} Noeveka Data & AI Solutions. All rights reserved.',
    }),
    defineField({
      name: 'footerNavLinks',
      title: 'Footer Bottom Nav Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'URL / Path', type: 'string' }),
          ],
          preview: { select: { title: 'label', subtitle: 'href' } },
        },
      ],
    }),
  ],

  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
