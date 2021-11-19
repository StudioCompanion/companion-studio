import styled from 'styled-components'

import { PADDING } from 'styles/constants'

import StickyParagraph from 'components/StickyParagraph/StickyParagraph'

const approach = () => {
  return (
    <ApproachContainer>
      {paragraphs.map(({ image, text }, index) => (
        <StickyParagraph text={text} image={image} key={index} />
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
      width: 486,
      height: 279,
    },
  },
  {
    text: 'Whether you have the seed of an idea or you have been there and done it before, we work with you to create long-term value and fulfil your creative & business potential.',
    image: {
      src: '/images/graphics/approach/approach_extension_or_outside.png',
      width: 433,
      height: 347,
    },
  },
  {
    text: 'We can work as an extension of you, or take care of it all for you. We prefer long-term relationships, so we tend to speak our mind openly as after all, your interests are our interests.',
    image: {
      src: '/images/graphics/approach/approach_flexible_and_strong.png',
      width: 604,
      height: 230,
    },
  },
  {
    text: 'Every digital project is different and needs a flexible approach, so we focus on finding the most appropriate solutions for you, rather than trying to have you jump through hoops.',
    image: {
      src: '/images/graphics/approach/approach_dive_deep.png',
      width: 488,
      height: 342,
    },
  },
  {
    text: 'Having fun and playing is the best way to create. That’s why we don’t do free pitches, overwork our team or embrace the burnout culture of the creative industry. It’s not fun.',
    image: {
      src: '/images/graphics/approach/approach_trampoline.png',
      width: 508,
      height: 356,
    },
  },
  {
    text: 'Instead we partner with people that share our values: openness, curiosity, togetherness and a desire to do better for the people & world around us.',
    image: {
      src: '/images/graphics/approach/approach_pull_together.png',
      width: 653,
      height: 150,
    },
  },
]
