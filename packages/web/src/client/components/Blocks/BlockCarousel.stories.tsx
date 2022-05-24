import { Carousel } from './BlockCarousel'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ComponentProps } from 'react'
import { CarouselLayouts } from 'styles/constants'

export default {
  title: 'Blocks/Media',
  component: Carousel,
} as ComponentMeta<typeof Carousel>

// export const CarouselNoCaptions: ComponentStory<typeof Carousel> = () => (
//   <Carousel {...fixtures.carouselNoCaptions} />
// )

// export const CarouselWithCaptions: ComponentStory<typeof Carousel> = () => (
//   <Carousel {...fixtures.carouselWithCaptions} />
// )

// export const SingleVideo: ComponentStory<typeof Carousel> = () => (
//   <Carousel {...fixtures.singleVideo} />
// )

// export const SingleItemWithCaption: ComponentStory<typeof Carousel> = () => (
//   <Carousel {...fixtures.singleItemWithCaptions} />
// )

// export const WithMobileAsset: ComponentStory<typeof Carousel> = () => (
//   <Carousel {...fixtures.withMobileAsset} />
// )

// export const WithBackgroundImage: ComponentStory<typeof Carousel> = () => (
//   <Carousel {...fixtures.withBackgroundImage} />
// )

export const IsHero: ComponentStory<typeof Carousel> = () => (
  <Carousel {...fixtures.isHero} />
)

const fixtures: Record<string, ComponentProps<typeof Carousel>> = {
  //   carouselNoCaptions: { _type: 'blockMedia' as const, items: [] },
  //   carouselWithCaptions: { _type: 'blockMedia' as const, items: [] },
  //   singleVideo: {},
  //   singleItemWithCaptions: { _type: 'blockMedia' as const, items: [] },
  //   withMobileAsset: { _type: 'blockMedia' as const, items: [] },
  //   withBackgroundImage: { _type: 'blockMedia' as const, items: [] },
  isHero: {
    _key: '2e51a197e1c1',
    _type: 'blockMedia',
    backgroundColor: '#E5E5EB',
    backgroundImage: undefined,
    isHero: true,
    items: [
      {
        _key: 'b916c641a044',
        caption: undefined,
        desktop: {
          _type: 'video',
          asset: {
            playbackId: 'Md83lH021fZs02J33Zx2qB00fO6l6bMScC02PjVyJKJhmP00',
            thumbTime: null,
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: '16:9',
            height: 1080,
            width: 1920,
          },
        },
        hasMobile: false,
        mobile: {
          _type: 'image',
        },
      },
    ],
    layout: 'full' as CarouselLayouts.FULL,
  },
}
