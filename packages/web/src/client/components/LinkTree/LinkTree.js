import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import { getFontStyles } from 'styles/getFontStyles'
import { FONT_STYLE_RECKLESS_17_400 } from 'styles/fonts'
import { COLORS, PADDING, RADII } from 'styles/constants'

export const LinkTreeItem = ({ image, text, url }) => {
  return (
    <Link href={url} passHref>
      <LinkTreeItemContainer>
        <LinkTreeImageContainer>
          <Image src={image} />
        </LinkTreeImageContainer>
        <LinkTreeItemText>{text}</LinkTreeItemText>
      </LinkTreeItemContainer>
    </Link>
  )
}

LinkTreeItem.propTypes = {
  image: PropTypes.object,
  text: PropTypes.string,
  url: PropTypes.string,
}

const LinkTree = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <LinkTreeItem
          image={item.image}
          text={item.text}
          url={item.url}
          key={index}
        />
      ))}
    </>
  )
}

LinkTree.propTypes = {
  items: PropTypes.array,
}

export default LinkTree

const LinkTreeItemContainer = styled.a`
  display: flex;
  align-items: center;
  background-color: ${COLORS.lightgrey_2};
  margin: ${PADDING.s}px 0;
  padding: 8px;
  color: inherit;
  text-decoration: none;
  border-radius: ${RADII.wrapper_mobile}px;
  border: 1px solid transparent;

  &:hover {
    background-color: ${COLORS.white};
    border-color: ${COLORS.lightgrey_2};
  }
`

const LinkTreeImageContainer = styled.div`
  width: 40px;
  height: 40px;
  margin-right: ${PADDING.s}px;
  display: flex;
  align-items: center;
`

const LinkTreeItemText = styled.span`
  ${getFontStyles(FONT_STYLE_RECKLESS_17_400)}
`
