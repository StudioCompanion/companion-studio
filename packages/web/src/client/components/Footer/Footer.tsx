import { useState, useEffect } from 'react'
import styled from 'styled-components'

import Image from 'next/image'
import Link from 'next/link'
import isEmail from 'validator/lib/isEmail'

import { Input } from '../Inputs/Input'

import { COLORS, PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_17_400,
  FONT_STYLE_APFEL_12_400,
} from 'styles/fonts'
import { FadeUp } from 'components/Transitions/FadeUp'

const SignUpForm = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [value, setValue] = useState<string>('')

  const [touched, setTouched] = useState(false)

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )

  const handleBlur = () => {
    setTouched(true)
    setErrorMessage(validateForm(value))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (validateForm(value)) {
      e.preventDefault()
      setErrorMessage(validateForm(value))
    } else {
      setShowSuccess(true)
      setValue('')
      setTouched(false)
    }
  }

  const validateForm = (value: string) => {
    let error = undefined
    if (value === '' || value === null) {
      error = 'Please enter an email address'
    } else if (!isEmail(value)) {
      error = 'That didn’t work! Please enter a valid email address'
    }
    return error
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if ((errorMessage && errorMessage !== '') || touched) {
      setErrorMessage(validateForm(value))
    }
    if (showSuccess) {
      setShowSuccess(false)
    }
  }

  return (
    <SignUp>
      <iframe
        name="dummyframe"
        id="dummyframe"
        style={{ display: 'none' }}
      ></iframe>
      <Form
        action="https://companionstudio.substack.com/api/v1/free?nojs=true"
        target="dummyframe"
        method="post"
        onSubmit={handleSubmit}
      >
        <InputWrapper>
          <Input
            name={'email'}
            placeholder={'Subscribe for occasional ramblings'}
            type={'email'}
            value={value}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormFeedback>
            {errorMessage && errorMessage !== '' && <span>{errorMessage}</span>}
            {!(errorMessage && errorMessage !== '') && showSuccess && (
              <span>Success! Keep an eye out for our ramblings</span>
            )}
          </FormFeedback>
        </InputWrapper>
        <FormButton
          type={'submit'}
          value="Submit"
          disabled={Boolean(!value || (errorMessage && errorMessage !== ''))}
        >
          Submit
        </FormButton>
      </Form>
    </SignUp>
  )
}

export const Footer = () => {
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

  const footerLinks = [
    { title: 'Work', url: '/' },
    { title: 'Approach', url: '/approach' },
    { title: 'Team', url: '/team' },
    { title: 'Privacy', url: '/privacy' },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/companion_studio/?hl=en',
    },
    { title: 'Twitter', url: 'https://twitter.com/ourcompanion' },
    {
      title: 'Linkedin',
      url: 'https://www.linkedin.com/company/companion-studio',
    },
  ]

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
              {footerLinks.map((link, index) =>
                link?.url && link.url.startsWith('/') ? (
                  <Link key={index} href={link.url} passHref>
                    <FooterLink>{link.title}</FooterLink>
                  </Link>
                ) : (
                  <FooterLink
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.title}
                  </FooterLink>
                )
              )}
            </FooterLinks>
          </ImprintRight>
        </Imprint>
      </FooterContainer>
    </FadeUp>
  )
}

const FooterContainer = styled.footer`
  background-color: ${COLORS.darkblue};
  border-radius: 12px;
  color: ${COLORS.white};
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
    color: ${COLORS.white};

    &:hover {
      text-decoration: underline;
    }
  }
`
const SignUp = styled.div``
const Form = styled.form`
  display: flex;
  align-items: flex-start;
`
const InputWrapper = styled.div`
  flex-grow: 1;
  margin-right: 8px;
`
const FormFeedback = styled.div`
  margin-top: 8px;
  ${getFontStyles(FONT_STYLE_APFEL_12_400)}
`

const FormButton = styled.button`
  ${getFontStyles(FONT_STYLE_APFEL_12_400)};
  background-color: ${COLORS.white};
  color: ${COLORS.darkblue};
  border-radius: 500px;
  border: none;
  cursor: pointer;
  padding: 8px;
  padding-bottom: 9px;
  min-height: 30px;

  &:hover {
    opacity: 0.8;
  }
`
const FooterLinks = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  grid-template-rows: repeat(4, auto);
  column-gap: 50px;
  row-gap: 12px;
  ${MEDIA_QUERIES.tabletUp} {
    display: block;
    margin-right: -24px;
  }
`

const FooterLink = styled.a`
  ${getFontStyles(FONT_STYLE_APFEL_12_400)};
  text-decoration: none;
  color: ${COLORS.white};
  margin-right: 24px;

  &:hover {
    text-decoration: underline;
  }
`
