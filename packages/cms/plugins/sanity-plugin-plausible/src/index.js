import React from 'react'
import { DashboardWidget } from '@sanity/dashboard'

const root = 'https://plausible.io/share'
const site = process.env.SANITY_STUDIO_PLAUSIBLE_SITE
const embed = 'true'
const theme = 'dark'

const PlausibleIframe = () => {
  return (
    <DashboardWidget header="Plausible analytics">
      <iframe
        plausible-embed
        src={`${root}/${site}&embed=${embed}&theme=${theme}`}
        scrolling="no"
        loading="lazy"
        style={{ width: '1px', minWidth: '100%', height: '1600px' }}
      ></iframe>
      <script async src="https://plausible.io/js/embed.host.js"></script>
    </DashboardWidget>
  )
}

export default {
  name: 'plausible',
  component: PlausibleIframe,
}
