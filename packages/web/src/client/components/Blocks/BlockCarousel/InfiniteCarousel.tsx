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

import { Sanity, SanityGenerated } from '@types'

import { styled, AspectRatioProps } from 'styles/stitches.config'

export interface SliderApi {
  /**
   * Advances the Carousel by 1 item
   *
   * @returns {number} the new actual index
   */
  next: () => number
  /**
   * Advances the Carousel by -1 item (so reverses)
   *
   * @returns {number} the new actual index
   */
  prev: () => number
  /**
   * @param {number} newIndex – the desired index the carousel should be showing
   *
   * @returns {number} the new actual index
   */
  advanceToItem: (newIndex: number) => number
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
    const listItemRefs = useRef<HTMLLIElement[]>([])

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

    /**
     * Initial set up of slides to allow infinite cycling.
     *
     * i.e we have 4 items
     * [3][0][1][2]
     */
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

    /**
     * Gets the actual index relative to the max count of items
     *
     * e.g. we have 6 items and the current index is 8,
     * the actual index is therefore 2
     */
    const getIndex = useCallback(
      (index: number, maxLength = actualItems.length) =>
        (index < 0 ? index + maxLength : index) % maxLength,
      [actualItems]
    )

    /**
     * Gets the position of the item based on what
     * the current visible item's index is.
     *
     * So the item could be indexed at 2 in a list
     * of 4 items, but if the current visible item
     * is index 3 then the position should be -1
     */
    const getPos = useCallback(
      (i, firstVis = 0, firstVisIdx = 0) =>
        getIndex(i - firstVis + firstVisIdx),
      [getIndex]
    )

    /**
     * Solves the ranking issue based on the Y position
     * we want to get too, the position of the current
     * item, the index of the item we want to show and
     * the firstVisibleIndex
     */
    const getRank = useCallback(
      (currentY: number, position: number, firstVis: number, firstVisIdx = 1) =>
        firstVis -
        (currentY < 0 ? actualItems.length : 0) +
        position -
        firstVisIdx +
        (currentY < 0 && firstVis === 0 ? actualItems.length : 0),
      [actualItems]
    )

    const runSprings = useCallback(
      (vx: number, down: boolean, xMove = 0, resetSlides = false) => {
        if (resetSlides) {
          // The actual scrolling value
          const currentY = index.current * width
          // Defines currently visible slides
          const firstVis = getIndex(
            Math.floor(currentY / width) % actualItems.length
          )

          api.start((i) => {
            const position = getPos(i, prev.current[0], prev.current[1])
            const rank = getRank(currentY, position, firstVis)

            return {
              // x is the position of each of our slides
              x: (-currentY % (width * actualItems.length)) + width * rank,
              immediate: true,
            }
          })

          index.current += vx
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
          const rank = getRank(finalY, position, firstVis, firstVisIdx)

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
      [actualItems.length, api, getIndex, getPos, getRank, width]
    )

    const handleDrag = (
      vx: number,
      down: boolean,
      xMove = 0,
      xDir = 0,
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

      /**
       * Always keep moving the springs
       */
      runSprings(vx, down, xMove)
    }

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
          handleDrag(-vx, down, xMove, xDir, distance, cancel)
        } else {
          isDragging.current = false
        }
      }
    )

    useImperativeHandle(ref, () => ({
      next: () => {
        if (!isDragging.current) {
          runSprings(1, true, 0, true)
        }
        return getIndex(index.current, items.length)
      },
      prev: () => {
        if (!isDragging.current) {
          runSprings(-1, true, 0, true)
        }

        /**
         * If the index goes below the negative length of the array
         * the function will return an incorrect index thus crashing
         * the app. Therefore, we cheat like so.
         */
        if (index.current < 0) {
          index.current = getIndex(index.current)
          return index.current
        }

        return getIndex(index.current, items.length)
      },
      advanceToItem: (newIndex) => {
        /**
         * Get the _actual_ current index
         */
        const currIndex = getIndex(index.current)

        /**
         * Set up the all the slides so they're in the actual order
         *
         * i.e we have 4 items
         * [0][1][2][3]
         */
        api.start((i) => ({
          x: (-(currIndex * width) % (width * actualItems.length)) + width * i,
          immediate: true,
        }))

        /**
         * Move each slide along equally without displacing the slides
         * as if it were an infinite slider
         */
        api.start((i) => ({
          x: (-(newIndex * width) % (width * actualItems.length)) + width * i,
        }))

        listItemRefs.current[newIndex].focus()

        index.current = newIndex
        prev.current = [newIndex, 1]

        return newIndex
      },
    }))

    const hasMobile = Boolean(actualItems[0].hasMobile)

    return (
      <InfiniteContainer
        className={className}
        ref={measureRef}
        {...bind()}
        css={
          Boolean(actualItems.length > 1)
            ? {
                aspect: hasMobile
                  ? createAspectRatioPropsFromSanityAsset(actualItems[0].mobile)
                  : createAspectRatioPropsFromSanityAsset(
                      actualItems[0].desktop
                    ),

                '@desktopUp': {
                  aspect: createAspectRatioPropsFromSanityAsset(
                    actualItems[0].desktop
                  ),
                },
              }
            : undefined
        }
      >
        {springs.map(({ x }, i) => (
          <animated.li
            ref={(ref) => (listItemRefs.current[i] = ref!)}
            key={i}
            style={{ x }}
            tabIndex={-1}
          >
            {children(actualItems[i], i)}
          </animated.li>
        ))}
      </InfiniteContainer>
    )
  }
)

const createAspectRatioPropsFromSanityAsset = (
  asset?: Sanity.Media
): AspectRatioProps => ({
  w: asset?.dimensions?.width ?? 0,
  h: asset?.dimensions?.height ?? 0,
})

const InfiniteContainer = styled('ul', {
  touchAction: 'pan-y',
})
