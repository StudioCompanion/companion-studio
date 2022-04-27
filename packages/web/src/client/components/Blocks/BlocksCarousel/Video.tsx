import { Dispatch, SetStateAction, useCallback } from 'react'
import styled from 'styled-components'

import { MEDIA_QUERIES } from 'styles/mediaQueries'

import { Sanity } from 'src/types'

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
          $isMobile={hasMobile}
          onClick={handleVideoClick}
          onAutoplayCallback={handleAutoplayCallback}
          floodParent
        />
      ) : null}
      {video.desktop?.asset ? (
        <VideoItem
          {...video.desktop}
          isPaused={isPaused}
          $hasMobile={hasMobile}
          onClick={handleVideoClick}
          onAutoplayCallback={handleAutoplayCallback}
          floodParent
        />
      ) : null}
    </>
  )
}

const VideoItem = styled(Media)<{ $hasMobile?: boolean; $isMobile?: boolean }>`
  display: ${(props) => (props.$hasMobile ? 'none' : 'block')};

  ${MEDIA_QUERIES.desktopUp} {
    display: ${(props) => (props.$isMobile ? 'none' : 'block')};
  }
`
