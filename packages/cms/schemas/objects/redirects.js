export default {
  title: 'Redirects',
  name: 'redirects',
  description:
    '⚠️ NOTE – a manually re-deploy is required for any changes here to take effect.',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          title: 'Current URL',
          name: 'source',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          title: 'New URL',
          name: 'destination',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          title: 'Permanent',
          name: 'permanent',
          type: 'boolean',
          initialValue: () => true,
        },
      ],
      preview: {
        select: {
          source: 'source',
          destination: 'destination',
        },
        prepare({ source, destination }) {
          return {
            title: `${source} -> ${destination}`,
          }
        },
      },
    },
  ],
}
