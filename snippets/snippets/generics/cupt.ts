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
