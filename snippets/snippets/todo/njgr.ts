function toggleTodo(todo: Todo): Todo {
  // Little Duckling’s refactoring is a
  // bad refactoring because it modifies
  // the original todo object
  todo.done = !todo.done
  return todo
}
