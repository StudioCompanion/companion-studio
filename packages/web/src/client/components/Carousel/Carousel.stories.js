import Carousel from './Carousel'

import testImage1 from '../../../public/testdesktop_1.png'
import testImage2 from '../../../public/testdesktop_2.png'
import testImage3 from '../../../public/testdesktop_3.png'
import testHalf from '../../../public/testhalf.png'
import testTwoThirds from '../../../public/test2-3.png'
import testVid from '../../../public/testvid.mp4'
import testBg from '../../../public/testbg_1.png'

import { LAYOUTS } from '../../styles/constants'
const [FULL, HALF, TWO_THIRDS] = LAYOUTS

const items = [
  {
    url: testImage1,
    alt: 'my lovely image',
    caption: 'lovely first image',
  },
  {
    url: testImage2,
    alt: 'my lovely image',
    caption: 'lovely second image',
  },
  {
    url: testImage3,
    alt: 'my lovely image',
    caption: 'lovely third image',
  },
]

const halfItem = {
  url: testHalf,
  alt: 'my lovely image',
  caption: 'lovely half image',
}

const TwoThirdsItem = {
  url: testTwoThirds,
  alt: 'my lovely image',
  caption: 'lovely 2/3 image',
}

const videoItem = {
  url: testVid,
  caption: 'lovely video',
}

export default {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    bgColor: {
      control: {
        type: 'color',
      },
    },
    layout: {
      options: LAYOUTS,
      control: {
        type: 'select',
      },
    },
    bgImage: {
      options: [testBg],
      control: {
        type: 'check',
      },
    },
  },
}

const Template = (args) => <Carousel {...args} />

export const FullW = Template.bind({})

FullW.args = { items: items, bgColor: '#E6EEEC' }

export const FullW_BgImage = Template.bind({})

FullW_BgImage.args = { items: items, bgImage: `${testBg}` }

export const FullW_Video = Template.bind({})

FullW_Video.args = { items: [videoItem, ...items], bgColor: '#E6EEEC' }

export const HalfW = Template.bind({})

HalfW.args = { layout: HALF, items: [halfItem], bgColor: '#E6EEEC' }

export const TwoThirdsW = Template.bind({})

TwoThirdsW.args = {
  layout: TWO_THIRDS,
  items: [TwoThirdsItem],
  bgColor: '#E6EEEC',
}
