import {
  SanityImageAsset,
  SanityImageDimensions,
  SanityReference,
} from 'sanity-codegen'
import { CarouselLayouts, ThemeTypes } from 'styles/constants'

import { SanityGenerated } from './index'
import { RichText } from './sanity.generated'
import { PickType } from './utils'

export interface ImageDimensions
  extends Omit<SanityImageDimensions, 'aspectRatio'> {
  aspectRatio: string | number
}

export type Mux = {
  _type: 'video'
  asset?: {
    playbackId: string | null
    thumbTime: number | null
  }
  dimensions?: ImageDimensions
}

export interface Image {
  _type: 'image'
  dimensions?: ImageDimensions
  altText?: string | null
  mimeType?: string | null
  asset?: SanityReference<SanityImageAsset>
}

export type Media = Image | Mux

export type BlockText = SanityGenerated.SanityKeyed<SanityGenerated.BlockText>

export type BlockTestimonial =
  SanityGenerated.SanityKeyed<SanityGenerated.BlockTestimonial>

export interface BlockMediaItem {
  hasMobile?: boolean
  caption?: RichText
  mobile?: Media
  desktop?: Media
}

export type BlockMedia = SanityGenerated.SanityKeyed<
  Omit<SanityGenerated.BlockMedia, 'items' | 'layout' | 'backgroundColor'> & {
    items: SanityGenerated.SanityKeyed<BlockMediaItem>[]
    layout: CarouselLayouts
    backgroundColor: string
    backgroundImage?: Image
  }
>

export type Blocks = Array<BlockText | BlockTestimonial | BlockMedia>

export interface TeamMember {
  name?: string
  job?: string
  image?: Image
}

export type Team = SanityGenerated.SanityKeyed<TeamMember>[]

export interface Meta {
  title?: string
  description?: string
  keyword?: string
  focusWords?: string[]
  image?: Image
}

export interface Card
  extends Omit<SanityGenerated.PageCard, 'media' | 'theme'> {
  theme?: ThemeTypes
  media?: Media
  type?: PageTypes
}

type PageTypes =
  | 'homepage'
  | 'approachpage'
  | 'teampage'
  | 'project'
  | 'privacy'

export interface DocumentBase {
  _id?: string
  _createdAt?: string
  _rev?: string
  _updatedAt?: string
  _type?: PageTypes
  card?: Card
  meta?: Meta
  slug?: string
}

export interface ProjectPage extends DocumentBase {
  title?: string
  blocks?: Blocks
  team?: Team
  status?: PickType<SanityGenerated.Project, 'status'>
}

export type Pages =
  | HomePage
  | ApproachPage
  | TeamPage
  | ProjectPage
  | LinktreePage
  | PrivacyPage

export interface Link {
  label?: string
  url?: string | Pages
  isExternal?: boolean
}

export interface ApproachBlock {
  text?: RichText
  media?: Media
}

export interface ApproachPage extends DocumentBase {
  slug?: string
  sections?: SanityGenerated.SanityKeyed<ApproachBlock>[]
}

export interface PrivacyPage extends DocumentBase {
  content?: SanityGenerated.RichText
}
export interface Slide {
  rotation?: number
  media?: Media
}

export interface TeamQuality {
  media?: Media
  text?: RichText
}

export interface TeamPage
  extends DocumentBase,
    Pick<SanityGenerated.Teampage, 'textBlockOne' | 'textBlockTwo'> {
  slug?: string
  slideshow?: Slide[]
  qualities?: SanityGenerated.SanityKeyed<TeamQuality>[]
  team?: Team
}

export interface Footer {
  links?: Link[]
  text?: RichText
}

export interface Callout {
  link?: Link
  mediaItems?: Media[]
  text?: string
}

export interface DefaultLayoutProps {
  defaultMeta: Meta
  navigation: Link[]
  footer: Footer
  callout: Callout
}

export interface HomepageCard extends Card {
  slug?: string
  meta?: Meta
}

export interface HomePage extends DocumentBase {
  standfirst?: SanityGenerated.RichText
  cards?: SanityGenerated.SanityKeyed<HomepageCard>[]
}

export interface LinktreeItem {
  link?: Link
  media?: Media
}

export interface LinktreePage extends DocumentBase {
  links?: SanityGenerated.SanityKeyed<LinktreeItem>[]
}
