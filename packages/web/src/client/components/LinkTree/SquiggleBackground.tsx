import React from 'react'
import Image from 'next/image'

import { styled } from 'styles/stitches.config'

interface SquiggleProps {
  src: StaticImageData
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

import s01 from '../../../../public/images/squiggles/01.png'
import s02 from '../../../../public/images/squiggles/02.png'
import s03 from '../../../../public/images/squiggles/03.png'
import s04 from '../../../../public/images/squiggles/04.png'
import s05 from '../../../../public/images/squiggles/05.png'
import s06 from '../../../../public/images/squiggles/06.png'
import s07 from '../../../../public/images/squiggles/07.png'
import s08 from '../../../../public/images/squiggles/08.png'
import s09 from '../../../../public/images/squiggles/09.png'
import s010 from '../../../../public/images/squiggles/010.png'
import s011 from '../../../../public/images/squiggles/011.png'
import s012 from '../../../../public/images/squiggles/012.png'
import s013 from '../../../../public/images/squiggles/013.png'
import s014 from '../../../../public/images/squiggles/014.png'
import s015 from '../../../../public/images/squiggles/015.png'
import s016 from '../../../../public/images/squiggles/016.png'
import s017 from '../../../../public/images/squiggles/017.png'
import s018 from '../../../../public/images/squiggles/018.png'

const squiggles = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
  s07,
  s08,
  s09,
  s010,
  s011,
  s012,
  s013,
  s014,
  s015,
  s016,
  s017,
  s018,
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
