import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getFontStyles } from 'styles/getFontStyles'
import { COLORS, HIDDEN } from 'styles/constants'
import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'

const Input = ({
  value,
  name,
  placeholder,
  type,
  handleChange,
  handleBlur,
}) => {
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

Input.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
}

export default Input

const Label = styled.label`
  ${HIDDEN}
`
const FormInput = styled.input`
  width: 100%;
  padding: 6px 12px;
  padding-bottom: 8px;
  ${getFontStyles(FONT_STYLE_APFEL_12_400)};
  background-color: transparent;
  border: 1px solid ${COLORS.white};
  border-radius: 500px;
  color: ${COLORS.white};
  &::placeholder {
    color: rgba(255, 255, 255, 57%);
  }
  min-height: 30px;
`
