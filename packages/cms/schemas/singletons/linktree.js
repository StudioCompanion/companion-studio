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
          type: 'link',
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
