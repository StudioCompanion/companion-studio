import { Lock } from 'phosphor-react'

export default {
  name: 'privacy',
  title: 'Privacy',
  type: 'document',
  icon: Lock,
  fields: [
    {
      name: 'faq',
      title: 'FAQ',
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
