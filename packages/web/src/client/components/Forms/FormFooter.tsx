import { Input } from 'components/Inputs/Input'
import { useState } from 'react'
import styled from 'styled-components'
import { Colors } from 'styles/constants'
import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'
import { getFontStyles } from 'styles/getFontStyles'
import isEmail from 'validator/lib/isEmail'

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
    <SignUp>
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
          <FormFeedback>
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
    </SignUp>
  )
}

const SignUp = styled.div``

const Form = styled.form`
  display: flex;
  align-items: flex-start;
`

const InputWrapper = styled.div`
  flex-grow: 1;
  margin-right: 8px;
`

const FormFeedback = styled.div`
  margin-top: 8px;
  ${getFontStyles(FONT_STYLE_APFEL_12_400)}
`

const FormButton = styled.button`
  ${getFontStyles(FONT_STYLE_APFEL_12_400)};
  background-color: ${Colors.white};
  color: ${Colors.darkblue};
  border-radius: 500px;
  border: none;
  cursor: pointer;
  padding: 8px;
  padding-bottom: 9px;
  min-height: 30px;

  &:hover {
    opacity: 0.8;
  }
`
