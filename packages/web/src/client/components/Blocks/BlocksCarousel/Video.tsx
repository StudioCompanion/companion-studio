import { Dispatch, SetStateAction, useCallback } from 'react'

import { Sanity } from '@types'

import { styled } from 'styles/stitches.config'

import { Media } from 'components/Media/Media'

interface VideoProps {
  video: Sanity.BlockMediaItem
  setPaused: Dispatch<SetStateAction<boolean>>
  isPaused?: boolean
}

export const Video = ({ video, setPaused, isPaused }: VideoProps) => {
  const handleVideoClick = () => {
    setPaused((s) => !s)
  }

  const handleAutoplayCallback = useCallback((isPlaying: boolean) => {
    setPaused(!isPlaying)
  }, [])

  const hasMobile = Boolean(video.mobile?.asset)

  return (
    <>
      {video.mobile?.asset ? (
        <VideoItem
          {...video.mobile}
          isPaused={isPaused}
          isMobile={hasMobile}
          onClick={handleVideoClick}
          onAutoplayCallback={handleAutoplayCallback}
        />
      ) : null}
      {video.desktop?.asset ? (
        <VideoItem
          {...video.desktop}
          isPaused={isPaused}
          hasMobile={hasMobile}
          onClick={handleVideoClick}
          onAutoplayCallback={handleAutoplayCallback}
        />
      ) : null}
    </>
  )
}

const VideoItem = styled(Media, {
  variants: {
    hasMobile: {
      true: {
        display: 'none',
      },
    },
    isMobile: {
      true: {
        '@desktopUp': {
          display: 'none',
        },
      },
    },
  },
})
