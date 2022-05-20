import { ThemeTypes } from 'styles/constants'
import { styled } from 'styles/stitches.config'

import { LinkBase } from 'components/Links/LinkBase'

import { Sanity } from '@types'
import { MouseEventHandler } from 'react'

export interface ButtonInnerProps {
  text?: string
  theme: ThemeTypes
}

export interface ButtonAnchorProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export const ButtonInner = ({ text, theme }: ButtonInnerProps) => {
  return <ButtonContainer theme={theme}>{text}</ButtonContainer>
}

export type ButtonProps = ButtonInnerProps &
  Partial<Sanity.Link> &
  ButtonAnchorProps

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
      {url && theme !== ThemeTypes.OUTLINED ? (
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
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: '$XS',
  lineHeight: '$XS',

  variants: {
    theme: {
      [ThemeTypes.OUTLINED]: {
        backgroundColor: 'transparent',
        border: 'solid 1px $white100',
        color: '$white100',
        cursor: 'default',
      },
      [ThemeTypes.LIGHT]: {
        backgroundColor: '$white100',
        color: '$black100',

        hover: {
          backgroundColor: '$white50',
        },
      },
      [ThemeTypes.GREY]: {
        backgroundColor: '$white50',
        color: '$black100',

        hover: {
          backgroundColor: '$black50',
        },
      },
      [ThemeTypes.DARK]: {
        backgroundColor: '$black100',
        color: '$white100',

        hover: {
          backgroundColor: '$black50',
        },
      },
    },
  },
})

const ButtonAnchor = styled(LinkBase, {
  display: 'inline-block',
})
