export default {
  type: 'object',
  name: 'imageWithAlt',
  title: 'Image',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'altText',
      type: 'string',
      title: 'Alt Text',
      required: true,
      options: {
        isHighlighted: true,
      },
    },
  ],
};
