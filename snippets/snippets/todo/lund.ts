const result = toggleTodo({
  id: 1,
  text: '…',
  done: true
})

console.log('Expected:')
console.log(`{ id: 1, text: '…', done: false }`)
console.log('Actual:')
console.log(result)
