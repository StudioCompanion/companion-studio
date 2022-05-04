import { ThemeTypes } from 'styles/constants'
import { styled } from 'styles/stitches.config'

import { LinkBase } from 'components/Links/LinkBase'

import { Sanity } from '@types'
import { MouseEventHandler } from 'react'

export interface ButtonInnerProps {
  text?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
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
  onClick,
}: ButtonProps) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <>
      {url ? (
        <ButtonAnchor onClick={handleClick} url={url} isExternal={isExternal}>
          <ButtonInner theme={theme} text={label} />
        </ButtonAnchor>
      ) : (
        <ButtonInner theme={theme} text={text} />
      )}
    </>
  )
}

export const ButtonContainer = styled('span', {
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
