import styled from 'styled-components'

import { PADDING } from 'styles/constants'

import StickyParagraph from 'components/StickyParagraph/StickyParagraph'
import FadeUp from 'components/Transitions/FadeUp'

const approach = () => {
  return (
    <ApproachContainer>
      {paragraphs.map(({ image, text, maxWidth }, index) => (
        <FadeUp key={index}>
          <StickyParagraph text={text} image={image} maxWidth={maxWidth} />
        </FadeUp>
      ))}
    </ApproachContainer>
  )
}

export default approach

const ApproachContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${PADDING.xxl}px;
`

const paragraphs = [
  {
    text: 'We aim to enhance the lives of everyone around us by designing tools, services and products that inspire, entertain and create a better future for planet and people.',
    image: {
      src: '/images/graphics/approach/approach_create_change.png',
      width: 1944,
      height: 1116,
    },
  },
  {
    text: 'Whether you have the seed of an idea or you have been there and done it before, we work with you to create long-term value and fulfil your creative & business potential.',
    image: {
      src: '/images/graphics/approach/approach_extension_or_outside.png',
      width: 1732,
      height: 1388,
    },
  },
  {
    text: 'We can work as an extension of you, or take care of it all for you. We prefer long-term relationships, so we tend to speak our mind openly as after all, your interests are our interests.',
    image: {
      src: '/images/graphics/approach/approach_flexible_and_strong.png',
      width: 2416,
      height: 920,
    },
  },
  {
    text: 'Every digital project is different and needs a flexible approach, so we focus on finding the most appropriate solutions for you, rather than trying to have you jump through hoops.',
    image: {
      src: '/images/graphics/approach/approach_dive_deep.png',
      width: 1952,
      height: 1367,
    },
  },
  {
    text: 'Having fun and playing is the best way to create. That’s why we don’t do free pitches, overwork our team or embrace the burnout culture of the creative industry. It’s not fun.',
    image: {
      src: '/images/graphics/approach/approach_trampoline.png',
      width: 2032,
      height: 1424,
    },
  },
  {
    text: 'Instead we partner with people that share our values: openness, curiosity, togetherness and a desire to do better for the people & world around us.',
    image: {
      src: '/images/graphics/approach/approach_pull_together.png',
      width: 2612,
      height: 640,
    },
    maxWidth: 1600,
  },
]
