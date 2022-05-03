import styled from 'styled-components'

import { Sanity } from '@types'

import { Colors } from 'styles/constants'

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

const Anchor = styled(LinkBase)`
  color: ${Colors.blue};
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
