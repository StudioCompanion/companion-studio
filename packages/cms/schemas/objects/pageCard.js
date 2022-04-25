export default {
  name: 'pageCard',
  title: 'Page Card',
  type: 'object',
  fields: [
    {
      name: 'title',
      description: 'If omitted, the SEO title will be used',
      title: 'Card Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'media',
      description: 'If omitted, the SEO media will be used',
      title: 'Media',
      type: 'media',
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          { title: 'Case Study', value: 'case' },
          { title: 'Studio', value: 'studio' },
        ],
      },
      initialValue: 'case',
    },
  ],
}
