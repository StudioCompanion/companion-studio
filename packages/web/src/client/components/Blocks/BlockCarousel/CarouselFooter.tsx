import { SanityGenerated } from '@types'
import { RendererRichText } from 'components/Renderer/RendererRichText'
import { MouseEventHandler } from 'react'
import { styled } from 'styles/stitches.config'

interface CarouselFooterProps {
  dotCount: number
  activeIndex: number
  caption?: SanityGenerated.RichText
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const CarouselFooter = ({
  dotCount,
  caption,
  activeIndex,
  onClick,
}: CarouselFooterProps) => {
  const showDots = dotCount > 1

  const actualIndex = activeIndex + 1

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Footer>
      <Caption blocks={caption ?? []} />
      <LiveRegion
        aria-live="polite"
        aria-atomic="true"
      >{`Slide ${actualIndex} of ${dotCount}`}</LiveRegion>
      {showDots ? (
        <DotContainer>
          {new Array(dotCount).fill(null).map((_, index) => (
            <Dot
              key={index}
              type="button"
              style={{ opacity: activeIndex === index ? 1 : 0.2 }}
              onClick={handleClick}
            >
              <VisuallyHiddenLabel>{`Image ${index + 1}`}</VisuallyHiddenLabel>
              {activeIndex === index ? (
                <VisuallyHiddenLabel>{`(current slide)`}</VisuallyHiddenLabel>
              ) : null}
            </Dot>
          ))}
        </DotContainer>
      ) : null}
    </Footer>
  )
}

const Footer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

const Caption = styled(RendererRichText, {
  mt: '$xs',
})

const LiveRegion = styled('div', {
  visuallyHidden: '',
})

const DotContainer = styled('div', {
  mt: '$xs',
  display: 'flex',
})

const Dot = styled('button', {
  width: 6,
  height: 6,
  border: 'none',
  padding: 0,
  margin: 0,
  borderRadius: '$circle',
  backgroundColor: '$black100',

  '& + &': {
    ml: '$xxxs',
  },
})

const VisuallyHiddenLabel = styled('span', {
  visuallyHidden: '',
})
