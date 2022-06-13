import { GetStaticPaths, GetStaticProps } from 'next'
import groq from 'groq'

import { createSanityClientRead } from '../../data/createSanityClientRead'
import { PROJECT_PAGE } from '../../data/queries/documents/projectPage'
import { fetchDocument } from '../../data/fetchDocument'

import { REVALIDATE_TIME } from 'references/constants'

import { Renderer } from 'components/Renderer/Renderer'
import { ProjecHeader } from 'components/Headers/ProjectHeader'
import { Layout, PaddingContainer } from 'components/Site/SiteLayout'

import { Sanity } from '@types'

import { styled } from 'styles/stitches.config'

interface ProjectPageProps extends Sanity.DefaultLayoutProps {
  document: Sanity.ProjectPage
}

const ProjectPage = ({ document, ...siteProps }: ProjectPageProps) => {
  const { blocks, title, team, meta } = document

  return (
    <ProjectLayout {...siteProps} documentMeta={meta}>
      <Article>
        <ProjecHeader title={title} team={team} />
        <Renderer blocks={blocks ?? []} />
      </Article>
    </ProjectLayout>
  )
}

export default ProjectPage

interface ProjectSnippet extends Pick<Sanity.ProjectPage, 'status'> {
  slug: string
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const client = createSanityClientRead()

  const allProjectSlugsQuery = groq`
    *[_type == "project"][] {
      status,
      "slug": slug.current
    }
  `

  const slugs = await client.fetch<ProjectSnippet[]>(allProjectSlugsQuery)

  return {
    fallback: 'blocking',
    paths: slugs
      .filter(({ status }) => status !== 'comingSoon')
      .map(({ slug }) => ({
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

  const sanityResult = await fetchDocument<Sanity.ProjectPage>({
    filter: `_type == 'project' && slug.current == $slug`,
    preview,
    projection: PROJECT_PAGE,
    params: {
      slug,
    },
  })

  return {
    notFound: !sanityResult || sanityResult.document.status === 'comingSoon',
    props: {
      ...sanityResult,
      preview: !!preview,
    },
    revalidate: REVALIDATE_TIME, // seconds
  }
}

const ProjectLayout = styled(Layout, {
  [`& + ${PaddingContainer}`]: {
    mt: 0,
  },

  pt: '$s',

  '@tabletUp': {
    [`& + ${PaddingContainer}`]: {
      mt: 0,
    },

    pt: '$xl',
  },
})

const Article = styled('article', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})
