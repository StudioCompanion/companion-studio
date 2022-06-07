import { styled } from 'styles/stitches.config'

import { RendererRichText } from 'components/Renderer/RendererRichText'

import { SanityGenerated } from '@types'

export interface OpeningTextProps {
  text?: SanityGenerated.RichText
}

export const OpeningText = ({ text }: OpeningTextProps) => {
  return (
    <OpeningTextContainer>
      <OpeningTextInner>
        {text ? <OpeningTextCopy blocks={text} /> : null}
      </OpeningTextInner>
    </OpeningTextContainer>
  )
}

const OpeningTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  m: '$l 0 $xl 0',
  width: '100%',

  '@tabletUp': {
    position: 'sticky',
    top: 0,
    height: '100vh',
    margin: 0,
    mt: -86,
  },
})

const OpeningTextInner = styled('div', {
  '@tabletUp': {
    maxWidth: '75%',
  },
})

const OpeningTextCopy = styled(RendererRichText, {
  textAlign: 'center',
})
