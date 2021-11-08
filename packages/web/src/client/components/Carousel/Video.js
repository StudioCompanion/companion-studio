import { useState, useEffect, useRef } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import play_cursor from '../../../public/cursor_play.svg'
import pause_cursor from '../../../public/cursor_pause.svg'

const Video = ({ url }) => {
  const [playing, setPlaying] = useState(true)
  const videoRef = useRef()
  useEffect(() => {})
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
  return (
    <VideoContainer $playing={playing}>
      <VideoItem
        autoPlay
        loop
        playsinline
        ref={videoRef}
        onClick={() => setPlaying(!playing)}
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
    p.$playing ? `url(${pause_cursor}), auto;` : `url(${play_cursor}), auto;`};
  height: 100%;
`

const VideoItem = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
