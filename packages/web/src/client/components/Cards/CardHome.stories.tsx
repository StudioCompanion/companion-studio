import { CardHome } from './CardHome'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '@types'

export default {
  title: 'Blocks/Media',
  component: CardHome,
} as ComponentMeta<typeof CardHome>

export const CardHomeNoContent: ComponentStory<typeof CardHome> = () => (
  <CardHome {...fixtures.cardHomeNoContent} />
)

export const CardHomeWithContent: ComponentStory<typeof CardHome> = () => (
  <CardHome {...fixtures.cardHomeWithContent} />
)

const fixtures: StoryFixtures<typeof CardHome> = {
  cardHomeNoContent: undefined,
  cardHomeWithContent: {
    _key: '8b3f3e5e-a10a-43e6-abc3-a2762b070182',
    backgroundColor: '#FAF263',
    cardButtonLabel: 'View',
    media: {
      _type: 'video',
      asset: {
        playbackId: 'wueN01kLKctaYiznfgGyUU6xX02w87MHSpTQ8TdadCceg',
        thumbTime: null,
      },
      dimensions: {
        aspectRatio: '118:135',
        height: 1080,
        width: 944,
      },
    },
    meta: {
      description:
        'Created with the worlds largest database of artists, Limna is an iOS app that is aimed at making the art market more transparent, accessible and encouraging more people to purchase art through data visualisation.',
      focusWords: null,
      image: {
        _type: 'image',
        altText: null,
        asset: {
          _ref: 'image-f2aaf36ca02aa99e8101666a48244b9b97da524b-1200x627-jpg',
          _type: 'reference',
        },
        dimensions: {
          _type: 'sanity.imageDimensions',
          aspectRatio: 1.9138755980861244,
          height: 627,
          width: 1200,
        },
        mimeType: 'image/jpeg',
      },
      keyword: null,
      title: 'Limna',
    },
    slug: 'limna',
    status: null,
    subtitle: 'The AI-powered art advisor in your pocket',
    theme: 'dark',
    title: 'Limna',
    type: 'project',
  },
}