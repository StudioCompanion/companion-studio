import BundleAnalyzer from '@next/bundle-analyzer'
import MDX from '@next/mdx'
import groq from 'groq'

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const withMDX = MDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'tsx', 'js', 'ts'],
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
    minimumCacheTTL: 31536000,
  },
  redirects: async () => {
    const REDIRECTS_QUERY = groq`
        *[_type == 'settings'] | order(_updatedAt desc)[0].redirects[]{
          destination,
          permanent,
          source,
        }
    `

    try {
      const { result } = await fetch(
        `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${REDIRECTS_QUERY}`
      ).then((res) => res.json())

      return result ?? []
    } catch (err) {
      console.error(err)
      return []
    }
  },
}

export default withBundleAnalyzer(withMDX(nextConfig))
