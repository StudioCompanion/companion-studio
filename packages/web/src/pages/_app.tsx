import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { DefaultSeo } from 'next-seo'

// import SEO from '../../next-seo.config'
import SEO from '.'
import { CSS_GLOBAL } from 'styles/global'
import { PADDING } from 'styles/constants'

import { Layout } from '../client/components/Layout'
import { Testimonial } from 'components/Testimonial/Testimonial'

const GlobalStyle = createGlobalStyle`
  ${CSS_GLOBAL}
`

const components = {
  blockquote: ({ children }: any) => <Testimonial>{children}</Testimonial>,
  h1: ({ children }: any) => <H1>{children}</H1>,
}

interface AppProps {
  Component: () => JSX.Element
  pageProps: object
}

const App = ({ Component, pageProps }: AppProps) => {
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

export default App

const H1 = styled.h1`
  margin-bottom: ${PADDING.m}px;
`
