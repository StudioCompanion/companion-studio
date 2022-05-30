import { useState, useEffect } from 'react'
import Ticker from 'react-ticker'
import PageVisibility from 'react-page-visibility'

import { styled, Widths } from 'styles/stitches.config'

import { FadeIn } from 'components/Transitions/FadeIn'
import { Media } from 'components/Media/Media'

import { Sanity } from '@types'

interface ImageStripImageProps extends Sanity.Slide {
  tabletUp: boolean
}

const ImageStripImage = ({
  media,
  tabletUp,
  rotation = 2,
}: ImageStripImageProps) => {
  if (!media) {
    return null
  }

  function toRadians(angle: number) {
    return angle * (Math.PI / 180)
  }
  const calcNewDimensions = (
    resizedWidth: number,
    resizedHeight: number,
    rot: number
  ) => {
    return {
      x:
        Math.abs(resizedHeight * Math.cos(toRadians(90 - rot))) +
        Math.abs(resizedWidth * Math.cos(toRadians(rot))),
      y:
        Math.abs(resizedWidth * Math.sin(toRadians(rot))) +
        Math.abs(resizedHeight * Math.sin(toRadians(90 - rot))),
    }
  }

  const maxWidth = tabletUp ? 550 : 275

  const width = media.dimensions?.width ?? 0
  const height = media.dimensions?.height ?? 0

  const resizedWidth = Math.min(maxWidth, width)
  const resizedHeight = (height * resizedWidth) / width

  const { x, y } = calcNewDimensions(resizedWidth, resizedHeight, rotation)
  const paddingX = Math.round(x - resizedWidth) / 2
  const paddingY = Math.round(y - resizedHeight) / 2

  return (
    <ImageContainer
      style={{
        width: `${x}px`,
        height: `${y}px`,
        padding: `${paddingY}px ${paddingX}px`,
        transform: `rotate(${rotation ?? 0}deg)`,
      }}
    >
      <ImageWrapper>
        <Media {...media} />
      </ImageWrapper>
    </ImageContainer>
  )
}

export const ImageStrip = ({
  slideshow,
}: Pick<Sanity.TeamPage, 'slideshow'>) => {
  const [pageIsVisible, setPageIsVisible] = useState(true)
  const handleVisibilityChange = (isVisible: boolean) => {
    setPageIsVisible(isVisible)
  }

  const [isTabletUp, setIsTabletUp] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const isNowTabletUp: boolean = window.innerWidth >= Widths.Tablet
      if (isNowTabletUp !== isTabletUp) {
        setIsTabletUp(isNowTabletUp)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isTabletUp])

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      <ImageStripContainer>
        {pageIsVisible && (
          <Ticker>
            {() => (
              <ImageStripWrapper>
                {Array.isArray(slideshow)
                  ? slideshow.map(({ media, rotation }) => (
                      <ImageStripImage
                        // @ts-ignore
                        key={media.asset._ref}
                        media={media}
                        rotation={rotation}
                        tabletUp={isTabletUp}
                      />
                    ))
                  : null}
              </ImageStripWrapper>
            )}
          </Ticker>
        )}
      </ImageStripContainer>
    </PageVisibility>
  )
}
const ImageStripContainer = styled(FadeIn, {
  position: 'relative',
  width: '100%',
  my: '$xl',

  '@tabletUp': {
    my: '$l',
  },
})

const ImageWrapper = styled('div', {
  br: '$wrapperLarge',
  overflow: 'hidden',
})

const ImageContainer = styled('div', {
  mx: 'calc($m / 2}',
  flexShrink: 0,
})

const ImageStripWrapper = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  width: 'max-content',
})
