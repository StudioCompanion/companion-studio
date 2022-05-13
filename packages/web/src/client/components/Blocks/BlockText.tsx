import { styled } from 'styles/stitches.config'

import { FadeIn } from 'components/Transitions/FadeIn'
import { RendererRichText } from 'components/Renderer/RendererRichText'

import { Sanity } from '@types'

export type TextSectionProps = Sanity.BlockText

export const TextSection = ({ richText }: TextSectionProps) => {
  return (
    <Container>{richText ? <RichText blocks={richText} /> : null}</Container>
  )
}

const Container = styled(FadeIn, {
  m: 'calc($l - $s) 0 $l',

  '@tabletUp': {
    width: '100%',
    m: 'calc($xxl - $m) 0 $xxl',
  },
})

const RichText = styled(RendererRichText, {
  '@tabletUp': {
    maxWidth: '$centeredParagraph',
  },
})
