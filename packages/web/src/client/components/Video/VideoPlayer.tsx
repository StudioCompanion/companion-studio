import { useRef, useEffect } from 'react'
import useIntersectionObserver from '@react-hook/intersection-observer'

import { styled } from 'styles/stitches.config'
import { useReducedMotion } from 'hooks/useReducedMotion'
import { useCanHover } from 'hooks/useCanHover'

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
  // const [focused, setFocused] = useState<boolean>(false)

  const { isIntersecting } = useIntersectionObserver(videoRef)

  const reduceMotion = useReducedMotion()

  /**
   * Play/Pause handling
   */
  useEffect(() => {
    /**
     * If it's not paused and intersecting,
     * play the video
     */
    if (!isPaused && isIntersecting) {
      videoRef.current.play()
    } else if (isPaused) {
      /**
       * Else if it pause, pause it
       */
      videoRef.current.pause()
    }
  }, [isIntersecting, isPaused])

  /**
   * Autoplay effect handling
   */
  useEffect(() => {
    /**
     * If there is reduced motion so we make sure it doesnt autoplay
     */
    if (reduceMotion || !isIntersecting) {
      videoRef.current.pause()
    } else if (isIntersecting) {
      /**
       * Otherwise outplay in the frame
       */
      videoRef.current.play()
    }

    if (onAutoplayCallback) {
      onAutoplayCallback(!videoRef.current.paused)
    }
  }, [reduceMotion, isIntersecting, onAutoplayCallback])

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

  const canHover = useCanHover()

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
      <Control canHover={canHover ? 'true' : 'false'}>
        <span>
          <img
            src={
              isPaused ? '/icons/cursor_play.svg' : '/icons/cursor_pause.svg'
            }
          />
        </span>
      </Control>
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

const Control = styled('button', {
  bottom: '16px',
  right: '16px',
  background: 'white',
  width: '40px',
  height: '40px',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  border: 'none',
  variants: {
    canHover: {
      true: {
        '&:hover': {
          background: 'lightGrey',
          cursor: 'pointer',
        },
      },
      false: {},
    },
  },

  span: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
