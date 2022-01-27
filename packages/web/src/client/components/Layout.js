import { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import { PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'

import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'

import Nav from './Nav/Nav'
import { Callout } from './Callout/Callout'
import { Footer } from './Footer/Footer'
import Splash from './Splash/Splash'

const Layout = ({ children }) => {
  const router = useRouter()
  const currentPath = router.pathname

  const [showSplash, setShowSplash] = useState(true)

  useIsomorphicLayoutEffect(() => {
    const shown = sessionStorage.getItem('splash_shown')
    if (Boolean(shown)) {
      setShowSplash(false)
    } else {
      sessionStorage.setItem('splash_shown', true)
    }
  }, [])

  return (
    <>
      {showSplash && <Splash />}
      <Nav currentPath={currentPath} />
      <Main $currentPath={currentPath}>{children}</Main>
      {currentPath !== '/instagram' && (
        <PaddingContainer>
          <Section>
            <Callout />
          </Section>
          <Footer />
        </PaddingContainer>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Main = styled.main`
  display: ${({ $currentPath }) =>
    $currentPath.includes('projects') ? `flex` : `block`};
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  padding: ${({ $currentPath }) =>
    $currentPath === '/team' ? `0px` : `0px ${PADDING.s}px`};
  ${MEDIA_QUERIES.tabletUp} {
    padding: ${({ $currentPath }) =>
      $currentPath === '/team' ? `0px` : `0px ${PADDING.m}px`};
  }
`
const Section = styled.section`
  margin-bottom: ${PADDING.s}px;
  ${MEDIA_QUERIES.tabletUp} {
    margin-bottom: ${PADDING.m}px;
  }
`

const PaddingContainer = styled.div`
  padding: 0 ${PADDING.s}px ${PADDING.s}px;
  ${MEDIA_QUERIES.tabletUp} {
    padding: 0 ${PADDING.m}px ${PADDING.s}px;
  }
`
