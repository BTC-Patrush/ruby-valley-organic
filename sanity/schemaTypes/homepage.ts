// sanity/schemaTypes/homepage.ts
import { defineType, defineField } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'pillars', title: 'Pillars' },
    { name: 'mission', title: 'Mission' },
    { name: 'water', title: 'Water' },
    { name: 'crystal', title: 'Crystal' },
    { name: 'delivery', title: 'Delivery' },
    { name: 'yak', title: 'Yak Story' },
    { name: 'featured', title: 'Featured Products' },
    { name: 'testimonials', title: 'Testimonials' },
    { name: 'ethical', title: 'Ethical Sourcing' },
    { name: 'newsletter', title: 'Newsletter' },
  ],
  fields: [
    // === HERO ===
    
defineField({
  name: 'heroTitle',
  title: 'Hero Title',
  type: 'string',
  group: 'hero',
}),
defineField({
  name: 'heroSubtitle',
  title: 'Hero Subtitle',
  type: 'text',
  group: 'hero',
}),
defineField({
  name: 'heroImage',
  title: 'Hero Background Image',
  type: 'image',
  options: { hotspot: true },
  group: 'hero',
}),
defineField({
  name: 'heroCtaPrimary',
  title: 'Primary CTA Text',
  type: 'string',
  group: 'hero',
}),
defineField({
  name: 'heroCtaPrimaryLink',
  title: 'Primary CTA Link',
  type: 'string',
  group: 'hero',
}),
defineField({
  name: 'heroCtaSecondary',
  title: 'Secondary CTA Text',
  type: 'string',
  group: 'hero',
}),
defineField({
  name: 'heroCtaSecondaryLink',
  title: 'Secondary CTA Link',
  type: 'string',
  group: 'hero',
}),

    // Pillar
// sanity/schemaTypes/homepage.ts

defineField({
  name: 'pillars',
  title: 'Pillars',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'pillar',
      title: 'Pillar',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'icon', title: 'Icon Emoji', type: 'string' }),
        defineField({ name: 'color', title: 'Icon Color', type: 'string', options: { list: ['green', 'ruby', 'charcoal'] } }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'ctaText', title: 'CTA Text', type: 'string' }),

        // ADD THIS LINE HERE
        defineField({
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string',
          validation: (Rule) => Rule.required().error('Link is required'),
        }),
        // END
      ],
      preview: {
        select: { title: 'title' },
        prepare({ title }) {
          return { title }
        },
      },
    },
  ],
  group: 'pillars',
}),

    // === MISSION ===
    defineField({
      name: 'missionTitle',
      title: 'Mission Title',
      type: 'string',
      group: 'mission',
    }),
    defineField({
      name: 'missionBody',
      title: 'Mission Body',
      type: 'array',
      of: [{ type: 'block' }], // Portable Text
      group: 'mission',
    }),

    // === WATER ===
    defineField({
      name: 'waterTitle',
      title: 'Water Section Title',
      type: 'string',
      group: 'water',
    }),
    defineField({
      name: 'waterImage',
      title: 'Water Image',
      type: 'image',
      group: 'water',
    }),

    // === CRYSTAL ===
    defineField({
      name: 'crystalTitle',
      title: 'Crystal Section Title',
      type: 'string',
      group: 'crystal',
    }),
    defineField({
      name: 'crystalBody',
      title: 'Crystal Body',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'crystal',
    }),

    // === DELIVERY ===
    defineField({
      name: 'deliveryTitle',
      title: 'Delivery Title',
      type: 'string',
      group: 'delivery',
    }),
    defineField({
      name: 'deliverySubtitle',
      title: 'Delivery Subtitle',
      type: 'string',
      group: 'delivery',
    }),

    // === YAK STORY ===
    defineField({
      name: 'yakTitle',
      title: 'Yak Story Title',
      type: 'string',
      group: 'yak',
    }),
    defineField({
      name: 'yakBody',
      title: 'Yak Story',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'yak',
    }),
    defineField({
      name: 'yakImage',
      title: 'Yak Image',
      type: 'image',
      group: 'yak',
    }),

    // === FEATURED PRODUCTS ===
    defineField({
      name: 'featuredProducts',
      title: 'Featured Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      group: 'featured',
    }),

    // === TESTIMONIALS ===
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'quote', title: 'Quote', type: 'text' }),
            defineField({ name: 'author', title: 'Author', type: 'string' }),
            defineField({ name: 'role', title: 'Role', type: 'string' }),
          ],
        },
      ],
      group: 'testimonials',
    }),

    // === ETHICAL SOURCING ===
    defineField({
      name: 'ethicalTitle',
      title: 'Ethical Sourcing Title',
      type: 'string',
      group: 'ethical',
    }),
    defineField({
      name: 'ethicalBody',
      title: 'Ethical Body',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'ethical',
    }),

    // === NEWSLETTER ===
    defineField({
      name: 'newsletterTitle',
      title: 'Newsletter Title',
      type: 'string',
      group: 'newsletter',
    }),
    defineField({
      name: 'newsletterSubtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'newsletter',
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
})