import Link from 'next/link'

import { styled } from 'styles/stitches.config'

import { Logo } from 'components/Logo/Logo'
import { LinkBase } from 'components/Links/LinkBase'

import { Sanity } from '@types'
import { urlIsReferenceGuard } from 'helpers/links'

export interface NavProps {
  currentPath?: string
  items?: Sanity.Link[]
}

/**
 * TODO: be nice if the background moved
 * between the buttons instead of just
 * being a background
 */
export const Nav = ({ currentPath = '/', items }: NavProps) => {
  if (currentPath === '/' || currentPath === '/instagram') {
    return null
  }

  return (
    <NavContainer>
      <Link href={'/'} passHref>
        <LogoWrapper>
          <Logo label="Homepage" />
        </LogoWrapper>
      </Link>
      <NavWrapper>
        <NavList>
          {Array.isArray(items)
            ? items.map((item) => (
                <NavItem key={item.label}>
                  <NavLink
                    {...item}
                    active={
                      urlIsReferenceGuard(item.url)
                        ? currentPath === `/${item.url?.slug}` ||
                          (currentPath.includes('projects') &&
                            item.label === 'Work')
                        : currentPath === item.url
                    }
                  >
                    {item.label}
                  </NavLink>
                </NavItem>
              ))
            : null}
        </NavList>
      </NavWrapper>
    </NavContainer>
  )
}

const LogoWrapper = styled('a', {
  display: 'block',
  mr: '$xs',
  width: '8.5rem',
})

const NavContainer = styled('header', {
  position: 'sticky',
  zIndex: '$1',
  top: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mb: '$xl',
  p: '$s',

  '@tabletUp': {
    p: '$m',
  },
})

const NavWrapper = styled('nav', {
  backgroundColor: '$white100',
  width: 'fit-content',
  p: 6,
  borderRadius: '$pill',
  border: '1px solid $grey25',
  boxShadow: '0px 0px 21px rgba(8, 11, 55, 0.03)',
})

const NavList = styled('ul', {
  display: 'flex',
})

const NavItem = styled('li', {
  '& + &': {
    ml: 6,
  },
})

const NavLink = styled(LinkBase, {
  textDecoration: 'none',
  display: 'block',
  fontSize: '$XS',
  lineHeight: '$XS',
  p: '$xxs',
  pb: 10,
  borderRadius: '$pill',
  width: '100%',
  height: '100%',

  variants: {
    active: {
      true: {
        backgroundColor: '$black100',
        color: '$white100 !important',

        hover: {
          backgroundColor: '$black50',
        },
      },
      false: {
        backgroundColor: 'transparent',
        color: '$black50',

        hover: {
          backgroundColor: '$grey25',
        },
      },
    },
  },
})
