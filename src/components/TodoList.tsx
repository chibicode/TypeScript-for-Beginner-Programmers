/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'
import TodoItem from 'src/components/TodoItem'
import { TodoType } from 'src/components/TodoWithData'

const TodoList = ({ todos }: { todos: TodoType[] }) => {
  const { spaces } = useTheme()
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
          <TodoItem done={todo.done} text={todo.text} />
        </div>
      ))}
    </>
  )
}

export default TodoList
