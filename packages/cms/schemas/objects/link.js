import { Link } from 'phosphor-react'
import { REFERENCED_DOCUMENTS } from '../../constants'

export default {
  name: 'link',
  type: 'object',
  blockEditor: {
    icon: Link,
  },
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      description: 'If omitted, the title of the reference will be used',
      validation: (rule) =>
        rule.custom((val, ctx) => {
          const { parent } = ctx
          if (parent.linkType === 'external' && !val) {
            return 'You must type a label to use an external URL'
          } else {
            return true
          }
        }),
    },
    {
      name: 'linkType',
      title: 'Link Type',
      description: 'Are you linking to an internal or external page?',
      type: 'string',
      initialValue: 'internal',
      options: {
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'linkInternal',
      title: 'Link Internal',
      type: 'reference',
      to: REFERENCED_DOCUMENTS,
      hidden: ({ parent }) => parent?.linkType !== 'internal',
      validation: (rule) =>
        rule.custom((val, ctx) => {
          const { parent } = ctx
          if (parent.linkType === 'internal' && !val) {
            return 'You must select a reference to use an internal link'
          } else {
            return true
          }
        }),
    },
    {
      name: 'linkExternal',
      title: 'Link External',
      type: 'url',
      hidden: ({ parent }) => parent?.linkType !== 'external',
      validation: (rule) =>
        rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
    },
  ],
}
