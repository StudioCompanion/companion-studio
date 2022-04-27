import {
  Dispatch,
  forwardRef,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
} from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import useIntersectionObserver from '@react-hook/intersection-observer'

import { WIDTHS } from 'styles/dimensions'
import {
  RADII,
  DESKTOP,
  MOBILE,
  ASPECT_RATIOS,
  CarouselLayouts,
} from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'

import { Sanity, SanityGenerated } from 'src/types'

import { Media } from 'components/Media/Media'

export interface IVideo {
  isDevice?: boolean
  width: number
  height: number
  caption?: string
  url: {
    mobile: string
    desktop: string
  }
  poster?: {
    mobile: string
    desktop: string
  }
}

interface VideoProps {
  video: Sanity.BlockMediaItem
  layout?: CarouselLayouts
  setPaused: Dispatch<SetStateAction<boolean>>
}

export const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ video, setPaused, layout = CarouselLayouts.FULL }, videoRef) => {
    const isTabletUp = useMediaQuery({
      query: `(min-width: ${WIDTHS.tablet}px)`,
    })
    const firstUpdate = useRef(true)
    const { isIntersecting } = useIntersectionObserver(
      videoRef as MutableRefObject<HTMLVideoElement>
    )
    const autoPause = useRef(false)
    const srcRef = useRef<HTMLSourceElement>(null!)

    // const handlePlay = () => {
    //   setPaused(false)
    // }

    // const handlePause = () => {
    //   setPaused(true)
    // }

    // useEffect(() => {
    //   if (!isIntersecting) {
    //     autoPause.current = true
    //     if (firstUpdate.current) return
    //     if (!(videoRef as MutableRefObject<HTMLVideoElement>).current.paused) {
    //       ;(videoRef as MutableRefObject<HTMLVideoElement>).current.pause()
    //     }
    //   }
    //   // check for autoPause variable to play only if the video has been automatically paused, not if the user has manually paused it
    //   if (
    //     autoPause.current &&
    //     isIntersecting &&
    //     (videoRef as MutableRefObject<HTMLVideoElement>).current.paused
    //   ) {
    //     ;(videoRef as MutableRefObject<HTMLVideoElement>).current.play()
    //     autoPause.current = false
    //   }
    // }, [videoRef, isIntersecting])

    // const handleVideoClick = () => {
    //   if ((videoRef as MutableRefObject<HTMLVideoElement>).current.paused) {
    //     ;(videoRef as MutableRefObject<HTMLVideoElement>).current.play()
    //   } else {
    //     ;(videoRef as MutableRefObject<HTMLVideoElement>).current.pause()
    //   }
    // }

    return (
      <VideoFlex>
        <VideoWrapper
          $mobileWidth={calcWidth(MOBILE, layout, video.mobile?.dimensions)}
          $desktopWidth={calcWidth(DESKTOP, layout, video.desktop?.dimensions)}
        >
          {!isTabletUp && video.mobile?.asset ? (
            <VideoAspect
              $aspectRatio={
                video.mobile.dimensions.height / video.mobile.dimensions.width
              }
            >
              <VideoItem {...video.mobile} />
            </VideoAspect>
          ) : video.desktop?.asset ? (
            <VideoAspect
              $aspectRatio={
                video.desktop.dimensions.height / video.desktop.dimensions.width
              }
            >
              <VideoItem {...video.desktop} />
            </VideoAspect>
          ) : null}
        </VideoWrapper>
      </VideoFlex>
    )
  }
)

const calcWidth = (
  size: keyof typeof ASPECT_RATIOS['carousel']['full'],
  type: CarouselLayouts,
  dimensions?: Omit<SanityGenerated.SanityImageDimensions, '_type'>
) => {
  if (!dimensions) {
    return '100%'
  }

  const aspect = dimensions.height / dimensions.width
  //Is the video portrait (height > width)?
  if (aspect > 1) {
    /**
     * If it is portrait, use the video's
     * aspect ratio calculate the width at
     * which the height of the video will
     * be [widthFactor]% of the height of
     * the container
     */
    const invertedAspect = 1 / aspect

    const aspectSize = parseFloat(ASPECT_RATIOS.carousel[type][size])

    return `${((invertedAspect * aspectSize) / 100) * 88}%`
  } else {
    /**
     * If it is landscape, set the width
     * of the video to [widthFactor]% of
     * the container
     */
    return `88%`
  }
}

const VideoFlex = styled.div`
  max-height: 100%;
  max-width: 100%;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const VideoWrapper = styled.div<{
  $mobileWidth: string
  $desktopWidth: string
}>`
  position: relative;
  width: ${(p) => p.$mobileWidth};

  ${MEDIA_QUERIES.tabletUp} {
    width: ${(p) => p.$desktopWidth};
  }
`

const VideoAspect = styled.div<{ $aspectRatio: number }>`
  position: relative;
  padding-top: ${(p) => `${p.$aspectRatio * 100}%`};
`

const VideoItem = styled(Media)`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  width: auto;
  height: 100%;
  border-radius: ${RADII.video_mobile}px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  ${MEDIA_QUERIES.tabletUp} {
    border-radius: ${RADII.video_desktop}px;
  }
`
