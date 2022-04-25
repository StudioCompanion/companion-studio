import sanityClient from '@sanity/client'

export const createSanityClientRead = (preview?: boolean) =>
  sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2022-02-18',
    useCdn: true,
    token: preview ? process.env.SANITY_CMS_TOKEN : undefined,
  })
