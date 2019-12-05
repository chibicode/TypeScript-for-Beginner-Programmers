const originalTodo = {
  id: 1,
  text: '…',
  done: true
}

console.log('Before toggleTodo()…')
console.log(originalTodo)

const newTodo = toggleTodo(originalTodo)

console.log('After toggleTodo()…')
console.log('Original Todo:')
console.log(originalTodo)
console.log('New Todo:')
console.log(newTodo)
