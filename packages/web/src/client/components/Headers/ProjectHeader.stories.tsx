import { ProjecHeader } from './ProjectHeader'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '@types'

export default {
  title: 'Headers/Project',
  component: ProjecHeader,
} as ComponentMeta<typeof ProjecHeader>

export const Header: ComponentStory<typeof ProjecHeader> = () => (
  <ProjecHeader
    title={fixtures.headerContents.title}
    team={fixtures.headerContents.team}
  />
)

const fixtures: StoryFixtures<typeof ProjecHeader> = {
  headerContents: {
    team: [
      {
        _key: '303774d9-252e-4626-90a3-633bceb1f736',
        image: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-d2518df855991fe5ff6328cf034ed8714c485e5d-2997x2000-jpg',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: 1.4985,
            height: 2000,
            width: 2997,
          },
          mimeType: 'image/jpeg',
        },
        job: 'Founder & Creative Director',
        name: 'Myles Palmer',
      },
      {
        _key: 'a4943e96-6397-4dfd-8037-37ea5ae517b9',
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
        _key: 'f2702b4a-18f1-4720-9c84-d404d3547383',
        image: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-269b43c3d15454dbee464a126140dfa042ed694f-2997x2000-jpg',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: 1.4985,
            height: 2000,
            width: 2997,
          },
          mimeType: 'image/jpeg',
        },
        job: 'Fullstack Developer',
        name: 'Josh Ellis',
      },
      {
        _key: '5b60416b-76c5-4f9b-b622-f79c0f7ce0c6',
        image: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-38ef72db7a04d9e48efd327163ca906c29b76719-1440x960-jpg',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: 1.5,
            height: 960,
            width: 1440,
          },
          mimeType: 'image/jpeg',
        },
        job: 'Producer',
        name: 'Axelle Van de Goor',
      },
    ],
    title: 'Alexander',
  },
}
