import styled from 'styled-components'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'
import { getFontStyles } from 'styles/getFontStyles'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { COLORS, PADDING } from '../../styles/constants'

const Nav = () => {
  const navItems = [
    { title: 'Work', url: '/' },
    { title: 'Approach', url: '/approach' },
    { title: 'Team', url: '/team' },
  ]

  const router = useRouter()

  const currentPath = router.pathname

  return (
    <>
      {currentPath !== '/' && (
        <NavContainer>
          <LogoWrapper>
            <Image
              src={'/images/graphics/logo_placeholder.png'}
              width={45}
              height={45}
              alt="Companion"
            />
          </LogoWrapper>
          <NavWrapper>
            <NavList>
              {navItems.map((item, index) => (
                <NavItem key={index} active={item.url === currentPath}>
                  <Link href={item.url} passHref>
                    <NavLink active={item.url === currentPath}>
                      {item.title}
                    </NavLink>
                  </Link>
                </NavItem>
              ))}
            </NavList>
          </NavWrapper>
        </NavContainer>
      )}
    </>
  )
}

export default Nav
const LogoWrapper = styled.div`
  margin-right: 10px;
`
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${PADDING.s}px 0 ${PADDING.xl}px;
  ${MEDIA_QUERIES.tabletUp} {
    margin: ${PADDING.m}px 0 ${PADDING.xxl}px;
  }
`
const NavWrapper = styled.nav`
  width: fit-content;
  padding: 6px;
  border-radius: 500px;
  border: 1px solid rgba(232, 232, 238, 0.25);
  box-shadow: 0px 0px 21px rgba(8, 11, 55, 0.03);
`
const NavList = styled.ul`
  display: flex;
  margin-right: -20px;
`
const NavItem = styled.li`
  margin-right: 20px;
`
const NavLink = styled.a`
  text-decoration: none;
  display: block;
  ${getFontStyles(FONT_STYLE_APFEL_12_400)};
  background-color: ${(p) => (p.active ? COLORS.darkblue : 'transparent')};
  padding: 8px;
  border-radius: 500px;
  color: ${(p) => (p.active ? COLORS.white : 'rgba(8, 11, 55, 0.57)')};
  width: 100%;
  height: 100%;

  &:hover {
    background-color: ${(p) =>
      p.active ? COLORS.darkblue : COLORS.lightgrey_2};
  }
`
