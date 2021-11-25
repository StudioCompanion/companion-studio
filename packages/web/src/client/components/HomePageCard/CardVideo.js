import { useRef, useEffect } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import useIntersectionObserver from '@react-hook/intersection-observer'

const CardVideo = ({ video, image, tabletUp }) => {
  const srcRef = useRef()
  const videoRef = useRef()
  const firstUpdate = useRef(true)
  const autoPause = useRef(false)
  const { isIntersecting } = useIntersectionObserver(videoRef)

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      videoRef.current.defaultMuted = true
      if (image) {
        videoRef.current.poster = tabletUp ? image.desktop : image.mobile
      }
      return
    }
  })

  useEffect(() => {
    if (!isIntersecting) {
      autoPause.current = true
      if (firstUpdate.current) return
      if (!videoRef.current.paused) {
        videoRef.current.pause()
      }
    }
    // check for autoPause variable to play only if the video has been automatically paused, not if the user has manually paused it
    if (autoPause.current && isIntersecting && videoRef.current.paused) {
      videoRef.current.play()
      autoPause.current = false
    }
  }, [videoRef, isIntersecting])

  useEffect(() => {
    if (isIntersecting && srcRef.current && videoRef.current.readyState == 0) {
      srcRef.current.src = tabletUp ? video.desktop : video.mobile
      videoRef.current.load()
    }
  })

  return (
    <Video
      autoPlay
      loop
      playsinline
      ref={videoRef}
      muted
      onPause={() => setPaused(true)}
      onPlay={() => setPaused(false)}
    >
      <source ref={srcRef} src="" type="video/mp4"></source>
    </Video>
  )
}

CardVideo.propTypes = {
  image: PropTypes.object,
  video: PropTypes.object,
  tabletUp: PropTypes.bool,
}

export default CardVideo

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
