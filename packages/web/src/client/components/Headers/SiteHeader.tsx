import { useCallback, useRef } from 'react'
import Link from 'next/link'
import { animated, useSpring } from '@react-spring/web'

import { styled } from 'styles/stitches.config'

import { Logo } from 'components/Logo/Logo'
import { LinkBase } from 'components/Links/LinkBase'

import { Sanity } from '@types'

import { urlIsReferenceGuard } from 'helpers/links'

import { useCanHover } from 'hooks/useCanHover'
import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'
import { useFontFaceObserver } from 'hooks/useFontFaceObserver'

export interface NavProps {
  currentPath?: string
  items?: Sanity.Link[]
}

const PADDING = 6

export const Nav = ({ currentPath = '/', items }: NavProps) => {
  const navBackgroundIsVisible = useRef(false)
  const navRefs = useRef<HTMLLIElement[]>([])

  const [{ backgroundColor, color }, colorsApi] = useSpring(
    () => ({
      backgroundColor: 'transparent',
      color: 'var(--colors-white100)',
      config: {
        mass: 0.5,
        tension: 380,
        friction: 15,
        clamp: true,
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

  const hasNoActiveIndex = useRef(false)
  const isHovering = useRef(false)

  const runBackgroundSpring = useCallback(
    (i: number, isActive: boolean, immediate = false) => {
      const element = navRefs.current[i]

      const { width, height } = element.getBoundingClientRect()

      colorsApi.start({
        color: isActive ? 'var(--colors-white100)' : 'var(--colors-black100)',
        backgroundColor: isActive
          ? 'var(--colors-black100)'
          : 'var(--colors-grey25)',
        immediate,
      })

      api.start({
        width,
        height,
        x: element.offsetLeft + PADDING,
        y: element.offsetTop + PADDING,
        immediate,
      })
    },
    [api, colorsApi]
  )

  const handleMouseEnter = (i: number, isActive: boolean) => () => {
    if (!canHover) {
      return
    }

    runBackgroundSpring(
      i,
      isActive,
      hasNoActiveIndex.current && !isHovering.current
    )

    if (!isHovering.current) {
      isHovering.current = true
    }
  }

  const handleMouseLeave = () => {
    if (!canHover) {
      return
    }

    navBackgroundIsVisible.current = false

    const activeIndex = (items ?? []).findIndex((item) =>
      isNavItemActive(item, currentPath)
    )

    if (activeIndex >= 0) {
      runBackgroundSpring(activeIndex, true)
    } else {
      isHovering.current = false

      api.start({
        width: 0,
        height: 0,
        immediate: true,
      })
    }
  }

  const fontLoaded = useFontFaceObserver('Apfel Groteszk')

  useIsomorphicLayoutEffect(() => {
    const activeIndex = (items ?? []).findIndex((item) =>
      isNavItemActive(item, currentPath)
    )

    if (activeIndex >= 0 && fontLoaded) {
      hasNoActiveIndex.current = false
      runBackgroundSpring(activeIndex, true, true)
    } else {
      hasNoActiveIndex.current = true
    }
  }, [currentPath, items, runBackgroundSpring, fontLoaded])

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
        <NavBackground style={{ ...style, backgroundColor }} />
        <NavList>
          {Array.isArray(items)
            ? items.map((item, index) => {
                const isActive = isNavItemActive(item, currentPath)
                return (
                  <NavItem
                    ref={(ref) => {
                      navRefs.current[index] = ref!
                    }}
                    key={item.label}
                    onMouseEnter={handleMouseEnter(index, isActive)}
                  >
                    <NavLink
                      {...item}
                      style={{ color: isActive ? color : undefined }}
                    >
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

const isNavItemActive = (item: Sanity.Link, currentPath: string) =>
  urlIsReferenceGuard(item.url)
    ? currentPath === `/${item.url?.slug}` ||
      (currentPath.includes('projects') && item.label === 'Work')
    : currentPath === item.url

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
  p: PADDING,
  borderRadius: '$pill',
  border: '1px solid $grey25',
  boxShadow: '0px 0px 21px rgba(8, 11, 55, 0.03)',
  position: 'relative',
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

const NavLink = styled(animated(LinkBase), {
  textDecoration: 'none',
  display: 'block',
  fontSize: '$XS',
  lineHeight: '$XS',
  p: '$xxs',
  pb: 10,
  borderRadius: '$pill',
  width: '100%',
  height: '100%',
  color: '$black50',
})

const NavBackground = styled(animated.span, {
  position: 'absolute',
  zIndex: 0,
  top: 0,
  left: 0,
  backgroundColor: '$grey25',
  borderRadius: '$pill',
})
