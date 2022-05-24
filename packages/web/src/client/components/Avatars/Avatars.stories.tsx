import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StoryFixtures } from '@types'

import { Avatars } from './Avatars'

export default {
  title: 'Avatars',
  component: Avatars,
} as ComponentMeta<typeof Avatars>

export const NoMembers: ComponentStory<typeof Avatars> = () => (
  <Avatars {...fixtures.noMembers} />
)

export const WithMembers: ComponentStory<typeof Avatars> = () => (
  <Avatars {...fixtures.withMembers} />
)

const fixtures: StoryFixtures<typeof Avatars> = {
  withMembers: {
    members: [
      {
        image: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-5b9b97822d8d1ba9a6b6470596b0faa3e51c3797-1080x1080-png',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
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
        image: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-97a970363f316fe8172858eb97517862ecc35a30-1616x1077-jpg',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
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
        image: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-f9a47493d6f82d32bcc5639b4cfad4043316169b-3024x1701-jpg',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
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
  },
  noMembers: {},
}
