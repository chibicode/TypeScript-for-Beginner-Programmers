import React from 'react'
import PostPage from 'src/components/PostPage'
import { P, Highlight } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CodeBlock from 'src/components/CodeBlock'
import * as snippets from 'src/lib/snippets'
import TwitterLink from 'src/components/TwitterLink'
import { articlesData } from 'src/lib/articles'
import { baseUrl } from 'src/lib/meta'

const Page = () => (
  <PostPage
    articleKey="todo"
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
      }
    ]}
  />
)

export default Page
