// Pass a type parameter on initialization
const numState = new State<number>()

numState.setState(1)

// Prints 1
console.log(numState.getState())
