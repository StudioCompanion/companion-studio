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

const Squiggle = styled('span', {
  position: 'relative',
  zIndex: 0,

  '&::after': {
    content: '',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    left: 0,
    transform: 'translateY(50%)',
    width: '100%',
    height: 20,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
})

const BulletList = styled('ul', {
  ...getFontStyle('$body'),
  listStyle: 'disc',
  pl: '$s',
  m: 0,

  '@tabletUp': {
    pl: '$m',
  },
})

const NumberList = styled('ol', {
  ...getFontStyle('$body'),
  pl: '$s',
  m: 0,

  '@tabletUp': {
    pl: '$m',
  },
})

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ ...props }) => <Heading tag="h1" fontStyle="$h1" {...props} />,
    h2: ({ ...props }) => <Heading tag="h2" fontStyle="$h2" {...props} />,
    h3: ({ ...props }) => <Heading tag="h3" fontStyle="$h3" {...props} />,
    h4: ({ ...props }) => <Heading tag="h4" fontStyle="$h4" {...props} />,
    h5: ({ ...props }) => <Heading tag="h5" fontStyle="$h5" {...props} />,
    normal: ({ ...props }) => (
      <Heading
        tag="p"
        fontStyle="$body"
        css={{
          '& + &': {
            mt: '$m',
          },
        }}
        {...props}
      />
    ),
  },
  list: {
    bullet: BulletList,
    number: NumberList,
  },
  marks: {
    squiggle: (
      props: PropsWithChildren<
        PortableTextMarkComponentProps<{
          _type: 'squiggle'
          squiggleType: 'a' | 'b' | 'c' | 'd' | 'e' | 'f'
        }>
      >
    ) => {
      const { value, children } = props

      if (!value) {
        return <>{children}</>
      }

      return (
        <Squiggle
          css={{
            backgroundImage: `url('/images/graphics/team/underline_${value.squiggleType}.png')`,
          }}
        >
          {children}
        </Squiggle>
      )
    },
    link: (
      props: PropsWithChildren<
        PortableTextMarkComponentProps<Sanity.Link & { _type: 'link' }>
      >
    ) => {
      return isArrayGuard(props.children) &&
        isStringGuard(props.children[0]) ? (
        <InlineLink {...props.value} label={props.children[0]} />
      ) : null
    },
  },
}
