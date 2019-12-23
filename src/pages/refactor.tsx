import React from 'react'
import PostPage from 'src/components/PostPage'
import { P } from 'src/components/ContentTags'

const Page = () => (
  <PostPage
    hideIntroQuote
    articleKey="refactor"
    cards={[
      {
        title: <>Test</>,
        content: (
          <>
            <P>Test</P>
          </>
        )
      }
    ]}
  />
)

export default Page
