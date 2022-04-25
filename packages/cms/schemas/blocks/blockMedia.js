export default {
  name: 'blockMedia',
  title: 'Media Block',
  type: 'object',
  fields: [
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          { title: 'Full', value: 'full' },
          { title: 'Half', value: 'half' },
          { title: 'Two Thirds', value: '2/3' },
        ],
      },
      initialValue: 'full',
    },
    /**
     * TODO: make this a custom color input
     * (not the on already published as that's
     * a year old)
     */
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Media Items',
      type: 'array',
      of: [
        {
          type: 'media',
        },
      ],
      validation: (rule) => rule.required().min(1),
    },
  ],
  preview: {
    select: {
      layout: 'layout',
      items: 'items',
    },
    prepare(selection) {
      const { items = [], layout } = selection
      return {
        subtitle: `Media block`,
        title: `${items.length} slides, ${layout} layout`,
      }
    },
  },
}
