import { Dispatch, SetStateAction, useCallback } from 'react'

import { styled } from 'styles/stitches.config'

import { Media } from 'components/Media/Media'

import { Sanity } from '@types'

interface CarouselSlideProps
  extends Omit<Sanity.BlockMediaItem, 'caption' | 'hasMobile'> {
  setPaused: Dispatch<SetStateAction<boolean>>
  isPaused?: boolean
  activeIndex: number
  hasMobile: boolean
}

export const CarouselSlide = ({
  hasMobile,
  desktop,
  mobile,
  setPaused,
  isPaused,
}: CarouselSlideProps) => {
  const handleVideoClick = () => {
    setPaused((s) => !s)
  }

  const handleAutoplayCallback = useCallback(
    (isPlaying: boolean) => {
      setPaused(!isPlaying)
    },
    [setPaused]
  )

  if (!desktop) {
    return null
  }

  return (
    <>
      {mobile?.asset && hasMobile ? (
        <Asset
          isMobile
          isPaused={isPaused}
          onClick={handleVideoClick}
          onAutoplayCallback={handleAutoplayCallback}
          {...mobile}
        />
      ) : null}
      <Asset
        hasMobile={hasMobile}
        isPaused={isPaused}
        onClick={handleVideoClick}
        onAutoplayCallback={handleAutoplayCallback}
        {...desktop}
      />
    </>
  )
}

const Asset = styled(Media, {
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
