import { useRef, useEffect, useState } from 'react'
import useIntersectionObserver from '@react-hook/intersection-observer'

import { styled } from 'styles/stitches.config'

import { useReducedMotion } from 'hooks/useReducedMotion'

import { VideoLoader } from './VideoLoader'
import { VideoControls } from './VideoControls'
import { animated, useTransition } from '@react-spring/web'

export type VideoPlayerProps = {
  src: string
  poster?: string
  isPaused?: boolean
  onAutoplayCallback?: (isPlaying: boolean) => void
  onClick?: (isPaused: boolean) => void
  controls?: boolean
}

export const VideoPlayer = ({
  src,
  poster,
  isPaused,
  onAutoplayCallback,
  onClick,
  controls = true,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null!)
  const [isLoading, setIsLoading] = useState(true)

  const { isIntersecting } = useIntersectionObserver(videoRef)

  const reduceMotion = useReducedMotion()

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
      videoRef.current.play().catch((e) => {
        console.error('Cant autoplay because:', e)
      })
    }

    if (onAutoplayCallback) {
      onAutoplayCallback(!videoRef.current.paused)
    }
  }, [reduceMotion, isIntersecting, onAutoplayCallback])

  const qualitiesRef = useRef<number[]>([])

  /**
   * Only used if the video is MUX which at the
   * time of writing it would only be...
   */
  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    const Hls = require('hls.js')
    let hls: import('hls.js').default

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // This will run in safari, where HLS is supported natively
      video.src = src
    } else if (Hls.isSupported()) {
      // This will run in all other modern browsers
      hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // Transform available levels into an array of integers (height values).
        qualitiesRef.current = hls.levels.map((l) => l.height)
      })

      hls.on(
        Hls.Events.LEVEL_SWITCHED,
        (_: unknown, data: { level: number }) => {
          const qualityLimit = qualitiesRef.current.length - 1

          if (data.level !== qualityLimit) {
            setIsLoading(true)
          } else {
            setIsLoading(false)
          }
        }
      )
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
    const video = videoRef.current

    if (isPaused) {
      /**
       * Play is async so catch just incase
       * and return if its paused or not
       * to keep ui in sync with video element
       */
      video
        .play()
        .then(() => {
          if (onClick) {
            onClick(false)
          }
        })
        .catch((e) => {
          console.error('Failed to play because:', e)
          if (onClick) {
            onClick(true)
          }
        })
    } else {
      video.pause()

      if (onClick) {
        onClick(true)
      }
    }
  }

  const transitions = useTransition(isLoading, {
    from: {
      scale: 0,
    },
    enter: {
      scale: 1,
    },
    leave: {
      scale: 0,
    },
  })

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
        id={src}
      />
      {transitions((style, loading) =>
        loading ? (
          <Loader style={style}>
            <VideoLoader />
          </Loader>
        ) : null
      )}
      {/* {isLoading ? (
        <Loader>
          <VideoLoader />
        </Loader>
      ) : null} */}
      {controls ? <Controls isPaused={Boolean(isPaused)} src={src} /> : null}
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
  position: 'relative',
})

const Loader = styled(animated.div, {
  position: 'absolute',
  top: 8,
  right: 8,
  transform: `translate3d(0,0,0)`,
  mixBlendMode: 'difference',

  '@tabletUp': {
    top: 16,
    right: 16,
  },
})

const Controls = styled(VideoControls, {
  position: 'absolute',
  bottom: 0,
  right: 0,

  '@tabletUp': {
    bottom: 16,
    right: 16,
  },
})
