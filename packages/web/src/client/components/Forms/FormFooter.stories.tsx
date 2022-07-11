import { SignUpForm } from './FormFooter'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { styled } from 'styles/stitches.config'

export default {
  title: 'Forms/SignUpForm',
  component: SignUpForm,
} as ComponentMeta<typeof SignUpForm>

export const Default: ComponentStory<typeof SignUpForm> = () => <FooterForm />

const FooterForm = styled(SignUpForm, {
  backgroundColor: '$blue100',
  p: '$xl',
})
