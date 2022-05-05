import { styled } from 'styles/stitches.config'

import { FadeIn } from 'components/Transitions/FadeIn'
import { RendererRichText } from 'components/Renderer/RendererRichText'

import { SanityGenerated } from '@types'

type CenteredParagraphProps = {
  text?: SanityGenerated.RichText
}

export const CenteredParagraph = ({ text }: CenteredParagraphProps) => {
  return (
    <CenteredParagraphContainer tag="div">
      {text ? <CenteredParagraphBody blocks={text} /> : null}
    </CenteredParagraphContainer>
  )
}

const CenteredParagraphContainer = styled(FadeIn, {
  my: '$xl',
  display: 'flex',
  justifyContent: 'center',

  '@tabletUp': {
    my: '$xxl',
  },
})

const CenteredParagraphBody = styled(RendererRichText, {
  textAlign: 'center',

  '@tabletUp': {
    maxWidth: '$centeredParagraph',
  },
})
