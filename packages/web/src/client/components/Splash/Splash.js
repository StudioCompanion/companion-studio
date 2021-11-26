import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import lottie from 'lottie-web'

import splashAnimation from '../../../../public/lottie/splashAnimation.json'

const colorways = [
  {
    background: '#f5ebdf',
    text: '#3ca464',
  },
  {
    background: '#e27940',
    text: '#efe9de',
  },
  {
    background: '#f5ebdf',
    text: '#0535a4',
  },
]

const Splash = () => {
  const [colors, setColors] = useState(0)
  const lottieRef = useRef()

  useEffect(() => {
    const handleLoopComplete = () => {
      if (colors === colorways.length - 1) {
        setColors(0)
      } else {
        setColors(colors + 1)
      }
    }
    const animation = lottie.loadAnimation({
      container: lottieRef.current,
      animationData: splashAnimation,
      loop: true,
    })
    animation.onLoopComplete = handleLoopComplete
  }, [])
  return <SplashContainer ref={lottieRef} $colors={colors}></SplashContainer>
}

export default Splash

const SplashContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: white;

  //I renamed the lottie layers with classes so text can be selected with .text and background with .background
  .text path {
    fill: ${(p) => colorways[p.$colors].text};
  }
  .background path {
    fill: ${(p) => colorways[p.$colors].background};
  }
`
