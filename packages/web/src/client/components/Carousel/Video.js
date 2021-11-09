import { useState, useEffect, useRef } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const Video = ({ url }) => {
  const [playing, setPlaying] = useState(true)
  const videoRef = useRef()
  const firstUpdate = useRef(true)
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
        <source src={url} type="video/mp4"></source>
      </VideoItem>
    </VideoContainer>
  )
}

Video.propTypes = {
  url: PropTypes.string,
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
