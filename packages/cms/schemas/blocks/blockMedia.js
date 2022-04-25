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
    {
      name: 'isHero',
      title: 'Is Hero?',
      type: 'boolean',
      initialValue: false,
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
      initialValue: '#E5E5EB',
    },
    {
      name: 'items',
      title: 'Media Items',
      type: 'array',
      of: [
        {
          name: 'item',
          type: 'object',
          title: 'Media Item',
          fields: [
            {
              name: 'hasMobile',
              title: 'Has Mobile Asset?',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'mobile',
              title: 'Mobile Asset',
              type: 'media',
              hidden: ({ parent }) => !parent?.hasMobile,
            },
            {
              name: 'desktop',
              title: 'Desktop Asset',
              type: 'media',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
          preview: {
            select: {
              caption: 'caption',
              desktop: 'desktop',
            },
            prepare: (selection) => ({
              title: selection.desktop.assetType,
              subtitle: selection.caption,
            }),
          },
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
