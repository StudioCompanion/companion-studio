import {
  SanityImageAsset,
  SanityImageDimensions,
  SanityReference,
} from 'sanity-codegen'
import { CarouselLayouts, ThemeTypes } from 'styles/constants'
import { ScaleValue } from 'styles/stitches.config'

import { SanityGenerated } from './index'
import { RichText } from './sanity.generated'

export type Mux = {
  _type: 'video'
  asset: {
    playbackId: string | null
    thumbTime: number | null
  }
  dimensions: SanityImageDimensions
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

export interface BlockMediaItem {
  _type: 'item'
  hasMobile?: boolean
  caption?: string
  mobile?: Media
  desktop?: Media
}

export type BlockMedia = SanityGenerated.SanityKeyed<
  Omit<SanityGenerated.BlockMedia, 'items' | 'layout' | 'backgroundColor'> & {
    items: SanityGenerated.SanityKeyed<BlockMediaItem>[]
    layout: CarouselLayouts
    backgroundColor: ScaleValue<'colors'>
    backgroundImage: Image
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
}

type PageTypes = 'homepage' | 'approachpage' | 'teampage' | 'project'

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
}

export type Pages =
  | HomePage
  | ApproachPage
  | TeamPage
  | ProjectPage
  | LinktreePage

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
}

export interface Callout {
  link?: Link
  media?: Media
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
