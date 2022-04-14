import styled from 'styled-components'

import { PADDING } from '../../styles/constants'
import { getFontStyles } from '../../styles/getFontStyles'
import { MEDIA_QUERIES } from '../../styles/mediaQueries'
import {
  FONT_STYLE_APFEL_12_400,
  FONT_STYLE_RECKLESS_20_400,
} from '../../styles/fonts'

import { FadeUp } from 'components/Transitions/FadeUp'

export interface TextSectionProps {
  children: React.ReactNode
}

export const TextSection = ({ children }: TextSectionProps) => {
  return (
    <Container>
      <FadeUp>
        <BodyContainer>{children}</BodyContainer>
      </FadeUp>
    </Container>
  )
}

const Container = styled.div`
  margin: ${PADDING.xl - PADDING.s}px 0 ${PADDING.xl}px;
  ${MEDIA_QUERIES.tabletUp} {
    margin: ${PADDING.xxl - PADDING.m}px 0 ${PADDING.xxl}px;
    width: 47%;
  }
  h3 {
    ${getFontStyles(FONT_STYLE_APFEL_12_400)}
    margin-bottom: ${PADDING.xs}px;
  }

  .hero + & {
    margin: 0px 0px ${PADDING.xl}px;

    ${MEDIA_QUERIES.tabletUp} {
      margin: ${PADDING.l}px 0px ${PADDING.xl}px;
    }
  }
`
const BodyContainer = styled.div`
  ul {
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  ${getFontStyles(FONT_STYLE_RECKLESS_20_400)}
  p + p {
    margin-top: ${PADDING.m}px;
    ${MEDIA_QUERIES.tabletUp} {
      margin-top: ${PADDING.m}px;
    }
  }
`
