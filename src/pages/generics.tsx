import React from 'react'
import PostPage from 'src/components/PostPage'
import { P, Code, Highlight, Ul, UlLi, Hr } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CodeBlock from 'src/components/CodeBlock'
import underConstructionCard from 'src/lib/underConstructionCard'
import * as snippets from 'src/lib/snippets'
import RunButtonText from 'src/components/RunButtonText'
import TwitterLink from 'src/components/TwitterLink'
import { articlesData } from 'src/lib/articles'
import { baseUrl } from 'src/lib/meta'

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
                <strong>Note:</strong> If you already understand generics, you
                won’t find anything new in this tutorial. However,{' '}
                <Highlight color="white85">
                  you might know someone (maybe your colleague or your Twitter
                  follower) who’s struggling with generics
                </Highlight>
                . If so, I’d appreciate it if you could share this article with
                them. You can{' '}
                <TwitterLink
                  title={articlesData['generics']['title']}
                  url={`${baseUrl}/generics`}
                >
                  click here to tweet this article.
                </TwitterLink>
              </P>
            </>
          )
        }
      },
      {
        title: (
          <>
            Let’s talk about <Code>makeState()</Code>
          </>
        ),
        content: (
          <>
            <P>
              First, I created a function called <Code>makeState()</Code> below.
              We’ll use this function to talk about generics.
            </P>
            <CodeBlock snippet={snippets.cupt} />
            <P>
              When you run <Code>makeState()</Code>, it returns two functions:{' '}
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
              number:
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
                Can we modify <Code>makeState()</Code> such that, it can create
                two different states:
              </Highlight>{' '}
              one that only allows numbers, and the other that only allows
              strings?
            </P>
            <P>Here’s what I mean:</P>
            <CodeBlock snippet={snippets.bfka} />
            <P>
              Our first <Code>makeState()</Code> created number-only states, and
              our second <Code>makeState()</Code> created string-only states.
              However, it couldn’t create both number-only states and
              string-only states.
            </P>
            <P>
              How can we modify <Code>makeState()</Code> to achieve our goal?
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
              Instead, we want <Code>makeState()</Code> to support creating two
              different states: one that allows only numbers, and the other that
              allows only strings.
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
              <Code>makeState()</Code> is now defined as{' '}
              <Code>makeState&lt;S&gt;()</Code>. You can think of{' '}
              <Code>&lt;S&gt;</Code> as another thing that you have to pass in
              when you call the function. But instead of passing a value, you
              pass a <strong>type</strong> to it.
            </P>
            <P>
              For example, you can pass the type <Code>number</Code> as{' '}
              <Code>S</Code> when you call <Code>makeState()</Code>:
            </P>
            <CodeBlock snippet={snippets.jdhu} />
            <P>
              Then, inside the function definition of <Code>makeState()</Code>,{' '}
              <Code>S</Code> will be come <Code>number</Code>:
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
              <Code>makeState()</Code>:
            </P>
            <CodeBlock
              snippet={snippets.hkgv}
              shouldHighlight={(lineNumber, tokenNumber) =>
                lineNumber === 1 && tokenNumber > 5 && tokenNumber < 7
              }
            />
            <P>
              That’s it! And we call <Code>makeState&lt;S&gt;()</Code> a
              “generic function” because it’s flexible—you have a choice to make
              it number-only or string-only. You know it’s a generic function if
              it takes a type parameter when you call it.
            </P>
            <CodeBlock
              snippet={snippets.brze}
              caption={
                <>
                  <Code>makeState&lt;S&gt;()</Code> is a generic function
                </>
              }
            />
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <strong>You might be wondering:</strong> Why did we name the
                type parameter as “<Code>S</Code>”?
              </P>
              <P>
                <strong>Answer:</strong> It could actually be any name, but
                usually people use the first letter of a word that describes
                what the type is representing. In this case, I chose “
                <Code>S</Code>” because it’s describing the type of a{' '}
                <strong>“S”</strong>tate. The following names are also common:
              </P>
              <Ul>
                <UlLi>
                  <Code>T</Code> (for <strong>“T”</strong>ype)
                </UlLi>
                <UlLi>
                  <Code>E</Code> (for <strong>“E”</strong>lement)
                </UlLi>
                <UlLi>
                  <Code>K</Code> (for <strong>“K”</strong>ey)
                </UlLi>
                <UlLi>
                  <Code>V</Code> (for <strong>“V”</strong>alue)
                </UlLi>
              </Ul>
            </>
          )
        }
      },
      {
        title: <>But you can create a boolean state!</>,
        content: (
          <>
            <P>
              <strong>But wait a minute:</strong> If you pass{' '}
              <Code>boolean</Code> to <Code>S</Code>, you can create a
              boolean-only state.
            </P>
            <CodeBlock snippet={snippets.llvc} />
            <P>
              <strong>Maybe we might NOT want this to be allowed.</strong>{' '}
              Suppose that don’t want <Code>makeState()</Code> to be able to
              create non-number or non-string states (like <Code>boolean</Code>
              ). How can we make sure that this is the case?
            </P>
            <EmojiSeparator
              emojis={['question', 'chickEgg', 'question']}
              description={
                <>
                  How can we prevent <Code>makeState()</Code> from
                  <br />
                  creating non-number or non-string states?
                </>
              }
            />
            <P>
              <strong>The solution:</strong>{' '}
              <Highlight>
                When you declare <Code>makeState()</Code>, you change the type
                parameter <Code>&lt;S&gt;</Code> to{' '}
                <Code>&lt;S extends number | string&gt;</Code>
              </Highlight>
              . That’s the only change you need to make.
            </P>
            <CodeBlock
              snippet={snippets.mngc}
              shouldHighlight={(lineNumber, tokenNumber) =>
                lineNumber === 0 && tokenNumber > 2 && tokenNumber < 12
              }
            />
            <P>
              By doing this, when you call <Code>makeState()</Code>, you’d only
              be able to pass <Code>number</Code>, <Code>string</Code>, or any
              other type that extends either <Code>number</Code> or{' '}
              <Code>string</Code> into <Code>S</Code>.
            </P>
            <P>
              Let’s see what happens now when you try to pass{' '}
              <Code>boolean</Code> into <Code>S</Code>.{' '}
              <Highlight>
                Press <RunButtonText compile /> below
              </Highlight>
              .
            </P>
            <CodeBlock
              snippet={snippets.dngl}
              compile
              resultError
              shouldHighlight={(lineNumber, tokenNumber) =>
                lineNumber === 17 && tokenNumber > 5 && tokenNumber < 7
              }
              shouldHighlightResult={(lineNumber, tokenNumber) =>
                lineNumber === 17 && tokenNumber > 5 && tokenNumber < 7
              }
              result={
                <>
                  Type 'boolean' does not satisfy the constraint 'string |
                  number'.
                </>
              }
            />
            <P>It resulted in an error, which is what we want!</P>
            <P>
              As you just saw, you can specify what’s allowed for the type
              parameter(s) of a generic function.
            </P>
          </>
        )
      },
      {
        title: <>Default type</>,
        content: (
          <>
            <P>
              It can be annoying to specify types like{' '}
              <Code>&lt;number&gt;</Code> or <Code>&lt;string&gt;</Code> every
              time you call <Code>makeState()</Code>.
            </P>
            <P>
              <strong>So here’s an idea:</strong>{' '}
              <Highlight>
                Can we make it so that <Code>&lt;number&gt;</Code> is the
                default type parameter of <Code>makeState()</Code>?
              </Highlight>{' '}
              We want to make it so that, if the type is missing, it’s set as{' '}
              <Code>number</Code> by default.
            </P>
            <CodeBlock snippet={snippets.xfwf} />
            <P>
              To make this happen, we can specify the default type of{' '}
              <Code>S</Code> by adding <Code>= number</Code> at the end. It’s
              kind of like setting default values for regular function
              parameters, right?
            </P>
            <CodeBlock
              snippet={snippets.thxf}
              shouldHighlight={(lineNumber, tokenNumber) =>
                lineNumber === 2 && tokenNumber > 10 && tokenNumber < 14
              }
            />
            <P>
              By doing this, you can create a number-only state without
              specifying the type:
            </P>
            <CodeBlock snippet={snippets.gzwe} />
          </>
        )
      },
      {
        color: 'green',
        title: 'Quick recap: Just like regular function parameters',
        content: (
          <>
            <P>
              We are about <em>two-thirds</em> of the way through this article.
              Before we continue, let’s do a quick recap.
            </P>
            <P>
              <strong>What you should remember is that</strong>,{' '}
              <Highlight>
                generics are just like regular function parameters.
              </Highlight>{' '}
              The difference is that{' '}
              <Highlight>
                regular function parameters deal with values, but generics deal
                with types.
              </Highlight>
            </P>
            <Hr />
            <P>
              <strong>Example 1:</strong> For example, here’s a regular function
              that takes any value:
            </P>
            <CodeBlock snippet={snippets.wpru} />
            <P>
              Similarly, you can declare a generic function with a type
              parameter:
            </P>
            <CodeBlock snippet={snippets.bqvz} />
            <Hr />
            <P>
              <strong>Example 2:</strong> In regular functions, you can specify
              the type of a parameter like this:
            </P>
            <CodeBlock snippet={snippets.qini} />
            <P>
              Similarly, you can specify what’s allowed for the type parameter
              of a generic function:
            </P>
            <CodeBlock snippet={snippets.kbld} />
            <Hr />
            <P>
              <strong>Example 3:</strong> In regular functions, you can specify
              the default value of a parameter like this:
            </P>
            <CodeBlock snippet={snippets.pjcw} />
            <P>
              Similarly, you can specify the default type for a generic
              function:
            </P>
            <CodeBlock snippet={snippets.nyih} />
            <Hr />
            <P>
              Generics are not scary. They’re like regular function parameters,
              but instead of values, it deals with types. If you understood this
              much, you’re good to go!
            </P>
          </>
        )
      },
      underConstructionCard
    ]}
  />
)

export default Page
