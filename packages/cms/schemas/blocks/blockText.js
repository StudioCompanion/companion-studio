export default {
  name: 'blockText',
  title: 'Text Block',
  type: 'object',
  fields: [
    {
      name: 'richText',
      title: 'Text',
      type: 'richText',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Text Block`,
      }
    },
  },
}
