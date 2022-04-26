import MDX from '@next/mdx'

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
  // TODO: this should be removed
  typescript: {
    ignoreBuildErrors: true,
  },
  // TODO: this should be removed
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default withMDX(nextConfig)
