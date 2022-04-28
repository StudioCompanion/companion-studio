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
      validation: (rule) =>
        rule.custom((val, ctx) => {
          const { document } = ctx

          if (!document.meta.seo.seo_title && !val) {
            return `You haven't set an SEO title, so you need to set card's title`
          }

          return true
        }),
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
      validation: (rule) =>
        rule.custom((val, ctx) => {
          const { document } = ctx

          if (!document.meta.seo.image && !val.image) {
            return `You haven't set an SEO image, so you need to set the card's image`
          }

          return true
        }),
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
      validation: (rule) => rule.required(),
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Grey', value: 'grey' },
          { title: 'Dark', value: 'dark' },
        ],
      },
      initialValue: 'dark',
      validation: (rule) => rule.required(),
    },
  ],
}
