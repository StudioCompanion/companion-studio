export default {
  name: 'settings',
  title: 'Global Site Settings',
  type: 'document',
  groups: [
    {
      name: 'meta',
      title: 'Default meta',
    },
    {
      name: 'nav',
      title: 'Navigation',
    },
    {
      name: 'callout',
      title: 'Callout',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
    {
      name: 'redirects',
      title: 'Redirects',
    },
  ],
  fields: [
    {
      name: 'meta',
      title: 'Default meta',
      type: 'meta',
      group: 'meta',
    },
    {
      group: 'nav',
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      validation: (rule) => rule.required().min(1),
      of: [
        {
          name: 'link',
          title: 'Link',
          type: 'link',
        },
      ],
    },
    {
      group: 'callout',
      name: 'callout',
      title: 'Callout',
      type: 'object',
      fields: [
        {
          name: 'text',
          type: 'text',
          title: 'Text',
          validation: (rule) => rule.required(),
        },
        {
          name: 'link',
          title: 'Link',
          type: 'link',
          description: 'When clicked the callout links to...?',
        },
        {
          name: 'media',
          title: 'Media',
          type: 'media',
        },
      ],
    },
    {
      group: 'footer',
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        {
          name: 'links',
          title: 'Links',
          type: 'array',
          validation: (rule) => rule.required().min(1),
          of: [
            {
              name: 'link',
              title: 'Link',
              type: 'link',
            },
          ],
        },
      ],
    },
    {
      name: 'redirects',
      title: 'Redirects',
      group: 'redirects',
      type: 'redirects',
    },
  ],
}
