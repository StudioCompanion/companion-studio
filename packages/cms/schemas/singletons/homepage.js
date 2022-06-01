import { House } from 'phosphor-react'

import { REFERENCED_DOCUMENTS } from '../../constants'

import { omit } from '../../helpers/objects'

import link from '../objects/link'
import pageCard from '../objects/pageCard'

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
      validation: (rule) => rule.required(),
    },
    {
      name: 'cards',
      title: 'Cards',
      group: 'content',
      type: 'array',
      of: [
        {
          type: 'reference',
          title: 'Internal Card',
          to: REFERENCED_DOCUMENTS,
        },
        {
          name: 'externalCard',
          title: 'External Card',
          type: 'object',
          fields: [
            omit(
              link.fields.find((field) => field.name === 'linkExternal'),
              'hidden'
            ),
            ...pageCard.fields,
          ],
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
        title: `Home page`,
      }
    },
  },
}
