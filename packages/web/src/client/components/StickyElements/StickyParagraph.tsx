import styled from 'styled-components'

import { PADDING } from 'styles/constants'
import { getFontStyles } from 'styles/getFontStyles'
import { FONT_STYLE_RECKLESS_32_400 } from 'styles/fonts'
import { MEDIA_QUERIES } from 'styles/mediaQueries'

import { SanityGenerated } from 'src/types'

import { RendererRichText } from 'components/Renderer/RendererRichText'

export interface StickyParagraphProps {
  text?: SanityGenerated.RichText
}

export const StickyParagraph = ({ text }: StickyParagraphProps) => {
  return (
    <StickyParagraphContainer>
      <StickyContainer>
        {text ? <StickyText blocks={text} /> : null}
      </StickyContainer>
    </StickyParagraphContainer>
  )
}

const StickyParagraphContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 77.7rem;

  ${MEDIA_QUERIES.tabletUp} {
    height: 100rem;
  }
`

const StickyContainer = styled.div`
  flex-grow: 1;
  position: relative;
  max-width: 82.5rem;
`

const StickyText = styled(RendererRichText)`
  text-align: center;
  padding: ${PADDING.xxl}px 0;
  position: sticky;
  top: calc(40vh - 60px);

  & * {
    ${getFontStyles(FONT_STYLE_RECKLESS_32_400)};
  }
`
