import { Link } from 'phosphor-react'

export default {
  name: 'linktree',
  title: 'Linktree page',
  type: 'document',
  icon: Link,
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
    {
      name: 'links',
      title: 'Links',
      group: 'content',
      type: 'array',
      of: [
        {
          name: 'item',
          title: 'Linktree Item',
          type: 'object',
          fields: [
            {
              name: 'link',
              title: 'Link',
              type: 'link',
            },
            {
              type: 'media',
              name: 'media',
              title: 'Media',
            },
          ],
          preview: {
            select: {
              media: 'media',
              label: 'link.label',
            },
            prepare(selection) {
              const { label, media } = selection
              return {
                title: label ?? 'Link',
                media: media.assetType === 'image' ? media.image : undefined,
              }
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
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
        title: `Linktree page`,
      }
    },
  },
}
