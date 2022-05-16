import { Sanity } from '@types'
import { Media } from 'components/Media/Media'
import { RendererRichText } from 'components/Renderer/RendererRichText'
import { FadeIn } from 'components/Transitions/FadeIn'

import { styled } from 'styles/stitches.config'

interface BlockApproachProps extends Sanity.ApproachBlock {
  className?: string
}

export const BlockApproach = ({
  text,
  media,
  className,
}: BlockApproachProps) => {
  return (
    <Section className={className}>
      {media ? <BlockMedia {...media} /> : null}
      {text ? <BlockText blocks={text} /> : null}
    </Section>
  )
}

const Section = styled(FadeIn, {
  '@tabletUp': {
    display: 'flex',
    gap: '$xl',
  },
})

const BlockMedia = styled(Media, {
  br: '$wrapperLarge',
  mb: '$l',

  '@tabletUp': {
    flex: '1 1 50%',
    mb: 0,
  },
})

const BlockText = styled(RendererRichText, {
  '@tabletUp': {
    flex: '1 1 50%',
  },
})
