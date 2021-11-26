import React, { useEffect, useRef } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import useIntersectionObserver from '@react-hook/intersection-observer'

import { WIDTHS } from '../../styles/dimensions'
import { RADII, DESKTOP, MOBILE, ASPECT_RATIOS } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getAspectRatio } from 'helpers/media'

const Video = React.forwardRef(
  ({ video, layout, aspect, setPaused }, videoRef) => {
    const tabletUp = useMediaQuery({ query: `(min-width: ${WIDTHS.tablet}px)` })
    const firstUpdate = useRef(true)
    const { isIntersecting } = useIntersectionObserver(videoRef)
    const autoPause = useRef(false)
    const srcRef = useRef()

    const handlePlay = () => {
      setPaused(false)
    }

    const handlePause = () => {
      setPaused(true)
    }

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
    }, [tabletUp, video.poster])

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

    const handleVideoClick = () => {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }

    useEffect(() => {
      if (
        isIntersecting &&
        srcRef.current &&
        videoRef.current.readyState == 0
      ) {
        srcRef.current.src = tabletUp ? video.url.desktop : video.url.mobile
        videoRef.current.load()
      }
    }, [isIntersecting, tabletUp, video.url.desktop, video.url.mobile])

    return (
      <VideoContainer onClick={handleVideoClick}>
        <VideoWrapper $mobileWidth={mobileWidth} $desktopWidth={desktopWidth}>
          <VideoInner $videoPadding={videoPadding}>
            <VideoItem
              autoPlay
              loop
              playsinline
              ref={videoRef}
              muted
              onPause={handlePause}
              onPlay={handlePlay}
            >
              <source ref={srcRef} src="" type="video/mp4"></source>
            </VideoItem>
          </VideoInner>
        </VideoWrapper>
      </VideoContainer>
    )
  }
)

Video.propTypes = {
  video: PropTypes.object,
  layout: PropTypes.string,
  aspect: PropTypes.object,
  setPaused: PropTypes.func,
}

export default Video

const VideoContainer = styled.div`
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
