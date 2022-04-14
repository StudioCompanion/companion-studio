export default {
  name: 'homepageBlock',
  title: 'Homepage Block',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title = '' }) {
      return {
        title,
      }
    },
  },
}
