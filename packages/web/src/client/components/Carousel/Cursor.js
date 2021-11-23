import styled from 'styled-components'
import PropTypes from 'prop-types'

const Cursor = ({ xy, showCursor, icon }) => {
  return (
    <CursorEl
      style={{
        left: `${xy[0]}px`,
        top: `${xy[1]}px`,
        display: `${showCursor ? `block` : `none`}`,
      }}
      $icon={icon}
    />
  )
}

Cursor.propTypes = {
  showCursor: PropTypes.bool,
  xy: PropTypes.array,
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
