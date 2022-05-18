import { ValuesGrid } from './GridValues'
import { ComponentMeta, ComponentStory } from '@storybook/react'

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
      qualities: [
        {
          _key: '01c6627a3df3',
          _type: 'quality' as const,
          media: {
            _type: 'media' as const,
            assetType: 'image',
            image: {
              _type: 'image' as const,
              asset: {
                _ref: 'image-4b8383f6044b18335dfc1e780c1ac156662fbc86-843x250-png',
                _type: 'reference' as const,
              },
            },
          },
          text: [
            {
              _key: 'b401bb8af481',
              _type: 'block' as const,
              children: [
                {
                  _key: '4f3bb64973540',
                  _type: 'span',
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
                  _type: 'span',
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
    },
  ],
}
