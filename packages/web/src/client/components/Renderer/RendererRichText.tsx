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
import { FONT_STYLE_RECKLESS_20_400 } from 'styles/fonts'
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
/**
 * TODO: Add text styles
 * across the board
 */
const TextContainer = styled.div``

const Heading1 = styled.h1``

const Heading2 = styled.h2``

const Heading3 = styled.h3``

const Heading4 = styled.h4``

const Heading5 = styled.h5``

const Paragraph = styled.p`
  ${getFontStyles(FONT_STYLE_RECKLESS_20_400)}

  & + & {
    margin-top: ${PADDING.m}px;

    ${MEDIA_QUERIES.tabletUp} {
      margin-top: ${PADDING.m}px;
    }
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
