/**
 * Pretty much taken from https://codesandbox.io/s/infinite-slideshow-fu8wc?file=/src/Slider.js
 * Via https://ironeko.com/posts/ininite-carousel-with-react-spring-how-to
 * So thanks to Leo & David.
 */

import {
  useRef,
  useCallback,
  forwardRef,
  useImperativeHandle,
  ReactNode,
  useMemo,
} from 'react'
import useMeasure from 'react-use-measure'
import { useDrag } from 'react-use-gesture'
import { useSprings, animated } from '@react-spring/web'
import styled, { css } from 'styled-components'

import { Sanity, SanityGenerated } from '@types'

import { aspectRatio } from 'styles/mixins'
import { MEDIA_QUERIES } from 'styles/mediaQueries'

export interface SliderApi {
  next: (ind: number) => number
  prev: (ind: number) => number
}

interface InfiniteSliderProps {
  items: SanityGenerated.SanityKeyed<Sanity.BlockMediaItem>[]
  children: (
    img: SanityGenerated.SanityKeyed<Sanity.BlockMediaItem>,
    index: number
  ) => ReactNode
  className?: string
  onDragEnd?: (ind: number) => void
}

export const InfiniteSlider = forwardRef<SliderApi, InfiniteSliderProps>(
  ({ items, className, children, onDragEnd }, ref) => {
    const [measureRef, { width }] = useMeasure()
    const prev = useRef([0, 1])
    const index = useRef(0)
    const isDragging = useRef(false)

    /**
     * If there are only two items in the array then
     * it's still a carousel but the carousel animation
     * won't work as intended, so we double the array
     * as for an infinite carousel you need at least 3 items.
     */
    const actualItems = useMemo(
      () => (items.length === 2 ? [...items, ...items] : items),
      [items]
    )

    const [springs, api] = useSprings(
      actualItems.length,
      (i) => ({
        x:
          actualItems.length === 1
            ? 0
            : (i < actualItems.length - 1 ? i : -1) * width,
        immediate: true,
      }),
      [width]
    )

    const getIndex = useCallback(
      (x, l = actualItems.length) => (x < 0 ? x + l : x) % l,
      [actualItems]
    )

    const getPos = useCallback(
      (i, firstVis, firstVisIdx) => getIndex(i - firstVis + firstVisIdx),
      [getIndex]
    )

    const runSprings = useCallback(
      (
        vx: number,
        down: boolean,
        xDir: number,
        xMove: number,
        distance?: number,
        cancel?: () => void
      ) => {
        // This decides if we move over to the next slide or back to the initial
        if (
          down &&
          distance &&
          (distance > width / 2 || Math.abs(vx) > 1) &&
          cancel
        ) {
          index.current = index.current + (xDir > 0 ? -1 : 1)
          cancel()

          if (onDragEnd) {
            onDragEnd(getIndex(index.current))
          }
        }
        // The actual scrolling value
        const finalY = index.current * width
        // Defines currently visible slides
        const firstVis = getIndex(
          Math.floor(finalY / width) % actualItems.length
        )
        const firstVisIdx = vx < 0 ? actualItems.length - 1 - 1 : 1

        api.start((i) => {
          const position = getPos(i, firstVis, firstVisIdx)
          const prevPosition = getPos(i, prev.current[0], prev.current[1])
          const rank =
            firstVis -
            (finalY < 0 ? actualItems.length : 0) +
            position -
            firstVisIdx +
            (finalY < 0 && firstVis === 0 ? actualItems.length : 0)

          return {
            // x is the position of each of our slides
            x:
              (-finalY % (width * actualItems.length)) +
              width * rank +
              (down ? xMove : 0),
            // this defines if the movement is immediate
            // So when an item is moved from one end to the other we don't
            // see it moving
            immediate:
              vx < 0 ? prevPosition > position : prevPosition < position,
          }
        })

        prev.current = [firstVis, firstVisIdx]
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [width, getIndex, actualItems.length, api, getPos]
    )

    const bind = useDrag(
      ({
        vxvy: [vx],
        down,
        direction: [xDir],
        movement: [xMove],
        cancel,
        distance,
      }) => {
        if (actualItems.length > 1 && vx) {
          isDragging.current = true
          runSprings(-vx, down, xDir, xMove, distance, cancel)
        } else {
          isDragging.current = false
        }
      }
    )

    useImperativeHandle(ref, () => ({
      next: (ind) => {
        if (!isDragging.current) {
          index.current += ind
          runSprings(ind, true, -0, -0)
        }
        return getIndex(index.current)
      },
      prev: (ind) => {
        if (!isDragging.current) {
          index.current += ind
          runSprings(ind, true, -0, -0)
        }

        /**
         * handles when we're moving backwards and go under 0
         */
        if (index.current < 0) {
          index.current = getIndex(index.current)
          return index.current
        }

        return getIndex(index.current)
      },
    }))

    const hasMobile = actualItems[0].hasMobile
    const desktopAspectRatio =
      (actualItems[0].desktop!.dimensions.height /
        actualItems[0].desktop!.dimensions.width) *
      100
    const mobileAspectRatio =
      hasMobile && actualItems[0].mobile
        ? (actualItems[0].mobile?.dimensions.height /
            actualItems[0].mobile?.dimensions.width) *
          100
        : 0

    return (
      <InfiniteContainer
        className={className}
        ref={measureRef}
        {...bind()}
        $mobileAspect={mobileAspectRatio}
        $desktopAspect={desktopAspectRatio}
        $isSlideShow={actualItems.length > 1}
      >
        {springs.map(({ x }, i) => (
          <animated.div key={i} style={{ x }}>
            {children(actualItems[i], i)}
          </animated.div>
        ))}
      </InfiniteContainer>
    )
  }
)

const InfiniteContainer = styled.div<{
  $mobileAspect: number
  $desktopAspect: number
  $isSlideShow: boolean
}>`
  touch-action: none;
  ${(props) =>
    props.$mobileAspect > 0 && props.$isSlideShow
      ? aspectRatio(props.$mobileAspect)
      : props.$isSlideShow
      ? aspectRatio(props.$desktopAspect)
      : ''}

  ${MEDIA_QUERIES.desktopUp} {
    ${(props) => (props.$isSlideShow ? aspectRatio(props.$desktopAspect) : '')}
  }

  ${(props) =>
    props.$isSlideShow
      ? css`
          & > * {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
          }
        `
      : ''}
`
