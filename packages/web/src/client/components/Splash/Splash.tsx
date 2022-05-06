import { useRef, useState } from 'react'
import lottie, { AnimationItem } from 'lottie-web'

import splashAnimation from '../../../../public/lottie/splashAnimation.json'

import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'

import { styled } from 'styles/stitches.config'
import { useReducedMotion } from 'hooks/useReducedMotion'

/**
 * TODO: Would be cool to make this CMS-able
 */
const COLOR_SETS = [
  {
    background: '#EF7E38',
    text: '#F7EDE1',
  },
  {
    background: '#0036AF',
    text: '#F7EDE1',
  },
  {
    background: '#00B56A',
    text: '#F7EDE1',
  },
  {
    background: '#F7EDE1',
    text: '#1A1C1C',
  },
  {
    background: '#F7EDE1',
    text: '#EF7E38',
  },
  {
    background: '#F7EDE1',
    text: '#0036AF',
  },
]

/**
 * For reduced motion instances, we want to show to logo
 * on the background color however, at the animation end
 * the logo collapses back down, this is the frame where
 * the entire logo is visible
 */
const HALFWAY_POINT = 32

export const Splash = () => {
  const [colorSetIndex, setColorIndex] = useState(0)

  const lottieRef = useRef<HTMLDivElement>(null!)
  const animationRef = useRef<AnimationItem | null>(null)

  const reduceMotion = useReducedMotion()

  useIsomorphicLayoutEffect(() => {
    /**
     * Set in the effect so we get a
     * new value per session otherwise
     * the app builds once and thats it,
     * thats the color.
     */
    setColorIndex(Math.floor(Math.random() * COLOR_SETS.length))

    if (!animationRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: lottieRef.current,
        animationData: splashAnimation,
        loop: false,
        autoplay: true,
      })

      animationRef.current.addEventListener('complete', () => {
        lottieRef.current.style.opacity = '0'
      })

      lottieRef.current.style.display = 'block'
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy()
        animationRef.current = null
      }
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    let timeout: ReturnType<typeof window.setTimeout> | null = null
    if (reduceMotion && animationRef.current) {
      animationRef.current.goToAndStop(HALFWAY_POINT, true)

      timeout = setTimeout(() => {
        lottieRef.current.style.opacity = '0'
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [reduceMotion])

  return (
    <SplashContainer
      ref={lottieRef}
      css={{
        background: COLOR_SETS[colorSetIndex].background,
        /*
         * Renamed the lottie layers with classes
         * so text can be selected with .text and
         * background with .background
         */
        '.text path': {
          fill: COLOR_SETS[colorSetIndex].text,
        },
      }}
    ></SplashContainer>
  )
}

const SplashContainer = styled('div', {
  width: '100%',
  height: '100%',
  position: 'fixed',
  zIndex: '$2',
  top: 0,
  left: 0,
  opacity: 1,
  transition: 'opacity 600ms ease-out',
  willChange: 'opacity',
  pointerEvents: 'none',
  display: 'none',

  '@motion': {
    transition: 'none',
  },
})
