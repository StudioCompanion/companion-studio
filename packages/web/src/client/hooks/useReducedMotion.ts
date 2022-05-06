import { useState } from 'react'
import { Globals } from '@react-spring/web'
import { useIsomorphicLayoutEffect } from './useIsomorphicEffect'

export const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null)

  useIsomorphicLayoutEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion)')

    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setReducedMotion(e.matches)

      if (Globals.skipAnimation !== e.matches) {
        Globals.assign({
          skipAnimation: e.matches,
        })
      }
    }

    handleMediaChange(mql)

    mql.addEventListener('change', handleMediaChange)

    return () => {
      mql.removeEventListener('change', handleMediaChange)
    }
  }, [])

  return reducedMotion
}
