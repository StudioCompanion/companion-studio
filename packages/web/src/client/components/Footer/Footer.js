import { useState, useEffect } from 'react'
import styled from 'styled-components'

import Image from 'next/image'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { COLORS, HIDDEN } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_17_400,
  FONT_STYLE_APFEL_12_400,
} from 'styles/fonts'

const Footer = () => {
  const dateFounded = new Date('2020-11-30').getTime()
  const [currentTime, setCurrentTime] = useState(Date.now())
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
    { title: 'Work', url: '/work' },
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

  const [showSuccess, setShowSuccess] = useState(false)

  const handleSuccess = () => {
    setShowSuccess(true)
  }
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLeft>
          <FooterText>
            Companion is based in London and has been operating globally for
            <span> {days}d </span>
            <span>{hours}h </span>
            <span>{minutes}min </span>
            <span>{seconds}s </span>. We are proud to contribute 5% of our
            annual revenue to organisations that create a better future for
            earth.
          </FooterText>
          <FooterPartnerLogos>
            <FooterPartnerLogo>
              <Image src={'/partnerlogo_1percent.svg'} width={83} height={35} />
            </FooterPartnerLogo>
            <FooterPartnerLogo>
              <Image src={'/partnerlogo_CLIP.svg'} width={55} height={35} />
            </FooterPartnerLogo>
            <FooterPartnerLogo>
              <Image
                src={'/partnerlogo_newfutures.svg'}
                width={58}
                height={35}
              />
            </FooterPartnerLogo>
            <FooterPartnerLogo>
              <Image src={'/partnerlogo_AHU.png'} width={94} height={9} />
            </FooterPartnerLogo>
          </FooterPartnerLogos>
        </FooterLeft>
        <FooterRight>
          <SignUp>
            <Formik
              initialValues={{ email: '' }}
              validate={(values) => {
                const errors = {}
                if (!values.email) {
                  errors.email = 'Please enter an email address'
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email =
                    'That didn’t work! Please enter a valid email address'
                }
                return errors
              }}
              onSubmit={async (values, { setSubmitting }) => {
                await new Promise((r) => setTimeout(r, 500))
                setSubmitting(false)
                handleSuccess()
              }}
            >
              {({ isSubmitting }) => (
                <SignUpForm>
                  <InputWrapper>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      placeholder={'Subscribe for occasional ramblings'}
                      type="email"
                      name="email"
                    />
                    <FormFeedback>
                      {!showSuccess && <Error name="email" component="div" />}
                      {showSuccess && (
                        <span>Success! Keep an eye out for our ramblings</span>
                      )}
                    </FormFeedback>
                  </InputWrapper>
                  <FormButton type={'submit'} disabled={isSubmitting}>
                    Submit
                  </FormButton>
                </SignUpForm>
              )}
            </Formik>
          </SignUp>
        </FooterRight>
      </FooterContent>
      <Imprint>
        <ImprintLeft>
          <ImprintLine>Companion Studio Ltd. (No. 13051984)</ImprintLine>
          <ImprintLine>32-38 Scrutton Street, London, EC2A 4RQ</ImprintLine>
        </ImprintLeft>
        <ImprintRight>
          <FooterLinks>
            {footerLinks.map((link, index) => (
              <Link key={index} href={link.url} passHref>
                <FooterLink>{link.title}</FooterLink>
              </Link>
            ))}
          </FooterLinks>
        </ImprintRight>
      </Imprint>
    </FooterContainer>
  )
}

Footer.propTypes = {}

export default Footer

const FooterContainer = styled.div`
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
  max-width: 450px;
  margin-right: 20px;
  ${MEDIA_QUERIES.tabletUp} {
    flex-shrink: 1;
  }
`
const FooterRight = styled.div`
  width: 100%;
  max-width: 450px;
  margin-top: 40px;
  ${MEDIA_QUERIES.tabletUp} {
    margin-top: 0;
  }
`
const FooterPartnerLogos = styled.div`
  display: flex;
  align-items: center;
  margin-right: -45px;
  margin-bottom: -45px;
  ${MEDIA_QUERIES.tabletUp} {
    flex-wrap: wrap;
  }
`
const FooterPartnerLogo = styled.div`
  margin-right: 45px;
  margin-bottom: 45px;
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
`
const SignUp = styled.div``
const SignUpForm = styled(Form)`
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
const Error = styled(ErrorMessage)``
const Label = styled.label`
  ${HIDDEN}
`
const Input = styled(Field)`
  width: 100%;
  padding: 6px 12px;
  ${getFontStyles(FONT_STYLE_APFEL_12_400)};
  background-color: transparent;
  border: 1px solid ${COLORS.white};
  border-radius: 500px;
  color: ${COLORS.white};
  &::placeholder {
    color: rgba(255, 255, 255, 57%);
  }
`
const FormButton = styled.button`
  ${getFontStyles(FONT_STYLE_APFEL_12_400)};
  background-color: ${COLORS.white};
  color: ${COLORS.darkblue};
  border-radius: 500px;
  border: none;
  cursor: pointer;
  padding: 6px;
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
