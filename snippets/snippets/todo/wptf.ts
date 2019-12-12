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

type CompletedTodo = Todo & {
  readonly done: true
}

function completeAll(
  items: readonly (Todo | Separator)[]
): (CompletedTodo | Separator)[] {
  return items.map(item => {
    if (item.kind === 'todo') {
      return { ...item, done: true }
    } else {
      return item
    }
  })
}
