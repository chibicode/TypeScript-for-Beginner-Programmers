const { getState, setState } = makeState()

setState(1)
console.log(getState())

setState(2)
console.log(getState())
