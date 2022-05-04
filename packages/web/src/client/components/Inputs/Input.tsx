import { ChangeEventHandler, FocusEventHandler } from 'react'
import { styled } from 'styles/stitches.config'

interface InputProps {
  value: string
  name: string
  placeholder: string
  type: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
}

export const Input = ({
  value,
  name,
  placeholder,
  type,
  onChange,
  onBlur,
  onFocus,
}: InputProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      onChange(e)
    }
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    if (onBlur) {
      onBlur(e)
    }
  }

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    if (onFocus) {
      onFocus(e)
    }
  }

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
        onFocus={handleFocus}
      />
    </>
  )
}

const Label = styled('label', {
  visuallyHidden: '',
})

const FormInput = styled('input', {
  width: '100%',
  padding: '6px $xs',
  pb: '$xxs',
  backgroundColor: 'transparent',
  border: '1px solid $white',
  borderRadius: '$pill',
  color: '$white',
  minHeight: 30,
  fontSize: '$h6',
  lineHeight: '$h6',

  '&::placeholder': {
    color: `rgba(255, 255, 255, 57%)`,
  },

  '&:focus': {
    backgroundColor: 'hsla(0, 0%, 100%, 0.2)',
    outline: 'none',
  },
})
