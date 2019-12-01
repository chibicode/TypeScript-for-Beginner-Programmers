import React from 'react'
import PostPage from 'src/components/PostPage'
import { A, P, Code, Highlight, Ul, UlLi, Hr } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CodeBlock from 'src/components/CodeBlock'
import * as snippets from 'src/lib/snippets'
import RunButtonText from 'src/components/RunButtonText'
import TwitterLink from 'src/components/TwitterLink'
import TwitterEmbed from 'src/components/TwitterEmbed'
import Emoji from 'src/components/Emoji'
import { articlesData } from 'src/lib/articles'
import { baseUrl } from 'src/lib/meta'
import ReadMore from 'src/components/ReadMore'

const Page = () => (
  <PostPage
    articleKey="generics"
    cards={[
      {
        title: <>TypeScript Generics Too Hard?</>,
        content: (
          <>
            <CodeBlock snippet={snippets.bwyu} />
            <P>
              If you’re (1) new to TypeScript, (2) new to{' '}
              <strong>generics</strong>, and (3) <em>struggling</em> to
              understand generics, then you’re exactly like me when I was
              learning Java 13 years ago.
            </P>
            <P>
              Like TypeScript, the Java programming language supports generics.
              When I was studying Java in college, I was a beginner programmer,
              and <em>generics felt very difficult</em> to me. So I gave up on
              understanding generics at the time and used them without knowing
              what I was doing. I didn’t understand generics until I got a full
              time job after college.
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
              Maybe you’re like me from 13 years ago and have felt that
              TypeScript generics are too difficult. If so, this tutorial is for
              you! I’ll try to help you actually understand generics.
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
                  you might know someone (maybe one of your Twitter followers)
                  who’s struggling with generics
                </Highlight>
                . If you do, I’d appreciate it if you could share this article
                with them. You can{' '}
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
                <strong>Note:</strong> If you’ve used React, you might have
                realized that <Code color="lightYellow1">makeState()</Code> is
                similar to the <Code color="lightYellow1">useState()</Code>{' '}
                hook.
              </P>
              <P></P>
              <ReadMore
                showReadMoreTextWhenVisible
                readMoreText="If so, click here for more explanation."
                preview={readMore => (
                  <P>
                    <strong>Confused?</strong> Some people might be wondering:
                    “Why do we have functions inside another function?” or
                    “What’s the{' '}
                    <Code color="lightYellow1">{`{ getState, setState }`}</Code>{' '}
                    syntax?”
                    {readMore}
                  </P>
                )}
                rest={
                  <>
                    <Ul>
                      <UlLi>
                        The above code has functions (
                        <Code color="lightYellow1">getState()</Code>,{' '}
                        <Code color="lightYellow1">setState()</Code>) inside
                        another function (
                        <Code color="lightYellow1">makeState()</Code>). This is
                        because I’m using <strong>closure</strong>, which is one
                        of the most important concepts in JavaScript. If you’ve
                        never heard of closure, I highly recommend you to Google
                        it. Here’s a{' '}
                        <A href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">
                          MDN article
                        </A>
                        .
                      </UlLi>
                      <UlLi>
                        The{' '}
                        <Code color="lightYellow1">{`{ getState, setState }`}</Code>{' '}
                        syntax is the ES2015 feature of JavaScript (
                        <A href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">
                          shorthand property names
                        </A>{' '}
                        and{' '}
                        <A href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">
                          object destructuring
                        </A>
                        ). If you’ve never seen it, I recommend learning the
                        ES2015 syntax—
                        <A href="https://github.com/DrkSephy/es6-cheatsheet">
                          here’s a good cheat sheet
                        </A>
                        .
                      </UlLi>
                    </Ul>
                  </>
                }
              />
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
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 3 && tokenIndex > 2 && tokenIndex < 4
              }
              shouldHighlightResult={(lineIndex, tokenIndex) =>
                lineIndex === 3 && tokenIndex > 2 && tokenIndex < 4
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
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 8 && tokenIndex > 4 && tokenIndex < 8
              }
            />
            <P>
              To fix this, we can change the type of <Code>state</Code> and{' '}
              <Code>x</Code> from <Code>number</Code> to <Code>string</Code>:
            </P>
            <CodeBlock
              snippet={snippets.gkgi}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 9 && tokenIndex > 4 && tokenIndex < 8) ||
                (lineIndex === 2 && tokenIndex > 4 && tokenIndex < 6)
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
            <P>Now that we got the basics down, here’s a challenge for you:</P>
            <P>
              <strong>Question:</strong>{' '}
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
              Earlier, our first <Code>makeState()</Code> created number-only
              states, and our second <Code>makeState()</Code> created
              string-only states. However, it couldn’t create both number-only
              states and string-only states.
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
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 7 && tokenIndex > 4 && tokenIndex < 10) ||
                (lineIndex === 1 && tokenIndex > 4 && tokenIndex < 10)
              }
            />
            <P>
              <strong>This does NOT work.</strong> You’ll end up creating a
              state that allows both numbers and strings, which is not what we
              want. Instead, we want <Code>makeState()</Code> to support
              creating two different states: one that allows only numbers, and
              the other that allows only strings.
            </P>
            <CodeBlock snippet={snippets.qqic} />
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
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 7 && tokenIndex > 4 && tokenIndex < 8) ||
                (lineIndex === 1 && tokenIndex > 4 && tokenIndex < 6) ||
                (lineIndex === 0 && tokenIndex > 1 && tokenIndex < 5)
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
              <Code>S</Code> will become <Code>number</Code>:
            </P>
            <CodeBlock snippet={snippets.rebo} />
            <P>
              Because <Code>state</Code> will be <Code>number</Code> and{' '}
              <Code>setState</Code> will only take <Code>number</Code>, it
              creates a number-only state.
            </P>
            <CodeBlock
              snippet={snippets.gjgg}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 1 && tokenIndex > 5 && tokenIndex < 7
              }
            />
            <P>
              On the other hand, to create a string-only state, you can pass{' '}
              <Code>string</Code> as <Code>S</Code> when you call{' '}
              <Code>makeState()</Code>:
            </P>
            <CodeBlock
              snippet={snippets.hkgv}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 1 && tokenIndex > 5 && tokenIndex < 7
              }
            />
            <P>
              <strong>Note:</strong> We call <Code>makeState&lt;S&gt;()</Code> a{' '}
              <strong>“generic function”</strong> because it’s literally
              generic—you have a choice to make it number-only or string-only.
              And you know it’s a generic function if it takes a type parameter.
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
                type parameter as “<Code color="lightYellow1">S</Code>”?
              </P>
              <P>
                <strong>Answer:</strong> It could actually be any name, but
                usually people use the first letter of a word that describes
                what the type is representing. In this case, I chose “
                <Code color="lightYellow1">S</Code>” because it’s describing the
                type of a <strong>“S”</strong>tate. The following names are also
                common:
              </P>
              <Ul>
                <UlLi>
                  <Code color="lightYellow1">T</Code> (for <strong>“T”</strong>
                  ype)
                </UlLi>
                <UlLi>
                  <Code color="lightYellow1">E</Code> (for <strong>“E”</strong>
                  lement)
                </UlLi>
                <UlLi>
                  <Code color="lightYellow1">K</Code> (for <strong>“K”</strong>
                  ey)
                </UlLi>
                <UlLi>
                  <Code color="lightYellow1">V</Code> (for <strong>“V”</strong>
                  alue)
                </UlLi>
              </Ul>
            </>
          )
        }
      },
      {
        title: <>Problem: You can create a boolean state!</>,
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
              ). How can we ensure this?
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
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 0 && tokenIndex > 2 && tokenIndex < 12
              }
            />
            <P>
              By doing this, when you call <Code>makeState()</Code>, you’d only
              be able to pass <Code>number</Code>, <Code>string</Code>, or any
              other type that extends either <Code>number</Code> or{' '}
              <Code>string</Code> as <Code>S</Code>.
            </P>
            <P>
              Let’s see what happens now when you try to pass{' '}
              <Code>boolean</Code> as <Code>S</Code>.{' '}
              <Highlight>
                Press <RunButtonText compile /> below
              </Highlight>
              .
            </P>
            <CodeBlock
              snippet={snippets.dngl}
              compile
              resultError
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 17 && tokenIndex > 5 && tokenIndex < 7) ||
                (lineIndex === 1 && tokenIndex > 0)
              }
              shouldHighlightResult={(lineIndex, tokenIndex) =>
                lineIndex === 17 && tokenIndex > 5 && tokenIndex < 7
              }
              result={
                <>
                  Type 'boolean' does not satisfy the constraint 'string |
                  number'.
                </>
              }
            />
            <P>
              It resulted in an error, which is what we want! We have
              successfully prevented <Code>makeState()</Code> from creating
              non-number or non-string states.
            </P>
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
              We want to make it so that, if <Code>S</Code> is unspecified, it’s
              set as <Code>number</Code> by default.
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
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 2 && tokenIndex > 10 && tokenIndex < 14
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
              What you should remember is that{' '}
              <Highlight>
                generics are just like regular function parameters.
              </Highlight>{' '}
              The difference is that{' '}
              <Highlight>
                regular function parameters deal with values, but generics deal
                with type parameters.
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
      {
        title: (
          <>
            Let’s talk about <Code>makePair</Code>
          </>
        ),
        content: (
          <>
            <P>
              Let’s take a look at the new function called{' '}
              <Code>makePair()</Code>. It’s similar to <Code>makeState()</Code>,
              but instead of storing a single value,{' '}
              <Highlight>
                this one stores a pair of values as{' '}
                <Code>{`{ first: ?, second: ? }`}</Code>
              </Highlight>
              . Right now, it only supports numbers.
            </P>
            <CodeBlock snippet={snippets.ugeb} />
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
              snippet={snippets.jejx}
              result={
                <>
                  {`{ first: 1, second: 2 }`}
                  <br />
                  {`{ first: 3, second: 4 }`}
                </>
              }
            />
            <P>
              Now, just as we did for <Code>makeState()</Code>, let’s turn{' '}
              <Code>makePair()</Code> into a generic function.
            </P>
          </>
        )
      },
      {
        title: (
          <>
            Generic <Code>makePair</Code>
          </>
        ),
        content: (
          <>
            <P>
              Here’s a generic version of <Code>makePair</Code>.
            </P>
            <Ul>
              <UlLi>
                It takes <em>two</em> type parameters <Code>F</Code> and{' '}
                <Code>S</Code> (for “F”irst and “S”econd).
              </UlLi>
              <UlLi>
                The type of <Code>first</Code> will be <Code>F</Code>.
              </UlLi>
              <UlLi>
                The type of <Code>second</Code> will be <Code>S</Code>.
              </UlLi>
            </Ul>
            <CodeBlock snippet={snippets.rxdm} />
            <P>
              Here’s an example usage. By calling <Code>makePair</Code> with{' '}
              <Code>&lt;number, string&gt;</Code>, it forces <Code>first</Code>{' '}
              to be <Code>number</Code> and <Code>second</Code> to be{' '}
              <Code>string</Code>.
            </P>
            <CodeBlock snippet={snippets.gozc} />
            <Hr />
            <P>
              To summarize, you can create a generic function that takes{' '}
              <strong>multiple type parameters</strong>.
            </P>
            <CodeBlock snippet={snippets.qgxj} />
            <P>
              Of course, you can also use the <Code>extends</Code> keyword or
              default types like before:
            </P>
            <CodeBlock snippet={snippets.nbvo} />
            <P>
              You can even make the second type (<Code>S</Code>) to be related
              to the first type (<Code>F</Code>). Here’s an example:
            </P>
            <CodeBlock snippet={snippets.xekh} />
          </>
        )
      },
      {
        title: <>Generic interfaces and type aliases</>,
        content: (
          <>
            <P>
              Let’s go back to our previous implementation of{' '}
              <Code>makePair()</Code>. Now, take a look at the type of{' '}
              <Code>pair</Code>:
            </P>
            <CodeBlock
              snippet={snippets.mrub}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 1 && tokenIndex > 4
              }
            />
            <P>
              This works as is, but if we want to,{' '}
              <Highlight>
                we can refactor <Code>{`{ first: F, second: S }`}</Code> into an{' '}
                <strong>interface</strong> or a <strong>type alias</strong> so
                it can be reused.
              </Highlight>
            </P>
            <P>
              Let’s first extract the type of <Code>pair</Code> into a{' '}
              <strong>generic interface</strong>. I’ll use <Code>A</Code> and{' '}
              <Code>B</Code> as type parameter names to distinguish them from
              the type parameters of <Code>makePair()</Code>.
            </P>
            <CodeBlock snippet={snippets.lldl} />
            <P>
              We can then use this interface to declare the type for{' '}
              <Code>pair</Code>.
            </P>
            <CodeBlock snippet={snippets.cqrm} />
            <P>
              By extracting into a generic interface (an interface that takes
              type parameters), we can reuse it in other places if necessary.
            </P>
            <Hr />
            <P>
              Alternatively, we can extract it into a{' '}
              <strong>generic type alias</strong>. For object types, type
              aliases are basically identical to interfaces, so you can use
              whichever one you prefer.
            </P>
            <CodeBlock snippet={snippets.qgea} />
            <P>
              To summarize, you can create generic interfaces and type aliases,
              just as you can create generic functions.
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                To learn more about interfaces v.s. type aliases,{' '}
                <A href="https://stackoverflow.com/a/52682220/114157">
                  read this StackOverflow answer
                </A>
                . As of TypeScript 3.7, which added a{' '}
                <A href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html">
                  support for recursive type aliases
                </A>
                , type aliases can cover pretty much all of the use cases of
                interfaces.
              </P>
            </>
          )
        }
      },
      {
        title: <>Generic classes</>,
        content: (
          <>
            <P>
              <Highlight>
                The last thing we’ll cover is <strong>generic classes</strong>.
              </Highlight>{' '}
              First, let’s revisit the code for <Code>makeState()</Code>. This
              is the generic version that doesn’t use <Code>extends</Code> or
              default type parameters.
            </P>
            <CodeBlock
              snippet={snippets.brze}
              caption={
                <>
                  Let’s revisit <Code>makeState()</Code>
                </>
              }
            />
            <P>
              We can turn <Code>makeState()</Code> into a generic class called{' '}
              <Code>State</Code> like below. It looks similar to{' '}
              <Code>makeState()</Code>, right?
            </P>
            <CodeBlock snippet={snippets.mroc} />
            <P>
              To use this, you just need to pass a type parameter on
              initialization.
            </P>
            <CodeBlock snippet={snippets.zdbq} />
            <P>
              To summarize, generic classes are just like generic functions.
              Generic functions take a type parameter when we call them, but
              generic classes take a type parameter when we instantiate them.
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <strong>Note:</strong> You need to set{' '}
                <Code color="lightYellow1">
                  "strictPropertyInitialization": false
                </Code>{' '}
                on TypeScript config (
                <Code color="lightYellow1">tsconfig.json</Code>) to get the
                above code to compile.
              </P>
            </>
          )
        }
      },
      {
        title: <>That’s all you need to know!</>,
        content: (
          <>
            <EmojiSeparator emojis={['sparkles', 'smilingCat', 'sparkles']} />
            <P>
              Thanks for reading! That’s all you need to know about generics in
              TypeScript. Hope I made generics less scary to you.
            </P>
            <P>
              If you’d like me to write about some other topics on TypeScript,
              or if you have feedback, please let me know on{' '}
              <A href="https://twitter.com/chibicode">
                <Emoji type="twitter" /> Twitter at @chibicode
              </A>
              .
            </P>
            <TwitterEmbed id="1197963887804436480" />
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <strong>About the author:</strong> I’m Shu Uesugi, a software
                engineer. The most recent TypeScript project I worked on is an{' '}
                <em>interactive computer science course</em> called{' '}
                <A href="https://ycombinator.chibicode.com/">
                  <strong>“Y Combinator for Non-programmers”</strong>
                </A>
                .
              </P>
              <P>
                You can email me at{' '}
                <A href="mailto:shu@chibicode.com">shu@chibicode.com</A>.
              </P>
            </>
          )
        }
      }
    ]}
  />
)

export default Page
