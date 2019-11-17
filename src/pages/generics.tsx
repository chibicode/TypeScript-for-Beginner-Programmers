import React from 'react'
import PostPage from 'src/components/PostPage'
import { P } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CodeBlock from 'src/components/CodeBlock'
import underConstructionCard from 'src/lib/underConstructionCard'
import * as snippets from 'src/lib/snippets'

const Page = () => (
  <PostPage
    articleKey="generics"
    cards={[
      {
        title: 'TypeScript Generics Too Hard?',
        content: (
          <>
            <CodeBlock snippet={snippets.kiyi} />
            <P>
              If you’re (1) new to TypeScript, (2) new to{' '}
              <strong>generics</strong>, and (3) <em>struggling</em> to
              understand generics, then you’re exactly like me from 13 years
              ago.
            </P>
            <P>
              Back then, I was studying the Java programming language in
              college. Generics were a relatively new feature for Java at the
              time. I was a beginner programmer then, and{' '}
              <em>generics felt very difficult</em>. So I gave up on actually
              understanding generics and used them without knowing what I was
              doing. I never really understood generics until I had to use them
              a lot for my job.
            </P>
            <EmojiSeparator
              emojis={['question', 'cryingCat', 'question']}
              description={
                <>
                  I gave up on understanding generics when I was learning Java
                  13 years ago
                </>
              }
            />
            <P>
              Similarly, if you feel that TypeScript generics are too
              difficult—maybe you’ve only done frontend engineering in JS and
              React/Vue, or you’re simply new to programming—this tutorial is
              for you! I’ll try to help you actually understand generics.
            </P>
            <P>
              (If you didn’t find TypeScript generics to be very difficult, this
              tutorial might be too easy for you.)
            </P>
          </>
        )
      },
      underConstructionCard
    ]}
  />
)

export default Page
