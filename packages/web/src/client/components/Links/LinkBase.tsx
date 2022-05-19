import { MouseEventHandler, ReactNode } from 'react'
import Link from 'next/link'

import { styled, CSS } from 'styles/stitches.config'

import {
  getHrefSlugFromSanityReference,
  urlIsReferenceGuard,
} from 'helpers/links'

import { Sanity } from '@types'

interface LinkBaseProps extends Sanity.Link {
  className?: string
  children: ReactNode
  css?: CSS
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export const LinkBase = (props: LinkBaseProps) => {
  const { isExternal, url, label, children, className, css, onClick } = props

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (onClick) {
      onClick(e)
    }
  }

  if (url) {
    if (isExternal && !urlIsReferenceGuard(url)) {
      return (
        <Anchor
          className={className}
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          css={css}
          onClick={handleClick}
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
          <Anchor className={className} css={css}>
            {children ?? label}
          </Anchor>
        </Link>
      )
    }
  }

  return null
}

const Anchor = styled('a', {
  color: 'inherit',
  textDecoration: 'underline',
  '&:hover': {
    textDecoration: 'none',
  },
  '&:visited': {
    color: 'inherit',
  },
})
