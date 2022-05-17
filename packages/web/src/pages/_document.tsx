import * as React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

import { getCssText, reset } from 'styles/stitches.config'

export default class Doc extends Document {
  getInitialProps = async (ctx: DocumentContext) => {
    // render page
    const results = await ctx.defaultGetInitialProps(ctx)
    // get the css for the current rendering cycle
    const stitchesCssString = getCssText()
    // reset the styles between renders
    reset()

    return {
      ...results,
      styles: (
        <>
          {results.styles}
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: stitchesCssString }}
          />
        </>
      ),
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={'favicon/favicon-32x32.png'}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={'favicon/favicon-16x16.png'}
          />
          <link rel="manifest" href={'favicon/site.webmanifest'} />
          <link rel="shortcut icon" href={'favicon/favicon.ico'} />
          <link rel="apple-touch-icon" href={'favicon/apple-touch-icon.png'} />
          <link
            rel="favicon/android-chrome-192x192"
            href={'favicon/android-chrome-192x192.png'}
          />
          <link
            rel="favicon/android-chrome-256x256"
            href={'favicon/android-chrome-256x256.png'}
          />
          <link rel="mask-icon" href={'favicon/safari-pinned-tab.svg'} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
