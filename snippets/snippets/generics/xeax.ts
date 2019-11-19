const { getState, setState } = createState()

setState('foo')
console.log(getState())
