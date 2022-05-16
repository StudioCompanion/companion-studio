import { styled } from 'styles/stitches.config'

import { FadeIn } from 'components/Transitions/FadeIn'
import { Media } from 'components/Media/Media'

import { Sanity } from '@types'
import { Heading } from 'components/Text/Heading'

interface TeamGridProps {
  team?: Sanity.Team
}

const GridItem = ({ image, name, job }: Sanity.TeamMember) => {
  return (
    <GridItemContainer tag="div">
      {image ? <GridImage {...image} /> : null}
      <div>
        <Heading tag="h2" fontStyle="S" weight="$bold">
          {name}
        </Heading>
        <Heading tag="h3" fontStyle="S">
          {job}
        </Heading>
      </div>
    </GridItemContainer>
  )
}

export const TeamGrid = ({ team = [] }: TeamGridProps) => {
  if (!team) {
    return null
  }

  return (
    <GridWrapper>
      {team.map(({ _key, image, name, job }) => (
        <GridItem key={_key} image={image} name={name} job={job} />
      ))}
    </GridWrapper>
  )
}

const GridWrapper = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$s',
  mt: '$s',
  width: '100%',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '$xxl $m',
    mt: '$l',
  },
})

const GridItemContainer = styled(FadeIn, {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
})

const GridImage = styled(Media, {
  width: '100%',
  mb: '$xxs',
  borderRadius: '$wrapper',

  '@tabletUp': {
    borderRadius: '$wrapperLarge',
  },
})
