import { useCallback } from 'react'
import Link from 'next/link'
import { animated, useSpring } from '@react-spring/web'
import { useHover } from 'react-use-gesture'

import { ThemeTypes } from 'styles/constants'
import { styled } from 'styles/stitches.config'

import { Button, ButtonContainer } from 'components/Button/Button'
import { Media } from 'components/Media/Media'
import { Heading } from 'components/Text/Heading'

import { useCanHover } from 'hooks/useCanHover'

import { Sanity } from '@types'
import { getHrefSlugFromSanityReference } from 'helpers/links'

interface CardHomeProps extends Sanity.HomepageCard {
  className?: string
}

export const CardHome = ({
  layout,
  media,
  meta,
  subtitle,
  theme,
  title,
  slug,
  className,
  type,
}: CardHomeProps) => {
  const selectedMedia = media?.asset
    ? media
    : meta?.image?.asset
    ? meta.image
    : undefined

  const actualTitle = title ?? meta?.title

  const [styles, api] = useSpring(
    () => ({
      scale: 1,
      y: '0',
      config: {
        tension: 160,
      },
    }),
    []
  )

  const canHover = useCanHover()

  const hoverCallback = useCallback(
    ({ hovering }) => {
      if (!canHover) {
        return
      }

      if (hovering) {
        api.start({
          scale: 0.75,
          y: '-4%',
        })
      } else {
        api.start({
          scale: 1,
          y: '0',
        })
      }
    },
    [canHover, api]
  )

  const bind = useHover(hoverCallback)

  return (
    <Link href={getHrefSlugFromSanityReference({ _type: type, slug })} passHref>
      <CardWrapper className={className} theme={theme} {...bind()}>
        <ImageContainer style={styles}>
          {selectedMedia ? <MediaContainer {...selectedMedia} /> : null}
        </ImageContainer>
        <CardText theme={theme}>
          <div>
            {actualTitle ? (
              <Heading tag="h2" fontStyle="L" weight="$bold">
                {actualTitle}
              </Heading>
            ) : null}
            {subtitle ? (
              <Heading tag="h3" fontStyle="XS">
                {subtitle}
              </Heading>
            ) : null}
          </div>
          <Button
            text={layout === 'studio' ? 'View' : 'Read'}
            theme={ThemeTypes.LIGHT}
          />
        </CardText>
      </CardWrapper>
    </Link>
  )
}

const CardWrapper = styled('a', {
  display: 'block',
  position: 'relative',
  borderRadius: '$wrapperLarge',
  overflow: 'hidden',

  variants: {
    theme: {
      [ThemeTypes.LIGHT]: {
        backgroundColor: '$white100',

        hover: {
          [`& ${ButtonContainer}`]: {
            backgroundColor: '$white50',
          },
        },
      },
      [ThemeTypes.GREY]: {
        backgroundColor: '$white50',

        hover: {
          [`& ${ButtonContainer}`]: {
            backgroundColor: '$white50',
          },
        },
      },
      [ThemeTypes.DARK]: {
        backgroundColor: '$black100',

        hover: {
          [`& ${ButtonContainer}`]: {
            backgroundColor: '$white50',
          },
        },
      },
    },
  },
})

const ImageContainer = styled(animated.div, {
  transformOrigin: '50% 50%',
})

const MediaContainer = styled(Media, {
  borderRadius: '$wrapperLarge',
  overflow: 'hidden',
})

const CardText = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  padding: '$m',

  display: 'flex',
  justifyContent: 'space-between',
  alignSelf: 'flex-end',
  alignItems: 'flex-end',

  variants: {
    theme: {
      [ThemeTypes.LIGHT]: {
        '& h2, & h3': {
          color: '$black100',
        },
      },
      [ThemeTypes.GREY]: {
        '& h2, & h3': {
          color: '$black100',
        },
      },
      [ThemeTypes.DARK]: {
        '& h2, & h3': {
          color: '$white100',
        },
      },
    },
  },
})
