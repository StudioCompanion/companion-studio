import styled from 'styled-components'
import Link from 'next/link'

import { THEME_TYPES, VALUE_TYPES } from '../../styles/constants'
import { getFontStyles } from '../../styles/getFontStyles'
import { getThemeValue } from 'helpers/theme'
import { FONT_STYLE_APFEL_12_400 } from '../../styles/fonts'

export interface ButtonInnerProps {
  text: string
  theme: string
}

export const ButtonInner = ({ text, theme }: ButtonInnerProps) => {
  return <ButtonContainer $theme={theme}>{text}</ButtonContainer>
}

export interface ButtonProps {
  text: string
  link?: string
  theme: string
}

export const Button = ({
  text,
  link,
  theme = THEME_TYPES.LIGHT,
}: ButtonProps) => {
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

export const ButtonContainer = styled.div<{ $theme: string }>`
  display: inline-block;
  border-radius: 500px;
  padding: 8px;
  padding-bottom: 9px;
  color: ${(p) => getThemeValue(p.$theme, VALUE_TYPES.COLOR)};
  background-color: ${(p) => getThemeValue(p.$theme, VALUE_TYPES.BACKGROUND)};
  ${getFontStyles(FONT_STYLE_APFEL_12_400)}
  z-index: 1;
  text-decoration: none;
  cursor: pointer;
`
const ButtonAnchor = styled.a`
  display: inline-block;
`
