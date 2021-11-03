import Carousel from './Carousel'
import Image from 'next/image'

import testImage from '../../public/testdesktop_1.png'
import testBg from '../../public/testbg_1.png'

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
    <Image src={testImage} alt="" layout="fill" />
  </Carousel>
)

export const FullW = Template.bind({})

FullW.args = { bgColor: '#E6EEEC' }

export const FullW_BgImage = Template.bind({})

FullW_BgImage.args = { bgImage: `${testBg}` }
