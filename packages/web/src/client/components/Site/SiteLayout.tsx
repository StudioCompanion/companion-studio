import { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'

import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'

import { Nav } from '../Headers/SiteHeader'
import { Splash } from '../Splash/Splash'

import { Callout } from './SiteCallout'
import { Footer } from './SiteFooter'
import { SiteSeo } from './SiteSeo'

import { Sanity } from 'src/types'

interface LayoutProps extends Sanity.DefaultLayoutProps {
  children: React.ReactNode
  documentMeta?: Sanity.Meta
  className?: string
}

export const Layout = ({
  children,
  defaultMeta,
  callout,
  navigation,
  footer,
  documentMeta,
  className,
}: LayoutProps) => {
  const router = useRouter()
  const currentPath = router.pathname

  const [showSplash, setShowSplash] = useState(true)

  useIsomorphicLayoutEffect(() => {
    const shown = sessionStorage.getItem('splash_shown')
    if (Boolean(shown)) {
      setShowSplash(false)
    } else {
      sessionStorage.setItem('splash_shown', 'true')
    }
  }, [])

  return (
    <>
      <SiteSeo defaultSeo={defaultMeta} meta={documentMeta} />
      {showSplash && <Splash />}
      <Nav items={navigation} currentPath={currentPath} />
      <Main className={className} $currentPath={currentPath}>
        {children}
      </Main>
      {currentPath !== '/instagram' && (
        <PaddingContainer>
          <Section>
            <Callout {...callout} />
          </Section>
          <Footer {...footer} />
        </PaddingContainer>
      )}
    </>
  )
}

const Main = styled.main<{ $currentPath: string }>`
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
