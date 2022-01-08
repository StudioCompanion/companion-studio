import styled from 'styled-components'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'

import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'
import { getFontStyles } from 'styles/getFontStyles'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { COLORS, PADDING } from '../../styles/constants'
import { Logo } from 'components/Logo/Logo'

const Nav = ({ currentPath }) => {
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
              <NavItem>
                <Link href={'/'} passHref>
                  <NavLink active={currentPath.includes('projects')}>
                    Work
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href={'/approach'} passHref>
                  <NavLink active={currentPath === '/approach'}>
                    Approach
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href={'/team'} passHref>
                  <NavLink active={currentPath === '/team'}>Team</NavLink>
                </Link>
              </NavItem>
            </NavList>
          </NavWrapper>
        </NavContainer>
      )}
    </>
  )
}

Nav.propTypes = {
  currentPath: PropTypes.string,
}

export default Nav

const LogoWrapper = styled.a`
  display: block;
  margin-right: 10px;
`
const NavContainer = styled.div`
  position: sticky;
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 ${PADDING.l}px;
  ${MEDIA_QUERIES.tabletUp} {
    margin: 0 0 ${PADDING.l}px;
  }
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
  margin-right: -6px;
`
const NavItem = styled.li`
  margin-right: 6px;
`
const NavLink = styled.a`
  text-decoration: none;
  display: block;
  ${getFontStyles(FONT_STYLE_APFEL_12_400)};
  background-color: ${(p) => (p.active ? COLORS.darkblue : 'transparent')};
  padding: 8px;
  padding-bottom: 10px;
  border-radius: 500px;
  color: ${(p) => (p.active ? COLORS.white : 'rgba(8, 11, 55, 0.57)')};
  width: 100%;
  height: 100%;

  &:hover {
    background-color: ${(p) =>
      p.active ? COLORS.darkblue : COLORS.lightgrey_2};
  }
`
