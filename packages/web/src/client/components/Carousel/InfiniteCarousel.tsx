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
} from 'react'
import useMeasure from 'react-use-measure'
import { useDrag } from 'react-use-gesture'
import { useSprings, animated } from '@react-spring/web'
import styled from 'styled-components'

export interface SliderApi {
  next: (ind: number) => number
  prev: (ind: number) => number
}

export interface IImage {
  url: {
    desktop: string
    mobile: string
  }
  alt?: string
}

interface InfiniteSliderProps {
  items: IImage[]
  children: (img: IImage, index: number) => ReactNode
  className?: string
  onDragEnd?: (ind: number) => void
}

export const InfiniteSlider = forwardRef<SliderApi, InfiniteSliderProps>(
  ({ items, className, children, onDragEnd }, ref) => {
    const [measureRef, { width }] = useMeasure()
    const prev = useRef([0, 1])
    const index = useRef(0)
    const isDragging = useRef(false)

    const [springs, api] = useSprings(
      items.length,
      (i) => ({
        x: items.length === 1 ? 0 : (i < items.length - 1 ? i : -1) * width,
        immediate: true,
      }),
      [width]
    )

    const getIndex = useCallback(
      (x, l = items.length) => (x < 0 ? x + l : x) % l,
      [items]
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
        const firstVis = getIndex(Math.floor(finalY / width) % items.length)
        const firstVisIdx = vx < 0 ? items.length - 1 - 1 : 1

        api.start((i) => {
          const position = getPos(i, firstVis, firstVisIdx)
          const prevPosition = getPos(i, prev.current[0], prev.current[1])
          const rank =
            firstVis -
            (finalY < 0 ? items.length : 0) +
            position -
            firstVisIdx +
            (finalY < 0 && firstVis === 0 ? items.length : 0)

          return {
            // x is the position of each of our slides
            x:
              (-finalY % (width * items.length)) +
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
      [width, getIndex, items.length, api, getPos]
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
        if (items.length > 1 && vx) {
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

    return (
      <InfiniteContainer className={className} ref={measureRef} {...bind()}>
        {springs.map(({ x }, i) => (
          <InfiniteSlide key={i} style={{ x }}>
            {children(items[i], i)}
          </InfiniteSlide>
        ))}
      </InfiniteContainer>
    )
  }
)

const InfiniteContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  touch-action: none;
  overflow: hidden;
`

const InfiniteSlide = styled(animated.div)`
  position: absolute;
  height: 100%;
  width: 100%;
`
