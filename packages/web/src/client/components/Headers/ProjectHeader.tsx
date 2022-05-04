import { Heading } from 'components/Text/Heading'
import { Avatars } from 'components/Avatars/Avatars'

import { Sanity } from '@types'

import { styled } from 'styles/stitches.config'

type ProjectHeaderProps = Pick<Sanity.ProjectPage, 'title' | 'subtext' | 'team'>

export const ProjecHeader = ({ title, subtext, team }: ProjectHeaderProps) => {
  return (
    <Header>
      <div>
        {subtext ? (
          <Heading tag="h1" fontStyle={'$h6'}>
            {subtext}
          </Heading>
        ) : null}
        {title ? (
          <Heading tag="h2" fontStyle={'$h1'} weight="$medium">
            {title}
          </Heading>
        ) : null}
      </div>
      <Avatars members={team} />
    </Header>
  )
}

const Header = styled('header', {
  width: '100%',
  mb: '$m',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',

  '@desktopUp': {
    flexDirection: 'row',

    '& > *': {
      flex: '1 0 50%',
    },
  },
})
