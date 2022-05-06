import React from 'react'

import { styled } from 'styles/stitches.config'

interface CursorProps {
  icon: string
}

export const Cursor = React.forwardRef<HTMLDivElement, CursorProps>(
  ({ icon }, cursorRef) => {
    return (
      <CursorEl
        ref={cursorRef}
        aria-hidden="true"
        css={{
          background: `center / contain no-repeat url(${icon})`,
        }}
      />
    )
  }
)

const CursorEl = styled('div', {
  width: 24,
  height: 24,
  position: 'fixed',
  zIndex: '$1',
  pointerEvents: 'none',
  filter: 'invert(0.5)',
  mixBlendMode: 'difference',
  transform: 'translate(-50%,-50%)',
})
