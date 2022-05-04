import { ReactNode } from 'react'
import Link from 'next/link'

import { styled } from 'styles/stitches.config'

import {
  getHrefSlugFromSanityReference,
  urlIsReferenceGuard,
} from 'helpers/links'

import { Sanity } from '@types'

interface LinkBaseProps extends Sanity.Link {
  className?: string
  children: ReactNode
}

export const LinkBase = (props: LinkBaseProps) => {
  const { isExternal, url, label, children, className } = props

  if (url) {
    if (isExternal && !urlIsReferenceGuard(url)) {
      return (
        <Anchor
          className={className}
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {children ?? label}
        </Anchor>
      )
    } else {
      const actualInternalUrl = urlIsReferenceGuard(url)
        ? getHrefSlugFromSanityReference(url)
        : url

      return (
        <Link href={actualInternalUrl} passHref>
          <Anchor className={className}>{children ?? label}</Anchor>
        </Link>
      )
    }
  }

  return null
}

const Anchor = styled('a')
