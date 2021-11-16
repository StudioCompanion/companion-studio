import styled from 'styled-components'
import PropTypes from 'prop-types'

import { PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'

import Nav from './Nav/Nav'
import Callout from './Callout/Callout'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
  return (
    <Outer>
      <Nav />
      <main>{children}</main>
      <Section>
        <Callout />
      </Section>
      <footer>
        <Footer />
      </footer>
    </Outer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Outer = styled.div`
  padding: ${PADDING.s}px;
  ${MEDIA_QUERIES.tabletUp} {
    padding: ${PADDING.m}px;
  }
`
const Section = styled.section`
  margin-bottom: ${PADDING.s}px;
  ${MEDIA_QUERIES.tabletUp} {
    margin-bottom: ${PADDING.m}px;
  }
`
