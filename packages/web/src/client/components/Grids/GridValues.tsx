import styled from 'styled-components'

import { PADDING, ThemeTypes } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import { FONT_STYLE_RECKLESS_26_400 } from 'styles/fonts'

import { Button } from 'components/Button/Button'
import { FadeUp } from 'components/Transitions/FadeUp'
import { RendererRichText } from 'components/Renderer/RendererRichText'

import { NonNullSkipArray, PickType, Sanity } from 'src/types'

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

const GridContainer = styled.div`
  display: grid;
  gap: ${PADDING.xl}px;
  grid-template-columns: 1fr;
  justify-items: center;

  ${MEDIA_QUERIES.tabletUp} {
    gap: ${PADDING.xxl}px ${PADDING.m}px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  ${MEDIA_QUERIES.largeDesktopUp} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${PADDING.xl}px;
  ${MEDIA_QUERIES.tabletUp} {
    margin-top: ${PADDING.xxl}px;
  }
`

const GridItemHeading = styled(RendererRichText)`
  & * {
    // Little hack because this uses a very specific subset of the RichTextRenderer in the CMS
    ${getFontStyles(FONT_STYLE_RECKLESS_26_400)}
  }
  margin-bottom: 20px;
`

const GridItemContainer = styled.div`
  text-align: center;
  ${MEDIA_QUERIES.tabletUp} {
    max-width: 425px;
  }
`

const ButtonWrapper = styled.div`
  align-self: center;
  margin: ${PADDING.xl}px 0;

  ${MEDIA_QUERIES.tabletUp} {
    margin: ${PADDING.xxl}px 0;
  }
`
