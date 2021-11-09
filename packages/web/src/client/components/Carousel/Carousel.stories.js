import Carousel from './Carousel'

import testHero from '../../../public/testhero.png'
import testHero_m from '../../../public/testhero_m.png'
import testImage1 from '../../../public/testdesktop_1.png'
import testImage1_m from '../../../public/testdesktop_1_m.png'
import testImage2 from '../../../public/testdesktop_2.png'
import testImage2_m from '../../../public/testdesktop_2_m.png'
import testImage3 from '../../../public/testdesktop_3.png'
import testImage3_m from '../../../public/testdesktop_3_m.png'
import testImage4 from '../../../public/testdesktop_4.png'
import testImage4_m from '../../../public/testdesktop_4_m.png'
import testHalf from '../../../public/testhalf.png'
import testHalf_m from '../../../public/testhalf_m.png'
import testHalf2 from '../../../public/testhalf2.png'
import testHalf2_m from '../../../public/testhalf2_m.png'
import testTwoThirds2 from '../../../public/test2-3_2.png'
import testTwoThirds2_m from '../../../public/test2-3_2_m.png'
import testVid from '../../../public/testvid.mp4'
import testBg from '../../../public/testbg_1.png'

import { LAYOUTS } from '../../styles/constants'
const [FULL, HALF, TWO_THIRDS] = LAYOUTS

const heroItem = {
  url: {
    desktop: testHero,
    mobile: testHero_m,
  },
  alt: 'my lovely hero',
  caption: 'lovely hero image',
}
const items = [
  {
    url: {
      desktop: testImage1,
      mobile: testImage1_m,
    },
    alt: 'my lovely image',
    caption: 'lovely first image',
  },
  {
    url: {
      desktop: testImage2,
      mobile: testImage2_m,
    },
    alt: 'my lovely image',
    caption: 'lovely second image',
  },
  {
    url: {
      desktop: testImage3,
      mobile: testImage3_m,
    },
    alt: 'my lovely image',
    caption: 'lovely third image',
  },
  {
    url: {
      desktop: testImage4,
      mobile: testImage4_m,
    },
    alt: 'my lovely image',
    caption: 'lovely fourth image',
  },
]

const halfItems = [
  {
    url: {
      desktop: testHalf2,
      mobile: testHalf2_m,
    },
    alt: 'my lovely image',
    caption: 'lovely half image',
  },
  {
    url: { desktop: testHalf, mobile: testHalf_m },
    alt: 'my lovely image',
    caption: 'lovely half image',
  },
]

const TwoThirdsItem = {
  url: { desktop: testTwoThirds2, mobile: testTwoThirds2_m },
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

export const Hero = Template.bind({})

Hero.args = { items: [heroItem] }

export const FullW = Template.bind({})

FullW.args = { items: items, bgColor: '#E6EEEC' }

export const FullW_BgImage = Template.bind({})

FullW_BgImage.args = { items: items, bgImage: `${testBg}` }

export const FullW_Video = Template.bind({})

FullW_Video.args = { items: [videoItem, ...items], bgColor: '#E6EEEC' }

export const HalfW = Template.bind({})

HalfW.args = { layout: HALF, items: halfItems, bgColor: '#E6EEEC' }

export const TwoThirdsW = Template.bind({})

TwoThirdsW.args = {
  layout: TWO_THIRDS,
  items: [TwoThirdsItem],
  bgColor: '#E6EEEC',
}
