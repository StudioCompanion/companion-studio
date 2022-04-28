import groq from 'groq'

import { createSanityClientRead } from './createSanityClientRead'

import { LAYOUT } from './queries/layout'

import { Sanity } from '../types'

export type FetchDocumentParams = {
  filter?: string
  projection?: string
  preview?: boolean
  params?: Record<string, unknown>
}

export type FetchedDocument<TFetched> = {
  document?: TFetched
  siteSettings?: Sanity.DefaultLayoutProps
}

export const fetchDocument = async <
  TFetchedDocument extends Sanity.DocumentBase
>({
  filter,
  projection,
  preview,
  params = {},
}: FetchDocumentParams): Promise<
  Sanity.DefaultLayoutProps & { document: TFetchedDocument }
> => {
  try {
    const documentProjection = projection ? `{${projection}}` : ''
    const documentQuery = filter
      ? `"document": *[${filter}] | order(_updatedAt desc)[0] ${documentProjection}`
      : ''

    const pageQuery = groq`
    {
        ${LAYOUT}
        ${documentQuery}
    }
  `

    // DEBUG QUERY
    // console.log(pageQuery.replace(/(\r\n|\n|\r)/gm, ''))

    const client = createSanityClientRead(preview)

    const { document, siteSettings } = await client.fetch<
      FetchedDocument<TFetchedDocument>
    >(pageQuery, params)

    if (!document || !siteSettings) {
      console.warn(
        `No document found with sanity query for filter – ${filter} with params – ${JSON.stringify(
          params
        )}, this could be intentional depending on the template.`
      )
      throw new Error('See warning above')
    }

    return {
      document,
      ...siteSettings,
    }
  } catch (err) {
    console.error(err)
    return {
      document: {} as TFetchedDocument,
      defaultMeta: {},
      callout: {},
      footer: {},
      navigation: [],
    }
  }
}
