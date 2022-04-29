import { PropsWithChildren } from 'react'
import {
  PortableText,
  PortableTextReactComponents,
  PortableTextMarkComponentProps,
} from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import styled from 'styled-components'

import { Sanity, SanityGenerated } from 'src/types'

import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_APFEL_17_400,
  FONT_STYLE_APFEL_26_400,
  FONT_STYLE_APFEL_32_400,
  FONT_STYLE_APFEL_44_400,
  FONT_STYLE_APFEL_58_400,
  FONT_STYLE_RECKLESS_20_400,
  FONT_STYLE_RECKLESS_26_400,
} from 'styles/fonts'
import { PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'

import { isArrayGuard, isStringGuard } from 'helpers/guards'

import { InlineLink } from 'components/Links/InlineLink'

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

const TextContainer = styled.div``

const Heading1 = styled.h1`
  ${getFontStyles(FONT_STYLE_APFEL_58_400)}
`

const Heading2 = styled.h2`
  ${getFontStyles(FONT_STYLE_APFEL_44_400)}
`

const Heading3 = styled.h3`
  ${getFontStyles(FONT_STYLE_APFEL_32_400)}
`

const Heading4 = styled.h4`
  ${getFontStyles(FONT_STYLE_APFEL_26_400)}
`

const Heading5 = styled.h5`
  ${getFontStyles(FONT_STYLE_APFEL_17_400)}
`

const Squiggle = styled.span`
  ${getFontStyles(FONT_STYLE_RECKLESS_26_400)}
  margin-bottom: 20px;

  .underline {
    display: inline-block;
    position: relative;
  }
  .underline::after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    transform: translateY(30%);
    width: 100%;
    height: 20px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`

const SquiggleA = styled(Squiggle)`
  .underline--a::after {
    background-image: url('/images/graphics/team/underline_a.png');
  }
`

const SquiggleB = styled(Squiggle)`
  .underline--b::after {
    background-image: url('/images/graphics/team/underline_b.png');
  }
`

const SquiggleC = styled(Squiggle)`
  .underline--c::after {
    background-image: url('/images/graphics/team/underline_c.png');
  }
`

const SquiggleD = styled(Squiggle)`
  .underline--d::after {
    background-image: url('/images/graphics/team/underline_d.png');
  }
`

const SquiggleE = styled(Squiggle)`
  .underline--e::after {
    background-image: url('/images/graphics/team/underline_e.png');
  }
`

const SquiggleF = styled(Squiggle)`
  .underline--f::after {
    background-image: url('/images/graphics/team/underline_f.png');
  }
`

const Paragraph = styled.p`
  ${getFontStyles(FONT_STYLE_RECKLESS_20_400)}

  & + & {
    margin-top: ${PADDING.m}px;

    ${MEDIA_QUERIES.tabletUp} {
      margin-top: ${PADDING.m}px;
    }
  }
`

const BulletList = styled.ul`
  list-style: disc;
  ${getFontStyles(FONT_STYLE_RECKLESS_20_400)}
  padding-left: 1.7rem;
  margin: 0;

  ${MEDIA_QUERIES.tabletUp} {
    padding-left: 2rem;
  }
`

const NumberList = styled.ol`
  ${getFontStyles(FONT_STYLE_RECKLESS_20_400)}
  padding-left: 1.7rem;
  margin: 0;

  ${MEDIA_QUERIES.tabletUp} {
    padding-left: 2rem;
  }
`

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    normal: Paragraph,
    sqA: SquiggleA,
    sqB: SquiggleB,
    sqC: SquiggleC,
    sqD: SquiggleD,
    sqE: SquiggleE,
    sqF: SquiggleF,
  },
  list: {
    bullet: BulletList,
    number: NumberList,
  },
  marks: {
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
