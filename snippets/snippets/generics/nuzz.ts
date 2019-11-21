function makeState<
  A extends number | string,
  B extends number | string
>() {
  let state: [A, B]

  function getState() {
    return state
  }

  function setState(first: A, second: B) {
    state = [first, second]
  }

  return { getState, setState }
}

const state = makeState<number, string>()
state.setState(1, 'cat')
console.log(state.getState())
