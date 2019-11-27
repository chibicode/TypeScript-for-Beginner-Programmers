/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'
import { useReducer } from 'react'
import CodeResult from 'src/components/CodeResult'
import Caption from 'src/components/Caption'
import TodoList from 'src/components/TodoList'
import PromptArrowText from 'src/components/PromptArrowText'
import TodoWithDataContext from 'src/components/TodoWithDataContext'

export type TodoType = {
  id: number
  text: string
  done: boolean
}

export type TodoAction = {
  type: 'toggle'
  index: number
}

const reducer = (state: TodoType[], action: TodoAction) => {
  switch (action.type) {
    case 'toggle':
      return [
        ...state.slice(0, action.index),
        { ...state[action.index], done: !state[action.index].done },
        ...state.slice(action.index + 1)
      ]
    default:
      throw new Error()
  }
}

const TodoWithData = ({
  defaultData,
  caption,
  promptArrowText
}: {
  defaultData: TodoType[]
  caption?: React.ReactNode
  promptArrowText?: React.ReactNode
}) => {
  const { spaces, ns, maxWidths } = useTheme()
  const [state, dispatch] = useReducer<typeof reducer>(reducer, defaultData)
  return (
    <TodoWithDataContext.Provider value={{ dispatch }}>
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
            resultType="default"
            resultComponent={<TodoList todos={state} />}
          />
          {promptArrowText && (
            <PromptArrowText>{promptArrowText}</PromptArrowText>
          )}
        </div>
      </div>
    </TodoWithDataContext.Provider>
  )
}

export default TodoWithData
