import {
  getHrefSlugFromSanityReference,
  urlIsReferenceGuard,
} from 'helpers/links'
import Link from 'next/link'
import { Sanity } from 'src/types'
import styled from 'styled-components'
import { Colors } from 'styles/constants'

interface InlineLinkProps extends Sanity.Link {
  className?: string
}

export const InlineLink = (props: InlineLinkProps) => {
  const { isExternal, url, label } = props

  const renderInner = () => {
    return <span>{label}</span>
  }

  if (url) {
    if (isExternal && !urlIsReferenceGuard(url)) {
      return (
        <Anchor href={url} rel="noopener noreferrer" target="_blank">
          {renderInner()}
        </Anchor>
      )
    } else {
      const actualInternalUrl = urlIsReferenceGuard(url)
        ? getHrefSlugFromSanityReference(url)
        : url

      return (
        <Link href={actualInternalUrl} passHref>
          <Anchor>{renderInner()}</Anchor>
        </Link>
      )
    }
  }

  return null
}

const Anchor = styled.a`
  color: ${Colors.blue};
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
