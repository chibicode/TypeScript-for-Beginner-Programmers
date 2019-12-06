type Todo = {
  readonly id: number
  readonly text: string
  readonly done: boolean
}

function toggleTodo(todo: Todo): Todo {
  // This won’t compile
  todo.done = !todo.done
  return todo
}
