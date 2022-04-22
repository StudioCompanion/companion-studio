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
  ],
  fields: [
    slug(),
    {
      group: 'content',
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          name: 'textSection',
          title: 'Text Section',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text Block',
              type: 'richText',
            },
          ],
          preview: {
            prepare() {
              return {
                title: `Text Section`,
              }
            },
          },
        },
        {
          name: 'mediaSection',
          title: 'Media Section',
          type: 'media',
        },
      ],
    },
    {
      name: 'meta',
      title: 'Page meta',
      type: 'meta',
      group: 'meta',
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
