import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ValuesGrid } from './GridValues'

export default {
  title: 'Grids/Values',
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
          _ref: 'image-608a7825cecedc10d89f6ba98c479cbdf26aba63-4000x928-png',
          _type: 'reference' as const,
        },
        dimensions: {
          _type: 'sanity.imageDimensions' as const,
          aspectRatio: 4.310344827586207,
          height: 928,
          width: 4000,
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
              _type: 'span',
              marks: ['strong'],
              text: 'Be open to learning.',
            },
          ],
          markDefs: [],
          style: 'normal',
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
          style: 'normal',
        },
      ],
    },
    {
      _key: '4af2d7a2e53e',
      media: {
        _type: 'image' as const,
        altText: null,
        asset: {
          _ref: 'image-e41625d6ecbf8e7f3b7eaab977aa8b69b0f7ffba-4000x928-png',
          _type: 'reference' as const,
        },
        dimensions: {
          _type: 'sanity.imageDimensions' as const,
          aspectRatio: 4.310344827586207,
          height: 928,
          width: 4000,
        },
        mimeType: 'image/png',
      },
      text: [
        {
          _key: '43c608b5b119',
          _type: 'block' as const,
          children: [
            {
              _key: '5208ebf8f3d20',
              _type: 'span',
              marks: ['strong'],
              text: 'Be yourself.\n',
            },
            {
              _key: '1f69f66b0648',
              _type: 'span',
              marks: [],
              text: 'No fronts or bluffs are required. We want you to be comfortable being yourself and sharing that. Being keen to learn things outside of your own groove is important.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
    },
    {
      _key: 'd6d35325a9c1',
      media: {
        _type: 'image' as const,
        altText: null,
        asset: {
          _ref: 'image-ea06c7d551fd7fedaa9ce1f442fb299b63851686-4000x928-png',
          _type: 'reference' as const,
        },
        dimensions: {
          _type: 'sanity.imageDimensions' as const,
          aspectRatio: 4.310344827586207,
          height: 928,
          width: 4000,
        },
        mimeType: 'image/png',
      },
      text: [
        {
          _key: 'ef132b6eeecd',
          _type: 'block' as const,
          children: [
            {
              _key: 'd90e1f9951fa0',
              _type: 'span',
              marks: ['strong'],
              text: 'Say it how it is.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '1d4360eb7f49',
          _type: 'block' as const,
          children: [
            {
              _key: '8f3b3f8b6fd10',
              _type: 'span',
              marks: [],
              text: 'You say it how it is. You say “I don’t know but I can find out” no blag, fluff or fumbles you admit your mistakes and you probably don’t have time for gossip.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
    },
    {
      _key: '3f7927c96d27',
      media: {
        _type: 'image' as const,
        altText: null,
        asset: {
          _ref: 'image-5537793283cefe9b68f8bf04593211c2a50c5e6d-4000x928-png',
          _type: 'reference' as const,
        },
        dimensions: {
          _type: 'sanity.imageDimensions' as const,
          aspectRatio: 4.310344827586207,
          height: 928,
          width: 4000,
        },
        mimeType: 'image/png',
      },
      text: [
        {
          _key: '6e125ab3fd0d',
          _type: 'block' as const,
          children: [
            {
              _key: 'd598b81fe83c0',
              _type: 'span',
              marks: ['strong'],
              text: 'Play as part of the team.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: 'c85062be8956',
          _type: 'block' as const,
          children: [
            {
              _key: '5bbb0df86cce0',
              _type: 'span',
              marks: [],
              text: 'You like being part of a team, on for the long game not the quick win. Everyone plays to the end. “If you want to go quickly go alone, if you want to go far go together”.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
    },
    {
      _key: 'af2a9159062c',
      media: {
        _type: 'image' as const,
        altText: null,
        asset: {
          _ref: 'image-96a78efff3b092e3890350e5f18c2a99583b256d-4000x928-png',
          _type: 'reference' as const,
        },
        dimensions: {
          _type: 'sanity.imageDimensions' as const,
          aspectRatio: 4.310344827586207,
          height: 928,
          width: 4000,
        },
        mimeType: 'image/png',
      },
      text: [
        {
          _key: '9e3b524d5e7c',
          _type: 'block' as const,
          children: [
            {
              _key: '92ab48ff3b930',
              _type: 'span',
              marks: ['strong'],
              text: 'Stay honest.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '3719fee6aa28',
          _type: 'block' as const,
          children: [
            {
              _key: '179a1a571c910',
              _type: 'span',
              marks: [],
              text: 'You turn up and turn out ready for whatever might face you every time.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
    },
    {
      _key: '31eaa638f4f8',
      media: {
        _type: 'image' as const,
        altText: null,
        asset: {
          _ref: 'image-b2b2f13bc0e77fdfb53946216b45c8820bb1ab25-4000x928-png',
          _type: 'reference' as const,
        },
        dimensions: {
          _type: 'sanity.imageDimensions' as const,
          aspectRatio: 4.310344827586207,
          height: 928,
          width: 4000,
        },
        mimeType: 'image/png',
      },
      text: [
        {
          _key: 'ec796f7b47a0',
          _type: 'block' as const,
          children: [
            {
              _key: 'b007f94373980',
              _type: 'span',
              marks: ['strong'],
              text: 'Make a difference.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '34aeea7bb5f8',
          _type: 'block' as const,
          children: [
            {
              _key: '3df5ef75b48e0',
              _type: 'span',
              marks: [],
              text: 'You know you make a difference to those around you and that rubs off. You know that bit by bit we all can make change happen, care more for the world and those we share it with.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
    },
  ],
}
