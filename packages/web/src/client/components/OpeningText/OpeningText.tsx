import { styled } from 'styles/stitches.config'

import { Logo } from 'components/Logo/Logo'
import { RendererRichText } from 'components/Renderer/RendererRichText'

import { SanityGenerated } from '@types'

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
  },
})

const OpeningTextInner = styled('div', {
  '@tabletUp': {
    maxWidth: '75%',
  },
})

const LogoContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '8rem',
  mb: '$s',

  '& > svg': {
    width: '100%',
  },

  '@tabletUp': {
    width: '13.8rem',
    mb: '$m',
  },
})

const OpeningTextCopy = styled(RendererRichText, {
  textAlign: 'center',
})
