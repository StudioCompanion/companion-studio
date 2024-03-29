import { styled } from 'styles/stitches.config'

import { LinkBase } from 'components/Links/LinkBase'
import { Media } from 'components/Media/Media'

import { Sanity } from '@types'
import { Heading } from 'components/Text/Heading'

export const LinkTreeItem = ({ link, media }: Sanity.LinktreeItem) => {
  return (
    <LinkTreeItemContainer {...link}>
      {media ? <LinkTreeImage {...media} /> : null}
      <Heading tag="h2" fontStyle="M">
        {link?.label}
      </Heading>
    </LinkTreeItemContainer>
  )
}

const LinkTreeItemContainer = styled(LinkBase, {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$white100',
  my: '$s',
  p: '$xs',
  color: 'inherit',
  textDecoration: 'none',
  borderRadius: '$wrapperMobile',
  border: '1px solid transparent',

  hover: {
    backgroundColor: '$grey25',
    borderColor: '$grey50',
  },
})

const LinkTreeImage = styled(Media, {
  width: 40,
  height: 40,
  mr: '$s',
})
