import { CenteredParagraph } from './CenteredParagraph'
import { Story, Meta } from '@storybook/react'

const Template: Story<React.ReactNode> = (args) => (
  <CenteredParagraph {...args}>
    We’re always on the lookout for like-minded people to join our team either
    fulltime or on a freelance basis. Check out some of our key values below and
    get in touch for a chat.
  </CenteredParagraph>
)

export const Primary = Template.bind({})

Primary.args = {}

export default {
  title: 'Components/Centered Paragraph',
  component: CenteredParagraph,
} as Meta
