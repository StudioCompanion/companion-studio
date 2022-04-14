export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{ type: 'project' }],
    },
  ],
}
