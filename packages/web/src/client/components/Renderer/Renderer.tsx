import { Sanity } from 'src/types'

interface RendererProps {
  blocks: Sanity.Blocks
}

export const Renderer = ({ blocks }: RendererProps) => {
  return (
    <>
      {blocks.map((block) => {
        const { _type } = block
        switch (_type) {
          case 'blockText':
            return null
          default:
            return null
        }
      })}
    </>
  )
}
