type Todo = Readonly<{
  // id and text are the same as CompletedTodo
  id: number
  text: string
  done: boolean
}>

type CompletedTodo = Readonly<{
  // id and text are the same as Todo
  id: number
  text: string
  done: true
}>
