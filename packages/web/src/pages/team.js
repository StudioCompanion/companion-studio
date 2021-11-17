import styled from 'styled-components'
import { NextSeo } from 'next-seo'

import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { PADDING } from 'styles/constants'

import TeamGrid from 'components/TeamGrid/TeamGrid'
import ValuesGrid from 'components/ValuesGrid/ValuesGrid'
import CenteredParagraph from 'components/CenteredParagraph/CenteredParagraph'

const team = () => {
  return (
    <>
      <NextSeo title="Team" />
      <ImageStripContainer>Image strip will go here</ImageStripContainer>
      <PaddingContainer>
        <CenteredParagraph
          text={
            'We’re a small and passionate team of designers, engineers and strategists working from London. We’re trying our hardest, despite what Myles might tell you.'
          }
        />
        <TeamGrid />
        <CenteredParagraph
          text={
            'We’re always on the lookout for like-minded people to join our team either fulltime or on a freelance basis. Check out some of our key values below and get in touch for a chat.'
          }
        />
        <ValuesGrid />
      </PaddingContainer>
    </>
  )
}

export default team

const ImageStripContainer = styled.div`
  background-color: lightgrey;
  height: 293px;
  margin: 40px 0;
  ${MEDIA_QUERIES.tabletUp} {
    height: 635px;
    margin: ${PADDING.l} 0;
  }
`

const PaddingContainer = styled.div`
  padding: 0 ${PADDING.s}px;
  ${MEDIA_QUERIES.tabletUp} {
    padding: 0 ${PADDING.m}px;
  }
`
