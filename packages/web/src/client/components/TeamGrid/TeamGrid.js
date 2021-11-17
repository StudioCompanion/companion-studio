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

const GridItem = ({ image, name, role }) => {
  return (
    <GridItemContainer>
      <GridImageWrapper>
        <Image src={image} width={561} height={561} alt={name} />
      </GridImageWrapper>
      <TeamMemberName>{name}</TeamMemberName>
      <TeamMemberRole>{role}</TeamMemberRole>
    </GridItemContainer>
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
  margin: 40px 0;
  ${MEDIA_QUERIES.tabletUp} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${PADDING.m}px;
    margin: ${PADDING.xl}px 0;
  }
`

const GridItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  ${MEDIA_QUERIES.tabletUp} {
    padding: 40px;
  }
`

const GridImageWrapper = styled.div`
  max-width: 90px;
  margin-bottom: 8px;
  ${MEDIA_QUERIES.tabletUp} {
    max-width: 200px;
  }
`

const TeamMemberName = styled.h2`
  ${getFontStyles(FONT_STYLE_RECKLESS_17_400)}
  margin-bottom: 4px;
`

const TeamMemberRole = styled.h3`
  ${getFontStyles(FONT_STYLE_RECKLESS_12_400)}
`

const team = [
  {
    name: 'Myles Palmer',
    role: 'Founder & Creative Director',
    image: '/images/team/myles.png',
  },
  {
    name: 'Elena Maranaki',
    role: 'Developer Apprentice',
    image: '/images/team/elena.png',
  },
  {
    name: 'Alexandra Votjku',
    role: 'Digital Designer',
    image: '/images/team/alexandra.png',
  },
  {
    name: 'Axelle Van de Goor',
    role: 'Producer',
    image: '/images/team/axelle.png',
  },
  {
    name: 'Josh Ellis',
    role: 'Fullstack Developer',
    image: '/images/team/josh.png',
  },
  {
    name: 'Willem Purdy',
    role: 'Digital Designer',
    image: '/images/team/willem.png',
  },
]
