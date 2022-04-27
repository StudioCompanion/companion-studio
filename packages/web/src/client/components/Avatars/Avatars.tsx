import { useRef } from 'react'
import styled from 'styled-components'
import { useSprings, animated } from '@react-spring/web'

import { Colors } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'

import { Heading } from 'components/Text/Heading'
import { Media } from 'components/Media/Media'

import { Sanity } from 'src/types'

interface AvatarsProps {
  members?: Sanity.TeamMember[]
}

export const Avatars = ({ members = [] }: AvatarsProps) => {
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
      {members.map(({ image, name, job }, i) => (
        <GridItemContainer
          onMouseEnter={handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave(i)}
          key={name}
        >
          <GridImageWrapper>
            {image ? <Media {...image} /> : null}
          </GridImageWrapper>
          <TeamMemberDetails
            ref={(ref) => (textRefs.current[i] = ref as HTMLDivElement)}
            style={{ width: springs[i].width }}
          >
            <TeamMemberName tag="h2" fontStyle={FONT_STYLE_APFEL_12_400}>
              {name}
            </TeamMemberName>
            <TeamMemberRole tag="h3" fontStyle={FONT_STYLE_APFEL_12_400}>
              {job}
            </TeamMemberRole>
          </TeamMemberDetails>
        </GridItemContainer>
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
  position: relative;
  border-radius: 100%;
  padding: 4px;
  background: ${Colors.lightgrey_2};
  height: 50px;
  width: 50px;

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

const TeamMemberName = styled(Heading)`
  white-space: nowrap;
`

const TeamMemberRole = styled(Heading)`
  white-space: nowrap;
`
