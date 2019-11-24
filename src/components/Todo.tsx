import React from 'react'
import TodoBlank from 'src/components/TodoBlank'

const Todo = ({ text }: { text: string }) => (
  <>
    <TodoBlank /> {text}
  </>
)

export default Todo
