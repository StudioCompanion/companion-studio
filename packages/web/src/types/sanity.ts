import {
  SanityImageAsset,
  SanityImageDimensions,
  SanityReference,
} from 'sanity-codegen'
import { CarouselLayouts, Colors, ThemeTypes } from 'styles/constants'

import { SanityGenerated } from './index'

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
    backgroundColor: Colors
    backgroundImage: Image
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
  subtext?: string
  blocks?: Blocks
  team?: Team
}

export type Pages =
  | HomePage
  | ApproachPage
  | SanityGenerated.Teampage
  | ProjectPage
  | LinktreePage

export interface Link {
  label?: string
  url?: string | Pages
  isExternal?: boolean
}

export interface ApproachPage extends DocumentBase {
  meta?: Meta
  card?: Card
  slug?: string
  sections?: Array<
    | SanityGenerated.SanityKeyed<{
        _type: 'textSection'
        /**
         * Text Block — `richText`
         *
         *
         */
        text?: SanityGenerated.RichText
      }>
    | SanityGenerated.SanityKeyed<Media>
  >
}

export interface PrivacyPage extends DocumentBase {
  meta?: Meta
  card?: Card
  faq?: Array<
    SanityGenerated.SanityKeyed<{
      _type: 'q_a'
      question?: string
      answer?: SanityGenerated.RichText
    }>
  >
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
  meta?: Meta
  slug?: string
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
