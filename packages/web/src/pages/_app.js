import * as React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'
import { CSS_GLOBAL } from 'styles/global'

import Layout from '../client/components/Layout'

const GlobalStyle = createGlobalStyle`
  ${CSS_GLOBAL}
`

const components = {}

function App({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <MDXProvider components={components}>
        <Component {...pageProps} />
        <GlobalStyle />
      </MDXProvider>
    </Layout>
  )
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

export default App
