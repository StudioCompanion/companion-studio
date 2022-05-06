import { useRef, useEffect } from 'react'

import { styled } from 'styles/stitches.config'

const DURATION = 1200

interface FadeInProps {
  children: React.ReactNode
  className?: string
  tag?: keyof Pick<
    JSX.IntrinsicElements,
    'div' | 'section' | 'header' | 'footer'
  >
}

export const FadeIn = ({
  children,
  className,
  tag = 'section',
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const entry = ref.current
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        ref.current.classList.add('fade')

        observer.unobserve(entry)
      }
    })
    observer.observe(entry)
    return () => observer.unobserve(entry)
  }, [])

  return (
    <Element className={className} ref={ref} as={tag}>
      {children}
    </Element>
  )
}

/**
 * TODO: it'd be great to have a function
 * that could produce keyframes from Spring
 * Physics that could be used here...
 */
const Element = styled('section', {
  opacity: 0,
  transition: `opacity ${DURATION}ms cubic-bezier(0.33, 1, 0.68, 1)`,

  '@motion': {
    transition: 'none',
  },

  '&.fade': {
    opacity: 1,
  },
})
