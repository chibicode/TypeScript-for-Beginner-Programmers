// By default, the properties of Todo are
// NOT read-only
type Todo = {
  id: number
  text: string
  done: boolean
}

// By using Readonly<> here, it makes the
// properties readonly only within toggleTodo()
function toggleTodo(
  todo: Readonly<Todo>
): Todo {
  // ...
}
