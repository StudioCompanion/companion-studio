import { ThemeTypes } from 'styles/constants'
import { styled } from 'styles/stitches.config'

import { LinkBase } from 'components/Links/LinkBase'

import { Sanity } from '@types'

export interface ButtonInnerProps {
  text?: string
  theme: ThemeTypes
}

export const ButtonInner = ({ text, theme }: ButtonInnerProps) => {
  return <ButtonContainer theme={theme}>{text}</ButtonContainer>
}

export type ButtonProps = ButtonInnerProps & Partial<Sanity.Link>

export const Button = ({
  text,
  theme = ThemeTypes.LIGHT,
  label,
  url,
  isExternal,
}: ButtonProps) => {
  return (
    <>
      {url ? (
        <ButtonAnchor url={url} isExternal={isExternal}>
          <ButtonInner theme={theme} text={label} />
        </ButtonAnchor>
      ) : (
        <ButtonInner theme={theme} text={text} />
      )}
    </>
  )
}

export const ButtonContainer = styled('div', {
  display: 'inline-block',
  borderRadius: '$pill',
  p: '$xxs',
  pb: 9,
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: '$h6',
  lineHeight: '$h6',

  variants: {
    theme: {
      [ThemeTypes.LIGHT]: {
        backgroundColor: '$white',
        color: '$black',

        '@media(hover:hover)': {
          '&:hover': {
            backgroundColor: '$lightGrey',
          },
        },
      },
      [ThemeTypes.GREY]: {
        backgroundColor: '$lightGrey',
        color: '$black',

        '@media(hover:hover)': {
          '&:hover': {
            backgroundColor: '$black70',
          },
        },
      },
      [ThemeTypes.DARK]: {
        backgroundColor: '$black',
        color: '$white',

        '@media(hover:hover)': {
          '&:hover': {
            backgroundColor: '$black70',
          },
        },
      },
    },
  },
})

const ButtonAnchor = styled(LinkBase, {
  display: 'inline-block',
})
