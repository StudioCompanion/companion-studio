import { useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import useIntersectionObserver from '@react-hook/intersection-observer'

export type VideoPlayerProps = {
  src: string
  poster?: string
  floodParent?: boolean
  isPaused?: boolean
  onAutoplayCallback?: (isPlaying: boolean) => void
  onClick?: () => void
}

export const VideoPlayer = ({
  src,
  poster,
  floodParent = true,
  isPaused,
  onAutoplayCallback,
  onClick,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null!)

  const { isIntersecting } = useIntersectionObserver(videoRef)

  useEffect(() => {
    if (isIntersecting) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }

    if (onAutoplayCallback) {
      onAutoplayCallback(isIntersecting)
    }
  }, [isIntersecting, onAutoplayCallback])

  useEffect(() => {
    if (isPaused) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }, [isPaused])

  /**
   * Only used if the video is MUX which at the
   * time of writing it would only be...
   */
  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    const Hls = require('hls.js')
    let hls: typeof Hls

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // This will run in safari, where HLS is supported natively
      video.src = src
    } else if (Hls.isSupported()) {
      // This will run in all other modern browsers
      hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)
    } else {
      const ERR_MSG =
        'This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API'
      console.error(ERR_MSG)
    }

    return () => {
      if (hls) {
        hls.destroy()
      }
    }
  }, [src])

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <VideoContainer $floodParent={floodParent} onClick={handleClick}>
      <Video
        ref={videoRef}
        preload="auto"
        src={src}
        poster={poster}
        loop
        muted
        playsInline
        $floodParent={floodParent}
      />
    </VideoContainer>
  )
}

const VideoContainer = styled.div<{ $floodParent?: boolean }>`
  overflow: hidden;

  ${(props) =>
    props.$floodParent
      ? css`
          width: 100%;
          height: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `
      : css`
          position: relative;
        `}
`

const Video = styled.video<{ $floodParent?: boolean }>`
  max-width: 100%;
  object-fit: cover;

  ${(props) =>
    props.$floodParent
      ? css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
        `
      : css`
          width: 100%;
        `}
`
