import React, { useState, useRef, useEffect, MouseEvent } from 'react'
import styled from 'styled-components'
import useMeasure from 'react-use-measure'

import {
  RADII,
  DESKTOP,
  MOBILE,
  PADDING,
  COLORS,
  CAROUSEL_LAYOUTS,
} from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'
import { getFontStyles } from 'styles/getFontStyles'

import { getAspectRatio } from 'helpers/media'

import FadeUp from 'components/Transitions/FadeUp'

import { Slide } from './Slide'
import { IVideo, Video } from './Video'
import { InfiniteSlider, SliderApi, IImage } from './InfiniteCarousel'
import { Cursor } from './Cursor'

const FORWARD = 'forward'
const BACKWARD = 'backward'

const regex = new RegExp(/^.*.(mp4|MP4|webm|WEBM)$/)

interface CarouselProps {
  bgColor?: COLORS
  bgImage?: string
  items: Array<IImage | IVideo>
  layout?: CAROUSEL_LAYOUTS
  hero?: boolean
}

const Carousel = ({
  bgColor = COLORS.lightgrey_2,
  bgImage,
  items,
  layout = CAROUSEL_LAYOUTS.FULL,
  hero,
}: CarouselProps) => {
  const itemCount = items.length
  const [containerEl, { width, left }] = useMeasure()
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<
    typeof FORWARD | typeof BACKWARD | null
  >(null)

  const [paused, setPaused] = useState(false)
  const video = items.find(
    (item) => regex.test(item.url.desktop) || regex.test(item.url.mobile)
  ) as IVideo | undefined

  const videoRef = useRef<HTMLVideoElement>(null)

  const [showCursor, setShowCursor] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (videoRef.current && videoRef.current.paused !== paused)
      setPaused(videoRef.current.paused)
  }, [paused])

  const cursorIcon = () => {
    if (video) {
      return paused ? '/icons/cursor_play.svg' : '/icons/cursor_pause.svg'
    }
    if (itemCount > 1) {
      return direction === FORWARD
        ? '/icons/cursor_right_arrow.svg'
        : '/icons/cursor_left_arrow.svg'
    } else return ''
  }

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${clientX}px`
      cursorRef.current.style.top = `${clientY}px`
    }

    const x = clientX - left
    if (itemCount > 1 && !video) {
      if (x >= Math.round(width / 2) && direction !== FORWARD) {
        setDirection(FORWARD)
      }
      if (x < Math.round(width / 2) && direction !== BACKWARD && !video) {
        setDirection(BACKWARD)
      }
    }
  }

  const sliderApi = useRef<SliderApi>(null!)

  const handleClick = () => {
    if (direction === BACKWARD && sliderApi.current.prev) {
      const newInd = sliderApi.current.prev(-1)
      setActiveIndex(newInd)
    }
    if (direction === FORWARD && sliderApi.current.next) {
      const newInd = sliderApi.current.next(1)
      setActiveIndex(newInd)
    }
  }

  const handleDragEnd = (index: number) => {
    setActiveIndex(index)
  }

  const handleMouseEnter = () => {
    if (itemCount > 1 || video) setShowCursor(true)
  }
  const handleMouseLeave = () => {
    if (showCursor) {
      setShowCursor(false)
    }
  }

  return (
    <>
      {showCursor && <Cursor icon={cursorIcon()} ref={cursorRef} />}

      <Wrapper $hero={hero} $layout={layout}>
        <FadeUp>
          <Container
            ref={containerEl}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            $layout={layout}
            $bgColor={bgColor}
            $bgImage={bgImage}
            $showCursor={showCursor}
          >
            <Inner>
              {video ? (
                <Video
                  video={video}
                  ref={videoRef}
                  setPaused={setPaused}
                  layout={layout}
                />
              ) : (
                <InfiniteSlider
                  ref={sliderApi}
                  items={items as IImage[]}
                  onDragEnd={handleDragEnd}
                >
                  {(item) => (
                    <Slide
                      key={item.url.desktop}
                      url={item.url}
                      alt={item.alt}
                    />
                  )}
                </InfiniteSlider>
              )}
            </Inner>
          </Container>
          <Caption>
            {(items[activeIndex] as IVideo).caption ? (
              <CaptionText>
                {(items[activeIndex] as IVideo).caption}
              </CaptionText>
            ) : null}
            {!video && itemCount > 1 && (
              <Dots>
                {items.map((_, index) => (
                  <Dot
                    key={index}
                    style={{ opacity: activeIndex === index ? 1 : 0.2 }}
                  />
                ))}
              </Dots>
            )}
          </Caption>
        </FadeUp>
      </Wrapper>
    </>
  )
}

export default Carousel

const Wrapper = styled.div<{ $hero?: boolean; $layout: CAROUSEL_LAYOUTS }>`
  width: 100%;
  margin-bottom: ${(p) => (p.$hero ? `${PADDING.xl}px` : `${PADDING.s}px`)};

  ${MEDIA_QUERIES.tabletUp} {
    margin-bottom: ${(p) => (p.$hero ? 0 : `${PADDING.m}px`)};
    width: ${({ $layout }) => {
      switch ($layout) {
        case CAROUSEL_LAYOUTS.FULL:
          return '100%'
        case CAROUSEL_LAYOUTS.HALF:
          return `calc(50% - ${PADDING.m / 2}px)`
        case CAROUSEL_LAYOUTS.TWO_THIRDS:
          return `${(2 / 3) * 100}%`
      }
    }};
  }
`

const Container = styled.div<{
  $bgColor?: string
  $bgImage?: string
  $showCursor: boolean
  $layout: CAROUSEL_LAYOUTS
}>`
  width: 100%;
  position: relative;
  padding-top: ${({ $layout }) => getAspectRatio($layout, MOBILE)};
  background-color: ${(p) => (p.$bgColor ? p.$bgColor : 'transparent')};
  background-image: ${(p) => (p.$bgImage ? `url(${p.$bgImage})` : 'none')};
  background-size: cover;
  background-position: center;
  border-radius: ${RADII.wrapper_mobile}px;
  overflow: hidden;
  cursor: ${(p) => (p.$showCursor ? 'none' : 'auto')};

  ${MEDIA_QUERIES.tabletUp} {
    border-radius: ${RADII.wrapper}px;
    padding-top: ${({ $layout }) => getAspectRatio($layout, DESKTOP)};
  }
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const Dots = styled.div`
  margin-top: 12px;
  display: flex;
`

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #080b37;
  margin-right: 4px;
`

const Caption = styled.div`
  display: flex;
  justify-content: space-between;
`

const CaptionText = styled.span`
  margin-top: 12px;
  ${getFontStyles(FONT_STYLE_APFEL_12_400)}
`