import * as React from 'react'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'
import { CSS_GLOBAL } from 'styles/global'

const GlobalStyle = createGlobalStyle`
  ${CSS_GLOBAL}
`

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default App
