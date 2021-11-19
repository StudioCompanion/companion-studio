import styled from 'styled-components'
import Link from 'next/link'

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
    <Page>
      <Content>
        <pre>{FOX}</pre>
        <p>
          :( 404. Go <Link href="/">home</Link> instead.
        </p>
      </Content>
    </Page>
  )
}
const Page = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > pre {
    transform: translateX(-9%);
  }

  & * {
    font-size: 1.3rem !important;
    font-family: monospace !important;
  }
`
