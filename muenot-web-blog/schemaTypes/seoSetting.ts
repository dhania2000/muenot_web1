import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seoSetting',
  title: 'SEO Setting',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Label',
      description: 'Friendly name shown in the admin dashboard (e.g. "Home", "Translation Services").',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'path',
      title: 'Page Path',
      description: 'The route this SEO applies to, starting with "/" (e.g. "/", "/services/translation").',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule) => Rule.max(70).warning('Keep titles under 70 characters for best results.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule) =>
        Rule.max(180).warning('Keep descriptions under 180 characters for best results.'),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from search engines (noindex)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'updatedAt',
      title: 'Last Updated',
      type: 'datetime',
      readOnly: true,
    }),
  ],

  preview: {
    select: {
      title: 'pageTitle',
      subtitle: 'path',
    },
  },
})
