import Link from 'next/link'

import { ThemeTypes } from 'styles/constants'
import { styled } from 'styles/stitches.config'

import { Button, ButtonContainer } from 'components/Button/Button'
import { Media } from 'components/Media/Media'
import { Heading } from 'components/Text/Heading'

import { Sanity } from '@types'

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
}: CardHomeProps) => {
  const selectedMedia = media?.asset
    ? media
    : meta?.image?.asset
    ? meta.image
    : undefined

  const actualTitle = title ?? meta?.title

  return (
    <Link href={`/projects/${slug}` ?? ''} passHref>
      <CardWrapper className={className} theme={theme}>
        <ImageContainer>
          {selectedMedia ? <MediaContainer {...selectedMedia} /> : null}
        </ImageContainer>
        <CardText theme={theme}>
          <div>
            {actualTitle ? (
              <Heading tag="h2" fontStyle="$body">
                {actualTitle}
              </Heading>
            ) : null}
            {subtitle ? (
              <Heading tag="h3" fontStyle="$h6">
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

const ImageContainer = styled('div', {
  transform: 'scale(1)',
  transformOrigin: '50% 50%',
  transition: 'all 350ms cubic-bezier(0.76, 0, 0.24, 1)',
})

const MediaContainer = styled(Media, {
  borderRadius: '$wrapperLarge',
  overflow: 'hidden',
})

const CardWrapper = styled('a', {
  display: 'block',
  position: 'relative',
  borderRadius: '$wrapperLarge',
  overflow: 'hidden',

  '&:hover': {
    [`& ${ImageContainer}`]: {
      transform: 'scale(0.85, 0.85) translateY(-4%)',
      transition: 'all 350ms cubic-bezier(0.76, 0, 0.24, 1)',
    },
  },

  variants: {
    theme: {
      [ThemeTypes.LIGHT]: {
        backgroundColor: '$white',

        '&:hover': {
          [`& ${ButtonContainer}`]: {
            backgroundColor: '$lightGrey',
          },
        },
      },
      [ThemeTypes.GREY]: {
        backgroundColor: '$lightGrey',

        '&:hover': {
          [`& ${ButtonContainer}`]: {
            backgroundColor: '$lightGrey',
          },
        },
      },
      [ThemeTypes.DARK]: {
        backgroundColor: '$black',

        '&:hover': {
          [`& ${ButtonContainer}`]: {
            backgroundColor: '$lightGrey',
          },
        },
      },
    },
  },
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
          color: '$black',
        },
      },
      [ThemeTypes.GREY]: {
        '& h2, & h3': {
          color: '$black',
        },
      },
      [ThemeTypes.DARK]: {
        '& h2, & h3': {
          color: '$white',
        },
      },
    },
  },
})
