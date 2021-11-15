import PropTypes from 'prop-types'
import styled from 'styled-components'

import { COLORS, RADII, PADDING, THEME_TYPES } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_26_400,
  FONT_STYLE_RECKLESS_17_400,
} from 'styles/fonts'

export const GridItem = ({}) => {
  return <GridItemContainer></GridItemContainer>
}
GridItem.propTypes = {}

const TeamGrid = ({}) => {
  return <GridWrapper></GridWrapper>
}

TeamGrid.propTypes = {}

export default TeamGrid

const GridWrapper = styled.div``

const GridItemContainer = styled.div``
