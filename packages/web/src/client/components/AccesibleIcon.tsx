import { Children, cloneElement, ReactNode } from 'react'
import { styled } from 'styles/stitches.config'

const VisuallyHiddenLabel = styled('span', {
  visuallyHidden: '',
})

interface AccessibleIconProps {
  children: ReactNode
  label: string
  className?: string
}

/**
 * Same pattern used in `Radix-UI`
 * the most important bit is to include
 * a string in the anchor so the link
 * actually tells the user what they're going
 * to do.
 */
export const AccessibleIcon = ({
  children,
  label,
  className,
}: AccessibleIconProps) => {
  const child = Children.only(children)
  return (
    <>
      {cloneElement(child as React.ReactElement, {
        'aria-hidden': 'true',
        focusable: 'false',
        className,
      })}
      <VisuallyHiddenLabel>{label}</VisuallyHiddenLabel>
    </>
  )
}
