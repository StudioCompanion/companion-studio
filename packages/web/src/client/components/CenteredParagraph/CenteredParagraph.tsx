import styled from 'styled-components'

import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { WIDTHS, PADDING } from 'styles/constants'
import { getFontStyles } from 'styles/getFontStyles'
import { FONT_STYLE_RECKLESS_32_400 } from 'styles/fonts'
import { FadeUp } from 'components/Transitions/FadeUp'

import { RendererRichText } from 'components/Renderer/RendererRichText'
import { SanityGenerated } from 'src/types'

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

const CenteredParagraphContainer = styled.div`
  margin: ${PADDING.xl}px 0;
  display: flex;
  justify-content: center;
  ${MEDIA_QUERIES.tabletUp} {
    margin: ${PADDING.xxl}px 0;
  }
`
const CenteredParagraphBody = styled(RendererRichText)`
  ${getFontStyles(FONT_STYLE_RECKLESS_32_400)}
  text-align: center;
  ${MEDIA_QUERIES.tabletUp} {
    max-width: ${WIDTHS.centeredP}px;
  }
`
