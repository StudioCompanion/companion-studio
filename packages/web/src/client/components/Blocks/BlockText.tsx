import styled from 'styled-components'

import { PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'

import { FadeUp } from 'components/Transitions/FadeUp'
import { RendererRichText } from 'components/Renderer/RendererRichText'

import { Sanity } from 'src/types'

export type TextSectionProps = Sanity.BlockText

export const TextSection = ({ richText }: TextSectionProps) => {
  return (
    <Container>
      <FadeUp>{richText ? <RichText blocks={richText} /> : null}</FadeUp>
    </Container>
  )
}

const Container = styled.section`
  margin: ${PADDING.xl - PADDING.s}px 0 ${PADDING.xl}px;

  ${MEDIA_QUERIES.tabletUp} {
    margin: ${PADDING.xxl - PADDING.m}px 0 ${PADDING.xxl}px;
    width: 100%;
  }

  .hero + & {
    margin: 0px 0px ${PADDING.xl}px;

    ${MEDIA_QUERIES.tabletUp} {
      margin: ${PADDING.l}px 0px ${PADDING.xl}px;
    }
  }
`

const RichText = styled(RendererRichText)`
  ${MEDIA_QUERIES.tabletUp} {
    max-width: 47%;
  }
`
