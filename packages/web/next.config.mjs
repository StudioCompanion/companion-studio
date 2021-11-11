import MDX from '@next/mdx'

const withMDX = MDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX({
  pageExtensions: ['mdx', 'tsx', 'js'],
})
