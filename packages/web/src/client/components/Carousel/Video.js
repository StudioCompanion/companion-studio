import { useState, useEffect, useRef } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const Video = ({ url }) => {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef()

  useEffect(() => {
    playing && videoRef.current.play()
    !playing && videoRef.current.pause()
  }, [playing])
  return (
    <VideoContainer>
      <VideoItem
        autoPlay
        loop
        playsinline
        ref={videoRef}
        onClick={() => setPlaying(!playing)}
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
  height: 100%;
`

const VideoItem = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
