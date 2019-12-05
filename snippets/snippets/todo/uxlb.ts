function toggleTodo(todo: Todo): Todo {
  // Little Duckling’s refactoring
  todo.done = !todo.done
  return todo
}
