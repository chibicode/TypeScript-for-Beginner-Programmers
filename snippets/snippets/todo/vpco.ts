// Returns a new todo object with the opposite
// boolean value for the "done" proprty.
function toggleTodo(todo) {
  // ...
}

toggleTodo({ id: …, text: '…', done: true })
// -> returns { id: …, text: '…', done: false }

toggleTodo({ id: …, text: '…', done: false })
// -> returns { id: …, text: '…', done: true }