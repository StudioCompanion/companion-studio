import PropTypes from 'prop-types'
import styled from 'styled-components'

import { COLORS, RADII, PADDING, THEME_TYPES } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_26_400,
  FONT_STYLE_RECKLESS_17_400,
} from 'styles/fonts'
import Button from 'components/Button/Button'

const gridItems = [
  {
    heading: `You want to learn new things`,
    body: 'You know you don’t know everything. You like to seek others viewpoints. Open minded, open to new ideas, approachable.',
  },
  {
    heading: `You're curious`,
    body: 'You seek to understand. You want to find new things and understand how they tick. You have a wide range of interests and can contribute outside of your own groove.',
  },
  {
    heading: `You're a team player`,
    body: 'You like being part of a team, on for the long game not the quick win. Everyone plays to the end. “If you want to go quickly go alone, if you want to go far go together”.',
  },
  {
    heading: `Do good, better, best`,
    body: 'You know you make a difference to those around you and that rubs off. You know that bit by bit we all can make change happen, care more for the world and those we share it with.',
  },
  {
    heading: `You're reliable`,
    body: 'You’re only as good as your word, you say so, it is so. You turn up and turn out ready for what face you every time.',
  },
  {
    heading: `You don't bullshit`,
    body: 'You say it how it is. You say “I don’t know but I can find out” no blag, fluff or fumbles you admit your mistakes and you probably don’t have time for gossip.',
  },
]

export const GridItem = ({ heading, body }) => {
  return (
    <GridItemContainer>
      <GridItemHeading>{heading}</GridItemHeading>
      <GridItemBody>{body}</GridItemBody>
    </GridItemContainer>
  )
}
GridItem.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string,
}

const ValuesGrid = ({}) => {
  return (
    <GridWrapper>
      <GridContainer>
        {gridItems.map((item, index) => (
          <GridItem key={index} heading={item.heading} body={item.body} />
        ))}
      </GridContainer>
      <ButtonWrapper>
        <Button
          text={'View our open positions'}
          theme={THEME_TYPES.DARK}
          link={'#'}
        />
      </ButtonWrapper>
    </GridWrapper>
  )
}

ValuesGrid.propTypes = {}

export default ValuesGrid

const GridContainer = styled.div`
  display: grid;
  gap: ${PADDING.xl}px ${PADDING.m}px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  ${MEDIA_QUERIES.largeDesktopUp} {
    grid-template-columns: repeat(3, 1fr);
  }
`
const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const GridItemHeading = styled.h2`
  ${getFontStyles(FONT_STYLE_RECKLESS_26_400)}
`
const GridItemBody = styled.p`
  ${getFontStyles(FONT_STYLE_RECKLESS_17_400)}
`
const GridItemContainer = styled.div`
  max-width: 425px;
`
const ButtonWrapper = styled.div`
  align-self: center;
`
