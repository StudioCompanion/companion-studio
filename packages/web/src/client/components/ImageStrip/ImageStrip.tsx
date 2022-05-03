import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Ticker from 'react-ticker'
import PageVisibility from 'react-page-visibility'

import { RADII, PADDING } from 'styles/constants'
import { WIDTHS } from 'styles/dimensions'
import { MEDIA_QUERIES } from 'styles/mediaQueries'

import { FadeUp } from 'components/Transitions/FadeUp'
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

  const width = media.dimensions.width
  const height = media.dimensions.height

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
      const isNowTabletUp: boolean = window.innerWidth >= WIDTHS.tablet
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
    <FadeUp>
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
    </FadeUp>
  )
}

const ImageWrapper = styled.div`
  border-radius: ${RADII.wrapper_lg}px;
  overflow: hidden;

  & img {
    transition: 0.4s ease-out;
  }
`

const ImageContainer = styled.div`
  margin: 0 ${PADDING.m / 2}px;
  flex-shrink: 0;
`

const ImageStripContainer = styled.div`
  position: relative;
  width: 100%;
  margin: ${PADDING.xl}px 0;
  ${MEDIA_QUERIES.tabletUp} {
    margin: ${PADDING.l} 0;
  }
`

const ImageStripWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: max-content;
`
