import { ReactNode } from 'react'

import { styled } from 'styles/stitches.config'

export interface OpeningTextProps {
  children?: ReactNode
}

export const OpeningText = ({ children }: OpeningTextProps) => {
  return (
    <OpeningTextContainer>
      <OpeningTextInner>{children}</OpeningTextInner>
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

  '@largeDesktopUp': {
    position: 'sticky',
    top: 0,
    height: '100vh',
    margin: 0,
    mt: -86,
  },
})

const OpeningTextInner = styled('p', {
  fontSize: '$M',
  lineHeight: '$M',
  textAlign: 'center',

  '@largeDesktopUp': {
    fontSize: '$XXL',
    lineHeight: '$XXL',
    maxWidth: '87%',
  },
})
