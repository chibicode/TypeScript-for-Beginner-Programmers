/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'
import { useReducer } from 'react'
import CodeResult from 'src/components/CodeResult'
import Caption from 'src/components/Caption'
import TodoList from 'src/components/TodoList'
import PromptArrowText from 'src/components/PromptArrowText'
import TodoWithDataContext from 'src/components/TodoWithDataContext'
import CodeBlockHighlight from 'src/components/CodeBlockHighlight'
import { format } from 'prettier/standalone'
import parser from 'prettier/parser-babylon'

const prettierFormat = (state: ItemType[]) =>
  format(JSON.stringify(state), {
    semi: false,
    singleQuote: true,
    printWidth: 48,
    plugins: [parser],
    parser: 'babel'
  })
    .trim()
    .substring(1)

export type ItemType =
  | {
      id: number
      text: string
      done: boolean
      kind?: 'todo'
    }
  | {
      id: number
      kind: 'separator'
      text?: string
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
  todos: ItemType[]
  lastChangedIndices: number[]
}

const reducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case 'toggle': {
      const item = state.todos[action.index]
      if (item.kind !== 'separator') {
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
      } else {
        return state
      }
    }
    case 'markAllAsCompleted':
      return {
        todos: state.todos.map(item =>
          item.kind !== 'separator' ? { ...item, done: true } : item
        ),
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
  disabled,
  highlightLineIndexOffset,
  shouldHighlight
}: {
  defaultData: ItemType[]
  caption?: React.ReactNode
  promptArrowText?: React.ReactNode
  showData?: boolean
  comment?: string
  showMarkAllAsCompleted?: boolean
  disabled?: boolean
  highlightLineIndexOffset?: number
  shouldHighlight?: (tokenIndex: number) => boolean
}) => {
  const { spaces, ns, maxWidths, radii, colors } = useTheme()
  const [state, dispatch] = useReducer<typeof reducer>(reducer, {
    todos: defaultData,
    lastChangedIndices: []
  })
  return (
    <TodoWithDataContext.Provider value={{ dispatch, disabled }}>
      <div
        css={css`
          margin: ${spaces(2)} auto;
          max-width: ${maxWidths('sm')};
        `}
      >
        <div
          css={css`
            margin-left: ${spaces('-0.5')};
            margin-right: ${spaces('-0.5')};
            ${ns} {
              margin-left: ${spaces(0)};
              margin-right: ${spaces(0)};
            }
          `}
        >
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
              snippet={`${comment || ''}${comment ? '\n' : ''}${prettierFormat(
                state.todos
              )}`}
              language="javascript"
              cssOverrides={css`
                margin-top: ${0};
                margin-bottom: ${spaces(1.75)};
                border-bottom-left-radius: ${radii(0.5)};
                border-bottom-right-radius: ${radii(0.5)};
              `}
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
          {promptArrowText && (
            <PromptArrowText>{promptArrowText}</PromptArrowText>
          )}
        </div>
      </div>
    </TodoWithDataContext.Provider>
  )
}

export default TodoWithData
