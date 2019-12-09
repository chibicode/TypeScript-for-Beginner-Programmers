type Todo = Readonly<{
  id: number
  text: string
  done: boolean
}>

// Override the done property of Todo
type CompletedTodo = Todo & {
  readonly done: true
}
