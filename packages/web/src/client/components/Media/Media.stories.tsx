import { Media } from './Media'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '@types'

export default {
  title: 'Media/Media',
  component: Media,
} as ComponentMeta<typeof Media>

export const TeamImage: ComponentStory<typeof Media> = () => (
  <Media {...fixtures.teamImage} />
)

export const Video: ComponentStory<typeof Media> = () => (
  <Media {...fixtures.video} />
)

const fixtures: StoryFixtures<typeof Media> = {
  teamImage: {
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
  video: {
    _type: 'video',
    asset: {
      playbackId: '02g6pqOjYF01My9YZYdNHTCuLUtxDC93cGPB2II02qHsVo',
      thumbTime: null,
    },
    dimensions: {
      _type: 'sanity.imageDimensions',
      aspectRatio: '118:135',
      height: 1080,
      width: 944,
    },
  },
}
