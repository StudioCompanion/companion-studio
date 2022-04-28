import { GetStaticPaths, GetStaticProps } from 'next'
import styled from 'styled-components'
import groq from 'groq'

import { createSanityClientRead } from '../../data/createSanityClientRead'
import { PROJECT_PAGE } from '../../data/queries/documents/projectPage'
import { fetchDocument } from '../../data/fetchDocument'

import { REVALIDATE_TIME } from 'references/constants'

import { Renderer } from 'components/Renderer/Renderer'
import { ProjecHeader } from 'components/Headers/ProjectHeader'
import { Layout } from 'components/Site/SiteLayout'

import { Sanity } from 'src/types'

interface ProjectPageProps extends Sanity.DefaultLayoutProps {
  document: Sanity.ProjectPage
}

const ProjectPage = ({ document, ...siteProps }: ProjectPageProps) => {
  const { blocks = [], title, subtext, team, meta } = document
  return (
    <Layout {...siteProps} documentMeta={meta}>
      <Article>
        <ProjecHeader title={title} subtext={subtext} team={team} />
        <Renderer blocks={blocks} />
      </Article>
    </Layout>
  )
}

export default ProjectPage

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const client = createSanityClientRead()

  const allProjectSlugsQuery = groq`
    *[_type == "project"].slug.current
  `

  const slugs = await client.fetch<string[]>(allProjectSlugsQuery)

  return {
    fallback: 'blocking',
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
  }
}

export const getStaticProps: GetStaticProps<
  ProjectPageProps,
  { slug: string }
> = async ({ preview, params }) => {
  const slug = params?.slug ?? ''

  const sanityResult = await fetchDocument({
    filter: `_type == 'project' && slug.current == $slug`,
    preview,
    projection: PROJECT_PAGE,
    params: {
      slug,
    },
  })

  return {
    notFound: !sanityResult,
    props: {
      ...sanityResult,
      preview: !!preview,
    },
    revalidate: REVALIDATE_TIME, // seconds
  }
}

const Article = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`
