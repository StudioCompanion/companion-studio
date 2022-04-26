import { useRef } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useSprings, animated } from '@react-spring/web'

import { Colors } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'

import { FadeUp } from 'components/Transitions/FadeUp'
import { Member, ALL_TEAM_MEMBERS } from 'references/constants'

interface AvatarsProps {
  members?: Member[]
}

export const Avatars = ({ members = ALL_TEAM_MEMBERS }: AvatarsProps) => {
  const textRefs = useRef<HTMLDivElement[]>([])

  const [springs, api] = useSprings(
    members.length,
    () => ({
      width: 0,
    }),
    [members]
  )

  const handleMouseEnter = (i: number) => () => {
    api.start((j) => ({
      width: j === i ? textRefs.current[i].scrollWidth + 8 : 0,
    }))
  }

  const handleMouseLeave = (i: number) => () => {
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
              ref={(ref) => (textRefs.current[i] = ref as HTMLDivElement)}
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
  background: ${Colors.lightgrey_2};
  position: relative;

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
