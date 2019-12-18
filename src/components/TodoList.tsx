/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'
import TodoItem from 'src/components/TodoItem'
import { Todo } from 'src/components/TodoWithData'
import { useContext } from 'react'
import TodoWithDataContext from 'src/components/TodoWithDataContext'

const TodoList = ({
  todos: items,
  showMarkAllAsCompleted
}: {
  todos: Todo[]
  showMarkAllAsCompleted?: boolean
}) => {
  const { fontSizes, spaces, colors } = useTheme()
  const { dispatch } = useContext(TodoWithDataContext)
  return (
    <>
      {items.map((item, index) => (
        <div
          key={item.id}
          css={
            index !== items.length - 1 &&
            css`
              margin-bottom: ${spaces(0.125)};
            `
          }
        >
          <TodoItem
            index={index}
            done={item.done}
            text={item.text}
            place={item.place}
          />
        </div>
      ))}
      {showMarkAllAsCompleted && items.filter(item => !item.done).length > 0 && (
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
