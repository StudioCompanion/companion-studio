import { styled } from 'styles/stitches.config'

import { Media } from 'components/Media/Media'

import { Sanity } from '@types'

export const StickMedia = (props: Sanity.Media) => {
  return (
    <StickyParagraphContainer>
      <ImageContainer {...props} />
    </StickyParagraphContainer>
  )
}

const StickyParagraphContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
})

const ImageContainer = styled(Media, {
  flexGrow: 1,
  position: 'relative',
  width: '100%',
  maxWidth: '$documentWrapper',
})
