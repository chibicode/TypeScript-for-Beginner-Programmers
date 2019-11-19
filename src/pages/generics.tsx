import React from 'react'
import PostPage from 'src/components/PostPage'
import { P, Code, Highlight } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CodeBlock from 'src/components/CodeBlock'
import underConstructionCard from 'src/lib/underConstructionCard'
import * as snippets from 'src/lib/snippets'
import RunButtonText from 'src/components/RunButtonText'

const Page = () => (
  <PostPage
    articleKey="generics"
    cards={[
      {
        title: <>TypeScript Generics Too Hard?</>,
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
              Similarly, if you feel that TypeScript generics are too difficult,
              this tutorial is for you! I’ll try to help you actually understand
              generics.
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <strong>Note:</strong> If you didn’t find generics to be
                difficult, this tutorial might be too easy for you.
              </P>
            </>
          )
        }
      },
      {
        title: (
          <>
            Let’s talk about <Code>createState()</Code>
          </>
        ),
        content: (
          <>
            <P>
              First, I created a function called <Code>createState()</Code>{' '}
              below. We’ll use this function to talk about generics.
            </P>
            <CodeBlock snippet={snippets.cupt} />
            <P>
              When you run <Code>createState()</Code>, it returns two functions:{' '}
              <Code>getState()</Code> and <Code>setState()</Code>. You can use
              these functions to set and get the variable called{' '}
              <Code>state</Code>.
            </P>
            <P>
              Let’s try it out!{' '}
              <Highlight>
                What gets printed out to the console when you run the following
                code?
              </Highlight>{' '}
              Try to guess first, and then{' '}
              <Highlight>
                press the <RunButtonText /> button
              </Highlight>
              .
            </P>
            <CodeBlock
              snippet={snippets.cbeq}
              pointToRunButton
              result={
                <>
                  1<br />2
                </>
              }
            />
            <P>
              It printed <Code>1</Code>, then <Code>2</Code>. Pretty simple,
              right?
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <strong>Note:</strong> If you’ve used React, you might realize
                that it’s kind of like the <Code>useState()</Code> hook.
              </P>
            </>
          )
        }
      },
      underConstructionCard
    ]}
  />
)

export default Page
