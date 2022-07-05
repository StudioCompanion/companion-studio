import { Carousel } from './BlockCarousel'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CarouselLayouts } from 'styles/constants'

import { StoryFixtures } from '@types'

export default {
  title: 'Blocks/Media',
  component: Carousel,
} as ComponentMeta<typeof Carousel>

export const CarouselNoCaptions: ComponentStory<typeof Carousel> = () => (
  <Carousel {...fixtures.carouselNoCaptions} />
)

export const CarouselWithCaptions: ComponentStory<typeof Carousel> = () => (
  <Carousel {...fixtures.carouselWithCaptions} />
)

export const SingleVideo: ComponentStory<typeof Carousel> = () => (
  <Carousel {...fixtures.singleVideo} />
)

export const SingleItemWithCaption: ComponentStory<typeof Carousel> = () => (
  <Carousel {...fixtures.singleItemWithCaptions} />
)

export const WithMobileAsset: ComponentStory<typeof Carousel> = () => (
  <Carousel {...fixtures.withMobileAsset} />
)

export const WithBackgroundImage: ComponentStory<typeof Carousel> = () => (
  <Carousel {...fixtures.withBackgroundImage} />
)

export const IsHero: ComponentStory<typeof Carousel> = () => (
  <Carousel {...fixtures.isHero} />
)

const fixtures: StoryFixtures<typeof Carousel> = {
  carouselNoCaptions: {
    _key: '273b721fbfeb',
    _type: 'blockMedia',
    backgroundColor: '#F2F2F5',
    backgroundImage: undefined,
    isHero: false,
    items: [
      {
        _key: '80a3c26e9e05',
        caption: undefined,
        desktop: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-27d7ab492511678b259a5cd75e50986d97abea06-4096x2306-webp',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: 1.7762359063313096,
            height: 2306,
            width: 4096,
          },
          mimeType: 'image/webp',
        },
        hasMobile: true,
        mobile: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-099fdc586614aa0940e9a217b4f4d66cc559f40b-1920x1326-webp',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: 1.4479638009049773,
            height: 1326,
            width: 1920,
          },
          mimeType: 'image/webp',
        },
      },
      {
        _key: 'aa7c913e694f',
        caption: undefined,
        desktop: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-a46fdee74717476706356ddc69ca57c46d28921a-4096x2306-webp',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: 1.7762359063313096,
            height: 2306,
            width: 4096,
          },
          mimeType: 'image/webp',
        },
        hasMobile: true,
        mobile: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-9d3c54a8e167d96ac5234d69fc23df11916a7f8e-1920x1326-webp',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: 1.4479638009049773,
            height: 1326,
            width: 1920,
          },
          mimeType: 'image/webp',
        },
      },
      {
        _key: 'ad162d278727',
        caption: undefined,
        desktop: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-2817e410c32511b47cd574279d0badd3e9055af1-4096x2306-webp',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: 1.7762359063313096,
            height: 2306,
            width: 4096,
          },
          mimeType: 'image/webp',
        },
        hasMobile: true,
        mobile: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-f2f637fbe08024ee1dead2857a349b95e333dc36-1920x1326-webp',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: 1.4479638009049773,
            height: 1326,
            width: 1920,
          },
          mimeType: 'image/webp',
        },
      },
    ],
    layout: 'full' as CarouselLayouts.FULL,
  },
  carouselWithCaptions: {
    _key: '20a24d1876ba',
    _type: 'blockMedia',
    backgroundColor: '#FFFFFF',
    backgroundImage: undefined,
    isHero: false,
    items: [
      {
        _key: 'c34f3230cbc9',
        caption: [
          {
            _key: 'd3e9cf4bed00',
            _type: 'block',
            children: [
              {
                _key: '803f4dcf29ac0',
                _type: 'span',
                marks: [],
                text: 'Images courtesy of Modem',
              },
            ],
            markDefs: [],
            style: 'S',
          },
        ],
        desktop: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-05c7f33b5719bc0ec820b0f8c4879c2899bcd424-4096x2306-webp',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: 1.7762359063313096,
            height: 2306,
            width: 4096,
          },
          mimeType: 'image/webp',
        },
        hasMobile: false,
        mobile: {
          _type: 'image',
        },
      },
      {
        _key: '89a048e73fc1',
        caption: [
          {
            _key: '6f9abac5ce5e',
            _type: 'block',
            children: [
              {
                _key: '98795ded47490',
                _type: 'span',
                marks: [],
                text: 'Images part of Stores',
              },
            ],
            markDefs: [],
            style: 'S',
          },
        ],
        desktop: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-1819685f33a268fb28c1f7bd014e3ccf6f249183-4096x2306-webp',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: 1.7762359063313096,
            height: 2306,
            width: 4096,
          },
          mimeType: 'image/webp',
        },
        hasMobile: false,
        mobile: {
          _type: 'image',
        },
      },
    ],
    layout: 'full' as CarouselLayouts.FULL,
  },
  singleVideo: {
    _key: '9aca42f66b64',
    _type: 'blockMedia',
    backgroundColor: '#FFFFFF',
    backgroundImage: undefined,
    isHero: false,
    items: [
      {
        _key: 'd6abc295f992',
        caption: undefined,
        desktop: {
          _type: 'video',
          asset: {
            playbackId: 'sU61buapfzVeHtTt3JBtCEQLc9ssmiEGgIm2YjdUKLo',
            thumbTime: null,
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: '118:135',
            height: 1080,
            width: 944,
          },
        },
        hasMobile: false,
        mobile: {
          _type: 'image',
        },
      },
    ],
    layout: 'half' as CarouselLayouts.HALF,
  },
  singleItemWithCaptions: {
    _key: '4a944f1d773b',
    _type: 'blockMedia',
    backgroundColor: '#E5E5EB',
    backgroundImage: undefined,
    isHero: false,
    items: [
      {
        _key: 'd8de5d3c857c',
        caption: [
          {
            _key: 'b286b9bc0801',
            _type: 'block',
            children: [
              {
                _key: '0f9e50e79fbf0',
                _type: 'span',
                marks: [],
                text: 'Six week discovery process',
              },
            ],
            markDefs: [],
            style: 'S',
          },
        ],
        desktop: {
          _type: 'video',
          asset: {
            playbackId: 'JbesYN1VHlyMS848q9Ky9gnlEC1GJ5HLJq9sc9GsqaU',
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
  withMobileAsset: {
    _key: 'fb20f499e8fc',
    _type: 'blockMedia',
    backgroundColor: '#E5E5EB',
    backgroundImage: undefined,
    isHero: false,
    items: [
      {
        _key: '3f7a00bfa813',
        caption: undefined,
        desktop: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-db890c40c1d3e5bfbaf862a5dd027df30f6ba0af-4096x2306-webp',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: 1.7762359063313096,
            height: 2306,
            width: 4096,
          },
          mimeType: 'image/webp',
        },
        hasMobile: true,
        mobile: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-5bbd52ef795a044c3e6333887ad2ece6c12c9c73-3497x4000-webp',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: 0.87425,
            height: 4000,
            width: 3497,
          },
          mimeType: 'image/webp',
        },
      },
    ],
    layout: 'full' as CarouselLayouts.FULL,
  },
  withBackgroundImage: {
    _key: '00408562af45',
    _type: 'blockMedia',
    backgroundColor: '#FFFFFF',
    backgroundImage: {
      _type: 'image',
      altText: null,
      asset: {
        _ref: 'image-62a057f141bae52a5c41f43f451e32ed5c3f52f4-3497x4000-webp',
        _type: 'reference',
      },
      dimensions: {
        _type: 'sanity.imageDimensions',
        aspectRatio: 0.87425,
        height: 4000,
        width: 3497,
      },
      mimeType: 'image/webp',
    },
    isHero: false,
    items: [
      {
        _key: '49202225963b',
        caption: undefined,
        desktop: {
          _type: 'image',
          altText: null,
          asset: {
            _ref: 'image-0c608264484f51eef02e0bc1dfee64afd3ca5b41-3497x4000-webp',
            _type: 'reference',
          },
          dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: 0.87425,
            height: 4000,
            width: 3497,
          },
          mimeType: 'image/webp',
        },
        hasMobile: false,
        mobile: {
          _type: 'image',
        },
      },
    ],
    layout: 'half' as CarouselLayouts.HALF,
  },
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
