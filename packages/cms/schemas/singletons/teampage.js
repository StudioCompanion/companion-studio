import { UsersThree } from 'phosphor-react'

import { slug } from '../fields/slug'

export default {
  name: 'teampage',
  title: 'Team page',
  type: 'document',
  icon: UsersThree,
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
      title: 'Page card',
    },
  ],
  fields: [
    slug(),
    {
      group: 'content',
      name: 'slideshow',
      title: 'Slideshow',
      type: 'array',
      of: [
        {
          name: 'slide',
          title: 'Slide',
          type: 'media',
        },
      ],
    },
    {
      group: 'content',
      name: 'textBlockOne',
      title: 'Text Block',
      type: 'richText',
    },
    {
      group: 'content',
      name: 'team',
      title: 'Team',
      type: 'array',
      of: [
        {
          name: 'member',
          title: 'Team Member',
          type: 'reference',
          to: [{ type: 'teamMember' }],
        },
      ],
    },
    {
      group: 'content',
      name: 'textBlockTwo',
      title: 'Text Block',
      type: 'richText',
    },
    {
      group: 'content',
      name: 'qualities',
      title: 'Qualities',
      type: 'array',
      of: [
        {
          name: 'quality',
          title: 'Quality',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              description: 'underline the text you want to be squiggled!',
              type: 'squiggleRichText',
            },
            {
              name: 'text',
              title: 'Text',
              type: 'richText',
            },
          ],
          preview: {
            prepare() {
              return {
                title: `Quality`,
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
        title: `Team page`,
      }
    },
  },
}
