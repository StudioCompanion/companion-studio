import styled from 'styled-components'
import { NextSeo } from 'next-seo'

import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { PADDING } from 'styles/constants'

import TeamGrid from 'components/TeamGrid/TeamGrid'
import ValuesGrid from 'components/ValuesGrid/ValuesGrid'
import CenteredParagraph from 'components/CenteredParagraph/CenteredParagraph'
import ImageStrip from 'components/ImageStrip/ImageStrip'

const team = () => {
  return (
    <>
      <NextSeo title="Team" />
      <ImageStrip />
      <PaddingContainer>
        <CenteredParagraph>
          We’re a small and passionate team of designers, engineers and
          strategists working from London. We’re trying our hardest, despite
          what Myles might tell you.
        </CenteredParagraph>
        <TeamGrid />
        <CenteredParagraph>
          We’re always on the lookout for like-minded people to join our team
          either fulltime or on a freelance basis. Check out some of our key
          values below and get in touch for a chat.
        </CenteredParagraph>
        <ValuesGrid />
      </PaddingContainer>
    </>
  )
}

export default team

const PaddingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${PADDING.s}px;
  max-width: 1200px;
  margin: auto;
  ${MEDIA_QUERIES.tabletUp} {
    padding: 0 ${PADDING.m}px;
  }
`
