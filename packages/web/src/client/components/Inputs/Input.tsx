import styled from 'styled-components'

import { getFontStyles } from 'styles/getFontStyles'
import { Colors, HIDDEN } from 'styles/constants'
import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'

interface InputProps {
  value: string
  name: string
  placeholder: string
  type: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  value,
  name,
  placeholder,
  type,
  handleChange,
  handleBlur,
}: InputProps) => {
  return (
    <>
      <Label htmlFor={name}>Email</Label>
      <FormInput
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </>
  )
}

const Label = styled.label`
  ${HIDDEN}
`
const FormInput = styled.input`
  width: 100%;
  padding: 6px 12px;
  padding-bottom: 8px;
  ${getFontStyles(FONT_STYLE_APFEL_12_400)};
  background-color: transparent;
  border: 1px solid ${Colors.white};
  border-radius: 500px;
  color: ${Colors.white};
  &::placeholder {
    color: rgba(255, 255, 255, 57%);
  }
  min-height: 30px;

  &:focus {
    background-color: hsla(0, 0%, 100%, 0.2);
    outline: none;
  }
`
