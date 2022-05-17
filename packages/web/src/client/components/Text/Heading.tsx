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
  fontStyle?: 'XXXL' | 'XXL' | 'XL' | 'L' | 'M' | 'S' | 'XS' | 'XXS'
  weight?: ScaleValue<'fontWeights'>
  css?: CSS
}

export const Heading = forwardRef<HTMLHeadingElement, Props>(
  (
    {
      tag = 'h1',
      fontStyle = 'XXS',
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
        size={fontStyle}
        css={{
          fontWeight: weight,
          ...css,
        }}
      >
        {children}
      </Element>
    )
  }
)

const Element = styled('h1', {
  '& > a': {
    textDecoration: 'none',
  },

  variants: {
    size: {
      ['XXXL']: {
        ...getFontStyle('$XXXL'),
      },
      ['XXL']: {
        ...getFontStyle('$XXL'),
      },
      ['XL']: {
        ...getFontStyle('$XL'),
      },
      ['L']: {
        ...getFontStyle('$L'),
      },
      ['M']: {
        ...getFontStyle('$M'),
      },
      ['S']: {
        ...getFontStyle('$S'),
      },
      ['XS']: {
        ...getFontStyle('$XS'),
      },
      ['XXS']: {
        ...getFontStyle('$XXS'),
      },
    },
  },
})
