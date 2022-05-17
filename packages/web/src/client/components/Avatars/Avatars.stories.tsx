import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Avatars } from './Avatars'

export default {
  title: 'Avatars',
  component: Avatars,
} as ComponentMeta<typeof Avatars>

export const NoMembers: ComponentStory<typeof Avatars> = () => (
  <Avatars members={fixtures.noMembers} />
)

export const WithMembers: ComponentStory<typeof Avatars> = () => (
  <Avatars members={fixtures.withMemebers} />
)

const fixtures = {
  withMemebers: [
    {
      _key: '303774d9-252e-4626-90a3-633bceb1f736',
      image: {
        _type: 'image' as const,
        altText: null,
        asset: {
          _ref: 'image-5b9b97822d8d1ba9a6b6470596b0faa3e51c3797-1080x1080-png',
          _type: 'reference' as const,
        },
        dimensions: {
          _type: 'sanity.imageDimensions' as const,
          aspectRatio: 1,
          height: 1080,
          width: 1080,
        },
        mimeType: 'image/png',
      },
      job: 'Founder & Creative Director',
      name: 'Myles Palmer',
    },
    {
      _key: 'a4943e96-6397-4dfd-8037-37ea5ae517b9',
      image: {
        _type: 'image' as const,
        altText: null,
        asset: {
          _ref: 'image-97a970363f316fe8172858eb97517862ecc35a30-1616x1077-jpg',
          _type: 'reference' as const,
        },
        dimensions: {
          _type: 'sanity.imageDimensions' as const,
          aspectRatio: 1.500464252553389,
          height: 1077,
          width: 1616,
        },
        mimeType: 'image/jpeg',
      },
      job: 'Senior Digital Designer',
      name: 'Willem Purdy',
    },
    {
      _key: 'f2702b4a-18f1-4720-9c84-d404d3547383',
      image: {
        _type: 'image' as const,
        altText: null,
        asset: {
          _ref: 'image-f9a47493d6f82d32bcc5639b4cfad4043316169b-3024x1701-jpg',
          _type: 'reference' as const,
        },
        dimensions: {
          _type: 'sanity.imageDimensions' as const,
          aspectRatio: 1.7777777777777777,
          height: 1701,
          width: 3024,
        },
        mimeType: 'image/jpeg',
      },
      job: 'Fullstack Developer',
      name: 'Josh Ellis',
    },
  ],
  noMembers: undefined,
}
