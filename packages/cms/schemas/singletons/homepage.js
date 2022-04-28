import { House } from 'phosphor-react'
import { REFERENCED_DOCUMENTS } from '../../constants'
import { slug } from '../fields/slug'

export default {
  name: 'homepage',
  title: 'Home page',
  type: 'document',
  icon: House,
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
      name: 'standfirst',
      type: 'richText',
      title: 'Standfirst',
      group: 'content',
    },
    {
      name: 'cards',
      title: 'Cards',
      group: 'content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: REFERENCED_DOCUMENTS,
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
        title: `Home page`,
      }
    },
  },
}
