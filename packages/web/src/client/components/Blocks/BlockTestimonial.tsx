import { styled } from 'styles/stitches.config'

import { Sanity } from '@types'

import { FadeUp } from 'components/Transitions/FadeUp'
import { RendererRichText } from 'components/Renderer/RendererRichText'
import { Heading } from 'components/Text/Heading'

export type TestimonialProps = Sanity.BlockTestimonial

export const Testimonial = ({ quote, author }: TestimonialProps) => {
  return (
    <TestimonialContainer>
      <TestimonialWrapper>
        <FadeUp>
          {quote ? <Quote blocks={quote} /> : null}
          {author ? (
            <Author tag="h3" fontStyle="$body">
              {author}
            </Author>
          ) : null}
        </FadeUp>
      </TestimonialWrapper>
    </TestimonialContainer>
  )
}

const TestimonialContainer = styled('section', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  my: '$xxl',

  '@tabletUp': {
    my: '$xxxl',
  },
})

const TestimonialWrapper = styled('div', {
  textAlign: 'center',

  '@tabletUp': {
    maxWidth: '$centeredParagraph',
  },
})

const Quote = styled(RendererRichText, {
  mb: '$s',
  fontSize: 'h3',
  lineHeight: 'h3',
})

const Author = styled(Heading, {
  fontFamily: '$reckless',
})
