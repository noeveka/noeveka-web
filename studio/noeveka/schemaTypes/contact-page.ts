import { defineField, defineType } from 'sanity'

/**
 * contactPage — Sanity document type
 *
 * Mirrors the structure of contact.config.ts exactly so that every field
 * edited in Sanity maps 1-to-1 to a CONTACT_CONFIG fallback in the web app.
 */
export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  groups: [
    { name: 'hero', title: '1 · Hero Section' },
    { name: 'form', title: '2 · Form Settings & Copy' },
    { name: 'channels', title: '3 · Direct Contact Channels' },
  ],

  fields: [
    // ─── 1. HERO ──────────────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero Header Section',
      type: 'object',
      group: 'hero',
      description: 'Heading and description at the top of the Contact page.',
      fields: [
        defineField({
          name: 'heading',
          title: 'Main Heading',
          type: 'string',
          initialValue: 'Contact our team',
        }),
        defineField({
          name: 'subtext',
          title: 'Hero Subtext / Description',
          type: 'text',
          rows: 3,
          initialValue:
            "Got any questions about our data & AI advisory or scaling your enterprise platform? We're here to help. Chat to our team and get clarity on your roadmap.",
        }),
      ],
    }),

    // ─── 2. FORM SETTINGS & SERVICES ──────────────────────────────────────────
    defineField({
      name: 'form',
      title: 'Contact Form Settings & Copy',
      type: 'object',
      group: 'form',
      description: 'Labels, placeholders, services checklist options, and success state messages.',
      fields: [
        defineField({
          name: 'firstNameLabel',
          title: 'First Name Field Label',
          type: 'string',
          initialValue: 'First name',
        }),
        defineField({
          name: 'firstNamePlaceholder',
          title: 'First Name Placeholder',
          type: 'string',
          initialValue: 'First name',
        }),
        defineField({
          name: 'lastNameLabel',
          title: 'Last Name Field Label',
          type: 'string',
          initialValue: 'Last name',
        }),
        defineField({
          name: 'lastNamePlaceholder',
          title: 'Last Name Placeholder',
          type: 'string',
          initialValue: 'Last name',
        }),
        defineField({
          name: 'emailLabel',
          title: 'Email Field Label',
          type: 'string',
          initialValue: 'Email',
        }),
        defineField({
          name: 'emailPlaceholder',
          title: 'Email Placeholder',
          type: 'string',
          initialValue: 'you@company.com',
        }),
        defineField({
          name: 'phoneLabel',
          title: 'Phone Field Label',
          type: 'string',
          initialValue: 'Phone number',
        }),
        defineField({
          name: 'phonePlaceholder',
          title: 'Phone Placeholder',
          type: 'string',
          initialValue: '+1 (555) 000-0000',
        }),
        defineField({
          name: 'messageLabel',
          title: 'Message Field Label',
          type: 'string',
          initialValue: 'Message',
        }),
        defineField({
          name: 'messagePlaceholder',
          title: 'Message Placeholder',
          type: 'string',
          initialValue: 'Leave us a message...',
        }),
        defineField({
          name: 'servicesLabel',
          title: 'Services Section Label',
          type: 'string',
          initialValue: 'Services',
        }),
        defineField({
          name: 'services',
          title: 'Services Checklist Options',
          type: 'array',
          description: 'Selectable service options in the contact form.',
          of: [
            defineField({
              name: 'serviceOption',
              title: 'Service Option',
              type: 'object',
              fields: [
                defineField({ name: 'id', title: 'Identifier', type: 'string' }),
                defineField({ name: 'label', title: 'Display Label', type: 'string' }),
              ],
            }),
          ],
          initialValue: [
            { id: 'fabric', label: 'Fabric Architecture' },
            { id: 'databricks', label: 'Databricks & Lakehouse' },
            { id: 'ai_advisory', label: 'AI & GenAI Advisory' },
            { id: 'finops', label: 'FinOps & Cost Audit' },
            { id: 'training', label: 'Corporate Training' },
            { id: 'other', label: 'Other' },
          ],
        }),
        defineField({
          name: 'submitText',
          title: 'Submit Button Text',
          type: 'string',
          initialValue: 'Send message',
        }),
        defineField({
          name: 'submittingText',
          title: 'Submitting State Text',
          type: 'string',
          initialValue: 'Sending message...',
        }),
        defineField({
          name: 'successHeading',
          title: 'Success Screen Heading',
          type: 'string',
          initialValue: "Thanks, we'll be in touch!",
        }),
        defineField({
          name: 'successSubtext',
          title: 'Success Screen Description',
          type: 'text',
          rows: 2,
          initialValue:
            "We've received your message. Ajay or our senior advisory team will get back to you within 1–2 business days.",
        }),
        defineField({
          name: 'resetButtonText',
          title: 'Reset / Send Another Button Text',
          type: 'string',
          initialValue: 'Send another message',
        }),
      ],
    }),

    // ─── 3. DIRECT CHANNELS ───────────────────────────────────────────────────
    defineField({
      name: 'channels',
      title: 'Direct Reachout Channels',
      type: 'object',
      group: 'channels',
      description: 'Right sidebar contact links (Chat with us, Call us).',
      fields: [
        defineField({
          name: 'chat',
          title: 'Chat With Us Group',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Group Title', type: 'string', initialValue: 'Chat with us' }),
            defineField({
              name: 'subtext',
              title: 'Group Subtext',
              type: 'string',
              initialValue: 'Speak to our team via live chat or direct channels.',
            }),
            defineField({
              name: 'links',
              title: 'Channel Links',
              type: 'array',
              of: [
                defineField({
                  name: 'channelLink',
                  title: 'Channel Link',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'icon',
                      title: 'Icon Name',
                      type: 'string',
                      description: 'Lucide icon name (e.g. "mail", "linkedin", "message-square", "phone")',
                      initialValue: 'mail',
                    }),
                    defineField({ name: 'label', title: 'Link Label', type: 'string' }),
                    defineField({ name: 'href', title: 'Link URL / mailto / tel', type: 'string' }),
                    defineField({ name: 'external', title: 'Open in new tab?', type: 'boolean', initialValue: false }),
                  ],
                }),
              ],
              initialValue: [
                {
                  icon: 'mail',
                  label: 'Shoot us an email',
                  href: 'mailto:hello@noeveka.com',
                  external: false,
                },
                {
                  icon: 'linkedin',
                  label: 'Message us on LinkedIn',
                  href: 'https://www.linkedin.com/company/noeveka',
                  external: true,
                },
              ],
            }),
          ],
        }),
        defineField({
          name: 'call',
          title: 'Call Us Group',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Group Title', type: 'string', initialValue: 'Call us' }),
            defineField({
              name: 'subtext',
              title: 'Group Subtext',
              type: 'string',
              initialValue: 'Call our team Mon-Fri from 8am to 5pm.',
            }),
            defineField({
              name: 'links',
              title: 'Phone Links',
              type: 'array',
              of: [
                defineField({
                  name: 'phoneLink',
                  title: 'Phone Link',
                  type: 'object',
                  fields: [
                    defineField({ name: 'icon', title: 'Icon Name', type: 'string', initialValue: 'phone' }),
                    defineField({ name: 'label', title: 'Phone Number / Display', type: 'string' }),
                    defineField({ name: 'href', title: 'tel: URL', type: 'string' }),
                  ],
                }),
              ],
              initialValue: [
                {
                  icon: 'phone',
                  label: '+91 98765 43210',
                  href: 'tel:+919876543210',
                },
              ],
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'hero.heading',
      subtitle: 'hero.subtext',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Contact Page Settings',
        subtitle: subtitle || 'Contact Page Copy and Form Settings',
      }
    },
  },
})
