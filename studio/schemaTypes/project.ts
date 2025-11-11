import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Web', value: 'web'},
          {title: 'Publication', value: 'publication'},
          {title: 'Identity', value: 'identity'},
          {title: 'Type Design', value: 'type'},
        ],
        layout: 'grid',
      },
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
