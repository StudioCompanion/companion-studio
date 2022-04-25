export default {
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'job',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Ensure this has a transparent background',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: `${title}`,
        media,
      }
    },
  },
}
