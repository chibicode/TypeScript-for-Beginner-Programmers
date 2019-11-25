/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'
import TodoItem from 'src/components/TodoItem'

type Todo = {
  id: number
  text: string
  done: boolean
}

const TodoList = ({ todos }: { todos: Todo[] }) => {
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
