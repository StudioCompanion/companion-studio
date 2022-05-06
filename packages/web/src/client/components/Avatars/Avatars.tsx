import { useRef, useState } from 'react'
import { useSprings, animated } from '@react-spring/web'

import { styled } from 'styles/stitches.config'

import { Heading } from 'components/Text/Heading'
import { Media } from 'components/Media/Media'

import { Sanity } from '@types'
import { useCanHover } from '../../hooks/useCanHover'

import Tappable from 'react-tappable'

interface AvatarsProps {
  members?: Sanity.TeamMember[]
}

export const Avatars = ({ members }: AvatarsProps) => {
  const textRefs = useRef<HTMLDivElement[]>([])

  const [toggled, setToggled] = useState(false)

  const [springs, api] = useSprings(
    (members ?? []).length,
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

  const handleAvatarMobile = (i: number) => {
    if (toggled) handleMouseLeave(i)
    else handleMouseEnter(i)
  }

  const canHover = useCanHover()

  return (
    <GridWrapper>
      {(members ?? []).map(({ image, name, job }, i) => (
        <GridItemContainer
          onMouseEnter={() => {
            if (!canHover) return
            handleMouseEnter(i)
          }}
          onMouseLeave={() => {
            if (!canHover) return
            handleMouseLeave(i)
          }}
          onClick={(e) => {
            e.preventDefault()
            if (canHover) return
            handleAvatarMobile(i)
          }}
          key={name}
        >
          {image ? <GridImageWrapper {...image} /> : null}
          <TeamMemberDetails
            ref={(ref) => (textRefs.current[i] = ref as HTMLDivElement)}
            style={{ width: springs[i].width }}
          >
            <TeamMemberHeading tag="h2" fontStyle="$h6">
              {name}
            </TeamMemberHeading>
            <TeamMemberHeading tag="h3" fontStyle="$h6">
              {job}
            </TeamMemberHeading>
          </TeamMemberDetails>
        </GridItemContainer>
      ))}
    </GridWrapper>
  )
}

const GridWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  my: '$s',
  overflow: 'scroll',

  '@tabletUp': {
    my: 0,
    justifyContent: 'flex-end',
  },
})

const GridItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer',
})

const GridImageWrapper = styled(Media, {
  position: 'relative',
  borderRadius: '$circle',
  padding: '$xxxs',
  background: '$lightGrey',
  height: 50,
  width: 50,

  '& img': {
    top: '3px !important',
    transition: '0.4s ease-out',
  },
})

const TeamMemberDetails = styled(animated.div, {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  ml: '$xxs',
})

const TeamMemberHeading = styled(Heading, {
  whiteSpace: 'nowrap',
})
