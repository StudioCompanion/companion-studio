import { Input } from './Input'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '@types'

import { styled } from 'styles/stitches.config'

export default {
  title: 'Forms/Input',
  component: Input,
} as ComponentMeta<typeof Input>

export const Default: ComponentStory<typeof Input> = () => (
  <InputWrap>
    <Input {...fixtures.default} />
  </InputWrap>
)

const fixtures: StoryFixtures<typeof Input> = {
  default: {
    name: `email`,
    type: `email`,
    value: ``,
    placeholder: `Subscribe here :)`,
  },
}

const InputWrap = styled('div', {
  background: '$orange100',
  padding: '$xl',
})
