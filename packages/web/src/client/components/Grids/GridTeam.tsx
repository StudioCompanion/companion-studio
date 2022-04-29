import styled from 'styled-components'

import { PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_12_400,
  FONT_STYLE_RECKLESS_17_400,
} from 'styles/fonts'

import { FadeUp } from 'components/Transitions/FadeUp'
import { Media } from 'components/Media/Media'

import { Sanity } from 'src/types'

interface TeamGridProps {
  team: Sanity.Team
}

const GridItem = ({ image, name, job }: Sanity.TeamMember) => {
  return (
    <FadeUp>
      <GridItemContainer>
        {image ? <GridImage {...image} /> : null}
        <div>
          <TeamMemberName>{name}</TeamMemberName>
          <TeamMemberRole>{job}</TeamMemberRole>
        </div>
      </GridItemContainer>
    </FadeUp>
  )
}

export const TeamGrid = ({ team }: TeamGridProps) => {
  return (
    <GridWrapper>
      {team.map(({ image, name, job }) => (
        <GridItem key={name} image={image} name={name} job={job} />
      ))}
    </GridWrapper>
  )
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${PADDING.s}px 8px;
  margin: ${PADDING.xl}px 0;
  ${MEDIA_QUERIES.tabletUp} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${PADDING.m}px;
    margin: ${PADDING.xxl}px 0;
  }
`

const GridItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  height: 100%;
  justify-content: space-between;
  ${MEDIA_QUERIES.tabletUp} {
    padding: ${PADDING.xl}px;
  }
`

const GridImage = styled(Media)`
  max-width: 90px;
  width: 100%;
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
  text-align: center;
`

const TeamMemberRole = styled.h3`
  ${getFontStyles(FONT_STYLE_RECKLESS_12_400)}
  text-align: center;
`
