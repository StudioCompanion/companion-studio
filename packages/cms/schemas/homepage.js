export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      name: 'blocks',
      title: 'Blocks',
      description: 'Homepage content',
      type: 'array',
      of: [{ type: 'homepageBlock' }],
    },
    {
      name: 'seoDescription',
      title: 'Description',
      type: 'text',
      fieldset: 'seo',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Homepage',
      }
    },
  },
}
