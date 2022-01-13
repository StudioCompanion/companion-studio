import { useRef, useEffect, FC } from 'react'
import { useSpring, animated, easings } from '@react-spring/web'
import styled from 'styled-components'

const DURATION = 1600

const FadeUp: FC = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null!)
  const [styles, api] = useSpring(() => ({
    y: 100,
    config: {
      duration: DURATION,
      easing: easings.easeOutCubic,
    },
  }))

  useEffect(() => {
    const entry = ref.current
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        ref.current.classList.add('fade')

        api.start({
          y: 0,
        })

        observer.unobserve(entry)
      }
    })
    observer.observe(entry)
    return () => observer.unobserve(entry)
  }, [api])

  return (
    <FadeInComp ref={ref} style={{ ...styles }}>
      {children}
    </FadeInComp>
  )
}

const FadeInComp = styled(animated.div)`
  opacity: 0;
  transition: opacity ${DURATION}ms cubic-bezier(0.33, 1, 0.68, 1);

  &.fade {
    opacity: 1;
  }
`

export default FadeUp
