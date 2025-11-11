import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      thumbnail: 'thumbnail',
      rating: 'rating',
    },
    prepare({title, thumbnail, rating}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Rating: ' + rating,
        media: thumbnail,
      }
    },
  },
  groups: [
    {
      name: 'preview',
      title: 'Preview',
    },
    {
      name: 'details',
      title: 'Details',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: ['preview', 'details'],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: ['preview'],
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'array',
      of: [{type: 'string'}],
      group: ['preview', 'details'],
      options: {
        list: [
          {title: 'Web', value: 'web'},
          {title: 'Publication', value: 'publication'},
          {title: 'Identity', value: 'identity'},
          {title: 'Type Design', value: 'type design'},
        ],
        layout: 'grid',
      },
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      group: 'preview',
      options: {hotspot: true},
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Remember to italicise links',
      type: 'array',
      of: [{type: 'block'}],
      group: 'details',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      group: 'details',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true, // enables crop & focus point
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'rating',
      type: 'number',
      group: 'details',
      description: 'Rate 0-100',
      validation: (rule) =>
        rule.min(0).error('Value must be >= 0').max(100).error('Value must be <=100'),
    }),
    defineField({
      name: 'layout',
      title: 'Images Layout',
      type: 'string',
      group: 'details',
      options: {
        list: [
          {title: 'Two-Column', value: '2-col'},
          {title: 'One-Column', value: '1-col'},
        ],
        layout: 'radio',
      },
      initialValue: '2-col',
    }),
  ],
})
