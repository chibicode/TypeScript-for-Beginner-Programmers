// Creates a boolean-only state
const boolState = makeState<boolean>()
boolState.setState(true)
console.log(boolState.getState())
