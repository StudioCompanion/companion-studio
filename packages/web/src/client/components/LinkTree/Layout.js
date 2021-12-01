import styled from 'styled-components'
import PropTypes from 'prop-types'
import Image from 'next/image'

import SquiggleBackground from 'components/LinkTree/SquiggleBackground'

import { PADDING } from 'styles/constants'

import Logo from '../../../../public/images/graphics/logo.svg'

export const LinktreeLayout = ({ children }) => {
  return (
    <>
      <SquiggleBackground />
      <LinkTreeContainer>
        <LinkTreeWrapper>
          <LogoContainer>
            <Image src={Logo} />
          </LogoContainer>
          {children}
        </LinkTreeWrapper>
      </LinkTreeContainer>
    </>
  )
}

LinktreeLayout.propTypes = {
  children: PropTypes.any,
}

const LinkTreeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`
const LinkTreeWrapper = styled.div`
  width: 100%;
  max-width: 800px;
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 90px;
  margin: ${PADDING.xl}px auto;
  width: 100%;
`
