import React, { useState, useRef, MouseEvent } from 'react'
import styled from 'styled-components'
import useMeasure from 'react-use-measure'

import { RADII, PADDING, Colors, CarouselLayouts } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'
import { getFontStyles } from 'styles/getFontStyles'

import { FadeUp } from 'components/Transitions/FadeUp'

import { Slide } from './Slide'
import { Video } from './Video'
import { InfiniteSlider, SliderApi } from './InfiniteCarousel'
import { Cursor } from './Cursor'

import { Sanity } from 'src/types'
import { Media } from 'components/Media/Media'

const FORWARD = 'forward'
const BACKWARD = 'backward'

export const Carousel = (props: Sanity.BlockMedia) => {
  const {
    backgroundImage,
    backgroundColor = Colors.lightgrey_2,
    items,
    layout = CarouselLayouts.FULL,
    isHero,
  } = props
  const itemCount = items.length
  const [containerEl, { width, left }] = useMeasure()
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<
    typeof FORWARD | typeof BACKWARD | null
  >(null)

  const [paused, setPaused] = useState(false)
  const video = items.find(
    (item) =>
      item?.desktop?._type === 'video' || item?.mobile?._type === 'video'
  )

  const [showCursor, setShowCursor] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

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
      /**
       * this formula handles a case where there are two items
       * but in the dom there are four (so the animation works)
       */
      setActiveIndex(
        (newInd < 0 ? newInd + items.length : newInd) % items.length
      )
    }
    if (direction === FORWARD && sliderApi.current.next) {
      const newInd = sliderApi.current.next(1)
      /**
       * this formula handles a case where there are two items
       * but in the dom there are four (so the animation works)
       */
      setActiveIndex(
        (newInd < 0 ? newInd + items.length : newInd) % items.length
      )
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
      <Wrapper $hero={isHero} $layout={layout}>
        <FadeUp>
          <Container
            ref={containerEl}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            $bgColor={backgroundColor}
            $showCursor={showCursor}
          >
            {backgroundImage ? <BackgroundImage {...backgroundImage} /> : null}
            {video ? (
              <Video video={video} isPaused={paused} setPaused={setPaused} />
            ) : (
              <InfiniteSlider
                ref={sliderApi}
                items={items}
                onDragEnd={handleDragEnd}
              >
                {(item) => <Slide key={item._key} {...item} />}
              </InfiniteSlider>
            )}
          </Container>
          <Caption>
            {items[activeIndex].caption ? (
              <CaptionText>{items[activeIndex].caption}</CaptionText>
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

const Wrapper = styled.section<{ $hero?: boolean; $layout: CarouselLayouts }>`
  width: 100%;
  margin-bottom: ${(p) => (p.$hero ? `${PADDING.xl}px` : `${PADDING.s}px`)};

  ${MEDIA_QUERIES.tabletUp} {
    margin-bottom: ${(p) => (p.$hero ? 0 : `${PADDING.m}px`)};
    width: ${({ $layout }) => {
      switch ($layout) {
        case CarouselLayouts.FULL:
          return '100%'
        case CarouselLayouts.HALF:
          return `calc(50% - ${PADDING.m / 2}px)`
        case CarouselLayouts.TWO_THIRDS:
          return `${(2 / 3) * 100}%`
      }
    }};
  }
`

const Container = styled.div<{
  $bgColor?: string
  $showCursor: boolean
}>`
  width: 100%;
  position: relative;
  background-color: ${(p) => p.$bgColor};
  border-radius: ${RADII.wrapper_mobile}px;
  overflow: hidden;
  cursor: ${(p) => (p.$showCursor ? 'none' : 'auto')};

  ${MEDIA_QUERIES.tabletUp} {
    border-radius: ${RADII.wrapper}px;
  }
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

const BackgroundImage = styled(Media)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`
