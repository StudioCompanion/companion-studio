import { InlineLink } from './InlineLink'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '@types'

import { styled } from 'styles/stitches.config'

export default {
  title: 'Links/Inline link',
  component: InlineLink,
} as ComponentMeta<typeof InlineLink>

export const Default: ComponentStory<typeof InlineLink> = () => (
  <InlineLinkWrap {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof InlineLink> = {
  default: {
    label: `Inline link`,
    url: `https://companion.studio/`,
    isExternal: true,
  },
}

const InlineLinkWrap = styled(InlineLink, {
  fontSize: '$XL',
})
