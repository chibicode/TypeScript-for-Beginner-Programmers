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
  Hr
} from 'src/components/ContentTags'
import * as snippets from 'src/lib/snippets'
import TwitterLink from 'src/components/TwitterLink'
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

const techniques = [
  {
    title: (
      <>
        Make code samples <Highlight>mobile-ready</Highlight>
      </>
    ),
    emojis: ['check', 'smartphone', 'check']
  },
  {
    title: (
      <>
        Prefer <Highlight>minimal</Highlight> code samples
      </>
    ),
    emojis: ['badExample', 'singleArrow', 'star']
  },
  {
    title: (
      <>
        Prefer <Highlight>practical</Highlight> code samples
      </>
    ),
    emojis: ['rocket', 'singleArrow', 'plane']
  },
  {
    title: (
      <>
        Fail <Highlight>fast</Highlight>
      </>
    ),
    emojis: ['cross', 'running', 'dash']
  },
  {
    title: (
      <>
        Use <Highlight>themes</Highlight>, <Highlight>analogies</Highlight> and{' '}
        <Highlight>quizzes</Highlight>
      </>
    ),
    emojis: ['pumpkin', 'doubleArrow', 'question']
  },
  {
    title: (
      <>
        Add a <Highlight>human</Highlight> touch
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
              Similarly,{' '}
              <Highlight>
                you’ve probably also come across a coding{' '}
                <strong>tutorial</strong> that’s not so reader-friendly.
              </Highlight>{' '}
              Maybe you wanted to learn a new language, library, or framework,
              but the tutorial you found made you more frustrated than before.
            </P>
            <EmojiSeparator
              emojis={['uglyTutorial', 'cryingCat']}
              description={
                <>
                  You’ve probably come across a coding tutorial that’s not so
                  reader-friendly
                </>
              }
            />
            <P>
              But they can be improved. As someone who’s written many coding
              tutorials, I realized that{' '}
              <Highlight>
                most coding tutorials can be <strong>refactored</strong> to be
                more reader-friendly
              </Highlight>
              —just like refactoring code.
            </P>
            <EmojiSeparator
              emojis={['uglyTutorial', 'refactorArrow', 'cleanTutorial']}
              description={<>Coding tutorials can also be refactored</>}
            />
            <P>
              However, while many programmers have written guidelines on how to
              refactor code,{' '}
              <Highlight>
                guidelines on how to refactor coding tutorials are rare.
              </Highlight>{' '}
            </P>
            <P>
              So, in this article, I’ll share <strong>six</strong> tips on
              refactoring coding tutorials. I’ve used these techniques on my own
              tutorials to make them more reader-friendly. Here’s the list:
            </P>
            <Ol>
              {techniques.map((technique, index) => (
                <OlLi key={technique.emojis.join()}>
                  <A
                    href={`#tip${index + 1}`}
                    css={css`
                      text-decoration: none;
                      font-weight: bold;
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
            <P>
              Let’s take a look! Warning: My tips are <em>very opinionated</em>.
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                Even if you’ve never written a coding tutorial,{' '}
                <Highlight>
                  you might know someone who has (maybe one of your Twitter
                  followers)
                </Highlight>
                . I’d appreciate it if you could share this article with them.
                You can{' '}
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
              <strong>formatted to fit on a small screen</strong>?{' '}
              <Highlight>
                Because each line length is short (max 31 chars),
              </Highlight>{' '}
              you can read it without side-scrolling on most phones.
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
                  <Highlight>
                    Line is too long; must scroll or wrap on a phone
                  </Highlight>
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
                  <Highlight>
                    Line is too long; must scroll or wrap on a phone
                  </Highlight>
                </>
              }
            />
            <P>
              So, here’s my first refactoring tip:{' '}
              <Highlight>
                <strong>
                  Make code samples in your tutorial mobile-ready.
                </strong>
              </Highlight>
            </P>
            <P>
              You can ensure this by <strong>keeping line length short.</strong>{' '}
              I try to keep it under about <Highlight>50 characters</Highlight>{' '}
              (at 14px font size). I use{' '}
              <A href="https://prettier.io/">
                <Highlight>Prettier</Highlight>
              </A>{' '}
              with custom <Code>printWidth</Code> to automate this (my{' '}
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
                Prefer <strong>shorter variable names</strong> (but don’t
                sacrifice code readability).
              </UlLi>
              <UlLi>
                If you can customize the CSS,{' '}
                <strong>use narrow coding fonts</strong>. I use{' '}
                <A href="https://typeof.net/Iosevka/">
                  <Highlight>Iosevka</Highlight>
                </A>
                —it’s slim and looks great. You can also tighten{' '}
                <Code>letter-spacing</Code> to fit more characters.
              </UlLi>
              <UlLi>
                If you want code samples to have longer line length on desktop,{' '}
                <Highlight>you can use Prettier in the browser</Highlight> to
                dynamically adjust line length based on window width.
              </UlLi>
            </Ul>
            <Hr />
            <P>
              <strong>Why is this necessary?</strong>{' '}
              <Highlight>
                Because many people <em>actually</em> read coding tutorials on
                their phone.
              </Highlight>{' '}
            </P>
            <EmojiSeparator
              emojis={['smilingCat', 'smartphone', 'uglyTutorial']}
              description={
                <>Many people read coding tutorials on their phone</>
              }
            />
            <P>
              You might be tempted to assume that the readers will read (and
              follow along) your coding tutorial on a laptop.{' '}
              <Highlight>But that’s a bad assumption.</Highlight>
            </P>
            <P>
              In the past, I’ve used Google Analytics to track desktop vs mobile
              usage on my coding tutorials. Even though my tutorials are meant
              to be done on a laptop, surprisingly many people accessed them
              from a mobile device.
            </P>
            <P>
              This is because{' '}
              <Highlight>
                many people <strong>discover</strong> coding tutorials while
                using a phone to browse Twitter, mailing lists, and online
                forums.
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['twitter', 'smartphone', 'uglyTutorial']}
              description={
                <>
                  Many people <strong>discover</strong> coding tutorials while
                  using a phone to browse Twitter, etc.
                </>
              }
            />
            <P>
              That’s why mobile reading experience is important.{' '}
              <Highlight>
                If you can easily read all the code samples on a phone, you
                might be able to finish the tutorial without pulling out your
                laptop.
              </Highlight>{' '}
              Sometimes you need to follow along on your laptop to fully
              understand the content, but that’s not always the case.
            </P>
            <P>
              <strong>The bottom line:</strong>{' '}
              <Highlight>
                Assume that people will discover your coding tutorial on their
                phone and try to deliver the best possible first impression.
              </Highlight>
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <strong>Video tutorials:</strong> What I’ve said so far applies
                to text-based tutorials.{' '}
                <Highlight>For video tutorials (screencasts)</Highlight>, it’d
                be ideal if the fonts are large enough to be legible on a phone
                (in landscape mode).
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
              <strong>Let’s start with a quiz!</strong>{' '}
              <A href="/images/refactor/asOfWriting.png">As of writing</A>, the
              following code appears on the official{' '}
              <A href="https://www.typescriptlang.org/docs/handbook/advanced-types.html">
                TypeScript handbook
              </A>
              . And the handbook{' '}
              <Highlight>
                uses this code to explain how to use a particular TypeScript{' '}
                <strong>keyword/operator</strong>.
              </Highlight>
            </P>
            <P>
              <strong>Question:</strong>{' '}
              <Highlight>
                Can you tell which keyword/operator is being explained through
                this code?
              </Highlight>{' '}
              (You don’t need to know TypeScript—just guess!)
            </P>
            <CodeBlock snippet={snippets.onux} smallText />
            <P>
              <strong>Answer:</strong> The official{' '}
              <A href="https://www.typescriptlang.org/docs/handbook/advanced-types.html">
                TypeScript handbook
              </A>{' '}
              uses the above code to explain{' '}
              <Highlight>
                how to use the{' '}
                <strong>
                  “<Code>&amp;</Code>” operator
                </strong>{' '}
                in TypeScript.
              </Highlight>
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
                <strong>the highlighted part</strong>
              </Highlight>{' '}
              below is related to the{' '}
              <strong>
                “<Code>&amp;</Code>” operator
              </strong>
              . There are too many other keywords that are just noise (e.g.{' '}
              <Code>Partial&lt;&gt;</Code>, <Code>hasOwnProperty</Code>,{' '}
              <Code>as</Code>, <Code>constructor</Code>, <Code>public</Code>,{' '}
              <Code>interface</Code>, <Code>void</Code>, <Code>implements</Code>
              , <Code>prototype</Code>, etc).
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
                    <strong>the highlighted part</strong>
                  </Highlight>{' '}
                  is related to{' '}
                  <strong>
                    “<Code>&amp;</Code>”
                  </strong>
                  , the topic being explained through this code. Every other
                  keyword is just noise!
                </>
              }
            />
            <P>
              So, in my opinion,{' '}
              <Highlight>
                the above code sample is <em>NOT a great way</em>
              </Highlight>{' '}
              to explain how to use the{' '}
              <strong>
                “<Code>&amp;</Code>” operator
              </strong>{' '}
              in TypeScript. To make matters worse,{' '}
              <A href="/images/refactor/asOfWriting.png">as of writing</A>, this
              is the ONLY code sample used to explain the “<Code>&amp;</Code>”
              operator on the official doc!
            </P>
            <P>
              If I were to explain how the “<Code>&amp;</Code>” operator works
              in TypeScript,{' '}
              <Highlight>
                I’d <strong>refactor</strong> the earlier code as follows
              </Highlight>
              —it basically does the same thing, but in a simpler way. You don’t
              need to understand TypeScript to know that this is more minimal
              and focused on explaining how to use the “<Code>&amp;</Code>”
              operator.
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
              <strong>
                What I want to say is: Prefer minimal code samples.
              </strong>{' '}
              <Highlight>
                If you’re trying to teach a new concept <strong>X</strong>{' '}
                through a code sample, just focus on <strong>X</strong> in the
                code and don’t add too much extra stuff.
              </Highlight>{' '}
              Add extra stuff only when it <em>really</em> helps the reader’s
              understanding.
            </P>
            <P>
              You might be thinking: <em>“Well, that’s obvious.”</em> But trust
              me, so many tutorials (including the official TypeScript doc!)
              fail at keeping things simple and end up with too much noise in
              code samples, making them hard to follow.
            </P>
            <Hr />
            <P>
              <strong>Minimal reproducible example:</strong> When you ask a
              question on StackOverflow or file an issue on GitHub, you’re often
              asked to create a{' '}
              <Highlight>minimal reproducible example</Highlight>. Your code
              needs to be{' '}
              <A href="https://en.wikipedia.org/wiki/Minimal_working_example">
                as small as possible, such that it is just sufficient to
                demonstrate the problem, but without any additional complexity
              </A>
              .
            </P>
            <P>
              You should use the same principle when writing code samples for
              your tutorials. Ask yourself:{' '}
              <Highlight>
                Can I make this code sample more minimal, without sacrificing
                the learning experience?
              </Highlight>
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
                <strong>Tutorials</strong> are for{' '}
                <Highlight>learning</Highlight>, so it’s often better to keep
                code samples minimal to remove confusion (except for advanced
                topics). <strong>Documentations</strong> are{' '}
                <Highlight>references</Highlight>, so it’s often better to have
                comprehensive code samples. (The official TypeScript handbook I
                mentioned earlier is written more like a tutorial than a
                documentation.)
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
              (right after the example we showed earlier). And the handbook{' '}
              <Highlight>
                uses this code to explain how to use the{' '}
                <strong>union operator</strong> in TypeScript,
              </Highlight>{' '}
              which is the{' '}
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
              In TypeScript,{' '}
              <Highlight>
                you can write{' '}
                <Code>
                  <strong>number | string</strong>
                </Code>{' '}
                to specify that a parameter can either be <Code>number</Code> OR{' '}
                <Code>string</Code>
              </Highlight>
              . So in this case, the second <Code>padding</Code> parameter can
              be either <Code>number</Code> or <Code>string</Code>.
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
            <P>
              <strong>Now, a question for you:</strong>{' '}
              <Highlight>
                Is the above code a <em>good</em> example to explain how{' '}
                <Code>number | string</Code> works in TypeScript?
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['numberText', 'verticalBar', 'stringText']}
              description={
                <>
                  Is the above code a <em>good</em> example to explain how{' '}
                  <Code>number | string</Code> works?
                </>
              }
            />
            <P>
              <strong>I’d say No—it’s NOT a good example</strong>. You don’t
              need to know TypeScript to see why. Let’s look at how{' '}
              <Code>padLeft</Code> works again:
            </P>
            <CodeBlock
              snippet={snippets.lcfe}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 2 && tokenIndex === 6) ||
                (lineIndex === 7 && tokenIndex === 6)
              }
            />
            <P>
              <strong>Now, ask yourself:</strong> Would you EVER use{' '}
              <Code>padLeft</Code> for the latter case, where the second
              parameter is <Code>string</Code>?
            </P>
            <CodeBlock
              snippet={snippets.crgn}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 2 && tokenIndex === 6) || lineIndex === 5
              }
            />
            <P>
              <strong>You probably would not</strong>. It just does simple
              string concatenation backwards.{' '}
              <Highlight>
                You probably would just use other standard way to concatenate
                strings, like <Code>'Jim: ' + 'Hello World'</Code>
              </Highlight>
              . There’s no good reason why this API should exist.
            </P>
            <P>
              <strong>The bottom line:</strong>{' '}
              <Code>padLeft(value, padding)</Code> is useful if{' '}
              <Code>padding</Code> is <Code>number</Code> but is{' '}
              <Highlight>
                pretty useless if <Code>padding</Code> is <Code>string</Code>.
              </Highlight>{' '}
              That’s why this is NOT a good example.
            </P>
            <Hr />
            <P>
              So, here’s my third refactoring tip:{' '}
              <strong>Prefer practical code samples</strong>.{' '}
              <Highlight>Avoid showing code that no one would write.</Highlight>{' '}
              If you’re trying to teach a new concept <strong>X</strong>,{' '}
              <Highlight>
                come up with a <em>practical</em> code sample where{' '}
                <strong>X</strong> is <em>actually</em> useful in solving the
                problem.
              </Highlight>
            </P>
            <P>
              By showing a practical example,{' '}
              <Highlight>
                readers will understand why <strong>X</strong> is worth
                learning.
              </Highlight>{' '}
              If you show them a useless example, they’d be like,{' '}
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
              CSS string:
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
              work. In other words, it’s a <strong>practical</strong> example.{' '}
              <Highlight>
                It <em>actually makes sense</em> to have the parameter be either{' '}
                <Code>number</Code> or <Code>string</Code>,
              </Highlight>{' '}
              unlike the previous example.
            </P>
            <Hr />
            <P>
              <strong>To summarize, always ask yourself:</strong>{' '}
              <Highlight>
                Is my code example practical? Would anyone ever write code like
                this?
              </Highlight>
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <Code color="white75">padLeft()</Code> <em>could</em> have been
                useful if you could pass both a{' '}
                <Code color="white75">number</Code> and a{' '}
                <Code color="white75">string</Code>, and have it repeat the
                string the specified number of times (see below). But that’s not
                what we had.
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
              One of the best ways to capture your readers’ attention is to{' '}
              <strong>FAIL</strong>. When things don’t go according to plan,
              people will pay more attention than when everything goes smoothly.
              Use this to your advantage.
            </P>
            <P>
              Furthermore, it’s more effective if you <strong>fail fast</strong>
              .{' '}
              <Highlight>
                Try to show a failing scenario{' '}
                <strong>as early as possible</strong> in your article.
              </Highlight>{' '}
              By doing so, you’ll be able to capture your readers’ attention
              right off the bat.
            </P>
            <P>
              For example, in{' '}
              <InternalLink href="/todo">
                one of my TypeScript tutorials
              </InternalLink>
              , I start with an example where, if you run the code, the actual
              result is different from the expected result.
            </P>
            <CodeResultWrapper>
              <Caption>
                The <strong>first</strong> example in one of my tutorials: The
                actual result is different from the expected result
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
              If you’re trying to teach a new concept <strong>X</strong>,{' '}
              <Highlight>
                start with a <strong>concrete</strong> scenario where things
                fail or aren’t ideal when you don’t use <strong>X</strong>.
              </Highlight>{' '}
              Then,{' '}
              <Highlight>
                use <strong>X</strong> to successfully solve the problem.
              </Highlight>{' '}
              By doing this, your readers will be more engaged and also
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
              a failing test first, and after you watch the test fail, you try
              to make it pass. Similarly, in a coding tutorial,{' '}
              <Highlight>
                it’s more effective if you show a failing example first and have
                the readers watch it fail.
              </Highlight>
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
              example. But try not to skip it—
              <Highlight>failure is your friend</Highlight> in expository
              writing.
            </P>
            <P>
              <strong>The bottom line:</strong>{' '}
              <Highlight>
                Double check to see where the first failing example appears in
                your tutorial. If it’s missing, add one near the beginning of
                your tutorial.
              </Highlight>
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <strong>Fail unexpectedly:</strong> It’s also more effective if
                the failure is <Highlight>surprising</Highlight>. Trick your
                reader into thinking that a code sample would work
                perfectly…then make it fail. Make the reader think,{' '}
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
              Let’s talk about the 3 simple techniques you can use to engage the
              readers’ brain. <Emoji type="brain"></Emoji>
            </P>
            <Hr />
            <P>
              <Emoji type="pumpkin" /> First,{' '}
              <Highlight>
                <strong>use themes:</strong>
              </Highlight>{' '}
              <Highlight>
                If your tutorial doesn’t have a <strong>theme</strong> that ties
                together your examples, try to add one
              </Highlight>
              . Having an extremely simple theme is better than having no theme.
            </P>
            <P>
              For example, on my{' '}
              <InternalLink href="/todo">TypeScript tutorial</InternalLink>, I
              teach 8 beginner topics{' '}
              <ForegroundHighlight color="gray">
                (types, read-only properties, mapped types, array types, literal
                types, intersection types, union types and optional properties)
              </ForegroundHighlight>
              . Instead of covering each topic separately,{' '}
              <Highlight>
                I use a simple theme of <strong>building a todo app</strong> to
                explain all those 8 topics.
              </Highlight>
            </P>
            <P>
              In my tutorial, you implement the{' '}
              <Highlight>“toggle todo”</Highlight> feature of a todo app first:
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
              <Code>toggleTodo()</Code> function, and in that process I explain
              <em>TypeScript types, read-only properties, and mapped types</em>.
            </P>
            <P>
              After this, you then implement the{' '}
              <Highlight>“mark all as completed”</Highlight> feature:
            </P>
            <TodoWithData
              promptArrowText={
                <>
                  ↑ Try pressing <Highlight>“Mark all as completed”</Highlight>
                </>
              }
              defaultData={[
                { id: 1, text: 'First todo', done: false },
                { id: 2, text: 'Second todo', done: false }
              ]}
              showMarkAllAsCompleted
            />
            <P>
              To implement this feature, you need to write the{' '}
              <Code>completeAll()</Code> function, and in that process I explain{' '}
              <em>array types, literal types, and intersection types</em> in
              TypeScript.
            </P>
            <P>
              You get the idea.{' '}
              <Highlight>
                When I want to teach many concepts at once, I prefer to use{' '}
                <strong>one theme</strong> to explain them all.
              </Highlight>{' '}
              By doing so, readers won’t have to do as much context switching in
              their brain, thus reducing their cognitive load.
            </P>
            <Hr />
            <P>
              <Emoji type="doubleArrow" /> Second,{' '}
              <Highlight>
                <strong>use analogies</strong> to explain new concepts.
              </Highlight>{' '}
              Tie a new concept with the concept your reader already knows.
            </P>
            <P>
              For example, did you notice that I used several analogies in this
              article?
            </P>
            <Ul>
              <UlLi>
                I compared <Highlight>refactoring code</Highlight> with{' '}
                <Highlight>refactoring a coding tutorial</Highlight>.
              </UlLi>
              <UlLi>
                I compared <Highlight>minimum reproducible example</Highlight>{' '}
                with <Highlight>minimal code samples</Highlight>.
              </UlLi>
              <UlLi>
                I compared <Highlight>TDD</Highlight> with{' '}
                <Highlight>using failing examples in a tutorial</Highlight>.
              </UlLi>
            </Ul>
            <P>
              <strong>Note:</strong>{' '}
              <Highlight>
                If your analogy isn’t perfect, use it anyway but say “it’s not a
                perfect comparison.”
              </Highlight>{' '}
              It would still help your reader remember the concept better. I do
              this on my{' '}
              <InternalLink href="/todo">TypeScript tutorial</InternalLink> when
              I compare TypeScript’s type-checking with unit tests.
            </P>
            <Hr />
            <P>
              <Emoji type="question" /> Finally,{' '}
              <Highlight>
                <strong>use quizzes</strong>
              </Highlight>
              . In your tutorial,{' '}
              <Highlight>
                count how many times you ask your readers{' '}
                <em>“what would happen if you do X?”</em>
              </Highlight>
              . If that count is zero, add some quizzes in order to make your
              readers pause and think. Even simple yes-no quizzes are better
              than having no quiz!
            </P>
          </>
        )
      },
      {
        ...refactoringCardProps(5),
        content: (
          <>
            <EmojiSeparator emojis={techniques[5].emojis} />
          </>
        )
      }
    ]}
  />
)

export default Page
