/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PostPage from 'src/components/PostPage'
import EmojiSeparator from 'src/components/EmojiSeparator'
import {
  P,
  Highlight,
  Ol,
  OlLi,
  Ul,
  UlLi,
  ForegroundHighlight,
  A,
  Code,
  Hr,
  Blockquote
} from 'src/components/ContentTags'
import * as snippets from 'src/lib/snippets'
import TwitterLink from 'src/components/TwitterLink'
import AboutMe from 'src/components/AboutMe'
import CodeBlock from 'src/components/CodeBlock'
import Caption from 'src/components/Caption'
import CodeResult from 'src/components/CodeResult'
import CodeResultWrapper from 'src/components/CodeResultWrapper'
import ResultHighlight from 'src/components/ResultHighlight'
import Emoji from 'src/components/Emoji'
import InternalLink from 'src/components/InternalLink'
import { articlesData } from 'src/lib/articles'
import { baseUrl } from 'src/lib/meta'
import { SourceAvailableText } from 'src/components/GitHubButton'
import TodoWithData from 'src/components/TodoWithData'
import TwitterEmbed from 'src/components/TwitterEmbed'

const techniques = [
  {
    title: (
      <>
        Make code samples <em>mobile-ready</em>
      </>
    ),
    emojis: ['check', 'smartphone', 'check']
  },
  {
    title: (
      <>
        Prefer <em>minimal</em> code samples
      </>
    ),
    emojis: ['oneTwoThreeFour', 'singleArrow', 'one']
  },
  {
    title: (
      <>
        Prefer <em>practical</em> code samples
      </>
    ),
    emojis: ['rocket', 'singleArrow', 'plane']
  },
  {
    title: (
      <>
        Fail <em>fast</em>
      </>
    ),
    emojis: ['cross', 'running', 'dash']
  },
  {
    title: (
      <>
        Use <em>themes</em>, <em>analogies</em>, and <em>quizzes</em>
      </>
    ),
    emojis: ['ghost', 'doubleArrow', 'question']
  },
  {
    title: (
      <>
        Add a <em>thoughtful</em> touch
      </>
    ),
    emojis: ['sparkles', 'heartLetter', 'sparkles']
  }
] as const

const RefactorSubtitle = ({ index }: { index: number }) => (
  <ForegroundHighlight color="gray">
    Refactoring Tip <ForegroundHighlight>{index + 1}</ForegroundHighlight> of 6:
  </ForegroundHighlight>
)

const refactoringCardProps = (index: number) => ({
  subtitle: <RefactorSubtitle index={index} />,
  title: techniques[index].title,
  anchor: `tip${index + 1}`
})

const Page = () => (
  <PostPage
    hideIntroQuote
    articleKey="refactor"
    cards={[
      {
        title: <>Both code and coding tutorials can be refactored</>,
        content: (
          <>
            <P>
              At some point in your coding career, you’ve probably come across a
              piece of spaghetti code that’s not so reader-friendly. It needed
              some <strong>refactoring</strong>.
            </P>
            <EmojiSeparator
              emojis={['uglyCode', 'refactorArrow', 'cleanCode']}
              description={<>Spaghetti code needs refactoring</>}
            />
            <P>
              Similarly, you’ve probably also come across a coding{' '}
              <strong>tutorial</strong> that’s not so reader-friendly. Maybe you
              wanted to learn a new language, library, or framework, but the
              tutorial you found made you more frustrated than before.
            </P>
            <P>
              But they can be improved. As someone who’s written many coding
              tutorials, I realized that most coding tutorials can be{' '}
              <strong>refactored</strong> to be more reader-friendly—just like
              refactoring code.
            </P>
            <EmojiSeparator
              emojis={['uglyTutorial', 'refactorArrow', 'cleanTutorial']}
              description={<>Coding tutorials can also be refactored</>}
            />
            <P>
              However, while many programmers have written guidelines on how to
              refactor code, guidelines on how to refactor coding tutorials are
              rare.
            </P>
            <P>
              So, in this article, I’ll share <strong>six</strong> opinionated
              tips on refactoring coding tutorials. I’ve used these techniques
              on my own tutorials to make them more reader-friendly. Here’s the
              list:
            </P>
            <Ol>
              {techniques.map((technique, index) => (
                <OlLi key={technique.emojis.join()}>
                  <A
                    href={`#tip${index + 1}`}
                    css={css`
                      text-decoration: none;
                      font-weight: bold;
                      &:hover {
                        text-decoration: underline;
                      }
                    `}
                  >
                    {technique.title}
                  </A>
                  <br />
                  <EmojiSeparator
                    emojis={technique.emojis}
                    size="sm"
                    cssOverrides={css`
                      margin-top: 0;
                    `}
                    leftAlign
                    href={`#tip${index + 1}`}
                  />
                </OlLi>
              ))}
            </Ol>
            <P>Let’s take a look!</P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                Even if you’ve never written a coding tutorial, you might know
                someone who has (maybe one of your Twitter followers). I’d
                appreciate it if you could share this article with them. You can{' '}
                <TwitterLink
                  title={articlesData['refactor']['title']}
                  url={`${baseUrl}/refactor`}
                >
                  click here to tweet this article.
                </TwitterLink>
              </P>
              <P>
                <SourceAvailableText />
              </P>
            </>
          )
        }
      },
      {
        ...refactoringCardProps(0),
        content: (
          <>
            <EmojiSeparator emojis={techniques[0].emojis} />
            <P>
              <strong>Take a look at the code below.</strong> It’s in
              TypeScript, but don’t worry if you don’t know TypeScript. I used
              it for my tutorial called “
              <InternalLink href="/todo">
                <em>{articlesData['todo']['title']}</em>
              </InternalLink>
              ”:
            </P>
            <CodeBlock snippet={snippets.npgx} />
            <P>
              Did you notice that the above code is{' '}
              <em>formatted to fit on a small screen</em>? Because each line
              length is short (max 31 chars), you can read it without
              side-scrolling on most phones.
            </P>
            <P>
              If the above code was formatted in a single line like below
              instead, you’d have to side-scroll or wrap text on a small screen,
              which hurts readability.
            </P>
            <CodeBlock
              snippet={snippets.zgvn}
              caption={
                <>
                  Max line length: <Emoji type="cross" />{' '}
                  <strong>79 characters</strong>
                  <br />
                  <em>Line is too long; must scroll or wrap on a phone</em>
                </>
              }
            />
            <P>
              Here’s another example I used for my tutorial called “
              <InternalLink href="/generics">
                <em>{articlesData['generics']['title']}</em>
              </InternalLink>
              ”. This is <strong>good</strong> formatting (
              <Emoji type="check" /> fits on a small screen):
            </P>
            <CodeBlock
              snippet={snippets.xwbz}
              caption={
                <>
                  Max line length: <Emoji type="check" />{' '}
                  <strong>28 characters</strong>
                </>
              }
            />
            <P>
              And this is the same code in <strong>BAD</strong> formatting (
              <Emoji type="cross" /> doesn’t fit on a small screen):
            </P>
            <CodeBlock
              snippet={snippets.mvsz}
              caption={
                <>
                  Max line length: <Emoji type="cross" />{' '}
                  <strong>72 characters</strong>
                  <br />
                  <em>Line is too long; must scroll or wrap on a phone</em>
                </>
              }
            />
            <P>
              So, here’s my first refactoring tip:{' '}
              <strong>Make code samples in your tutorials mobile-ready.</strong>
            </P>
            <P>
              You can ensure this by <em>keeping line length short.</em> I try
              to keep it under about <em>50 characters</em> (at 14px font size).
              I use <A href="https://prettier.io/">Prettier</A> with custom{' '}
              <Code>printWidth</Code> to automate this (my{' '}
              <Code>.prettierrc</Code> is{' '}
              <A href="https://github.com/chibicode/TypeScript-for-Beginner-Programmers/blob/master/.prettierrc">
                here
              </A>
              ).
            </P>
            <EmojiSeparator
              emojis={['prettier']}
              description={<>I use Prettier to keep line length short</>}
            />
            <P>Here are some other techniques:</P>
            <Ul>
              <UlLi>
                Prefer <em>shorter variable names</em> (but don’t sacrifice code
                readability).
              </UlLi>
              <UlLi>
                If you can customize the CSS, <em>use narrow coding fonts</em>.
                I use <A href="https://typeof.net/Iosevka/">Iosevka</A>
                —it’s slim and looks great. You can also tighten{' '}
                <Code>letter-spacing</Code> to fit more characters.
              </UlLi>
              <UlLi>
                If you want code samples to have longer line length on a larger
                screen, you can use <em>Prettier in the browser</em> to
                dynamically adjust line length based on window width.
              </UlLi>
            </Ul>
            <Hr />
            <P>
              <strong>Why is this necessary?</strong> Because many people{' '}
              <em>actually</em> read coding tutorials on their phones.
            </P>
            <P>
              You might be tempted to assume that your readers will read (and
              follow along) your coding tutorial on a computer.{' '}
              <em>But that’s a bad assumption.</em>
            </P>
            <P>
              In the past, I’ve used Google Analytics to track desktop vs mobile
              usage on my coding tutorials. Even though my tutorials are meant
              to be done on a computer, surprisingly many people accessed them
              from a mobile device.
            </P>
            <P>
              This is because many people <em>discover</em> coding tutorials
              while using a phone to browse Twitter, mailing lists, and online
              forums.
            </P>
            <EmojiSeparator
              emojis={['twitter', 'smartphone', 'uglyTutorial']}
              description={
                <>
                  Many people <em>discover</em> coding tutorials while using a
                  phone to browse Twitter, etc.
                </>
              }
            />
            <P>
              That’s why mobile reading experience is important. If you can
              easily read all the code samples on a phone, you might be able to
              finish the tutorial without pulling out your computer. Sometimes
              you need to follow along on your computer to fully understand the
              content, but that’s not always the case.
            </P>
            <P>
              <strong>The bottom line:</strong> Assume that people will discover
              your coding tutorial on their phone and try to deliver the best
              possible first impression.
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <strong>Video tutorials:</strong> What I’ve said so far applies
                to text-based tutorials. For{' '}
                <em>video tutorials (screencasts)</em>, it’d be ideal if the
                fonts are large enough to be legible on a phone (in landscape
                mode). I like watching coding tutorials on YouTube, but
                sometimes the fonts are too small when viewed on my phone.
              </P>
            </>
          )
        }
      },
      {
        ...refactoringCardProps(1),
        content: (
          <>
            <EmojiSeparator emojis={techniques[1].emojis} />
            <P>
              <A href="/images/refactor/asOfWriting.png">As of writing</A>, the
              following code appears on the official{' '}
              <A href="https://www.typescriptlang.org/docs/handbook/advanced-types.html">
                TypeScript handbook
              </A>{' '}
              (which is written in a way that’s both a tutorial and
              documentation). And the handbook uses this code to explain how to
              use <em>a particular TypeScript keyword/operator</em>.
            </P>
            <P>
              <strong>Question:</strong> Can you tell which keyword/operator is
              being explained through this code? Hint: It is one of the
              keywords/operators used in the code. (You don’t need to know
              TypeScript—just guess!)
            </P>
            <CodeBlock snippet={snippets.onux} smallText />
            <P>
              <strong>Answer:</strong> The official{' '}
              <A href="https://www.typescriptlang.org/docs/handbook/advanced-types.html">
                TypeScript handbook
              </A>{' '}
              uses the above code to explain how to use the{' '}
              <strong>
                “<Code>&amp;</Code>” operator
              </strong>{' '}
              in TypeScript.
            </P>
            <EmojiSeparator
              emojis={['ampersand']}
              description={
                <>
                  (Brief explanation: In TypeScript, the “<Code>&amp;</Code>”
                  operator creates an intersection of two types. You can learn
                  more on <InternalLink href="/todo">my tutorial</InternalLink>
                  .)
                </>
              }
            />
            <P>
              But it’s hard to tell! If you look at the code again, only{' '}
              <Highlight color="yellowHighlight">
                the highlighted part
              </Highlight>{' '}
              below is related to the “<Code>&amp;</Code>” operator. There are
              too many other keywords that are just noise (e.g.{' '}
              <Code>Partial&lt;&gt;</Code>, <Code>hasOwnProperty</Code>,{' '}
              <Code>as</Code>, <Code>constructor</Code>, <Code>public</Code>,{' '}
              <Code>interface</Code>, <Code>void</Code>, <Code>implements</Code>
              , <Code>prototype</Code>, etc). You also need to pause and read
              carefully to understand what’s going on, even though most of the
              code isn’t directly related to the “<Code>&amp;</Code>” operator.
            </P>
            <CodeBlock
              snippet={snippets.onux}
              smallText
              semiTransparentTextExceptHighlight
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 3 && tokenIndex >= 4 && tokenIndex <= 8) ||
                (lineIndex === 4 && tokenIndex >= 7 && tokenIndex <= 11) ||
                (lineIndex === 15 && tokenIndex >= 5)
              }
              caption={
                <>
                  Only{' '}
                  <Highlight color="yellowHighlight">
                    the highlighted part
                  </Highlight>{' '}
                  is related to{' '}
                  <strong>
                    “<Code>&amp;</Code>”
                  </strong>
                  , the topic being explained through this code. Every other
                  keyword is just noise.
                </>
              }
            />
            <P>
              So, in my opinion, the above code sample is{' '}
              <em>NOT a great way</em> to explain how to use the “
              <Code>&amp;</Code>” operator in TypeScript. It does show a few
              places where the “<Code>&amp;</Code>” operator can be used, which
              is good, but it could have been done without adding so much noise.
            </P>
            <P>
              If I were to explain how the “<Code>&amp;</Code>” operator works
              in TypeScript, I’d <em>refactor</em> the earlier code as
              follows—it basically does the same thing in a simpler way. You
              don’t need to understand TypeScript to know that this is more
              minimal and focused on explaining how to use the “
              <Code>&amp;</Code>” operator. The amount it takes to understand
              this code is also much shorter.
            </P>
            <CodeBlock
              snippet={snippets.vnfq}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 4 && tokenIndex >= 5 && tokenIndex <= 9
              }
              caption={
                <>
                  If I were to explain how the “<Code>&amp;</Code>” operator
                  works, I’d rewrite the above code as follows—much simpler!
                </>
              }
            />
            <P>
              If you want to talk about more advanced usage, you could add the
              advanced example AFTER my simple example.
            </P>
            <P>
              <strong>
                What I want to say is: Prefer minimal code samples, at least
                initially.
              </strong>{' '}
              If you’re trying to teach a new concept (let’s call this “
              <strong>X</strong>”), just focus on <strong>X</strong> in the code
              sample and don’t add too much extra stuff. Add extra stuff only
              (1) after you showed a simple example and (2) when it{' '}
              <em>really</em> helps the reader’s understanding.
            </P>
            <Hr />
            <P>
              <strong>Minimal reproducible example:</strong> When you ask a
              question on StackOverflow or file an issue on GitHub, you’re often
              asked to create a minimal reproducible example. Your code needs to
              be as small as possible, such that it is just sufficient to
              demonstrate the problem, but without any additional complexity (
              <A href="https://en.wikipedia.org/wiki/Minimal_working_example">
                Wikipedia’s definition
              </A>
              ).
            </P>
            <P>
              You should use the same principle when writing code samples for
              your tutorials. Ask yourself:{' '}
              <em>
                Can I make this code sample more minimal while maintaining the
                learning experience?
              </em>
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <strong>Tutorials vs Documentations</strong>: There is a
                difference in what should code samples be like for{' '}
                <em>tutorials</em> vs <em>documentations</em>.{' '}
                <strong>Tutorials</strong> are for <em>learning</em>, so it’s
                often better to keep code samples minimal to reduce confusion
                (except for advanced topics). <strong>Documentations</strong>{' '}
                are <em>references</em>, so it’s often better to have
                comprehensive code samples.
              </P>
              <P>
                The official TypeScript handbook I mentioned earlier is written
                as something that's in between a tutorial and documentation. As
                of writing, I believe it’s subpar as a tutorial (because of what
                I said above) and as documentation (it isn’t as focused and
                detailed as it should be).
              </P>
              <P>
                To learn more about different kinds of documentation, take a
                look at this excellent post by Daniele Procida: “
                <A href="https://www.divio.com/blog/documentation/">
                  What nobody tells you about documentation
                </A>
                ”.
              </P>
            </>
          )
        }
      },
      {
        ...refactoringCardProps(2),
        content: (
          <>
            <EmojiSeparator emojis={techniques[2].emojis} />
            <P>
              <A href="/images/refactor/asOfWriting.png">As of writing</A>, the
              following code appears on the official{' '}
              <A href="https://www.typescriptlang.org/docs/handbook/advanced-types.html">
                TypeScript handbook
              </A>{' '}
              (right after the example we showed earlier). And the handbook uses
              this code to explain how to use the{' '}
              <strong>union operator</strong> in TypeScript, which is the{' '}
              <strong>
                “<Code>|</Code>”
              </strong>{' '}
              symbol <Highlight color="yellowHighlight">highlighted</Highlight>{' '}
              below.
            </P>
            <CodeBlock
              snippet={snippets.riis}
              narrowText
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 11 && tokenIndex >= 2
              }
              caption={
                <>(Slightly modified from the original for readability)</>
              }
            />
            <P>
              In TypeScript, you can write{' '}
              <Code>
                <strong>number | string</strong>
              </Code>{' '}
              to specify that a parameter can either be <Code>number</Code> OR{' '}
              <Code>string</Code>. So in this case, the second{' '}
              <Code>padding</Code> parameter can be either <Code>number</Code>{' '}
              or <Code>string</Code>.
            </P>
            <Ul>
              <UlLi>
                If <Code>padding</Code> is <Code>number</Code>, then that number
                of spaces is added to the left side of <Code>value</Code>.
              </UlLi>
              <UlLi>
                If <Code>padding</Code> is <Code>string</Code>, then{' '}
                <Code>padding</Code> is added to the left side of{' '}
                <Code>value</Code>.
              </UlLi>
            </Ul>
            <CodeBlock
              snippet={snippets.lcfe}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 2 && tokenIndex === 6) ||
                (lineIndex === 7 && tokenIndex === 6)
              }
            />
            <P>
              <strong>Now, a question for you:</strong> Is{' '}
              <Code>padLeft()</Code> a <em>good</em> example to explain how the{' '}
              <strong>
                “<Code>|</Code>”
              </strong>{' '}
              operator works in TypeScript?
            </P>
            <EmojiSeparator
              emojis={['numberText', 'verticalBar', 'stringText']}
              description={
                <>
                  Is the above code a <em>good</em> example to explain how the{' '}
                  <strong>
                    “<Code>|</Code>”
                  </strong>{' '}
                  operator works?
                </>
              }
            />
            <P>
              <strong>I’d say NO—it’s NOT a good example</strong>. You don’t
              need to know TypeScript to see why.
            </P>
            <P>
              Take a look below and ask yourself:{' '}
              <em>
                Would you EVER use <Code>padLeft()</Code> for the case where the
                second parameter is <Code>string</Code>?
              </em>
            </P>
            <CodeBlock
              snippet={snippets.crgn}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 2 && tokenIndex === 6) || lineIndex === 5
              }
            />
            <P>
              <strong>You probably would not</strong>. It just does simple
              string concatenation in reverse. You probably would just use other
              standard ways to concatenate strings, such as{' '}
              <Code>'Jim: ' + 'Hello World'</Code>. There’s no good reason why{' '}
              <Code>padLeft()</Code> should support the second string parameter.
            </P>
            <P>
              <strong>The bottom line:</strong>{' '}
              <Code>padLeft(value, padding)</Code> is useful if{' '}
              <Code>padding</Code> is <Code>number</Code> but is pretty useless
              if <Code>padding</Code> is <Code>string</Code>. So setting{' '}
              <Code>padding</Code>’s type as <Code>number | string</Code> is not
              useful—it could just be <Code>number</Code>. That’s why this is
              NOT a good example.
            </P>
            <Hr />
            <P>
              So, here’s my third refactoring tip:{' '}
              <strong>Prefer practical code samples</strong>. Avoid showing code
              no one would write. If you’re trying to teach a new concept (let’s
              call this “<strong>X</strong>”), come up with a <em>practical</em>{' '}
              code sample where <strong>X</strong> is <em>actually</em> useful
              in solving the problem.
            </P>
            <P>
              By showing a practical example, readers will understand why{' '}
              <strong>X</strong> is worth learning. If you show them a useless
              example, they’d think:{' '}
              <em>
                “What’s the point of learning <strong>X</strong>?”
              </em>
            </P>
            <P>
              <strong>Example:</strong> If I were to explain how to use{' '}
              <Code>number | string</Code> in TypeScript, instead of the earlier{' '}
              <Code>padLeft()</Code> example, I would use the following{' '}
              <Code>
                <strong>paddingLeftCss()</strong>
              </Code>{' '}
              function. The name is similar, but this one is used to generate a
              CSS <Code>padding-left</Code> string:
            </P>
            <CodeBlock
              snippet={snippets.hfdq}
              shouldHighlight={(lineNumber, tokenNumber) =>
                lineNumber === 0 && tokenNumber >= 6 && tokenNumber <= 8
              }
            />
            <P>
              <Code>paddingLeftCss()</Code> can take a <Code>number</Code> or{' '}
              <Code>string</Code>:
            </P>
            <Ul>
              <UlLi>
                If it’s <Code>number</Code>, it returns{' '}
                <Code>padding-left</Code> CSS that’s a multiple of a predefined
                spacing unit. In this case, <Code>1 = 0.25rem</Code>,{' '}
                <Code>2 = 0.5rem</Code>, etc. This would be helpful for visual
                consistency when designing UI.
              </UlLi>
              <UlLi>
                If it’s <Code>string</Code>, it just uses that string as{' '}
                <Code>padding-left</Code>.
              </UlLi>
            </Ul>
            <P>
              This is similar to how UI libraries like{' '}
              <A href="https://github.com/styled-system/styled-system">
                styled-system
              </A>{' '}
              work. In other words, it’s a <strong>practical</strong> example.
              It <em>actually makes sense</em> to have the parameter be either{' '}
              <Code>number</Code> or <Code>string</Code>, unlike the previous
              example.
            </P>
            <Hr />
            <P>
              <strong>To summarize, always ask yourself:</strong>{' '}
              <em>
                Is my code sample practical? Would anyone ever write code like
                this?
              </em>
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <Code>padLeft()</Code> <em>could</em> have been useful if you
                could pass both a <Code>number</Code> AND a <Code>string</Code>,
                and have it repeat the string the specified number of times (see
                below). But that’s not what was in the handbook.
              </P>
              <CodeBlock
                snippet={snippets.bxzx}
                shouldHighlight={(lineIndex, tokenIndex) =>
                  lineIndex === 3 && tokenIndex >= 6 && tokenIndex <= 9
                }
              />
            </>
          )
        }
      },
      {
        ...refactoringCardProps(3),
        content: (
          <>
            <EmojiSeparator emojis={techniques[3].emojis} />
            <P>
              One of the best ways to capture your reader’s attention is to{' '}
              <strong>FAIL</strong>. When things don’t go according to plan,
              people will pay more attention than when everything goes smoothly.
              Use this to your advantage.
            </P>
            <P>
              Furthermore, it’s more effective if you <strong>fail fast</strong>
              . Try to show a failing scenario{' '}
              <strong>as early as possible</strong> in your article. By doing
              so, you’ll be able to capture your reader’s attention right off
              the bat.
            </P>
            <P>
              For example, on{' '}
              <InternalLink href="/todo">my TypeScript tutorial</InternalLink>,
              I start with an example where, if you run the code, the actual
              result is different from the expected result (failure). Then I
              talk about how to prevent failures like this using TypeScript’s
              features.
            </P>
            <CodeResultWrapper>
              <Caption>
                The <strong>first</strong> example on my tutorial: The actual
                result is different from the expected result
              </Caption>
              <CodeResult
                resultText={
                  <>
                    <Highlight color="lightGreen">Expected:</Highlight>
                    <br />
                    <ResultHighlight>{`{ id: 1, text: '…', done: false }`}</ResultHighlight>
                    <Highlight color="lightPink2">Actual:</Highlight>
                    <br />
                    <ResultHighlight>{`{ text: '…', done: false }`}</ResultHighlight>
                  </>
                }
              />
            </CodeResultWrapper>
            <P>
              Here’s a simple technique you can use. If you want to teach a new
              concept (let’s call this “<strong>X</strong>”), start with a{' '}
              <em>concrete</em> scenario where things fail or aren’t ideal when
              you don’t use <strong>X</strong>. Then, use <strong>X</strong> to
              solve the problem. Your readers will pay more attention and also
              understand why <strong>X</strong> is worth learning.
            </P>
            <P>
              I used this technique on{' '}
              <InternalLink href="/generics">
                my TypeScript generics tutorial
              </InternalLink>
              . Early in the article, I attempt to solve a problem that can only
              be solved by generics…without using generics. Of course, I fail.
              Then, I use generics to successfully solve the problem.
            </P>
            <Hr />
            <P>
              In a way, this is similar to{' '}
              <strong>test driven development (TDD)</strong>. In TDD, you write
              a failing test first, and after you watch it fail, you try to make
              it pass. Similarly, in a coding tutorial, it’s more effective if
              you show a failing example first and have the readers watch it
              fail.
            </P>
            <EmojiSeparator
              emojis={['cross', 'singleArrow', 'check']}
              description={
                <>
                  In TDD, you write a failing test first. In a coding tutorial,
                  make readers go through a failing example first
                </>
              }
            />
            <P>
              It’s tempting to be lazy and skip writing a failing test in TDD.
              Similarly, when writing a coding tutorial, it’s tempting to skip
              showing a failing example and just start with a successful
              example. But resist this temptation—failure is your friend in
              expository writing.
            </P>
            <P>
              <strong>The bottom line:</strong>{' '}
              <em>
                Double-check to see where the first failing example appears in
                your tutorial. If it’s missing, add one near the beginning.
              </em>
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <strong>Fail unexpectedly:</strong> It’s also more effective if
                the failure is <em>surprising</em>. Trick your reader into
                thinking that a code sample would work perfectly…then make it
                fail. Make your readers think,{' '}
                <em>“WTF? How come it doesn’t work?”</em>—and they’ll be more
                curious. Unexpected failure = more memorable learning
                experience.
              </P>
            </>
          )
        }
      },
      {
        ...refactoringCardProps(4),
        content: (
          <>
            <EmojiSeparator emojis={techniques[4].emojis} />
            <P>
              Let’s talk about the <strong>3 simple techniques</strong> you can
              use to engage the reader’s brain. <Emoji type="brain"></Emoji>
            </P>
            <Hr />
            <P>
              <Emoji type="ghost" /> First, <strong>use themes:</strong>
              If your tutorial doesn’t have an underlying <strong>
                theme
              </strong>{' '}
              that ties together your examples, try to add one. Having an
              extremely simple theme is better than having no theme.
            </P>
            <P>
              For example, on{' '}
              <InternalLink href="/todo">one of my tutorials</InternalLink>, I
              teach 8 beginner TypeScript topics{' '}
              <ForegroundHighlight color="gray">
                (types, read-only properties, mapped types, array types, literal
                types, intersection types, union types, and optional properties)
              </ForegroundHighlight>
              . Instead of covering each topic separately, I use a simple theme
              of <strong>building a todo app</strong> to explain all those 8
              topics. The idea is to add features to a todo app one by one using
              TypeScript.
            </P>
            <P>
              First, you implement the “toggle todo” feature of a todo app. This
              lets you check and uncheck the checkboxes—try it below!
            </P>
            <TodoWithData
              promptArrowText={<>↑ Check and uncheck the checkboxes!</>}
              defaultData={[
                { id: 1, text: 'First todo', done: false },
                { id: 2, text: 'Second todo', done: false }
              ]}
            />
            <P>
              To implement this feature, you need to write the{' '}
              <Code>toggleTodo()</Code> function, and in that process, I explain
              <em>TypeScript types, read-only properties, and mapped types</em>.
            </P>
            <P>
              After that, you implement the{' '}
              <strong>“mark all as completed”</strong> feature, which checks all
              the checkboxes at once.
            </P>
            <TodoWithData
              promptArrowText={<>↑ Try pressing “Mark all as completed”</>}
              defaultData={[
                { id: 1, text: 'First todo', done: false },
                { id: 2, text: 'Second todo', done: false }
              ]}
              showMarkAllAsCompleted
            />
            <P>
              To implement this feature, you need to write the{' '}
              <Code>completeAll()</Code> function, and in that process, I
              explain{' '}
              <em>array types, literal types, and intersection types</em> in
              TypeScript.
            </P>
            <P>
              You get the idea. When I want to teach many concepts at once, I
              prefer to use <strong>a specific theme</strong> to explain them
              all—in this case, building a todo app. By doing so, readers won’t
              have to do as much context switching in their head.
            </P>
            <Hr />
            <P>
              <Emoji type="doubleArrow" /> Second,{' '}
              <strong>use analogies</strong> to explain new concepts. Tie a new
              concept with the concept your reader already knows.
            </P>
            <P>
              By the way, did you notice that I used several analogies in this
              article?
            </P>
            <Ul>
              <UlLi>
                I compared <em>refactoring code</em> with{' '}
                <em>refactoring a coding tutorial</em>.
              </UlLi>
              <UlLi>
                I compared <em>minimum reproducible examples</em> with{' '}
                <em>minimal code samples</em>.
              </UlLi>
              <UlLi>
                I compared <em>TDD</em> with <em>using failing examples</em>.
              </UlLi>
            </Ul>
            <P>
              <strong>Note:</strong> If your analogy isn’t perfect, use it
              anyway but say <em>“it’s not a perfect comparison.”</em> It would
              still help your reader memorize the concept. I did this on my{' '}
              <InternalLink href="/todo">TypeScript tutorial</InternalLink> when
              I compare TypeScript’s type-checking feature with unit tests.
              Here’s what I wrote:
            </P>
            <Blockquote>
              <P>
                So in a sense, TypeScript’s types act as lightweight unit tests
                that run every time you save (compile) the code. (Of course,
                this analogy is a simplification. You should still write tests
                in TypeScript!)
              </P>
            </Blockquote>
            <Hr />
            <P>
              <Emoji type="question" /> Finally, <strong>use quizzes</strong> to
              make your readers pause, think, and be engaged.
            </P>
            <P>
              In your tutorial, count how many times you ask simple questions,
              such as <em>“what would happen if you do X?”</em> or{' '}
              <em>“what’s wrong with the following code?”</em>. Even
              non-interactive, simple yes-no quizzes are better than having no
              quiz!
            </P>
          </>
        )
      },
      {
        ...refactoringCardProps(5),
        content: (
          <>
            <EmojiSeparator emojis={techniques[5].emojis} />
            <P>
              This is the final section! Here are some mini-tips to add a
              thoughtful touch to your tutorials.
            </P>
            <Hr />
            <P>
              <strong>
                Visually emphasize important parts in your code samples.
              </strong>{' '}
              <Highlight color="yellowHighlight">Highlight</Highlight> or{' '}
              <strong>bold</strong> important words/lines so your readers know
              what to pay attention to. You can also <em>add a comment</em> next
              to the emphasized words/lines for more clarity.
            </P>
            <CodeBlock
              snippet={snippets.yxjg}
              caption={
                <>
                  <Highlight color="yellowHighlight">Highlight</Highlight> or{' '}
                  <strong>bold</strong> important words/lines
                </>
              }
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 3 && tokenIndex >= 0 && tokenIndex <= 4
              }
            />
            <Hr />
            <P>
              <strong>Use mostly-text graphics.</strong> Graphics made of basic
              shapes and texts are simple yet effective. For example, I used
              this graphic earlier:
            </P>
            <EmojiSeparator
              emojis={['uglyCode', 'refactorArrow', 'cleanCode']}
            />
            <P>
              It takes a only few minutes to create, but it helps your readers
              visually remember the idea.
            </P>
            <Hr />
            <P>
              <strong>Avoid difficult English words/phrases.</strong>{' '}
              <A href="https://2018.chibicode.com/posts/world-travel-2017-2018/">
                I spent a year traveling the world in 2018
              </A>
              , and one thing I learned is that so many people in the world can
              speak <em>some</em> English, but many don’t speak English{' '}
              <em>well</em>. Globally,{' '}
              <A href="https://www.weforum.org/agenda/2015/10/which-languages-are-most-widely-spoken/">
                there are 3x as many non-native English speakers as native
                English speakers
              </A>
              .
            </P>
            <P>
              So when in doubt, use simpler English words/phrases. It will
              increase the size of your audience.
            </P>
            <EmojiSeparator
              emojis={['a', 'b', 'letterC']}
              description={<>Use simple English</>}
            />
            <P>
              Also: If you’re living in the US, avoid cultural references and
              humor that only people familiar with American culture would
              understand. Always ask yourself:{' '}
              <em>
                “Would someone living far, far away from where I live understand
                what I’m writing?”
              </em>
            </P>
            <P>
              (<strong>Note:</strong> I’m an English-Japanese translator, and I
              often find it really hard to translate some cultural references
              into Japanese. If you write a good technical article, people will
              volunteer to translate it. Try to make it easy for the translators
              by minimizing the number of cultural references you use!)
            </P>
            <Hr />
            <P>
              <strong>
                When you skip a step or assume prerequisite knowledge, say so.
              </strong>{' '}
              Sometimes you have to skip some steps to keep your tutorial
              concise. But skipping steps can also lead to confusion.
            </P>
            <P>
              So if possible,{' '}
              <em>let your reader know what steps you’re skipping</em>
              —by doing so, they won’t be as confused, and they can Google how
              to do the missing steps if necessary.
            </P>
            <EmojiSeparator
              emojis={['a', 'fastForward', 'letterC']}
              description={
                <>
                  Be explicit:{' '}
                  <em>
                    “Skipping <Emoji type="b" />
                    !”
                  </em>
                </>
              }
            />
            <P>
              Also, if your tutorial requires some prerequisite knowledge,
              <em>explicitly list them</em>. For example,{' '}
              <InternalLink href="/generics">
                my TypeScript generics tutorial
              </InternalLink>{' '}
              assumes prior knowledge of closure and ES2015 syntax. I mention
              this and added MDN documentation links in case the reader is
              unfamiliar with them.
            </P>
            <P>
              Finally, check if you’re using a convention that newcomers may not
              know about. On{' '}
              <InternalLink href="/generics">
                my TypeScript generics tutorial
              </InternalLink>
              , I explain why generic type parameters are often written using a
              single uppercase letter (like <Code>T</Code>, <Code>E</Code>,{' '}
              <Code>K</Code>, <Code>V</Code>, etc). This convention is actually
              borrowed from Java—it’s{' '}
              <A href="https://docs.oracle.com/javase/tutorial/java/generics/types.html">
                mentioned in the official Java documentation.
              </A>{' '}
              Beginner programmers who have never touched Java may not know
              about this, so I explained it on my tutorial.
            </P>
            <Hr />
            <P>
              <strong>Finally, when things get hard, be encouraging.</strong>{' '}
              Use phrases like:{' '}
              <em>
                “This topic is harder than other topics we’ve covered. Don’t
                worry if you don’t get immediately—just keep reading and you’ll
                get it eventually!”
              </em>{' '}
              A little touch of empathy can go a long way.{' '}
              <Emoji type="heartLetter" />
            </P>
          </>
        )
      },
      {
        title: <>Parting thoughts</>,
        content: (
          <>
            <P>
              In 2017, Dan Abramov from the React.js team gave an excellent talk
              called “
              <A href="https://www.youtube.com/watch?v=G39lKaONAlA">
                The Melting Pot of JavaScript
              </A>
              ”. He talked about how one should approach building tools (like
              React,{' '}
              <A href="https://github.com/facebook/create-react-app">
                create-react-app
              </A>
              , etc) that <em>many beginners/newcomers use</em>. Here’s his
              quote:
            </P>
            <Blockquote>
              <P>
                If you’re building tools like me, there’s this fact that we have
                become the new gatekeepers to one of the largest programming
                communities in the world.
              </P>
              <P>
                And this is scary stuff. Because it means that every time our
                tool prints an incomprehensible error message, somebody
                somewhere decides that they’re just not cut out for programming.
                And this is a big responsibility.
              </P>
              <P>
                [...] If you’re a maintainer of an open-source project it is
                invaluable to go out there in the field and see what they
                struggle with as they try to use your projects.
              </P>
              <P>
                And if you think improving newcomer experience is polish, it’s
                not polish. If you go out there in the field you will see that
                it makes a real difference in people’s lives, and what they can
                learn, and what they can build with it. So it’s not just polish.
                Take this seriously.
              </P>
            </Blockquote>
            <P>
              I think his quote applies not just to coding tools, but also to
              coding tutorials.
            </P>
            <P>
              You don’t have to follow all the guidelines I mentioned on this
              page. Sometimes you have to break the rule when refactoring
              code—and the same is true for refactoring tutorials. But do try to
              revise as much as possible. As the saying goes, “Writing is
              rewriting”.
            </P>
            <Hr />
            <P>
              You can{' '}
              <TwitterLink
                title={articlesData['refactor']['title']}
                url={`${baseUrl}/refactor`}
              >
                click here to tweet this article.
              </TwitterLink>{' '}
              Also, I’d love it if you could like or retweet the tweet below! ↓
            </P>
            <TwitterEmbed id="1212327903473459200" hideCard />
          </>
        ),
        footer: {
          content: <AboutMe />
        }
      }
    ]}
  />
)

export default Page
