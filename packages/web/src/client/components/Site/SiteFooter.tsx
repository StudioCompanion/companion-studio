import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { Colors, PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_17_400,
  FONT_STYLE_APFEL_12_400,
} from 'styles/fonts'

import { Sanity } from 'src/types'

import { FadeUp } from 'components/Transitions/FadeUp'
import { SignUpForm } from 'components/Forms/FormFooter'
import { LinkBase } from 'components/Links/LinkBase'

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
            <FooterText>
              Companion is based in London and has been operating globally for{' '}
              {days}d {hours}h {minutes}m {seconds}s. We are proud to contribute
              5% of our annual revenue to organisations that create a better
              future for earth.
            </FooterText>
            <FooterPartnerLogos>
              {partnerLogos.map(
                ({ title, url, image, width, height }, index) => (
                  <FooterPartnerLogo
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={image}
                      width={width}
                      height={height}
                      alt={title}
                    />
                  </FooterPartnerLogo>
                )
              )}
            </FooterPartnerLogos>
          </FooterLeft>
          <FooterRight>
            <SignUpForm />
          </FooterRight>
        </FooterContent>
        <Imprint>
          <ImprintLeft>
            <ImprintLine>Companion Studio Ltd. (No. 13051984)</ImprintLine>
            <ImprintLine>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://goo.gl/maps/qhhF9sFMuWqYgPTw5"
              >
                32-38 Scrutton Street, London, EC2A 4RQ
              </a>
            </ImprintLine>
          </ImprintLeft>
          <ImprintRight>
            <FooterLinks>
              {links?.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link}>{link.label}</FooterLink>
                </li>
              ))}
            </FooterLinks>
          </ImprintRight>
        </Imprint>
      </FooterContainer>
    </FadeUp>
  )
}

const FooterContainer = styled.footer`
  background-color: ${Colors.darkblue};
  border-radius: 12px;
  color: ${Colors.white};
  padding: 20px;
`
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  ${MEDIA_QUERIES.tabletUp} {
    flex-direction: row;
    justify-content: space-between;
  }
`
const FooterText = styled.p`
  ${getFontStyles(FONT_STYLE_RECKLESS_17_400)}
  margin-bottom: 20px;
`
const FooterLeft = styled.div`
  flex-shrink: 0;
  width: 100%;
  ${MEDIA_QUERIES.tabletUp} {
    max-width: 450px;
    margin-right: 20px;
    flex-shrink: 1;
  }
`
const FooterRight = styled.div`
  width: 100%;
  margin-top: ${PADDING.xl}px;
  ${MEDIA_QUERIES.tabletUp} {
    max-width: 450px;
    margin-top: 0;
  }
`
const FooterPartnerLogos = styled.div`
  display: flex;
  align-items: center;
  margin-right: -45px;
  margin-bottom: -45px;
  max-width: 100%;
  ${MEDIA_QUERIES.tabletUp} {
    flex-wrap: wrap;
  }
`
const FooterPartnerLogo = styled.a`
  display: block;
  margin-right: 45px;
  margin-bottom: 45px;

  &:hover {
    opacity: 0.5;
  }
`
const Imprint = styled.div`
  display: flex;
  ${getFontStyles(FONT_STYLE_APFEL_12_400)};
  margin-top: 50px;
  flex-direction: column;
  ${MEDIA_QUERIES.tabletUp} {
    margin-top: 140px;
    flex-direction: row;
    justify-content: space-between;
  }
`
const ImprintLeft = styled.div`
  flex-shrink: 0;
  max-width: 450px;
  order: 1;
  margin-top: 24px;
  ${MEDIA_QUERIES.tabletUp} {
    margin-top: 0;
    order: 0;
    flex-shrink: 1;
  }
`
const ImprintRight = styled.div`
  max-width: 450px;
  display: flex;
  align-items: flex-end;
`
const ImprintLine = styled.span`
  display: block;
  opacity: 0.5;
  a {
    text-decoration: none;
    color: ${Colors.white};

    &:hover {
      text-decoration: underline;
    }
  }
`

const FooterLinks = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  grid-template-rows: repeat(4, auto);
  column-gap: 50px;
  row-gap: 12px;

  ${MEDIA_QUERIES.tabletUp} {
    display: block;
    margin-right: -24px;

    & > li {
      display: inline-block;
    }
  }
`

const FooterLink = styled(LinkBase)`
  ${getFontStyles(FONT_STYLE_APFEL_12_400)};
  text-decoration: none;
  color: ${Colors.white};
  margin-right: 24px;

  &:hover {
    text-decoration: underline;
  }
`
