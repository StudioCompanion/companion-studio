import {
  SanityImageAsset,
  SanityImageDimensions,
  SanityReference,
} from 'sanity-codegen'

import { SanityGenerated } from './index'

export type Mux = {
  _type: 'video'
  asset: {
    playbackId: string | null
    thumbTime: number | null
  }
  dimensions: {
    aspectRatio: string | null
    width: number | null
    height: number | null
  }
}

export interface Image {
  _type: 'image'
  dimensions: SanityImageDimensions
  altText: string | null
  mimeType: string | null
  asset: SanityReference<SanityImageAsset>
}

export type Media = Image | Mux

export type BlockText = SanityGenerated.SanityKeyed<SanityGenerated.BlockText>

export type BlockTestimonial =
  SanityGenerated.SanityKeyed<SanityGenerated.BlockTestimonial>

interface BlockMediaItem {
  _type: 'item'
  hasMobile?: boolean
  caption?: string
  mobile?: Media
  desktop?: Media
}

export type BlockMedia = SanityGenerated.SanityKeyed<
  Omit<SanityGenerated.BlockMedia, 'items'> & {
    items: SanityGenerated.SanityKeyed<BlockMediaItem>[]
  }
>

export type Blocks = Array<BlockText | BlockTestimonial | BlockMedia>

export interface TeamMember {
  _key: string
  name?: string
  job?: string
  image?: Image
}

export type Team = TeamMember[]

export interface Meta {
  title?: string
  description?: string
  keyword?: string
  focusWords?: string[]
  image?: Image
}

export interface Card extends Omit<SanityGenerated.PageCard, 'media'> {
  media?: Media
}

interface DocumentBase {
  card?: Card
  meta?: Meta
}

export interface ProjectPage extends DocumentBase {
  title?: string
  subtext?: string
  blocks: Blocks
  team: Team
}
