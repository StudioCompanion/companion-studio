import styled from 'styled-components'

import { SiteSeo } from 'components/Site/SiteSeo'
import { Logo } from 'components/Logo/Logo'

import { PADDING } from 'styles/constants'

import { Sanity } from 'src/types'

import { SquiggleBackground } from './SquiggleBackground'

interface LinkTreeLayoutProps extends Sanity.DefaultLayoutProps {
  children: React.ReactNode
  meta?: Sanity.Meta
}

export const LinkTreeLayout = ({
  children,
  defaultMeta,
  meta,
}: LinkTreeLayoutProps) => {
  return (
    <>
      <SiteSeo defaultSeo={defaultMeta} meta={meta} />
      <SquiggleBackground />
      <LinkTreeContainer>
        <LinkTreeWrapper>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          {children}
        </LinkTreeWrapper>
      </LinkTreeContainer>
    </>
  )
}

const LinkTreeContainer = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
`
const LinkTreeWrapper = styled.article`
  width: 100%;
  max-width: 800px;
`
const LogoContainer = styled.header`
  display: flex;
  justify-content: center;
  max-width: 90px;
  margin: ${PADDING.xl}px auto;
  width: 100%;
`
