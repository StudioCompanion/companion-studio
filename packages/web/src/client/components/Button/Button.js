import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

import {
  COLORS,
  LIGHT,
  COLOR,
  HOVER_COLOR,
  BACKGROUND,
  HOVER_BACKGROUND,
} from '../../styles/constants'
import { MEDIA_QUERIES } from '../../styles/mediaQueries'
import { getFontStyles } from '../../styles/getFontStyles'
import { getThemeValue } from 'helpers/theme'
import { FONT_STYLE_APFEL_12_400 } from '../../styles/fonts'

const ButtonInner = ({ text, theme }) => {
  return <ButtonContainer $theme={theme}>{text}</ButtonContainer>
}

ButtonInner.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  theme: PropTypes.string,
}

const Button = ({ text, link, theme = LIGHT }) => {
  return (
    <>
      {link ? (
        <Link href={link} passHref>
          <ButtonAnchor>
            <ButtonInner theme={theme} text={text} />
          </ButtonAnchor>
        </Link>
      ) : (
        <ButtonInner theme={theme} text={text} />
      )}
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  theme: PropTypes.string,
}

export default Button

const ButtonContainer = styled.div`
  display: inline-block;
  border-radius: 500px;
  padding: 8px;
  color: ${(p) => getThemeValue(p.$theme, COLOR)};
  background-color: ${(p) => getThemeValue(p.$theme, BACKGROUND)};
  ${getFontStyles(FONT_STYLE_APFEL_12_400)}
  z-index: 1;
  text-decoration: none;
  cursor: pointer;

  a:hover & {
    background-color: ${(p) => getThemeValue(p.$theme, HOVER_BACKGROUND)};
  }
`
const ButtonAnchor = styled.a`
  display: inline-block;
`
