import { Heading } from 'components/Text/Heading'
import { Avatars } from 'components/Avatars/Avatars'

import { Sanity } from '@types'

import { styled } from 'styles/stitches.config'
import { FadeIn } from 'components/Transitions/FadeIn'

type ProjectHeaderProps = Pick<Sanity.ProjectPage, 'title' | 'team'>

export const ProjecHeader = ({ title, team }: ProjectHeaderProps) => {
  return (
    <Header>
      <FadeIn tag="div">
        {title ? (
          <Heading tag="h1" fontStyle={'XXXL'} weight="$bold">
            {title}
          </Heading>
        ) : null}
      </FadeIn>
      <Avatars members={team} />
    </Header>
  )
}

const Header = styled('header', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  flexWrap: 'wrap',

  '@tabletUp': {
    mb: '$xs',
    flexDirection: 'row',
    alignItems: 'center',

    '& > *': {
      flex: '1 0 50%',
    },
  },
})
