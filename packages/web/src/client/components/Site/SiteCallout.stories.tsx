import { Callout } from './SiteCallout'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StoryFixtures } from '@types'

export default {
  title: 'Site/Callout',
  component: Callout,
} as ComponentMeta<typeof Callout>

export const Default: ComponentStory<typeof Callout> = () => (
  <Callout {...fixtures.default} />
)

export const NoLink: ComponentStory<typeof Callout> = () => (
  <Callout {...fixtures.noLink} />
)

const fixtures: StoryFixtures<typeof Callout> = {
  default: {
    link: {
      isExternal: true,
      label: 'Message us',
      url: 'mailto:hello@companion.studio',
    },
    mediaItems: [
      {
        _type: 'image',
        altText: null,
        asset: {
          _ref: 'image-95f669801220901871774601ca39ee8d442b25e1-2011x1730-png',
          _type: 'reference',
        },
        dimensions: {
          _type: 'sanity.imageDimensions',
          aspectRatio: 1.1624277456647398,
          height: 1730,
          width: 2011,
        },
        mimeType: 'image/png',
      },
    ],
    text: 'Have a project you’d like to work on with us? Interested in joining the team? Need a shoulder to cry on?',
  },
  noLink: {
    link: undefined,
    mediaItems: [
      {
        _type: 'image',
        altText: null,
        asset: {
          _ref: 'image-95f669801220901871774601ca39ee8d442b25e1-2011x1730-png',
          _type: 'reference',
        },
        dimensions: {
          _type: 'sanity.imageDimensions',
          aspectRatio: 1.1624277456647398,
          height: 1730,
          width: 2011,
        },
        mimeType: 'image/png',
      },
    ],
    text: 'Have a project you’d like to work on with us? Interested in joining the team? Need a shoulder to cry on?',
  },
}
