import { useRef } from 'react'
import { useSprings, animated } from '@react-spring/web'

import { styled } from 'styles/stitches.config'

import { Heading } from 'components/Text/Heading'
import { Media } from 'components/Media/Media'

import { Sanity } from '@types'
import { useCanHover } from '../../hooks/useCanHover'

interface AvatarsProps {
  members?: Sanity.TeamMember[]
}

export const Avatars = ({ members }: AvatarsProps) => {
  const textRefs = useRef<HTMLDivElement[]>([])

  const [springs, api] = useSprings(
    (members ?? []).length,
    () => ({
      width: 0,
    }),
    [members]
  )

  const canHover = useCanHover()

  const handleMouseEnter = (i: number) => () => {
    if (!canHover) {
      return
    }

    api.start((j) => ({
      width: j === i ? textRefs.current[i].scrollWidth + 8 : 0,
    }))
  }

  const handleMouseLeave = (i: number) => () => {
    if (!canHover) {
      return
    }

    api.start((j) => ({
      width: 0,
      delay: j === i ? 400 : 0,
    }))
  }

  const isOpenId = useRef<number | null>(null)

  const handleClick = (i: number) => () => {
    if (canHover) {
      return
    }

    api.start((j) => ({
      width:
        j === i && isOpenId.current !== i
          ? textRefs.current[i].scrollWidth + 8
          : 0,
      onStart: () => {
        /**
         * If nothing is open or the id isn't what we clicked
         * change the id to the one we just clicked
         */
        if (!isOpenId.current || isOpenId.current !== i) {
          isOpenId.current = i
        } else {
          /**
           * Else, we're closing one so reset it to null
           * otherwise it cant be reopened
           */
          isOpenId.current = null
        }
      },
    }))
  }

  return (
    <GridWrapper>
      {(members ?? []).map(({ image, name, job }, i) => (
        <GridItemContainer
          onMouseEnter={handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave(i)}
          onClick={handleClick(i)}
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
  alignItems: 'flex-end',
  my: '$s',
  overflow: 'auto',

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
  background: '$white50',
  height: 50,
  width: 50,

  '& img': {
    top: '3px !important',
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
