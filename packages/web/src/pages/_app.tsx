import * as React from 'react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'

import { WidgetMarker } from 'components/Widgets/WidgetMarker'
import { WidgetAccessibe } from 'components/Widgets/WidgetAccessibe'

import { globalStyles } from 'styles/global'

import { useReducedMotion } from 'hooks/useReducedMotion'

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  useReducedMotion()

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <WidgetMarker />
      <WidgetAccessibe />
    </>
  )
}

export default App
