import { styled, keyframes } from 'styles/stitches.config'

interface VideoLoaderProps {
  className?: string
}

export const VideoLoader = ({ className }: VideoLoaderProps) => {
  return <Loader className={className} />
}

const loaderAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

const Loader = styled('div', {
  height: '2.4rem',
  width: '2.4rem',
  borderRadius: '50%',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  borderLeft: '2px solid #fff',
  mixBlendMode: 'difference',
  animation: `${loaderAnimation} 1.1s infinite linear`,

  '&::after': {
    height: '2.4rem',
    width: '2.4rem',
    borderRadius: '50%',
  },
})
