// After declaring todos as readonly Todo[],
// the following code WILL NOT compile:

// Compile error - modifies the array
todos[0] = { id: 1, text: '…', done: true }

// Compile error - push() modifies the array
todos.push({ id: 1, text: '…', done: true })
