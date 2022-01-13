import { useRef, useState } from 'react'
import styled from 'styled-components'
import lottie from 'lottie-web'

import splashAnimation from '../../../../public/lottie/splashAnimation.json'
import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'

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

const Splash = () => {
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
      $colorSetIndex={colorSetIndex}
    ></SplashContainer>
  )
}

export default Splash

const SplashContainer = styled.div<{ $colorSetIndex: number }>`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  opacity: 1;
  background: ${(props) => COLOR_SETS[props.$colorSetIndex].background};
  transition: opacity 600ms ease-out;
  will-change: opacity;
  pointer-events: none;
  display: none;
  /*
  * Renamed the lottie layers with classes
  * so text can be selected with .text and
  * background with .background
  */
  .text path {
    fill: ${(p) => COLOR_SETS[p.$colorSetIndex].text};
  }
`
