import styled from 'styled-components'

import { Heading } from 'components/Text/Heading'

import { Sanity } from '@types'

import { FONT_STYLE_APFEL_58_500, FONT_STYLE_APFEL_12_400 } from 'styles/fonts'
import { PADDING } from 'styles/constants'
import { Avatars } from 'components/Avatars/Avatars'
import { MEDIA_QUERIES } from 'styles/mediaQueries'

type ProjectHeaderProps = Pick<Sanity.ProjectPage, 'title' | 'subtext' | 'team'>

export const ProjecHeader = ({ title, subtext, team }: ProjectHeaderProps) => {
  return (
    <Header>
      <div>
        {subtext ? (
          <Heading tag="h1" fontStyle={FONT_STYLE_APFEL_12_400}>
            {subtext}
          </Heading>
        ) : null}
        {title ? (
          <Heading tag="h2" fontStyle={FONT_STYLE_APFEL_58_500}>
            {title}
          </Heading>
        ) : null}
      </div>
      <Avatars members={team} />
    </Header>
  )
}

const Header = styled.header`
  width: 100%;
  margin-bottom: ${PADDING.m}px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${MEDIA_QUERIES.desktopUp} {
    flex-direction: row;
    & > * {
      flex: 1 0 50%;
    }
  }
`
