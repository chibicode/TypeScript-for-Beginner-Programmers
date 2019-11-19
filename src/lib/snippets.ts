export const cbeq = `const { getState, setState } = createState()

setState(1)
console.log(getState())

setState(2)
console.log(getState())`

export const cupt = `function createState() {
  let state: number

  function getState() {
    return state
  }

  function setState(x: number) {
    state = x
  }

  return {
    getState,
    setState
  }
}`

export const kiyi = `// Confused by generics code like this?
function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
)`
