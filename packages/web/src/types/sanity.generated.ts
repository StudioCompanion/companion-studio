import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen'

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
}

/**
 * Project
 *
 *
 */
export interface Project extends SanityDocument {
  _type: 'project'

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string }

  /**
   * Subtext — `string`
   *
   *
   */
  subtext?: string

  /**
   * Team — `array`
   *
   *
   */
  team?: Array<SanityKeyedReference<TeamMember>>

  /**
   * Page blocks — `array`
   *
   *
   */
  blocks?: Array<
    | SanityKeyed<BlockMedia>
    | SanityKeyed<BlockText>
    | SanityKeyed<BlockTestimonial>
  >

  /**
   * Page meta — `meta`
   *
   *
   */
  meta?: Meta

  /**
   * Page Card — `pageCard`
   *
   *
   */
  card?: PageCard
}

/**
 * Team Members
 *
 *
 */
export interface TeamMember extends SanityDocument {
  _type: 'teamMember'

  /**
   * Name — `string`
   *
   *
   */
  name?: string

  /**
   * Job Title — `string`
   *
   *
   */
  job?: string

  /**
   * Image — `image`
   *
   * Ensure this has a transparent background
   */
  image?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

/**
 * Approach page
 *
 *
 */
export interface Approachpage extends SanityDocument {
  _type: 'approachpage'

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string }

  /**
   * Sections — `array`
   *
   *
   */
  sections?: Array<
    | SanityKeyed<{
        _type: 'textSection'
        /**
         * Text Block — `richText`
         *
         *
         */
        text?: RichText
      }>
    | SanityKeyed<Media>
  >

  /**
   * Page meta — `meta`
   *
   *
   */
  meta?: Meta

  /**
   * Page Card — `pageCard`
   *
   *
   */
  card?: PageCard
}

/**
 * Home page
 *
 *
 */
export interface Homepage extends SanityDocument {
  _type: 'homepage'

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string }

  /**
   * Standfirst — `richText`
   *
   *
   */
  standfirst?: RichText

  /**
   * Cards — `array`
   *
   *
   */
  cards?: Array<
    SanityKeyedReference<Homepage | Teampage | Approachpage | Project>
  >

  /**
   * Page meta — `meta`
   *
   *
   */
  meta?: Meta
}

/**
 * Global Site Settings
 *
 *
 */
export interface Settings extends SanityDocument {
  _type: 'settings'

  /**
   * Default meta — `meta`
   *
   *
   */
  meta?: Meta

  /**
   * Redirects — `redirects`
   *
   *
   */
  redirects?: Redirects
}

/**
 * Team page
 *
 *
 */
export interface Teampage extends SanityDocument {
  _type: 'teampage'

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string }

  /**
   * Slideshow — `array`
   *
   *
   */
  slideshow?: Array<SanityKeyed<Media>>

  /**
   * Text Block — `richText`
   *
   *
   */
  textBlockOne?: RichText

  /**
   * Team — `array`
   *
   *
   */
  team?: Array<SanityKeyedReference<TeamMember>>

  /**
   * Text Block — `richText`
   *
   *
   */
  textBlockTwo?: RichText

  /**
   * Qualities — `array`
   *
   *
   */
  qualities?: Array<
    SanityKeyed<{
      _type: 'quality'
      /**
       * Title — `squiggleRichText`
       *
       * underline the text you want to be squiggled!
       */
      title?: SquiggleRichText

      /**
       * Text — `richText`
       *
       *
       */
      text?: RichText
    }>
  >

  /**
   * Page meta — `meta`
   *
   *
   */
  meta?: Meta

  /**
   * Page Card — `pageCard`
   *
   *
   */
  card?: PageCard
}

export type Media = {
  _type: 'media'
  /**
   * Asset type — `string`
   *
   *
   */
  assetType?: 'image' | 'video'

  /**
   * Video file — `mux.video`
   *
   *
   */
  video?: MuxVideo

  /**
   * Image file — `image`
   *
   *
   */
  image?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

export type RichText = Array<SanityKeyed<SanityBlock>>

export type SquiggleRichText = Array<SanityKeyed<SanityBlock>>

export type Meta = {
  _type: 'meta'
  /**
   * SEO — `seo-tools`
   *
   *
   */
  seo?: SeoTools
}

export type Redirects = Array<
  SanityKeyed<{
    /**
     * Current URL — `string`
     *
     *
     */
    source?: string

    /**
     * New URL — `string`
     *
     *
     */
    destination?: string

    /**
     * Permanent — `boolean`
     *
     *
     */
    permanent?: boolean
  }>
>

export type PageCard = {
  _type: 'pageCard'
  /**
   * Card Title — `string`
   *
   * If omitted, the SEO title will be used
   */
  title?: string

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string

  /**
   * Media — `media`
   *
   * If omitted, the SEO media will be used
   */
  media?: Media

  /**
   * Layout — `string`
   *
   *
   */
  layout?: 'case' | 'studio'

  /**
   * Theme — `string`
   *
   *
   */
  theme?: 'light' | 'grey' | 'dark'
}

export type BlockMedia = {
  _type: 'blockMedia'
  /**
   * Layout — `string`
   *
   *
   */
  layout?: 'full' | 'half' | '2/3'

  /**
   * Is Hero? — `boolean`
   *
   *
   */
  isHero?: boolean

  /**
   * Background Color — `string`
   *
   *
   */
  backgroundColor?: string

  /**
   * Media Items — `array`
   *
   *
   */
  items?: Array<
    SanityKeyed<{
      _type: 'item'
      /**
       * Has Mobile Asset? — `boolean`
       *
       *
       */
      hasMobile?: boolean

      /**
       * Mobile Asset — `media`
       *
       *
       */
      mobile?: Media

      /**
       * Desktop Asset — `media`
       *
       *
       */
      desktop?: Media

      /**
       * Caption — `string`
       *
       *
       */
      caption?: string
    }>
  >
}

export type BlockText = {
  _type: 'blockText'
  /**
   * Text — `richText`
   *
   *
   */
  richText?: RichText
}

export type BlockTestimonial = {
  _type: 'blockTestimonial'
  /**
   * Quote — `richText`
   *
   *
   */
  quote?: RichText

  /**
   * Author — `string`
   *
   *
   */
  author?: string
}

export type Documents =
  | Project
  | TeamMember
  | Approachpage
  | Homepage
  | Settings
  | Teampage

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type MuxVideo = any

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type SeoTools = any