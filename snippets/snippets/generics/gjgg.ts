// Creates a number-only state
const numState = makeState<number>()
numState.setState(1)
console.log(numState.getState())

// numState.setState('foo') will fail!
