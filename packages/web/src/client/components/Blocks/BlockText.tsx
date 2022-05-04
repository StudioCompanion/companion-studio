import { styled } from 'styles/stitches.config'

import { FadeUp } from 'components/Transitions/FadeUp'
import { RendererRichText } from 'components/Renderer/RendererRichText'

import { Sanity } from '@types'

export type TextSectionProps = Sanity.BlockText

export const TextSection = ({ richText }: TextSectionProps) => {
  return (
    <Container>
      <FadeUp>{richText ? <RichText blocks={richText} /> : null}</FadeUp>
    </Container>
  )
}

const Container = styled('section', {
  m: 'calc($xl - $s) 0 $xl',

  '@tabletUp': {
    width: '100%',
    m: 'calc($xxl - $m) 0 $xxl',
  },
})

const RichText = styled(RendererRichText, {
  '@tabletUp': {
    maxWidth: '$documentWrapper',
  },
})
