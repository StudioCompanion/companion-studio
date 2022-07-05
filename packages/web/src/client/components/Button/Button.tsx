import { ThemeTypes } from 'styles/constants'
import { styled } from 'styles/stitches.config'

import { LinkBase } from 'components/Links/LinkBase'

import { Sanity } from '@types'
import { MouseEventHandler } from 'react'

export interface ButtonInnerProps {
  text?: string
  theme?: ThemeTypes
  tag?: keyof Pick<JSX.IntrinsicElements, 'button' | 'span'>
  type?: string
  isOutlined?: boolean
  tabIndex?: number
}

export interface ButtonAnchorProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export const ButtonInner = ({
  text,
  tag = 'span',
  theme,
  type,
  isOutlined,
  tabIndex = 0,
}: ButtonInnerProps) => {
  return (
    // @ts-expect-error conflict using as with an optional `type` prop
    <ButtonContainer
      as={tag}
      theme={theme}
      type={tag === 'button' ? type : undefined}
      outlineTheme={isOutlined ? theme : undefined}
      tabIndex={tabIndex}
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
  type = 'button',
  isOutlined = false,
  tabIndex,
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
          <ButtonInner theme={theme} text={label} tabIndex={tabIndex} />
        </ButtonAnchor>
      ) : (
        <ButtonInner
          tag={isOutlined ? 'span' : 'button'}
          type={type}
          isOutlined={isOutlined}
          theme={theme}
          text={text}
          tabIndex={tabIndex}
        />
      )}
    </>
  )
}

export const ButtonContainer = styled('span', {
  display: 'inline-block',
  borderRadius: '$pill',
  p: '$xxs',
  m: 0,
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: '$XS',
  lineHeight: '$XS',
  border: 'none',
  fontWeight: '$regular',
  letterSpacing: '-0.01em',

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
          backgroundColor: '$grey100',
        },
      },
      [ThemeTypes.DARK]: {
        backgroundColor: '$black100',
        color: '$white100',

        hover: {
          backgroundColor: '$blackHover',
        },
      },
    },
  },
})

const ButtonAnchor = styled(LinkBase, {
  display: 'inline-block',
})
