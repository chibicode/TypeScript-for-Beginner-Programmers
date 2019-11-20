// Creates a string-only state
const strState = makeState<string>()
strState.setState('foo')
console.log(strState.getState())

// strState.setState(1) will fail!
