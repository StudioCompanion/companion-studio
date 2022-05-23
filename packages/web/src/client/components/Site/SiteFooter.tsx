import { styled } from 'styles/stitches.config'

import { Sanity } from '@types'

import { FadeIn } from 'components/Transitions/FadeIn'
import { SignUpForm } from 'components/Forms/FormFooter'
import { LinkBase } from 'components/Links/LinkBase'
import { Heading } from 'components/Text/Heading'
import { EventNames, firePlausibleEvent } from 'helpers/analytics'
import { getFontStyle } from 'styles/getFontStyles'
import { RendererRichText } from 'components/Renderer/RendererRichText'

export const Footer = ({ links, text }: Sanity.Footer) => {
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
        <FooterLeft>{text ? <FooterText blocks={text} /> : null}</FooterLeft>
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

const FooterText = styled(RendererRichText, {
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
