import styled from 'styled-components'

import { PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'

import { Logo } from 'components/Logo/Logo'
import { RendererRichText } from 'components/Renderer/RendererRichText'

import { SanityGenerated } from 'src/types'

export interface OpeningTextProps {
  text?: SanityGenerated.RichText
}

export const OpeningText = ({ text }: OpeningTextProps) => {
  return (
    <OpeningTextContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <OpeningTextInner>
        {text ? <OpeningTextCopy blocks={text} /> : null}
      </OpeningTextInner>
    </OpeningTextContainer>
  )
}

const OpeningTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px 0 ${PADDING.xl}px 0;
  width: 100%;

  ${MEDIA_QUERIES.tabletUp} {
    position: sticky;
    top: 0;
    height: 100vh;
    margin: 0;
  }
`
const OpeningTextInner = styled.div`
  ${MEDIA_QUERIES.tabletUp} {
    max-width: 75%;
  }
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 90px;
  margin-bottom: 8px;
`

const OpeningTextCopy = styled(RendererRichText)`
  text-align: center;
`
