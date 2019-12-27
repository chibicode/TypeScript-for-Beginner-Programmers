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

const techniques = ['Make code examples readable on a small screen']

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
              refactor code,{' '}
              <Highlight>
                guidelines on how to refactor coding tutorials are rare.
              </Highlight>{' '}
            </P>
            <P>
              So, in this article, I’ll share some tecniques on refactoring
              coding tutorials. I’ve used these techniques when writing my
              tutorials to make them more reader-friendly. Here’s the list:
            </P>
            <Ol>
              {techniques.map(technique => (
                <OlLi key={technique}>
                  <strong>{technique}</strong>
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
        subtitle: (
          <>
            <ForegroundHighlight>Refactoring Tip 1:</ForegroundHighlight>
          </>
        ),
        title: <>{techniques[0]}</>,
        content: (
          <>
            <P>
              Take a look at this piece of code I used for my article called “
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
              And this is <strong>BAD</strong> formatting (doesn’t fit on a
              small screen):
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
                  Make code examples in your tutorial readable on a small
                  screen.
                </strong>
              </Highlight>{' '}
            </P>

            <EmojiSeparator
              emojis={['check', 'smartphone', 'check']}
              description={<>Make code examples readable on a small screen</>}
            />
            <P>You can ensure this in several ways:</P>
            <Ul>
              <UlLi>
                <strong>Keep line length short.</strong> I try to keep it under
                about <Highlight>50 characters</Highlight> (at 14px font size).
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
                Prefer <strong>shorter variable names</strong> without
                sacrificing readability.
              </UlLi>
            </Ul>
            <P>
              I use{' '}
              <A href="https://prettier.io/">
                <Highlight>Prettier</Highlight>
              </A>{' '}
              with custom <Code>printWidth</Code> to format the snippets I use
              for my tutorials.{' '}
              <A href="https://github.com/chibicode/TypeScript-for-Beginner-Programmers/blob/master/.prettierrc">
                Here’s the link to my <Code>.prettierrc</Code>
              </A>{' '}
              for this site. <A href="https://codesandbox.io/">CodeSandbox</A>{' '}
              also lets you customize its Prettier settings.
            </P>
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
              You might be tempted to assume that the readers will read your
              coding tutorial on a laptop.{' '}
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
                  using a phone to browse Twitter, forums, etc.
                </>
              }
            />
            <P>
              That’s why it helps if the code examples in a tutorial are
              readable on a small screen.{' '}
              <Highlight>
                If you can easily read all the code examples on a phone, you
                might be able to read through the tutorial without pulling out
                your laptop.
              </Highlight>{' '}
              No need to put it on your “read later” list. Sometimes you need to
              follow along on your laptop to fully understand the tutorial, but
              that’s not always the case.
            </P>
            <P>
              <Highlight>
                If you’ve ever opened a coding tutorial on Twitter while on your
                phone, and got frustrated because the code examples are
                unreadable on a small screen
              </Highlight>
              —don’t repeat the same mistake on your own tutorial!
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <strong>Note:</strong> The above advice is for text-based
                tutorials.{' '}
                <Highlight>For video tutorials (screencasts)</Highlight>, make
                sure that the fonts are large enough to be legible on a phone
                (in a landscape mode).
              </P>
            </>
          )
        }
      }
    ]}
  />
)

export default Page
