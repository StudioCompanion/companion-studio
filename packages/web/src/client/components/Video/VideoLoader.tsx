import { styled } from 'styles/stitches.config'

interface VideoLoaderProps {
  className?: string
}

export const VideoLoader = ({ className }: VideoLoaderProps) => {
  return <Loader className={className} />
}

const Loader = styled('div', {
  height: '3rem',
  width: '3rem',
  borderRadius: '50%',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  borderLeft: '2px solid #fff',

  '&::after': {
    height: '3rem',
    width: '3rem',
    borderRadius: '50%',
  },
})
