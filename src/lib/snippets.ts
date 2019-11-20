export const bfka = `// We want to modify createState() to support
// creating two different states:

// One that only allows numbers, and…
const numState = createState()
numState.setState(1)
console.log(numState.getState()) // 1

// The other that only allows strings.
const strState = createState()
strState.setState('foo')
console.log(strState.getState()) // foo`

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

export const qqic = `// Doesn't work because the created state…
const numAndStrState = createState()

// Supports both numbers…
numAndStrState.setState(1)
console.log(numAndStrState.getState())

// And strings.
numAndStrState.setState('foo')
console.log(numAndStrState.getState())

// This is NOT what we want. We want to create
// a number-only state, and a string-only state.`

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

export const ystu = `function createState() {
  let state: number | string

  function getState() {
    return state
  }

  function setState(x: number | string) {
    state = x
  }

  return { getState, setState }
}`

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
