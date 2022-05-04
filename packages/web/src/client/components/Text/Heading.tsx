import { forwardRef } from 'react'

import { getFontStyle } from 'styles/getFontStyles'
import { CSS, ScaleValue, styled } from 'styles/stitches.config'

export interface Props {
  children?: React.ReactNode
  className?: string
  tag?: keyof Pick<
    JSX.IntrinsicElements,
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  >
  fontStyle?: ScaleValue<'fontSizes'>
  weight?: ScaleValue<'fontWeights'>
  css?: CSS
}

export const Heading = forwardRef<HTMLHeadingElement, Props>(
  (
    {
      tag = 'h1',
      fontStyle = '$h1',
      weight = '$regular',
      children,
      className,
      css,
    },
    ref
  ) => {
    return (
      <Element
        className={className}
        ref={ref}
        as={tag}
        css={{
          fontWeight: weight,
          ...getFontStyle(fontStyle),
          ...css,
        }}
      >
        {children}
      </Element>
    )
  }
)

const Element = styled('h1', {
  color: '$black',

  '& > a': {
    textDecoration: 'none',
  },
})
