import styled from 'styled-components'
import Image from 'next/image'

import Logo from '../../public/images/graphics/logo.svg'
import LinkTree from 'components/LinkTree/LinkTree'
import SquiggleBackground from 'components/LinkTree/SquiggleBackground'

import { PADDING } from 'styles/constants'

const linkTree = () => {
  return (
    <>
      <SquiggleBackground />
      <LinkTreeContainer>
        <LinkTreeWrapper>
          <LogoContainer>
            <Image src={Logo} />
          </LogoContainer>
          <LinkTree items={items} />
        </LinkTreeWrapper>
      </LinkTreeContainer>
    </>
  )
}

export default linkTree

import cookie from '../../public/images/link-tree/cookie.gif'
import clip from '../../public/images/link-tree/clip.png'
import vcpu from '../../public/images/link-tree/vcpu.png'

const items = [
  {
    image: cookie,
    text: 'Partnership with Creative Lives in Progress',
    url: '#',
  },
  {
    image: clip,
    text: 'Item',
    url: '#',
  },
  {
    image: vcpu,
    text: 'Item',
    url: '#',
  },
]

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
