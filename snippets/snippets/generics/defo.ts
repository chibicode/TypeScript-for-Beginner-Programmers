function createState<S>() {
  let state: S

  function getState() {
    return state
  }

  function setState(x: S) {
    state = x
  }

  return { getState, setState }
}

const numState = createState<number>()
numState.setState(1)
console.log(numState.getState())

const strState = createState<string>()
strState.setState('foo')
console.log(strState.getState())
