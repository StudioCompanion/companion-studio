import Link from 'next/link'

import { styled } from 'styles/stitches.config'
import { HiatusBanner } from 'components/Site/HiatusBanner'

const FOX = `
                           :.
                    .+    \`ss\`
                    \`y+   /o++
                     s++\` s+++/
                     o++o:o+++o/
                     ++ooy+++++o:
                  .:+oo+++++++++o.
             \`.-/++++++++++++++++o\`
         \`.:/+++++++++o+oo++++++++o\`
     \`-//+++++++++++++sos++++++++++/
 \`.:oyhh+++++++++++++++++++++++++++o-
 /shhddy++++++++++++++++++++++++++++o.
  \`.--://++/+++++++++++++++++++++++++o\`
          \`..-:/+++++++++++++++++++++++
                  \`.-s++++++++++++++++o:
                    :o+++++++++++++++++o.
                   .s+++++++++++++++++++o\`
                   o+++++++++++++++++++++/
                  /+++++++++++++++++++++//\`
                 :o++++++++++//:--.\`
                 +/::--\`
`

export default function ErrorPage() {
  return (
    <>
      <HiatusBanner />
      <Page>
        <Content>
          <pre>{FOX}</pre>
          <p>
            :( 404. Go <Link href="/">home</Link> instead.
          </p>
        </Content>
      </Page>
    </>
  )
}
const Page = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  mb: '$xxxs',
  pt: '4rem',

  '@tabletUp': {
    pt: '4.8rem',
  },
})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& > pre': {
    transform: 'translateX(-9%)',
  },

  '& *': {
    fontSize: '1.3rem !important',
    fontFamily: 'monospace !important',
  },
})
