import styled from 'styled-components'

import { Media } from 'components/Media/Media'

import { Sanity } from 'src/types'

export const StickMedia = (props: Sanity.Media) => {
  return (
    <StickyParagraphContainer>
      <ImageContainer {...props} />
    </StickyParagraphContainer>
  )
}

const StickyParagraphContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const ImageContainer = styled(Media)`
  flex-grow: 1;
  position: relative;
  width: 100%;

  max-width: 800px;

  img {
    transition: 0.4s ease-out;
  }
`
