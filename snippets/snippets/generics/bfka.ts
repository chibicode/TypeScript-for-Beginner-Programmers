// We want to modify createState() to support
// creating two different states:

// One that only allows numbers, and…
const numState = createState()
numState.setState(1)
console.log(numState.getState()) // 1

// The other that only allows strings.
const strState = createState()
strState.setState('foo')
console.log(strState.getState()) // foo
