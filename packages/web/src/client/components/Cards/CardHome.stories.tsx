import { CardHome } from './CardHome'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '@types'

export default {
  title: 'Blocks/CardHome',
  component: CardHome,
} as ComponentMeta<typeof CardHome>

export const CardHomeLiveProject: ComponentStory<typeof CardHome> = () => (
  <CardHome {...fixtures.cardHomeLiveProject} />
)

export const CardHomeComingSoon: ComponentStory<typeof CardHome> = () => (
  <CardHome {...fixtures.cardHomeComingSoon} />
)

const fixtures: StoryFixtures<typeof CardHome> = {
  cardHomeLiveProject: {
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
    theme: undefined,
    title: 'Limna',
    type: 'project',
  },
  cardHomeComingSoon: {
    _type: 'pageCard',
    backgroundColor: '#1D4836',
    cardButtonLabel: 'Coming 2022',
    media: {
      _type: 'image',
      altText: null,
      asset: {
        _ref: 'image-de51e28f2403e7abfae6a048b10ff360d57b1c43-1306x1396-png',
        _type: 'reference',
      },
      dimensions: {
        _type: 'sanity.imageDimensions',
        aspectRatio: 0.9355300859598854,
        height: 1396,
        width: 1306,
      },
      mimeType: 'image/png',
    },
    meta: {
      description: undefined,
      focusWords: undefined,
      image: {
        _type: 'image',
        altText: null,
        asset: {
          _ref: 'image-de51e28f2403e7abfae6a048b10ff360d57b1c43-1306x1396-png',
          _type: 'reference',
        },
        dimensions: {
          _type: 'sanity.imageDimensions',
          aspectRatio: 0.9355300859598854,
          height: 1396,
          width: 1306,
        },
        mimeType: 'image/png',
      },
      keyword: undefined,
      title: undefined,
    },
    slug: 'pairup',
    status: 'comingSoon',
    subtitle: 'Making creative advice accessible to all.',
    theme: undefined,
    title: 'Pair Up',
    type: 'project',
  },
}
