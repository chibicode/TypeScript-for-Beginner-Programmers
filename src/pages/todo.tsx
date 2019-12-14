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

const compileSuccess = 'Compiled successfully!'
const section1 = 'Types, Read-only Properties, and Mapped Types'
const section2 = 'Array Types, Literal Types, and Intersection Types'
const section3 = 'Union Types and Optional Properties'

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
                other libraries. As long as you have basic JS knowledge, you
                should be able to understand this tutorial. No prior TypeScript
                knowledge is necessary.
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
                I’m only going to cover some of the coolest concepts in
                TypeScript—mostly basic. My goal is to make you want to learn
                more.
              </UlLi>
            </Ul>
            <EmojiSeparator
              emojis={['sparkles', 'bird', 'sparkles']}
              description={
                <>
                  I’m only going to cover TypeScript basics. My goal is to make
                  you want to learn more.
                </>
              }
            />
            <P>
              There are <strong>3 sections</strong> total in this article. Here
              are the topics covered in each section.
            </P>
            <Ul>
              <UlLi>
                <strong>Section 1:</strong> <Highlight>{section1}</Highlight>
              </UlLi>
              <UlLi>
                <strong>Section 2:</strong> <Highlight>{section2}</Highlight>
              </UlLi>
              <UlLi>
                <strong>Section 3:</strong> <Highlight>{section3}</Highlight>
              </UlLi>
            </Ul>
            <P>Let’s get started!</P>
          </>
        )
      },
      {
        title: (
          <>
            <strong>Section 1</strong> of 3
          </>
        ),
        heading: section1,
        color: 'darkGreen'
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
              underlying data (the <Code>done</Code> property), and in turn, the
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
                  and in turn, the UI gets updated
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
            />
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
            />
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
              that he succeeds at his job by helping him make fewer mistakes.
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
              call it <Code>Todo</Code> and define using the following
              TypeScript syntax:
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
              result={compileSuccess}
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
              made earlier. To recap, here’s the <Code>Todo</Code> type we
              created earlier (
              <Highlight>
                <Code>id</Code> is required
              </Highlight>
              ):
            </P>
            <CodeBlock snippet={snippets.lieq} />
            <P>
              First,{' '}
              <Highlight>
                we specify that the input to <Code>toggleTodo</Code> must be{' '}
                <Code>Todo</Code>
              </Highlight>
              . We do this by adding <Code>: Todo</Code> next to the parameter{' '}
              <Code>todo</Code>.
            </P>
            <CodeBlock
              snippet={snippets.csum}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 1 && tokenIndex >= 5 && tokenIndex <= 7
              }
            />
            <P>
              Next,{' '}
              <Highlight>
                we specify that the return type of <Code>toggleTodo</Code> must
                also be <Code>Todo</Code>
              </Highlight>
              . We do this by adding <Code>: Todo</Code> after the parameter
              list.
            </P>
            <CodeBlock
              snippet={snippets.ywiv}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 1 && tokenIndex >= 9 && tokenIndex <= 11
              }
            />
            <P>
              Now, let’s copy and paste the code Little Duckling wrote—the one
              without the <Code>id</Code> property and see what happens.{' '}
              <Highlight>
                Press <RunButtonText compile /> below.
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.ntau}
              compile
              resultError
              result={`Property 'id' is missing in type '{ text: string; done: boolean; }' but required in type 'Todo'.`}
            />
            <P>
              It fails with an error because the returned object is missing the{' '}
              <Code>id</Code> property and therefore does not match the{' '}
              <Code>Todo</Code> type. So{' '}
              <Highlight>
                TypeScript can prevent the mistake Little Duckling made!
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['sparkles', 'chickEgg', 'sparkles']}
              description={
                <>TypeScript can prevent the mistake Little Duckling made!</>
              }
            />
            <P>
              Just to make sure, let’s try again with the correct code. I’ve
              added the <Code>id</Code> property to the returned object.{' '}
              <Highlight>
                Press <RunButtonText compile /> below.
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.ampt}
              compile
              result={compileSuccess}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 3 && tokenIndex >= 0 && tokenIndex <= 4
              }
            />
            <P>
              It compiled! As you can see, TypeScript is great at preventing
              mistakes AND letting you know when everything is implemented
              correctly.
            </P>
          </>
        )
      },
      {
        title: <>Bad refactor</>,
        content: (
          <>
            <P>
              Now that the code is working, Little Duckling decided to{' '}
              <strong>refactor</strong> <Code>toggleTodo()</Code>.
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>
                        I think I can refactor <Code>toggleTodo</Code> as
                        follows. Could you take a look?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <Highlight>
                Try pressing <RunButtonText compile /> to see if it compiles!
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.uxlb}
              compile
              result={compileSuccess}
            />
            <P>
              It compiled successfully, but it’s actually a{' '}
              <strong>bad refactoring</strong>. Why?{' '}
              <em>
                Because it changes the original <Code>todo</Code> object.
              </em>{' '}
              <Highlight>Try running the following code:</Highlight>
            </P>
            <CodeBlock
              snippet={snippets.wymp}
              result={
                <>
                  Before toggleTodo()…
                  <br />
                  <ResultHighlight>{`{ id: 1, text: '…', done: true }`}</ResultHighlight>
                  After toggleTodo()…
                  <br />
                  Original Todo:
                  <br />
                  <ResultHighlight>{`{ id: 1, text: '…', done: false }`}</ResultHighlight>
                  New Todo:
                  <br />
                  <ResultHighlight>{`{ id: 1, text: '…', done: false }`}</ResultHighlight>
                </>
              }
            />
            <P>Here’s what happened:</P>
            <Ul>
              <UlLi>
                <Code>originalTodo</Code> originally had <Code>done: true</Code>
                .
              </UlLi>
              <UlLi>
                After <Code>toggleTodo(),</Code> both <Code>originalTodo</Code>{' '}
                and <Code>newTodo</Code> have <Code>done: false</Code>.
              </UlLi>
              <UlLi>
                So <Code>originalTodo</Code> was modified!
              </UlLi>
            </Ul>
            <P>
              However, we’ve said earlier on this page that{' '}
              <Highlight>
                <Code>toggleTodo()</Code> must return a new todo object. It
                should NOT modify the original object.
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.qbgu}
              shouldHighlight={lineIndex => lineIndex === 0}
            />
            <P>
              That’s why Little Duckling’s refactoring is a bad refactor—even
              thought it compiles correctly.
            </P>
            <CodeBlock
              snippet={snippets.njgr}
              shouldHighlight={lineIndex => lineIndex === 2 || lineIndex === 3}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>
                        Oops, I messed up again! <Emoji type="sweat" />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              No worries, Little Duckling! <strong>The question is</strong>,{' '}
              <Highlight>
                how can we use TypeScript to prevent a mistake like this?
              </Highlight>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <Code>readonly</Code> properties
          </>
        ),
        content: (
          <>
            <P>
              To prevent a function from modifying its input,{' '}
              <Highlight>
                you can use the <Code>readonly</Code> keyword in TypeScript.
              </Highlight>{' '}
              In the following code, the <Code>readonly</Code> keyword is added
              to all of the properties of <Code>Todo</Code>.
            </P>
            <CodeBlock
              snippet={snippets.yhto}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex >= 1 && lineIndex <= 3 && tokenIndex === 1
              }
            />
            <P>
              Now, let’s try to compile Little Duckling’s code again using the
              updated definition of <Code>Todo</Code>. What happens this time?
            </P>
            <CodeBlock
              snippet={snippets.dqwb}
              compile
              resultError
              result={
                <>Cannot assign to 'done' because it is a read-only property</>
              }
              shouldHighlightResult={(lineIndex, tokenIndex) =>
                lineIndex === 2 && tokenIndex === 2
              }
            />
            <P>
              <strong>It failed to compile!</strong> This is because{' '}
              <Code>done</Code> was defined as a <Code>readonly</Code> property,
              and TypeScript prevents you from updating <Code>readonly</Code>{' '}
              properties.
            </P>
            <P>
              Once again, we saw that{' '}
              <Highlight>
                TypeScript can prevent the mistake Little Duckling made!
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['sparkles', 'chickEgg', 'sparkles']}
              description={
                <>
                  TypeScript’s <Code>readonly</Code> keyword can prevent the
                  mistake Little Duckling made!
                </>
              }
            />
            <P>
              By the way, the previous implementation (before refactoring) will
              continue to work because it does NOT modify the input todo item.
            </P>
            <CodeBlock
              snippet={snippets.vgnq}
              shouldHighlight={lineIndex => lineIndex <= 1}
            />
          </>
        )
      },
      {
        title: (
          <>
            The <Code>ReadOnly&lt;...&gt;</Code> mapped type
          </>
        ),
        content: (
          <>
            <P>
              In TypeScript,{' '}
              <Highlight>
                there’s another way to make all properties of an object type
                read-only.
              </Highlight>{' '}
              First, here’s our read-only version of <Code>Todo</Code>:
            </P>
            <CodeBlock snippet={snippets.yhto} />
            <P>The above code is equivalent to the following version:</P>
            <CodeBlock
              snippet={snippets.nxyl}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 1 && tokenIndex >= 7 && tokenIndex <= 8) ||
                (lineIndex === 5 && tokenIndex >= 1)
              }
            />
            <P>
              <Highlight>
                If you use <Code>Readonly&lt;...&gt;</Code> on an object type,
                it makes all of its properties <Code>readonly</Code>
              </Highlight>
              . Here’s another example:
            </P>
            <CodeBlock snippet={snippets.qaqa} />
            <P>
              This can be useful for <Code>toggleTodo()</Code>. For example, we
              might want to:
            </P>
            <Ul>
              <UlLi>
                <Highlight>
                  Make the properties of <Code>Todo</Code> to be NOT{' '}
                  <Code>readonly</Code> by default, and…
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  Make them <Code>readonly</Code> ONLY within{' '}
                  <Code>toggleTodo()</Code>.
                </Highlight>
              </UlLi>
            </Ul>
            <P>In that case, we can write the following code:</P>
            <CodeBlock
              snippet={snippets.jkjo}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 11 && tokenIndex >= 1
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>
                        That’s so cool!{' '}
                        <Highlight color="lightYellow1">
                          So you can convert one type into another type in
                          TypeScript?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              Yes! In TypeScript, you can use keywords like{' '}
              <Code>Readonly&lt;...&gt;</Code> to convert one type into another
              type—in this case, it creates a new type with{' '}
              <Code>readonly</Code> properties.
            </P>
            <EmojiSeparator
              emojis={['readonly']}
              description={
                <>TypeScript lets you convert one type into another type</>
              }
            />
            <P>
              And the keywords like <Code>Readonly&lt;...&gt;</Code> are called{' '}
              <strong>Mapped Types</strong>. There are many built-in mapped
              types (like <Code>Required&lt;...&gt;</Code>,{' '}
              <Code>Partial&lt;...&gt;</Code>, etc). You can also create your
              own mapped types. I won’t cover these topics here—you can google
              them.
            </P>
          </>
        )
      },
      {
        color: 'green',
        subtitle: <>Section 1 Summary:</>,
        title: <>Types are like lightweight, automatic unit tests</>,
        content: (
          <>
            <P>So far, we’ve learned the following:</P>
            <P>
              <strong>
                1. We can define a <Code>type</Code> to make sure that the input
                and the output of a function are of the correct type.
              </strong>
            </P>
            <CodeBlock
              snippet={snippets.frtm}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 0 && tokenIndex <= 2) ||
                (lineIndex === 8 &&
                  ((tokenIndex >= 5 && tokenIndex <= 7) || tokenIndex === 11))
              }
            />
            <P>
              <strong>
                2. We can use the <Code>readonly</Code> keyword to make sure
                that an object’s properties are not modified.
              </strong>
            </P>
            <CodeBlock
              snippet={snippets.npah}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex >= 1 && lineIndex <= 3 && tokenIndex === 1
              }
            />
            <P>
              Before TypeScript, you needed to write unit tests to verify these
              things. So in a sense,{' '}
              <Highlight>
                TypeScript’s types act as lightweight unit tests that run
                automatically every time you save (compile) the code.
              </Highlight>{' '}
              It helps you write less buggy code with very little overhead. (Of
              course, this analogy is a simplification. You should still write
              tests in TypeScript!)
            </P>
            <P>
              This especially useful{' '}
              <Highlight>
                when you’re using a UI library and need to transform data
              </Highlight>
              . For example, if you’re using React, you’ll need to transform
              data in state updates. You might also need to transform data when
              passing data from a parent component to its child component.
              TypeScript reduces bugs arising from these situations.
            </P>
            <EmojiSeparator
              emojis={['data', 'transformTypechecked', 'updatedData']}
              description={
                <>TypeScript reduces bugs when transforming/passing data</>
              }
            />

            <P>
              Finally, we learned that{' '}
              <strong>
                we can use mapped types like <Code>Readonly</Code> to convert
                one type to another type.
              </strong>
            </P>
            <CodeBlock
              snippet={snippets.nxyl}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 1 && tokenIndex >= 7 && tokenIndex <= 8) ||
                (lineIndex === 5 && tokenIndex >= 1)
              }
            />
            <P>Next, let’s take a look at more non-trivial examples!</P>
          </>
        )
      },
      {
        title: (
          <>
            <strong>Section 2</strong> of 3
          </>
        ),
        heading: section2,
        color: 'darkGreen'
      },
      {
        title: <>Mark all as completed</>,
        content: (
          <>
            <P>
              Some todo apps allow you to{' '}
              <strong>mark all items as completed.</strong> On the following
              todo app,{' '}
              <Highlight>try pressing “Mark all as completed”:</Highlight>
            </P>
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
              highlightLineIndexOffset={1}
              shouldHighlight={tokenIndex => tokenIndex === 15}
            />
            <P>
              After pressing “Mark all as completed”, all items will have{' '}
              <Code>done: true</Code>.
            </P>
            <P>
              Let’s implement this functionality using TypeScript. We’ll write a
              function called <Code>completeAll()</Code> which takes an array of
              todo items and returns a new array where <Code>done</Code> is all{' '}
              <Code>true</Code>.
            </P>
            <CodeBlock snippet={snippets.tdbp} />
            <P>
              Before implementing it,{' '}
              <Highlight>
                let’s add some types for the input and output of this function
              </Highlight>{' '}
              to prevent mistakes!
            </P>
          </>
        )
      },
      {
        title: (
          <>
            Adding types for <Code>completeAll()</Code>
          </>
        ),
        content: (
          <>
            <P>
              <strong>First,</strong> we’ll specify the type for the input
              parameter of <Code>completeAll()</Code>. It’s an array of{' '}
              <Code>Todo</Code> items.{' '}
              <Highlight>
                To specify an array type, we add <Code>[]</Code> next to the
                type
              </Highlight>{' '}
              as follows:
            </P>
            <CodeBlock
              snippet={snippets.lgci}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 8 && tokenIndex >= 5 && tokenIndex <= 9
              }
            />
            <P>
              <strong>Second,</strong> let’s specify the return type. It’ll also
              be an array of <Code>Todo</Code> items, so we’ll use the same
              syntax as above:
            </P>
            <CodeBlock
              snippet={snippets.mnmy}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 1 && tokenIndex >= 11 && tokenIndex <= 15
              }
            />
            <P>
              <strong>Third,</strong> we want to make sure that{' '}
              <Highlight>
                <Code>completeAll()</Code> returns a new array and does NOT
                modify the original array.
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.kuzw}
              shouldHighlight={lineIndex => lineIndex === 1}
            />
            <P>
              Because we defined <Code>Todo</Code> earlier using{' '}
              <Code>Readonly&lt;...&gt;</Code>, each todo item in the array is
              already <Code>readonly</Code>. However, <em>the array itself</em>{' '}
              is NOT <Code>readonly</Code> yet.
            </P>
            <P>
              <strong>
                To make the array itself <Code>readonly</Code>,
              </strong>{' '}
              <Highlight>
                we’ll add the <Code>readonly</Code> keyword to{' '}
                <Code>Todo[]</Code> like so:
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.szan}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 2 && tokenIndex >= 1
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>
                        So for arrays, we use the <Code>readonly</Code> keyword
                        instead of the <Code>Readonly&lt;...&gt;</Code> mapped
                        type?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              Yes, Little Duckling! We use the <Code>readonly</Code> keyword for
              arrays. And by doing so,{' '}
              <Highlight>
                TypeScript will prevent you from accidentally modifying the
                array.
              </Highlight>
            </P>
            <CodeBlock
              resultError
              defaultErrorHighlight
              snippet={snippets.mwrj}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 4 && tokenIndex <= 3) ||
                (lineIndex === 7 && tokenIndex <= 2)
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>
                        Awesome! So, can we start implementing{' '}
                        <Code>completeAll()</Code> now?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <strong>Actually:</strong>{' '}
              <Highlight>
                There’s one more thing we’d like to do before we implement{' '}
                <Code>completeAll()</Code>
              </Highlight>
              . Let’s take a look at what that is!
            </P>
          </>
        )
      },
      {
        title: (
          <>
            The <Code>CompletedTodo</Code> type
          </>
        ),
        content: (
          <>
            <P>
              Take a look at the following code. In addition to the{' '}
              <Code>Todo</Code> type, we’ve defined a new type called{' '}
              <Code>CompletedTodo</Code>.
            </P>
            <CodeBlock
              snippet={snippets.rlya}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 9 && tokenIndex >= 0 && tokenIndex <= 4) ||
                (lineIndex === 6 && tokenIndex >= 0 && tokenIndex <= 3)
              }
            />
            <P>
              The new <Code>CompletedTodo</Code> is almost identical to{' '}
              <Code>Todo</Code>, except it has <Code>done: true</Code> instead
              of <Code>done: boolean</Code>.{' '}
              <Highlight>
                In TypeScript, you can use <em>exact values</em> (like{' '}
                <Code>true</Code> or <Code>false</Code>) when specifying a type.
              </Highlight>{' '}
              This is called <strong>literal types</strong>.
            </P>
            <EmojiSeparator
              emojis={['doneTrue']}
              description={
                <>
                  You can use exact values when specifying a type. This is
                  called <strong>literal types</strong>.
                </>
              }
            />
            <P>
              Let’s take a look at an example. In the following code, we added a{' '}
              <Code>CompletedTodo</Code> to a todo item that has{' '}
              <Code>done: false</Code>. Let’s see what happens{' '}
              <Highlight>
                when you <RunButtonText compile /> it
              </Highlight>
              :
            </P>
            <CodeBlock
              snippet={snippets.zswn}
              compile
              resultError
              result={<>Type 'false' is not assignable to type 'true'.</>}
              shouldHighlightResult={lineNumber => lineNumber === 4}
            />
            <P>
              It failed to compile because <Code>done</Code> is not{' '}
              <Code>true</Code>. By using literal types like the above, you can
              specify exactly what value is allowed for a property.
            </P>
            <P>
              Coming back to <Code>completeAll()</Code>, we can now specify the
              return type of <Code>completeAll()</Code> to be an array of{' '}
              <Code>CompletedTodo</Code>’s:
            </P>
            <CodeBlock
              snippet={snippets.oone}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 3 && tokenIndex >= 2 && tokenIndex <= 6
              }
            />
            <P>
              By doing this,{' '}
              <Highlight>
                TypeScript will force you to return an array of todo items where{' '}
                <Code>done</Code> is <Code>true</Code>
              </Highlight>
              —if not, it will result in a compile error.
            </P>
          </>
        )
      },
      {
        title: <>Intersection types</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>
                        <strong>Question:</strong> There seems to be some
                        duplicate code between <Code>Todo</Code> and{' '}
                        <Code>CompletedTodo</Code>. Can we refactor this?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              Good question, Little Duckling! If you look closely,{' '}
              <Code>Todo</Code> and <Code>CompletedTodo</Code> have identical{' '}
              <Code>id</Code> and <Code>text</Code> types.
            </P>
            <CodeBlock
              snippet={snippets.xrwn}
              shouldHighlight={lineIndex =>
                lineIndex === 2 ||
                lineIndex === 3 ||
                lineIndex === 9 ||
                lineIndex === 10
              }
            />
            <P>
              We can de-duplicate the code by using a TypeScript feature called{' '}
              <strong>intersection types</strong>.
            </P>
            <P>
              In TypeScript, you can use the <Code>&amp;</Code> sign to create
              an <strong>intersection type</strong> of two types.
            </P>
            <EmojiSeparator
              emojis={['a', 'ampersand', 'b']}
              description={
                <>
                  <Code>&amp;</Code> creates an{' '}
                  <strong>intersection type</strong> of two types.
                </>
              }
            />
            <P>
              <Highlight>
                The intersection type <Code>A &amp; B</Code> is a type that has{' '}
                <strong>all</strong> of the properties of <Code>A</Code> and{' '}
                <Code>B</Code>.
              </Highlight>{' '}
              Here’s an example:
            </P>
            <CodeBlock
              snippet={snippets.wdjp}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 4 && tokenIndex >= 7
              }
            />
            <P>
              Furthermore,{' '}
              <Highlight>
                if the second type is more specific than the first type, the
                second type overrides the first.
              </Highlight>{' '}
              Here’s an example:
            </P>
            <CodeBlock
              snippet={snippets.qnwc}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 10 && tokenIndex >= 7 && tokenIndex <= 13
              }
            />
            <P>
              We can apply this idea to update the definition of{' '}
              <Code>CompletedTodo</Code>. We’ll define{' '}
              <Code>CompletedTodo</Code> using <Code>Todo</Code> like this:
            </P>
            <CodeBlock
              snippet={snippets.rmuo}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 7 && tokenIndex >= 7) ||
                lineIndex === 8 ||
                lineIndex === 9
              }
            />
            <P>
              By doing the above, you can define <Code>CompletedTodo</Code> to
              have the same properties as <Code>Todo</Code> except for{' '}
              <Code>done</Code>—without duplicating code.
            </P>
            <P>
              <strong>Summary:</strong>{' '}
              <Highlight>
                Just like JavaScript has boolean operators like{' '}
                <Code>&amp;&amp;</Code>, TypeScript has{' '}
                <strong>type operators</strong> like <Code>&amp;</Code> which
                lets you combine two types.
              </Highlight>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            Finally implementing <Code>completeAll()</Code>
          </>
        ),
        content: (
          <>
            <P>
              We’re finally ready to implement <Code>completeAll()</Code>.
              Here’s the code—
              <Highlight>
                try pressing <RunButtonText compile />
              </Highlight>
              !
            </P>
            <CodeBlock
              snippet={snippets.hszk}
              compile
              result={compileSuccess}
              shouldHighlight={lineNumber => lineNumber >= 3 && lineNumber <= 6}
            />
            <P>
              It compiled! Let’s run this function on an example todo list.{' '}
              <Highlight>
                Press <RunButtonText />:
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.okva}
              result={
                <ResultHighlight>
                  {`[
  { id: 1, text: '…', done: true },
  { id: 2, text: '…', done: true }
]`}
                </ResultHighlight>
              }
            />
            <P>
              <Code>done</Code> all became <Code>true</Code>, as expected!
            </P>
            <P>
              Now, let’s see what happens if we make a mistake and set{' '}
              <Code>done</Code> to <Code>false</Code>:
            </P>
            <CodeBlock
              snippet={snippets.whae}
              compile
              result={
                <>
                  Types of property 'done' are incompatible.
                  <br />
                  Type 'false' is not assignable to type 'true'.
                </>
              }
              resultError
              shouldHighlight={lineNumber => lineNumber === 6}
              shouldHighlightResult={lineNumber => lineNumber === 6}
            />
            <P>
              It failed because <Code>CompletedTodo</Code> must have{' '}
              <Code>done: true</Code>. Once again, TypeScript caught an error
              early.
            </P>
          </>
        )
      },
      {
        color: 'green',
        subtitle: <>Section 2 Summary:</>,
        title: <>TypeScript can handle arrays and exact values</>,
        content: (
          <>
            <P>
              In this section, we’ve learned that TypeScript can handle arrays
              and exact values:
            </P>
            <P>
              <strong>
                1. We can specify an array type by adding <Code>[]</Code>. We
                can also set an array as <Code>readonly</Code>.
              </strong>
            </P>
            <CodeBlock
              snippet={snippets.ruga}
              shouldHighlight={(lineNumber, tokenNumber) =>
                (lineNumber === 2 && tokenNumber >= 2 && tokenNumber <= 6) ||
                (lineNumber === 1 && tokenNumber >= 2)
              }
            />
            <P>
              <strong>
                2. We can use literal types to specify exactly which value is
                allowed for a property.
              </strong>
            </P>
            <CodeBlock
              snippet={snippets.bpmz}
              shouldHighlight={lineNumber => lineNumber === 3}
            />
            <P>
              Finally, we learned that{' '}
              <strong>
                we can use intersection types to override some properties and
                remove code duplication.
              </strong>
            </P>
            <CodeBlock
              snippet={snippets.rmuo}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 7 && tokenIndex >= 7) ||
                lineIndex === 8 ||
                lineIndex === 9
              }
            />
            <P>
              In the next (and final) section, we’ll take a look at one of the
              most powerful features of TypeScript: <strong>Unions</strong>.
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <strong>Section 3</strong> of 3
          </>
        ),
        heading: section3,
        color: 'darkGreen'
      },
      {
        title: <>New feature: Separators</>,
        content: (
          <>
            <P>
              Let me introduce the new feature of our todo app called{' '}
              <strong>separators</strong>.{' '}
            </P>
            <P>
              <Highlight>
                Sometimes, you might want to separate a group of todo items from
                others.
              </Highlight>{' '}
              On the following todo app, the third item is a separator which
              visually separates the first two todo items from the last.
            </P>
            <TodoWithData
              caption={<>There’s a separator after the second todo item</>}
              defaultData={[
                { id: 1, text: 'First todo', done: false },
                { id: 2, text: 'Second todo', done: false },
                { id: 1, kind: 'separator' },
                { id: 3, text: 'Third todo', done: false }
              ]}
            />
            <P>This one has two separators:</P>
            <TodoWithData
              defaultData={[
                { id: 1, text: 'First todo', done: false },
                { id: 2, text: 'Second todo', done: false },
                { id: 1, kind: 'separator' },
                { id: 3, text: 'Third todo', done: false },
                { id: 2, kind: 'separator' },
                { id: 4, text: 'Fourth todo', done: false }
              ]}
            />
            <P>
              <strong>Now, here’s a question:</strong>{' '}
              <Highlight>
                What <Code>type</Code> should we create to support these
                separator items?
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['question', 'type', 'question']}
              description={
                <>
                  What <Code>type</Code> should we create to support separator
                  items?
                </>
              }
            />
          </>
        )
      },
      {
        title: (
          <>
            The <Code>Separator</Code> type
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>
                        <strong>Let me guess:</strong> In addition to the
                        existing <Code>Todo</Code> type, we need to create the
                        new <Code>Separator</Code> type to describe a separator
                        item, right? Something like this?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <CodeBlock
              snippet={snippets.yvum}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 8 && tokenIndex <= 3
              }
            />
            <P>
              <strong>Exactly, Little Duckling!</strong> Now, let’s think about
              what needs to go into the <Code>Separator</Code> type.{' '}
            </P>
            <P>
              <strong>First,</strong>{' '}
              <Highlight>
                we’ll add <Code>id</Code> just like todos
              </Highlight>{' '}
              because we’ll probably need to store the separator data into a
              backend database using this <Code>id</Code>.
            </P>
            <CodeBlock
              snippet={snippets.wmgl}
              shouldHighlight={lineIndex => lineIndex === 7}
            />
            <P>
              <strong>Second,</strong>{' '}
              <Highlight>
                let’s add a <Code>kind</Code> property to BOTH <Code>Todo</Code>{' '}
                and <Code>Separator</Code> to differentiate them.
              </Highlight>{' '}
            </P>
            <P>
              For each type, we’ll specify exactly what value is allowed for the{' '}
              <Code>kind</Code> property (reminder—this is called{' '}
              <strong>literal types</strong>). Each <Code>Todo</Code> item must
              have <Code>kind: 'todo'</Code>, and each <Code>Separator</Code>{' '}
              item must have <Code>kind: 'separator'</Code>.
            </P>
            <CodeBlock
              snippet={snippets.jnuw}
              shouldHighlight={lineIndex => lineIndex === 2 || lineIndex === 9}
            />
            <P>
              That’s it! Let’s now take a look at an example. Here’s a todo list
              containing some separators, displayed with its associated data:
            </P>
            <TodoWithData
              showData
              narrowText
              defaultData={[
                { id: 1, kind: 'todo', text: 'A', done: false },
                { id: 2, kind: 'todo', text: 'B', done: false },
                { id: 1, kind: 'separator' },
                { id: 3, kind: 'todo', text: 'C', done: false },
                { id: 2, kind: 'separator' },
                { id: 4, kind: 'todo', text: 'D', done: false }
              ]}
              highlightLineIndexOffset={1}
              shouldHighlight={tokenIndex => tokenIndex === 20}
            />
          </>
        )
      },
      {
        title: <></>,
        content: (
          <>
            <P>
              To represent this, we need to use a TypeScript feature called{' '}
              <strong>union types</strong>. In TypeScript, you can use the
              syntax <Code>A | B</Code> to create a union type, which represents
              a type that’s{' '}
              <Highlight>
                either <Code>A</Code> or <Code>B</Code>
              </Highlight>
              .
            </P>
            <EmojiSeparator
              emojis={['a', 'verticalBar', 'b']}
              description={
                <>
                  <Code>A | B</Code> is an <strong>union type</strong>, which
                  means{' '}
                  <Highlight>
                    either <Code>A</Code> or <Code>B</Code>.
                  </Highlight>
                </>
              }
            />
            <P>
              In this case, we need to create a union of <Code>Todo</Code> and{' '}
              <Code>Separator</Code> like this:
            </P>
            <CodeBlock snippet={snippets.xtkd} />
          </>
        )
      },
      underConstructionCard
    ]}
  />
)

export default Page
