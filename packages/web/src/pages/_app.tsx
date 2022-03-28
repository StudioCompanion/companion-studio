import * as React from 'react'
import type { AppProps } from 'next/app'
import { TestimonialProps } from '../client/components/Testimonial/Testimonial'
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
  blockquote: ({ children }: TestimonialProps) => (
    <Testimonial>{children}</Testimonial>
  ),
  h1: ({ children }: HTMLHeadingElement) => <H1>{children}</H1>,
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
