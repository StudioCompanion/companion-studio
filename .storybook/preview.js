import { RouterContext } from 'next/dist/shared/lib/router-context'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import * as NextImage from 'next/image'
import { createGlobalStyle } from 'styled-components'

import { CSS_GLOBAL } from '../packages/web/src/client/styles/global'

const { iphonex, iphone12 } = INITIAL_VIEWPORTS

const GlobalStyle = createGlobalStyle`
  ${CSS_GLOBAL}
`

const custom = {
  '13inch': {
    name: '1440 x 900',
    styles: {
      width: '1440px',
      height: '900px',
    },
    type: 'desktop',
  },
}

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  viewport: {
    viewports: {
      iphonex,
      iphone12,
      ...custom,
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      <Story />
      <GlobalStyle />
    </>
  ),
]

/**
 * next/Image component does not work out of the box with Storybook.
 *
 * Here is the issue:
 *
 * https://github.com/vercel/next.js/issues/18393
 *
 * Here is the fix:
 *
 * https://github.com/vercel/next.js/issues/18393#issuecomment-783269086
 */
const OriginalNextImage = NextImage.default
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})