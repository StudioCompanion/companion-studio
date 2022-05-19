import { PropsWithChildren } from 'react'
import {
  PortableText,
  PortableTextReactComponents,
  PortableTextMarkComponentProps,
} from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

import { Sanity, SanityGenerated } from '@types'

import { getFontStyle } from 'styles/getFontStyles'
import { styled } from 'styles/stitches.config'

import { isArrayGuard, isStringGuard } from 'helpers/guards'

import { InlineLink } from 'components/Links/InlineLink'
import { Heading } from 'components/Text/Heading'

interface RichTextRendererProps {
  blocks: PortableTextBlock | SanityGenerated.RichText
  className?: string
}

export const RendererRichText = ({
  blocks,
  className,
}: RichTextRendererProps) => (
  <TextContainer className={className}>
    <PortableText value={blocks as PortableTextBlock} components={components} />
  </TextContainer>
)

const TextContainer = styled('div')

const BulletList = styled('ul', {
  listStyle: 'disc',
  pl: `${4 / 3}em`,
  m: 0,
})

const NumberList = styled('ol', {
  pl: `${4 / 3}em`,
  m: 0,
})

const getMarginFromStyle = (style: 'L' | 'normal' | 'S') => {
  switch (style) {
    case 'L':
      return '$s'
    case 'normal':
      return '$xs'
    case 'S':
      return '$xxs'
    default:
      return ''
  }
}

const availableHeadings = new Array(3)
  .fill(null)
  .map((_, i) => `h${i + 1} + &`)
  .reduce((acc, curr) => `${acc ? `${acc},` : acc} ${curr}`, '')

const components: Partial<PortableTextReactComponents> = {
  block: {
    XXXL: ({ ...props }) => <Heading tag="h1" fontStyle="XXXL" {...props} />,
    XXL: ({ ...props }) => <Heading tag="h2" fontStyle="XXL" {...props} />,
    XL: ({ ...props }) => <Heading tag="h3" fontStyle="XL" {...props} />,
    L: ({ ...props }) => (
      <Heading
        tag="p"
        fontStyle="L"
        css={{
          [availableHeadings]: {
            mt: '$xs',
          },
          '& + &': {
            mt: '$s',
          },
        }}
        {...props}
      />
    ),
    normal: ({ ...props }) => (
      <Heading
        tag="p"
        fontStyle="M"
        css={{
          [availableHeadings]: {
            mt: '$xs',
          },
          '& + &': {
            mt: '$xs',
          },
        }}
        {...props}
      />
    ),
    S: ({ ...props }) => (
      <Heading
        tag="p"
        fontStyle="S"
        css={{
          [availableHeadings]: {
            mt: '$xxs',
          },
          '& + &': {
            mt: '$xxs',
          },
        }}
        {...props}
      />
    ),
  },
  list: {
    bullet: (props) => {
      // @ts-ignore
      const [{ style }] = props.value.children

      return (
        <BulletList
          css={{
            // @ts-ignore
            ...getFontStyle(`${style === 'normal' ? 'M' : style}`),

            'p + &': {
              mt: getMarginFromStyle(style),
            },
          }}
        >
          {props.children}
        </BulletList>
      )
    },
    number: (props) => {
      // @ts-ignore
      const [{ style }] = props.value.children

      return (
        <NumberList
          css={{
            // @ts-ignore
            ...getFontStyle(`${style === 'normal' ? 'M' : style}`),

            'p + &': {
              mt: getMarginFromStyle(style),
            },
          }}
        >
          {props.children}
        </NumberList>
      )
    },
  },
  marks: {
    link: (
      props: PropsWithChildren<
        PortableTextMarkComponentProps<Sanity.Link & { _type: 'link' }>
      >
    ) => {
      return isArrayGuard(props.children) &&
        isStringGuard(props.children[0]) ? (
        <InlineLink
          {...props.value}
          label={props.children[0]}
          css={{
            textDecoration: 'underline',
            '&:hover': {
              textDecoration: 'none',
            },
          }}
        />
      ) : null
    },
  },
}
