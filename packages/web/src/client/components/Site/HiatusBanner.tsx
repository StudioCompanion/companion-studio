import { styled } from 'styles/stitches.config'
import { Heading } from 'components/Text/Heading'

export const HiatusBanner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerText tag="p" fontStyle="XS">
          We're currently on hiatus and not taking new projects, but you can still{' '}
          <BannerLink href="mailto:hello@companion.studio">
            reach out our founder
          </BannerLink>
          .
        </BannerText>
      </BannerContent>
    </BannerContainer>
  )
}

const BannerContainer = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: '$max',
  backgroundColor: '$blue100',
  color: '$white100',
})

const BannerContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  p: '$xs $s',
  textAlign: 'center',
  minHeight: '4rem',

  '@tabletUp': {
    p: '$s $m',
    minHeight: '4.8rem',
  },
})

const BannerText = styled(Heading, {
  margin: 0,
  fontWeight: '$bold',
  lineHeight: '1.4',
})

const BannerLink = styled('a', {
  color: '$white100',
  textDecoration: 'underline',
  transition: 'text-decoration 250ms ease-in-out',
  
  hover: {
    textDecoration: 'none',
  },

  '&:visited': {
    color: '$white100',
  },
}) 