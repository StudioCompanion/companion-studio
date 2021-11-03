import { useState, useEffect } from 'react'

export const useMousePosition = (elementRef) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })
  const handleMouseMove = (e) => {
    setCoordinates({ x: e.offsetX, y: e.offsetY })
  }
  useEffect(() => {
    const element = elementRef.current
    element.addEventListener('mousemove', handleMouseMove)
    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return coordinates
}
