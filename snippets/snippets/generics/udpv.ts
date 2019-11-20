function makeState() {
  let state: number

  function getState() {
    return state
  }

  function setState(x: number) {
    state = x
  }

  return { getState, setState }
}

const { getState, setState } = makeState()

setState(1)
console.log(getState())

setState(2)
console.log(getState())
