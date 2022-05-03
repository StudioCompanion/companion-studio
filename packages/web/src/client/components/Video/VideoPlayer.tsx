import { useRef, useEffect } from 'react'
import useIntersectionObserver from '@react-hook/intersection-observer'

import { styled } from 'styles/stitches.config'

export type VideoPlayerProps = {
  src: string
  poster?: string
  isPaused?: boolean
  onAutoplayCallback?: (isPlaying: boolean) => void
  onClick?: () => void
}

export const VideoPlayer = ({
  src,
  poster,
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
    <VideoContainer onClick={handleClick}>
      <Video
        ref={videoRef}
        preload="auto"
        src={src}
        poster={poster}
        loop
        muted
        playsInline
      />
    </VideoContainer>
  )
}

const VideoContainer = styled('div', {
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

const Video = styled('video', {
  maxWidth: '100%',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
})
