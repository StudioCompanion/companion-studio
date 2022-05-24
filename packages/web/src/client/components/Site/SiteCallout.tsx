import { Button } from 'components/Button/Button'
import { Media } from 'components/Media/Media'
import { FadeIn } from 'components/Transitions/FadeIn'
import { Heading } from 'components/Text/Heading'

import { ThemeTypes } from 'styles/constants'
import { styled } from 'styles/stitches.config'

import { Sanity } from '@types'

export const Callout = ({ text, link, media }: Sanity.Callout) => {
  if (!link) {
    return null
  }

  return (
    <FadeIn>
      <CalloutContainer>
        <div>
          <CalloutText tag="p" fontStyle="L">
            {text}
          </CalloutText>
          <Button {...link} theme={ThemeTypes.DARK} />
        </div>
        <CalloutImageWrapper>
          {media ? <Media {...media} /> : null}
        </CalloutImageWrapper>
      </CalloutContainer>
    </FadeIn>
  )
}

const CalloutContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '$cream100',
  borderRadius: '$wrapperLarge',
  p: '$s',
  textDecoration: 'none',
  color: 'inherit',

  '@tabletUp': {
    p: '$m',
  },
})

const CalloutText = styled(Heading, {
  mb: '3rem',

  '@tabletUp': {
    maxWidth: '53rem',
  },
})

const CalloutImageWrapper = styled('div', {
  display: 'none',
  flex: '0 0 17.4rem',

  '@tabletUp': {
    display: 'block',
    ml: 0,
    maxWidth: 'unset',
  },
})
