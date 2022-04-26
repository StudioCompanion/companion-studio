import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import { getFontStyles } from 'styles/getFontStyles'
import { FONT_STYLE_RECKLESS_17_400 } from 'styles/fonts'
import { Colors, PADDING, RADII } from 'styles/constants'

interface LinkTreeItemProps {
  image: StaticImageData
  text: string
  url: string
}

export const LinkTreeItem = ({ image, text, url }: LinkTreeItemProps) => {
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

interface LinkTreeProps {
  items: LinkTreeItemProps[]
}

export const LinkTree = ({ items }: LinkTreeProps) => {
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

const LinkTreeItemContainer = styled.a`
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
