function completeAll(
  todos: readonly Todo[]
): CompletedTodo[] {
  return todos.map(todo => ({
    ...todo,
    // What if we set done to false?
    done: false
  }))
}
