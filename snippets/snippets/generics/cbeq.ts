const { getState, setState } = createState()

setState(1)
console.log(getState())

setState(2)
console.log(getState())
