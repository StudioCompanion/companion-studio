import React from 'react'

import styled from 'styled-components'

interface CursorProps {
  icon: string
}

export const Cursor = React.forwardRef<HTMLDivElement, CursorProps>(
  ({ icon }, cursorRef) => {
    return <CursorEl ref={cursorRef} $icon={icon} />
  }
)

const CursorEl = styled.div<{ $icon: string }>`
  width: 24px;
  height: 24px;
  position: fixed;
  z-index: 1;
  pointer-events: none;
  background: center / contain no-repeat ${(p) => `url(${p.$icon})`};
  filter: invert(0.5);
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);
`
