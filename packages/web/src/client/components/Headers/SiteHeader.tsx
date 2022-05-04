import Link from 'next/link'

import { styled } from 'styles/stitches.config'

import { Logo } from 'components/Logo/Logo'
import { LinkBase } from 'components/Links/LinkBase'

import { Sanity } from '@types'

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
  return (
    <>
      {currentPath !== '/' && currentPath !== '/instagram' && (
        <NavContainer>
          <Link href={'/'} passHref>
            <LogoWrapper>
              <Logo />
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
                          // @ts-expect-error this should be redundant after all the pages are moved over
                          currentPath === `/${item.url?.slug}` ||
                          (currentPath.includes('projects') &&
                            item.label === 'Work')
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
      )}
    </>
  )
}

const LogoWrapper = styled('a', {
  display: 'block',
  mr: '$xs',
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
  backgroundColor: '$white',
  width: 'fit-content',
  p: 6,
  borderRadius: '$pill',
  border: '1px solid rgba(232, 232, 238, 0.25)',
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
  fontSize: '$h6',
  lineHeight: '$h6',
  p: '$xxs',
  pb: 10,
  borderRadius: '$pill',
  width: '100%',
  height: '100%',

  variants: {
    active: {
      true: {
        backgroundColor: '$darkBlue',
        color: '$white',

        '&:hover': {
          backgroundColor: '$darkBlue',
        },
      },
      false: {
        backgroundColor: 'transparent',
        color: 'rgba(8, 11, 55, 0.57)',

        '&:hover': {
          backgroundColor: '$lightGrey',
        },
      },
    },
  },
})
