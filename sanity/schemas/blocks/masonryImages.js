export default {
  name: 'masonryImages',
  type: 'object',
  title: 'Masonry Images',
  fields: [
    {
      name: 'masonryImage',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'imageWithAlt',
        },
      ],
    },
  ],
};
