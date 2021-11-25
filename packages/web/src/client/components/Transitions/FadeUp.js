import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated, SpringRef, config } from '@react-spring/web'

const FadeUp = ({ children }) => {
  const ref = useRef()
  const api = SpringRef()
  const fade = useSpring({
    ref: api,
    opacity: 0,
    y: 200,
    config: config.molasses,
  })

  useEffect(() => {
    const entry = ref.current
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        api.start({
          opacity: 1,
          y: 0,
        })
        observer.unobserve(entry)
      }
    })
    observer.observe(entry)
    return () => observer.unobserve(entry)
  }, [api])

  return (
    <animated.div ref={ref} style={fade}>
      {children}
    </animated.div>
  )
}

FadeUp.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FadeUp
