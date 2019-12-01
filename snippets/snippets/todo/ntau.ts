function toggleTodo(todo: Todo): Todo {
  // Little Duckling’s code from earlier:
  // Missing the "id" property
  return {
    text: todo.text,
    done: !todo.done
  }
}
