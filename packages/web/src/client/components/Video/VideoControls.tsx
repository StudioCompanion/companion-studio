import { animated, useSpring } from '@react-spring/web'

import { useCanHover } from 'hooks/useCanHover'

import { styled } from 'styles/stitches.config'

interface VideoControlsProps {
  isPaused: boolean
  src?: string
  className?: string
}

export const VideoControls = ({ isPaused, src }: VideoControlsProps) => {
  const canHover = useCanHover()

  const [style, api] = useSpring(
    () => ({
      scale: !canHover ? 1 : 0,
      immediate: true,
      config: {
        friction: 30,
        tension: 180,
        mass: 0.1,
      },
    }),
    [canHover]
  )

  const handleButtonFocus = () => {
    api.start({
      scale: 1,
    })
  }

  const handleButtonBlur = () => {
    if (canHover) {
      api.start({
        scale: 0,
      })
    }
  }

  return (
    <VideoButton
      style={style}
      onFocus={handleButtonFocus}
      onBlur={handleButtonBlur}
      aria-controls={src}
    >
      <Control>{isPaused ? 'Play' : 'Pause'}</Control>
      <VideoButtonIcon>
        {isPaused ? (
          <svg
            id="play"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // makes it visually in the center
            style={{ position: 'relative', right: 1 }}
          >
            <path
              d="M22.7781 10.4663L9.27813 2.2257C9.05326 2.0832 8.79356 2.00521 8.52738 2.00025C8.26121 1.99529 7.99878 2.06355 7.76876 2.19758C7.53533 2.32565 7.34074 2.51426 7.20545 2.74359C7.07017 2.97291 6.9992 3.23445 7.00001 3.5007V20.0007C6.9992 20.267 7.07017 20.5285 7.20545 20.7578C7.34074 20.9871 7.53533 21.1758 7.76876 21.3038C7.99878 21.4379 8.26121 21.5061 8.52738 21.5012C8.79356 21.4962 9.05326 21.4182 9.27813 21.2757L22.7781 13.0351C22.9994 12.9016 23.1824 12.7132 23.3095 12.4882C23.4365 12.2632 23.5033 12.0091 23.5033 11.7507C23.5033 11.4923 23.4365 11.2383 23.3095 11.0132C23.1824 10.7882 22.9994 10.5998 22.7781 10.4663Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            id="pause"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.25 4.5V19.5C20.25 19.8978 20.092 20.2794 19.8107 20.5607C19.5294 20.842 19.1478 21 18.75 21H15.375C14.9772 21 14.5956 20.842 14.3143 20.5607C14.033 20.2794 13.875 19.8978 13.875 19.5V4.5C13.875 4.10218 14.033 3.72064 14.3143 3.43934C14.5956 3.15804 14.9772 3 15.375 3H18.75C19.1478 3 19.5294 3.15804 19.8107 3.43934C20.092 3.72064 20.25 4.10218 20.25 4.5ZM8.625 3H5.25C4.85218 3 4.47064 3.15804 4.18934 3.43934C3.90804 3.72064 3.75 4.10218 3.75 4.5V19.5C3.75 19.8978 3.90804 20.2794 4.18934 20.5607C4.47064 20.842 4.85218 21 5.25 21H8.625C9.02282 21 9.40436 20.842 9.68566 20.5607C9.96696 20.2794 10.125 19.8978 10.125 19.5V4.5C10.125 4.10218 9.96696 3.72064 9.68566 3.43934C9.40436 3.15804 9.02282 3 8.625 3Z"
              fill="currentColor"
            />
          </svg>
        )}
      </VideoButtonIcon>
    </VideoButton>
  )
}

const VideoButtonIcon = styled('span', {
  width: 24,
  height: 24,
  borderRadius: '$circle',
  backgroundColor: '$white100',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& > svg': {
    width: 14,
    height: 14,
  },

  '@tabletUp': {
    width: 40,
    height: 40,

    '& > svg': {
      width: 24,
      height: 24,
    },
  },
})

const VideoButton = styled(animated.button, {
  width: 40,
  height: 40,
  background: 'transparent',
  border: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$circle',
  color: '$black100',

  '@tabletUp': {
    bottom: 16,
    right: 16,
  },

  '&:focus': {
    outline: 'none',

    [`& ${VideoButtonIcon}`]: {
      outline: 'auto 5px -webkit-focus-ring-color',
    },
  },
})

const Control = styled('span', {
  visuallyHidden: '',
})
