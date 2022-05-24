import { ThemeTypes } from 'styles/constants'
import { styled } from 'styles/stitches.config'

import { LinkBase } from 'components/Links/LinkBase'

import { Sanity } from '@types'
import { MouseEventHandler } from 'react'

export interface ButtonInnerProps {
  text?: string
  theme?: ThemeTypes
  isOutlined?: boolean
}

export interface ButtonAnchorProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export const ButtonInner = ({ text, theme, isOutlined }: ButtonInnerProps) => {
  return (
    <ButtonContainer
      theme={theme}
      outlineTheme={isOutlined ? theme : undefined}
    >
      {text}
    </ButtonContainer>
  )
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
  isOutlined = false,
}: ButtonProps) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <>
      {url && !isOutlined ? (
        <ButtonAnchor onClick={handleClick} url={url} isExternal={isExternal}>
          <ButtonInner theme={theme} text={label} />
        </ButtonAnchor>
      ) : (
        <ButtonInner isOutlined={isOutlined} theme={theme} text={text} />
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
    outlineTheme: {
      [ThemeTypes.LIGHT]: {
        backgroundColor: 'transparent',
        border: 'solid 1px $white100',
        color: '$white100',
        cursor: 'default',

        hover: {
          backgroundColor: 'transparent',
        },
      },
      [ThemeTypes.DARK]: {
        backgroundColor: 'transparent',
        border: 'solid 1px $black100',
        color: '$black100',
        cursor: 'default',

        hover: {
          backgroundColor: 'transparent',
        },
      },
    },
    theme: {
      [ThemeTypes.LIGHT]: {
        backgroundColor: '$white100',
        color: '$black100',

        hover: {
          backgroundColor: '$white50',
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
