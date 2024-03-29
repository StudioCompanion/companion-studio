import { Dispatch, forwardRef, SetStateAction, useCallback } from 'react'

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

export const CarouselSlide = forwardRef<HTMLLIElement, CarouselSlideProps>(
  ({ hasMobile, desktop, mobile, setPaused, isPaused }, ref) => {
    const handleVideoClick = (isPaused: boolean) => {
      setPaused(isPaused)
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
      <Slide className="embla__slide" ref={ref} tabIndex={-1}>
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
      </Slide>
    )
  }
)

const Slide = styled('li', {
  position: 'relative',
  flex: '0 0 100%',
})

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
