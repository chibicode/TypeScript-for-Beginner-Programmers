function makeState() {
  let state: string

  function getState() {
    return state
  }

  function setState(x: string) {
    state = x
  }
  return { getState, setState }
}
