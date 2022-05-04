import { styled } from 'styles/stitches.config'

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
