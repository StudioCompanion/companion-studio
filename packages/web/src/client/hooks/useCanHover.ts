import { useState } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicEffect'

export const useCanHover = () => {
  const [canHover, setCanHover] = useState(false)

  useIsomorphicLayoutEffect(() => {
    const mql = window.matchMedia('(hover: hover')

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setCanHover(e.matches)
    }

    setCanHover(mql.matches)

    mql.addEventListener('change', handleMediaChange)

    return () => {
      mql.removeEventListener('change', handleMediaChange)
    }
  }, [])

  return canHover
}
