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

  return { getState, setState }
}`

export const gkgi = `function createState() {
  // Change to string
  let state: string

  function getState() {
    return state
  }

  // Accepts a string
  function setState(x: string) {
    state = x
  }

  return { getState, setState }
}`

export const kiyi = `// Confused by generics code like this?
function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
)`

export const nnyl = `function createState() {
  let state: number

  function getState() {
    return state
  }

  // setState() expects a number
  function setState(x: number) {
    state = x
  }

  return { getState, setState }
}`

export const osaa = `function createState() {
  // Change to string
  let state: string

  function getState() {
    return state
  }

  // Accepts a string
  function setState(x: string) {
    state = x
  }

  return { getState, setState }
}

const { getState, setState } = createState()

setState('foo')
console.log(getState())`

export const stkh = `const { getState, setState } = createState()

// What happens if we use a string instead?
setState('foo')
console.log(getState())`

export const udpv = `function createState() {
  let state: number

  function getState() {
    return state
  }

  function setState(x: number) {
    state = x
  }

  return { getState, setState }
}

const { getState, setState } = createState()

setState(1)
console.log(getState())

setState(2)
console.log(getState())`

export const xeax = `const { getState, setState } = createState()

setState('foo')
console.log(getState())`

export const zhql = `function createState() {
  let state: number

  function getState() {
    return state
  }

  function setState(x: number) {
    state = x
  }

  return { getState, setState }
}

const { getState, setState } = createState()

setState('foo')
console.log(getState())`
