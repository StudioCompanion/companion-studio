import { styled } from 'styles/stitches.config'

import { FadeUp } from 'components/Transitions/FadeUp'
import { Media } from 'components/Media/Media'

import { Sanity } from '@types'
import { Heading } from 'components/Text/Heading'

interface TeamGridProps {
  team?: Sanity.Team
}

const GridItem = ({ image, name, job }: Sanity.TeamMember) => {
  return (
    <FadeUp>
      <GridItemContainer>
        {image ? <GridImage {...image} /> : null}
        <div>
          <TeamMemberName tag="h2" fontStyle="$h5">
            {name}
          </TeamMemberName>
          <TeamMemberRole tag="h3" fontStyle="$h6">
            {job}
          </TeamMemberRole>
        </div>
      </GridItemContainer>
    </FadeUp>
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

const GridWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$s $xxs',
  my: '$xl',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '$m',
    my: '$xxl',
  },
})

const GridItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  p: '$xxs',
  height: '100%',
  justifyContent: 'space-between',

  '@tabletUp': {
    p: '$xl',
  },
})

const GridImage = styled(Media, {
  maxWidth: '9rem',
  width: '100%',
  mb: '$xxs',

  '@tabletUp': {
    maxWidth: '30rem',
  },
})

const TeamMemberName = styled(Heading, {
  mb: '$xxxs',
  textAlign: 'center',
})

const TeamMemberRole = styled(Heading, {
  textAlign: 'center',
})
