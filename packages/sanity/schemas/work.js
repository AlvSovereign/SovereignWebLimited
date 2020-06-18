export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'name',
      required: true,
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      required: true,
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Url',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'subtitle',
      required: true,
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'tagline',
      required: true,
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'slug',
      required: true,
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'thumbnail',
      required: true,
      title: 'Thumbnail Image',
      type: 'imageWithAlt',
    },
    {
      name: 'mainImage',
      required: true,
      title: 'Main image',
      type: 'imageWithAlt',
    },
    {
      name: 'technology',
      required: true,
      title: 'Technologies Used',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'technology' }],
        },
      ],
    },
    {
      name: 'body',
      required: true,
      title: 'Body',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
