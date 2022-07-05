import { styled } from 'styles/stitches.config'
import { Sanity } from '@types'

import { SizesArray } from '../../helpers/media'

import { MediaImage } from './MediaImage'
import { MediaMux, MediaMuxProps } from './MediaMux'
import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'
import { useRef } from 'react'

type SharedMediaProps = Pick<
  MediaMuxProps,
  'isPaused' | 'onAutoplayCallback' | 'onClick'
> & {
  className?: string
  sizes?: SizesArray
  objectFit?: 'cover' | 'contain'
  controls?: boolean
}

export type MediaProps =
  | (Sanity.Image & SharedMediaProps)
  | (Sanity.Mux & SharedMediaProps)

export const Media = (props: MediaProps) => {
  const containerRef = useRef<HTMLDivElement>(null!)

  const { _type, className, objectFit, dimensions, controls, ...restProps } =
    props

  const aspectRatio =
    ((dimensions?.height ?? 0) / (dimensions?.width ?? 0)) * 100

  useIsomorphicLayoutEffect(() => {
    const { current: container } = containerRef

    container.style.setProperty('---aspectratio', `${aspectRatio.toFixed(2)}%`)
  }, [aspectRatio])

  switch (_type) {
    case 'image':
      const { sizes } = props
      return (
        <MediaContainer
          ref={containerRef}
          className={className}
          css={{ $$aspectratio: `${aspectRatio.toFixed(2)}%` }}
        >
          <MediaImage
            layout="fill"
            image={{
              ...(restProps as Sanity.Image),
            }}
            sizes={sizes}
            objectFit={objectFit}
          />
        </MediaContainer>
      )
    case 'video': {
      return (
        <MediaContainer
          ref={containerRef}
          className={className}
          css={{ $$aspectratio: `${aspectRatio.toFixed(2)}%` }}
        >
          <MediaMux controls={controls} {...(restProps as Sanity.Mux)} />
        </MediaContainer>
      )
    }
    default:
      console.warn('missing case for ', _type)
      return null
  }
}

export const MediaContainer = styled('div', {
  overflow: 'hidden',
  position: 'relative',

  '&:before': {
    display: 'block',
    content: '',
    width: '100%',
    pt: '$$aspectratio',
  },
})
