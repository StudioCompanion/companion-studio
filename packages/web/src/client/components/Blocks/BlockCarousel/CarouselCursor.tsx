import React from 'react'
import { animated, useSpring } from '@react-spring/web'

import { useCanHover } from 'hooks/useCanHover'

import { styled } from 'styles/stitches.config'

interface CarouselCursorProps {
  direction: CursorDirection
  isVideo: boolean
  isPaused: boolean
  isVisible?: boolean
}

enum CursorStates {
  Play = 'play',
  Pause = 'pause',
  LeftArrow = 'left_arrow',
  RightArrow = 'right_arrow',
}

export enum CursorDirection {
  Forwards = 'forwards',
  Backwards = 'backwards',
}

export const CarouselCursor = React.forwardRef<
  HTMLDivElement,
  CarouselCursorProps
>(({ direction, isVideo, isPaused, isVisible = false }, cursorRef) => {
  const canHover = useCanHover()

  const style = useSpring({
    scale: isVisible ? 1 : 0,
    x: '-50%',
    y: '-50%',
    config: {
      friction: 30,
      tension: 180,
      mass: 0.1,
    },
  })

  if (!canHover) {
    return null
  }

  const icon = getIconState(direction, isVideo, isPaused)

  return (
    <CursorEl
      ref={cursorRef}
      aria-hidden="true"
      style={{
        ...style,
        background: `center / contain no-repeat url(/icons/cursor_${icon}.svg)`,
      }}
    />
  )
})

const getIconState = (
  direction: CursorDirection,
  isVideo: boolean,
  isPaused: boolean
): CursorStates => {
  if (isVideo && isPaused) {
    return CursorStates.Play
  } else if (isVideo && !isPaused) {
    return CursorStates.Pause
  } else if (!isVideo && direction === CursorDirection.Forwards) {
    return CursorStates.RightArrow
  } else {
    return CursorStates.LeftArrow
  }
}

const CursorEl = styled(animated.div, {
  display: 'block',
  width: 40,
  height: 40,
  position: 'absolute',
  zIndex: '$1',
  pointerEvents: 'none',
})
