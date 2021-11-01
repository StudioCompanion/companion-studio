import remarkFrontmatter from 'remark-frontmatter'
import MDX from '@next/mdx'

const withMDX = MDX({
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
  },
})

export default withMDX({
  pageExtensions: ['mdx', 'tsx'],
})
