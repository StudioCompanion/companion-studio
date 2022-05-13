import { styled } from 'styles/stitches.config'

import { LinkBase } from 'components/Links/LinkBase'
import { Media } from 'components/Media/Media'

import { Sanity } from '@types'
import { Heading } from 'components/Text/Heading'

export const LinkTreeItem = ({ link, media }: Sanity.LinktreeItem) => {
  return (
    <LinkTreeItemContainer {...link}>
      {media ? <LinkTreeImage {...media} /> : null}
      <Heading tag="h2" fontStyle="$h5">
        {link?.label}
      </Heading>
    </LinkTreeItemContainer>
  )
}

const LinkTreeItemContainer = styled(LinkBase, {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$white50',
  my: '$s',
  p: '$xxs',
  color: 'inherit',
  textDecoration: 'none',
  borderRadius: '$wrapperMobile',
  border: '1px solid transparent',

  '&:hover': {
    backgroundColor: '$white100',
    borderColor: '$white50',
  },
})

const LinkTreeImage = styled(Media, {
  width: 40,
  height: 40,
  mr: '$s',
})
