import React from 'react'
import { Link, Pencil } from 'phosphor-react'
import styled from 'styled-components'

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
          /**
           * TODO: investigate why this can't just
           * be type: 'link' and use the one as part
           * of the schema.
           */
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
          },
        ],
      },
    },
  ],
}

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
        decorators: [],
        annotations: [
          {
            name: 'squiggle',
            type: 'object',
            fields: [
              {
                name: 'squiggleType',
                title: 'Squiggle Type',
                type: 'string',
                options: {
                  layout: 'dropdown',
                  list: [
                    { title: 'A', value: 'a' },
                    { title: 'B', value: 'b' },
                    { title: 'C', value: 'c' },
                    { title: 'D', value: 'd' },
                    { title: 'E', value: 'e' },
                    { title: 'F', value: 'f' },
                  ],
                },
              },
            ],
            blockEditor: {
              icon: Pencil,
              render: (props) => {
                return (
                  <Squiggle type={props.squiggleType}>
                    {props.children}
                  </Squiggle>
                )
              },
            },
          },
        ],
      },
    },
  ],
}

const Squiggle = styled.span`
  position: relative;
  z-index: 0;

  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    transform: translateY(50%);
    width: 100%;
    height: 20px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: ${(props) =>
      `url(/static/squiggles/underline_${props.type}.png)`};
  }

  & * {
    border-bottom: none !important;
  }
`
