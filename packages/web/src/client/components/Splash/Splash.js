import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import lottie from 'lottie-web'

import splashAnimation from '../../../../public/lottie/splashAnimation.json'

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
  const [colorSetIndex] = useState(() =>
    Math.floor(Math.random() * COLOR_SETS.length)
  )

  const lottieRef = useRef()

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieRef.current,
      animationData: splashAnimation,
      loop: false,
      autoplay: true,
    })

    animation.addEventListener('complete', () => {
      lottieRef.current.style.opacity = 0
    })

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

const SplashContainer = styled.div`
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
  /*
  * Renamed the lottie layers with classes
  * so text can be selected with .text and
  * background with .background
  */
  .text path {
    fill: ${(p) => COLOR_SETS[p.$colorSetIndex].text};
  }
`
