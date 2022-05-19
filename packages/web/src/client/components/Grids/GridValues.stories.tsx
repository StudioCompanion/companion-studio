import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ValuesGrid } from './GridValues'

export default {
  title: 'Values Grid',
  component: ValuesGrid,
} as ComponentMeta<typeof ValuesGrid>

export const NoValues: ComponentStory<typeof ValuesGrid> = () => (
  <ValuesGrid qualities={fixtures.noValues} />
)

export const WithValues: ComponentStory<typeof ValuesGrid> = () => (
  <ValuesGrid qualities={fixtures.withValues} />
)

const fixtures = {
  noValues: undefined,
  withValues: [
    {
      _key: '01c6627a3df3',
      media: {
        _type: 'image' as const,
        altText: null,
        asset: {
          _ref: 'image-4b8383f6044b18335dfc1e780c1ac156662fbc86-843x250-png',
          _type: 'reference' as const,
        },
        dimensions: {
          _type: 'sanity.imageDimensions' as const,
          aspectRatio: 3.372,
          height: 250,
          width: 843,
        },
        mimeType: 'image/png',
      },
      text: [
        {
          _key: 'b401bb8af481',
          _type: 'block' as const,
          children: [
            {
              _key: '4f3bb64973540',
              _type: 'span' as const,
              marks: ['strong'],
              text: 'Be open to learning.',
            },
          ],
          markDefs: [],
          style: 'S',
        },
        {
          _key: '80c3ff726aa4',
          _type: 'block' as const,
          children: [
            {
              _key: '10fd4c5b8c7f0',
              _type: 'span' as const,
              marks: [],
              text: 'You know you don’t know everything and like to seek others viewpoints. You’re ready to be open minded, be approachable and stay learning.',
            },
          ],
          markDefs: [],
          style: 'S',
        },
      ],
    },
  ],
}
