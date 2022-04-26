import { Carousel } from 'components/Carousel/Carousel'
import { Testimonial } from 'components/Testimonial/Testimonial'
import { TextSection } from 'components/TextSection/TextSection'

import { Sanity } from 'src/types'

interface RendererProps {
  blocks: Sanity.Blocks
}

export const Renderer = ({ blocks }: RendererProps) => {
  return (
    <>
      {blocks.map((block) => {
        const { _type, _key } = block
        switch (_type) {
          case 'blockText':
            return <TextSection key={_key} {...block} />
          case 'blockTestimonial':
            return <Testimonial key={_key} {...block} />
          case 'blockMedia':
            return <Carousel key={_key} {...block} />
          default:
            return null
        }
      })}
    </>
  )
}
