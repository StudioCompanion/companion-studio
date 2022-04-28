import { Carousel } from '.'

import testVid from '../../../../public/testvid.mp4'
import testPhoneVid from '../../../../public/testvid_phone.mp4'
import testVid_poster from '../../../../public/testvid_placeholder.png'

import { CarouselLayouts } from '../../../styles/constants'

const heroItem = {
  url: {
    desktop: '',
    mobile: '',
  },
  alt: 'my lovely hero',
  caption: 'lovely hero image',
}
const items = [
  {
    url: {
      desktop: '',
      mobile: '',
    },
    alt: 'my lovely image',
    caption: 'lovely first image',
  },
  {
    url: {
      desktop: '',
      mobile: '',
    },
    alt: 'my lovely image',
    caption: 'lovely second image',
  },
  {
    url: {
      desktop: '',
      mobile: '',
    },
    alt: 'my lovely image',
    caption: 'lovely third image',
  },
  {
    url: {
      desktop: '',
      mobile: '',
    },
    alt: 'my lovely image',
    caption: 'lovely fourth image',
  },
]

const halfItems = [
  {
    url: {
      desktop: '',
      mobile: '',
    },
    alt: 'my lovely image',
    caption: 'lovely half image',
  },
  {
    url: { desktop: '', mobile: '' },
    alt: 'my lovely image',
    caption: 'lovely half image',
  },
]

const TwoThirdsItem = {
  url: { desktop: '', mobile: '' },
  alt: 'my lovely image',
  caption: 'lovely 2/3 image',
}

const videoItem = {
  poster: { desktop: testVid_poster, mobile: testVid_poster },
  url: { desktop: testVid, mobile: testVid },
  caption: 'lovely video',
}

const phone_videoItem = {
  poster: { desktop: testVid_poster, mobile: testVid_poster },
  url: { desktop: testPhoneVid, mobile: testPhoneVid },
  caption: 'lovely phone video',
  width: 534,
  height: 1080,
}

export default {
  title: 'Components / Carousel',
  component: Carousel,
  argTypes: {
    bgColor: {
      control: {
        type: 'color',
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

export const Phone_Video = Template.bind({})

Phone_Video.args = {
  items: [phone_videoItem],
  bgColor: '#E6EEEC',
  aspect: { desktop: '16/9', mobile: '103%' },
}

export const HalfW = Template.bind({})

HalfW.args = {
  layout: CarouselLayouts.HALF,
  items: halfItems,
  bgColor: '#E6EEEC',
}

export const TwoThirdsW = Template.bind({})

TwoThirdsW.args = {
  layout: CarouselLayouts.TWO_THIRDS,
  items: [TwoThirdsItem],
  bgColor: '#E6EEEC',
}
