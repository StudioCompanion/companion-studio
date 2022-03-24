import { OpeningText, OpeningTextProps } from './OpeningText'
import { Story, Meta } from '@storybook/react'

const Template: Story<OpeningTextProps> = (args) => <OpeningText {...args} />

export const Primary = Template.bind({})

Primary.args = {
  text: 'Companion is a design studio that partners with you to design and build digital products that inspire, disrupt, entertain and create a better future for people and planet.',
}

export default {
  title: 'Components/Opening Text',
  component: OpeningText,
} as Meta
