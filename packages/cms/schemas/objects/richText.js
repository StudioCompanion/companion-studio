import { Link } from 'phosphor-react'

import { REFERENCED_DOCUMENTS } from '../../constants'

export const basicRichText = {
  title: 'Rich text',
  name: 'richText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            blockEditor: {
              icon: Link,
            },
            fields: [
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
          },
        ],
      },
    },
  ],
}

/**
 * TODO: add in the squiggles decorator so when
 * someone underlines it, it appends a squiggle
 * in the editor
 */
export const squiggleRichText = {
  title: 'Squiggle Rich text',
  name: 'squiggleRichText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [
          {
            title: 'Underline',
            value: 'underline',
          },
        ],
        annotations: [],
      },
    },
  ],
}
