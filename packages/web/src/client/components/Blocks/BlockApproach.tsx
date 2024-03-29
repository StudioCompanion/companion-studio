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
      <MediaFlexContainer>
        {media ? <BlockMedia {...media} /> : null}
      </MediaFlexContainer>
      {text ? (
        <BlockTextContainer>
          <BlockText blocks={text} />
        </BlockTextContainer>
      ) : null}
    </Section>
  )
}

const Section = styled(FadeIn, {
  '@tabletUp': {
    display: 'flex',
    gap: '$xl',
  },
})

const MediaFlexContainer = styled('div', {
  '@tabletUp': {
    flex: '1 1 50%',
    mb: 0,
  },
})

const BlockMedia = styled(Media, {
  br: '$wrapperLarge',
  mb: '$l',

  '@tabletUp': {
    mb: 0,
  },
})

const BlockTextContainer = styled('div', {
  '@tabletUp': {
    flex: '1 1 50%',
  },
})

const BlockText = styled(RendererRichText, {
  maxWidth: '$centeredParagraph',

  '& > p': {
    fontSize: '$M',

    '@largeDesktopUp': {
      fontSize: '$L',
    },
  },
})
