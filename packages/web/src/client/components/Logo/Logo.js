import styled from 'styled-components'
import Image from 'next/image'

import staticLogo from '../../../../public/images/graphics/with-background.svg'

export const Logo = () => {
  return (
    <LogoContainer>
      <Image src={staticLogo} />
    </LogoContainer>
  )
}

const LogoContainer = styled.div`
  width: 100px;
`
