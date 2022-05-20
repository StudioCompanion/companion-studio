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

          if (!document?.meta?.seo?.seo_title && !val) {
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

          if (!document?.meta?.seo?.image && !val.image && !val.video) {
            return `You haven't set an SEO image, so you need to set the card's image`
          }

          return true
        }),
    },
    {
      name: 'cardButtonLabel',
      type: 'string',
      title: 'Card Button Label',
      initialValue: 'View',
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
    {
      name: 'backgroundColor',
      title: 'Background Colour',
      description:
        'The entered value should be in any valid HEX format, e.g. #EF5632, #ef5632, #EF5632A1, #ef5632a1, #ffe, #ffea',
      type: 'string',
      initialValue: '#FFF',
      validation: (Rule) =>
        Rule.custom((input) =>
          /**
           * original regex found here:
           * https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
           */
          /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}){1,2}$/i.test(input)
            ? true
            : 'Invalid HEX code!'
        ),
    },
  ],
}
