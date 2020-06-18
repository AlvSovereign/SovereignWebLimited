export default {
  name: 'projectIntro',
  type: 'object',
  title: 'Project Intro',
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
