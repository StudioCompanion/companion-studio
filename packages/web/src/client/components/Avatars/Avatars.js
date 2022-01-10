import { useMemo, useRef } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { useSprings, animated } from '@react-spring/web'

import { COLORS } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'

import FadeUp from 'components/Transitions/FadeUp'

import myles from '../../../../public/images/team/myles.png'
import elena from '../../../../public/images/team/elena.png'
import alexandra from '../../../../public/images/team/alexandra.png'
import axelle from '../../../../public/images/team/axelle.png'
import josh from '../../../../public/images/team/josh.png'
import willem from '../../../../public/images/team/willem.png'

const TEAM = [
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
  {
    name: 'Elena Marinaki',
    role: 'Developer',
    image: elena,
  },
]

const Avatars = ({ names = [] }) => {
  const textRefs = useRef([])

  const members = useMemo(
    () =>
      names.length > 0
        ? TEAM.filter((member) => names.includes(member.name))
        : TEAM,
    [names]
  )

  const [springs, api] = useSprings(
    members.length,
    () => ({
      width: 0,
    }),
    [members]
  )

  const handleMouseEnter = (i) => () => {
    api.start((j) => ({
      width: j === i ? textRefs.current[i].scrollWidth + 8 : 0,
    }))
  }

  const handleMouseLeave = (i) => () => {
    api.start((j) => ({
      width: 0,
      delay: j === i ? 400 : 0,
    }))
  }

  return (
    <GridWrapper>
      {members.map(({ image, name, role }, i) => (
        <FadeUp key={name}>
          <GridItemContainer
            onMouseEnter={handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave(i)}
          >
            <GridImageWrapper>
              <Image src={image} placeholder="blur" alt={name} />
            </GridImageWrapper>
            <TeamMemberDetails
              ref={(ref) => (textRefs.current[i] = ref)}
              style={{ width: springs[i].width }}
            >
              <TeamMemberName>{name}</TeamMemberName>
              <TeamMemberRole>{role}</TeamMemberRole>
            </TeamMemberDetails>
          </GridItemContainer>
        </FadeUp>
      ))}
    </GridWrapper>
  )
}

Avatars.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
}

export default Avatars

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
  cursor: pointer;
`

const GridImageWrapper = styled.div`
  border-radius: 100%;
  padding: 4px;
  width: 40px;
  background: ${COLORS.lightgrey_2};

  & img {
    top: 3px !important;
    transition: 0.4s ease-out;
  }
`

const TeamMemberDetails = styled(animated.div)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-left: 8px;
`

const TeamMemberName = styled.h2`
  ${getFontStyles(FONT_STYLE_APFEL_12_400)}
  white-space: nowrap;
`

const TeamMemberRole = styled.h3`
  ${getFontStyles(FONT_STYLE_APFEL_12_400)}
  white-space: nowrap;
`
