import styled from 'styled-components'

import { BACKGROUND, COLOR, ThemeTypes } from 'styles/constants'
import { getFontStyles } from 'styles/getFontStyles'
import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'

import { getThemeValue } from 'helpers/theme'
import { LinkBase } from 'components/Links/LinkBase'
import { Sanity } from '@types'

export interface ButtonInnerProps {
  text?: string
  theme: ThemeTypes
}

export const ButtonInner = ({ text, theme }: ButtonInnerProps) => {
  return <ButtonContainer $theme={theme}>{text}</ButtonContainer>
}

export type ButtonProps = ButtonInnerProps & Partial<Sanity.Link>

export const Button = ({
  text,
  theme = ThemeTypes.LIGHT,
  label,
  url,
  isExternal,
}: ButtonProps) => {
  return (
    <>
      {url ? (
        <ButtonAnchor url={url} isExternal={isExternal}>
          <ButtonInner theme={theme} text={label} />
        </ButtonAnchor>
      ) : (
        <ButtonInner theme={theme} text={text} />
      )}
    </>
  )
}

export const ButtonContainer = styled.div<{ $theme: ThemeTypes }>`
  ${getFontStyles(FONT_STYLE_APFEL_12_400)}

  display: inline-block;
  border-radius: 500px;
  padding: 8px;
  padding-bottom: 9px;
  color: ${(p) => getThemeValue(COLOR, p.$theme)};
  background-color: ${(p) => getThemeValue(BACKGROUND, p.$theme)};
  z-index: 1;
  text-decoration: none;
  cursor: pointer;
`
const ButtonAnchor = styled(LinkBase)`
  display: inline-block;
`
