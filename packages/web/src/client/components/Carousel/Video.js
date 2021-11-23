import { useState, useEffect, useRef } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import useIntersectionObserver from '@react-hook/intersection-observer'

import { WIDTHS } from '../../styles/dimensions'
import { RADII, DESKTOP, MOBILE, ASPECT_RATIOS } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getAspectRatio } from 'helpers/media'

const Video = ({ video, layout, aspect }) => {
  const tabletUp = useMediaQuery({ query: `(min-width: ${WIDTHS.tablet}px)` })
  const videoRef = useRef()
  const firstUpdate = useRef(true)
  const { isIntersecting } = useIntersectionObserver(videoRef)
  const [playing, setPlaying] = useState()
  const [isLoaded, setLoaded] = useState(false)
  const [xy, setXY] = useState(0, 0)
  const autoPause = useRef(false)

  const widthFactor = 88
  const videoAspectRatio = Math.round(video.height / video.width)
  const calcWidth = (size) =>
    //Is the video portrait (height > width)?
    videoAspectRatio > 1
      ? //If it is portrait, use the video's aspect ratio calculate the width at which the height of the video will be [widthFactor]% of the height of the container
        `${
          (((1 / videoAspectRatio) *
            parseFloat(getAspectRatio(layout, size, aspect))) /
            100) *
          widthFactor
        }%`
      : //If it is landscape, set the width of the video to [widthFactor]% of the container
        `${widthFactor}%`

  const mobileWidth = calcWidth(MOBILE)
  const desktopWidth = calcWidth(DESKTOP)

  const calcPadding = () =>
    //If a with and height are provided for the video
    video.width && video.height
      ? //Set the padding to the aspect ratio
        `${videoAspectRatio * 100}%`
      : //Otherwise set the padding to 16/9
        ASPECT_RATIOS.video.widescreen

  const videoPadding = calcPadding()

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      videoRef.current.defaultMuted = true
      if (video.poster) {
        videoRef.current.poster = tabletUp
          ? video.poster.desktop
          : video.poster.mobile
      }
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
    <VideoContainer $playing={playing} onClick={handleVideoClick}>
      <VideoWrapper $mobileWidth={mobileWidth} $desktopWidth={desktopWidth}>
        <VideoInner $videoPadding={videoPadding}>
          <VideoItem autoPlay loop playsinline ref={videoRef} muted>
            {isLoaded && (
              <source
                src={tabletUp ? video.url.desktop : video.url.mobile}
                type="video/mp4"
              ></source>
            )}
          </VideoItem>
        </VideoInner>
      </VideoWrapper>
    </VideoContainer>
  )
}

Video.propTypes = {
  video: PropTypes.object,
  layout: PropTypes.string,
  aspect: PropTypes.object,
}

export default Video

const VideoContainer = styled.div`
  cursor: none;
  height: 100%;
  display: flex;
  justify-content: center;
`

const VideoItem = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${RADII.video_mobile}px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
  ${MEDIA_QUERIES.tabletUp} {
    border-radius: ${RADII.video_desktop}px;
  }
`

const VideoWrapper = styled.div`
  width: ${(p) => p.$mobileWidth};
  ${MEDIA_QUERIES.tabletUp} {
    width: ${(p) => p.$desktopWidth};
  }
  position: relative;
  height: 100%;
`
const VideoInner = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  padding-top: ${(p) => p.$videoPadding};
`
const Cursor = styled.div`
  width: 24px;
  height: 24px;
  position: fixed;
  z-index: 1;
  top: -24px;
  left: -24px;
  background: center / contain no-repeat
    ${(p) =>
      p.$playing
        ? `url('/icons/cursor_pause.svg')`
        : `url('/icons/cursor_play.svg')`};
  filter: invert(0.5);
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);
`
