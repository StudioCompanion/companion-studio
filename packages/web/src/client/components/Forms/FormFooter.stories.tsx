import { SignUpForm } from './FormFooter'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { styled } from 'styles/stitches.config'

export default {
  title: 'Site/Footer',
  component: SignUpForm,
} as ComponentMeta<typeof SignUpForm>

export const Form: ComponentStory<typeof SignUpForm> = () => (
  <Wrap>
    <SignUpForm />
  </Wrap>
)

const Wrap = styled('div', {
  background: '$blue100',
  height: '20rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
