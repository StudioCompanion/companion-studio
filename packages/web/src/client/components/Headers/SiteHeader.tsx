import Link from 'next/link'

import { styled } from 'styles/stitches.config'

import { Logo } from 'components/Logo/Logo'
import { LinkBase } from 'components/Links/LinkBase'

import { Sanity } from '@types'
import { urlIsReferenceGuard } from 'helpers/links'
import { animated, useSpring } from '@react-spring/web'
import { useRef } from 'react'
import { useCanHover } from 'hooks/useCanHover'

export interface NavProps {
  currentPath?: string
  items?: Sanity.Link[]
}

export const Nav = ({ currentPath = '/', items }: NavProps) => {
  const navBackgroundIsVisible = useRef(false)
  const navRefs = useRef<HTMLLIElement[]>([])

  const [{ opacity }, opacityApi] = useSpring(
    () => ({
      opacity: 0,
      config: {
        tension: 200,
        friction: 10,
      },
    }),
    []
  )

  const [style, api] = useSpring(
    () => ({
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    }),
    []
  )

  const canHover = useCanHover()

  const handleMouseEnter = (i: number) => () => {
    if (!canHover) {
      return
    }

    const element = navRefs.current[i]

    const { width, height, x, y } = element.getBoundingClientRect()

    if (!navBackgroundIsVisible.current) {
      api.set({
        width,
        height,
        x,
        y,
      })

      opacityApi.start({
        opacity: 1,
      })

      navBackgroundIsVisible.current = true
    } else {
      api.start({
        width,
        height,
        x,
        y,
      })
    }
  }
  const handleMouseLeave = () => {
    if (!canHover) {
      return
    }

    navBackgroundIsVisible.current = false

    opacityApi.start({
      opacity: 0,
    })
  }

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
      <NavWrapper onMouseLeave={handleMouseLeave}>
        <NavBackground style={{ ...style, opacity }} />
        <NavList>
          {Array.isArray(items)
            ? items.map((item, index) => {
                const isActive = urlIsReferenceGuard(item.url)
                  ? currentPath === `/${item.url?.slug}` ||
                    (currentPath.includes('projects') && item.label === 'Work')
                  : currentPath === item.url

                return (
                  <NavItem
                    ref={(ref) => (navRefs.current[index] = ref!)}
                    key={item.label}
                    onMouseEnter={handleMouseEnter(index)}
                  >
                    <NavLink {...item} active={isActive}>
                      {item.label}
                    </NavLink>
                  </NavItem>
                )
              })
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
  position: 'relative',
  zIndex: '$1',
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

        // hover: {
        //   backgroundColor: '$grey25',
        // },
      },
    },
  },
})

const NavBackground = styled(animated.span, {
  position: 'absolute',
  zIndex: 0,
  top: 0,
  left: 0,
  backgroundColor: '$grey25',
  borderRadius: '$pill',
})
