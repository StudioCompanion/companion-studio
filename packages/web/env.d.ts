declare namespace NodeJS {
  export interface ProcessEnv {
    //CMS
    SANITY_CMS_TOKEN: string
    SANITY_SECRET: string
    NEXT_PUBLIC_SANITY_PROJECT_ID: string
    NEXT_PUBLIC_SANITY_DATASET: string

    // Marker
    NEXT_PUBLIC_ENABLE_MARKER: boolean

    // Accessibe
    NEXT_PUBLIC_ENABLE_ACCESSIBE: boolean

    // Plausible
    NEXT_PUBLIC_ENABLE_PLAUSIBLE: boolean
  }
}
