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
    SanityKeyed<{
      _type: 'section'
      /**
       * Text Block — `richText`
       *
       *
       */
      text?: RichText

      /**
       * Media Section — `media`
       *
       *
       */
      media?: Media
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

/**
 * Home page
 *
 *
 */
export interface Homepage extends SanityDocument {
  _type: 'homepage'

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
    SanityKeyedReference<
      Homepage | Teampage | Approachpage | Linktree | Project
    >
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
   * Navigation — `array`
   *
   *
   */
  navigation?: Array<SanityKeyed<Link>>

  /**
   * Callout — `object`
   *
   *
   */
  callout?: {
    _type: 'callout'
    /**
     * Text — `text`
     *
     *
     */
    text?: string

    /**
     * Link — `link`
     *
     * When clicked the callout links to...?
     */
    link?: Link

    /**
     * Media — `media`
     *
     *
     */
    media?: Media
  }

  /**
   * Footer — `object`
   *
   *
   */
  footer?: {
    _type: 'footer'
    /**
     * Links — `array`
     *
     *
     */
    links?: Array<SanityKeyed<Link>>
  }

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
  slideshow?: Array<
    SanityKeyed<{
      _type: 'slide'
      /**
       * Media — `media`
       *
       *
       */
      media?: Media

      /**
       * Rotation — `number`
       *
       *
       */
      rotation?: number
    }>
  >

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
   * Cta — `link`
   *
   *
   */
  cta?: Link

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
 * Linktree page
 *
 *
 */
export interface Linktree extends SanityDocument {
  _type: 'linktree'

  /**
   * Links — `array`
   *
   *
   */
  links?: Array<
    SanityKeyed<{
      _type: 'item'
      /**
       * Link — `link`
       *
       *
       */
      link?: Link

      /**
       * Media — `media`
       *
       *
       */
      media?: Media
    }>
  >

  /**
   * Page meta — `meta`
   *
   *
   */
  meta?: Meta
}

/**
 * Privacy
 *
 *
 */
export interface Privacy extends SanityDocument {
  _type: 'privacy'

  /**
   * Content — `richText`
   *
   *
   */
  content?: RichText

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

export type Link = {
  _type: 'link'
  /**
   * Label — `string`
   *
   * If omitted, the title of the reference will be used
   */
  label?: string

  /**
   * Link Type — `string`
   *
   * Are you linking to an internal or external page?
   */
  linkType?: 'internal' | 'external'

  /**
   * Link Internal — `reference`
   *
   *
   */
  linkInternal?: SanityReference<
    Homepage | Teampage | Approachpage | Linktree | Project
  >

  /**
   * Link External — `url`
   *
   *
   */
  linkExternal?: string
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
   * Background Image — `image`
   *
   *
   */
  backgroundImage?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

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
  | Linktree
  | Privacy

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
