import { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useMousePosition } from '../../hooks/useMousePosition'

import styled from 'styled-components'

const CursorOverlay = ({ width, nextSlide, prevSlide }) => {
  const overlayRef = useRef(null)
  const coordinates = useMousePosition(overlayRef)
  const { x } = coordinates

  const [forward, setForward] = useState(true)

  useEffect(() => {
    const halfWidth = Math.floor(width / 2)
    if (x < halfWidth) {
      setForward(false)
    } else if (x >= halfWidth) {
      setForward(true)
    }
  }, [x, width])

  const handleClick = () => {
    if (!forward) {
      prevSlide()
    }
    if (forward) {
      nextSlide()
    }
  }
  return (
    <Overlay
      ref={overlayRef}
      onClick={handleClick}
      $forward={forward}
    ></Overlay>
  )
}
CursorOverlay.propTypes = {
  width: PropTypes.number,
  nextSlide: PropTypes.func,
  prevSlide: PropTypes.func,
}

export default CursorOverlay

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  cursor: ${(p) => (p.$forward ? 'e-resize' : 'w-resize')};
`
