import PropTypes from 'prop-types'

import styled from 'styled-components'
import Image from 'next/image'

import React from 'react'

const Slide = ({ image, alt }) => {
  return (
    <ImageWrapper>
      <Image src={image} alt={alt} layout="fill" />
    </ImageWrapper>
  )
}

Slide.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
}

export default Slide

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
