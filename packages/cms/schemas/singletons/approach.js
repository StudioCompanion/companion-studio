import { Handshake } from 'phosphor-react'

import { slug } from '../fields/slug'

export default {
  name: 'approachpage',
  title: 'Approach page',
  type: 'document',
  icon: Handshake,
  groups: [
    {
      name: 'content',
      title: 'Page Content',
    },
    {
      name: 'meta',
      title: 'Page meta',
    },
    {
      name: 'card',
      title: 'Page Card',
    },
  ],
  fields: [
    slug(),
    {
      group: 'content',
      name: 'sections',
      title: 'Sections',
      type: 'array',
      validation: (rule) => rule.required().min(1),
      of: [
        {
          name: 'section',
          title: 'Section',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text Block',
              type: 'richText',
              validation: (rule) => rule.required(),
            },
            {
              name: 'media',
              title: 'Media Section',
              type: 'media',
            },
          ],
          preview: {
            prepare() {
              return {
                title: 'Section',
              }
            },
          },
        },
      ],
    },
    {
      name: 'meta',
      title: 'Page meta',
      type: 'meta',
      group: 'meta',
    },
    {
      name: 'card',
      title: 'Page Card',
      type: 'pageCard',
      group: 'card',
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Approach page`,
      }
    },
  },
}
