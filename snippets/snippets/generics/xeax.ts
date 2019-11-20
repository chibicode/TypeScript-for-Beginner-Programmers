const { getState, setState } = makeState()

setState('foo')
console.log(getState())
