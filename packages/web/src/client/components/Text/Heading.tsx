/* eslint-disable react/display-name */
import { createElement, CSSProperties, ForwardedRef, forwardRef } from 'react'
import styled from 'styled-components'

import { getFontStyles } from 'styles/getFontStyles'
import { FONT_STYLE_RECKLESS_12_400 } from 'styles/fonts'
import { Colors } from 'styles/constants'

export interface Props {
  children: React.ReactNode
  color?: string
  className?: string
  tag?: string
  style?: CSSProperties
  fontStyle?: string
}

export const Heading = forwardRef<HTMLElement, Props>(
  (
    {
      children,
      fontStyle = FONT_STYLE_RECKLESS_12_400,
      color,
      className,
      tag = 'h1',
    },
    ref
  ) => {
    return (
      <Element
        className={className}
        fontStyle={fontStyle}
        color={color}
        tag={tag}
        forwardedRef={ref}
      >
        {children}
      </Element>
    )
  }
)

type ElementProps = Omit<Props, 'tag' | 'fontStyle'> &
  Required<Pick<Props, 'tag' | 'fontStyle'>> & {
    forwardedRef: ForwardedRef<HTMLElement>
  }

const Element = styled(({ tag, children, ...props }: ElementProps) => {
  return createElement(
    tag,
    {
      className: props.className,
      ref: props.forwardedRef,
    },
    children
  )
})`
  ${(props) => getFontStyles(props.fontStyle)}
  color: ${(props) => (props.color ? props.color : Colors.darkblue)};
`
