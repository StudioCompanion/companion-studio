import React from 'react'
import Image from 'next/image'

import { styled } from 'styles/stitches.config'

interface SquiggleProps {
  src: string
}

export const Squiggle = ({ src }: SquiggleProps) => {
  const x = Math.floor(Math.random() * 100)
  const y = Math.floor(Math.random() * 100)
  const rotation = Math.floor(Math.random() * 360)

  return (
    <SquiggleContainer
      style={{
        top: `${x}%`,
        left: `${y}%`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <Image src={src} />
    </SquiggleContainer>
  )
}

export const SquiggleBackground = () => {
  return (
    <SquiggleBackgroundContainer>
      {squiggles.map((squiggle, index) => (
        <Squiggle src={squiggle} key={index} />
      ))}
    </SquiggleBackgroundContainer>
  )
}

const squiggles = [
  '/images/graphics/squiggles/01.png',
  '/images/graphics/squiggles/02.png',
  '/images/graphics/squiggles/03.png',
  '/images/graphics/squiggles/04.png',
  '/images/graphics/squiggles/05.png',
  '/images/graphics/squiggles/06.png',
  '/images/graphics/squiggles/07.png',
  '/images/graphics/squiggles/08.png',
  '/images/graphics/squiggles/09.png',
  '/images/graphics/squiggles/10.png',
  '/images/graphics/squiggles/11.png',
  '/images/graphics/squiggles/12.png',
  '/images/graphics/squiggles/13.png',
  '/images/graphics/squiggles/14.png',
  '/images/graphics/squiggles/15.png',
  '/images/graphics/squiggles/16.png',
  '/images/graphics/squiggles/17.png',
  '/images/graphics/squiggles/18.png',
]

const SquiggleBackgroundContainer = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
})

const SquiggleContainer = styled('div', {
  position: 'absolute',
  maxWidth: '5rem',
})
