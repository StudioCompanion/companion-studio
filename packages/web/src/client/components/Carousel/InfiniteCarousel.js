/**
 * Pretty much taken from https://codesandbox.io/s/infinite-slideshow-fu8wc?file=/src/Slider.js
 * Via https://ironeko.com/posts/ininite-carousel-with-react-spring-how-to
 * So thanks to Leo & David.
 */

import { useRef, useCallback, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import useMeasure from 'react-use-measure'
import { useDrag } from '@use-gesture/react'
import { useSprings, animated } from '@react-spring/web'
import styled from 'styled-components'

export const InfiniteSlider = forwardRef(
  ({ items, className, children }, ref) => {
    const [measureRef, { width }] = useMeasure()
    const prev = useRef([0, 1])
    const index = useRef(0)

    const [springs, api] = useSprings(
      items.length,
      (i) => ({
        x: items.length === 1 ? 0 : (i < items.length - 1 ? i : -1) * width,
        immediate: true,
      }),
      [width]
    )

    /**
     *
     * @param {number} x – current index
     * @param {number} l – length of array
     */
    const getIndex = useCallback(
      (x, l = items.length) => (x < 0 ? x + l : x) % l,
      [items]
    )

    const getPos = useCallback(
      (i, firstVis, firstVisIdx) => getIndex(i - firstVis + firstVisIdx),
      [getIndex]
    )

    /**
     *
     * @param {number} vx
     * @param {boolean} down
     * @param {number} xDir
     * @param {number} xMove
     */
    const runSprings = useCallback(
      (vx, down, xDir, xMove) => {
        // This decides if we move over to the next slide or back to the initial
        if (!down) {
          index.current +=
            ((-xMove + (width + xMove)) / width) * (xDir > 0 ? -1 : 1)
        }
        // The actual scrolling value
        const finalY = index.current * width
        // Defines currently visible slides
        const firstVis = getIndex(Math.floor(finalY / width) % items.length)
        const firstVisIdx = vx < 0 ? items.length - 2 : 1

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
            x:
              (-finalY % (width * items.length)) +
              width * rank +
              (down ? xMove : 0),
            immediate:
              vx < 0 ? prevPosition > position : prevPosition < position,
          }
        })
        prev.current = [firstVis, firstVisIdx]
      },
      [width, getIndex, items.length, api, getPos]
    )

    const bind = useDrag(
      ({ velocity: [vx], down, direction: [xDir], movement: [xMove] }) => {
        items.length > 1 && vx && runSprings(-vx, down, xDir, xMove)
      }
    )

    useImperativeHandle(ref, () => ({
      next: (ind) => {
        index.current += ind
        runSprings(ind, true, -0, -0)
        return getIndex(index.current)
      },
      prev: (ind) => {
        index.current += ind
        runSprings(ind, true, -0, -0)

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

InfiniteSlider.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
}

const InfiniteContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  touch-action: none;
`

const InfiniteSlide = styled(animated.div)`
  position: absolute;
  height: 100%;
  width: 100%;
`
