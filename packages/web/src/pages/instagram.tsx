import { GetStaticProps } from 'next'

import { LinkTreeLayout } from 'components/LinkTree/Layout'
import { LinkTreeItem } from 'components/LinkTree/LinkTree'

import { fetchDocument } from 'src/data/fetchDocument'
import { LINKTREE_PAGE } from 'src/data/queries/singletons/linktree'

import { REVALIDATE_TIME } from 'references/constants'

import { Sanity } from '@types'
import { styled } from 'styles/stitches.config'

interface LinktreeProps extends Sanity.DefaultLayoutProps {
  document: Sanity.LinktreePage
}

const Linktree = ({ document, ...siteProps }: LinktreeProps) => {
  const { links } = document

  return (
    <LinkTreeLayout {...siteProps}>
      <LinkTreeItems>
        {Array.isArray(links)
          ? links.map((link) => (
              <li key={link._key}>
                <LinkTreeItem {...link} />
              </li>
            ))
          : null}
      </LinkTreeItems>
    </LinkTreeLayout>
  )
}

export default Linktree

export const getStaticProps: GetStaticProps<LinktreeProps> = async ({
  preview,
}) => {
  const sanityResult = await fetchDocument({
    filter: `_type == 'linktree'`,
    preview,
    projection: LINKTREE_PAGE,
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

const LinkTreeItems = styled('ul', {
  px: '$s',
})
