import styled from 'styled-components'
import Link from 'next/link'

import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'
import { getFontStyles } from 'styles/getFontStyles'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { Colors, PADDING } from '../../styles/constants'

import { Logo } from 'components/Logo/Logo'

import { Sanity } from 'src/types'
import { LinkBase } from 'components/Links/LinkBase'

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

const LogoWrapper = styled.a`
  display: block;
  margin-right: 10px;
`

const NavContainer = styled.div`
  position: sticky;
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 ${PADDING.xl}px;

  ${MEDIA_QUERIES.tabletUp} {
    margin: 0 0 ${PADDING.xl}px;
    padding: ${PADDING.m}px;
  }

  padding: ${PADDING.s}px;
`

const NavWrapper = styled.nav`
  background-color: white;
  width: fit-content;
  padding: 6px;
  border-radius: 500px;
  border: 1px solid rgba(232, 232, 238, 0.25);
  box-shadow: 0px 0px 21px rgba(8, 11, 55, 0.03);
`

const NavList = styled.ul`
  display: flex;
`

const NavItem = styled.li`
  & + & {
    margin-left: 6px;
  }
`

const NavLink = styled(LinkBase)<{ active: boolean }>`
  text-decoration: none;
  display: block;
  ${getFontStyles(FONT_STYLE_APFEL_12_400)};
  background-color: ${(p) => (p.active ? Colors.darkblue : 'transparent')};
  padding: 8px;
  padding-bottom: 10px;
  border-radius: 500px;
  color: ${(p) => (p.active ? Colors.white : 'rgba(8, 11, 55, 0.57)')};
  width: 100%;
  height: 100%;

  &:hover {
    background-color: ${(p) =>
      p.active ? Colors.darkblue : Colors.lightgrey_2};
  }
`
