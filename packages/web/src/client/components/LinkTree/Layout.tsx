import { SiteSeo } from 'components/Site/SiteSeo'
import { Logo } from 'components/Logo/Logo'

import { styled } from 'styles/stitches.config'

import { Sanity } from '@types'

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

const LinkTreeContainer = styled('main', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
})

const LinkTreeWrapper = styled('article', {
  width: '100%',
  maxWidth: '$documentWrapper',
})

const LogoContainer = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '9rem',
  m: '$xl auto',
  width: '100%',
})
