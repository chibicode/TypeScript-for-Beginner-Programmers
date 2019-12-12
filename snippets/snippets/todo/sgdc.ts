// Previous version of completeAll()
function completeAll(
  todos: readonly Todo[]
): CompletedTodo[] {
  return todos.map(todo => ({
    ...todo,
    done: true
  }))
}
