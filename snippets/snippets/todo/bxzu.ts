type Todo = {
  // Make id optional
  id?: number
  text: string
  done: boolean
}

// This will now compile!
const bar: Todo = {
  text: '…',
  done: true
}
