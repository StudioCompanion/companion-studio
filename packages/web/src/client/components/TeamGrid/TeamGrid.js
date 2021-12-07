import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'

import { PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import {
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${PADDING.s}px 8px;
  margin: ${PADDING.xl}px 0;
  ${MEDIA_QUERIES.tabletUp} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${PADDING.m}px;
    margin: ${PADDING.xxl}px 0;
    /* max-width: 1200px; */
  }
`

const GridItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  ${MEDIA_QUERIES.tabletUp} {
    padding: ${PADDING.xl}px;
  }
`

const GridImageWrapper = styled.div`
  max-width: 90px;
  margin-bottom: 8px;
  ${MEDIA_QUERIES.tabletUp} {
    max-width: 300px;
  }

  & img {
    transition: 0.4s ease-out;
  }
`

const TeamMemberName = styled.h2`
  ${getFontStyles(FONT_STYLE_RECKLESS_17_400)}
  margin-bottom: 4px;
`

const TeamMemberRole = styled.h3`
  ${getFontStyles(FONT_STYLE_RECKLESS_12_400)}
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
    name: 'Elena Maranaki',
    role: 'Developer Apprentice',
    image: elena,
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
