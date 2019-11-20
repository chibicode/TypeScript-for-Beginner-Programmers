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
      {
        title: <>What if we use a string?</>,
        content: (
          <>
            <P>
              Now, instead of numbers like <Code>1</Code> or <Code>2</Code>,{' '}
              <Highlight>what happens if we use a string</Highlight> like{' '}
              <Code>'foo'</Code>? Try to guess first, and then{' '}
              <Highlight>
                press the <RunButtonText compile /> button
              </Highlight>
              .
            </P>
            <CodeBlock
              compile
              resultError
              shouldHighlight={(lineNumber, tokenNumber) =>
                lineNumber === 3 && tokenNumber > 2 && tokenNumber < 4
              }
              shouldHighlightResult={(lineNumber, tokenNumber) =>
                lineNumber === 3 && tokenNumber > 2 && tokenNumber < 4
              }
              snippet={snippets.stkh}
              result={
                <>
                  Argument of type '"foo"' is not assignable to parameter of
                  type 'number'.
                </>
              }
            />
            <P>
              It failed to compile because <Code>setState()</Code> expects a
              number as its argument.
            </P>
            <CodeBlock
              snippet={snippets.nnyl}
              shouldHighlight={(lineNumber, tokenNumber) =>
                lineNumber === 8 && tokenNumber > 4 && tokenNumber < 8
              }
            />
            <P>
              To fix this, we can change the types from <Code>number</Code> to{' '}
              <Code>string</Code>:
            </P>
            <CodeBlock
              snippet={snippets.gkgi}
              shouldHighlight={(lineNumber, tokenNumber) =>
                (lineNumber === 9 && tokenNumber > 4 && tokenNumber < 8) ||
                (lineNumber === 2 && tokenNumber > 4 && tokenNumber < 6)
              }
            />
            <P>
              It’ll now work!{' '}
              <Highlight>
                Press <RunButtonText />.
              </Highlight>
            </P>
            <CodeBlock snippet={snippets.xeax} result={<>foo</>} />
          </>
        )
      },
      {
        title: <>Challenge: Two different states</>,
        content: (
          <>
            <P>Now that we got the basics down, here’s a challenge question:</P>
            <P>
              <Highlight>
                Can we modify <Code>createState()</Code> such that, it can
                create two different states:
              </Highlight>{' '}
              one that only allows numbers, and the other that only allows
              strings?
            </P>
            <P>Here’s what I mean:</P>
            <CodeBlock snippet={snippets.bfka} />
            <P>
              Our first <Code>createState()</Code> created number-only states,
              and our second <Code>createState()</Code> created string-only
              states. However, it couldn’t create both number-only states and
              string-only states.
            </P>
            <P>
              How can we modify <Code>createState()</Code> to achieve our goal?
            </P>
          </>
        )
      },
      {
        title: <>Attempt 1: Does this work?</>,
        content: (
          <>
            <P>Here’s the first attempt. Does this work?</P>
            <CodeBlock
              snippet={snippets.ystu}
              shouldHighlight={(lineNumber, tokenNumber) =>
                (lineNumber === 7 && tokenNumber > 4 && tokenNumber < 10) ||
                (lineNumber === 1 && tokenNumber > 4 && tokenNumber < 10)
              }
            />
            <P>
              <strong>This does NOT work.</strong> If you use this, you’ll end
              up creating a state that allows both numbers and strings, which is
              not what we want.
            </P>
            <CodeBlock snippet={snippets.qqic} />
            <P>
              Instead, we want <Code>createState()</Code> to support creating
              two different states: one that allows only numbers, and the other
              that allows only strings.
            </P>
          </>
        )
      },
      {
        title: <>Attempt 2: Use generics</>,
        content: (
          <>
            <P>
              This is where <strong>generics</strong> come in. Take a look
              below:
            </P>
            <CodeBlock
              snippet={snippets.brze}
              shouldHighlight={(lineNumber, tokenNumber) =>
                (lineNumber === 7 && tokenNumber > 4 && tokenNumber < 8) ||
                (lineNumber === 1 && tokenNumber > 4 && tokenNumber < 6) ||
                (lineNumber === 0 && tokenNumber > 1 && tokenNumber < 5)
              }
            />
            <P>
              <Code>createState()</Code> is now defined as{' '}
              <Code>createState&lt;S&gt;()</Code>. You can think of{' '}
              <Code>&lt;S&gt;</Code> as another argument that you have to pass
              in when you call the function. But instead of passing a value, you
              pass a <strong>type</strong> to it. It’s a type argument.
            </P>
            <P>
              For example, you can pass the type <Code>number</Code> as{' '}
              <Code>S</Code> when you call <Code>createState()</Code>:
            </P>
            <CodeBlock snippet={snippets.jdhu} />
            <P>
              Then, inside the function definition of <Code>createState()</Code>
              , <Code>S</Code> will be come <Code>number</Code>:
            </P>
            <CodeBlock snippet={snippets.rebo} />
            <P>
              Because <Code>state</Code> will be <Code>number</Code> and{' '}
              <Code>setState</Code> will only take <Code>number</Code>, it
              creates a number-only state.
            </P>
            <CodeBlock
              snippet={snippets.gjgg}
              shouldHighlight={(lineNumber, tokenNumber) =>
                lineNumber === 1 && tokenNumber > 5 && tokenNumber < 7
              }
            />
            <P>
              And to create a string-only state, you can pass{' '}
              <Code>number</Code> as <Code>S</Code> when you call{' '}
              <Code>createState()</Code>:
            </P>
            <CodeBlock
              snippet={snippets.hkgv}
              shouldHighlight={(lineNumber, tokenNumber) =>
                lineNumber === 1 && tokenNumber > 5 && tokenNumber < 7
              }
            />
            <P>
              That’s it! And we call <Code>createState&lt;S&gt;()</Code> a
              “generic function” because it’s flexible—you have a choice to make
              it number-only or string-only. You know it’s a generic function if
              it takes a type parameter when you call it.
            </P>
            <CodeBlock
              snippet={snippets.brze}
              caption={
                <>
                  <Code>createState&lt;S&gt;()</Code> is a generic function
                </>
              }
            />
          </>
        )
      },
      {
        title: <>But you can create a boolean state!</>,
        content: <></>
      },
      underConstructionCard
    ]}
  />
)

export default Page
