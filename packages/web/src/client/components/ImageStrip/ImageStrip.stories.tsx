import { ImageStrip } from './ImageStrip'
import { Story, Meta } from '@storybook/react'

const Template: Story<JSX.IntrinsicAttributes> = (args) => (
  <ImageStrip {...args} />
)

export const Primary = Template.bind({})

Primary.args = {}

export default {
  title: 'Image Strip',
  component: ImageStrip,
} as Meta
