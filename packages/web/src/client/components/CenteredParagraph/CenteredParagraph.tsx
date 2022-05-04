import { styled } from 'styles/stitches.config'

import { FadeUp } from 'components/Transitions/FadeUp'
import { RendererRichText } from 'components/Renderer/RendererRichText'

import { SanityGenerated } from '@types'

type CenteredParagraphProps = {
  text?: SanityGenerated.RichText
}

export const CenteredParagraph = ({ text }: CenteredParagraphProps) => {
  return (
    <FadeUp>
      <CenteredParagraphContainer>
        {text ? <CenteredParagraphBody blocks={text} /> : null}
      </CenteredParagraphContainer>
    </FadeUp>
  )
}

const CenteredParagraphContainer = styled('div', {
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
