import { CSS, styled } from 'styles/stitches.config'
import { Sanity } from '@types'

import { SizesArray } from '../../helpers/media'

import { MediaImage } from './MediaImage'
import { MediaMux, MediaMuxProps } from './MediaMux'

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
  const { _type, className, objectFit, dimensions, controls, ...restProps } =
    props

  const aspectRatio = (dimensions.height / dimensions.width) * 100

  const aspectRatioCss: CSS = {
    '&:before': {
      display: 'block',
      content: '',
      width: '100%',
      pt: `${aspectRatio.toFixed(2)}%`,
    },
  }

  switch (_type) {
    case 'image':
      const { sizes } = props
      return (
        <MediaContainer className={className} css={aspectRatioCss}>
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
        <MediaContainer className={className} css={aspectRatioCss}>
          <MediaMux controls={controls} {...(restProps as Sanity.Mux)} />
        </MediaContainer>
      )
    }
    default:
      console.warn('missing case for ', _type)
      return null
  }
}

const MediaContainer = styled('div', {
  overflow: 'hidden',
  position: 'relative',
})
