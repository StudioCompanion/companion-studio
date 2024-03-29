import { useCallback } from 'react'
import Link from 'next/link'
import { animated, SpringValues, useSpring } from '@react-spring/web'
import { useHover } from '@use-gesture/react'

import { ThemeTypes } from 'styles/constants'
import { styled } from 'styles/stitches.config'

import { Button, ButtonContainer } from 'components/Button/Button'
import { Media } from 'components/Media/Media'
import { Heading } from 'components/Text/Heading'

import { useCanHover } from 'hooks/useCanHover'

import { PickType, Sanity } from '@types'
import { getHrefSlugFromSanityReference } from 'helpers/links'

type CardHomeProps = {
  className?: string
  status?: PickType<Sanity.ProjectPage, 'status'>
} & Sanity.HomepageCard

interface CardHomeInnerProps
  extends Omit<CardHomeProps, 'slug' | 'type' | 'className'> {
  style?: SpringValues<{ y: string; scale: number }>
}

const CardHomeInner = ({
  media,
  meta,
  subtitle,
  theme,
  title,
  cardButtonLabel = 'View',
  status,
  style,
  backgroundColor,
}: CardHomeInnerProps) => {
  const selectedMedia = media?.asset
    ? media
    : meta?.image?.asset
    ? meta.image
    : undefined

  const actualTitle = title ?? meta?.title

  return (
    <>
      <BackgroundColor
        style={{
          backgroundColor,
        }}
      />
      <ImageContainer style={style}>
        {selectedMedia ? (
          <MediaContainer controls={false} {...selectedMedia} />
        ) : null}
      </ImageContainer>
      <CardText theme={theme}>
        <div>
          {actualTitle ? (
            <Heading
              tag="h2"
              weight="$bold"
              css={{
                fontSize: '$S',
              }}
            >
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
          tabIndex={-1}
          text={cardButtonLabel}
          theme={theme}
          isOutlined={status === 'comingSoon'}
        />
      </CardText>
    </>
  )
}

export const CardHome = (props: CardHomeProps) => {
  const { slug, type, status, className, theme } = props

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

  if (status === 'comingSoon') {
    return (
      <CardWrapper as="div" className={className}>
        <CardHomeInner {...props} />
      </CardWrapper>
    )
  }

  if (type == 'externalCard') {
    return (
      <CardWrapper
        href={slug}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        theme={theme}
        {...bind()}
      >
        <CardHomeInner {...props} style={styles} />
      </CardWrapper>
    )
  }

  return (
    <Link href={getHrefSlugFromSanityReference({ _type: type, slug })} passHref>
      <CardWrapper className={className} theme={theme} {...bind()}>
        <CardHomeInner {...props} style={styles} />
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
        hover: {
          [`& ${ButtonContainer}`]: {
            backgroundColor: '$grey100',
          },
        },
      },
      [ThemeTypes.DARK]: {
        hover: {
          [`& ${ButtonContainer}`]: {
            backgroundColor: '$blackHover',
          },
        },
      },
    },
  },
})

const BackgroundColor = styled('div', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  inset: 0,
  zIndex: -1,
  borderRadius: '$wrapperLarge',
  transformOrigin: '50% 50%',
  transform: 'scale(0.998)',
})

const ImageContainer = styled(animated.div, {
  transformOrigin: '50% 50%',
})

const MediaContainer = styled(Media, {
  br: '$wrapperLarge',
})

const CardText = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  padding: '$xs',

  '@tabletUp': {
    padding: '$m',
  },

  display: 'flex',
  justifyContent: 'space-between',
  alignSelf: 'flex-end',
  alignItems: 'flex-end',

  variants: {
    theme: {
      [ThemeTypes.LIGHT]: {
        '& h2, & h3': {
          color: '$white100',
        },
      },
      [ThemeTypes.DARK]: {
        '& h2, & h3': {
          color: '$black100',
        },
      },
    },
  },
})
