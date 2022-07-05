import { ImageStrip } from './ImageStrip'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '@types'

export default {
  title: 'Blocks/Media',
  component: ImageStrip,
} as ComponentMeta<typeof ImageStrip>

export const ImageStripWithContent: ComponentStory<typeof ImageStrip> = () => (
  <ImageStrip {...fixtures.imageStripWithContent} />
)

const fixtures: StoryFixtures<typeof ImageStrip> = {
  imageStripWithContent: {
    slideshow: [
      {
        media: {
          _type: 'image',
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
          mimeType: 'image/jpeg',
        },
        rotation: 50,
      },
      {
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
        rotation: 100,
      },
      {
        media: {
          _type: 'image',
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
        rotation: 85,
      },
    ],
  },
}
