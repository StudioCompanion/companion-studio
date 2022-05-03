import styled from 'styled-components'

import { Media } from 'components/Media/Media'
import { Sanity } from '@types'

export const Slide = ({
  hasMobile,
  desktop,
  mobile,
}: Sanity.BlockMediaItem) => {
  if (!desktop) {
    return null
  }

  return (
    <>
      {mobile?.asset ? (
        <MobileAsset $show={Boolean(hasMobile)} {...mobile} />
      ) : null}
      <DesktopAsset $hasMobile={Boolean(hasMobile)} {...desktop} />
    </>
  )
}

const MobileAsset = styled(Media)<{ $show: boolean }>`
  display: ${(props) => (props.$show ? 'block' : 'none')};

  ${MEDIA_QUERIES.desktopUp} {
    display: none;
  }
`

const DesktopAsset = styled(Media)<{ $hasMobile: boolean }>`
  display: ${(props) => (props.$hasMobile ? 'none' : 'block')};

  ${MEDIA_QUERIES.desktopUp} {
    display: block;
  }
`
