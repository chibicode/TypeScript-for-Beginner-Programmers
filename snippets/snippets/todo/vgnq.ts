type Todo = {
  readonly id: number
  readonly text: string
  readonly done: boolean
}

// Earlier implementation: it will continue to
// work because the input todo is not modified
function toggleTodo(todo: Todo): Todo {
  return {
    id: todo.id,
    text: todo.text,
    done: !todo.done
  }
}
