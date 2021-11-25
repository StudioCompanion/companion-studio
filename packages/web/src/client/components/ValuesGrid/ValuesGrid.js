import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PADDING, THEME_TYPES } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_26_400,
  FONT_STYLE_RECKLESS_17_400,
} from 'styles/fonts'
import Button from 'components/Button/Button'
import FadeUp from 'components/Transitions/FadeUp'

const gridItems = [
  {
    heading: [
      'You want to ',
      // eslint-disable-next-line react/jsx-key
      <span className="underline underline--a">learn</span>,
      ' new things',
    ],
    body: 'You know you don’t know everything. You like to seek others viewpoints. Open minded, open to new ideas, approachable.',
  },
  {
    heading: [
      `You're `,
      // eslint-disable-next-line react/jsx-key
      <span className="underline underline--b">curious</span>,
    ],
    body: 'You seek to understand. You want to find new things and understand how they tick. You have a wide range of interests and can contribute outside of your own groove.',
  },
  {
    heading: [
      `You're a `,
      // eslint-disable-next-line react/jsx-key
      <span className="underline underline--c">team</span>,
      ` player`,
    ],
    body: 'You like being part of a team, on for the long game not the quick win. Everyone plays to the end. “If you want to go quickly go alone, if you want to go far go together”.',
  },
  {
    heading: [
      `Do good, `,
      // eslint-disable-next-line react/jsx-key
      <span className="underline underline--d">better</span>,
      ` best`,
    ],
    body: 'You know you make a difference to those around you and that rubs off. You know that bit by bit we all can make change happen, care more for the world and those we share it with.',
  },
  {
    heading: [
      `You're `,
      // eslint-disable-next-line react/jsx-key
      <span className="underline underline--e">reliable</span>,
    ],
    body: 'You’re only as good as your word, you say so, it is so. You turn up and turn out ready for what face you every time.',
  },
  {
    heading: [
      `You `,
      // eslint-disable-next-line react/jsx-key
      <span className="underline underline--f">don&#39;t</span>,
      ` bullshit`,
    ],
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
  heading: PropTypes.array,
  body: PropTypes.string,
}

const ValuesGrid = ({}) => {
  return (
    <FadeUp>
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
    </FadeUp>
  )
}

ValuesGrid.propTypes = {}

export default ValuesGrid

const GridContainer = styled.div`
  display: grid;
  gap: ${PADDING.xl}px;
  grid-template-columns: 1fr;
  justify-items: center;
  ${MEDIA_QUERIES.tabletUp} {
    gap: ${PADDING.xxl}px ${PADDING.m}px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  ${MEDIA_QUERIES.largeDesktopUp} {
    grid-template-columns: repeat(3, 1fr);
  }
`
const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${PADDING.xl}px;
  ${MEDIA_QUERIES.tabletUp} {
    margin-top: ${PADDING.xxl}px;
  }
`
const GridItemHeading = styled.h2`
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

  .underline--a::after {
    background-image: url('/images/graphics/team/underline_a.png');
  }
  .underline--b::after {
    background-image: url('/images/graphics/team/underline_b.png');
  }
  .underline--c::after {
    background-image: url('/images/graphics/team/underline_c.png');
  }
  .underline--d::after {
    background-image: url('/images/graphics/team/underline_d.png');
  }
  .underline--e::after {
    background-image: url('/images/graphics/team/underline_e.png');
  }
  .underline--f::after {
    background-image: url('/images/graphics/team/underline_f.png');
  }
`
const GridItemBody = styled.p`
  ${getFontStyles(FONT_STYLE_RECKLESS_17_400)}
`
const GridItemContainer = styled.div`
  text-align: center;
  ${MEDIA_QUERIES.tabletUp} {
    max-width: 425px;
  }
`
const ButtonWrapper = styled.div`
  align-self: center;
  margin: ${PADDING.xl}px 0;
  ${MEDIA_QUERIES.tabletUp} {
    margin: ${PADDING.xxl}px 0;
  }
`
