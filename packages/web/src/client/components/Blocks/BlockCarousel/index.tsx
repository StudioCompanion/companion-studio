import { useState, useRef, MouseEvent, useEffect } from 'react'
import mergeRefs from 'react-merge-refs'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import useMeasure from 'react-use-measure'
import { useRouter } from 'next/router'

import { CarouselLayouts } from 'styles/constants'
import { styled } from 'styles/stitches.config'

import { FadeIn } from 'components/Transitions/FadeIn'
import { Media } from 'components/Media/Media'

import { EventNames, firePlausibleEvent } from 'helpers/analytics'

import { CarouselSlide } from './CarouselSlide'
import { CarouselCursor, CursorDirection } from './CarouselCursor'
import { CarouselFooter } from './CarouselFooter'

import { Sanity } from '@types'
import { useReducedMotion } from 'hooks/useReducedMotion'
import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'
import { useCanHover } from 'hooks/useCanHover'

/**
 *
 * This component is complicated.
 *
 * So there's notes to help you navigate it.
 *
 */
export const Carousel = (props: Sanity.BlockMedia) => {
  const {
    backgroundImage,
    backgroundColor = '$white50',
    items,
    layout = CarouselLayouts.FULL,
    isHero,
  } = props
  const [containerRef, { width, left }] = useMeasure()
  const reducedMotion = useReducedMotion()

  useIsomorphicLayoutEffect(() => {
    if (reducedMotion) {
      carouselAutoplay.stop()
    } else {
      carouselAutoplay.play()
    }
  }, [reducedMotion])

  /**
   * The active index of the carousel
   * indexed at 0
   */
  const [activeIndex, setActiveIndex] = useState(0)

  /**
   * Is the video currently playing paused?
   *
   * TODO: how does this work if we have more than one video?
   */
  const [isPaused, setPaused] = useState(false)

  /**
   * Derived state
   */
  const isVideo = items[activeIndex].desktop?._type === 'video'
  const shouldShowDots = items.length > 1
  const currentCaption = items[activeIndex].caption

  const canHover = useCanHover()

  const [carouselAutoplay] = useState(() =>
    Autoplay({
      playOnInit: false,
    })
  )
  const [viewportRef, embla] = useEmblaCarousel(
    {
      skipSnaps: false,
      loop: true,
      draggable: shouldShowDots && !canHover,
    },
    [carouselAutoplay]
  )

  /**
   * Cursor State.
   *
   * Defines the direction the cursor is pointing (only applies
   * if the item is _not_ a video) and handles whether the
   * cursor is visible or not, animation is handled within
   * the spring component
   */
  const [cursorState, setCursorState] = useState({
    direction: CursorDirection.Forwards,
    isVisible: false,
  })

  const cursorRef = useRef<HTMLDivElement>(null)

  /**
   * Cursor related event handlers
   */
  const imperativelyUpdateCursor = ({ clientX, clientY }: MouseEvent) => {
    if (cursorRef.current) {
      /**
       * TODO: review this.
       *
       * Is this the most performant way?
       * Probably better to use transform as opposed to top/left
       * but how does that deal with the moving the element to
       * be underneath the cursor
       */
      cursorRef.current.style.left = `${clientX}px`
      cursorRef.current.style.top = `${clientY}px`
    }
  }

  const handleMouseEnter = (e: MouseEvent) => {
    if (shouldShowDots || isVideo) {
      setCursorState((s) => ({ ...s, isVisible: true }))
      imperativelyUpdateCursor(e)
    }
  }

  const handleMouseLeave = () => {
    setCursorState((s) => ({ ...s, isVisible: false }))
  }

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX } = e
    imperativelyUpdateCursor(e)

    const currentX = clientX - left
    const shouldBeForwards = currentX >= width / 2

    if (
      shouldBeForwards &&
      cursorState.direction !== CursorDirection.Forwards
    ) {
      setCursorState((s) => ({ ...s, direction: CursorDirection.Forwards }))
    } else if (
      !shouldBeForwards &&
      cursorState.direction !== CursorDirection.Backwards
    ) {
      setCursorState((s) => ({ ...s, direction: CursorDirection.Backwards }))
    }
  }

  /**
   * Carousel event handling
   */

  const slideRefs = useRef<HTMLLIElement[]>([])

  const handleCarouselClick = () => {
    if (embla && canHover) {
      if (cursorState.direction === CursorDirection.Forwards) {
        embla.scrollNext()
      } else {
        embla.scrollPrev()
      }
    }
  }

  const handleDotClick = (index: number) => {
    if (embla) {
      embla.scrollTo(index)
      setActiveIndex(index)

      if (slideRefs.current[index]) {
        slideRefs.current[index].focus()
      }
    }
  }

  useEffect(() => {
    const handleSelect = () => {
      if (embla) {
        setActiveIndex(embla.selectedScrollSnap())
      }
    }

    if (embla) {
      embla.on('select', handleSelect)
    }

    return () => {
      if (embla) {
        embla.off('select', handleSelect)
      }
    }
  }, [embla])

  /**
   * Async analytic event handling
   */
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
      <CarouselCursor
        ref={cursorRef}
        isPaused={isPaused}
        isVideo={isVideo}
        {...cursorState}
      />
      <Wrapper hero={isHero} layout={layout} className="embla">
        <Viewport
          ref={mergeRefs([viewportRef, containerRef])}
          className="embla__viewport"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onClick={handleCarouselClick}
          style={{
            backgroundColor,
            cursor: cursorState.isVisible ? 'none' : 'auto',
          }}
        >
          {backgroundImage ? <BackgroundImage {...backgroundImage} /> : null}
          <Container className="embla__container">
            {items.map((item, i) => (
              <CarouselSlide
                ref={(ref) => (slideRefs.current[i] = ref!)}
                key={item._key}
                activeIndex={activeIndex}
                isPaused={isPaused}
                setPaused={setPaused}
                {...item}
                hasMobile={Boolean(item.hasMobile)}
              />
            ))}
          </Container>
        </Viewport>
        {shouldShowDots || currentCaption ? (
          <CarouselFooter
            dotCount={items.length}
            activeIndex={activeIndex}
            caption={currentCaption}
            onClick={handleDotClick}
          />
        ) : null}
      </Wrapper>
    </>
  )
}

const Wrapper = styled(FadeIn, {
  width: '100%',
  mb: '$s',
  position: 'relative',

  '@tabletUp': {
    mb: '$m',

    '&:last-child': {
      mb: 0,
    },
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

const Viewport = styled('div', {
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  br: '$wrapperMobile',

  '@tabletUp': {
    br: '$wrapper',
  },
})

const Container = styled('ul', {
  display: 'flex',
  userSelect: 'none',
})

const BackgroundImage = styled(Media, {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',

  /**
   * Embla seem to break the carousel,
   * so we enforce these styles
   */
  transform: 'none !important',

  span: {
    width: '100% !important',
  },
})
