import { styled } from 'styles/stitches.config'

import { FadeIn } from 'components/Transitions/FadeIn'
import { RendererRichText } from 'components/Renderer/RendererRichText'
import { Media } from 'components/Media/Media'

import { NonNullSkipArray, PickType, Sanity } from '@types'

type ValueGridProps = Pick<Sanity.TeamPage, 'qualities'>

export const GridItem = ({
  media,
  text,
}: Omit<
  NonNullSkipArray<PickType<ValueGridProps, 'qualities'>>,
  '_key' | '_type'
>) => {
  return (
    <GridItemContainer>
      {media ? <GridItemMedia {...media} /> : null}
      {text ? <GridItemText blocks={text} /> : null}
    </GridItemContainer>
  )
}

export const ValuesGrid = ({ qualities }: ValueGridProps) => {
  return (
    <GridWrapper>
      <GridContainer>
        {Array.isArray(qualities)
          ? qualities.map((item) => (
              <GridItem key={item._key} media={item.media} text={item.text} />
            ))
          : null}
      </GridContainer>
    </GridWrapper>
  )
}

const GridContainer = styled(FadeIn, {
  mt: '$s',

  '@tabletUp': {
    display: 'grid',
    gap: '$xxxl 13.5rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
})

const GridWrapper = styled('div')

const GridItemContainer = styled('div', {
  '& + &': {
    mt: '$xxxl',
  },

  '@tabletUp': {
    '& + &': {
      mt: 0,
    },

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
})

const GridItemMedia = styled(Media, {
  width: '100%',
})

const GridItemText = styled(RendererRichText, {
  mt: '$l',
  maxWidth: '53.9rem',
})
