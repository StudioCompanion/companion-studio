import { Lock } from 'phosphor-react'

export default {
  name: 'privacy',
  title: 'Privacy',
  type: 'document',
  icon: Lock,
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'richText',
    },
    {
      name: 'meta',
      title: 'Page meta',
      type: 'meta',
    },
    {
      name: 'card',
      title: 'Page Card',
      type: 'pageCard',
    },
  ],
}
