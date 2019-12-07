// Readonly<...> makes each property readonly
type Todo = Readonly<{
  id: number
  text: string
  done: boolean
}>
