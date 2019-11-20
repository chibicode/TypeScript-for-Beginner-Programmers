const { getState, setState } = makeState()

// What happens if we use a string instead?
setState('foo')
console.log(getState())
