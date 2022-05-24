import { useState } from 'react'
import FontFaceObserver from 'fontfaceobserver'

import { useIsomorphicLayoutEffect } from './useIsomorphicEffect'

export const useFontFaceObserver = (fontName: string) => {
  const [hasLoaded, setHasLoaded] = useState(false)

  useIsomorphicLayoutEffect(() => {
    new FontFaceObserver(fontName).load().then(() => setHasLoaded(true))
  }, [fontName])

  return hasLoaded
}
