import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

const Cursor = React.forwardRef(({ showCursor, icon }, cursorRef) => {
  return (
    <CursorEl
      ref={cursorRef}
      style={{
        display: `${showCursor ? `block` : `none`}`,
      }}
      $icon={icon}
    />
  )
})

Cursor.propTypes = {
  showCursor: PropTypes.bool,
  icon: PropTypes.string,
}

export default Cursor

const CursorEl = styled.div`
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
