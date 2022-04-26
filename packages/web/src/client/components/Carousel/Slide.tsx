import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import { WIDTHS } from 'styles/dimensions'
import { Media } from 'components/Media/Media'
import { Sanity } from 'src/types'

export const Slide = ({
  hasMobile,
  desktop,
  mobile,
}: Sanity.BlockMediaItem) => {
  const tabletUp = useMediaQuery({ query: `(min-width: ${WIDTHS.tablet}px)` })

  if (!desktop) {
    return null
  }

  return (
    <ImageWrapper>
      {!tabletUp && hasMobile && mobile ? (
        <Media {...mobile} />
      ) : (
        <Media {...desktop} />
      )}
    </ImageWrapper>
  )
}

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & img {
    transition: 0.4s ease-out;
  }
`
