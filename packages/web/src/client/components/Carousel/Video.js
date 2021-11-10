import { useState, useEffect, useRef } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import useIntersectionObserver from '@react-hook/intersection-observer'

import { WIDTHS } from '../../styles/dimensions'

const Video = ({ video }) => {
  const tabletUp = useMediaQuery({ query: `(min-width: ${WIDTHS.tablet}px)` })
  const videoRef = useRef()
  const firstUpdate = useRef(true)
  const { isIntersecting } = useIntersectionObserver(videoRef)
  const [playing, setPlaying] = useState()
  const [isLoaded, setLoaded] = useState(false)
  const autoPause = useRef(false)

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      videoRef.current.defaultMuted = true
      return
    }
  })
  useEffect(() => {
    if (firstUpdate.current) return
    playing && videoRef.current.play()
    !playing && videoRef.current.pause()
  }, [playing])

  useEffect(() => {
    if (isIntersecting && !isLoaded) {
      setLoaded(true)
    }
  }, [isLoaded, isIntersecting])

  useEffect(() => {
    if (!isIntersecting) {
      autoPause.current = true
      if (firstUpdate.current) return
      if (playing) {
        setPlaying(false)
      }
    }
    // check for autoPause variable to play only if the video has been automatically paused, not if the user has manually paused it
    if (autoPause.current && isIntersecting && !playing) {
      setPlaying(true)
      autoPause.current = false
    }
  }, [playing, isIntersecting])

  const handleVideoClick = () => {
    setPlaying(!playing)
  }

  return (
    <VideoContainer $playing={playing}>
      <VideoItem
        autoPlay
        loop
        playsinline
        ref={videoRef}
        onClick={handleVideoClick}
        muted
        poster={tabletUp ? video.poster.desktop : video.poster.mobile}
      >
        {isLoaded && (
          <source
            src={tabletUp ? video.url.desktop : video.url.mobile}
            type="video/mp4"
          ></source>
        )}
      </VideoItem>
    </VideoContainer>
  )
}

Video.propTypes = {
  video: PropTypes.object,
}

export default Video

const VideoContainer = styled.div`
  cursor: ${(p) =>
    p.$playing
      ? `url(/icons/cursor_pause.svg), auto;`
      : `url(/icons/cursor_play.svg), auto;`};
  height: 100%;
`

const VideoItem = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
