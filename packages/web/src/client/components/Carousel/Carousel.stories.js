import Carousel from './Carousel'
import Slide from './Slide'

import testImage1 from '../../../public/testdesktop_1.png'
import testImage2 from '../../../public/testdesktop_2.png'
import testImage3 from '../../../public/testdesktop_3.png'
import testBg from '../../../public/testbg_1.png'

export default {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    bgColor: {
      control: {
        type: 'color',
      },
    },
  },
}

const Template = (args) => (
  <Carousel {...args}>
    <Slide image={testImage1} alt="" />
    <Slide image={testImage2} alt="" />
    <Slide image={testImage3} alt="" />
  </Carousel>
)

export const FullW = Template.bind({})

FullW.args = { bgColor: '#E6EEEC' }

export const FullW_BgImage = Template.bind({})

FullW_BgImage.args = { bgImage: `${testBg}` }
