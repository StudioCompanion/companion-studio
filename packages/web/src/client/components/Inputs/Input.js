import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Field } from 'formik'

import { getFontStyles } from 'styles/getFontStyles'
import { COLORS, HIDDEN } from 'styles/constants'
import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'

const Input = ({ name, placeholder, type }) => {
  return (
    <>
      <Label htmlFor={name}>Email</Label>
      <FormInput placeholder={placeholder} type={type} name={name} />
    </>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}

export default Input

const Label = styled.label`
  ${HIDDEN}
`
const FormInput = styled(Field)`
  width: 100%;
  padding: 6px 12px;
  ${getFontStyles(FONT_STYLE_APFEL_12_400)};
  background-color: transparent;
  border: 1px solid ${COLORS.white};
  border-radius: 500px;
  color: ${COLORS.white};
  &::placeholder {
    color: rgba(255, 255, 255, 57%);
  }
`
