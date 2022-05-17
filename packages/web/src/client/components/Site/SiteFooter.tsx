import { useState, useEffect } from 'react'

import { styled } from 'styles/stitches.config'

import { Sanity } from '@types'

import { FadeIn } from 'components/Transitions/FadeIn'
import { SignUpForm } from 'components/Forms/FormFooter'
import { LinkBase } from 'components/Links/LinkBase'
import { Heading } from 'components/Text/Heading'
import { EventNames, firePlausibleEvent } from 'helpers/analytics'
import { getFontStyle } from 'styles/getFontStyles'

export const Footer = ({ links }: Sanity.Footer) => {
  /**
   * TODO: replace with date-fns
   */
  const dateFounded = new Date('2020-11-30').getTime()
  const [currentTime, setCurrentTime] = useState<number>(0)
  const timeActive = currentTime - dateFounded
  const seconds = Math.floor((timeActive / 1000) % 60)
  const minutes = Math.floor((timeActive / 1000 / 60) % 60)
  const hours = Math.floor((timeActive / (1000 * 60 * 60)) % 24)
  const days = Math.floor(timeActive / (1000 * 60 * 60 * 24))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleSocialClick = (social?: string) => () => {
    if (
      social === 'LinkedIn' ||
      social === 'Twitter' ||
      social === 'Instagram'
    ) {
      firePlausibleEvent({
        name: EventNames.SocialClick,
        additionalProps: {
          social,
        },
      })
    }
  }

  return (
    <FooterContainer tag="footer">
      <FooterContent>
        <FooterLeft>
          <FooterText tag="p" fontStyle="S">
            Companion is based in London and has been operating globally for{' '}
            {days}d {hours}h {minutes}m {seconds}s.
            <br />
            <br />
            We are proud to contribute 5% of our annual revenue to organisations
            that create a better future for earth.
          </FooterText>
        </FooterLeft>
        <FooterForm />
      </FooterContent>
      <Imprint>
        <ImprintCopy tag="p" fontStyle="XS">
          <ImprintLine>Companion Studio Ltd. (No. 13051984)</ImprintLine>
          <ImprintLine>
            <LinkBase
              css={{
                hover: {
                  textDecoration: 'underline',
                },
              }}
              url="https://goo.gl/maps/qhhF9sFMuWqYgPTw5"
              isExternal
            >
              32-38 Scrutton Street, London, EC2A 4RQ
            </LinkBase>
          </ImprintLine>
        </ImprintCopy>
        <FooterLinks>
          {links?.map((link) => (
            <li key={link.label}>
              <FooterLink {...link} onClick={handleSocialClick(link.label)}>
                {link.label}
              </FooterLink>
            </li>
          ))}
        </FooterLinks>
      </Imprint>
    </FooterContainer>
  )
}

const FooterContainer = styled(FadeIn, {
  backgroundColor: '$blue100',
  borderRadius: '$wrapperLarge',
  color: '$white100',
  p: '$s',

  '@tabletUp': {
    p: '$m',
  },
})

const FooterContent = styled('div', {
  mb: '$xxl',

  '@tabletUp': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '$m',
    mb: '14.5rem',

    '& > *': {
      flex: 1,
    },
  },
})

const FooterText = styled(Heading, {
  color: '$white100',
  mb: '$l',
  fontSize: '$S !important',
  lineHeight: '$S !important',
})

const FooterLeft = styled('div', {
  '@tabletUp': {
    maxWidth: '$footerWrapper',
  },
})

const FooterForm = styled(SignUpForm, {
  mt: '$xl',

  '@tabletUp': {
    mt: 0,
    maxWidth: '$footerWrapper',
  },
})

const Imprint = styled('div', {
  display: 'flex',
  flexDirection: 'column-reverse',

  '@tabletUp': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
})

const ImprintCopy = styled(Heading, {
  mt: '$l',
  color: '$white100',

  '@tabletUp': {
    mt: 0,
  },
})

const ImprintLine = styled('span', {
  display: 'block',

  '& > a': {
    textDecoration: 'none',
  },
})

const FooterLinks = styled('ul', {
  color: '$white100',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, min-content)',
  gap: '1.2rem 5.4rem',

  ...getFontStyle('$XS'),

  '@tabletUp': {
    display: 'flex',
    gap: '$l',
  },
})

const FooterLink = styled(LinkBase, {
  textDecoration: 'none',

  hover: {
    textDecoration: 'underline',
  },
})
