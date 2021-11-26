import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

import { THEME_TYPES, COLOR, BACKGROUND } from '../../styles/constants'
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

const Button = ({ text, link, theme = THEME_TYPES.LIGHT }) => {
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

export const ButtonContainer = styled.div`
  display: inline-block;
  border-radius: 500px;
  padding: 8px;
  padding-bottom: 9px;
  color: ${(p) => getThemeValue(p.$theme, COLOR)};
  background-color: ${(p) => getThemeValue(p.$theme, BACKGROUND)};
  ${getFontStyles(FONT_STYLE_APFEL_12_400)}
  z-index: 1;
  text-decoration: none;
  cursor: pointer;
`
const ButtonAnchor = styled.a`
  display: inline-block;
`
