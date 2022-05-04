import { styled } from 'styles/stitches.config'

import { SanityGenerated } from '@types'

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

const StickyParagraphContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '77.7rem',

  '@tabletUp': {
    height: '100rem',
  },
})

const StickyContainer = styled('div', {
  flexGrow: 1,
  position: 'relative',
  maxWidth: '82.5rem',
})

const StickyText = styled(RendererRichText, {
  textAlign: 'center',
  py: '$xxl',
  position: 'sticky',
  top: 'calc(40vh - 6rem)',
})
