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
      name: 'card',
      title: 'Page card',
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
      name: 'slideshow',
      title: 'Slideshow',
      type: 'array',
      of: [
        {
          name: 'slide',
          title: 'Slide',
          type: 'object',
          fields: [
            {
              name: 'media',
              type: 'media',
              title: 'Media',
            },
            {
              name: 'rotation',
              type: 'number',
              title: 'Rotation',
              intialValue: 0,
              validation: (rule) => rule.required().min(-360).max(360),
            },
          ],
          preview: {
            select: {
              media: 'media',
              rotation: 'rotation',
            },
            prepare(selection) {
              const { media, rotation } = selection

              return {
                title: 'Slide',
                subtitle: `with ${rotation}deg rotation`,
                media: media.assetType === 'image' ? media.image : undefined,
              }
            },
          },
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
              name: 'media',
              title: 'Media',
              type: 'media',
            },
            {
              name: 'text',
              title: 'Text',
              type: 'richText',
            },
          ],
          preview: {
            select: {
              media: 'media',
            },
            prepare({ media }) {
              return {
                title: `Quality`,
                media: media?.assetType === 'image' ? media.image : undefined,
              }
            },
          },
        },
      ],
    },
    {
      name: 'card',
      title: 'Page Card',
      type: 'pageCard',
      group: 'card',
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
        title: `Team page`,
      }
    },
  },
}
