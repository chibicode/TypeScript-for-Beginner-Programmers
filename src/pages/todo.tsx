import React from 'react'
import PostPage from 'src/components/PostPage'
import EmojiSeparator from 'src/components/EmojiSeparator'
import {
  Code,
  A,
  P,
  Image,
  Highlight,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import * as snippets from 'src/lib/snippets'
import underConstructionCard from 'src/lib/underConstructionCard'
import TodoWithData from 'src/components/TodoWithData'
import CodeBlock from 'src/components/CodeBlock'

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
              (including myself) learned it by building a{' '}
              <strong>todo app</strong>. The official documentation included an{' '}
              <A href="https://backbonejs.org/examples/todos/index.html">
                example todo app
              </A>{' '}
              built in Backbone.js, and many learned by reading{' '}
              <A href="https://backbonejs.org/docs/todos.html">
                its beautifully annotated source code
              </A>
              .
            </P>
            <Image
              src="/images/todo/backbone-todo.gif"
              caption={<>Official Backbone.js example todo app</>}
            />
            <P>
              As far as I know, learning a JavaScript framework by building a
              todo app was a new idea at the time and was popularized by
              Backbone.js (and other frameworks that followed). It inspired{' '}
              <A href="http://todomvc.com/">TodoMVC</A>, which showcases todo
              apps built using different JS frameworks. Today, many tutorials,
              such as{' '}
              <A href="https://redux.js.org/basics/basic-tutorial">
                Redux’s official tutorial
              </A>
              , involve building a todo app.
            </P>
            <P>
              <strong>But what about TypeScript tutorials?</strong>{' '}
              <Highlight>
                When it comes to TypeScript, there aren’t many tutorials that
                involve building a todo app.
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
                  There should be more TypeScript tutorials featuring a todo app
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
                , but you should be able to understand most of the tutorial even
                if you only know JS.
              </UlLi>
            </Ul>
            <P>
              My goal is to cover some of the cool features of TypeScript and
              make you want to learn more. Let’s get started!
            </P>
          </>
        )
      },
      {
        title: <>Example todo app</>,
        content: (
          <>
            <P>
              Here’s the simple todo app we’ll be using.{' '}
              <Highlight>Try checking and unchecking the checkboxes.</Highlight>
            </P>
            <TodoWithData
              caption={<>Simple todo app</>}
              promptArrowText={<>↑ Check and uncheck the checkboxes!</>}
              defaultData={[
                { id: 1, text: 'First todo', done: false },
                { id: 2, text: 'Second todo', done: false }
              ]}
            />
            <P>
              Now, let’s talk about <strong>data</strong>. What UI libraries
              like React or Vue essentially do is to{' '}
              <em>transform data into UI</em>. For example, in React, you
              specify data as <Code>props</Code> or <Code>state</Code>, and it
              renders UI based on this data.
            </P>
            <EmojiSeparator
              emojis={['data', 'singleArrow', 'ui']}
              description={<>UI libraries transform data into UI</>}
            />
            <P>
              This todo app also has associated data.{' '}
              <Highlight>
                The data is an array of objects, each having <Code>id</Code>,{' '}
                <Code>text</Code>, and <Code>done</Code>.
              </Highlight>
            </P>
            <CodeBlock snippet={snippets.dxfc} />
            <Ul>
              <UlLi>
                <Code>id</Code> is the ID of each todo item.
              </UlLi>
              <UlLi>
                <Code>text</Code> contains the text of each todo item.
              </UlLi>
              <UlLi>
                And most importantly, <Code>done</Code> is <Code>true</Code> for
                completed items and is <Code>false</Code> otherwise.
              </UlLi>
            </Ul>
            <P>
              Let’s display the app together with its underlying data.{' '}
              <Highlight>
                Try checking and unchecking the checkboxes, and take a look at
                how <Code>done</Code> changes.
              </Highlight>
            </P>
            <TodoWithData
              showData
              caption={
                <>
                  ↓ Check and uncheck the checkboxes,
                  <br />
                  and take a look at how <Code>done</Code> changes
                </>
              }
              defaultData={[
                { id: 1, text: 'First todo', done: false },
                { id: 2, text: 'Second todo', done: false }
              ]}
              comment={`// "done" changes when you check/uncheck`}
            />
            <P>
              We’ll now take a look at how this check/uncheck functionality is
              implemented.
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <Code>toggleTodo()</Code> in TypeScript
          </>
        ),
        content: (
          <>
            <P>
              To implement the above functionality, we need to write code that
              toggles the <Code>done</Code> property of a todo item. Let’s name
              this function <Code>toggleTodo</Code>.
            </P>
            <CodeBlock snippet={snippets.vpco} />
          </>
        )
      },
      {
        title: (
          <>
            <Code>readonly</Code>
          </>
        ),
        content: <></>
      },
      {
        title: <>Mark all as completed</>,
        content: (
          <>
            <TodoWithData
              showData
              caption={
                <>
                  ↓ Try pressing <Highlight>“Mark all as completed”</Highlight>
                </>
              }
              defaultData={[
                { id: 1, text: 'First todo', done: false },
                { id: 2, text: 'Second todo', done: false }
              ]}
              showMarkAllAsCompleted
            />
          </>
        )
      },
      underConstructionCard
    ]}
  />
)

export default Page
