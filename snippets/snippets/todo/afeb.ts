type CompletedTodo = Todo & {
  readonly done: true
}

function completeAll(
  items: readonly (Todo | Separator)[]
): CompletedTodo[] // <- Before
