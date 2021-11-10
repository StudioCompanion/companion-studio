import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'
import { getFontStyles } from 'styles/getFontStyles'
import { COLORS, PADDING } from '../../styles/constants'

const Nav = ({ logo, navItems }) => {
  const router = useRouter()

  // For demonstration purposes:
  const currentPath = '/work'
  // const currentPath = router.pathname

  return (
    <NavContainer>
      <LogoWrapper>
        <Image src={logo} width={45} height={45} alt="Companion" />
      </LogoWrapper>
      <NavWrapper>
        <NavList>
          {navItems.map((item, index) => (
            <NavItem key={index} active={item.url === currentPath}>
              {item.title}
            </NavItem>
          ))}
        </NavList>
      </NavWrapper>
    </NavContainer>
  )
}

Nav.propTypes = {
  navItems: PropTypes.array,
  logo: PropTypes.string,
}

export default Nav
const LogoWrapper = styled.div`
  margin-right: 10px;
`
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${PADDING.m}px;
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
  ${getFontStyles(FONT_STYLE_APFEL_12_400)};
  margin-right: 20px;
  background-color: ${(p) => (p.active ? COLORS.darkblue : 'transparent')};
  color: ${(p) => (p.active ? COLORS.white : 'rgba(8, 11, 55, 0.57)')};
  padding: 8px;
  border-radius: 500px;
`
