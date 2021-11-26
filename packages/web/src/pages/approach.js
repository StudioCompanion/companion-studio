import styled from 'styled-components'

import { PADDING } from 'styles/constants'

import Layout from 'components/Layout'
import StickyParagraph from 'components/StickyParagraph/StickyParagraph'

import FadeUp from 'components/Transitions/FadeUp'

import { NextSeo } from 'next-seo'

const approach = () => {
  return (
    <>
      <NextSeo title="Approach" />
      <ApproachContainer>
        {paragraphs.map(({ image, text, maxWidth }, index) => (
          <FadeUp key={index}>
            <StickyParagraph text={text} image={image} maxWidth={maxWidth} />
          </FadeUp>
        ))}
      </ApproachContainer>
    </>
  )
}

export default approach

approach.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

const ApproachContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${PADDING.xxl}px;
`
import approach_create_change from '../../public/images/graphics/approach/approach_create_change.png'
import approach_extension_or_outside from '../../public/images/graphics/approach/approach_extension_or_outside.png'
import approach_flexible_and_strong from '../../public/images/graphics/approach/approach_flexible_and_strong.png'
import approach_dive_deep from '../../public/images/graphics/approach/approach_dive_deep.png'
import approach_trampoline from '../../public/images/graphics/approach/approach_trampoline.png'
import approach_pull_together from '../../public/images/graphics/approach/approach_pull_together.png'

const paragraphs = [
  {
    text: 'We aim to enhance the lives of everyone around us by designing tools, services and products that inspire, entertain and create a better future for planet and people.',
    image: {
      src: approach_create_change,
    },
  },
  {
    text: 'Whether you have the seed of an idea or you have been there and done it before, we work with you to create long-term value and fulfil your creative & business potential.',
    image: {
      src: approach_extension_or_outside,
    },
  },
  {
    text: 'We can work as an extension of you, or take care of it all for you. We prefer long-term relationships, so we tend to speak our mind openly as after all, your interests are our interests.',
    image: {
      src: approach_flexible_and_strong,
    },
  },
  {
    text: 'Every digital project is different and needs a flexible approach, so we focus on finding the most appropriate solutions for you, rather than trying to have you jump through hoops.',
    image: {
      src: approach_dive_deep,
    },
  },
  {
    text: 'Having fun and playing is the best way to create. That’s why we don’t do free pitches, overwork our team or embrace the burnout culture of the creative industry. It’s not fun.',
    image: {
      src: approach_trampoline,
    },
  },
  {
    text: 'Instead we partner with people that share our values: openness, curiosity, togetherness and a desire to do better for the people & world around us.',
    image: {
      src: approach_pull_together,
    },
    maxWidth: 1600,
  },
]
