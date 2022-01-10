import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'

import { PADDING, COLORS } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_APFEL_12_400,
  FONT_STYLE_RECKLESS_12_400,
  FONT_STYLE_RECKLESS_17_400,
} from 'styles/fonts'

import FadeUp from 'components/Transitions/FadeUp'

const GridItem = ({ image, name, role }) => {
  return (
    <FadeUp>
      <GridItemContainer>
        <GridImageWrapper>
          <Image src={image} placeholder="blur" alt={name} />
        </GridImageWrapper>
        <TeamMemberName>{name}</TeamMemberName>
        <TeamMemberRole>{role}</TeamMemberRole>
      </GridItemContainer>
    </FadeUp>
  )
}
GridItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
}

const TeamGrid = ({}) => {
  return (
    <GridWrapper>
      {team.map(({ image, name, role }, index) => (
        <GridItem key={index} image={image} name={name} role={role} />
      ))}
    </GridWrapper>
  )
}

TeamGrid.propTypes = {}

export default TeamGrid

const GridWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 0px 0px 16px 0px;

  ${MEDIA_QUERIES.tabletUp} {
    width: 40%;
    margin: 32px 0px 0px 0px;
    justify-content: flex-end;
  }
`

const GridItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 0px 0px 4px;

  &:hover {
    cursor: pointer;
  }

  &:hover > h2 {
    display: block;
    width: auto;
    height: 100%;
  }
`

const GridImageWrapper = styled.div`
  border-radius: 100%;
  padding: 4px;
  max-width: 40px;
  background: ${COLORS.lightgrey_2};

  & img {
    top: 3px !important;
    transition: 0.4s ease-out;
  }
`

const TeamMemberName = styled.h2`
  ${getFontStyles(FONT_STYLE_APFEL_12_400)}
  width: auto;
  display: none;
  width: auto;
  margin: 0px 8px 0px 8px;
`

const TeamMemberRole = styled.h3`
  ${getFontStyles(FONT_STYLE_APFEL_12_400)}
  display: none;
`

import myles from '../../../../public/images/team/myles.png'
import elena from '../../../../public/images/team/elena.png'
import alexandra from '../../../../public/images/team/alexandra.png'
import axelle from '../../../../public/images/team/axelle.png'
import josh from '../../../../public/images/team/josh.png'
import willem from '../../../../public/images/team/willem.png'

const team = [
  {
    name: 'Myles Palmer',
    role: 'Founder & Creative Director',
    image: myles,
  },
  {
    name: 'Alexandra Votjku',
    role: 'Digital Designer',
    image: alexandra,
  },
  {
    name: 'Axelle Van de Goor',
    role: 'Producer',
    image: axelle,
  },
  {
    name: 'Josh Ellis',
    role: 'Fullstack Developer',
    image: josh,
  },
  {
    name: 'Willem Purdy',
    role: 'Digital Designer',
    image: willem,
  },
]
