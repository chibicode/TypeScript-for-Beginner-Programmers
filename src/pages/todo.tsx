import React from 'react'
import PostPage from 'src/components/PostPage'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
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
import RunButtonText from 'src/components/RunButtonText'
import CodeBlock from 'src/components/CodeBlock'
import BubbleQuotes from 'src/components/BubbleQuotes'
import ResultHighlight from 'src/components/ResultHighlight'

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
              was one of the most popular JavaScript libraries (React came out
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
              As far as I know, learning a JavaScript library by building a todo
              app was a new idea at the time and was popularized by Backbone.js
              (and other libraries that followed). It inspired{' '}
              <A href="http://todomvc.com/">TodoMVC</A>, which showcases todo
              apps built using different JS libraries. Today, many tutorials,
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
              library of choice. There should be more TypeScript tutorials
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
                an example todo app shown below.{' '}
                <strong>It’s interactive:</strong> Try checking and unchecking
                the checkboxes.
              </Highlight>
            </P>
            <TodoWithData
              caption={<>We’ll learn TypeScript using this todo app:</>}
              promptArrowText={<>↑ Check and uncheck the checkboxes!</>}
              defaultData={[
                { id: 1, text: 'First todo', done: false },
                { id: 2, text: 'Second todo', done: false }
              ]}
            />
            <P>Here are some details before we begin:</P>
            <Ul>
              <UlLi>
                <Highlight>
                  This tutorial doesn’t rely on any specific frontend library
                </Highlight>
                , so it doesn’t matter whether you know React, Vue, or some
                other libraries. As long as you know how to build a todo list
                using a JS library, you should be able to understand this
                tutorial. No prior TypeScript knowledge is necessary.
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
                Also to save time,{' '}
                <Highlight>
                  I’m not going to cover everything about TypeScript.
                </Highlight>{' '}
                I’m only going to cover some of the cool concepts in
                TypeScript—mostly basic, some intermediate-level concepts. My
                goal is to make you want to learn more.
              </UlLi>
            </Ul>
            <P>Let’s get started!</P>
          </>
        )
      },
      {
        title: <>Transform data into UI</>,
        content: (
          <>
            <P>
              Let’s first talk about <strong>data</strong>. What UI libraries
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
              Now, let’s take a look at our todo app again.{' '}
              <Highlight>
                Can you guess what data is associated with this UI?
              </Highlight>
            </P>
            <TodoWithData
              caption={<>What data is associated with this UI?</>}
              disabled
              defaultData={[
                { id: 1, text: 'First todo', done: false },
                { id: 2, text: 'Second todo', done: false }
              ]}
            />
            <P>
              <strong>Answer:</strong> Here’s the associated data.{' '}
              <Highlight>
                It’s an array of objects, each having <Code>id</Code>,{' '}
                <Code>text</Code>, and <Code>done</Code>.
              </Highlight>
            </P>
            <CodeBlock snippet={snippets.dxfc} />
            <Ul>
              <UlLi>
                <Code>id</Code> is the ID of each todo item. This is usually
                generated by a backend database.
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
              Let’s display the app together with its associated data.{' '}
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
              highlightLineIndexOffset={2}
              shouldHighlight={tokenIndex => tokenIndex === 15}
            />
            <P>
              As you can see, when you check/uncheck a checkbox, it updates the
              underlying data (the <Code>done</Code> property), and in turn the
              UI gets updated. This is how UI libraries like React and Vue work.
            </P>
            <EmojiSeparator
              emojis={[
                'ui',
                'singleArrow',
                'updatedData',
                'singleArrow',
                'updatedUi'
              ]}
              description={
                <>
                  When the user interacts with the UI, the data gets updated,
                  and in turn the UI gets updated
                </>
              }
            />
            <P>Next, let’s take a look at how the data gets updated.</P>
          </>
        )
      },
      {
        title: (
          <>
            Let’s implement <Code>toggleTodo()</Code>
          </>
        ),
        content: (
          <>
            <P>
              To implement the above functionality, we need to write code that
              toggles the <Code>done</Code> property of a todo item. Let’s name
              this function <Code>toggleTodo</Code>.{' '}
              <Highlight>
                When you call <Code>toggleTodo</Code> on a todo object, it needs
                to return a new todo object with the opposite boolean value for
                the <Code>done</Code> property.
              </Highlight>
            </P>
            <CodeBlock snippet={snippets.vpco} />
            <P>
              Now, let me introduce our junior developer,{' '}
              <strong>Little Duckling</strong>. We’re going to use some
              characters like him to make this article a bit more entertaining.
            </P>
            <EmojiSeparator
              emojis={['chickEgg']}
              size="lg"
              description={
                <>
                  I’m <strong>Little Duckling,</strong> and I’m a junior
                  developer!
                </>
              }
            />
            <P>
              And it looks like <strong>Little Duckling</strong> has implemented{' '}
              <Code>toggleTodo</Code> for us:
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>
                        I’ve implemented <Code>toggleTodo</Code> for you. Could
                        you take a look?
                      </P>
                    </>
                  )
                }
              ]}
            ></BubbleQuotes>
            <CodeBlock
              snippet={snippets.reel}
              caption={
                <>
                  <Emoji type="chickEgg" /> Little Duckling’s{' '}
                  <Code>toggleTodo</Code> implementation
                </>
              }
            />
            <P>
              Let’s check if Little Duckling’s implementation is correct.{' '}
              <Highlight>
                Take a look at the following test case. What do you think the
                output would be? Try to guess first and press Press{' '}
                <RunButtonText /> below.
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.lund}
              result={
                <>
                  Expected:
                  <br />
                  <ResultHighlight>{`{ id: 1, text: '…', done: false }`}</ResultHighlight>
                  Actual:
                  <br />
                  <ResultHighlight>{`{ text: '…', done: false }`}</ResultHighlight>
                </>
              }
              pointToRunButton
            />
            <P>
              <Code>done</Code> correctly became <Code>false</Code>,{' '}
              <Highlight>
                but it’s missing the <Code>id</Code> property
              </Highlight>
              . So Little Duckling’s implementation was{' '}
              <strong>incorrect</strong>.
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>
                        Oops! <Emoji type="sweat" /> I forgot about the{' '}
                        <Code>id</Code> property!
                      </P>
                    </>
                  )
                }
              ]}
            ></BubbleQuotes>
            <P>
              Here’s the correct implementation. It preserves the{' '}
              <Code>id</Code> property.
            </P>
            <CodeBlock
              snippet={snippets.yxjg}
              caption={<>The correct implementation</>}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 3 && tokenIndex >= 0 && tokenIndex <= 4
              }
            />
            <P>
              <strong>Now, here’s a question:</strong>{' '}
              <Highlight>How can we prevent mistakes like this?</Highlight>{' '}
              Little Duckling is a junior developer, but we want to make sure
              that he succeeds at his job by helping him make less mistakes.
            </P>
            <EmojiSeparator
              emojis={['sweat', 'chickEgg', 'sweat']}
              description={
                <>
                  How can we prevent Little Duckling from making mistakes like
                  this?
                </>
              }
            />
            <P>
              This is where <strong>TypeScript</strong> comes in. Let’s take a
              look!
            </P>
          </>
        )
      },
      {
        title: <>Using TypeScript to catch mistakes early</>,
        content: (
          <>
            <P>
              By using <strong>TypeScript</strong>, we can prevent the mistake
              Little Duckling made.
            </P>
            <P>
              First, <Highlight>we create a type</Highlight> for the data we
              use. In this case, we need to create a type for a todo item. We’ll
              call it <Code>Todo</Code> and define it as follows:
            </P>
            <CodeBlock snippet={snippets.lieq} />
            <P>
              We can then use this type to check if an object is indeed a todo
              item. The TypeScript syntax for that is:{' '}
              <Code>variableName: TypeName</Code> (highlighted below). Let’s try
              it—
              <Highlight>
                press <RunButtonText compile />.
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.bnli}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 0 && tokenIndex >= 1 && tokenIndex <= 4
              }
              compile
              result={<>Compiled successfully!</>}
              tokenIndexIndentWorkaround={1}
            />
            <P>
              It successfully compiled because the type of <Code>foo</Code>{' '}
              matches the <Code>Todo</Code> type.
            </P>
            <P>
              Now, how about this one?{' '}
              <Highlight>
                Try pressing <RunButtonText compile />.
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.tgvw}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 0 && tokenIndex >= 1 && tokenIndex <= 4
              }
              tokenIndexIndentWorkaround={1}
              compile
              resultError
              result={
                <>{`Property 'id' is missing in type '{ text: string; done: true; }' but required in type 'Todo'.`}</>
              }
            />
            <P>
              This one failed to compile because the <Code>id</Code> property
              was missing.{' '}
              <Highlight>
                TypeScript can catch these small mistakes quickly, well before
                running the code—without having to write unit tests.
              </Highlight>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            Using TypeScript for <Code>toggleTodo()</Code>
          </>
        ),
        content: (
          <>
            <P>
              Now, let’s use TypeScript to prevent the mistake Little Duckling
              made earlier.
            </P>
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
