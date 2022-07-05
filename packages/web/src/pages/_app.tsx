import * as React from 'react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'

import { WidgetMarker } from 'components/Widgets/WidgetMarker'
import { WidgetAccessibe } from 'components/Widgets/WidgetAccessibe'

import { globalStyles } from 'styles/global'

import { useReducedMotion } from 'hooks/useReducedMotion'
import { WidgetPlausible } from 'components/Widgets/WidgetPlausible'

globalStyles()

const App = ({ Component, pageProps }: AppProps) => {
  useReducedMotion()

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <WidgetMarker />
      <WidgetAccessibe />
      <WidgetPlausible />
    </>
  )
}

export default App
