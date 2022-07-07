import { CardHome } from './CardHome'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '@types'
import { ThemeTypes } from 'styles/constants'

export default {
  title: 'Cards/CardHome',
  component: CardHome,
} as ComponentMeta<typeof CardHome>

export const CardHomeWithVideo: ComponentStory<typeof CardHome> = () => (
  <CardHome {...fixtures.cardHomeWithVideo} />
)

export const CardHomeWithImage: ComponentStory<typeof CardHome> = () => (
  <CardHome {...fixtures.cardHomeWithImage} />
)

const fixtures: StoryFixtures<typeof CardHome> = {
  cardHomeWithVideo: {
    _type: 'pageCard',
    backgroundColor: '#FAF263',
    cardButtonLabel: 'View',
    media: {
      _type: 'video',
      asset: {
        playbackId: 'wueN01kLKctaYiznfgGyUU6xX02w87MHSpTQ8TdadCceg',
        thumbTime: null,
      },
      dimensions: {
        _type: 'sanity.imageDimensions',
        aspectRatio: '118:135',
        height: 1080,
        width: 944,
      },
    },
    meta: {
      description:
        'Created with the worlds largest database of artists, Limna is an iOS app that is aimed at making the art market more transparent, accessible and encouraging more people to purchase art through data visualisation.',
      focusWords: undefined,
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
      keyword: undefined,
      title: 'Limna',
    },
    slug: 'limna',
    status: undefined,
    subtitle: 'The AI-powered art advisor in your pocket',
    theme: 'dark' as ThemeTypes.DARK,
    title: 'Limna',
    type: 'project',
  },
  cardHomeWithImage: {
    _type: 'pageCard',
    backgroundColor: '#F7EEE2',
    cardButtonLabel: 'View',
    media: {
      _type: 'image',
      altText: null,
      asset: {
        _ref: 'image-a4c8833d9fe17d520cb4844b54d5d20eaf66faaa-3000x2282-png',
        _type: 'reference',
      },
      dimensions: {
        _type: 'sanity.imageDimensions',
        aspectRatio: 1.3146362839614374,
        height: 2282,
        width: 3000,
      },
      mimeType: 'image/png',
    },
    subtitle: 'Read about what makes us tick.',
    theme: 'dark' as ThemeTypes.DARK,
    title: 'Our Team',
  },
}
