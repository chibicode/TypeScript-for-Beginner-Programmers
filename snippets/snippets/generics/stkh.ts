const { getState, setState } = createState()

// What happens if we use a string instead?
setState('foo')
console.log(getState())
