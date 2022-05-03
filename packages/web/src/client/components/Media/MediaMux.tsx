import { Sanity } from '@types'

import { VideoPlayer, VideoPlayerProps } from '../Video/VideoPlayer'

export type MediaMuxProps = Sanity.Mux &
  Omit<VideoPlayerProps, 'src' | 'poster'>

export const MediaMux = ({ asset, ...restProps }: MediaMuxProps) => {
  const { playbackId, thumbTime } = asset

  if (!playbackId) {
    console.warn('No playbackId passed to MediaMux')
    return null
  }

  const src = `https://stream.mux.com/${playbackId}.m3u8`

  const poster = getPosterSrc(playbackId, {
    time: thumbTime ?? 1,
    fitMode: 'preserve',
  })

  return <VideoPlayer src={src} poster={poster} {...restProps} />
}

export default function getPosterSrc(
  playbackId: string,
  options: {
    width?: number
    height?: number
    time?: number
    fitMode?: string
  } = {}
) {
  const width = options.width || 640
  const height = options.height || ''
  const time = options.time || 1
  const fitMode =
    typeof options.fitMode === 'undefined' ? 'smartcrop' : options.fitMode
  let url = `https://image.mux.com/${playbackId}/thumbnail.png?width=${width}&fit_mode=${fitMode}&time=${time}`
  if (options.height) {
    url += `&height=${height}`
  }
  return url
}
