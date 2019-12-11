type Todo = Readonly<{
  id: number
  kind: 'todo'
  text: string
  done: boolean
}>

type Separator = Readonly<{
  id: number
  kind: 'separator'
}>
