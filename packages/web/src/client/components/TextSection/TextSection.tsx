import styled from 'styled-components'

import { PADDING } from '../../styles/constants'
import { getFontStyles } from '../../styles/getFontStyles'
import { MEDIA_QUERIES } from '../../styles/mediaQueries'
import {
  FONT_STYLE_APFEL_12_400,
  FONT_STYLE_RECKLESS_20_400,
} from '../../styles/fonts'

import { FadeUp } from 'components/Transitions/FadeUp'
import { RendererRichText } from 'components/Renderer/RendererRichText'

import { Sanity } from 'src/types'

export type TextSectionProps = Sanity.BlockText

export const TextSection = ({ richText }: TextSectionProps) => {
  return (
    <Container>
      <FadeUp>
        {richText ? <RendererRichText blocks={richText} /> : null}
      </FadeUp>
    </Container>
  )
}

const Container = styled.section`
  margin: ${PADDING.xl - PADDING.s}px 0 ${PADDING.xl}px;

  ${MEDIA_QUERIES.tabletUp} {
    margin: ${PADDING.xxl - PADDING.m}px 0 ${PADDING.xxl}px;
    width: 47%;
  }

  h3 {
    ${getFontStyles(FONT_STYLE_APFEL_12_400)}
    margin-bottom: ${PADDING.xs}px;
  }

  .hero + & {
    margin: 0px 0px ${PADDING.xl}px;

    ${MEDIA_QUERIES.tabletUp} {
      margin: ${PADDING.l}px 0px ${PADDING.xl}px;
    }
  }
`
