function toggleTodo(todo) {
  return {
    // This line was missing
    id: todo.id,
    text: todo.text,
    done: !todo.done
  }
}
