import { useRef, useEffect } from 'react'
import styled from 'styled-components'
import lottie from 'lottie-web'

import logo from '../../../../public/lottie/splashAnimation.json'

export const Logo = () => {
  const logoAnimationRef = useRef(null)
  const animation = useRef(null)

  useEffect(() => {
    animation.current = lottie.loadAnimation({
      container: logoAnimationRef.current,
      animationData: logo,
      loop: false,
      autoplay: false,
    })

    /**
     * Weird hack to stop the animation from playing
     * once and then again during the first call
     * only due to frame duration being different.
     * Ideally we could just do `animation.current.goToAndStop(30, true)`
     */
    animation.current.playSegments([30, 31], true)

    return () => {
      animation.current.destroy()
    }
  }, [])

  const handlePointerEnter = () => {
    animation.current.playSegments([30, 50], false)
  }

  const handlePointerLeave = () => {
    animation.current.playSegments([0, 30], false)
  }

  return (
    <LogoAnimation
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      ref={logoAnimationRef}
    />
  )
}

const LogoAnimation = styled.div`
  width: 100px;
`
