import { useState } from 'react'
import isEmail from 'validator/lib/isEmail'

import { Input } from 'components/Inputs/Input'

import { Colors } from 'styles/constants'
import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'
import { getFontStyles } from 'styles/getFontStyles'
import { styled } from 'styles/stitches.config'
import { Heading } from 'components/Text/Heading'

export const SignUpForm = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [value, setValue] = useState('')

  const [touched, setTouched] = useState(false)

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )

  const handleBlur = () => {
    setTouched(true)
    setErrorMessage(validateForm(value))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (validateForm(value)) {
      e.preventDefault()
      setErrorMessage(validateForm(value))
    } else {
      setShowSuccess(true)
      setValue('')
      setTouched(false)
    }
  }

  const validateForm = (value: string) => {
    let error = undefined
    if (value === '' || value === null) {
      error = 'Please enter an email address'
    } else if (!isEmail(value)) {
      error = 'That didn’t work! Please enter a valid email address'
    }
    return error
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if ((errorMessage && errorMessage !== '') || touched) {
      setErrorMessage(validateForm(value))
    }
    if (showSuccess) {
      setShowSuccess(false)
    }
  }

  return (
    <div>
      <iframe
        name="dummyframe"
        id="dummyframe"
        style={{ display: 'none' }}
      ></iframe>
      <Form
        action="https://companionstudio.substack.com/api/v1/free?nojs=true"
        target="dummyframe"
        method="post"
        onSubmit={handleSubmit}
      >
        <InputWrapper>
          <Input
            name={'email'}
            placeholder={'Subscribe for occasional ramblings'}
            type={'email'}
            value={value}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormFeedback tag="p" fontStyle="$body">
            {errorMessage && errorMessage !== '' && <span>{errorMessage}</span>}
            {!(errorMessage && errorMessage !== '') && showSuccess && (
              <span>Success! Keep an eye out for our ramblings</span>
            )}
          </FormFeedback>
        </InputWrapper>
        <FormButton
          type={'submit'}
          value="Submit"
          disabled={Boolean(!value || (errorMessage && errorMessage !== ''))}
        >
          Submit
        </FormButton>
      </Form>
    </div>
  )
}

const Form = styled('form', {
  display: 'flex',
  alignItems: 'flex-start',
})

const InputWrapper = styled('div', {
  flexGrow: 1,
  mr: '$xxs',
})

const FormFeedback = styled(Heading, {
  mt: '$xxs',
})

const FormButton = styled('button', {
  backgroundColor: '$white',
  color: '$black',
  borderRadius: '$pill',
  border: 'none',
  cursor: 'pointer',
  p: '$xxs',
  pb: 9,
  minHeight: 30,

  '&:hover': {
    opacity: 0.8,
  },
})
