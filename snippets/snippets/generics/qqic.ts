// Doesn't work because the created state…
const numAndStrState = makeState()

// Allows both numbers…
numAndStrState.setState(1)
console.log(numAndStrState.getState())

// And strings.
numAndStrState.setState('foo')
console.log(numAndStrState.getState())

// This is NOT what we want. We want to create
// a number-only state and a string-only state.
