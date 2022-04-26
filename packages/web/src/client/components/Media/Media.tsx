/* eslint-disable no-case-declarations */
import styled from 'styled-components'

import { Sanity } from 'src/types'

import { SizesArray } from '../../helpers/media'

import { MediaImage } from './MediaImage'
import { MediaMux } from './MediaMux'

type SharedMediaProps = {
  className?: string
  sizes?: SizesArray
  floodParent?: boolean
  objectFit?: 'cover' | 'contain'
}

export type MediaProps =
  | (Sanity.Image & SharedMediaProps)
  | (Sanity.Mux & SharedMediaProps)

export const Media = (props: MediaProps) => {
  const { _type, className, floodParent, objectFit, ...restProps } = props

  switch (_type) {
    case 'image':
      const { sizes } = props
      return (
        <MediaContainer className={className}>
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
        <MediaContainer className={className}>
          <MediaMux floodParent={floodParent} {...(restProps as Sanity.Mux)} />
        </MediaContainer>
      )
    }
    default:
      console.warn('missing case for ', _type)
      return null
  }
}

const MediaContainer = styled.div`
  height: 100%;
  width: 100%;
`
