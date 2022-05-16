import { Sanity } from '@types'

import { styled } from 'styles/stitches.config'

import { LinkBase } from './LinkBase'

interface InlineLinkProps extends Sanity.Link {
  className?: string
}

export const InlineLink = (props: InlineLinkProps) => {
  const { label, ...restProps } = props
  return (
    <Anchor {...restProps}>
      <span>{label}</span>
    </Anchor>
  )
}

const Anchor = styled(LinkBase, {
  color: '$blue',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  fontFamily: 'inherit',
  textDecoration: 'none',

  hover: {
    textDecoration: 'underline',
  },
})
