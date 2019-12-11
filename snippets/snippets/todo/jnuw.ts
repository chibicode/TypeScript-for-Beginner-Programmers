type Todo = Readonly<{
  id: number
  text: string
  done: boolean
  kind: 'todo'
}>

type Separator = Readonly<{
  id: number
  kind: 'separator'
}>
