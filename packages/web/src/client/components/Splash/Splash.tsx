import { useRef, useState } from 'react'
import lottie from 'lottie-web'

import splashAnimation from '../../../../public/lottie/splashAnimation.json'

import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'

import { styled } from 'styles/stitches.config'

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

export const Splash = () => {
  const [colorSetIndex, setColorIndex] = useState(0)

  const lottieRef = useRef<HTMLDivElement>(null!)

  useIsomorphicLayoutEffect(() => {
    /**
     * Set in the effect so we get a
     * new value per session otherwise
     * the app builds once and thats it,
     * thats the color.
     */
    setColorIndex(Math.floor(Math.random() * COLOR_SETS.length))

    const animation = lottie.loadAnimation({
      container: lottieRef.current,
      animationData: splashAnimation,
      loop: false,
      autoplay: true,
    })

    animation.addEventListener('complete', () => {
      lottieRef.current.style.opacity = '0'
    })

    lottieRef.current.style.display = 'block'

    return () => {
      animation.destroy()
    }
  }, [])

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
})
