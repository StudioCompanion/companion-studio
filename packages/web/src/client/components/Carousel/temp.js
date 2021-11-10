import { useState, useEffect, useRef } from 'react'

import useIntersectionObserver from '@react-hook/intersection-observer'
import { useMediaQuery } from 'react-responsive'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { WIDTHS } from '../../styles/dimensions'

const Video = ({ url, placeholder }) => {
  const [playing, setPlaying] = useState()
  const videoRef = useRef()
  const firstUpdate = useRef(true)

  const autoPause = useRef(false)
  const { isIntersecting } = useIntersectionObserver(videoRef)

  useEffect(() => {
    if (!isIntersecting) {
      autoPause.current = true
      if (playing) {
        setPlaying(false)
      }
    }
    if (firstUpdate.current) return
    if (autoPause.current === true && isIntersecting && !playing) {
      setPlaying(true)
      autoPause.current = false
    }
  }, [playing, isIntersecting])

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

  const handleVideoClick = () => {
    setPlaying(!playing)
  }
  const tabletUp = useMediaQuery({ query: `(min-width: ${WIDTHS.tablet}px)` })
  return (
    <VideoContainer $playing={playing}>
      <VideoItem
        autoPlay
        loop
        playsinline
        ref={videoRef}
        onClick={handleVideoClick}
        muted
      >
        <source
          src={tabletUp ? url.desktop : url.mobile}
          type="video/mp4"
        ></source>
      </VideoItem>
    </VideoContainer>
  )
}

Video.propTypes = {
  url: PropTypes.object,
  placeholder: PropTypes.object,
}

export default Video

const VideoContainer = styled.div`
  cursor: ${(p) =>
    p.$playing
      ? `url(/cursor_pause.svg), auto;`
      : `url(cursor_play.svg), auto;`};
  height: 100%;
`

const VideoItem = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
