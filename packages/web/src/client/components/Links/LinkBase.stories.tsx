import { LinkBase } from './LinkBase'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '@types'

export default {
  title: 'links/Link Base',
  component: LinkBase,
} as ComponentMeta<typeof LinkBase>

export const Default: ComponentStory<typeof LinkBase> = () => (
  <LinkBase {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof LinkBase> = {
  default: {
    label: ``,
    children: <p>Base Link</p>,
    url: `https://companion.studio/`,
    isExternal: true,
    css: {
      fontSize: '$XL',
    },
  },
}
