import { styled } from 'styles/stitches.config'
import { ThemeTypes } from 'styles/constants'

import { Button } from 'components/Button/Button'
import { FadeUp } from 'components/Transitions/FadeUp'
import { RendererRichText } from 'components/Renderer/RendererRichText'

import { NonNullSkipArray, PickType, Sanity } from '@types'

type ValueGridProps = Pick<Sanity.TeamPage, 'qualities' | 'cta'>

export const GridItem = ({
  title,
  text,
}: Omit<
  NonNullSkipArray<PickType<ValueGridProps, 'qualities'>>,
  '_key' | '_type'
>) => {
  return (
    <GridItemContainer>
      {title ? <GridItemHeading blocks={title} /> : null}
      {text ? <RendererRichText blocks={text} /> : null}
    </GridItemContainer>
  )
}

export const ValuesGrid = ({ qualities, cta }: ValueGridProps) => {
  return (
    <FadeUp>
      <GridWrapper>
        <GridContainer>
          {Array.isArray(qualities)
            ? qualities.map((item) => (
                <GridItem key={item._key} title={item.title} text={item.text} />
              ))
            : null}
        </GridContainer>
        <ButtonWrapper>
          <Button theme={ThemeTypes.DARK} {...cta} />
        </ButtonWrapper>
      </GridWrapper>
    </FadeUp>
  )
}

const GridContainer = styled('div', {
  display: 'grid',
  gap: '$xl',
  gridTemplateColumns: '1fr',
  justifyItems: 'center',

  '@tabletUp': {
    gap: '$xxl $m',
    gridTemplateColumns: 'repeat(auto-fit, minmax(35rem, 1fr)',
  },

  '@largeDesktopUp': {
    gridTemplateColumns: 'repeat(3,1fr)',
  },
})

const GridWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  my: '$xl',

  '@tabletUp': {
    my: '$xxl',
  },
})

const GridItemHeading = styled(RendererRichText, {
  mb: '$m',
})

const GridItemContainer = styled('div', {
  textAlign: 'center',

  '@tabletUp': {
    maxWidth: '42.5rem',
  },
})

const ButtonWrapper = styled('div', {
  alignSelf: 'center',
  my: '$xl',

  '@tabletUp': {
    my: '$xxl',
  },
})
