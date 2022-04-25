import React from 'react'

const Media = ({ assetType, image, videoUrl, title, Icon = null }) => {
  if (image && assetType === 'image') {
    return (
      <div style={{ height: 35 }}>
        <img style={{ objectFit: 'cover' }} src={image} alt={title} />
      </div>
    )
  }
  if (videoUrl && assetType === 'video') {
    const gif = `https://image.mux.com/${videoUrl}/animated.gif`
    return (
      <div style={{ height: 35 }}>
        <img style={{ objectFit: 'cover' }} src={gif} alt={title} />
      </div>
    )
  }
  if (Icon) {
    return <Icon />
  }
  return null
}

export default Media
