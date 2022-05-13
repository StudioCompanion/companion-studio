import React, { useState, useRef, MouseEvent, useEffect } from 'react'
import useMeasure from 'react-use-measure'
import { useRouter } from 'next/router'

import { CarouselLayouts } from 'styles/constants'
import { styled } from 'styles/stitches.config'
import { getFontStyle } from 'styles/getFontStyles'

import { FadeIn } from 'components/Transitions/FadeIn'
import { Media } from 'components/Media/Media'

import { EventNames, firePlausibleEvent } from 'helpers/analytics'

import { Slide } from './Slide'
import { Video } from './Video'
import { InfiniteSlider, SliderApi } from './InfiniteCarousel'
import { Cursor } from './Cursor'

import { Sanity } from '@types'

const FORWARD = 'forward'
const BACKWARD = 'backward'

export const Carousel = (props: Sanity.BlockMedia) => {
  const {
    backgroundImage,
    backgroundColor = '$white50',
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

  const hasMounted = useRef(false)
  const router = useRouter()

  useEffect(() => {
    /**
     * We don't want to fire the event on mount
     * only when the index has actually changed
     * meaning someone has actually clicked through
     * to another image
     */
    if (!hasMounted.current) {
      hasMounted.current = true
    } else {
      const { slug } = router.query
      firePlausibleEvent({
        name: EventNames.CarouselClick,
        additionalProps: {
          caseStudy: slug as string,
        },
      })
    }
  }, [activeIndex, router.query])

  return (
    <>
      {showCursor && <Cursor icon={cursorIcon()} ref={cursorRef} />}
      <Wrapper hero={isHero} layout={layout}>
        <Container
          ref={containerEl}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onClick={handleClick}
          css={{
            backgroundColor,
            cursor: showCursor ? 'none' : 'auto',
          }}
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
      </Wrapper>
    </>
  )
}

const Wrapper = styled(FadeIn, {
  width: '100%',
  mb: '$s',

  '@tabletUp': {
    mb: '$m',
  },

  variants: {
    hero: {
      true: {
        mb: '$xl',

        '@tabletUp': {
          mb: 0,
        },
      },
    },
    layout: {
      [CarouselLayouts.FULL]: {
        '@tabletUp': {
          width: '100%',
        },
      },
      [CarouselLayouts.HALF]: {
        '@tabletUp': {
          width: `calc(50% - var(--space-m) / 2)`,
        },
      },
      [CarouselLayouts.TWO_THIRDS]: {
        '@tabletUp': {
          width: `${(2 / 3) * 100}%`,
        },
      },
    },
  },
})

const Container = styled('div', {
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '$wrapperMobile',

  '@tabletUp': {
    borderRadius: '$wrapper',
  },
})

const Dots = styled('div', {
  mt: '$xs',
  display: 'flex',
})

const Dot = styled('div', {
  width: 6,
  height: 6,
  borderRadius: '$circle',
  backgroundColor: '$darkBlue',

  '& + &': {
    ml: '$xxxs',
  },
})

const Caption = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

const CaptionText = styled('span', {
  mt: '$xs',
  ...getFontStyle('$body'),
})

const BackgroundImage = styled(Media, {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
})
