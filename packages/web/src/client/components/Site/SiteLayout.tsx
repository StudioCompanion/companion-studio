import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { styled } from 'styles/stitches.config'

import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'

import { Nav } from '../Headers/SiteHeader'
import { Splash } from '../Splash/Splash'

import { Callout } from './SiteCallout'
import { Footer } from './SiteFooter'
import { SiteSeo } from './SiteSeo'

import { Sanity } from '@types'

import Head from 'next/head'

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

  useEffect(() => {
    let counter = 0

    const link = document.querySelector('link#favicon')

    /**
     * These are the old links that we set in `_document`
     * lets remove them from the DOM on mount
     */
    const icon32 = document.querySelector('link#icon32')
    const icon16 = document.querySelector('link#icon16')
    const ico = document.querySelector('link#ico')

    if (icon32) {
      icon32.remove()
    }
    if (icon16) {
      icon16.remove()
    }
    if (ico) {
      ico.remove()
    }

    /**
     * Animate logo function, could be doing in a raf call?
     */
    const animateLogo = () => {
      if (link) {
        link.setAttribute(
          'href',
          `/images/favicon-sequence/Companion_Favicon${counter}.png`
        )

        if (counter === 149) {
          counter = 0
        } else {
          counter += 1
        }
      }
    }

    // 60FPS
    const timerId = setInterval(animateLogo, 1000 / 60)

    return () => {
      /**
       * Clear interval on cleanup.
       */
      clearInterval(timerId)
    }
    // mount only effect.
  }, [])

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
      <Head>
        <link
          id="favicon"
          rel="icon"
          href={'/images/faviconAnimated/Companion_Favicon_0.png'}
          type="image/gif"
        />
      </Head>
      {showSplash && <Splash />}
      <Nav items={navigation} currentPath={currentPath} />
      <Main className={className} isTeamRoute={currentPath === '/team'}>
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

const Main = styled('main', {
  px: '$s',

  '@tabletUp': {
    px: '$m',
  },

  variants: {
    isTeamRoute: {
      true: {
        p: 0,

        '@tabletUp': {
          p: 0,
        },
      },
    },
  },
})

const Section = styled('section', {
  mb: '$s',

  '@tabletUp': {
    mb: '$m',
  },
})

const PaddingContainer = styled('div', {
  mt: '$s',
  px: '$s',
  pb: '$s',

  '@tabletUp': {
    px: '$m',
    mt: '$xl',
  },
})
