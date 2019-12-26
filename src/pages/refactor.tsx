import React from 'react'
import PostPage from 'src/components/PostPage'
import EmojiSeparator from 'src/components/EmojiSeparator'
import {
  P,
  Highlight,
  Ol,
  OlLi,
  ForegroundHighlight
} from 'src/components/ContentTags'
import TwitterLink from 'src/components/TwitterLink'
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
              tutorials to make them more reader-friendly. They’re not meant to
              be comprehensive but at least a good place to start. Here’s the
              list:
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
              <Highlight>
                I often discover coding tutorials shared on Twitter, mailing
                lists, and online forums.
              </Highlight>{' '}
              I use my <strong>phone</strong> to check these sites, so naturally
              I’d be using my phone instead of my laptop to read those
              tutorials—at least for the first time.
            </P>
            <EmojiSeparator
              emojis={['sparkles', 'smartphone', 'sparkles']}
              description={
                <>
                  I often read a coding tutorial on my phone—at least for the
                  first time
                </>
              }
            />
            <P>
              <Highlight>
                In these cases, it helps if the code examples in the tutorial
                are readable on a small screen.
              </Highlight>{' '}
              If you can easily read all the code examples on a phone, you’d be
              able to understand the content without pulling out your laptop.
            </P>
            <P>
              But what if a tutorial has many code examples, and all of them are
              unreadable on a phone?{' '}
              <Highlight>
                You’d probably put the tutorial on your “read later” list, and
                you must remember to read it again on a laptop.
              </Highlight>{' '}
              When this happens to me, I usually won’t ever read the tutorial
              again—I’m too forgetful!
            </P>
            <P>
              That’s why I believe that{' '}
              <strong>
                code examples in your tutorial should be readable on a small
                screen
              </strong>
              .{' '}
              <Highlight>
                Do NOT assume that your readers will always be using their
                laptop to follow along.
              </Highlight>
            </P>
          </>
        )
      }
    ]}
  />
)

export default Page
