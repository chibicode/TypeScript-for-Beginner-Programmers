interface State<V, A> {
  value?: V
  author?: A
}

function makeState<
  V extends number | string,
  A extends string
>() {
  let state: State<V, A> = {}

  function getState() {
    return state
  }

  function setState(value: V, author: A) {
    state.value = value
    state.author = author
  }

  return { getState, setState }
}

const state = makeState<number, 'cat' | 'dog'>()
state.setState(1, 'cat')
console.log(state.getState())
