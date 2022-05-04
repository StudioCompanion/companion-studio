import { useState, useEffect } from 'react'
import Image from 'next/image'

import { Colors, PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_17_400,
  FONT_STYLE_APFEL_12_400,
} from 'styles/fonts'
import { styled } from 'styles/stitches.config'

import { Sanity } from '@types'

import { FadeUp } from 'components/Transitions/FadeUp'
import { SignUpForm } from 'components/Forms/FormFooter'
import { LinkBase } from 'components/Links/LinkBase'
import { Heading } from 'components/Text/Heading'

/**
 * TODO: make this CMS-able
 */
const partnerLogos = [
  {
    title: '1% for the Planet',
    url: 'https://www.onepercentfortheplanet.org/',
    image: '/images/graphics/partner-logos/partnerlogo_1percent.svg',
    width: 83,
    height: 35,
  },
  {
    title: 'Creative Lives in Progress',
    url: 'https://www.creativelivesinprogress.com/',
    image: '/images/graphics/partner-logos/partnerlogo_CLIP.svg',
    width: 55,
    height: 35,
  },
  {
    title: 'New Futures',
    url: 'https://newfutureshq.org.uk/',
    image: '/images/graphics/partner-logos/partnerlogo_newfutures.svg',
    width: 58,
    height: 35,
  },
  {
    title: 'ARTHOUSE Unlimited',
    url: 'https://arthouseunlimited.org/',
    image: '/images/graphics/partner-logos/partnerlogo_AHU.png',
    width: 94,
    height: 9,
  },
]

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

  return (
    <FadeUp>
      <FooterContainer>
        <FooterContent>
          <FooterLeft>
            <FooterText tag="p" fontStyle="$h5">
              Companion is based in London and has been operating globally for{' '}
              {days}d {hours}h {minutes}m {seconds}s. We are proud to contribute
              5% of our annual revenue to organisations that create a better
              future for earth.
            </FooterText>
            <FooterPartnerLogos>
              {partnerLogos.map(({ title, url, image, width, height }) => (
                <FooterPartnerLogo key={title} url={url} isExternal>
                  <Image
                    src={image}
                    width={width}
                    height={height}
                    alt={title}
                  />
                </FooterPartnerLogo>
              ))}
            </FooterPartnerLogos>
          </FooterLeft>
          <FooterForm />
        </FooterContent>
        <Imprint>
          <ImprintCopy tag="p" fontStyle="$h6">
            <ImprintLine>Companion Studio Ltd. (No. 13051984)</ImprintLine>
            <ImprintLine>
              <LinkBase
                css={{
                  '&:hover': {
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
                <FooterLink {...link}>{link.label}</FooterLink>
              </li>
            ))}
          </FooterLinks>
        </Imprint>
      </FooterContainer>
    </FadeUp>
  )
}

const FooterContainer = styled('footer', {
  backgroundColor: '$black',
  borderRadius: '$wrapperLarge',
  color: '$white',
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
  color: '$white',
  mb: '$l',
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

const FooterPartnerLogos = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const FooterPartnerLogo = styled(LinkBase, {
  '@media (hover: hover)': {
    '&:hover': {
      opacity: 0.5,
    },
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
  color: '$white',
  opacity: 0.5,

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
  fontSize: '$h6',
  lineHeight: '$h6',
  color: '$white',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, min-content)',
  gap: '1.2rem 5.4rem',

  '@tabletUp': {
    display: 'flex',
    gap: '$l',
  },
})

const FooterLink = styled(LinkBase, {
  textDecoration: 'none',

  '@media (hover: hover)': {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})
