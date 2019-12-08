type Todo = Readonly<{
  id: number
  text: string
  done: boolean
}>

type CompletedTodo = Readonly<{
  id: number
  text: string
  done: true
}>
