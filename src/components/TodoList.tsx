/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'
import TodoItem from 'src/components/TodoItem'
import { TodoType } from 'src/components/TodoWithData'
import { useContext } from 'react'
import TodoWithDataContext from 'src/components/TodoWithDataContext'

const TodoList = ({
  todos,
  showMarkAllAsCompleted
}: {
  todos: TodoType[]
  showMarkAllAsCompleted?: boolean
}) => {
  const { fontSizes, spaces, colors } = useTheme()
  const { dispatch, disabled } = useContext(TodoWithDataContext)
  return (
    <>
      {todos.map((todo, index) => (
        <div
          key={todo.id}
          css={
            index !== todos.length - 1 &&
            css`
              margin-bottom: ${spaces(0.125)};
            `
          }
        >
          <TodoItem index={index} done={todo.done} text={todo.text} />
        </div>
      ))}
      {showMarkAllAsCompleted && !disabled && (
        <div
          css={css`
            font-size: ${fontSizes(0.85)};
            margin: ${spaces(0.75)} ${spaces(0.5)} ${spaces(0.25)};
            color: ${colors('brown')};
          `}
        >
          <span
            css={css`
              text-decoration: underline;
              cursor: pointer;
              &:hover {
                background: ${colors('lightGreen')};
              }
            `}
            tabIndex={0}
            role="button"
            aria-pressed="false"
            onClick={() => dispatch({ type: 'markAllAsCompleted' })}
          >
            Mark all as completed
          </span>
        </div>
      )}
    </>
  )
}

export default TodoList
