import { Heading } from './Heading'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '@types'

export default {
  title: 'Headers/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

export const AvatarHeading: ComponentStory<typeof Heading> = () => (
  <Heading {...fixtures.avatarHeading} />
)

export const TestimonialHeading: ComponentStory<typeof Heading> = () => (
  <Heading {...fixtures.testimonialHeading} />
)

export const CardHeading: ComponentStory<typeof Heading> = () => (
  <Heading {...fixtures.cardHeading} />
)

const fixtures: StoryFixtures<typeof Heading> = {
  avatarHeading: {
    tag: `h2`,
    fontStyle: `XS`,
    weight: `$bold`,
    children: `Axelle`,
  },
  testimonialHeading: {
    tag: `h3`,
    fontStyle: `S`,
    children: `The DO Lectures`,
  },
  cardHeading: {
    tag: `h2`,
    fontStyle: `S`,
    weight: `$bold`,
    children: `Limna`,
  },
}
