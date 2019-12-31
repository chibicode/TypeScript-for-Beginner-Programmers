/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'
import { useReducer } from 'react'
import CodeResult from 'src/components/CodeResult'
import CodeResultWrapper from 'src/components/CodeResultWrapper'
import Caption from 'src/components/Caption'
import TodoList from 'src/components/TodoList'
import PromptArrowText from 'src/components/PromptArrowText'
import TodoWithDataContext from 'src/components/TodoWithDataContext'
import CodeBlockHighlight from 'src/components/CodeBlockHighlight'
import { format } from 'prettier/standalone'
import parser from 'prettier/parser-babylon'

const prettierFormat = (state: Todo[], narrowText = false) =>
  format(JSON.stringify(state), {
    semi: false,
    singleQuote: true,
    printWidth: narrowText ? 54 : 48,
    plugins: [parser],
    parser: 'babel'
  })
    .trim()
    .substring(1)

export type Todo = {
  id: number
  text: string
  done: boolean
  place?: 'home' | 'work' | { custom: string }
}

export type TodoAction =
  | {
      type: 'toggle'
      index: number
    }
  | {
      type: 'markAllAsCompleted'
    }

export type TodoState = {
  todos: Todo[]
  lastChangedIndices: number[]
}

const reducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case 'toggle': {
      const item = state.todos[action.index]
      return {
        todos: [
          ...state.todos.slice(0, action.index),
          {
            ...state.todos[action.index],
            done: !item.done
          },
          ...state.todos.slice(action.index + 1)
        ],
        lastChangedIndices: [action.index]
      }
    }
    case 'markAllAsCompleted':
      return {
        todos: state.todos.map(item => ({ ...item, done: true })),
        lastChangedIndices: state.todos.map((_, index) => index)
      }
    default:
      throw new Error()
  }
}

const TodoWithData = ({
  defaultData,
  caption,
  promptArrowText,
  showData,
  comment,
  showMarkAllAsCompleted,
  highlightLineIndexOffset,
  shouldHighlight,
  shouldAlwaysHighlight,
  narrowText,
  customSnippet
}: {
  defaultData: Todo[]
  caption?: React.ReactNode
  promptArrowText?: React.ReactNode
  showData?: boolean
  comment?: string
  showMarkAllAsCompleted?: boolean
  highlightLineIndexOffset?: number
  shouldHighlight?: (tokenIndex: number) => boolean
  shouldAlwaysHighlight?: (lineIndex: number, tokenIndex: number) => boolean
  narrowText?: boolean
  customSnippet?: string
}) => {
  const { spaces, radii, colors, letterSpacings } = useTheme()
  const [state, dispatch] = useReducer<typeof reducer>(reducer, {
    todos: defaultData,
    lastChangedIndices: []
  })
  return (
    <TodoWithDataContext.Provider value={{ dispatch }}>
      <CodeResultWrapper>
        <Caption>{caption}</Caption>
        <CodeResult
          resultType={showData ? 'top' : 'default'}
          resultComponent={
            <TodoList
              showMarkAllAsCompleted={showMarkAllAsCompleted}
              todos={state.todos}
            />
          }
        />
        {showData && (
          <CodeBlockHighlight
            snippet={
              customSnippet ||
              `${comment || ''}${comment ? '\n' : ''}${prettierFormat(
                state.todos,
                narrowText
              )}`
            }
            language="javascript"
            cssOverrides={[
              css`
                margin-top: ${0};
                margin-bottom: ${spaces(1.75)};
                border-bottom-left-radius: ${radii(0.5)};
                border-bottom-right-radius: ${radii(0.5)};
              `,
              narrowText &&
                css`
                  letter-spacing: ${letterSpacings('smallCode')};
                `
            ]}
            lineCssOverrides={(lineIndex, tokenIndex) =>
              shouldAlwaysHighlight &&
              shouldAlwaysHighlight(lineIndex, tokenIndex) &&
              css`
                background: ${colors('yellowHighlight')};
                border-bottom: 2px solid ${colors('darkOrange')};
                font-weight: bold;
              `
            }
            lineCssOverridesAnimation={(lineIndex, tokenIndex) =>
              shouldHighlight &&
              state.lastChangedIndices
                .map(
                  lastChangedIndex =>
                    lastChangedIndex + (highlightLineIndexOffset || 0)
                )
                .includes(lineIndex) &&
              shouldHighlight(tokenIndex)
                ? {
                    background: `${colors('yellowHighlight')}`,
                    borderBottom: `2px solid ${colors('darkOrange')}`,
                    reset: true,
                    fontWeight: 'bold',
                    from: {
                      background: `${colors('yellowHighlightTransparent')}`,
                      borderBottom: `1px solid ${colors(
                        'darkOrangeTransparent'
                      )}`
                    }
                  }
                : undefined
            }
          ></CodeBlockHighlight>
        )}
        {promptArrowText && state.lastChangedIndices.length === 0 && (
          <PromptArrowText>{promptArrowText}</PromptArrowText>
        )}
      </CodeResultWrapper>
    </TodoWithDataContext.Provider>
  )
}

export default TodoWithData
