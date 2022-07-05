import { styled } from 'styles/stitches.config'

import { FadeIn } from 'components/Transitions/FadeIn'
import { RendererRichText } from 'components/Renderer/RendererRichText'

import { Sanity } from '@types'

export type TextSectionProps = Sanity.BlockText

export const TextSection = ({ richText }: TextSectionProps) => {
  return (
    <TextContainer>
      {richText ? <RichText blocks={richText} /> : null}
    </TextContainer>
  )
}

export const TextContainer = styled(FadeIn, {
  m: 'calc($l - $s) 0 $l',
  width: '100%',

  '@tabletUp': {
    m: 'calc($xxl - $m) 0 $xxl',
  },
})

const RichText = styled(RendererRichText, {
  '@tabletUp': {
    maxWidth: '$centeredParagraph',
  },
})
