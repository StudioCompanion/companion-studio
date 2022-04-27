import styled from 'styled-components'

import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_32_400,
  FONT_STYLE_RECKLESS_12_400,
} from 'styles/fonts'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { PADDING, WIDTHS } from 'styles/constants'
import { FadeUp } from 'components/Transitions/FadeUp'
import { Sanity } from 'src/types'
import { RendererRichText } from 'components/Renderer/RendererRichText'

export type TestimonialProps = Sanity.BlockTestimonial

export const Testimonial = ({ quote, author }: TestimonialProps) => {
  return (
    <TestimonialContainer>
      <TestimonialWrapper>
        <FadeUp>
          {quote ? (
            <Quote>
              <RendererRichText blocks={quote} />
            </Quote>
          ) : null}
          {author ? <Author>{author}</Author> : null}
        </FadeUp>
      </TestimonialWrapper>
    </TestimonialContainer>
  )
}

const TestimonialContainer = styled.section`
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

const Quote = styled.div`
  ${getFontStyles(FONT_STYLE_RECKLESS_32_400)}
  margin-bottom: 16px;
`

const Author = styled.h3`
  ${getFontStyles(FONT_STYLE_RECKLESS_12_400)}

  ${MEDIA_QUERIES.tabletUp} {
    font-size: 2rem;
    line-height: 2.6rem;
  }
`
