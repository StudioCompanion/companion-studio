import { FadeIn } from './FadeIn'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '@types'

export default {
  title: 'Transitions/Fade In',
  component: FadeIn,
} as ComponentMeta<typeof FadeIn>

export const Default: ComponentStory<typeof FadeIn> = () => (
  <FadeIn {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof FadeIn> = {
  default: {
    children: (
      <div>
        <p style={{ fontSize: '28px' }}>I am fading in!!</p>
      </div>
    ),
  },
}
