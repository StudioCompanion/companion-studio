import { CardHome } from './CardHome'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '@types'
import { ThemeTypes } from 'styles/constants'

export default {
  title: 'Cards/CardHome',
  component: CardHome,
} as ComponentMeta<typeof CardHome>

export const CardHomeWithContent: ComponentStory<typeof CardHome> = () => (
  <CardHome {...fixtures.cardHomeWithContent} />
)

const fixtures: StoryFixtures<typeof CardHome> = {
  cardHomeWithContent: {
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
}
