import CenteredParagraph from './CenteredParagraph'

const Template = (args) => (
  <CenteredParagraph {...args}>
    We’re always on the lookout for like-minded people to join our team either
    fulltime or on a freelance basis. Check out some of our key values below and
    get in touch for a chat.
  </CenteredParagraph>
)

export default {
  title: 'Components/Centered Paragraph',
  component: CenteredParagraph,
}

export const Primary = Template.bind({})

Primary.args = {}
