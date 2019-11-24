import React from 'react'
import PostPage from 'src/components/PostPage'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { A, P, Image, Highlight, Ul, UlLi } from 'src/components/ContentTags'
import InternalLink from 'src/components/InternalLink'
import underConstructionCard from 'src/lib/underConstructionCard'

const Page = () => (
  <PostPage
    articleKey="todo"
    cards={[
      {
        title: <>Learn TypeScript by building a todo app</>,
        content: (
          <>
            <P>
              In 2011,{' '}
              <A href="https://backbonejs.org/">
                <strong>Backbone.js</strong>
              </A>{' '}
              was one of the most popular JavaScript frameworks (React came out
              in 2013; Vue in 2014). When people were learning Backbone.js, many
              (including myself) learned it by <em>building a todo app</em>. The
              official documentation included an{' '}
              <A href="https://backbonejs.org/examples/todos/index.html">
                example todo app
              </A>{' '}
              and{' '}
              <A href="https://backbonejs.org/docs/todos.html">
                its annotated source code
              </A>
              .
            </P>
            <Image
              src="/images/todo/backbone-todo.gif"
              caption={<>Official Backbone.js example todo app</>}
            />
            <P>
              As far as I know, learning a JavaScript framework by building a
              todo list was a new idea at the time and was popularized by
              Backbone.js. It inspired <A href="http://todomvc.com/">TodoMVC</A>
              , which showcases todo apps built in many JS frameworks. Today,
              many tutorials, such as{' '}
              <A href="https://redux.js.org/basics/basic-tutorial">
                Redux’s official tutorial
              </A>
              , involve building a todo app.
            </P>
            <P>
              <strong>But what about TypeScript tutorials?</strong>{' '}
              <Highlight>
                When it comes to TypeScript tutorials, there aren’t many
                tutorials that involve building a todo app.
              </Highlight>{' '}
              I think there are missed opportunities here. Building a todo app
              is a great way to learn something in frontend engineering, and
              many JS programmers already know how to build a todo app in their
              framework of choice. There should be more TypeScript tutorials
              featuring a todo app.
            </P>
            <EmojiSeparator
              emojis={['check', 'smilingCat', 'check']}
              description={
                <>
                  There should be more TypeScript tutorials featuring a todo
                  app.
                </>
              }
            />
            <P>
              In this tutorial,{' '}
              <Highlight>
                I’ll teach some of the interesting parts of TypeScript through
                an example todo app
              </Highlight>
              . It’s a <strong>beginner-to-intermediate level</strong> tutorial.
            </P>
            <Ul>
              <UlLi>
                <Highlight>
                  This tutorial doesn’t rely on any specific frontend framework
                </Highlight>
                , so it doesn’t matter whether you know React, Vue, or some
                other frameworks.
              </UlLi>
              <UlLi>
                To save time,{' '}
                <Highlight>
                  I’m not going to talk about setting up a TypeScript project
                </Highlight>
                —you should read other tutorials for that. For React, check out{' '}
                <A href="https://github.com/typescript-cheatsheets/react-typescript-cheatsheet">
                  React+TypeScript Cheatsheets
                </A>
                .
              </UlLi>
              <UlLi>
                <Highlight>
                  It helps if you have basic TypeScript knowledge
                </Highlight>
                , but you should be able to understand at least half of the
                tutorial even if you only know JS. If you know some TypeScript,
                I recommend you to read{' '}
                <InternalLink href="/generics">
                  my generics tutorial
                </InternalLink>{' '}
                first.
              </UlLi>
            </Ul>
            <P>Let’s get started!</P>
          </>
        )
      },
      underConstructionCard
    ]}
  />
)

export default Page
