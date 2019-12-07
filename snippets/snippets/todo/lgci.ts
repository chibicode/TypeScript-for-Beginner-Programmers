// Same as before
type Todo = Readonly<{
  id: number
  text: string
  done: boolean
}>

// Input is an array of Todo items: Todo[]
function completeAll(todos: Todo[]) {
  // ...
}
