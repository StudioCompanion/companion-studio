import styled from 'styled-components'

import { getFontStyles } from 'styles/getFontStyles'
import { FONT_STYLE_RECKLESS_17_400 } from 'styles/fonts'
import { Colors, PADDING, RADII } from 'styles/constants'

import { LinkBase } from 'components/Links/LinkBase'
import { Media } from 'components/Media/Media'

import { Sanity } from 'src/types'

export const LinkTreeItem = ({ link, media }: Sanity.LinktreeItem) => {
  return (
    <LinkTreeItemContainer {...link}>
      {media ? <LinkTreeImage {...media} /> : null}
      <LinkTreeItemText>{link?.label}</LinkTreeItemText>
    </LinkTreeItemContainer>
  )
}

const LinkTreeItemContainer = styled(LinkBase)`
  display: flex;
  align-items: center;
  background-color: ${Colors.lightgrey_2};
  margin: ${PADDING.s}px 0;
  padding: 8px;
  color: inherit;
  text-decoration: none;
  border-radius: ${RADII.wrapper_mobile}px;
  border: 1px solid transparent;

  &:hover {
    background-color: ${Colors.white};
    border-color: ${Colors.lightgrey_2};
  }
`

const LinkTreeImage = styled(Media)`
  width: 40px;
  height: 40px;
  margin-right: ${PADDING.s}px;
`

const LinkTreeItemText = styled.span`
  ${getFontStyles(FONT_STYLE_RECKLESS_17_400)}
`
