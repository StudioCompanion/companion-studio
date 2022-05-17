import { useState, useRef, useEffect } from 'react'
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

  // :: ------------------------------------------------------
  let counter = 0

  setInterval(() => {
    if (typeof window !== 'undefined') {
      if (document.querySelector("link[rel='icon']") !== null)
        document.querySelector("link[rel='icon']")?.remove()

      document
        .querySelector('Head')
        ?.insertAdjacentHTML(
          'beforeend',
          '<link rel="icon" href="' +
            `faviconAnimated/Companion_Favicon_${counter}.png` +
            '" type="image/gif">'
        )

      if (counter === 62) {
        counter = 0
      } else {
        counter++
      }
    }
  }, 200)

  // useEffect(() => {
  //   let counter = 0

  //   setInterval(() => {
  //     faviconRef.current.href = `faviconAnimated/Companion_Favicon_${counter}.png`
  //     if (counter === 62) {
  //       counter = 0
  //     } else {
  //       counter++
  //     }
  //   }, 200)
  // }, [])

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
          rel="shortcut icon"
          href={'faviconAnimated/Companion_Favicon_00.png'}
          type="image/png"
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
