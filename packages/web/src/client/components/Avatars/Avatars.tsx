import { useRef } from 'react'
import { useSprings, animated } from '@react-spring/web'

import { styled } from 'styles/stitches.config'

import { Heading } from 'components/Text/Heading'
import { Media } from 'components/Media/Media'

import { Sanity } from '@types'
import { useCanHover } from '../../hooks/useCanHover'
import { FadeIn } from 'components/Transitions/FadeIn'

interface AvatarsProps {
  members?: Sanity.TeamMember[]
}

export const Avatars = ({ members }: AvatarsProps) => {
  const textRefs = useRef<HTMLDivElement[]>([])

  const canHover = useCanHover()

  const [springs, api] = useSprings(
    (members ?? []).length,
    () => ({
      width: canHover ? 0 : 'unset',
      immediate: true,
    }),
    [members, canHover]
  )

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

  return (
    <GridWrapper tag="div">
      <GridScrollWrapper
        css={{
          '@tabletUp': {
            justifyContent: canHover ? 'flex-end' : 'flex-start',
            py: canHover ? 0 : '$s',
          },
        }}
      >
        {(members ?? []).map(({ image, name, job }, i) => (
          <GridItemContainer
            onMouseEnter={handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave(i)}
            key={name}
            css={{
              '& + &': {
                ml: canHover ? 0 : '$s',
              },
            }}
          >
            {image ? <GridImageWrapper {...image} /> : null}
            <TeamMemberDetails
              ref={(ref) => (textRefs.current[i] = ref as HTMLDivElement)}
              style={{ width: springs[i].width }}
            >
              <TeamMemberHeading tag="h2" fontStyle="XS" weight="$bold">
                {name}
              </TeamMemberHeading>
              <TeamMemberHeading tag="h3" fontStyle="XS">
                {job}
              </TeamMemberHeading>
            </TeamMemberDetails>
          </GridItemContainer>
        ))}
      </GridScrollWrapper>
    </GridWrapper>
  )
}

const GridWrapper = styled(FadeIn, {
  width: '100%',
})

const GridScrollWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  overflow: 'auto',
  py: '$s',
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
