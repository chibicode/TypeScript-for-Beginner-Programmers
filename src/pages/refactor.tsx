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

const techniques = [
  {
    title: 'Make code samples fit on a small screen',
    emojis: ['check', 'smartphone', 'check']
  },
  {
    title: 'Prefer minimal code samples',
    emojis: ['badExample', 'singleArrow', 'star']
  },
  {
    title: 'Prefer practical code samples',
    emojis: ['badExample', 'singleArrow', 'star']
  },
  {
    title: 'Prefer iterative code samples',
    emojis: ['star', 'singleArrow', 'shootingStar']
  },
  {
    title: 'Fail fast',
    emojis: ['cross', 'running', 'dash']
  },
  {
    title: 'Use analogies and quizzes',
    emojis: ['doubleArrow', 'brain', 'question']
  },
  {
    title: 'Use arrows and faces',
    emojis: ['scaryCat', 'singleArrow', 'heartCat']
  },
  {
    title: 'Add a touch of empathy',
    emojis: ['sparkles', 'heartLetter', 'sparkles']
  }
] as const

const RefactorSubtitle = ({ index }: { index: number }) => (
  <ForegroundHighlight>Refactoring Tip {index + 1}:</ForegroundHighlight>
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
              So, in this article, I’ll share <strong>eight</strong> tips on
              refactoring coding tutorials. I’ve used these techniques on my own
              tutorials to make them more reader-friendly. Here’s the list:
            </P>
            <Ol>
              {techniques.map((technique, index) => (
                <OlLi key={technique.title}>
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
                  Make code samples in your tutorial fit on a small screen.
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
                TypeScript documentation
              </A>
              . And the documentation{' '}
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
                TypeScript documentation
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
              is the ONLY code example used to explain the “<Code>&amp;</Code>”
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
                If you’re trying to teach <strong>X</strong> through a code
                sample, just focus on <strong>X</strong> in the code and don’t
                add too much extra stuff.
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
              <strong>Minimal reproducible example:</strong> When
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <strong>Tutorials vs Documentations</strong>:{' '}
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
          </>
        )
      },
      {
        ...refactoringCardProps(3),
        content: (
          <>
            <EmojiSeparator emojis={techniques[3].emojis} />
          </>
        )
      },
      {
        ...refactoringCardProps(4),
        content: (
          <>
            <EmojiSeparator emojis={techniques[4].emojis} />
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
            <P>Here’s a simple technique you can use to fail fast:</P>
            <Ol>
              <OlLi>
                If you want to teach a new concept—let’s call this{' '}
                <strong>X</strong>, then…
              </OlLi>
              <OlLi>
                <Highlight>
                  Start with a <strong>concrete</strong> scenario where things
                  fail or aren’t ideal when you don’t use <strong>X</strong>.
                </Highlight>
              </OlLi>
              <OlLi>
                Then,{' '}
                <Highlight>
                  use <strong>X</strong> to successfully solve the problem.
                </Highlight>{' '}
                By doing this, your readers will be more engaged and also
                understand why <strong>X</strong> is worth learning.
              </OlLi>
            </Ol>
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
        ...refactoringCardProps(5),
        content: (
          <>
            <EmojiSeparator emojis={techniques[5].emojis} />
          </>
        )
      },
      {
        ...refactoringCardProps(6),
        content: (
          <>
            <EmojiSeparator emojis={techniques[6].emojis} />
          </>
        )
      },
      {
        ...refactoringCardProps(7),
        content: (
          <>
            <EmojiSeparator emojis={techniques[7].emojis} />
          </>
        )
      }
    ]}
  />
)

export default Page
