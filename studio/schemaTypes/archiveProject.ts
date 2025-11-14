import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'archiveProject',
  title: 'Archive Project',
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
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'projectType',
      type: 'array',
      of: [{type: 'string'}],
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
      name: 'caption',
      type: 'string',
    }),
    defineField({
      name: 'media',
      title: 'Image / Video',
      type: 'object',
      fields: [
        defineField({
          name: 'mediaType',
          title: 'Media Type',
          type: 'string',
          options: {
            list: [
              {title: 'Image', value: 'image'},
              {title: 'Video', value: 'video'},
            ],
            layout: 'radio',
          },
          initialValue: 'image',
        }),
        defineField({
          name: 'image',
          type: 'image',
          options: {hotspot: true},
          hidden: ({parent}) => parent?.mediaType !== 'image',
        }),
        defineField({
          name: 'video',
          type: 'mux.video',
          hidden: ({parent}) => parent?.mediaType !== 'video',
        }),
        defineField({
          name: 'thumbnail',
          title: 'Thumbnail',
          type: 'image',
          options: {hotspot: true},
        }),
      ],
    }),
    defineField({
      name: 'layout',
      type: 'string',
      options: {
        list: [
          {title: 'One Third', value: 'oneThird'},
          {title: 'Two Thirds', value: 'twoThirds'},
          {title: 'Full Width', value: 'full'},
        ],
        layout: 'radio',
      },
      initialValue: 'oneThird',
    }),
    defineField({
      name: 'rating',
      type: 'number',
      description: 'Rate 0-100',
      validation: (rule) =>
        rule.min(0).error('Value must be >= 0').max(100).error('Value must be <=100'),
    }),
  ],
})
