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
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        hasValue={Boolean(value)}
      />
    </>
  )
}

const Label = styled('label', {
  visuallyHidden: '',
})

const FormInput = styled('input', {
  width: '100%',
  padding: '$xxs $xs',
  backgroundColor: 'transparent',
  border: '1px solid $white100',
  borderRadius: '$pill',
  color: '$white100',
  minHeight: 30,
  fontSize: '$XS',
  lineHeight: '$XS',

  '&::placeholder': {
    color: `$white100`,
  },

  '&:focus': {
    backgroundColor: '$white25',
  },

  variants: {
    hasValue: {
      true: {
        backgroundColor: '$white100 !important',
        color: '$black100',
      },
    },
  },
})
