import React from 'react'
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
import Emoji from 'src/components/Emoji'
import InternalLink from 'src/components/InternalLink'
import { articlesData } from 'src/lib/articles'
import { baseUrl } from 'src/lib/meta'
import { SourceAvailableText } from 'src/components/GitHubButton'
import BubbleQuotes from 'src/components/BubbleQuotes'

const techniques = [
  'Make code samples fit on a small screen',
  'Emphasize important parts in code samples',
  'Use minimum viable code samples'
]

const RefactorSubtitle = ({ index }: { index: number }) => (
  <ForegroundHighlight>Refactoring Tip {index + 1}:</ForegroundHighlight>
)

const refactoringCardProps = (index: number) => ({
  subtitle: <RefactorSubtitle index={index} />,
  title: techniques[index],
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
              emojis={['uglyTutorial', 'cryingCat', 'question']}
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
              So, in this article, I’ll share some tecniques on refactoring
              coding tutorials. I’ve used these techniques on my own tutorials
              to make them more reader-friendly. Here’s the list:
            </P>
            <Ol>
              {techniques.map((technique, index) => (
                <OlLi key={technique}>
                  <Highlight>
                    <A href={`#tip${index + 1}`}>{technique}</A>
                  </Highlight>
                </OlLi>
              ))}
            </Ol>
            <P>
              Let’s take a look! Our friend, <strong>Refactoring Rhino</strong>{' '}
              will guide you.
            </P>
            <EmojiSeparator
              emojis={['rhino']}
              size="lg"
              description={
                <>
                  I’m <strong>Refactoring Rhino</strong>. I’ll be your guide!
                </>
              }
            />
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <strong>Note:</strong> Even if you’ve never written coding
                tutorials,{' '}
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
            <BubbleQuotes
              quotes={[
                {
                  type: 'rhino',
                  children: (
                    <>
                      <P>
                        This one is a <strong>visual refactoring</strong>{' '}
                        technique. You don’t have to change the content of yout
                        tutorial—just need to update how it’s presented. It’d be
                        a quick fix!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              Take a look at the code below. I used it for my tutorial called “
              <InternalLink href="/todo">
                <em>{articlesData['todo']['title']}</em>
              </InternalLink>
              ”:
            </P>
            <CodeBlock
              snippet={snippets.rlya}
              caption={
                <>
                  Max line length: <Emoji type="check" />{' '}
                  <strong>31 characters</strong>
                </>
              }
            />
            <P>
              Did you notice that the above code is{' '}
              <strong>formatted to fit on a small screen</strong>?{' '}
              <Highlight>
                Because each line length is short (max 31 chars),
              </Highlight>{' '}
              you can read it without side-scrolling on most phones.
            </P>
            <EmojiSeparator
              emojis={['sparkles', 'smartphone', 'sparkles']}
              description={<>The above code fits on a small screen</>}
            />
            <P>
              If the above code was formatted like below instead, you’d have to
              side-scroll on a phone:
            </P>
            <CodeBlock
              snippet={snippets.zgvn}
              caption={
                <>
                  Max line length: <Emoji type="cross" />{' '}
                  <strong>69 characters</strong>
                  <br />
                  <Highlight>
                    Line length is long; must side-scroll on a phone
                  </Highlight>
                </>
              }
            />
            <P>
              Here’s another example. This is <strong>good</strong> formatting
              (fits on a small screen):
            </P>
            <CodeBlock
              snippet={snippets.hszk}
              caption={
                <>
                  Max line length: <Emoji type="check" />{' '}
                  <strong>29 characters</strong>
                </>
              }
            />
            <P>
              And this is the same code in <strong>BAD</strong> formatting
              (doesn’t fit on a small screen):
            </P>
            <CodeBlock
              snippet={snippets.mvsz}
              caption={
                <>
                  Max line length: <Emoji type="cross" />{' '}
                  <strong>63 characters</strong>
                  <br />
                  <Highlight>
                    Line length is long; must side-scroll on a phone
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
              </Highlight>{' '}
            </P>
            <EmojiSeparator
              emojis={['check', 'smartphone', 'check']}
              description={<>Make code samples fit on a small screen</>}
            />
            <P>
              You can ensure this by <strong>keeping line length short.</strong>{' '}
              I try to keep it under about <Highlight>50 characters</Highlight>{' '}
              (at 14px font size). I use{' '}
              <A href="https://prettier.io/">
                <Highlight>Prettier</Highlight>
              </A>{' '}
              with custom <Code>printWidth</Code> to automate this.
            </P>
            <EmojiSeparator emojis={['prettier']} />
            <Ul>
              <UlLi>
                <A href="https://github.com/chibicode/TypeScript-for-Beginner-Programmers/blob/master/.prettierrc">
                  Here’s the link to my <Code>.prettierrc</Code>
                </A>{' '}
                for this site.
              </UlLi>
              <UlLi>
                If you’re a perfectionist, you can use Prettier in the browser
                to dynamically reformat the code samples as the screen size
                changes.
              </UlLi>
              <UlLi>
                <A href="https://codesandbox.io/">CodeSandbox</A> also lets you
                customize its Prettier settings.
              </UlLi>
            </Ul>
            <P>Here are some other techniques:</P>
            <Ul>
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
                Prefer <strong>shorter variable names</strong> (but don’t
                sacrifice code readability).
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
              That’s why it helps if the code samples in a tutorial fit on a
              small screen.{' '}
              <Highlight>
                If you can easily read all the code samples on a phone, you
                might be able to finish the tutorial without pulling out your
                laptop.
              </Highlight>{' '}
              No need to put it on your “read later” list. Sometimes you need to
              follow along on your laptop to fully understand the tutorial, but
              that’s not always the case.
            </P>
            <P>
              <strong>Bottom line:</strong>{' '}
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
                (in a landscape mode).
              </P>
            </>
          )
        }
      },
      {
        ...refactoringCardProps(1),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'rhino',
                  children: (
                    <>
                      <P>
                        This is another <strong>visual refactoring</strong>{' '}
                        technique. It’s simple but not many people do this.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              Take a look at this piece of code below. I used it for my tutorial
              called “
              <InternalLink href="/generics">
                <em>{articlesData['generics']['title']}</em>
              </InternalLink>
              ”:
            </P>
            <CodeBlock snippet={snippets.cupt} />
            <CodeBlock snippet={snippets.aujy} />
          </>
        )
      }
    ]}
  />
)

export default Page
