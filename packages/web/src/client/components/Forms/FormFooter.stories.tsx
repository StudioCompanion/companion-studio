import { SignUpForm } from './FormFooter'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Forms/Footer',
  component: SignUpForm,
  parameters: {
    backgrounds: {
      default: 'blue',
      values: [{ name: 'blue', value: 'var(--colors-blue100)' }],
    },
  },
} as ComponentMeta<typeof SignUpForm>

export const Form: ComponentStory<typeof SignUpForm> = () => <SignUpForm />
