import styled from 'styled-components'

import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_32_400,
  FONT_STYLE_RECKLESS_12_400,
} from 'styles/fonts'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { PADDING, WIDTHS } from 'styles/constants'
import { FadeUp } from 'components/Transitions/FadeUp'

export interface TestimonialProps {
  children: React.ReactNode
}

export const Testimonial = ({ children }: TestimonialProps) => {
  return (
    <TestimonialContainer>
      <TestimonialWrapper>
        <FadeUp>
          <TestimonialText>{children}</TestimonialText>
        </FadeUp>
      </TestimonialWrapper>
    </TestimonialContainer>
  )
}

const TestimonialContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: ${PADDING.xxl}px 0;
  ${MEDIA_QUERIES.tabletUp} {
    margin: ${PADDING.xxl * 2}px 0;
  }
`
const TestimonialWrapper = styled.div`
  text-align: center;
  ${MEDIA_QUERIES.tabletUp} {
    max-width: ${WIDTHS.centeredP}px;
  }
`
const TestimonialText = styled.div`
  p {
    ${getFontStyles(FONT_STYLE_RECKLESS_32_400)}
    margin-bottom: 16px;
  }
  h3 {
    ${getFontStyles(FONT_STYLE_RECKLESS_12_400)}
    ${MEDIA_QUERIES.tabletUp} {
      font-size: 2rem;
      line-height: 2.6rem;
    }
  }
`
