import { styled } from 'styles/stitches.config'

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
      {mobile?.asset && Boolean(hasMobile) ? (
        <ImageAsset isMobile={Boolean(hasMobile)} {...mobile} />
      ) : null}
      <ImageAsset hasMobile={Boolean(hasMobile)} {...desktop} />
    </>
  )
}

const ImageAsset = styled(Media, {
  variants: {
    hasMobile: {
      true: {
        display: 'none',

        '@desktopUp': {
          display: 'block',
        },
      },
    },
    isMobile: {
      true: {
        '@desktopUp': {
          display: 'none',
        },
      },
    },
  },
})
