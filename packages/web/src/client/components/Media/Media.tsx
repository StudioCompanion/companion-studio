/* eslint-disable no-case-declarations */
import styled, { css } from 'styled-components'

import { Sanity } from 'src/types'

import { SizesArray } from '../../helpers/media'

import { MediaImage } from './MediaImage'
import { MediaMux, MediaMuxProps } from './MediaMux'

type SharedMediaProps = Pick<
  MediaMuxProps,
  'isPaused' | 'floodParent' | 'onAutoplayCallback' | 'onClick'
> & {
  className?: string
  sizes?: SizesArray
  objectFit?: 'cover' | 'contain'
}

export type MediaProps =
  | (Sanity.Image & SharedMediaProps)
  | (Sanity.Mux & SharedMediaProps)

export const Media = (props: MediaProps) => {
  const { _type, className, floodParent, objectFit, dimensions, ...restProps } =
    props

  switch (_type) {
    case 'image':
      const { sizes } = props
      return (
        <MediaContainer
          className={className}
          $aspectRatio={(dimensions.height / dimensions.width) * 100}
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
          className={className}
          $aspectRatio={(dimensions.height / dimensions.width) * 100}
        >
          <MediaMux floodParent={floodParent} {...(restProps as Sanity.Mux)} />
        </MediaContainer>
      )
    }
    default:
      console.warn('missing case for ', _type)
      return null
  }
}

const MediaContainer = styled.div<{ $aspectRatio?: number }>`
  overflow: hidden;
  position: relative;

  ${(props) =>
    props.$aspectRatio
      ? css`
          &:before {
            display: block;
            content: '';
            width: 100%;
            padding-top: ${props.$aspectRatio}%;
          }
        `
      : ''}
`
