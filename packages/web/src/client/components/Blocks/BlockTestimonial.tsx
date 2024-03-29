import { styled } from 'styles/stitches.config'

import { Sanity } from '@types'

import { FadeIn } from 'components/Transitions/FadeIn'
import { RendererRichText } from 'components/Renderer/RendererRichText'
import { Heading } from 'components/Text/Heading'
import { getFontStyle } from 'styles/getFontStyles'

export type TestimonialProps = Sanity.BlockTestimonial

export const Testimonial = ({ quote, author }: TestimonialProps) => {
  return (
    <TestimonialContainer>
      <TestimonialWrapper tag="div">
        {quote ? <Quote blocks={quote} /> : null}
        {author ? (
          <Heading tag="h3" fontStyle="S">
            {author}
          </Heading>
        ) : null}
      </TestimonialWrapper>
    </TestimonialContainer>
  )
}

const TestimonialContainer = styled('section', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  my: '$l',

  '@tabletUp': {
    my: '$xxl',
    mt: '$m',
  },
})

const TestimonialWrapper = styled(FadeIn, {
  textAlign: 'center',

  '@tabletUp': {
    maxWidth: '$documentWrapper',
  },
})

const Quote = styled(RendererRichText, {
  mb: '$s',
  ...getFontStyle('$L'),
})
