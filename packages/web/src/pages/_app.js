import * as React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'
import { CSS_GLOBAL } from 'styles/global'
import { PADDING } from 'styles/constants'

import { Layout } from '../client/components/Layout'
import { Testimonial } from 'components/Testimonial/Testimonial'

const GlobalStyle = createGlobalStyle`
  ${CSS_GLOBAL}
`

const components = {
  blockquote: ({ children }) => <Testimonial>{children}</Testimonial>,
  h1: ({ children }) => <H1>{children}</H1>,
}

function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <MDXProvider components={components}>
        <Layout>
          <Component {...pageProps} />
          <GlobalStyle />
        </Layout>
      </MDXProvider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

export default App

const H1 = styled.h1`
  margin-bottom: ${PADDING.m}px;
`
