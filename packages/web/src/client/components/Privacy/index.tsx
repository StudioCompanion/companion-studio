import { styled } from 'styles/stitches.config'

export const PrivacyContainer = styled('div', {
  mb: '$xxl',

  '@tabletUp': {
    maxWidth: '$centeredParagraph',
  },
})

export const PrivacyWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})
