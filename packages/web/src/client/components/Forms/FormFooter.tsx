import { useState } from 'react'
import isEmail from 'validator/lib/isEmail'
import { useRouter } from 'next/router'

import { Input } from 'components/Inputs/Input'
import { Heading } from 'components/Text/Heading'
import { Button } from 'components/Button/Button'

import { styled } from 'styles/stitches.config'
import { ThemeTypes } from 'styles/constants'

import { EventNames, firePlausibleEvent } from 'helpers/analytics'

interface SignUpFormProps {
  className?: string
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

export const SignUpForm = ({ className }: SignUpFormProps) => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [value, setValue] = useState('')
  const router = useRouter()

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )

  const handleBlur = () =>
    setErrorMessage(
      Boolean(value) && !isEmail(value)
        ? 'That didn’t work! Please enter a valid email address'
        : undefined
    )

  const currentPage =
    (router.query?.slug as string) ?? router.route !== '/'
      ? router.route.substring(1)
      : 'Home'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage(undefined)
    const error = validateForm(value)
    if (error) {
      setErrorMessage(error)
    } else {
      const headers = new Headers()
      headers.append('Content-Type', 'application/json;charset=UTF-8')

      await fetch('/api/newsletter_signup', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          email: value,
        }),
      })

      firePlausibleEvent({
        name: EventNames.NewsletterSubmission,
        additionalProps: {
          page: currentPage,
        },
      })
      setShowSuccess(true)
      setValue('')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)

    if (showSuccess) {
      setShowSuccess(false)
    }
  }

  const handleFocus = () => {
    setErrorMessage(undefined)

    firePlausibleEvent({
      name: EventNames.NewsletterActivation,
      additionalProps: {
        page: currentPage,
      },
    })
  }

  return (
    <div className={className}>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            name="email"
            placeholder={'Subscribe for occasional ramblings'}
            type="email"
            value={value}
            onFocus={handleFocus}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {(errorMessage && errorMessage !== '') || showSuccess ? (
            <FormFeedback tag="p" fontStyle="XS">
              {errorMessage && errorMessage !== '' && (
                <span>{errorMessage}</span>
              )}
              {!(errorMessage && errorMessage !== '') && showSuccess && (
                <span>Success! Keep an eye out for our ramblings</span>
              )}
            </FormFeedback>
          ) : null}
        </InputWrapper>
        <Button text="Submit" type="submit" theme={ThemeTypes.LIGHT}></Button>
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
  mt: '$xxxs',
  ml: '$xs',
})
