import React from 'react'
import PostPage from 'src/components/PostPage'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { P, Highlight } from 'src/components/ContentTags'

const Page = () => (
  <PostPage
    hideIntroQuote
    articleKey="refactor"
    cards={[
      {
        content: (
          <>
            <P>
              You’ve probably come across a piece of code that’s hard to
              understand. To make it more understandable, you need to{' '}
              <strong>refactor</strong> the code. And many programmers have
              written how-to guides on refactoring code.
            </P>
            <EmojiSeparator
              emojis={['uglyCode', 'refactorArrow', 'cleanCode']}
              description={
                <>Refactor the code to make it more understandable</>
              }
            />
            <P>
              <Highlight>
                You’ve probably also come across a{' '}
                <strong>coding tutorial</strong> that’s hard to understand.
              </Highlight>{' '}
              Maybe you wanted to learn a new language, library, or framework,
              but the tutorial you Google’d made you more confused as ever.
            </P>
            <EmojiSeparator
              emojis={['question', 'cryingCat', 'question']}
              description={
                <>
                  You’ve probably come across a <strong>coding tutorial</strong>{' '}
                  that’s hard to understand
                </>
              }
            />
          </>
        )
      }
    ]}
  />
)

export default Page
